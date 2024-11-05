import './navbar.css'
import HidraumetLogo from '../../assets/img/hidraumetLogo.png'

import { useState } from 'react';
import { useEffect } from 'react';

const NavBar =() => {

  const [navbarScrolled, setNavbarScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setNavbarScrolled(true);
      } else {
        setNavbarScrolled(false);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);





  

    return (
        <div className='barra'> 
        
            <nav className={`navbar ${navbarScrolled ? 'navbar-scrolled' : ''}`} >
              <div>
                
              
                <div  id="navbarNav">
                    <div >
                         <img src={HidraumetLogo} alt="" />
                     </div>
                 
                  <ul  >
                    <li to='#nosotros' class="nav-link " aria-current="page">
                                            Productos  
                    </li>

                    <li to="#nosEligen"  class="nav-link " aria-current="page" >
                       Nosotros
                    </li>
                    <li to="#contacto"  class="nav-link " aria-current="page" >
                      Contacto
                    </li>
                    
                    <li to="#trabajaConNosotros"  class="nav-link " aria-current="page" >
                       Trabaja con nosotros
                    </li>
                  </ul>
                
                  

                </div>
                
                
              </div>
            </nav>
            
        </div>
        
    )
}
export default NavBar