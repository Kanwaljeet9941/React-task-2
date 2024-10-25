function Userprofile(props) {
  const { info } = props;
  return (
    <div>
      <h1>Task 1 ----------------</h1>
      <h3>Name : {info.name}</h3>
      <p>Age : {info.age}</p>
      {info.location.length > 0 && <p>Location : {info.location}</p>}
      <p>Active : {info.isActive ? "Active User" : "Inactive User"}</p>
    </div>
  );
}

export default Userprofile;
