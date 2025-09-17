import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();
    console.log(error);

    return (
        <div id="error-page">
            <h1>404 - Page Not Found</h1>
            <p>Oops! The page you're looking for doesn't exist.</p>
            <Link to="/">Go back to Home</Link>
        </div>
    );
}

export default ErrorPage;