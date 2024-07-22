// src/components/MovieCard.jsx
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MovieCard.css';

function MovieCard({ movie, index }) {
  return (
    <Card className="movie-card shadow-lg mb-4" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.posterURL} alt={movie.title} className="movie-card-img" />
      <Card.Body className="movie-card-body">
        <Card.Title className="movie-card-title">{movie.title}</Card.Title>
        <Card.Text className="movie-card-text">{movie.description}</Card.Text>
        <Link to={`/movie/${index}`} className="btn btn-primary">View Details</Link>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
