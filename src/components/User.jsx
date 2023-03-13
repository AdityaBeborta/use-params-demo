import React from "react";
import { useParams } from "react-router-dom";
const User = ({ match }) => {
  const { name } = useParams();
  return <div>current user is {name}</div>;
};

export default User;
