import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const formRef = useRef(null); // 🔹 Reference to the entire form
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData object from the form reference
    const formData = new FormData(formRef.current);

    // Convert FormData into a plain JS object (for debugging or sending to API)
    const data = Object.fromEntries(formData.entries());
    console.log("Login Data:", data);

    // Example authentication API request
    // try {
    //   const res = await fetch("http://localhost:5000/api/auth/login", {
    //     method: "POST",
    //     body: formData, // ✅ sending FormData directly
    //   });

    //   if (!res.ok) {
    //     throw new Error("Invalid email or password");
    //   }

    //   const result = await res.json();
    //   console.log("Server Response:", result);

    //   // Navigate to dashboard or home after successful login
    //   navigate("/home");
    // } catch (err) {
    //   setError(err.message);
    // }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>

        {error && (
          <p className="text-red-500 text-center mb-4 font-medium">{error}</p>
        )}

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Sign In
          </button>

          {/* Optional - Register Link */}
          <p className="text-center text-gray-600 mt-4">
            Don’t have an account?{" "}
            <span
              onClick={() => navigate("/register")}
              className="text-blue-600 font-semibold cursor-pointer hover:underline"
            >
              Register
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
