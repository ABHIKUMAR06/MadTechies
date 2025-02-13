import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './Pages/Home/Home.jsx';
import ContactUs from './Pages/Contactus/ContactUs.jsx';
import NotFoundPage from './Pages/404/404.jsx';
import ServicePage from './Pages/Services/Services.jsx';
import Aboutus from './Pages/About/Aboutus.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/contact', element: <ContactUs /> },
      { path: '/*', element: <NotFoundPage /> },
      { path: '/services', element: <ServicePage /> },
      { path: '/about', element: <Aboutus /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
