import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/Routes.jsx';
import AuthProvider from './providers/AuthProvider';
import 'aos/dist/aos.css'
import AOS from 'aos'

AOS.init({
  offset: 200,
  duration: 1000,
  easing: 'ease-in-sine',
  delay: 100,
});
console.log(AOS)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
