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
      
      <div className = {styles.groupElements}>
        <div className = {styles.organize}>
          <a href = "#">Organizar evento</a>
        </div>
      </div>
      <div className = {styles.adjustForm}>
        <form className = {styles.form}>
          
          <fieldset className = {styles.fieldset}>
            
            <legend className = {styles.legend}>Localize um evento</legend>
            
            <label>Local: </label>
              <input type = "text"></input>
            <br></br>
            <label>Tipo do evento: </label>
              <input type = "text"></input>
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
    </div>
  )
}
