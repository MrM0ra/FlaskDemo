import './App.css';
import List from './components/List';
import { Modal } from './components/Modal';
import TaskForm from './components/TaskForm';

function App() {
  const appStyle={ display: "grid",
        justifyContent: "center",
    };
  return (
    <div style={appStyle} className="App">
      <TaskForm/>
      <List/>
      <Modal/>
    </div>
  );
}

export default App;
