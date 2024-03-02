

import AddUser from './component/AddUser';
import AllUsers from './component/AllUsers';

import {BrowserRouter,Route,Routes} from 'react-router-dom'



function App() {
  return (
    <div className="App">
        <BrowserRouter>
        
          <Routes>
            <Route path='/' element={ <AllUsers/> }/>
            <Route path='/adduser' element={ <AddUser/>  }/>     
          </Routes>
        </BrowserRouter>             
    </div>
  );
}

export default App;
