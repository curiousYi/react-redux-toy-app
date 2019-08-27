import {UPDATE_FORM_TEXT} from '../../actionCreators'

const updateForms = (state = [], action) => {
    switch (action.type) {
     case UPDATE_FORM_TEXT:
        const {id, form} = action;
        return {
          ...state,
          [id]: form

        }
      default:
        return state
    }
  }

export default updateForms;
