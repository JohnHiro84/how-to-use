import React, {useState} from 'react';
import { withRouter } from 'react-dom-router';

function Slideshow(){

   const [page, setPage] = useState(1);

   let imageString = (<img className="slideshow-image" src={require("./page" + (page).toString() + ".png")} alt="slideshow" />)

  return (
    <div>
      <button onClick="" >button</button>
    </div>
  )
}

export default withRouter(Slideshow);
