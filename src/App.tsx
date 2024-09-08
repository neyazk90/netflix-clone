import './App.css'
import Header from './components/UI/Layout.tsx/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/UI/Layout.tsx/Footer'

function App() {

  return (
    <>
       <Header />
        <main className='h-screen'>
        
              <Outlet/>
          </main>
          <Footer/>
    </>
  )
}

export default App
