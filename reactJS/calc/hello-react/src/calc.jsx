import React from "react";
import { Calculator } from "./Calculator";


export class calc extends React.Component{
  render(){ return( 
       <div>
           <div>
        <input type='text' id='a' required/>
        
        <button type="button" value='0' onclick={this.handleClick}>1</button>/>
        <button type="button" value='1' onclick={this.handleClick}>2</button>/>
        <button type="button" value='2' onclick={this.handleClick}>3</button>/>
        <button type="button" value='3' onclick={this.handleClick}>4</button>/>
        <button type="button" value='4' onclick={this.handleClick}>5</button>/>
        <button type="button" value='5' onclick={this.handleClick}>1</button>/>
        <button type="button" value='6' onclick={this.handleClick}>1</button>/>
        <button type="button" value='7' onclick={this.handleClick}>1</button>/>
        <button type="button" value='8' onclick={this.handleClick}>1</button>/>
        <button type="button" value='9' onclick={this.handleClick}>1</button>/>
        <button type="button" value='+' id="o" onclick={this.handleClick}>1</button>/>
        <button type="button" value='-' id="o" onclick={this.handleClick}>1</button>/>
        <button type="button" value='*' id="o" onclick={this.handleClick}>1</button>/>
        <button type="button" value='/' id="o" onclick={this.handleClick}>1</button>/>
        <button type="button" value='C'  onclick="cler()"/>



        <input type="button" value='Calculate' onclick="calculating()"/>
    </div>

<div>
<input type='text' id='a' required/>

<input type="button" value='0' onclick="display('0')"/>
<input type="button" value='1' onclick="display('1')"/>
<input type="button" value='2' onclick="display('2')"/>
<input type="button" value='3' onclick="display('3')"/>
<input type="button" value='4' onclick="display('4')"/>
<input type="button" value='5' onclick="display('5')"/>
<input type="button" value='6' onclick="display('6')"/>
<input type="button" value='7' onclick="display('7')"/>
<input type="button" value='8' onclick="display('8')"/>
<input type="button" value='9' onclick="display('9')"/>
<input type="button" value='+' id="o" onclick="display('+')"/>
<input type="button" value='-' id="o" onclick="display('-')"/>
<input type="button" value='*' id="o" onclick="display('*')"/>
<input type="button" value='/' id="o" onclick="display('%')"/>
<input type="button" value='C'  onclick="cler()"/>

<input type="button" value='Calculate' onclick="calculating()"/>
</div>
</div>
   )
  }

  
 display=(val)=>{
    document.getElementById("a").value+= val;
}

calculating=()=>
{
    let m= document.getElementById("a").value;
    let n= eval(m);
    document.getElementById("a").value= n;

}

cler=()=>{
    document.getElementById("a").value= ""

}
}

export default calc