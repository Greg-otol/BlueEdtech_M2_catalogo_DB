const res = require("express/lib/response");
const Book = require("../models/book");

const orderById = { order: [["id", "ASC"]] };
let message = "";

const getAll = async (req, res) => {
  try {
    setTimeout(() => {
      message = "";
    }, 1000);
    const books = await Book.findAll(orderById);
    res.render("index", { books, message });
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const register = (req, res) => {
  try {
    res.render("register");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const details = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    res.render("details", {
      book,
    });
  } catch (error) {
    res.send(error.message);
  }
};

const create = async (req, res) => {
  try {
    const book = req.body;
    await Book.create(book);
    message = "Livro cadastrado com sucesso!";
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const getUpdate = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);

    res.render("update", {
      book,
    });
  } catch (error) {
    res.send(error.message);
  }
};

const postUpdate = async (req, res) => {
  try {
    const { name, image, synopsis, author } = req.body;
    await Book.update(
      {
        name: name,
        image: image,
        synopsis: synopsis,
        author: author,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    message = "Livro atualizado com sucesso!";
    res.redirect("/");
  } catch (error) {
    res.send(error.message);
  }
};

const remove = async (req, res) => {
  try {
    await Book.destroy({ where: { id: req.params.id } });
    message = "Livro removido com sucesso!";
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

module.exports = {
  getAll,
  register,
  details,
  create,
  getUpdate,
  postUpdate,
  remove,
};
