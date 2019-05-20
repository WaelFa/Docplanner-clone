import React, { Component } from 'react';
class Item extends Component {
    constructor(props) {
        super(props); 
        this.state = {  }
    }
    render() { 
        const {item}=this.props
        return ( <div className='item-container'>
             <h1>{item.title}</h1>
              <p>{item.par}</p>
        </div> );
    }
}
 
export default Item;