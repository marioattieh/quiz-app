import React from "react";
import useFetch from "../useFetch";
import "./Categories.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const Categories = () => {
  const { data, isPending, error } = useFetch(
    "http://localhost:8000/categories"
  );
  const scrollLeft = () => {
    document.getElementById("cont").scrollBy({
      left: -400,
      behavior: "smooth",
    });
  };
  const scrollRight = () => {
    document.getElementById("cont").scrollBy({
      left: +400,
      behavior: "smooth",
    });
  };
  return (
    <div id="cont" className="cat-container">
      {isPending && <div></div>}
      {error && <div>{error}</div>}
      {data &&
        data.map(({ id, title, body, number }) => {
          return (
            <div className="horizontal-scroll" key={id}>
              <h2 className="cat-title">{title}</h2>
              <p className="cat-body">{body}</p>
              <p className="cat-number">{"Number of quizzes: " + number}</p>
              <ArrowForwardIosIcon
                onClick={() => scrollRight()}
                className="arrow-for"
              />
              <ArrowBackIosIcon
                onClick={() => scrollLeft()}
                className="arrow-back"
              />
            </div>
          );
        })}
    </div>
  );
};

export default Categories;
