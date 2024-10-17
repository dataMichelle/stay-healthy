"use client"; // Mark this component as a Client Component

import { SessionProvider } from "next-auth/react";

export default function SessionLayout({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}
