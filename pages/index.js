import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <div className = {styles.navbar}>
        <a href = "#">Home</a>
        <a href = "#">Eventos</a>
        <a href = "#">Produtores</a>
        <a href = "#">Ajude-me</a>
          
        <div className = {styles.button}>
          <a href = "#">Login</a>
        </div>

        <div className = {styles.login}>
          <a href = "#">Cadastre-se</a>
        </div>
      </div>
      
      <div className = {styles.buttonSubmit}>
          <button className = {styles.buttonSubmit} href = "#">Organizar evento</button>
      </div>
      <div className = {styles.adjustForm}>
        <form className = {styles.form}>
          
          <fieldset className = {styles.fieldset}>
            
            <legend className = {styles.legend}>Localize um evento</legend>
            
            <label>Local: </label>
              <input placeholder="local do evento" type = "text"></input>
            <br></br>
            <label>Tipo do evento: </label>
              <input placeholder="Informe o tipo do evento." type = "text"></input>
            <br></br>
            <label>Data: </label>
              <input type="date"></input> 
            
            <br></br> 
            <div className = {styles.buttonSubmit}>
              <button className = {styles.buttonSubmit}type = "submit">Localizar</button>
            </div>
          </fieldset>
        </form>
      </div>
      <div className = {styles.footer}>
          <p>O Focus-Event é um projeto acadêmico avaliativo da disciplina de Programação Web, do curso de Sistemas de Informação.&nbsp;&nbsp;&nbsp;</p>

          <a href="https://github.com/LucasSilva01/focus-event"><img src="../images/logogithub.png" alt="Github do Projeto"></img></a>
      </div>
    </div>
  )
}
