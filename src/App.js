import "./App.css"

function App({ data }) {
  const rickSanchez = data.find((el) => el.id === 1)

  return (
    <div className="App">
      <header className="App-header"></header>
      <main className="main">
        <img src={rickSanchez.image} className="App-logo" alt="Rick Sanchez" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </main>
    </div>
  )
}

export default App
