const Joke = require("../models/jokes.model"); 
module.exports.findAllJokes = (req, res) => {
  Joke.find()
    .then(allDaJokes => res.json({ jokes: allDaJokes }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};
module.exports.findOneSingleJoke = (req, res) => {
	Joke.findOne({ _id: req.params.id })
		.then(oneSingleJoke => res.json({ joke: oneSingleJoke }))
		.catch(err => res.json({ message: "couldn't find single", error: err }));
};
module.exports.createNewJoke = (req, res) => {
  Joke.create(req.body)
    .then(newJoke => res.json({ joke: newJoke }))
    .catch(err => res.json({ message: "couldn't create joke", error: err }));
};
module.exports.getRandom = (req, res) => {
    Joke.aggregate([{$sample:{size:1}}])
    // only works if the size of the collection exceeds 100
      .then(randomJoke => res.json({ joke: randomJoke }))
      .catch(err => res.json({ message: "couldn't get random", error: err }));
  };
module.exports.updateExistingJoke = (req, res) => {
  Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedJoke => res.json({ joke: updatedJoke }))
    .catch(err => res.json({ message: "couldn't update", error: err }));
};
module.exports.deleteAnExistingJoke = (req, res) => {
  Joke.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "couldn't delete", error: err }));
};