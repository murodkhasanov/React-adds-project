import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import rasm1 from './rasm1.jpg'
import Layout from './pages/Layout.jsx'
import Sale from "./pages/Sale";
import News from "./pages/News";
import NoPage from "./pages/NoPage";
import Settings from "./pages/Settings";
import aples from './aples.png'
// import Middle from './Middle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBookmark, faUser } from '@fortawesome/free-solid-svg-icons'
import faran from './faran.jpeg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="dad">
        <div className="adds"><h3>adds</h3></div>
        <input type="text" placeholder='Search...' />
        <FontAwesomeIcon className='awes' icon={faMagnifyingGlass} />
        <FontAwesomeIcon className='awes1' icon={faBookmark} />
        <FontAwesomeIcon className='awes2' icon={faUser} />
      </div>
      <div className="rout">
        <img src={faran} alt="rasm" />
        <div className="toch"></div>
        <div className="name"><h3>Dilfuza Qodirova</h3><p>@username</p></div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index path="/" element={<Sale />} />
              <Route path="news" element={<News />} />
              <Route path="settings" element={<Settings />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
      <div className="apple">
        <div className="brand"><h3>Brands</h3><p>See all</p></div>
        <div className="disp">
          <div className="pices1"><img src={aples} alt="" /><p>Apple</p></div>
          <div className="pices1"><img src={aples} alt="" /><p>Apple</p></div>
          <div className="pices1"><img src={aples} alt="" /><p>Apple</p></div>
          <div className="pices1"><img src={aples} alt="" /><p>Apple</p></div>
          <div className="pices1"><img src={aples} alt="" /><p>Apple</p></div>
          <div className="pices1"><img src={aples} alt="" /><p>Apple</p></div>
        </div>
      </div>

    </div>

  )
}

export default App
