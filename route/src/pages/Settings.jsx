import React from "react";
import './Settings.css';
import faran from './faran.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages, faPenToSquare,faToggleOn } from '@fortawesome/free-solid-svg-icons'

function Settings() {
    return (
        <div className="Settings">
            <div className="headerr">
                <img src={faran} alt="" />
                <div className="toche"></div>
                <FontAwesomeIcon className='mayss' icon={faImages} />
                <div className="namew"><h3>Dilfuza Qodirova</h3><p>#2389955</p></div>
                <FontAwesomeIcon className="opp" icon={faPenToSquare} />
                <div className="nik"><p>Edit profile</p></div>
                <hr />
            </div>
            <div className="personal">
                <div className="tetx"><h3>Peronal data: </h3></div>
                <input type="text" className="put1" placeholder="Name" />
                <input type="password" className="put2" placeholder="Password" />
                <input type="tel" className="put3" placeholder="+998 (90) ___ __ __" />
            </div>
            <div className="inter">
                <div className="tetx"><h3>Interface settings:</h3></div>
                <select className="select">
                    <option className="option" value="English">English</option>
                    <option className="option" value="Russia">Russia</option>
                    <option className="option" value="O'zbek">O'zbek</option>
                </select>
                <div className="noti"><p>Notification</p></div>
                <FontAwesomeIcon className="mine" icon={faToggleOn} />

                <div className="noti1"><p>Dark Mode</p></div>
                <FontAwesomeIcon className="mine1" icon={faToggleOn} />
            </div>
            
        </div>
    )
}

export default Settings