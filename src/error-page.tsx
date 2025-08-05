import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  const errorMessage = isErrorWithMessage(error)
    ? error.statusText || error.message
    : String(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{errorMessage}</i>
      </p>
    </div>
  );
}

function isErrorWithMessage(
  error: unknown
): error is { statusText?: string; message?: string } {
  return (
    typeof error === "object" &&
    error !== null &&
    ("statusText" in error || "message" in error)
  );
}
