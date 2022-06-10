import React, { Component } from 'react';

import './Main.css';

export default class Main extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    newTask: ' ',
  };

  handleChange = (e) => {
    this.setState({
		newTask: e.target.value,
    });
  };

  render() {
    const { newTask } = this.state;

    return (
      <div className="main">
        <h1>Lista de tarefas</h1>
        <form action="#">
          <input onChange={this.handleChange} type="text" placeholder="Digite Aqui" />
          <button type="submit">Enviar</button>
        </form>
        <p>{newTask}</p>
      </div>
    );
  }
}
