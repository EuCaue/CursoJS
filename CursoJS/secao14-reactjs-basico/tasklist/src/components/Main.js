/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';

// Form
// eslint-disable-next-line import/no-duplicates
import { FaPlus } from 'react-icons/fa';

// Tasks
// eslint-disable-next-line import/no-duplicates
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './Main.css';

export default class Main extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    newTask: ' ',
    tasks: [],
  };

  // Função para cuidar do onSubmit no formulário
  handleSubmit = (e) => {
    e.preventDefault();
    const { tasks } = this.state;
    let { newTask } = this.state;
    // Tirando os espaços em brancos que tiver no input
    newTask = newTask.trim();

    // Se a tarefa já existir, não será mostrada
    if (tasks.indexOf(newTask) !== -1) return;

    // Setando o state da tarefa
    const newTasks = [...tasks];
    this.setState({
      tasks: [...newTasks, newTask],
    });
  };

  handleChange = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  };

  handleEdit = (e, index) => {
    console.log('Edit', index);
  };

  // 
  handleDelete = (e, index) => {
    const { tasks } = this.state;
    const newTasks = [...tasks];
    newTasks.splice(index, 1);

    this.setState({
      tasks: [...newTasks],
    });
  };

  // Renderizando a task list
  render() {
    // Desestruturando o state
    const { newTask, tasks } = this.state;

    return (
      <div className="main">
        <h1>Lista de tarefas</h1>
        <form onSubmit={this.handleSubmit} action="#" className="form">
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="Digite Aqui"
            value={newTask}
          />
          <button type="submit">
            <FaPlus />
          </button>
        </form>

        {/* Criando a ul e as li's, com as tasks dentro dela */}
        <ul className="tasks">
          {tasks.map((task, index) => (
            <li key={task}>
              {task}
              <span>
                {/* edit && delete icon */}
                <FaEdit onClick={(e) => this.handleEdit(e, index)} className="edit" />

                <FaWindowClose onClick={(e) => this.handleDelete(e, index)} className="delete" />
              </span>
            </li>
          ))}
        </ul>

      </div>
    );
  }
}
