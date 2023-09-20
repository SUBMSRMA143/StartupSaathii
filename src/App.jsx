import { Outlet } from 'react-router'
import './App.css'
import Footer from './components/1st_page/Footer/Footer'


function App() {

  return (
    <>
      <Outlet />
      <Footer />
    </>
  )
}

export default App
