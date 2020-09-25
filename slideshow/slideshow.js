import React, {useState} from 'react';
import { withRouter } from 'react-dom-router';

function Slideshow(){

   const [page, setPage] = useState(1);

   let imageString = (<img className="slideshow-image" src={require("./page" + (page).toString() + ".png")} alt="slideshow" />)

  function setPageUpClickHandler(){
    setPage((page < 4) ? (page + 1) : page);
  }

  function setPageDownClickHandler(){
    setPage((page > 1) ? (page - 1) : page);
  }

  return (
    <div>
      <button onClick="setPageUpClickHandler" >Forward</button>
      <button onClick="" >button</button>
    </div>
  )
}

export default withRouter(Slideshow);
