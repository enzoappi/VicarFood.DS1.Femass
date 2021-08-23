import React from 'react';
//import { useAuth } from '../../providers/authorize';
import Container from '../Container';
import './Login.css';

import { usuarioExport } from '../utils/MyContext'


//const Login = () => (
function Login() {
  
  const { usuario, setUsuario } = usuarioExport();
  //const { setUsuario } = usuarioExport();
  console.log(usuario);
  
  const handleLogin = () => {
    const usuario2 = {email_login: usuario.email_login, senha_login: usuario.senha_login, existe: true};
    console.log(usuario2);
    localStorage.setItem('usuario', JSON.stringify(usuario2))
    setUsuario(usuario2);
    console.log("LOGOU");
    console.log("user (original)");
    console.log(usuario);
  };
  
  return(
  <Container>
      <div className="content">  
          <div id="login">
              <div method="post" action=""> 
                  <div className="login">Login</div> 
                  <p> 
                      <label for="email_login">Seu e-mail</label>
                      <input id="email_login" name="email_login" required="required" type="text" placeholder="contato@htmlecsspro.com" onChange={(event) => setUsuario({email_login: event.target.value})} />
                  </p>
                  <p> 
                        <label for="senha_login">Sua senha</label>
                        <input id="senha_login" name="senha_login" required="required" type="password" placeholder="1234" onChange={(event) => setUsuario({ senha_login: event.target.value })} /> 
                    </p>
                  <p> 
                        <input type="checkbox" name="manterlogado" id="manterlogado" value="" /> 
                      Manter-me logado
                    </p>
                  <p> 
                        <input type="submit" value="Logar" onClick={ handleLogin } /> 
                    </p>
                  <p class="link">
                        Ainda não tem conta?
                        <a href="#paracadastro">Cadastre-se</a>
                    </p>
                  </div>
              </div>
          </div>
  </Container>
  )
//)
}


export default Login