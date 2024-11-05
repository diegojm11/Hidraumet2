import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import styles from './styles.module.css'
import BannerRamas from '../bannerRamas/bannerRamas'
import Home from '../home/home'
import Banner from '../banner/banner'
import Footer from '../footer/footer'

function Scroll() {
  const alignCenter = { display: 'flex', alignItems: 'center' }
  
  return  (
    <div>
      <div className={styles.background} />

      <Parallax pages={7}>
      <ParallaxLayer offset={0} speed={0.5} style={{}}>
                   <Banner/>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{  }}>
          
          <Home/>
        </ParallaxLayer>

        <ParallaxLayer offset={1.7} speed={0.7} style={{ ...alignCenter, justifyContent: 'center' }}>
        <BannerRamas/>
         
        </ParallaxLayer>


        <ParallaxLayer sticky={{ start: 2.5, end: 3.5 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
          <div className={`${styles.card} ${styles.sticky}`}>
            <div className='textbox'>
                 <h1></h1>
                 <p>NUESTRO COMPROMISO CON LA EXELENCIA Y EL TRABAJO EN EQUIPO NOS PERMITE CONTINUAMENTE SUPERAR LAS EXPECTATIVAS</p>
            </div>
           </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2.7} speed={0.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className={`${styles.card} ${styles.parallax} ${styles.purple}`}>
            

          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={3.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className={`${styles.card} ${styles.parallax} ${styles.blue}`}>
          
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={6.73} speed={0.2} style={{  }}>
          
          <Footer/>
        </ParallaxLayer>

      </Parallax>
    </div>
  )
}

export default Scroll