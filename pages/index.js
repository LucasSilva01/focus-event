import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className = {styles.navbar}>
      <a href = "#">Home</a>
      <a href = "#">Eventos</a>
      <a href = "#">Produtores</a>
      <a href = "#">Ajude-me</a>
        
      <div className = {styles.button}>
        <span class = "button"><a href = "#">Login</a></span>
      </div>
      
      <div className = {styles.login}>
        <a href = "#">Cadastre-se</a>
      </div>
    </div>
  )
}
