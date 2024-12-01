import './App.css'
import Header from './components/UI/Layout.tsx/Header'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { appState } from './shared/app.modal'

function App() {
  const appData = useSelector((store:appState) => store?.app)
  if (!appData) {
    return;
  }

  return (
    <>
       <Header />
      <main className='h-screen'>
        {/* {!appData.user && <Home/>} */}
        {/* {!appData.user &&  <Outlet/>} */}
        <Outlet/>
          </main>
          {/* <Footer/> */}
    </>
  )
}

export default App
