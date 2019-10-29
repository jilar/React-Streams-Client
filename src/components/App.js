import React from 'react';
import {BrowserRouter, Route,Link} from 'react-router-dom';

const PageOne=() =>{
  return(
    <div>Page One
      <Link to= '/pagetwo'>go to page 2</Link>
    </div>
  )};

const PageTwo=() =>{
  return(
      <div>Page Two
        <Link to= '/'>go to page 1</Link>
      </div>
  )};


function App() {
  return (
    <div>
    <BrowserRouter>
      <div>
        <Route path='/' exact component={PageOne} />
        <Route path='/pagetwo' component={PageTwo} />
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
