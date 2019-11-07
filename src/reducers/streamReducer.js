import{SIGN_IN, SIGN_OUT,CREATE_STREAM ,FETCH_STREAMS,FETCH_STREAM,DELETE_STREAM,EDIT_STREAM} from '../actions/types';
import _ from 'lodash';

//defualt arguement
const INITIAL_STATE={
  isSignedIn:null,
  userId:null
};


export default (state={}, action)=> {
  console.log(state);
  switch (action.type){
    case CREATE_STREAM:
      //key interpolation syntax, finds key and updates value or creates new key
      return {...state, [action.payload.id]:action.payload};
    case FETCH_STREAMS:
      //create new object with current list of objects in state, take list
      return {...state, ..._.mapKeys(action.payload, 'id')};
    case FETCH_STREAM:
      return {...state, [action.payload.id]:action.payload};
    case EDIT_STREAM:
      return {...state, [action.payload.id]:action.payload};
    case DELETE_STREAM:
      //_.omit creates new object after deleting key value
      return _.omit(state,action.payload);
    default:
      return state;
  }
};
