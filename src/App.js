import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { Component } from 'react'


 
export class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      Person:
      {
        img: 'user.png',
        Name: `Mariem Trabelsi`,
        Bio: 'I recently graduated with a professional master²s degree from the faculty of sciences sfax , where i studied metrology and instrumentation',
        Proffession: `fullstack js developer`
      },
       
      show: false,

      count: 0 ,
    }
  }

  componentDidMount() {
    setInterval(() => { this.setState({ count: this.state.count + 1 }) }, 1000);
  }


  toggle = () => this.setState({ show: !this.state.show })
  
   
  render() {
    return (
      <div id="page-wrap">
       <h4 className="counter">{this.state.count}</h4>
        <button className="btn" class="btn btn-outline-dark" onClick={this.toggle}> {this.state.show ? "hide the person" : "show the person"}  </button> <br/>
        {this.state.show ? (
          <> <img className="img" src={this.state.Person.img} alt=""/>
            <ul className="list-group">
                <li className="list-group-item" class="list-group-item list-group-item-dark"><h4>Full Name:</h4>{this.state.Person.Name}</li>
                <li className="list-group-item" class="list-group-item list-group-item-dark"><h4>Bio:</h4>{this.state.Person.Bio}</li>
                <li className="list-group-item" class="list-group-item list-group-item-dark"><h4>Proffession:</h4>{this.state.Person.Proffession}</li>
              </ul> </>)
          : null}
      </div>
    )
  }
}
 
 export default App
 