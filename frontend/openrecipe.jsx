import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

const appRouter = (

  <BrowserRouter>
    {/* <Route path="/" component={ App }>
     </Route> */}
  </BrowserRouter>

);

ReactDOM.render(
  <div className="alert alert-primary" role="alert">
    This is a primary alert—check it out!
  </div>,
document.getElementById("root"));
