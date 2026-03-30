import { useState } from "react";
import { useSiteData } from "@/contexts/SiteDataContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/hooks/use-toast";
import { RotateCcw, Save } from "lucide-react";
import type { ChatbotData } from "@/data/siteData";

const inputStyle = { background: "#13131a", borderColor: "#1e1e2e", color: "#cbd5e1" };
const labelStyle = { color: "#94a3b8" };

const ChatbotEditor = () => {
  const { data, updateSection, resetSection } = useSiteData();
  const [form, setForm] = useState<ChatbotData>({ ...data.chatbot });

  const save = () => { updateSection("chatbot", form); toast({ title: "✅ Chatbot settings saved!" }); };
  const reset = () => { resetSection("chatbot"); setForm({ ...data.chatbot }); toast({ title: "Chatbot reset" }); };

  return (
    <div className="max-w-2xl space-y-6">
      <div className="flex items-center justify-between p-4 rounded-lg border" style={{ background: "#0c0c14", borderColor: "#1e1e2e" }}>
        <div>
          <Label className="text-sm block" style={{ color: "#e2e8f0" }}>Enable Chatbot</Label>
          <p className="text-xs mt-1" style={labelStyle}>Show/hide the floating chat button on the site</p>
        </div>
        <Switch checked={form.enabled} onCheckedChange={(checked) => setForm({ ...form, enabled: checked })} />
      </div>

      <div><Label className="text-xs mb-1 block" style={labelStyle}>Bot Name</Label><Input value={form.botName} onChange={(e) => setForm({ ...form, botName: e.target.value })} style={inputStyle} /></div>
      <div><Label className="text-xs mb-1 block" style={labelStyle}>Subtitle</Label><Input value={form.subtitle} onChange={(e) => setForm({ ...form, subtitle: e.target.value })} style={inputStyle} /></div>
      <div><Label className="text-xs mb-1 block" style={labelStyle}>Welcome Message</Label><Textarea value={form.welcomeMessage} onChange={(e) => setForm({ ...form, welcomeMessage: e.target.value })} rows={3} style={inputStyle} /></div>

      <div className="flex gap-3 pt-4">
        <Button onClick={save} style={{ background: "#6366f1", color: "#fff", boxShadow: "0 0 20px rgba(99,102,241,0.4)" }}><Save size={14} className="mr-1" /> Save Changes</Button>
        <Button variant="outline" onClick={reset} style={{ borderColor: "#1e1e2e", color: "#94a3b8" }}><RotateCcw size={14} className="mr-1" /> Reset</Button>
      </div>
    </div>
  );
};

export default ChatbotEditor;
