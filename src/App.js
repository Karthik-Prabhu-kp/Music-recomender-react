import React, { useState } from "react";
import "./styles.css";

const musicDB = {
  Alternate: [
    {
      name: "Artic monkeys",
      rating: "Rating:5/5",
      topsongs: "Top songs: Do i want to know, Arabella, Four out of Five.",
      art:
        "https://upload.wikimedia.org/wikipedia/en/0/04/Arctic_Monkeys_-_AM.png"
    },
    {
      name: "Tame Impala",
      rating: "Rating:4/5",
      topsongs:
        "Top songs: The Less I Know the Better, Let It Happen, Elephant."
    }
  ],

  Rap: [
    {
      name: "Logic",
      rating: "Rating:5/5",
      topsongs: "Top songs: Under Pressure, Metropolis, Fade Away"
    },
    {
      name: "Eminem",
      rating: "Rating:4.5/5",
      topsongs: "Top songs: Lose Yourself, Stan, Without Me "
    }
  ],
  VocalJazz: [
    {
      name: "Frank Sinatra",
      rating: "Rating:5/5",
      topsongs: "Fly me to the moon, My way, My funny valentine"
    },
    {
      name: "Louis Armstrong",
      rating: "Rating:5/5",
      topsongs:
        "What a wonderful world, La vie en rose, Dream a little dream of Me "
    }
  ]
};

export default function App() {
  const [genre, setGenre] = useState("Alternate");

  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1 class="text5">Music recomendations</h1>
      <p class="text6">
        <span>🎧</span>Checkout my Favourite artists and some of their best
        songs below<span>🎧</span>
      </p>

      <div>
        {Object.keys(musicDB).map((genre) => (
          <button class="btn" onClick={() => genreClickHandler(genre)}>
            {genre}
          </button>
        ))}
      </div>

      <hr></hr>
      <div class="container">
        <ul class="list">
          {musicDB[genre].map((music) => (
            <li class="list-item" key={music.name}>
              <div class="text1">{music.name}</div>
              <div class="text2">{music.rating}</div>
              <div class="text3">{music.topsongs}</div>
            </li>
          ))}
        </ul>
      </div>

      <footer>
        <p class="text4"> below are some of my spoify playlists.</p>
        <button class="btn">
          <a href="https://open.spotify.com/playlist/37i9dQZF1EM3liWnY4n3Mk">
            My Top songs of 2020
          </a>
        </button>

        <button class="btn">
          <a href="https://open.spotify.com/playlist/4VGZWkVo3xkSGQAKD172Lb">
            drive playlist
          </a>
        </button>
      </footer>
    </div>
  );
}
