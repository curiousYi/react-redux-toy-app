import React from 'react';

class Form extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            name: 'Yi',
            email: 'changingtimes@gmail.com'
        }

        this.updateEmail = this.updateEmail.bind(this);
        this.updateName = this.updateName.bind(this);
    }

    updateEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    updateName(e) {
        this.setState({
            name: e.target.value
        })
    }

    render() {
        const {formHeader} = this.props;
        const {name, email} = this.state;

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
