"use client"; // This ensures the component is a Client Component

import Link from "next/link";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import SessionLayout from "@/components/SessionLayout"; // Import SessionLayout

const Navbar = () => {
  const { data: session, status } = useSession(); // Fetch session status

  const handleAuthAction = () => {
    if (session) {
      signOut(); // Logout if logged in
    } else {
      signIn(); // Sign in if not logged in
    }
  };

  if (status === "loading") {
    return <div>Loading...</div>; // Loading state while session is being checked
  }

  return (
    <SessionLayout>
      {" "}
      {/* Wrap the session-sensitive content */}
      <nav className="bg-teal-600 h-20 flex justify-between items-center text-white p-5">
        <div className="h-full flex items-center text-xl">
          <Image
            className="object-contain"
            src="/logo.png"
            alt="Logo"
            width={100}
            height={100}
          />
          Stay Healthy
        </div>
        <div>
          <ul className="flex gap-8">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/appointments">Appointments</Link>
            </li>
            <li>
              <Link href="/blog">Health Blog</Link>
            </li>
            <li>
              <Link href="/reviews">Reviews</Link>
            </li>
          </ul>
        </div>
        <div>
          {/* Render Login/Logout button based on session status */}
          <button
            onClick={handleAuthAction}
            className="bg-white text-teal-600 px-4 py-2 rounded-md"
          >
            {session ? "Logout" : "Login"}
          </button>
        </div>
      </nav>
    </SessionLayout>
  );
};

export default Navbar;
