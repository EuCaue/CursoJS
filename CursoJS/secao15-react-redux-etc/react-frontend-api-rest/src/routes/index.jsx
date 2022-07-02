/* eslint-disable no-unused-vars */
// Routes File
// Import's
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Page404 from '../pages/Page404';
import PrivateRoute from './PrivateRoute';
import Student from '../pages/Student';
import Students from '../pages/Students';
import Photos from '../pages/Photos';
import Register from '../pages/Register';
import Login from '../pages/Login';

export default function Router() {
  return (
    <Routes>
      {/* Home Path */}
      <Route exact path="/" element={<Students />} />

      {/* If user is allowed, go to login page, if not, go to home */}
      <Route exact path="/aluno/:id/edit" element={<PrivateRoute />}>
        <Route exact path="/aluno/:id/edit" element={<Student />} />
      </Route>

      <Route exact path="/aluno/" element={<PrivateRoute />}>
        <Route exact path="/aluno/" element={<Student />} />
      </Route>

      <Route exact path="/fotos/" element={<PrivateRoute />}>
        <Route exact path="/fotos/:id" element={<Photos />} />
      </Route>

      <Route exact path="/register/" element={<PrivateRoute Open />}>
        <Route exact path="/register/" element={<Register />} />
      </Route>

      <Route exact path="/login/" element={<PrivateRoute Open />}>
        <Route exact path="/login/" element={<Login />} />
      </Route>

      {/* Page404 */}
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
