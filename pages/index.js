import styles from '../styles/Home.module.css'

import Image from 'next/image'
import register from './register'
import events from './events'
import login from './login'
import Mapa from '../components/map'
import Header from '../components/header/header'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'

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
  
      
      </div>
      <Footer/>
    </div>
  )
}
