import React from "react";
import Article from "./Article";
import Comment from "./Comment";

function App() {
  return (
    <div>
      <Article /> 
      <Comment />
    </div>
  );
}

export default App;

// in we have to add the components from our other javascript files. We add it here because this is our app 


// components need to be in order as well 

// we have to capitalize the components otherwise they will be rendered as HTML elements 