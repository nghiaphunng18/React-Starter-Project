const TodoData = (props) => {
  console.log(">>> check props: ", props);
  const { data } = props;
  console.log("check data: ", data);

  return (
    <div className="todo-data">
      <div>My nam is {props.name}</div>
      <div>Learning React</div>
      <div>Watching Youtube</div>
    </div>
  );
};

export default TodoData;
