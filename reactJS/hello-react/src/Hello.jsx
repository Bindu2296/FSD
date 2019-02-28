import React, { Component } from "react";
class Hello extends Component{
    render(){
        return(
            <div align="center">
                <form >
                <table>
              <tr> <th> <label>Name</label></th> <td><input type="text"  name="name" /></td></tr>
              <tr><th> <label>Email</label></th><td><input type="text"  name="email" /></td></tr>
              <tr> <th><label>Number</label> </th><td><input type="number"  name="no"/></td></tr>
              <tr><button >Save</button></tr>
              </table>
                </form>
            </div>
        )
    }
}

export default Hello;