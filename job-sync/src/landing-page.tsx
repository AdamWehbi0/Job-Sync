import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from './supabase-client';
import './LandingPage.css';

const LandingPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

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
      navigate('/dashboard');
    }
  };

  const handleSignUp = () => {
    navigate('/sign-up');
  };

  return (
    <div className="landing-container">
      <div className="info-section">
        <h1>Stay on top of your job applications</h1>
        <p>Track applications, set reminders, and receive follow-up emails automatically.</p>
      </div>
      <div className="login-section">
        <h2>Log In</h2>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input 
            className="sign-in-input"
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
            className="sign-in-input"
            id="password"
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="login-button" onClick={handleLogin}>Log In</button>
        <p className="divider">or</p>
        <button className="oauth-button linkedin-button">
          <img src="/icons/linkedin.png" alt="LinkedIn" className="icon" /> Log in with LinkedIn
        </button>
        <button className="oauth-button google-button">
          <img src="/icons/google.png" alt="Google" className="icon" /> Log in with Google
        </button>
        <p className="signup-text">Don't have an account? <button className="signup-link" onClick={handleSignUp}>Create an account</button></p>
      </div>
    </div>
  );
};

export default LandingPage;
