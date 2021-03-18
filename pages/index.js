import styles from '../styles/Home.module.css'
import Head from 'next/head';
import Image from 'next/image'
import register from './register'
import events from './events'
import login from './login'
import Mapa from '../components/map'

export default function Home() {
  return (
    <div>

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
        
        <div>
          <Mapa />
        </div>
 
          
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
