import React, { useState, useEffect,useCallback ,useRef} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MesAnnonces from "./pages/MesAnnonces";
import MonProfil from "./pages/MonProfil";
import DetailsAnnonce from "./pages/DetailsAnnonce";
import DeposerAnnonce from "./pages/DeposerAnnonce";
import MonCompteLayout from './pages/MonCompteLayout';
import LogedNavBar from "./components/LogedNavBar";
import MyFooter from "./components/MyFooter";
import ProfileUtilisateur from "./pages/ProfilUtilisateur";

import "./App.css";
import "./Form.css";


const App = () => {
  return ( 
      <>
      <LogedNavBar />
      <Routes>
        <Route path="/MonCompte/" element={<MonCompteLayout />}> {/*Here the big / we put here the main and then inside of it we have all the routes inside example /monprofil /mesannonces /ajouterannonces */}
            <Route index element={<MonProfil />} />
            <Route path="MesAnnonces" element={<MesAnnonces />} />
        </Route>
        <Route path="/DeposerAnnonce" element={<DeposerAnnonce />} />
        {/* <Route path="/Annonces" element={<DetailsAnnonce />} /> */}
        <Route path="/Annonces/:id" element={<DetailsAnnonce />} />
        <Route path="/Profil/:id" element={<ProfileUtilisateur />} />
        <Route path="*" element= {<div style={{textAlign:"center",margin:"100px",fontSize:"40px",fontWeight:"200"}}>NotFound</div>
} />
      </Routes>
      <MyFooter />
      </>
  );
};
export default App;

// {   firstElement
//     ?(
//         <div className="app">
//         {
//             <MaPremiereAnnonce Ai = {firstElement}/>
//             // setAnnonces(annonces.slice(1))
//             annonces?.length > 0
//             ? (
//                 annonces.map((Ai)=>(
//                     <MonAnnonce Ai = {Ai}/>
//                     )
//                 )
//             ):(
//             <> 
//             </>
//             )
//         }
//         </div>
//     ):(
//         <div>
//         <h2>Vous n'avez creer aucune annonce</h2>
//         </div>
//     )
//     }
