import { Link } from 'react-router-dom';
import * as React from 'react';

export  function Main() {
  return (
    <>
      <h2>Welcome to the homepage!</h2>
      <p>You can do this, I believe in you.</p>
      <nav>
        <Link to="/saved-news">Saved Articles</Link>
      </nav>
    </>
  );
}

