import React, { useState, useEffect,useCallback ,useRef} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MesAnnonces from "./pages/MesAnnonces";
import MonProfil from "./pages/MonProfil";
import DetailsAnnonce from "./pages/DetailsAnnonce";
import DeposerAnnonce from "./pages/DeposerAnnonce";
import DeposerPhotos from './pages/DeposerPhotos';
import MonCompteLayout from './pages/MonCompteLayout';
import LogedNavBar from "./components/LogedNavBar";
import MyFooter from "./components/MyFooter";

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
        <Route path="*" element= {<h1>NotFound</h1>} />
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
