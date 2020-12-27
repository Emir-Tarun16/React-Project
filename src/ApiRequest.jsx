import React from 'react';
import axios from 'axios';


class ApiRequest extends React.Component{

      constructor(){
          super();
          this.state = {
              arr: []
          }
      }  

      componentDidMount(){
          axios.get("https://restcountries.eu/rest/v2/all").then(
              (posRes)=> {
                 
                this.setState({arr:posRes.data});
                console.log("Data is coming ")
              },
              (errRes)=>{
                console.log(errRes);
              }
          )
      }

      render(){
          return(
              <div>
                  <table border='1' align='center'>
                      <thead>
                          <tr>
                              <th>S.No</th>
                              <th>Name</th>
                              <th>Capital</th>
                              <th>Flag</th>
                          </tr>
                      </thead>
                      <tbody>
                          {this.state.arr.map(
                              (ele,i)=>(
                                  <tr key ={i}>
                                      <td>{i+1}</td>
                                      <td>{ele.name}</td>
                                      <td>{ele.capital}</td>
                                      <td><img src={ele.flag} alt={ele.name} size='100px' height='50px' /></td>
                                  </tr>
                              )
                          )}
                      </tbody>
                  </table>
              </div>
          )
      }
}

export default ApiRequest;