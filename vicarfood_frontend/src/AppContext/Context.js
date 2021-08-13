import { createContext } from 'react';

const AppContext = createContext({
    usuario: null,
    cpf_busca: null,
});

export default AppContext;