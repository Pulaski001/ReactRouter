// src/components/MovieList.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MovieCard from './MovieCard';
import { movies } from './data/movies';
import './MovieList.css'; // Import the custom CSS for MovieList

function MovieList() {
  return (
    <Container className="mt-5">
      <Row>
        {movies.map((movie, index) => (
          <Col md={4} sm={6} xs={12} key={index} className="mb-4">
            <MovieCard movie={movie} index={index} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default MovieList;
