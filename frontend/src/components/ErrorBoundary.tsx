import { useRouteError, isRouteErrorResponse, Link } from 'react-router-dom';

const ErrorBoundary = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="text-center p-8 bg-white rounded-lg shadow-xl max-w-lg">
            <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
            <p className="text-gray-600 mb-8">
              Oops! The page you're looking for doesn't exist or has been moved.
            </p>
            <Link
              to="/"
              className="inline-block bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
            >
              Return to Home
            </Link>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center p-8 bg-white rounded-lg shadow-xl max-w-lg">
          <h1 className="text-4xl font-bold text-red-500 mb-4">Oops!</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Something went wrong
          </h2>
          <p className="text-gray-600 mb-8">
            {error.statusText || 'An unexpected error occurred'}
          </p>
          <Link
            to="/"
            className="inline-block bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-xl max-w-lg">
        <h1 className="text-4xl font-bold text-red-500 mb-4">Oops!</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Something went wrong
        </h2>
        <p className="text-gray-600 mb-8">
          An unexpected error occurred. Please try again later.
        </p>
        <Link
          to="/"
          className="inline-block bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorBoundary; 