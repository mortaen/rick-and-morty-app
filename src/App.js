import "./App.css"

function App({ data }) {
  const rickSanchez = data.find((el) => el.id === 1)

  return (
    <div className="App">
      <main className="main">
        <section className="fear-and-loathing-section">
          <img
            src={rickSanchez.image}
            className="rick-image"
            alt="Rick Sanchez"
          />
        </section>
        <section className="heads-section"></section>
        <section className="mib-section"></section>
      </main>
    </div>
  )
}

export default App
