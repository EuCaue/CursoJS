// Routes File 💬

// Global Imports 💬
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Local Imports 💬
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
      {/* All routes with <PrivateRoute /> needed Open, to be an open route 💬 */}
      {/* If user is allowed, go to children page, if not, is redirected to login page */}

      {/* Home Path */}
      <Route exact path="/" element={<Students />} />

      {/* Student  */}
      <Route exact path="/aluno/:id/edit" element={<PrivateRoute />}>
        <Route exact path="/aluno/:id/edit" element={<Student />} />
      </Route>
      <Route exact path="/aluno/" element={<PrivateRoute />}>
        <Route exact path="/aluno/" element={<Student />} />
      </Route>

      {/* Photos */}
      <Route exact path="/fotos/" element={<PrivateRoute />}>
        <Route exact path="/fotos/:id/" element={<Photos />} />
      </Route>

      {/* User */}
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
