import './home.css'
import { useEffect } from 'react';
import { useState } from 'react';
import Hidraumet from '../../assets/img/hidraumet.png'

 const Home = () => {

    const [hiddenElements, setHiddenElements] = useState([]);

    useEffect(()=>{
        
    const hiddenElements = document.querySelectorAll('.hidden');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) =>{
            if (entry.isIntersecting){
                entry.target.classList.add('show');
            } else{
                entry.target.classList.remove('show')
            }
        });
    });

    hiddenElements.forEach((el) => observer.observe(el));
  
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };

    }, []);


    useEffect(()=>{
        
        const hiddenElements = document.querySelectorAll('.hidden2');
    
        const observer2 = new IntersectionObserver((entries) => {
            entries.forEach((entry) =>{
                console.log(entry)
                if (entry.isIntersecting){
                    entry.target.classList.add('show2');
                } else{
                    entry.target.classList.remove('show2')
                }
            })
        })
    
        hiddenElements.forEach((el) => observer2.observe(el));
      
        return () => {
          hiddenElements.forEach((el) => observer2.unobserve(el));
        };
    
        }, []);



    

    return (
        <div id= 'nosotros' className='banner2'>

            <div  id='textoeimagen'>

                    <div id='logoHidraumet' className='hidden2' >
                        <img src={Hidraumet} alt="" />
                    </div>
                
                    <div   id='textBox' className='hidden' >
                        <p>Nos enfocamos en entender a fondo  las necesidades de nuestros clientes y brindarles soluciones personalizadas y de alto impacto.
                        </p>
                    </div>

                    
           
            </div>

          
         
        </div>
    )
}

export default Home