import React from 'react'
import Container from '../Container'
import './Login.css'


const Login = () => (

        <Container>
            <div className="contentLogin">  
                <div id="login">
                    <div method="post" action=""> 
                        <div className="login">Login</div> 
                        <p> 
                            <label for="email_login">Seu e-mail</label>
                            <input id="email_login" name="email_login" required="required" type="text" placeholder="contato@vicarfood.com"/>
                        </p>
                        <p> 
                             <label for="senha_login">Sua senha</label>
                             <input id="senha_login" name="senha_login" required="required" type="password" placeholder="1234" /> 
                         </p>
                        <p> 
                             <input type="checkbox" name="manterlogado" id="manterlogado" value="" /> 
                            Manter-me logado
                         </p>
                        <p> 
                             <input type="submit" value="Logar" /> 
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
export default Login
