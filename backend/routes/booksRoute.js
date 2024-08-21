import express from "express";
const router = express.Router();
import validateBook from "../middlewares/validateBook.js"
import {
  createBook,
  getAllBooks,
  getOneBook,
  updateBook,
  deleteBook,
} from "../Controllers/booksController.js";

// Router for saving book to database

router.post("/", validateBook, createBook);

// Router for Get All Books from databse

router.get("/", getAllBooks);

//Router for get one book

router.get("/:id", getOneBook);

// Router for update a book

router.put("/:id", validateBook, updateBook);

// Router for delete a book

router.delete("/:id", deleteBook);

export default router;
