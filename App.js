import "./App.css";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Body from "./components/body";
function App() {
  return (
    <div className="App">
      <Sidebar />
      <Header />
      <Body />
    </div>
  );
}

export default App;
