const App = () => (
  <div>
    <Tweet username="my-username" name="Andrea" date="January 18" message="Content of my tweet" />
    <Tweet username="your-username" name="Goldie" date="December 31" message="I have a tweet too. Meow." />
    <Tweet username="my-username" name="Andrea" date="January 18" message="And let me say another thing..." />
  </div>
)


ReactDOM.render(<App />, document.getElementById("root"));