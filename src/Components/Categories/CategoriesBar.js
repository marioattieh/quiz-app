import React, { useState } from "react";
import useFetch from "../useFetch";
import "./Categories.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Ring } from "react-spinners-css";

const CategoriesBar = () => {
  const { data, isPending, error } = useFetch(
    "http://localhost:8000/categories"
  );
  const [queue, setQueue] = useState([]);
  const [end, setEnd] = useState(true);
  const handleScroll = (e) => {
    const right =
      Math.abs(e.target.scrollHeight - e.target.scrollLeft) ===
      e.target.clientHeight;
    const left =
      Math.abs(e.target.scrollWidth - e.target.scrollLeft) ===
      e.target.clientWidth;
    setEnd(right || left);
  };
  const scrollLeft = () => {
    let t = 400 * queue.length;
    setTimeout(() => {
      document.getElementById("cont").scrollBy({
        left: -420,
        behavior: "smooth",
      });
      setQueue((prev) => {
        let curr = prev;
        curr.pop();
        return curr;
      });
    }, t);
  };
  const scrollRight = () => {
    let t = 400 * queue.length;
    setTimeout(() => {
      document.getElementById("cont").scrollBy({
        left: +420,
        behavior: "smooth",
      });
      setQueue((prev) => {
        let curr = prev;
        curr.pop();
        return curr;
      });
    }, t);
  };
  return (
    <div id="cont" className="cat-container" onScroll={handleScroll}>
      {isPending && <Ring size={300} />}
      {error && <div>{error}</div>}
      {data &&
        data.map(({ id, title, body, number }) => {
          return (
            <div className="horizontal-scroll" key={id}>
              <h2 className="cat-title">{title}</h2>
              <p className="cat-body">{body}</p>
              <p className="cat-number">{"Number of quizzes: " + number}</p>
            </div>
          );
        })}
      {data && (
        <ArrowForwardIosIcon
          onClick={() => {
            setQueue((prev) => {
              let curr = prev;
              curr.push("1");
              return end ? [] : curr;
            });
            scrollRight();
          }}
          className="arrow-for"
        />
      )}
      {data && (
        <ArrowBackIosIcon
          onClick={() => {
            setQueue((prev) => {
              let curr = prev;
              curr.push("1");
              return end ? [] : curr;
            });
            scrollLeft();
          }}
          className="arrow-back"
        />
      )}
    </div>
  );
};

export default CategoriesBar;
