import "./App.css";
import { Button } from "antd";
import { Api } from "./services/TodoApi";
const todoApi = new Api({
  baseUrl: "http://localhost:3000",
});
const App = () => {
  const handleClick = () => {
    todoApi.api
      .authControllerLogin({
        name: "viky",
        password: "123456",
      })
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <Button type="primary" onClick={handleClick}>
        登录
      </Button>
    </div>
  );
};

export default App;
