import React, { Component } from 'react';
import Liste from './liste'
import './App.css';
const tab=[
  {
      title:'titi',
      par:'fhksfhksdf'
  },
  {
      title:'cc',
      par:'rrrrrrrr'
  }
]
class App extends Component {
  render() {
    return (
      <div className="App">
       <Liste dina={tab} />
       
      </div>
    );
  }
}

export default App;
