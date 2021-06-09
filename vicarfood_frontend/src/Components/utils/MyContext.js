import React, { useEffect, useState } from 'react'

export const UserContext = React.createContext({});

export const UserProvider = (props) => {
    const [usuario, setUsuario] = useState({
        email_login: '',
        senha_login: '',
        existe: false,
    });

    useEffect(() => {
        const userStorage = localStorage.getItem("usuario");
        if(userStorage) {
            setUsuario(JSON.parse(userStorage))
            console.log(userStorage)
        } else {
            setUsuario({
                email_login: "",
                senha_login: "",
            });
        }
    }, []);

    return (
        <UserContext.Provider value={{ usuario, setUsuario }}>
            { props.children }
        </UserContext.Provider>
    );
};

export const usuarioExport = () => React.useContext(UserContext);