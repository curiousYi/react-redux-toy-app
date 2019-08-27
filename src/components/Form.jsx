import React from 'react';

class Form extends React.Component {
    render() {
        const {formHeader} = this.props;
       return (
            <div>
               <h2>{formHeader}</h2>
               <form action="" method="get" className="form-example">
                    <div className="form-example">
                        <label htmlFor="name">Enter your name: </label>
                        <input type="text" name="name" id="name" required/>
                    </div>
                    <div className="form-example">
                        <label htmlFor="email">Enter your email: </label>
                        <input type="email" name="email" id="email" required/>
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
