import logo from './logo.svg';
import './App.css';
import { Api } from "./Api.js";


function App() {

    const callKeycloak = async () => {

        Api.get("/secure").then(
            response => {
                console.log(response.data);
            }
        ).catch(error => { console.log(error) })
    }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
              <button
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
                  rel="noopener noreferrer"
                  onClick={callKeycloak}
        >
          Learn React
        </button>
      </header>
    </div>
  );
}

export default App;
