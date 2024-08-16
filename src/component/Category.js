import axios from "axios";
import React, { useEffect, useState } from "react";
import loader from "../assets/ZZ5H.gif";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [isLoading, setLoading] = useState(false);
  //const [hasError, setHasError] = useEffect(false);
  //const [error, setError] = useState("");
  let navigate = useNavigate();

  const detailRoute = (id) => {
    navigate("/detail/" + id);
  };

  const editRoute = (id) => {
    navigate("/edit/" + id);
  };

  const deleteRoute = (id, imageUrl) => {
    if (window.confirm("are you sure ?")) {
      axios
        .delete(
          "http://www.localhost:3000/category?" +
            "id=" +
            id +
            "&imageUrl=" +
            imageUrl
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("cancel");
    }
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://www.localhost:3000/category", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setLoading(false);
        console.log(res.data.category);
        setCategoryList(res.data.category);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, []);

  return (
    <>
      {isLoading && (
        <div className="container">
          <img style={{ width: "100px" }} src={loader} />
        </div>
      )}
      {!isLoading && (
        <div className="container ">
          <h1 className="text-center">Category List</h1>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Image</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {categoryList?.map((data) => (
                <Row
                  key={data._id}
                  detailReq={detailRoute}
                  deleteReq={deleteRoute}
                  editReq={editRoute}
                  detail={data}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

const Row = (props) => {
  return (
    <tr>
      <td>{props.detail.name}</td>
      <td>
        <img style={{ width: "150px" }} src={props.detail.photo} />
      </td>
      <td>
        <button
          onClick={() => {
            props.editReq(props.detail._id);
          }}
          type="submit"
          className="btn btn-primary me-1"
          role="button"
        >
          Edit
        </button>
        <button
          onClick={() => {
            props.detailReq(props.detail._id);
          }}
          className="btn btn-primary me-1"
          type="submit"
          role="button"
        >
          Detail
        </button>
        <button
          onClick={() => {
            props.deleteReq(props.detail._id, props.detail.photo);
          }}
          role="button"
          className="btn btn-primary me-1"
          type="submit"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};
export default Category;
