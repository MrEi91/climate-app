import React from 'react'

import '../App.css';

const TableWheater = (props) => {
  return(
    <div className="App-intro">
      {props.handleChange.length === 0 ? <div className="progress" style={styles.preloder}><div className="indeterminate"></div></div> :
        <table className="striped" style={styles.table}>
          <thead>
            <tr>
                <th>{props.city}</th>
                <th>Temperature</th>
                <th>Variance</th>
            </tr>
          </thead>

          <tbody>
            {props.handleChange.map((item, index) => {
                let date = new Date(0)
                date.setUTCSeconds(item.dt)

                let newDate = JSON.stringify(date).slice(1, 11)
                return(
                  <tr key={index}>
                    <td>{ newDate }</td>
                    <td>{ item.temp.day.toFixed(0) }C</td>
                    <td>{ (item.temp.max-item.temp.min).toFixed(2) }C</td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      }
    </div>
  )
}

const styles = {
  preloder:{
    width: "50%",
    margin: "20px auto 10px auto"
  },
  table:{
    width: "50%",
    margin: "20px auto 10px auto"
  }
}

export default TableWheater
