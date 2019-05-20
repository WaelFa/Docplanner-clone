import React , {Component} from 'react';





const content = [
    {
        src: "https://www.docplanner.com/images/warsaw.png",
        className: 'cards',
        title: 'Warsaw',
    },
    {
        src: "https://www.docplanner.com/images/barcelona.png",
        className: 'cards',
        title: "Barcelona"
    },
    {
        src: "https://www.docplanner.com/images/istanbul.png",
        className: 'cards',
        title: 'Istanbul'
    },
    {
        src: "https://www.docplanner.com/images/rome.png",
        className: 'cards',
        title: "Rome"
    },
    {
        src: "https://www.docplanner.com/images/mexico-city.png",
        className: 'cards',
        title: "Mexico City",
    },
    {
        src: "https://www.docplanner.com/images/curitiba.png",
        className: 'cards',
        title: "Curitiba"
    }
]

class Item  extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
render(){
    const {item} = this.props
    return (<div className="grid-item">
            <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top img-fluid" src={item.src}
                    alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <a href="#" className="btn btn-primary">See openings</a>
                    </div>
                </div>
            </div>
        
        );
     }
}

const Post = () => {
    return( <div className="container1 container">
    {content.map((el,i)=><Item item={el} key={i}/>)}
    </div>)
}


export default Post
