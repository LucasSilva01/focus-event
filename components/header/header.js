import Image from 'next/image'
import estilo from '../css/Home.module.css'

function imgLogo(){
    return( 

        <header className = {estilo.header}>
                <Image src="/../public/focus.png"
                    width={270}
                    height={100} 
                   
                                 
                    />
        </header>

    )
}

export default imgLogo