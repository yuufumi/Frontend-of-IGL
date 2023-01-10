import React, { useState, useEffect,useCallback ,useRef} from "react";
import {useDropzone} from 'react-dropzone';

import MonAnnonce from "./components/MonAnnonce";
import MaPremiereAnnonce from "./components/MaPremiereAnnonce";
import MenuBar from "./components/MenuBar";
import "./App.css";
import "./Form.css";
// import "./index.css";
import editIcon from "./images/icons8-modify-58 (1) 1.svg";
import line from "./images/Line13.svg";
import line2 from "./images/Line14.svg";
import descriptionIcon from "./images/Description-Icon.svg";
import emailIcon from "./images/Email.svg";
import locationIcon from "./images/location.svg";
import phoneIcon from "./images/phone.svg";
import messageIcon from "./images/message.svg";
import contactIcon from "./images/contact.svg";
import leftarrow from "./images/leftarrow.svg";
import rightarrow from "./images/rightarrow.svg";
import plus from "./images/plus.svg";
import trashBin from "./images/delete.svg";


// const URL = '' // from backend



function Titre({titre}) {
    return (
        <div className="Titre-Text">
            <p className="Titre">{titre}</p>
        </div>
    )
}

function LesAnnonces({annonces}) {
    return(
        <>
        {annonces?.length > 0 ? (
          <div className="app">
            {annonces.map((Ai) => (
              <MaPremiereAnnonce Ai={Ai} />
            ))}
          </div>
        ) : (
          <div>
            <h2>Vous n'avez deposer aucune annonce</h2>
          </div>
        )}
        </>
    )
}

function MyFooter() {
    return(
        <footer><p>@2022 Tout Droit Reservé</p></footer>
    )
}

function MesAnnoncesContainer(props) {
    return(
        <div className="c-page">
            <MenuBar />
            <Titre titre = {props.titre} />
            <LesAnnonces annonces = {props.annonces}/>
    </div>
    )
}
function InformationProfil() {
    return(<div className="my-info">
                    <div className="entete-info">
                        <div className="profile">Profile</div>
                        <div className="edit">
                            <img src={editIcon} alt="An icon"/>
                            <div>Modifier</div>
                        </div>
                    </div>
                    <div className="table-info">
                        <div className="une-ligne">
                        <div className="une-info">
                            <div className="nom-du-champ">Nom</div>
                            <div className="champ">Kedadsa</div>
                            <img className="line" src={line} alt="A line"/>
                        </div>
                        <div className="une-info">
                            <div className="nom-du-champ">Adresse email</div>
                            <div className="champ">gmail@gmail.com</div>
                            <img className="line" src={line} alt="A line"/>
                        </div>
                        </div>
                        <div className="une-ligne">
                        <div className="une-info">
                            <div className="nom-du-champ">prenom</div>
                            <div className="champ">Islam</div>
                            <img className="line" src={line} alt="A line"/>
                        </div>
                        <div className="une-info">
                            <div className="nom-du-champ">Adresse</div>
                            <div className="champ">Saoula</div>
                            <img className="line" src={line} alt="A line"/>
                        </div>
                        </div>
                        <div className="une-ligne">
                        <div className="une-info">
                            <div className="nom-du-champ">Numero 1</div>
                            <div className="champ">056546544</div>
                            <img className="line" src={line} alt="A line"/>
                        </div>
                        <div className="une-photo">
                            <div className="nom-du-champ-photo">Image de profil</div>
                            <div className="champ-photo"><p>Telecharger Photo</p></div>
                        </div>
                        </div>
                        <div className="une-ligne">
                        <div className="une-info">
                            <div className="nom-du-champ">Numero 2</div>
                            <div className="champ">056546544</div>
                            <img className="line" src={line} alt="A line"/>
                        </div>
                        </div>
                    </div>
            </div>
    )
}

function MessageProfil() {
    return(
        <div className="my-messages">
        <div className="entete-messages">
            <div className="profile">Messages</div>
        </div>
        <div className="les-messages">
        <div className="une-ligne-message">
                <div className="un-message">
                    <div className="img-info-message">
                        <img className="profile-image" src="" alt="Profil"/>
                        <div className="nom-date-message">
                        <div className="nom-date">
                            <div className="nom">Kedadsa Islam </div>
                            <div className="date-message">01/01/2023</div>
                        </div>
                    <   div className="le-message">Je suis interessé par votre annonce</div>
                        </div>
                    </div>
                    <img className="line" src={line2} alt="A line"/>
                </div>
        </div>
        <div className="une-ligne-message">
                <div className="un-message">
                    <div className="img-info-message">
                        <img className="profile-image" src="" alt="Profil"/>
                        <div className="nom-date-message">
                        <div className="nom-date">
                            <div className="nom">Kedadsa Islam </div>
                            <div className="date-message">01/01/2023</div>
                        </div>
                    <   div className="le-message">Je suis interessé par votre annonce</div>
                        </div>
                    </div>
                    <img className="line" src={line2} alt="A line"/>
                </div>
        </div>
        <div className="une-ligne-message">
                <div className="un-message">
                    <div className="img-info-message">
                        <img className="profile-image" src="" alt="Profil"/>
                        <div className="nom-date-message">
                        <div className="nom-date">
                            <div className="nom">Kedadsa Islam </div>
                            <div className="date-message">01/01/2023</div>
                        </div>
                    <   div className="le-message">Je suis interessé par votre annonce</div>
                        </div>
                    </div>
                    <img className="line" src={line2} alt="A line"/>
                </div>
        </div>
        <div className="une-ligne-message">
                <div className="un-message">
                    <div className="img-info-message">
                        <img className="profile-image" src="" alt="Profil"/>
                        <div className="nom-date-message">
                        <div className="nom-date">
                            <div className="nom">Kedadsa Islam </div>
                            <div className="date-message">01/01/2023</div>
                        </div>
                    <   div className="le-message">Je suis interessé par votre annonce</div>
                        </div>
                    </div>
                    <img className="line" src={line2} alt="A line"/>
                </div>
        </div>
        <div className="une-ligne-message">
                <div className="un-message">
                    <div className="img-info-message">
                        <img className="profile-image" src="" alt="Profil"/>
                        <div className="nom-date-message">
                        <div className="nom-date">
                            <div className="nom">Kedadsa Islam </div>
                            <div className="date-message">01/01/2023</div>
                        </div>
                    <   div className="le-message">Je suis interessé par votre annonce</div>
                        </div>
                    </div>
                    <img className="line" src={line2} alt="A line"/>
                </div>
        </div>
        </div>
    </div>
    )
}

function DetailsAnnonce(){
    const [message, setMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was: ${message}`)
      }

    return(
        <div className="details-annonce">
            <div className="details-annonce-titre-prix">
                <div className="details-annonce-titre">APPARTEMENT A VENDRE</div>
                <div className="details-annonce-prix">1000000 da</div>
            </div>
            <div className="details-annonce-photos-map">
                <div className="details-annonce-photos">
                    <div className="button-left-right">
                        <div className="button-left">
                        <button ><img src={rightarrow} alt="left arrow"/></button>
                        </div>
                        <div className="button-right">
                        <button ><img src={leftarrow} alt="right"/></button>
                        </div>
                    </div>
                </div>
                <div className="details-annonce-map"></div>
            </div>
            <div className="details-annonce-description-titre-tableau-textarea">
                <div className="details-annonce-description-titre">
                    <img src={descriptionIcon} alt="img"/>
                    <div>Description de l'annonce</div>
                </div>
                <div className="details-annonce-description-tableau">
                    <table>
                        <tr>
                            <td>Date</td>
                            <td>12/12/2022  14:30:07</td>
                        </tr>
                        <tr>
                            <td>Categorie</td>
                            <td>Echange</td>
                        </tr>
                        <tr>
                            <td>Type</td>
                            <td>Terrain</td>
                        </tr>
                        <tr>
                            <td>Surface</td>
                            <td>100m2</td>
                        </tr>
                        <tr>
                            <td>Wilaya</td>
                            <td>Alger</td>
                        </tr>
                        <tr>
                            <td>Commune</td>
                            <td>Saoula</td>
                        </tr>
                        <tr>
                            <td>Adresse</td>
                            <td>Houch baraka</td>
                        </tr>
                    </table>
                </div>
                <div className="details-annonce-description-textarea">
                    <div className="details-annonce-description-textarea-titre">Description</div>
                    <div className="details-annonce-description-textarea-text">Un appartement F5 avec cuisine equipée</div>
                </div>
            </div>
            <div className="details-annonce-contact">
                <div className="details-annonce-contact-titre">
                    <img src={contactIcon} alt=""contact />
                    <div>
                    Contact et coordonées
                    </div>
                </div>
                <div className="details-annonce-contact-container">
                    <div className="details-annonce-contact-container-ligne">
                        <img src={contactIcon} alt="contact" />
                        <div>Kedadsa Islam Chakib</div>
                    </div>
                    <div className="details-annonce-contact-container-ligne">
                        <img src={locationIcon} alt="location" />
                        <div>Saoula, Alger</div>
                    </div>
                    <div className="details-annonce-contact-container-ligne">
                        <img src={emailIcon} alt="email" />
                        <div>Email@email.com</div>
                    </div>
                    <div className="details-annonce-contact-container-ligne">
                        <img src ={phoneIcon} alt="phone"/>
                        <div>056113411461564</div>
                    </div>
                </div>
            </div>
            <div className="details-annonce-envoyer-message">
                <div className="details-annonce-envoyer-message-titre">
                    <img src={messageIcon} alt="message"/>
                    <div>Envoyer message</div>
                </div>
                <div className="details-annonce-envoyer-message-container">
                    <div className="details-annonce-envoyer-message-container-name-message">
                        <img src="" alt=""/>
                        <div>
                            <div className="details-annonce-envoyer-message-container-message-sender">Ilyes Benabbes</div>
                            <form onSubmit={handleSubmit}>
                                    <textarea
                                    className="message-area"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    />
                                    <input className="envoyer" type="submit" value="Envoyer"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
const LocationForm1 = () => {

    const [selected, setSelected] = React.useState("");
    
    const changeSelectOptionHandler = (event) => {
      setSelected(event.target.value);
    };
    
    const algorithm = [
      "Searching Algorithm",
      "Sorting Algorithm",
      "Graph Algorithm",
    ];
    const language = ["C++", "Java", "Python", "C#"];
    const dataStructure = ["Arrays", "LinkedList", "Stack", "Queue"];
    
    let type = null;
    
    let options = null;
    
    if (selected === "Algorithm") {
      type = algorithm;
    } else if (selected === "Language") {
      type = language;
    } else if (selected === "Data Structure") {
      type = dataStructure;
    }
    
    if (type) {
      options = type.map((el) => <option key={el}>{el}</option>);
    }
    return (
        <>
        <div className="location-form-1-champ-section">
            <label>Wilaya</label>
            <select onChange={changeSelectOptionHandler}>
            <option>Choose...</option>
            <option>Algorithm</option>
            <option>Language</option>
            <option>Data Structure</option>
            </select>
        </div>
        <div className="location-form-1-champ-section">
        <label>Commune</label>
            <select>
            {
              /** This is where we have used our options variable */
                options
            }
            </select>
        </div>
        <div className="location-form-1-champ-section" >
        <label>Quartier</label>
            <input />
        </div>
        </>

    );
};

function DepotAnnonceFrom1() {
    const [inputs, setInputs] = useState({});
    const [description, setDescription] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

  return (
    <>
    <div className="loading">
        <div className="rectangle"></div>
        <div className="circle1">
            <div className="numero1">1</div>
            <div className="circle-text1">Caracteristiques principales</div>
        </div>
        <div className="circle2">
            <div className="numero2">2</div>
            <div className="circle-text2">Photos de mon annonce</div>
        </div>
    </div>
    <div className="large-container">
        <form className="form" onSubmit={handleSubmit}>
            <div className="sub-container" >
                <div className="sub-container-entete">
                <label className="sub-container-entete-label">TYPE DE LA TRANSACTION* : </label>
                <span>VENTE</span>
                </div>
                {/* <img src="" alt="line" /> */}
                <div className="button-form-section">
                    <div className="button-form-on-click"><div className="button-form-on-click-text">Vente</div></div> 
                    <div className="button-form"><div className="button-form-text">Location</div></div> 
                    <div className="button-form"><div className="button-form-text">Echange</div></div> 
                    <div className="button-form"><div className="button-form-text">Vacances</div></div> 
                </div>
            </div>
            <div className="sub-container" >
                <div className="sub-container-entete">
                <label className="sub-container-entete-label">TYPE DU BIEN* : </label>
                </div>
                {/* <img src="" alt="line" /> */}
                <div className="type-du-bien-section">
                <select id="type-du-bien-select" name="type-du-bien">
                    <option value="appartement">Appartement</option>
                    <option value="terrain">Terrain</option>
                </select>
                </div>
            </div>
            <div className="sub-container" >
                <div className="sub-container-entete">
                <label className="sub-container-entete-label">SURFACE DU BIEN* : </label>
                </div>
                {/* <img src="" alt="line" /> */}
                <div className="surface-section">
                <input 
                type="number"
                name="surface" 
                value={inputs.surface || ""} 
                onChange={handleChange}
                />
                <span>m<sup>2</sup></span>
                </div>
            </div>
            <div className="sub-container" >
                <div className="sub-container-entete">
                <label className="sub-container-entete-label">PRIX DU BIEN* : </label>
                </div>
                {/* <img src="" alt="line" /> */}
                <div className="prix-section">
                <input 
                type="number"
                name="prix"
                value={inputs.prix || ""} 
                onChange={handleChange}
                />
                <span>DA</span>
                </div>
            </div>
            <div className="sub-container" >
                <div className="sub-container-entete">
                <label className="sub-container-entete-label">LOCALISATION* : </label>
                </div>
                {/* <img src="" alt="line" /> */}
                <div className="location-section">
                <LocationForm1 />
                </div>
            </div>
            <div className="sub-container" >
                <div className="sub-container-entete">
                <label className="sub-container-entete-label">DESCRIPTION* : </label>
                </div>
                {/* <img src="" alt="line" /> */}
                <div className="description-section">
                <textarea
                    className="description-area"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
            </div>
                {/* <input 
                type="text"
                name="typeTransaction" 
                value={inputs.typeTransaction || ""} 
                onChange={handleChange}
                />
                <label>Enter your age:
                </label>
            <input 
            type="number" 
            name="age" 
            value={inputs.age || ""} 
            onChange={handleChange}
            />
        <input type="submit" /> */}
        
        <input className="continuer" type="submit" value="Continuer"/>
        </form>
    </div>
    </>
  )
}


function Dropzone({ onDrop, accept}) {
    const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
      useDropzone({
        accept,
        onDrop,
      });

    return (
        <div className="image-container">
            <div {...getRootProps({ className: "dropzone" })}>
                <input className="input-zone" {...getInputProps()} />
                <div className="text-center">
                    {isDragActive ? (
                    <p className="dropzone-content">
                        Relachez pour deposer les photos
                    </p>
                    ) : (
                        <>
                            <p>Faites glisser une ou plusieurs photos </p>
                            <p>ou cliquez ici</p>
                            <img src={plus} alt=""/>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

  // ImageList Component//

const ImageGrid = ({stateChanger,images }) => {
    // render each image by calling Image component
    // Return the list of files //
    const dragItem = useRef();
    const dragOverItem = useRef();
    const dragStart = (e, position) => {
        dragItem.current = position;
        console.log(e.target.innerHTML);
      };
     
      const dragEnter = (e, position) => {
        dragOverItem.current = position;
        console.log(e.target.innerHTML);
      };
     
      const drop = (e) => {
        const copyListItems = [...images];
        const dragItemContent = copyListItems[dragItem.current];
        copyListItems.splice(dragItem.current, 1);
        copyListItems.splice(dragOverItem.current, 0, dragItemContent);
        dragItem.current = null;
        dragOverItem.current = null;
        stateChanger(copyListItems);
      };
      const removeElement = (index) => {
        const newFruits = images.filter((_, i) => i !== index);
        stateChanger(newFruits);
      };
    return (
        <div className="file-list">{
        images.map((image ,index) => {
        return (
            <>
            <div className="image-view" 
            onDragStart={(e) => dragStart(e, index)}
            onDragEnter={(e) => dragEnter(e, index)}
            onDragEnd={drop}
            key={index}
            draggable>
                <img className="file-img" src={image.src} alt= "" />
                <div className="image-position">
                    Position {image.id = index+1}
                    <div className="image-position-delete" onClick={() => removeElement(index)}>
                    <img src={trashBin} alt=""/>
                    </div>
                </div>
            </div>
            </>
        )
    })}
        </div>
    );
};  


function DepotAnnonceFrom2() {
    const [inputs, setInputs] = useState({});
    const [images, setImages] = useState([]);

    const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.map((file) => {
        const reader = new FileReader();
        reader.onload = function (e) {
        setImages((prevState) => [
            ...prevState,
            {src: e.target.result },
            ]);
        };
        reader.readAsDataURL(file);
        return file;
    });
    }, []);

    const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
    }

    return (
    <>
    <div className="loading">
        <div className="rectangle"></div>
        <div className="circle1">
            <div className="numero1">1</div>
            <div className="circle-text1">Caracteristiques principales</div>
        </div>
        <div className="rectangle2"></div>
        <div className="circle1">
            <div className="numero1">2</div>
            <div className="circle-text3">Photos de mon annonce</div>
        </div>
    </div>
    <div className="large-container-image">
        <form className="form-image" onSubmit={handleSubmit}>
            <div className="image-container-section">
                <Dropzone onDrop={onDrop} accept={"image/*"} />
                {console.log(images)}
                <ImageGrid stateChanger={setImages} images={images} />
            </div>
        </form>
    </div>
    </>)
}
const App = (Id) => {
    const titre = "Mes Annonces"
  const [annonces, setAnnonces] = useState([
    {
      Titre: "Vente appartement saoula",
      Date: "05/12/2022",
      imagePri: "https://",
    },
    {
      Titre: "Vente appartement saoula",
      Date: "05/12/2022",
      imagePri: "https://",
    },
  ]);

  // const searchAi = async ()=> {
  //     const response = await fetch(`${URL}/${Id}`)
  //     const data = await response.json()
  //     setAnnonces(data)
  // }

  useEffect(() => {
    //searchAi(userId)
  }, []);

  return (
    <>
      <header></header>
      <MesAnnoncesContainer annonces={annonces} titre ={titre} />
        <div className="p-content">
            <InformationProfil />
            <MessageProfil />
        </div>

        <DetailsAnnonce/>

        <DepotAnnonceFrom1 />
        <DepotAnnonceFrom2 />
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
