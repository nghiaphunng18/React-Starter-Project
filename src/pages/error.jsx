import { Button, Result } from "antd";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <Result
      status="404"
      title="Oops!"
      subTitle={error.statusText || error.message}
      extra={
        <Button type="primary">
          <Link to="/">
            <span>Back to homepage</span>
          </Link>
        </Button>
      }
    />
  );
};

export default ErrorPage;
