import { DataSource } from 'typeorm';
import { getTypeOrmConfig } from './src/config/database.config';

const config = getTypeOrmConfig();
export default new DataSource(config);