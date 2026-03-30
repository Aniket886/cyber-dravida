import { useState } from "react";
import AdminLogin from "./AdminLogin";
import AdminPanel from "./AdminPanel";

const AdminRoute = () => {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem("cd-admin") === "1");

  if (!authed) {
    return <AdminLogin onLogin={() => setAuthed(true)} />;
  }

  return <AdminPanel onLogout={() => setAuthed(false)} />;
};

export default AdminRoute;
