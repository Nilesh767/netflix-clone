import React, { useState } from "react";
import { Checkbox } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import { save, selectWatchList, setCheck } from "../../features/listSlice";

import "./WatchList.css";
import Nav from "../../Components/UI/NavBar/Nav";

const WatchList = () => {
  const [input, setInput] = useState("");
  const watchList = useSelector(selectWatchList);
  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch(
      save({
        item: input,
        done: false,
        id: Date.now(),
      })
    );
  };

  return (
    <div className="watchList">
      <Nav />
      <div className="watchList__container">
        <div className="watchList__listContainer">
          <h1>WatchList</h1>
          {watchList.map((item) => (
            <div className="watchList__item" key={item.id}>
              <Checkbox
                checked={item.done}
                color="primary"
                onChange={() => dispatch(setCheck(item.id))}
              />
              <p className={item.done && "watchList__item--done"}>
                {item.item}
              </p>
            </div>
          ))}
        </div>
        <div className="watchList__input">
          <input
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <button onClick={addItemHandler} type="submit">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default WatchList;
