import { TOGGLE_FORM } from '../../actionCreators';

const showForm = (state=true, action) => {
    switch(action.type) {
        case TOGGLE_FORM:
            return state = !state;
        default:
            return state;
    }
}

export default showForm;
