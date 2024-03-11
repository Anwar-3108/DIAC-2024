import { useRouteError } from "react-router-dom";
const ErrorBoundary = () => {
  let error = useRouteError();
  console.error(error);
  return (
    <div>
      {/* // Uncaught ReferenceError: path is not defined */}
      <h1>404 page</h1>
      <div>   Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iure perferendis architecto. Optio voluptatum porro reiciendis adipisci, vel quia laboriosam molestiae sunt officia, perspiciatis accusantium ea nisi vero doloremque magnam sapiente voluptate quam. Neque adipisci tempore in ullam, reiciendis enim atque deleniti voluptatum commodi iure. Veritatis enim illo quam molestiae! </div>;
    </div>
  );
};

export default ErrorBoundary;
