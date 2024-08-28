import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";



const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://new-mern-stack-application.onrender.com/books")
      .then((response) => {
        setBooks(response.data || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setBooks([]);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container my-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Books List</h1>
        <Link to="/books/create" className="btn btn-primary">
          <MdOutlineAddBox className="me-2" />
          Add Book
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th className="d-none d-md-table-cell">Author</th>
              <th className="d-none d-md-table-cell">Publish Year</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {books.length > 0 ? (
              books.map((book, index) => (
                <tr key={book._id}>
                  <td>{index + 1}</td>
                  <td>{book.title}</td>
                  <td className="d-none d-md-table-cell">{book.author}</td>
                  <td className="d-none d-md-table-cell">{book.publishYear}</td>
                  <td>
                    <div className="d-flex justify-content-around">
                      <Link
                        to={`/books/details/${book._id}`}
                        className="btn btn-success btn-sm"
                      >
                        <BsInfoCircle />
                      </Link>
                      <Link
                        to={`/books/edit/${book._id}`}
                        className="btn btn-warning btn-sm"
                      >
                        <AiOutlineEdit />
                      </Link>
                      <Link
                        to={`/books/delete/${book._id}`}
                        className="btn btn-danger btn-sm"
                      >
                        <MdOutlineDelete />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  No books available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Home;
