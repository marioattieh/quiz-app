import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import { Ring } from "react-spinners-css";
import { Link } from "react-router-dom";

const Category = () => {
  const { data, isPending, error } = useFetch(
    "http://localhost:8000/sub-categories"
  );
  const { catId, name } = useParams();
  return (
    <div className="one-cat-container">
      {isPending && <Ring className="ring" size={200} />}
      {error && <div>{error}</div>}
      {data && <div className="one-cat-title">{name}</div>}
      {data &&
        data.map(({ id, title, body, parentID }) => {
          return (
            parentID + "" === catId && (
              <Link
                className="quiz-list"
                to={"/Category/" + id + title}
                key={id}
              >
                <div className="quiz-title">{title}</div>
                <div className="quiz-body">{body}</div>
              </Link>
            )
          );
        })}
    </div>
  );
};

export default Category;
