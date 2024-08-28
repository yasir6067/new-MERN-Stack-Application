import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`https://new-mern-stack-application.onrender.com/books/${id}`)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        alert("An error happened. Please check the console.");
        console.log(error);
      });
  };

  return (
    <div className="container my-5">
      <BackButton />
      <h1 className="text-center my-4">Delete Book</h1>
      {loading && <Spinner />}
      <div className="card mx-auto shadow-sm p-4 text-center" style={{ maxWidth: "600px" }}>
        <h3 className="text-danger">Are you sure you want to delete this book?</h3>
        <button className="btn btn-danger w-100 mt-3" onClick={handleDeleteBook}>
          Yes, Delete it
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;
