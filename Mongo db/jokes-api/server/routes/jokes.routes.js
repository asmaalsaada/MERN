const JokesController = require("../controllers/jokes.controllers");

module.exports = app => {
  app.get("/api/jokes/", JokesController.findAllJokes);
  app.get("/api/jokes/:id", JokesController.findOneSingleJoke);
  app.put("/api/jokes/update/:id", JokesController.updateExistingJoke);
  app.post("/api/jokes/new", JokesController.createNewJoke);
  app.get("/api/jokes/random", JokesController.getRandom);
  app.delete("/api/jokes/delete/:id", JokesController.deleteAnExistingJoke);
};