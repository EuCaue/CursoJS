import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Login from './assets/modules/Login';
import Contato from './assets/modules/Contato';

const cadastro = new Login('.formCadastro');
const login = new Login('.formLogin');
const contato = new Contato('.formContato');


login.init();
cadastro.init();
contato.init();

// import './assets/css/style.css';


