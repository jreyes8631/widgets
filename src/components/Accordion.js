import React from 'react';

const Accordion = ({items}) => {
    
    rendereditems = items.map(item =>{
        return <div>
             <div className="title active">
                 <i className="dropdown icon"></i>
                 {item.title}
             </div>
             <div className="content active">
                 <p>{item.conent}</p>
             </div>
        </div>
    })
       
    return <h1> there are {items.length} items</h1>

}

export default Accordion;