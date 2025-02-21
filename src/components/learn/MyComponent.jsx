// () => { }
//component = html + css + js
import "./style.css";

const MyComponent = () => {
  const userName = "nghiaphunng18";
  const userAge = 21;
  const arr = [1, 2, 3, 4, 5];
  const userInfo = {
    name: userName,
    age: userAge,
  };

  return (
    <>
      <div>
        {userName}
        {userAge}
      </div>
      <div>{arr}</div>
      <div>{JSON.stringify(userInfo)}</div>
      <div>{console.log(userName)}</div>

      <div className="child">child</div>
    </>
  );
};

export default MyComponent;
