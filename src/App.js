import React from 'react';  
import Accordion from './components/Accordion'


const items = [
  {
    title: 'What is React',
    content: 'React is a front ent javascript framework'
  },
  {
    title: 'Why we use it?',
    content: 'Because is fun'
  },
  {
    title: 'Do you like it?',
    content: 'I like React very much'
  }
]

function App() {
  return (
    <div className="App">
     <Accordion items={items}/>
    </div>
  );
}

export default App;
