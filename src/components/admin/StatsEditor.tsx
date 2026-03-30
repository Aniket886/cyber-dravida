import { useState } from "react";
import { useSiteData } from "@/contexts/SiteDataContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { RotateCcw, Save, Plus, Trash2 } from "lucide-react";
import type { StatsData } from "@/data/siteData";

const inputStyle = { background: "#13131a", borderColor: "#1e1e2e", color: "#cbd5e1" };
const labelStyle = { color: "#94a3b8" };

const StatsEditor = () => {
  const { data, updateSection, resetSection } = useSiteData();
  const [form, setForm] = useState<StatsData>(JSON.parse(JSON.stringify(data.stats)));

  const save = () => { updateSection("stats", form); toast({ title: "✅ Stats saved!" }); };
  const reset = () => { resetSection("stats"); setForm(JSON.parse(JSON.stringify(data.stats))); toast({ title: "Stats reset" }); };

  const updateItem = (i: number, key: string, value: any) => {
    const items = form.items.map((item, j) => j === i ? { ...item, [key]: value } : item);
    setForm({ ...form, items });
  };

  return (
    <div className="max-w-2xl space-y-6">
      <div><Label className="text-xs mb-1 block" style={labelStyle}>Section Heading</Label><Input value={form.heading} onChange={(e) => setForm({ ...form, heading: e.target.value })} style={inputStyle} /></div>

      <div>
        <Label className="text-xs mb-2 block" style={labelStyle}>Stats ({form.items.length}/8)</Label>
        {form.items.map((item, i) => (
          <div key={i} className="flex gap-3 mb-3 items-end">
            <div className="flex-1"><Label className="text-[10px] block mb-1" style={labelStyle}>Value</Label><Input type="number" value={item.value} onChange={(e) => updateItem(i, "value", Number(e.target.value))} style={inputStyle} /></div>
            <div className="w-20"><Label className="text-[10px] block mb-1" style={labelStyle}>Suffix</Label><Input value={item.suffix} onChange={(e) => updateItem(i, "suffix", e.target.value)} style={inputStyle} placeholder="+" /></div>
            <div className="flex-1"><Label className="text-[10px] block mb-1" style={labelStyle}>Label</Label><Input value={item.label} onChange={(e) => updateItem(i, "label", e.target.value)} style={inputStyle} /></div>
            {form.items.length > 1 && <Button variant="ghost" size="icon" onClick={() => setForm({ ...form, items: form.items.filter((_, j) => j !== i) })} style={{ color: "#ef4444" }}><Trash2 size={14} /></Button>}
          </div>
        ))}
        {form.items.length < 8 && (
          <Button variant="outline" size="sm" onClick={() => setForm({ ...form, items: [...form.items, { value: 0, suffix: "+", label: "" }] })} style={{ borderColor: "#1e1e2e", color: "#94a3b8" }}>
            <Plus size={14} className="mr-1" /> Add Stat
          </Button>
        )}
      </div>

      <div className="flex gap-3 pt-4">
        <Button onClick={save} style={{ background: "#6366f1", color: "#fff", boxShadow: "0 0 20px rgba(99,102,241,0.4)" }}><Save size={14} className="mr-1" /> Save Changes</Button>
        <Button variant="outline" onClick={reset} style={{ borderColor: "#1e1e2e", color: "#94a3b8" }}><RotateCcw size={14} className="mr-1" /> Reset</Button>
      </div>
    </div>
  );
};

export default StatsEditor;
