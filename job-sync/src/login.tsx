import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from './supabase-client';

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); // Uncomment and adjust if you need to navigate after login

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error("Error logging in:", error);
      return;
    }

    if (data.user) {
      console.log("Successfully Logged In!");
      navigate('/dashboard')
    }
  };

  return (
    <div className="login-page">
      <h1>Log In</h1>
      <div className="login-form">
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input 
            id="email"
            type="email" 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input 
            id="password"
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin}>Log In</button>
      </div>
    </div>
  );
}

export default LoginPage;
