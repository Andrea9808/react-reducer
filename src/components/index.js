import React, {useReducer, useState} from "react";
import Modal from "../components/Modal";
import reducer from "../components/reducer";
import {
  APRI_MODAL,
  CHIUDI_MODAL
} from '../components/action';


const initialState = {
  isModalOpen: false,
  modalContent: 'Eccomi!'
};

const Index = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const tiPremo = () => {
  //   dispatch({type: 'PREMI_BOTTONE'})
  // }

  const apriModal = () => {
    dispatch({type: APRI_MODAL, payload: 'il mio nuovo modal'})
  }

  const chiudiModal = () => {
    dispatch({type: CHIUDI_MODAL})
  }
  //const [isModalOpen, setIsModalOpen] = useState(false);
  //const [modalContent, setModalContent] = useState('Eccomi!');

  // const openModal = () => {
  //   setIsModalOpen(!isModalOpen);
  // }

    return (
      <>
        <div>
          <h3>Premi qui per aprire il modale</h3>
          <button onClick={apriModal} className="button" >Apri Modale</button>
        </div>
        

        <Modal modalContent={state.modalContent} modalState={state.isModalOpen} chiudiModal={chiudiModal}/>

      </>
    );
};

export default Index;
