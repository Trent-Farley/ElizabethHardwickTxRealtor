import '../styles/globals.css'
import Menu from './components/menu'
import Bottom from './components/bottom'
import '../node_modules/font-awesome/css/font-awesome.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
function Puma({ Component, pageProps }) {
      return <><Menu/> <Component {...pageProps}/> <Bottom/></>
}

export default Puma
