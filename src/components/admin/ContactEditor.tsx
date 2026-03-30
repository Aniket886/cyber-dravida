import { useState } from "react";
import { useSiteData } from "@/contexts/SiteDataContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { RotateCcw, Save } from "lucide-react";
import type { ContactData } from "@/data/siteData";

const inputStyle = { background: "#13131a", borderColor: "#1e1e2e", color: "#cbd5e1" };
const labelStyle = { color: "#94a3b8" };

const ContactEditor = () => {
  const { data, updateSection, resetSection } = useSiteData();
  const [form, setForm] = useState<ContactData>({ ...data.contact });

  const save = () => { updateSection("contact", form); toast({ title: "✅ Contact saved!" }); };
  const reset = () => { resetSection("contact"); setForm({ ...data.contact }); toast({ title: "Contact reset" }); };

  return (
    <div className="max-w-2xl space-y-6">
      <div><Label className="text-xs mb-1 block" style={labelStyle}>Email</Label><Input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} style={inputStyle} /></div>
      <div><Label className="text-xs mb-1 block" style={labelStyle}>Location</Label><Input value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} style={inputStyle} /></div>
      <div><Label className="text-xs mb-1 block" style={labelStyle}>Website Display</Label><Input value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} style={inputStyle} /></div>
      <div><Label className="text-xs mb-1 block" style={labelStyle}>Website URL</Label><Input value={form.websiteUrl} onChange={(e) => setForm({ ...form, websiteUrl: e.target.value })} style={inputStyle} /></div>
      <div><Label className="text-xs mb-1 block" style={labelStyle}>LinkedIn URL</Label><Input value={form.linkedinUrl} onChange={(e) => setForm({ ...form, linkedinUrl: e.target.value })} style={inputStyle} /></div>
      <div><Label className="text-xs mb-1 block" style={labelStyle}>Success Message</Label><Input value={form.successMessage} onChange={(e) => setForm({ ...form, successMessage: e.target.value })} style={inputStyle} /></div>
      <div><Label className="text-xs mb-1 block" style={labelStyle}>Success Description</Label><Input value={form.successDescription} onChange={(e) => setForm({ ...form, successDescription: e.target.value })} style={inputStyle} /></div>

      <div className="flex gap-3 pt-4">
        <Button onClick={save} style={{ background: "#6366f1", color: "#fff", boxShadow: "0 0 20px rgba(99,102,241,0.4)" }}><Save size={14} className="mr-1" /> Save Changes</Button>
        <Button variant="outline" onClick={reset} style={{ borderColor: "#1e1e2e", color: "#94a3b8" }}><RotateCcw size={14} className="mr-1" /> Reset</Button>
      </div>
    </div>
  );
};

export default ContactEditor;
