import React from "react";
export class Calculator extends React.Component{
    constructor(){
        super()
        this.state={
            formnum1:'',
            formnum2: '',
            formaction:'select',
            r:0
        }
        this.handlenum1 = this.handlenum1.bind(this)
        this.handlenum2 = this.handlenum2.bind(this)
        this.handleaction = this.handleaction.bind(this)
        this.handleAddUser = this.handleAddUser.bind(this)


    }
    handleAddUser(e){
     
 console.log("Calculate is running");
        switch(this.state.formaction){
  
            case 'Add':
            console.log("Add is called for "+ this.state.formnum1 +""+ this.state.formnum2);
               
                 
                   this.setState({r:this.state.formnum1 + this.state.formnum2 })
               
                break
           case 'Sub':
                
                    this.setState({r:this.state.formnum1 - this.state.formnum2 })
                
                break
            case 'Mul':
               
                    this.setState({r:this.state.formnum1 * this.state.formnum2 })
               
                break
            case 'Div':
                    this.setState({r:this.state.formnum1 / this.state.formnum2 })
                
             break;
           default:alert("Enter valid")
        }
    }

    handlenum1(e){
        this.setState({formnum1: parseInt(e.target.value)})
    
    }
    handlenum2(e){
        this.setState({formnum2: parseInt(e.target.value)})
    
    }

    handleaction(e){
        this.setState({formaction:e.target.value})
    }


    
    render(){
        return(
            <div>
      <input  type="number" name='num1' onChange={this.handlenum1}/>
      <input  type="number" name='num2' onChange={this.handlenum2}/>
      <select id="action" onChange={this.handleaction} >
      <option value="select">Select</option>
        <option value="Add">Add</option>
        <option value="Sub">Sub</option>
        <option value="Mul">Mul</option>
        <option value="Div">Div</option>
    
      </select>
      <button onClick={this.handleAddUser} >Calculate</button>
    <div>{this.state.r}</div>
      </div>
    
        )
    }
}