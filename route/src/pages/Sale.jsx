import React from 'react'
import './Sale.css'
import foto55 from './foto55.png'
import foto66 from './foto66.png'
import texnom from './texnom.png'
import foto99 from './foto99.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faMessage } from '@fortawesome/free-solid-svg-icons'
import rasm2 from './rasm2.png'
import rasm3 from './rasm3.png'

function Sale() {
    return (
        <div className="Sale">

            <div className="like"><img src={rasm2} alt="" /></div>
            <div className="like2"><img src={rasm3} alt="" /></div>

           <div className="naman">
           <div className="head">
                <p className='p1'>Filter: <span className='x6'>BMW X6</span></p>
                <p className='p2'>Sort by: <span className='x7'>Price</span></p>
                <p className='oxr'>321: last updated</p>
                <hr />
                <div className="nam">
                    <div className="pices2"><img src={foto55} alt="" /><p>Toys</p></div>
                    <div className="pices2"><img src={foto66} alt="" /><p className='yaa'>Weathy</p></div>
                    <div className="pices2"><img src={foto55} alt="" /><p>Toys</p></div>
                    <div className="pices2"><img src={foto66} alt="" /><p className='vaa'>Weathy</p></div>
                    <div className="pices2"><img src={foto55} alt="" /><p>Toys</p></div>
                    <div className="pices2"><img src={foto55} alt="" /><p>Toys</p></div>
                    <div className="pices2"><img src={foto55} alt="" /><p>Toys</p></div>
                    <div className="pices2"><img src={foto55} alt="" /><p>Toys</p></div>
                </div>
            </div>

            <div className="texno">
                <div className="header">
                    <img src={texnom} alt="" /> <p>Texnomart</p>
                    <button className='btn'><h4>Follow me</h4></button>
                </div>
                <div className="fot">
                    <img src={foto99} alt="" />
                </div>
                <div className="vaxue">
                    <p className='neo'>Neo QLED 4K Smart TV QN90A</p>
                    <h4>Samsung</h4>
                    <h2>1200$</h2><p></p>
                    <FontAwesomeIcon className='iconca' icon={faBookmark} />
                    <FontAwesomeIcon className='iconca1' icon={faMessage} />
                </div>
            </div>

            <div className="texno">
                <div className="header">
                    <img src={texnom} alt="" /> <p>Texnomart</p>
                    <button className='btn'><h4>Follow me</h4></button>
                </div>
                <div className="fot">
                    <img src={foto99} alt="" />
                </div>
                <div className="vaxue">
                    <p className='neo'>Neo QLED 4K Smart TV QN90A</p>
                    <h4>Samsung</h4>
                    <h2>1200$</h2><p></p>
                    <FontAwesomeIcon className='iconca' icon={faBookmark} />
                    <FontAwesomeIcon className='iconca1' icon={faMessage} />
                </div>
            </div>


            <div className="texno">
                <div className="header">
                    <img src={texnom} alt="" /> <p>Texnomart</p>
                    <button className='btn'><h4>Follow me</h4></button>
                </div>
                <div className="fot">
                    <img src={foto99} alt="" />
                </div>
                <div className="vaxue">
                    <p className='neo'>Neo QLED 4K Smart TV QN90A</p>
                    <h4>Samsung</h4>
                    <h2>1200$</h2><p></p>
                    <FontAwesomeIcon className='iconca' icon={faBookmark} />
                    <FontAwesomeIcon className='iconca1' icon={faMessage} />
                </div>
            </div>


            <div className="texno">
                <div className="header">
                    <img src={texnom} alt="" /> <p>Texnomart</p>
                    <button className='btn'><h4>Follow me</h4></button>
                </div>
                <div className="fot">
                    <img src={foto99} alt="" />
                </div>
                <div className="vaxue">
                    <p className='neo'>Neo QLED 4K Smart TV QN90A</p>
                    <h4>Samsung</h4>
                    <h2>1200$</h2><p></p>
                    <FontAwesomeIcon className='iconca' icon={faBookmark} />
                    <FontAwesomeIcon className='iconca1' icon={faMessage} />
                </div>
            </div>
           </div>

        </div>
    )
}

export default Sale