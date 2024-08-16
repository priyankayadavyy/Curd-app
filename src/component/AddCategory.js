import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import imageLogo from "../assets/digital_camera_photo-1080x675.jpg";
import loader from "../assets/ZZ5H.gif";

const AddCategory = () => {
  const [category, setCategory] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(imageLogo);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState("");

  let navigate = useNavigate();

  const FileSystemHandle = (e) => {
    setSelectedFile(e.target.files[0]);
    setImageUrl(URL.createObjectURL(e.target.files[0]));
  };
  const submitHandler = (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("name", category);
    formData.append("photo", selectedFile);

    axios
      .post("http://www.localhost:3000/category", formData, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res);
        setLoading(false);
        navigate("/category");
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
        setHasError(true);
        setError(err.message);
      });
  };
  return (
    <>
      <div className="container my-4">
        {isLoading && (
          <div>
            <img style={{ width: "100px" }} src={loader} />
          </div>
        )}
        <h2 className="text-center mb-4">Add Product</h2>
        {!isLoading && (
          <div>
            <div className="row mb-3">
              <div className="col">
                <Link className="btn btn-primary me-1" to="*" role="button">
                  Create Product
                </Link>
                <button type="button" className="btn btn-outline-primary">
                  Refresh
                </button>
              </div>
            </div>
            <form onSubmit={submitHandler}>
              <table className="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Action</th>
                    <th>Image</th>
                  </tr>
                </thead>
                <thead>
                  <tr>
                    <th>
                      <input
                        onChange={(e) => {
                          setCategory(e.target.value);
                        }}
                        type="text"
                      />
                    </th>
                    <th>
                      <input
                        onChange={(e) => {
                          FileSystemHandle(e);
                        }}
                        type="file"
                      />
                    </th>
                    <th>
                      <button
                        type="submit"
                        className="btn btn-primary me-1"
                        role="button"
                      >
                        Submit
                      </button>
                    </th>
                    <th>
                      <img style={{ width: "80px" }} src={imageUrl} />
                    </th>
                  </tr>
                </thead>
              </table>
            </form>
          </div>
        )}

        {hasError && (
          <div>
            <p style={{ color: "red" }}>Error:- {error}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default AddCategory;
