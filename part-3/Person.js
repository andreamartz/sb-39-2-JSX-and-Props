const Person = (props) => {
  let voteMsg = props.age > 18 ? "please go vote!" : "you must be 18";
  let hobbies = props.hobbies.map(hobby => <li>{hobby}</li>);
  return (
    <div>
      <p>Learn some information about this person:
        <ul>
          <li><b>Name:</b> {props.name.slice(0, 6)}</li>
          <li><b>Age:</b> {props.age}</li>
          <ul><b>Hobbies:</b> 
            {hobbies}
          </ul>
        </ul>
      </p>
      <h3>{voteMsg}</h3>
    </div>
  )
}
