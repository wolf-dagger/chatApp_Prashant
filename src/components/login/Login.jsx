import { useState } from "react";
import "./login.css";
import { toast } from "react-toastify";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../../lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import upload from "../../lib/upload";

const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });

  const [loading, setloading] = useState(false);

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setloading(true);

    const formData = new FormData(e.target);

    const { username, email, password } = Object.fromEntries(formData);

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const imgUrl = await upload(avatar.file);

      await setDoc(doc(db, "users", res.user.uid), {
        username,
        email,
        avatar: imgUrl,
        id: res.user.uid,
        blocked: [],
      });

      await setDoc(doc(db, "userchats", res.user.uid), {
        chats: [],
      });

      toast.success("Account created You can login now");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setloading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setloading(true);

    const formData = new FormData(e.target);

    const { email, password } = Object.fromEntries(formData);

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setloading(false);
    }
  };

  return (
    <>
      <div className="loginn">
        <div className="item">
          <h2>Welcome Back</h2>
          <form onSubmit={handleLogin}>
            <input type="text" name="email" placeholder="Email..." />
            <input type="password" name="password" placeholder="Password..." />
            <button type="submit" disabled={loading}>
              {loading ? "loading" : "Sigh In"}
            </button>
          </form>
        </div>
        <div className="seprator"></div>
        <div className="item">
          <h2>Create An Account</h2>
          <form onSubmit={handleRegister}>
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
            <button type="submit" disabled={loading}>
              {loading ? "loading" : "Sigh Up"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
