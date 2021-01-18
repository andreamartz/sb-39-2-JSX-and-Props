const App = () => {
  return (
    <div>
      <Person name="Andrea" age={17} hobbies={['singing', 'reading']}/>
      <Person name="VeryLongName" age={36} hobbies={['running', 'sewing', 'dancing']}/>
      <Person name="Ingrid" age={35} hobbies={['swimming']}/>
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById("root"));