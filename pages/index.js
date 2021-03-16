import styles from '../styles/Home.module.css'
import Head from 'next/head';
import register from './register'
import events from './events'
import login from './login'


export default function Home() {
  return (
    <div>
      <title>Focus Event</title>
      <Head>
        <div className = {styles.navbar}>
          
          <a href = "/">Home</a>
          <a href = "/events">Eventos</a>
          <a href = "#">Produtores</a>
          <a href = "#">Ajude-me</a>
          
          <div className = {styles.button}>
            <a href = "/login">Login</a>
          </div>

          <div className = {styles.login}>
            <a href = "/register">Cadastre-se</a>
          </div>
        </div>
      </Head>
      <div>
          <a className = {styles.card} href = "#">Organizar evento</a>
      </div>
      
      <div className = {styles.footer}>
          <p>O Focus-Event é um projeto acadêmico avaliativo da disciplina de Programação Web, do curso de Sistemas de Informação.&nbsp;&nbsp;&nbsp;</p>

          <a href="https://github.com/LucasSilva01/focus-event"><img src="../images/logogithub.png" alt="Github do Projeto"></img></a>
      </div>
    </div>
  )
}
