import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/sign-up');
  };

  const handleLogIn = () => {
    navigate('/login')
  }

  return (
    <div>
      <button onClick={handleSignUp}>Sign Up</button>
      <button onClick={(handleLogIn)}>Log In</button>

    </div>
  );
};

export default LandingPage;
