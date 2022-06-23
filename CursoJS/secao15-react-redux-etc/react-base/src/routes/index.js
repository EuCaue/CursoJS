/* eslint-disable no-unused-vars */
// Routes File
// Import's
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';

import Login from '../pages/Login';
import Page404 from '../pages/Page404';
import MyRoute from './myRoute';

export default function Router() {
  return (
    <Routes>
      {/* Home Path */}
      <Route exact path="/" element={<Home />} />

      {/* If user is allowed, go to login page, if not, go to home */}
      <Route exact path="/login" element={<MyRoute />}>
        <Route exact path="/login" element={<Login />} />
      </Route>

      {/* Page404 */}
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
