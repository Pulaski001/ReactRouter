// src/components/MovieDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { movies } from './data/movies';
import './MovieDetail.css'; // Import the custom CSS for MovieDetail

function MovieDetail() {
  const { id } = useParams();
  const movie = movies[id];

  if (!movie) return <p>Movie not found!</p>;

  return (
    <div className="container mt-5">
      <div className="movie-detail">
        <h1>{movie.title}</h1>
        <img src={movie.posterURL} alt={movie.title} className="movie-detail-img" />
        <p>{movie.description}</p>
        <div className="movie-trailer">
          <h3>Trailer</h3>
          <iframe
            width="100%"
            height="315"
            src={movie.trailerURL}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <Link to="/" className="btn btn-secondary mt-3">Back to Home</Link>
      </div>
    </div>
  );
}

export default MovieDetail;
