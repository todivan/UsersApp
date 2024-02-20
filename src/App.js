import './App.css';
import MyComp from './components/mycomp';
import AppContext from './components/AppContext';
import { useState, useCallback } from "react";
import navValues from './helpers/navValues';
import ComponentPicker from './components/componentPicker';


function App() {
  const navigate = useCallback(
    (navTo, param, pageNumber) => setNavState({current: navTo, param, pageNumber, navigate} ), 
    []
  );

  const [navState, setNavState] = useState({current: navValues.usersTable, pageNumber:0, navigate});

  return (  
    <div className="App">
        <AppContext.Provider value={navState}>
        <div className="h-15 justify-content-start p-y-2 ma-y-5">
          <MyComp></MyComp>
        </div>

        <div className="h-15">
          <button type="button" className="btn btn-primary p-y-2 m-y-2">Navigation</button>
        </div>

        <ComponentPicker currentNavLocation={navState.current}></ComponentPicker>
      
      
      </AppContext.Provider>
    </div>
  );
}

export default App;
