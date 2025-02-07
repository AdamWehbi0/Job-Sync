import { useState } from 'react';
import './App.css';
import supabase from './supabase-client';

function App() {
  // State variables for capturing user input
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to sign up the user and insert extra info into your 'User' table
  const signUpUser = async () => {
    // Pass a single object containing email, password, and an options field with extra data
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username: username,
          first_name: firstName,
          last_name: lastName,
        },
      },
    });

    if (error) {
      console.error("Error signing up:", error);
      return;
    }

    if (data.user) {
      console.log("User signed up successfully:", data.user);
    }
  };

  return (
    <div className="App">
      <h1>Sign Up</h1>
      <div>
        <input 
          type="text" 
          placeholder="Username" 
          onChange={(e) => setUsername(e.target.value)}
        />
        <input 
          type="text" 
          placeholder="First Name" 
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input 
          type="text" 
          placeholder="Last Name" 
          onChange={(e) => setLastName(e.target.value)}
        />
        <input 
          type="email" 
          placeholder="Email" 
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type="password" 
          placeholder="Password" 
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={signUpUser}>Sign Up</button>
      </div>
    </div>
  );
}

export default App;
