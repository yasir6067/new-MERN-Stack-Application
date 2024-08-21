import { Book } from "../models/bookModel.js";

export const createBook = async (req,res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      res.status(400).send({
        message: "Fill all required fields : title , author , publishYear",
      });
    } else {
      const newBook = {
        title: req.body.title,
        author: req.body.author,
        publishYear: req.body.publishYear,
      };
      const book = await Book.create(newBook);
      return res.status(201).send(book);
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

// Get all Book from database

export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(200).send(books);
  } catch {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

// get one book

export const getOneBook = async (req,res) => {
  try {
    const id = req.params.id;
    const books = await Book.findById(id);
    res.status(200).send(books);
  } catch {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

//update a Book

export const updateBook = async (req,res) => {
  try {
    const id = req.params.id;
    const result = await Book.findByIdAndUpdate(id, req.body);
    if (!result) {
      res.status(404).send({ message: "Book not found" });
    } else {
      res.status(200).send({ message: "Book updated successfully" });
    }
  } catch {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

//delete a Book

export const deleteBook = async (req,res) => {
  try {
    const id = req.params.id;
    const result = await Book.findByIdAndDelete(id);
    if (!result) {
      res.status(404).send({ message: "Book not found" });
    } else {
      res.status(200).send({ message: "Book deleted successfully" });
    }
  } catch {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};
