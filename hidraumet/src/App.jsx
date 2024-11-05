import {BrowserRouter} from 'react-router-dom'
import './App.css'
import Banner from './components/banner/banner'
import NavBar from './components/navBar/navbar'
import Home from './components/home/home'
import BannerRamas from './components/bannerRamas/bannerRamas'
import Scroll from './components/scroll/scroll'
import Footer from './components/footer/footer'


function App() {

  return (
<div className='app'>
  <BrowserRouter>
          
              <NavBar/>
              
              
              <Scroll/>
              <Footer/>
  </BrowserRouter>

</div>
  )
}

export default App
