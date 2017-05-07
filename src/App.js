import React, { Component } from 'react';

import './App.css';
import Header from './components/Header'
import TableWheater from './components/TableWheater'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      wheater: [],
      city: 'City'
    }
  }
  
  chooseCity (event) {
    let city = event.target.title
    this.setState({
      city: city
    })

    let self = this
    fetch(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&mode=json&units=metric&cnt=5&APPID=481e3bc28e5264e5607c2b65b449bfc1`)
      .then(response => response.json())
      .then(data => { self.setState({ wheater: data.list }) })
      .catch(err => console.error(err))
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div style={{ margin: "20px 37% 5px auto" }}>
          <a className='dropdown-button btn' href='#' data-activates='dropdown1'>Choose City!</a>
          <ul id='dropdown1' className='dropdown-content'>
            <li><a href="#" onClick={(event) => { this.chooseCity(event) }} title={ "Jakarta" }>Jakarta</a></li>
            <li><a href="#" onClick={(event) => { this.chooseCity(event) }} title={ "Tokyo" }>Tokyo</a></li>
            <li><a href="#" onClick={(event) => { this.chooseCity(event) }} title={ "London" }>London</a></li>
          </ul>
        </div>
        <TableWheater handleChange={ this.state.wheater } city={ this.state.city }/>
      </div>
    );
  }
}

export default App;
