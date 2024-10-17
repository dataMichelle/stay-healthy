import { signIn } from "next-auth/react";

export default function SignIn() {
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const result = await signIn("credentials", {
      redirect: true,
      email,
      password,
    });

    // Handle result or errors here
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-4">Sign In</h1>
      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          className="w-full p-2 border mb-2"
          required
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          className="w-full p-2 border mb-2"
          required
        />
        <button type="submit" className="w-full p-2 bg-blue-500 text-white">
          Sign In
        </button>
      </form>
    </div>
  );
}
