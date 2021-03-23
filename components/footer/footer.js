import Image from 'next/image'
import styles from '../../styles/Home.module.css'


function Footer(){
    return(
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
    )
}

export default Footer