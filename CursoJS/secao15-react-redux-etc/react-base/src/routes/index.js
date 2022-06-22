/* eslint-disable no-unused-vars */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';

import Login from '../pages/Login';
import Page404 from '../pages/Page404';
import MyRoute from './myRoute';

export default function Router() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />

      <Route exact path="/login" element={<MyRoute />}>
        <Route exact path="/login" element={<Login />} />
      </Route>

      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
