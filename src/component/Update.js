import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import imageLogo from "../assets/digital_camera_photo-1080x675.jpg";
import loader from "../assets/ZZ5H.gif";

const Update = () => {
  const [category, setCategory] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(imageLogo);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState("");

  let navigate = useNavigate();
  let params = useParams();
  console.log(params.id);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://www.localhost:3000/category/" + params.id)
      .then((res) => {
        setLoading(false);
        setHasError(false);
        console.log(res.data.category);
        setCategory(res.data.category.name);
        setImageUrl(res.data.category.photo);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setHasError(false);
        setError(err);
      });
  }, []);

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
      .put("http://www.localhost:3000/category/" + params.id, formData)
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        navigate("/");
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
        <h2 className="text-center mb-4">Edit Product</h2>
        {!isLoading && (
          <div>
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
                        value={category}
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
                        Update Category
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

export default Update;
