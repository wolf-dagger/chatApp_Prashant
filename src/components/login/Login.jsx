import { useState } from "react";
import "./login.css";
import { toast } from "react-toastify";

const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    toast.success("Successfully logged In");
  };

  return (
    <>
      <div className="loginn">
        <div className="item">
          <h2>Welcome Back</h2>
          <form onSubmit={handleLogin}>
            <input type="text" name="email" placeholder="Email..." />
            <input type="password" name="password" placeholder="Password..." />
            <button type="submit">Sigh In</button>
          </form>
        </div>
        <div className="seprator"></div>
        <div className="item">
          <h2>Create An Account</h2>
          <form>
            <label htmlFor="file" style={{ cursor: "pointer" }}>
              <img src={avatar.url || "./avatar.png"} alt="" />
              Upload an Image
            </label>
            <input
              type="file"
              name="profilePic"
              id="file"
              style={{ display: "none" }}
              onChange={handleAvatar}
            />
            <input type="text" name="username" placeholder="User Name..." />
            <input type="text" name="email" placeholder="Email..." />
            <input type="password" name="password" placeholder="Password..." />
            <button>Sigh Up</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
