/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';

import Form from './Form';
import './Main.css';
import Tasks from './Tasks';

export default class Main extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    newTask: ' ',
    tasks: [],
    index: -1,
  };

  componentDidMount() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));

    if (!tasks) return;

    this.setState({
      tasks,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { tasks } = this.state;
    if (tasks === prevState.tasks) return;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // Função para cuidar do onSubmit no formulário
  handleSubmit = (e) => {
    e.preventDefault();
    const { tasks, index } = this.state;
    let { newTask } = this.state;
    // Tirando os espaços em brancos que tiver no input
    newTask = newTask.trim();

    // Se a tarefa já existir, não será mostrada
    if (tasks.indexOf(newTask) !== -1) return;

    // Setando o state da tarefa
    const newTasks = [...tasks];

    if (index === -1) {
      this.setState({
        tasks: [...newTasks, newTask],
        newTask: '',
      });
    } else {
      newTasks[index] = newTask;

      this.setState({
        tasks: [...newTasks],
        index: -1,
      });
    }
  };

  handleChange = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  };

  handleEdit = (e, index) => {
    const { tasks } = this.state;
    this.setState({
      // eslint-disable-next-line react/no-unused-state
      index,
      newTask: tasks[index],
    });
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

        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          newTask={newTask}
        />

        <Tasks
          tasks={tasks}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}
