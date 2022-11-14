// 1. "type": "commonjs", older require & module.exports syntax
// 2. "type": "module",  to support latest import & export syntax

// const express = require("express");
import express from "express";
import { MongoClient } from "mongodb";
const app = express();
import * as dotenv from 'dotenv';
dotenv.config()

console.log(process.env)

const PORT = 4000;

const movies = [
  {
    id: "99",
    name: "Vikram",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
    rating: 8.4,
    summary:
      "Members of a black ops team must track and eliminate a gang of masked murderers.",
    trailer: "https://www.youtube.com/embed/OKBMCL-frPU",
  },
  {
    id: "100",
    name: "RRR",
    poster:
      "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
    rating: 8.8,
    summary:
      "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
    trailer: "https://www.youtube.com/embed/f_vbAtFSEc0",
  },
  {
    id: "101",
    name: "Iron man 2",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
    rating: 7,
    summary:
      "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
    trailer: "https://www.youtube.com/embed/wKtcmiifycU",
  },
  {
    id: "102",
    name: "No Country for Old Men",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
    rating: 8.1,
    summary:
      "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
    trailer: "https://www.youtube.com/embed/38A__WT3-o0",
  },
  {
    id: "103",
    name: "Jai Bhim",
    poster:
      "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
    summary:
      "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
    rating: 8.8,
    trailer: "https://www.youtube.com/embed/nnXpbTFrqXA",
  },
  {
    id: "104",
    name: "The Avengers",
    rating: 8,
    summary:
      "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
    poster:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
    trailer: "https://www.youtube.com/embed/eOrNdBpGMv8",
  },
  {
    id: "105",
    name: "Interstellar",
    poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
    rating: 8.6,
    summary:
      "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
    trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
  },
  {
    id: "106",
    name: "Baahubali",
    poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
    rating: 8,
    summary:
      "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
    trailer: "https://www.youtube.com/embed/sOEg_YZQsTI",
  },
  {
    id: "107",
    name: "Ratatouille",
    poster:
      "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
    rating: 8,
    summary:
      "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
    trailer: "https://www.youtube.com/embed/NgsQ8mVkN8w",
  },
];

// Mongo DB connection to Node:
// const MONGO_URL = "mongodb://127.0.0.1";
const MONGO_URL = process.env.MONGO_URL;
const client = new MongoClient(MONGO_URL); // phone dial
// top-level await
await client.connect(); //call button  // to use this await need to put code in package.json as "type": "module".
console.log("Mongo is connected ✌️😊");

// express.json()  - is inbuild middleware | it convert datas to JSON
app.use(express.json());

app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊✨🤩 Hi this is Kalai one, it is pretty nice");
});

app.get("/movies", async function (request, response) {
  //db.movies.find({name:"Vikram", language: "Tamil"})
  //converting string datatype to Number datatype
  if(request.query.rating){
    request.query.rating = +request.query.rating;
  }
  const mov = await client.db("b39wd").collection("movies").find(request.query).toArray();

console.log(request.query)
  response.send(mov);
});

app.get("/movies/:id", async function (request, response) {
  const { id } = request.params;

  // console.log(id)
  // const movie = movies.find((mv) => mv.id == id);
  const movie = await client
    .db("b39wd")
    .collection("movies")
    .findOne({ id: id });

  movie
    ? response.send(movie)
    : response.status(404).send({ msg: "Movie not found" });
});

// Add datas:

app.post("/movies", async function (request, response) {
  const data = request.body;
  console.log(data);
  const result = await client.db("b39wd").collection("movies").insertMany(data);

  response.send(result);
});

app.delete("/movies/:id", async function (request, response) {
  const { id } = request.params;
  // db.movies.deleteOne({ id : "101"})

  const result = await client
    .db("b39wd")
    .collection("movies")
    .deleteOne({ id: id });
    console.log(result);

    result.deletedCount > 0
    ? response.send({msg : "Movie was deleted successfully"})
    : response.status(404).send({ msg: "Movie not found" });
});

app.put("/movies/:id", async function (request, response) {
  const { id } = request.params;
  const data = request.body;
  console.log(data);

  const result = await client
    .db("b39wd")
    .collection("movies")
    .updateOne({ id: id }, { $set : data });
    console.log(result);

  result
    ? response.send(result)
    : response.status(404).send({ msg: "Movie not found" });
});

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
