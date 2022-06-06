// Necessário sempre que um novo modelo for criado adicionar no Array de models
import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/Aluno';
import Photo from '../models/Photo';
import User from '../models/User';

const models = [Aluno, User, Photo];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
