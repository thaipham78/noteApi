import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Notes from './components/notes/index'
function App() {
  return (
    <div className="App">
      <h1 style={{marginLeft:"70px",marginBottom:"15px",color: "paleturquoise"}}>Note's App</h1>
    <Notes notes={[{id:"1",description:"hello"},{id:"2",description:"helloF"}]}/>
    </div>
  );
}

export default App;
