import React from 'react';

class ExtraSection extends React.Component {
    render() {
       return (
           <section>
               <h2>
                   Extra Section heading
               </h2>
               {this.props.children}
           </section>
       )
    }
}

export default ExtraSection;
