/* eslint-disable no-unused-vars */
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Page404 from '../pages/Page404';
import MyRoute from './myRoute';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <MyRoute path="/login" element={<Login />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
