import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Archit Tripathi",
    email: "archit@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Anushree Tiwari",
    email: "anushree@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
