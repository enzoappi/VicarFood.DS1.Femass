import React from 'react'
import Container from '../Container'
import './Cadastro.css'


const Cadastro = () => (

        <Container>
            <div className="contentCadastro">  
            
                <div id="cadastro">
                
                    <div method="post" action=""> 
                        <div className="cadastro">Cadastro</div> 

                        <p> 
                            <label for="email_cadastro">Seu e-mail</label>
                            <input id="email_cadastro" name="email_cadastro" required="required" type="text" placeholder="contato@vicarfood.com"/>
                        </p>
                        <p> 
                             <label for="senha_cadastro">Sua senha</label>
                             <input id="senha_cadastro" name="senha_cadastro" required="required" type="password" placeholder="1234" /> 
                         </p>
                         <p> 
                             <label for="confirma_senha_cadastro">Confirme sua senha</label>
                             <input id="confirma_senha_cadastro" name="confirma_senha_cadastro" required="required" type="password" placeholder="1234" /> 
                         </p>
                        <p> 
                             <input type="submit" value="Logar" /> 
                         </p>
                        </div>
                    </div>
                </div>
         
        </Container>
       
    
)


export default Cadastro