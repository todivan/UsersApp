import './App.css';
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

      <div className="h-70 p-y-2 m-y-2">
      <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
  </tbody>
</table>
      </div>

    </div>
  );
}

export default App;
