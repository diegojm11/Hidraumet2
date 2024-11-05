import './footer.css'
import HidraumetLogo from '../../assets/img/hidraumetLogo.png'

const Footer = () => {
    return (
        <div className='footer'>
         
            
        
            <div>
                <img src={HidraumetLogo} alt="" />
                <h3>Direccion: , Provincia de Buenos Aires</h3>
                <div>
                    <h4>Politicas de Privacidad</h4>
                    <h4>Terminos de servicio</h4>
                </div>
            </div>
        </div>
    )
}

export default Footer