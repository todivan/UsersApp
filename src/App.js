import './App.css';
import UserDetails from './components/UserDetails';
import UsersTable from './components/UsersTable';
import './components/dtitle'
import MyComp from './components/mycomp';
import AppContext from './components/AppContext';
import { useState, useEffect } from "react";

function App() {
  const [appState, setAppState] = useState();

  const [selectedUser, setSelectedUser] = useState();

  const setSelectedUserWrapper = (userId) => {
    setSelectedUser(userId);
};

  return (  
      <div className="App">
        <AppContext.Provider value = {{appState, setAppState}}>
        <div className="h-15 justify-content-start p-y-2 ma-y-5">

          <MyComp></MyComp>

        </div>

        <div className="h-15">
          <button type="button" class="btn btn-primary p-y-2 m-y-2">Navigation</button>
        </div>
        {selectedUser ? 
        (<UserDetails userId={selectedUser}></UserDetails>) :
        (<UsersTable selectUser={setSelectedUserWrapper}></UsersTable>) }
      
      
    </AppContext.Provider>
    </div>
  );
}

export default App;
