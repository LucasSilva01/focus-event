import styles from '../styles/Home.module.css'

import Image from 'next/image'
import register from './register'
import events from './events'
import login from './login'
import Mapa from '../components/map'
import Header from '../components/header/header'
import Navbar from '../components/navbar/navbar'

export default function Home() {
  return (
    <div>
      <Header/>
    
      <div className = {styles.backG}>
        <Navbar/>
        <div className = {styles.configLogo}>
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
    </div>
  )
}
