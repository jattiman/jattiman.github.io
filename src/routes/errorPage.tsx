import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div>
      <p className="main-title">lol idk</p>
      <p>{`${JSON.stringify(error)}`}</p>
    </div>
  );
}
