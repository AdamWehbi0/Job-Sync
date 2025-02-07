// Import the useState hook from React to manage component state
import { useState } from 'react';
// Import the CSS file for styling the component
import './App.css';
// Import the Supabase client from our configuration file
import supabase from './supabase-client';

// Define the main App component
function App() {
  const [firstName, setFirstName] = useState(""); // User's first name
  const [lastName, setLastName] = useState("");   // User's last name
  const [email, setEmail] = useState("");         // User's email address
  const [password, setPassword] = useState("");   // User's password
  const [username, setUserName] = useState("");   // User's username

  // Function to sign up the user using Supabase Auth
  const userSignUp = async () => {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          username: username,
          firstName: firstName,
          lastName: lastName,
        },
      },
    });

    if (error) {
      console.log("Error Signing up", error);
    }

    if (data.user) {
      console.log("User Signed Up Successfully");
    }
  };

  // Render the component's UI
  return (
    <div className="App"> {/* Main container with class name 'App' for styling */}
      <h1>Sign Up</h1> {/* Heading for the sign-up form */}
      <div>
        {/* Input for Username */}
        <input 
          type="text" 
          placeholder="Username" 
          onChange={(e) => setUserName(e.target.value)} 
        />
        {/* Input for First Name */}
        <input 
          type="text" 
          placeholder="First Name" 
          onChange={(e) => setFirstName(e.target.value)} 
        />
        {/* Input for Last Name */}
        <input 
          type="text" 
          placeholder="Last Name" 
          onChange={(e) => setLastName(e.target.value)} 
        />
        {/* Input for Email */}
        <input 
          type="email" 
          placeholder="Email" 
          onChange={(e) => setEmail(e.target.value)} 
        />
        {/* Input for Password */}
        <input 
          type="password" 
          placeholder="Password" 
          onChange={(e) => setPassword(e.target.value)} 
        />
        {/* Button to trigger userSignUp when clicked */}
        <button onClick={userSignUp}>Sign Up</button>
      </div>
    </div>
  );
}

// Export the App component as the default export so it can be used in other files
export default App;
