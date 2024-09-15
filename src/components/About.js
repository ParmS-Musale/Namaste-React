import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h1>About Page</h1>
            <p>This is the About page.</p>
            <User name= { "Parm Dev From Function"}  Location = {"Pune"} />
            <UserClass name= { "First class Function"} Location = {"Pune"}/>    
            <UserClass name= { "Second class Function"} Location = {"Pune"}/>    
            <UserClass name= { "Third class Function"} Location = {"Pune"}/>    
        </div>
    )
}

export default About;