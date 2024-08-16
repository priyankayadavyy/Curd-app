import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [category, setCategory] = useState({});
  let params = useParams();
  console.log(params.id);
  useEffect(() => {
    axios
      .get("http://www.localhost:3000/category/" + params.id)
      .then((res) => {
        console.log(res.data.category);
        setCategory(res.data.category);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="container">
        <h1 className="text-center">Detail Of The Product</h1>
        <img style={{ width: "100px" }} src={category.photo} />
        <h1>{category.name}</h1>
      </div>
    </>
  );
};

export default Detail;
