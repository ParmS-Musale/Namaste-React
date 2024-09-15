import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h1>About Page</h1>
            <p>This is the About page.</p>
            <User name= { "Parm Dev From Function"}  Location = {"Pune"} />
            <UserClass name= { "First class Function"} Location = {"Pune"} email ={"abc@gmail.com"}/>     
        </div>
    )
}

export default About;