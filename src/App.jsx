import './App.css'
import CardContainer from './components/CardCointainer/CardContainer'
import NavBar from './components/navBar/NavBar'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className='bg-blue-900/90 min-h-screen max-h-screen flex flex-col'
      style={{
        animation: 'gradientAnimation 1s ease-in-out infinite',
        background: 'linear-gradient(45deg, #000, #566, #111)'}}
    >
      
        <NavBar />            
        <CardContainer />      
        <Footer />
      
    </ div>
      )
}

      export default App
