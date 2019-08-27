import {UPDATE_FORM_TEXT} from '../../actionCreators'

const updateForms = (state = [], action) => {
    switch (action.type) {
      case UPDATE_FORM_TEXT:
        return state.map(form =>
          form.id === action.id ? action.form : form
        )
      default:
        return state
    }
  }

export default updateForms;
