import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Main } from '../Main/Main';
import { SavedNews } from '../SavedNews/SavedNews';
import Layout from '../Layout/Layout';

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/saved-news" element={<SavedNews />} />
        </Route>
      </Routes>
    </div>
  );
}

export { App };
