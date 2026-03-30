import { useState } from "react";
import { useSiteData } from "@/contexts/SiteDataContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { RotateCcw, Save } from "lucide-react";
import type { FooterData } from "@/data/siteData";

const inputStyle = { background: "#13131a", borderColor: "#1e1e2e", color: "#cbd5e1" };
const labelStyle = { color: "#94a3b8" };

const FooterEditor = () => {
  const { data, updateSection, resetSection } = useSiteData();
  const [form, setForm] = useState<FooterData>({ ...data.footer });

  const save = () => { updateSection("footer", form); toast({ title: "✅ Footer saved!" }); };
  const reset = () => { resetSection("footer"); setForm({ ...data.footer }); toast({ title: "Footer reset" }); };

  return (
    <div className="max-w-2xl space-y-6">
      <div><Label className="text-xs mb-1 block" style={labelStyle}>Copyright Text</Label><Input value={form.copyright} onChange={(e) => setForm({ ...form, copyright: e.target.value })} style={inputStyle} /></div>

      <div className="flex gap-3 pt-4">
        <Button onClick={save} style={{ background: "#6366f1", color: "#fff", boxShadow: "0 0 20px rgba(99,102,241,0.4)" }}><Save size={14} className="mr-1" /> Save Changes</Button>
        <Button variant="outline" onClick={reset} style={{ borderColor: "#1e1e2e", color: "#94a3b8" }}><RotateCcw size={14} className="mr-1" /> Reset</Button>
      </div>
    </div>
  );
};

export default FooterEditor;
