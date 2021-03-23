import Image from 'next/image'
import styles from '../css/Home.module.css'

function navbar(){
    return(
            <div >
                <div className = {styles.navbar}>
                <a href = "/"><Image src="/../public/house-png-190.png"
                    width={40}
                    height={40}
                    />
                </a>
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
    )
}

export default navbar