import Image from 'next/image'
import styles from '../../styles/Home.module.css'

function imgLogo(){
    return( 

        <header className = {styles.header}>
                <Image src="/../public/focus.png"
                    width={270}
                    height={100} 
                   
                                 
                    />
        </header>

    )
}

export default imgLogo