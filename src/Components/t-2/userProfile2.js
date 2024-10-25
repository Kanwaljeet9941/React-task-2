function Userprofile2(props) {
  const { info } = props;
  return (
    <div>
      <h1>Task 2 ----------------</h1>
      <h3>Name : {info.name}</h3>
      <p>
        Age : {info.age < 18 ? `${info.age} (Minor)` : `${info.age} (Adult)`}
      </p>
      {info.hasOwnProperty("email") && <p>Email : {info.email}</p>}
    </div>
  );
}

export default Userprofile2;
