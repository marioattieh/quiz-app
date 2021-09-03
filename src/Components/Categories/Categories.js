import React from "react";
import useFetch from "../useFetch";
import "./Categories.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const Categories = () => {
  const { data, isPending, error } = useFetch(
    "http://localhost:8000/categories"
  );
  return (
    <div className="cat-container">
      <ArrowBackIosIcon />
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data &&
        data.map(({ id, title, body, number }) => {
          return (
            <div className="horizontal-scroll" key={id}>
              <div>{title}</div>
              <div>{body}</div>
              <div>{number}</div>
            </div>
          );
        })}
      <ArrowForwardIosIcon />
    </div>
  );
};

export default Categories;
