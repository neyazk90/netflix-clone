import './App.css'
import Header from './components/UI/Layout.tsx/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/UI/Layout.tsx/Footer'
import { useSelector } from 'react-redux'
import { iApp } from './interfaces/app'
import Home from './pages/Home'

function App() {
  const appData:iApp = useSelector(store => store?.app)
 
  if (!appData) {
    return;
  }

  return (
    <>
       <Header />
      <main className='h-screen'>
        {!appData.user && <Home/>}
        {appData.user &&  <Outlet/>}
             
          </main>
          {/* <Footer/> */}
    </>
  )
}

export default App
