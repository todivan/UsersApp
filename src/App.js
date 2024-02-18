import './App.css';
import UsersTable from './components/UsersTable';
import './components/dtitle'
import MyComp from './components/mycomp';

function App() {
  return (
    <div className="App">
      <div className="h-15 justify-content-start p-y-2 ma-y-5">

        <MyComp></MyComp>

      </div>

      <div className="h-15">
        <button type="button" class="btn btn-primary p-y-2 m-y-2">Navigation</button>
      </div>
    <UsersTable></UsersTable>
    </div>
  );
}

export default App;
