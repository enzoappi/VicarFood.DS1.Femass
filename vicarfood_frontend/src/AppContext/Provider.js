import React from 'react';
import AppContext from './Context';

const AppProvider = ({ children }) => {
    return (
        <AppContext.Provider value={{ user: 'DEV', cpf: '123654789-00'}}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;