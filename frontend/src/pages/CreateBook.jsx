import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const CreateBooks = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post("http://localhost:5656/books", data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        alert("An error happened, please check the console.");
        console.log(error);
      });
  };

  return (
    <div className="container my-5">
      <BackButton />
      <h1 className="text-center my-4">Create Book</h1>
      {loading && <Spinner />}
      <div className="card mx-auto shadow-sm p-4" style={{ maxWidth: "600px" }}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            placeholder="Enter the book title"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="form-control"
            placeholder="Enter the author's name"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Publish Year</label>
          <input
            type="number"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="form-control"
            placeholder="Enter the publish year"
          />
        </div>

        <button
          className="btn btn-success w-100 mt-3"
          onClick={handleSaveBook}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateBooks;
