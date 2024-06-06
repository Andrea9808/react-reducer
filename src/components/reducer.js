
import {
    APRI_MODAL,
    CHIUDI_MODAL
} from '../components/action';


const reducer = (state, action) => {
  console.log(state, action);
  if(action.type === 'PREMI_BOTTONE'){
    console.log('premi bottone');
  }
  if(action.type === APRI_MODAL){
    return {...state, isModalOpen : true, modalContent : action.payload}
  }
  if(action.type === CHIUDI_MODAL){
    return {...state, isModalOpen : false,}
  }

  return state;
}


export default reducer;