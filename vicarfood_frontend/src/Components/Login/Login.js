import React from 'react'
import Container from '../Container'
import './Login.css'


const Login = () => (

        <Container>
            <div className="content">  
                <div id="login">
                    <div method="post" action=""> 
                        <div className="login">Login</div> 
                        <p> 
                            <label for="email_login">Seu e-mail</label>
                            <input id="email_login" name="email_login" required="required" type="text" placeholder="contato@htmlecsspro.com"/>
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

      /*<div id="cadastro">
        <form method="post" action=""> 
          <h1>Cadastro</h1> 
          
          <p> 
            <label for="nome_cad">Seu nome</label>
            <input id="nome_cad" name="nome_cad" required="required" type="text" placeholder="Luiz Augusto" />
          </p>
          
          <p> 
            <label for="email_cad">Seu e-mail</label>
            <input id="email_cad" name="email_cad" required="required" type="email" placeholder="contato@htmlecsspro.com"/> 
          </p>
          
          <p> 
            <label for="senha_cad">Sua senha</label>
            <input id="senha_cad" name="senha_cad" required="required" type="password" placeholder="1234"/>
          </p>
          
          <p> 
            <input type="submit" value="Cadastrar"/> 
          </p>
          
          <p class="link">  
            Já tem conta?
            <a href="#paralogin"> Ir para Login </a>
          </p>
        </form>
      </div>*/