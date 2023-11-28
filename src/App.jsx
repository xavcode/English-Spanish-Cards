import './App.css'
import CardContainer from './components/CardCointainer/CardContainer'
import Header from './components/NavBar/Header'
// import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className='flex flex-col py-2 items-center bg-black min-h-screen min-w-screen'>
      <div className='text-white/70 fixed right-4 bottom-1'>XavCode ❤</div>
      <Header />
      <CardContainer />
      {/* <Footer /> */}
    </ div>
  )
}

export default App
