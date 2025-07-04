import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import Layout from './Layout';
import Contact from './components/Contact/contact';
import About from './components/About/about';
import Home from './components/Home/Home'; 
import User from './components/User/User';
import Github, { githubInfoLoader } from './components/Github/Github';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />           {/* / */}
      <Route path='about' element={<About />} />      {/* /about */}
      <Route path='contact' element={<Contact />} />  {/* /contact */}
      <Route path='user/:userid' element={<User />} /> {/* /user/ANYTHING */}
      <Route loader={githubInfoLoader} path='github' element={<Github />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
