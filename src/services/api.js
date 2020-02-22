// Conexão com serviços externos

import axios from   'axios';

// http://127.0.0.1:8000/api/v1/categories
const api = axios.create({ baseURL: 'http://127.0.0.1:8000/api/v1' });

export default api;