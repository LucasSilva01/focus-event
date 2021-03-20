import styles from '../styles/Home.module.css'
import Head from 'next/head';
import Image from 'next/image'
import register from './register'
import events from './events'
import login from './login'
import Mapa from '../components/map'
import Nav from '../components/navbar'

function registerEvent(){
    return(
      <div className = {styles.backG}>
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
        <div className = {styles.configLogo}>
          <a >
          <Image src="/../public/focus.png"
            
          width={270}
          height={100}
            
          />
          </a>
        </div>

        <div className = {styles.registerEventForm}>
        <form className = {styles.form}>
          <fieldset className = {styles.fieldset}>
            <div className = {styles.registerEventItens}>
              <legend className = {styles.legend}>Cadastrar um Evento</legend>

              <label>Nome: </label>
              <input placeholder="Nome do evento" type="text"></input>
              <br></br>
              <br></br>

              <label>Endereço: </label>
              <br></br>
              <label>Rua: </label>
              <input placeholder="Ex.: Rua dos bobos" type="text"></input>
              <br></br>
              <label>Número: </label>
              <input placeholder="Número do endereço" type="number"></input>
              <br></br>
              <label>Local: </label>
              <input placeholder="Nome do local" type="text"></input>
              <br></br>
              <label>Cidade: </label>
              <input placeholder="Cidade do evento" type="text" maxlength="30"></input>
              <br></br>
              <label>Estado: </label>
              <input placeholder="Estado do evento" type="text" maxlength="30"></input>
              <br></br>
              <br></br>

              <label>Tipo: </label>
              <input placeholder="Tipo do evento" type="text"></input>
              <br></br>
              <br></br>

              <label>Data</label>
              <input placeholder="Data do evento" type="date"></input>
              <br></br>
              <br></br>

              <div className = {styles.buttonSubmit}>
                <button className = {styles.buttonSubmit}type = "submit">Cadastrar</button>
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

export default registerEvent
