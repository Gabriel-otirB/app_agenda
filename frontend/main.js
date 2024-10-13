import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Login from './modules/Login';

//Index Login and Create
const login = new Login('.form-login');
const cadastro = new Login('.form-cadastro');

//Contato Create and Update
const cadastrarContato = new Cadastro('.form-cadastrar')
const editarContato = new Cadastro('.form-editar')

login.init();
cadastro.init();
cadastrarContato.init();
editarContato.init();

import './assets/css/style.css';
import Cadastro from './modules/Contato';

