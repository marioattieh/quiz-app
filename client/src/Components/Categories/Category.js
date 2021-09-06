import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import { Ring } from "react-spinners-css";
import { Link } from "react-router-dom";

const Category = () => {
  const { catId, name } = useParams();
  const url = "http://localhost:5000/Quizzes/p" + catId;
  const { data, isPending, error } = useFetch(url);
  return (
    <div className="one-cat-container">
      {isPending && <Ring className="ring" size={200} />}
      {error && <div>{error}</div>}
      {data && <div className="one-cat-title">{name}</div>}
      {data &&
        data.map(({ _id, title, body }) => {
          return (
            <Link className="quiz-list" to={"/Quiz/" + _id + title} key={_id}>
              <div className="quiz-title">{title}</div>
              <div className="quiz-body">{body}</div>
            </Link>
          );
        })}
    </div>
  );
};

export default Category;
