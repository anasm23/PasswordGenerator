import React from "react";
import { Card, Body, Img } from 'react-bootstrap'
import "./style.css";

function header(){
   return (<>
    <Card>
      <Card.Body>
        <Card.Text>
            <div class="text">
            PASSWORD GENERATOR
            </div>
        <Card.Img variant="top" src="https://m.media-amazon.com/images/G/01/DeveloperBlogs/AppstoreBlogs/NathanRanneyblogposts/Image-PRNGbasics-1011.gif._CB483158115_.gif?t=true"/>
        </Card.Text>
      </Card.Body>
    </Card>
  </>)
}

export default header;