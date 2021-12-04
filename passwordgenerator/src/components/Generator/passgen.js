import React from "react";

function passwordgen(){
    return(    <div class="wrapper">
    <div class="card">
      <div class="card-header">
        <h2>Generate Your Password</h2>
      </div>
      <div class="card-body">
        <textarea
          readonly 
          id="password"
          placeholder="Your Secure Password"
          aria-label="Generated Password"
        ></textarea>
      </div>
    </div>
  </div>

    );
};

export default passwordgen;