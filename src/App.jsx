import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';



function App() {
  return (
    <div>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">facebook</a>
          </div>
          <div>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#" className="btn btn-success" id="create-account-btn">
                  Create Account
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <p className="ad">
        <span className="icon"></span>
        Get Facebook for Android and browse faster.
      </p>

      <form className="login" method="post" action="">
        <div className="form-group">
          <label htmlFor="email">Email or Phone</label>
          <input type="text" className="form-control" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" />
        </div>
        <input type="button" className="btn btn-default btn-block" value="Log In" />
        <div className="text-center">
          <a href="#" className="btn btn-success signup">
            Create New Account
          </a>
        </div>
        <a href="#" className="help-block">Forgot Password?</a>
        <a href="#" className="help-block">Help Center</a>
      </form>

      <footer>
        <ul className="nav nav-pills nav-stacked">
          <li><strong>English (US)</strong></li>
          <li>Af-Soomaali</li>
          <li>português (Brasil)</li>
          <li>العربية</li>
          <li>Español</li>
          <li id="copyright">
            <strong>Facebook &copy; 2016</strong>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
