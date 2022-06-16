/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import './Tasks.css';

import { FaEdit, FaWindowClose } from 'react-icons/fa';

// Função que cria a UL de tarefas
export default function Tasks({ tasks, handleEdit, handleDelete }) {
  return (
    <ul className="tasks">
      {tasks.map((task, index) => (
        <li key={task}>
          {task}
          <span>
            {/* edit && delete icon */}
            <FaEdit onClick={(e) => handleEdit(e, index)} className="edit" />

            <FaWindowClose onClick={(e) => handleDelete(e, index)} className="delete" />
          </span>
        </li>
      ))}
    </ul>
  );
}

Tasks.propTypes = {
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
};
