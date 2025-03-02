import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const { registerNewUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photo.value;
    const password = form.password.value;

    const passwordLength = /(?=.{6,})/;
    const passwordRegexUpperCase = /(?=.*[A-Z])/;
    const passwordRegexLowerCase = /(?=.*[a-z])/;
    if (!passwordRegexUpperCase.test(password)) {
      toast.error("Must have an Uppercase letter in the password");
      return;
    } else if (!passwordRegexLowerCase.test(password)) {
      toast.error("Must have a Lowercase letter in the password");
      return;
    } else if (!passwordLength.test(password)) {
      toast.error("Length must be at least 6 character");
      return;
    }

    try {
      await registerNewUser(email, password);

      await updateUserProfile(name, photoURL);

      toast.success("Registration successful!");
      navigate("/login");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center py-10 px-5">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="w-full p-2 mb-2 border rounded"
            required
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="w-full p-2 mb-2 border rounded"
            required
          />
          <input
            type="text"
            placeholder="Photo URL"
            name="photo"
            className="w-full p-2 mb-2 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="w-full p-2 mb-2 border rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:cursor-pointer"
          >
            Register
          </button>
        </form>
        <p className="mt-2 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
