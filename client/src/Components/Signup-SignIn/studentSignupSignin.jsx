import React from "react";
import "./SignupSignIn.css";

const SignupSignIn = () => {
  return (
    <>
      <h1>Collage SignUp Login</h1>
      <div className="box">
        <div className="main">
          <input type="checkbox" id="chk" aria-hidden="true" />

          <div className="signup">
            <form>
              <label for="chk" aria-hidden="true">
                Sign up
              </label>
              <div className="alag0">
                <div className="alag1">
                  <input placeholder="User name" />
                  <input placeholder="First Name" />
                  <input placeholder="Last Name" />
                  <input placeholder="Address" />
                </div>
                <div className="alag2">
                  <input placeholder="Email" />
                  <input placeholder="Phone Number" />
                  <select>
                    <option value="BSC(CS)">BSC(CS)</option>
                    <option value="plane(Bsc)">plane(Bsc)</option>
                    <option value="Biotechnology">Biotechnology</option>
                    <option value="BCA">BCA</option>
                    <option value="BA">BA</option>
                    <option value="Bcom">Bcom</option>
                    <option value="collageStaff">collageStaff</option>
                  </select>
                  <input type="password" placeholder="Password" />
                </div>
              </div>
              <button>Sign up</button>
            </form>
          </div>

          <div className="login">
            <form>
              <label for="chk" aria-hidden="true">
                Login
              </label>
              <input placeholder="User Name" />
              <input type="password" placeholder="Password" />
              <button>Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupSignIn;
