import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";

const ADMIN_PASSWORD = "cyberdravida2025";

interface Props {
  onLogin: () => void;
}

const AdminLogin = ({ onLogin }: Props) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem("cd-admin", "1");
      onLogin();
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: "#080808" }}>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm mx-4 p-8 rounded-xl border"
        style={{ background: "#13131a", borderColor: "#1e1e2e" }}
      >
        <div className="flex flex-col items-center gap-4 mb-6">
          <img src="/CDTRANS.png" alt="Cyber Dravida" className="h-14 w-14 object-contain" />
          <h1 className="text-xl font-bold" style={{ color: "#e2e8f0" }}>
            Admin Access
          </h1>
        </div>

        <div className="space-y-4">
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4" style={{ color: "#64748b" }} />
            <Input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-10"
              style={{
                background: "#080808",
                borderColor: error ? "#ef4444" : "#1e1e2e",
                color: "#cbd5e1",
              }}
              autoFocus
            />
          </div>
          {error && (
            <p className="text-sm text-center" style={{ color: "#ef4444" }}>
              Incorrect password
            </p>
          )}
          <Button
            type="submit"
            className="w-full"
            style={{
              background: "#6366f1",
              color: "#fff",
              boxShadow: "0 0 20px rgba(99,102,241,0.4)",
            }}
          >
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
