import React from "react";
import './Aples.css'

function Aples() {
    return (
        <div className="Aples">
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

export default Aples