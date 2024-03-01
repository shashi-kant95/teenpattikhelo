import React from 'react'
import './Styles/Loader.css'
export default function Loader(props) {
    return (
        <>

            <div className={props.showLoader? "loaderContainer":"loaderContainer DN"}>
                <div className="wrapper">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="shadow"></div>
                    <div className="shadow"></div>
                    <div className="shadow"></div>
                    <span>Loading</span>
                </div>
            </div>

        </>
    )
}
