import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="text-center bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold text-red-600 mb-4">Oops</h1>
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                    Something went wrong. Please try again later.
                </h2>
                <h3 className="text-xl text-gray-500">
                    {error.status}: {error.statusText}
                </h3>
            </div>
        </div>
    );
};

export default Error;
