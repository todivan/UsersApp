import './App.css';
import MyComp from './components/mycomp';
import { AppContext, PagingContext } from './components/AppContext';
import { useState, useCallback } from "react";
import navValues from './helpers/navValues';
import ComponentPicker from './components/componentPicker';


function App() {
  const navigate = useCallback(
    (navTo, param) => setNavState({current: navTo, param, navigate} ), 
    []
  );
  const [navState, setNavState] = useState({current: navValues.usersTable, navigate});

  const changePage = useCallback(
    (pageTo) => setPagingState({pageNumber: pageTo, changePage} ), 
    []
  );
  const [pagingState, setPagingState] = useState({pageNumber: 0, changePage});


  return (  
    <div className="App">
        <AppContext.Provider value={navState}>
          <PagingContext.Provider value={pagingState}>
          <div className="h-15 justify-content-start p-y-2 ma-y-5">
            <MyComp></MyComp>
          </div>

          <div className="h-15">
            <button type="button" className="btn btn-primary p-y-2 m-y-2">Navigation</button>
          </div>

          <ComponentPicker currentNavLocation={navState.current}></ComponentPicker>
          </PagingContext.Provider>
      </AppContext.Provider>
    </div>
  );
}

export default App;
