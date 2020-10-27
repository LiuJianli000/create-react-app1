import './App.css';

function App() {
  const handleClick = () => {
    console.log('hello');
  };

  return (
    <div className="App">
      <h3>hello</h3>
      <p>world</p>
      <div>learning react</div>
      <button type="button" onClick={handleClick}>
        click
      </button>
    </div>
  );
}

export default App;
