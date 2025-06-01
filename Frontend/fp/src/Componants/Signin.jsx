import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './Signin.css'; // Import custom CSS
import Navbar from './Navbar';
import Footer from './Footer';

const Signin = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />

      <main className="flex-grow-1 d-flex justify-content-center align-items-center bg-light py-5">
        <div className="card shadow-lg p-4 signin-card">
          <h4 className="text-center mb-3">Welcome to Fundable!</h4>
          <p className="text-center text-muted">Login below or create an account to continue.</p>

          <div className="row g-4 mt-4">
            {/* Social Login */}
            <div className="col-md-4 text-center">
              <h5 className="mb-3">Login via Social</h5>
              <button className="btn btn-primary w-100 mb-2">Sign in with Facebook</button>
              <button className="btn btn-info w-100 text-white">Sign in with LinkedIn</button>
            </div>

            {/* Email Login */}
            <div className="col-md-4 border-start border-end px-4">
              <h5 className="text-center mb-3">Login with Email</h5>
              <input type="email" placeholder="youremail@example.com" className="form-control mb-3" />
              <input type="password" placeholder="Password" className="form-control mb-3" />
              <div className="d-flex justify-content-between align-items-center">
                <a href="#" className="small">Forgot password?</a>
                <button className="btn btn-secondary">Login</button>
              </div>
            </div>

            {/* Create Account */}
            <div className="col-md-4">
              <h5 className="text-center mb-3">Create an Account</h5>
              <div className="d-flex gap-2 mb-3">
                <input type="text" placeholder="First" className="form-control" />
                <input type="text" placeholder="Last" className="form-control" />
              </div>
              <input type="email" placeholder="youremail@example.com" className="form-control mb-3" />
              <input type="password" placeholder="Password" className="form-control mb-3" />
              <button className="btn btn-dark w-100">Create Account</button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Signin;
