import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";



const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://new-mern-stack-application.onrender.com/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="container my-4">
      <BackButton />
      <h1 className="mb-4 text-center">Book Details</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="card p-4 shadow-sm">
          <div className="mb-3">
            <strong>ID:</strong> <span className="text-muted">{book._id}</span>
          </div>
          <div className="mb-3">
            <strong>Title:</strong> <span className="text-muted">{book.title}</span>
          </div>
          <div className="mb-3">
            <strong>Author:</strong> <span className="text-muted">{book.author}</span>
          </div>
          <div className="mb-3">
            <strong>Publish Year:</strong> <span className="text-muted">{book.publishYear}</span>
          </div>
          <div className="mb-3">
            <strong>Created At:</strong> <span className="text-muted">{new Date(book.createdAt).toLocaleString()}</span>
          </div>
          <div className="mb-3">
            <strong>Last Updated At:</strong> <span className="text-muted">{new Date(book.updatedAt).toLocaleString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
