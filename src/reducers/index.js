import { combineReducers } from 'redux';
import updateForms from './updateForms'
import showForm from './visibilityFilter'

export default combineReducers({
  updateForms,
  showForm
})
