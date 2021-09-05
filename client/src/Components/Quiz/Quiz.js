import React from "react";
import "./Quiz.css";
import { useParams } from "react-router";

const Quiz = () => {
  const { qId, name } = useParams();
  return <div>{qId + name}</div>;
};

export default Quiz;
