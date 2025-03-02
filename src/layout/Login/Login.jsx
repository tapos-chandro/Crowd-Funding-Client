import { Link } from "react-router-dom";

const Login = () => {

      //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const navigate = useNavigate();
  //   const provider = new GoogleAuthProvider();

  //   const handleLogin = async (e) => {
  //     e.preventDefault();
  //     try {
  //       await signInWithEmailAndPassword(auth, email, password);
  //       toast.success("Login successful!");
  //       navigate("/");
  //     } catch (error) {
  //       toast.error("Invalid email or password. Please try again.");
  //     }
  //   };

  //   const handleGoogleLogin = async () => {
  //     try {
  //       await signInWithPopup(auth, provider);
  //       toast.success("Login successful with Google!");
  //       navigate("/");
  //     } catch (error) {
  //       toast.error("Google login failed. Please try again.");
  //     }
  //   };

  return (
    <div className="flex justify-center items-center py-10">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-2 border rounded"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-2 border rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded"
          >
            Login
          </button>
        </form>
        <button
          className="w-full bg-red-500 text-white p-2 rounded mt-2"
        >
          Login with Google
        </button>
        <p className="mt-2 text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
