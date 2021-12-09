import React from "react";
import "./index.css";

class Generator extends React.Component{
  render() {
    return <h2>Generator</h2>;
  }
};




function passwordgen(){
    return(<div class="wrapper">
    <div class="card">
      <div class="card-header">
        <h2>Generate Your Password</h2>
      </div>
      <div class="card-body">
      <div class="card">
  <div class="card-body">
  <div>
  <form>
        <label>
          Choices:
          <br></br>
          <label />Lowercase 
          <input
            name="Lowercase"
            type="checkbox"
             /><br></br>
          <label />Uppercase 
          
          <input
            name="Uppercase"
            type="checkbox"
             /><br></br>
          <label />
          Numbers
          <input
            name="Numbers"
            type="checkbox"
             /><br></br>
          <label />
          Special 
          <input
            name="Special"
            type="checkbox"
             />
        </label>
      </form>
    </div>
  </div>
  <textarea
          readonly 
          id="password"
          placeholder="Your Secure Password"
          aria-label="Generated Password"
        ></textarea>
</div>
</div>
    </div>
  </div>
    );
};

export default passwordgen;