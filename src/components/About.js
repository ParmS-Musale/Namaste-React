import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div className="max-w-4xl mx-auto p-8">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">About Page</h1>
            <p className="text-lg text-center text-gray-600 mb-12">
                This is the About page where we showcase user details using both function and class components.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800">Functional Component</h2>
                    <User name="Parm Dev From Function" location="Pune" />
                </div>

                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800">Class Component</h2>
                    <UserClass name="First class Function" location="Pune" email="abc@gmail.com" />
                </div>
            </div>
        </div>
    )
}

export default About;
