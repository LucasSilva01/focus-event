import styles from '../styles/Home.module.css' 
import Head from 'next/head';
import Image from 'next/image'
import register from './register'
import events from './events'

function login(){
    return(
        <div className = {styles.backG} >
          <div >
          <div className = {styles.navbar}>
          <a href = "/"><Image src="/../public/house-png-190.png"
            width={40}
            height={40}
          /></a>
          <a href = "/events">Eventos</a>
          <a href = "#">Produtores</a>
          <a href = "#">Ajude-me</a>
          
          
          <div  className = {styles.button}>
            <a href = "/login"><Image src="/../public/loginButtou.png"
            width={40}
            height={40}
          
          /></a>
          </div>
          
         

          <div className = {styles.login}>
            <a href = "/register">Cadastre-se</a>
          </div>
        

          
          </div>
          </div>

          <div className = {styles.configLogo}>
            <a >
            <Image src="/../public/focus.png"
            
            width={270}
            height={100}
            
          />
            </a>
          </div>

          <div className = {styles.loginForm}>
            <form className = {styles.form}>
              <fieldset className = {styles.fieldset}>

                <div className = {styles.loginitens}>

                  <legend className = {styles.legend}>Login</legend>

                  <label>Username: </label>
                  <input placeholder="Digite seu nome de usuário" type="text"></input>
                  <br></br>

                  <label>Senha: </label>
                  <input placeholder="Digite sua senha" type="password"></input>

                  <div className = {styles.buttonSubmit}>
                  <button className = {styles.buttonSubmit}type = "submit">Entrar</button>
                  </div>
                </div>

              </fieldset>

            </form>
          </div>

          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className = {styles.footer}>

            <p>O Focus-Event é um projeto acadêmico avaliativo da disciplina de Programação Web, do curso de Sistemas de Informação.&nbsp;&nbsp;&nbsp;</p>
          
            <a href="https://github.com/LucasSilva01/focus-event">
            <Image
            src="/../public/logogithub.png"
            alt="GitHub do Projeto"
            width={76}
            height={76}
          
            /></a>
            <a className = {styles.card} href = "#">Organizar evento </a>
        </div>
      </div>
    )
}

export default login
