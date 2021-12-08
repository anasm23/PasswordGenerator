import React from "react";
import './index.css';

function button(){
    return (
    <div class="card-footer">
    <button href="#" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Generate Password</button> 
    <button href="#" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Copy</button>
  </div>);
}

export default button;