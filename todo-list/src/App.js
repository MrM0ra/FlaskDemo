import './App.css';
import List from './components/List';

function App() {
  const appStyle={ display: "grid",
        justifyContent: "center",
    };
  return (
    <div style={appStyle} className="App">
      <List/>
    </div>
  );
}

export default App;
