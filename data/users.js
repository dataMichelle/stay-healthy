const users = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    password: "password123", // ⚠️ You should hash passwords in a real app!
    role: "player",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    password: "securepass",
    role: "instructor",
  },
  {
    id: "3",
    name: "Admin User",
    email: "admin@example.com",
    password: "adminpass",
    role: "owner",
  },
];

export default users;
