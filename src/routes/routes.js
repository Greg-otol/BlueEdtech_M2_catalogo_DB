const routes = require("express").Router();
const bookController = require("../controllers/bookController");

routes.get("/", bookController.getAll);
routes.get("/register", bookController.register);
routes.get("/details/:id", bookController.details);
routes.post("/create", bookController.create);
routes.get("/update/:id", bookController.getUpdate);
routes.post("/update/:id", bookController.postUpdate)
routes.get("/delete/:id", bookController.remove);

module.exports = routes;