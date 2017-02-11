// import {students, total} from './students';
// import multiply from './calculator';

// console.log( multiply(3, 5));
// import Entity from './entity';

// class Hobbit extends Entity {
//   constructor(name, height){
//     super(name, height);
//   }
//   greet()
//   {
//     console.log(`Eu sou ${this.name} do Condado!`);
//   }
// }

// let Frodo = new Hobbit("Frodo Beggins", 4.5);
// Frodo.greet();

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const api_key = '003c2c4e49c06b0cd185d6968d0535c3';

class App extends Component{
  constructor(props){
    super(props);
      this.state = {
        city: 'Sao Paulo'
    };
  }

componentDidMount()
{
  this.grabWeather(this.state.city);
}

grabWeather(city){
  fetch(`http://api.openweathermap.org/data/2.5/weather?APPID=${api_key}&q=${city}`)
  .then(response => response.json())
  .then(json => {
    this.setState({description: json.weather[0].description})
});}
render() {
    return (
      <div>
        <h1>A cidade do baguio {this.state.city}</h1>
        <h2>{this.state.description}</h2>
      </div>
    )
  }
}

ReactDOM.render(<App></App>, document.getElementById('root'));