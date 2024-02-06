import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import { ToastContainer } from 'react-toastify'
import Footer from './components/Footer'

function App() {  

 
  return (
    <>
      <div className='min-h-screen lg:max-w-6xl m-auto p-2 lg:p-6 text-gray-700'>
        <Navbar/>
        <Outlet/>
        <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition: Bounce/>
        <Footer/>
      </div>
    </>
  )
}

export default App
