import {connect} from 'react-redux';
import {updateForm} from '../actionCreators'
import Form from '../components/Form';

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        updateForms: state.updateForms
    }
};

const mapDispatchToProps = { updateForm };

export default connect(mapStateToProps, mapDispatchToProps)(Form)
