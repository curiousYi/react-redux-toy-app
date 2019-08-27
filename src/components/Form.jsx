import React from 'react';

class Form extends React.Component {
    constructor(props){
        super(props)

        this.updateEmail = this.updateEmail.bind(this);
        this.updateName = this.updateName.bind(this);
    }

    updateEmail(e) {
        const { updateForms } = this.props;
        let name;
        if (updateForms && updateForms[this.props.id]){
            name = updateForms[this.props.id].name;
        }

        this.props.updateForm(this.props.id, {
            name: name,
            email: e.target.value
        });
    }

    updateName(e) {
        const { updateForms } = this.props;
        let email;
        if (updateForms && updateForms[this.props.id]){
            email = updateForms[this.props.id].email;
        }

        this.props.updateForm(this.props.id, {
            name: e.target.value,
            email: email
        });
    }

    render() {
        const {formHeader, name, email} = this.props;

       return (
            <div>
               <h2>{formHeader}</h2>
               <form action="" method="get" className="form-example">
                    <div className="form-example">
                        <label htmlFor="name">Enter your name: </label>
                        <input type="text" name="name" id="name" value={name} onChange={this.updateName} required/>
                    </div>
                    <div className="form-example">
                        <label htmlFor="email">Enter your email: </label>
                        <input type="email" name="email" id="email" value={email} onChange={this.updateEmail} required/>
                    </div>
                    <div className="form-example">
                        <input type="submit" value="Subscribe!"/>
                    </div>
                </form>
            </div>
       )
    }
}

export default Form;
