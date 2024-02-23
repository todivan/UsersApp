import './App.css';
import MyComp from './components/mycomp';
import { AppContext, PagingContext, UsersPerPageContext } from './components/AppContext';
import React, { useState, useCallback } from "react";
import navValues from './helpers/navValues';
import ComponentPicker from './components/componentPicker';
import NavBar from './components/NavBar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import consts from './helpers/consts';


function App() {
  const navigate = useCallback(
    (navTo, param) => setNavState({current: navTo, param, navigate} ), 
    []
  );
  const [navState, setNavState] = useState({current: navValues.usersTable, navigate});

  const changePage = useCallback(
    (pageTo, totalCount) => setPagingState({pageNumber: pageTo, totalCount, changePage} ), 
    []
  );
  const [pagingState, setPagingState] = useState({pageNumber: undefined, changePage});

  const changeUsersPerPage = useCallback(
    (toUsersPerPage) => setUsersPerPageState({usersPerPage: toUsersPerPage, changeUsersPerPage} ), 
    []
  );
  const [usersPerPageState, setUsersPerPageState] = useState({usersPerPage: consts.DEFAULT_USERS_PER_PAGE, changeUsersPerPage});


  return (  
    <div className="App">
      <React.StrictMode>
        <AppContext.Provider value={navState}>
          <PagingContext.Provider value={pagingState}>
            <UsersPerPageContext.Provider value={usersPerPageState}>
            <div className="h-15 justify-content-start p-y-2 ma-y-5">
              <MyComp></MyComp>
            </div>

            <NavBar />

            <ComponentPicker currentNavLocation={navState.current}></ComponentPicker>
            </UsersPerPageContext.Provider>
          </PagingContext.Provider>
      </AppContext.Provider>
      </React.StrictMode>
    </div>
  );
}

export default App;
