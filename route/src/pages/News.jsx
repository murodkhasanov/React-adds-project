import React from "react"
import './News.css'
import janob from './janob.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faShare } from '@fortawesome/free-solid-svg-icons'

function News() {
    return (
        <div className="News">
            <div className="bat">
                <button className="but"><p>All</p></button>
                <button className="but1"><p>Subscribed</p></button>
            </div>
            <div className="big">
                <div className="pices11"><p className="small">2.02.2023</p>
                    <p className="text">Internet-banking shaxsiy kabinetida
                        to‘lovlarni tasdiqlash va tranzaksiyalar tarixini </p>
                    <FontAwesomeIcon className="fan" icon={faMessage} />
                    <FontAwesomeIcon className="fan" icon={faShare} />
                </div>

                <div className="pices12"><p className="small">2.02.2023</p>
                    <p className="text">Internet-banking shaxsiy kabinetida
                        to‘lovlarni tasdiqlash va tranzaksiyalar tarixini </p>
                    <FontAwesomeIcon className="fan" icon={faMessage} />
                    <FontAwesomeIcon className="fan" icon={faShare} />
                </div>

                <div className="pices14"><p className="small">2.02.2023</p>
                    <p className="text">Internet-banking shaxsiy kabinetida <br />
                        to‘lovlarni tasdiqlash va tranzaksiyalar <br /> tarixini </p>
                    <img src={janob} alt="" />
                    <FontAwesomeIcon className="fan" icon={faMessage} />
                    <FontAwesomeIcon className="fan" icon={faShare} />
                </div>

                <div className="pices15"><p className="small">2.02.2023</p>
                    <p className="text">Internet-banking shaxsiy kabinetida
                        to‘lovlarni tasdiqlash va tranzaksiyalar tarixini </p>
                    <FontAwesomeIcon className="fan" icon={faMessage} />
                    <FontAwesomeIcon className="fan" icon={faShare} />
                </div>

                <div className="pices13"><p className="small">2.02.2023</p>
                    <p className="text">Internet-banking shaxsiy kabinetida
                        to‘lovlarni tasdiqlash va tranzaksiyalar tarixini </p>
                    <FontAwesomeIcon className="fan" icon={faMessage} />
                    <FontAwesomeIcon className="fan" icon={faShare} />
                </div>
            </div>
        </div>
    )
}

export default News