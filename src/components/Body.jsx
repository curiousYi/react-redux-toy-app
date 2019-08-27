import React from 'react';
import Form from './FormConnectWithRedux';
import ExtraSection from './ExtraSection';

class Body extends React.Component {
    render() {
       return (
            <div>
               <section>
                   <Form
                    {...this.props}
                   ></Form>
               </section>
               <ExtraSection>
                   <Form
                      id="extra"
                     formHeader="test"
                   >
                   </Form>
               </ExtraSection>
           </div>
       )
    }
}

export default Body;
