import './bannerRamas.css'
import gosvg from '../../assets/img/go.svg'

const BannerRamas = () => {
    return(
        <div className='ramas'>
            <ul className='ramasContainer'>
                <li className='auxilio'>
                    <div className='cardtextcontainer'>
                        <div className='xcon'>
                            <a className='a' href="">                            
                                    <span>Equipos de auxilio</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem exercitationem.</p>
                            </a>
                        </div>
                    </div>
                </li>
                <li className='plataformas'>
                    <div className='cardtextcontainer'>
                    <div className='xcon'>
                        <a href="">
                                <span>Plataformas</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem exercitationem.</p>
                        </a>
                        </div>
                    </div>
                </li>
                <li className='accesorios'>
                    <div className='cardtextcontainer'>
                    <div className='xcon'>
                        <a href="">
                                <span>Accesorios</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem exercitationem.</p>
                        </a>
                        </div>
                    </div>
                </li>
                <li className='reparacion'>
                    <div className='cardtextcontainer'>
                    <div className='xcon'>
                        <a href="">
                                <span>Reparacion y mantenimiento</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem exercitationem.</p>
                        </a>
                        </div>
                    </div>
                </li>
          
                
            </ul>
        </div>
    )
}

 export default BannerRamas