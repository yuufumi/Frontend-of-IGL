import React from "react";
import '../App.css'

const MenuBar =()=>{
    return(
    <div className="MenuBar">
        <div className="options">
        <button className="profilButton" onClick={()=>{}}>
            MON PROFIL
        </button>
        <button className="annoncesButton" onClick={()=>{}}>
            ANNONCES
        </button>
        <button className="favorisButton" onClick={()=>{}}>
            FAVORIS
        </button>
        </div>
    </div>
    )
}

export default MenuBar 
