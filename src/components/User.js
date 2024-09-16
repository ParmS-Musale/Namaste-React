import { useEffect, useState } from "react";
import { GITHUB_API_URL } from "../utils/constant";

const User = (props) => {
    const [userData, setUserData] = useState(null);
    const { name, Location } = props;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(GITHUB_API_URL);
                const data = await response.json();
                setUserData(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    if (!userData) {
        return <div className="p-4 text-center">Loading...</div>;
    }

    return (
        <div className="bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto my-4 border border-gray-200">
            <header className="text-xl font-semibold mb-4">Function Based Component</header>
            <img src={userData.avatar_url} alt={userData.name} className="w-32 h-32 rounded-full mx-auto mt-4" />
            <h1 className="text-2xl font-bold mb-2">Name: {userData.name || name}</h1>
            <h2 className="text-xl text-gray-600 mb-2">Location: {userData.location || Location}</h2>
            <p className="text-gray-800">Contact: {userData.email || "musaleparm9541@gmail.com"}</p>
        </div>
    );
};

export default User;
