import styles from '../styles/Home.module.css'


function form(){
return(
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
    )
}

export default form