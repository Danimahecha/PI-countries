import React from "react";
import {Link} from 'react-router-dom'
import style from './styles.module.css'
export default function LandingPage() {
    document.title= 'Countries Web'
    return (
        <div className={`${style.landingP}`}>
            
            <Link to='/home'>
                 <button className={`${style.landingBtn}`}>Ingresar</button>
            </Link>
        </div>
    )
}
