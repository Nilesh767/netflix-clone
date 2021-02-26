import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, subbed } from "../../../features/userSlice";
import { loadStripe } from "@stripe/stripe-js";
import db from "../../../Firebase/firebase";

import "./Plans.css";
import { toast } from "react-toastify";

const Plans = () => {
  const [products, setProducts] = useState([]);
  const [subscription, setSubcription] = useState(null);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    db.collection("customers")
      .doc(user?.uid)
      .collection("subscriptions")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach(async (subscriptions) => {
          setSubcription({
            role: subscriptions.data().role,
            current_period_end: subscriptions.data().current_period_end.seconds,
            current_period_start: subscriptions.data().current_period_start
              .seconds,
          });
        });
      });
  }, [user?.uid]);

  useEffect(() => {
    let userSub;
    subscription != null
      ? (userSub = dispatch(subbed(subscription.role)))
      : (userSub = dispatch(subbed(null)));
    return userSub;
  }, [dispatch, subscription]);

  useEffect(() => {
    db.collection("products")
      .where("active", "==", true)
      .get()
      .then((querySnapshot) => {
        const products = {};
        querySnapshot.forEach(async (productsDoc) => {
          products[productsDoc.id] = productsDoc.data();
          const priceSnap = await productsDoc.ref.collection("prices").get();
          priceSnap.docs.forEach((price) => {
            products[productsDoc.id].prices = {
              priceId: price.id,
              priceData: price.data(),
            };
          });
        });
        setProducts(products);
      });
  }, []);

  const loadCheckout = async (priceId) => {
    const docRef = await db
      .collection("customers")
      .doc(user.uid)
      .collection("checkout_sessions")
      .add({
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      });

    docRef.onSnapshot(async (snap) => {
      const { error, sessionId } = snap.data();

      if (error) {
        toast.error(`An error Occured: ${error.message}`);
      }

      if (sessionId) {
        const stripe = await loadStripe(
          "pk_test_51IMaabHYPjK6zOORpS7hNeKQ9BVGoBFySWWOXtMb2Hzw8mSUaPlwiB75AMjzWM7Pm4SEKtLD9tHyJaISkMA1KE0U00ptcjkmJT"
        );
        stripe.redirectToCheckout({ sessionId });
      }
    });
  };

  return (
    <div className="plans">
      {subscription && (
        <p>
          Renewal date:{" "}
          {new Date(
            subscription?.current_period_end * 1000
          ).toLocaleDateString()}
        </p>
      )}
      {Object.entries(products).map(([productId, productData]) => {
        const isCurrentPackage = productData.name
          ?.toLowerCase()
          .includes(subscription?.role);

        return (
          <div
            className={`${
              isCurrentPackage && "plans__plan-disabled"
            } plans__plan`}
            key={productId}
          >
            <div className="plan__info">
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>
            <button
              onClick={() =>
                !isCurrentPackage && loadCheckout(productData.prices.priceId)
              }
            >
              {isCurrentPackage ? "Current Plan" : "Subscribe"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Plans;
