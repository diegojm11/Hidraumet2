import { useState } from 'react';
import './banner.css'
import { useEffect } from 'react';
import videobanner from '../../assets/img/video3.mp4'

const Banner = () => {

  const [bannerScrolled, setBannerScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setBannerScrolled(true);
      } else {
        setBannerScrolled(false);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    
  
  
  
    return (
        <div id='home' className={`leadImg ${bannerScrolled ? 'achicarImg' : ''}`}>
          <div className='solocolor'></div>
          <video className='video'
        autoPlay
        loop
        muted
        src={videobanner}
        type="video/mp4"
      />
                <div className='textoBannerContainer '>  
                  
                    <div className='textoBanner' >
                        <p> Expertos en fabricación y reparación de camillas de auxilio</p>
                    </div>

                  
                </div>
                
                    

             
        </div>  
    )
}

export default Banner