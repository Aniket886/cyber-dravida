import { useState } from "react";
import { useSiteData } from "@/contexts/SiteDataContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { RotateCcw, Save, Plus, Trash2, ArrowUp, ArrowDown } from "lucide-react";
import type { ServicesData, ServiceItem } from "@/data/siteData";

const inputStyle = { background: "#13131a", borderColor: "#1e1e2e", color: "#cbd5e1" };
const labelStyle = { color: "#94a3b8" };

const ServicesEditor = () => {
  const { data, updateSection, resetSection } = useSiteData();
  const [form, setForm] = useState<ServicesData>(JSON.parse(JSON.stringify(data.services)));

  const save = () => { updateSection("services", form); toast({ title: "✅ Services saved!" }); };
  const reset = () => { const d = JSON.parse(JSON.stringify(data.services)); resetSection("services"); setForm(d); toast({ title: "Services reset" }); };

  const updateItem = (i: number, key: keyof ServiceItem, value: string) => {
    const items = form.items.map((item, j) => j === i ? { ...item, [key]: value } : item);
    setForm({ ...form, items });
  };

  const addItem = () => {
    setForm({ ...form, items: [...form.items, { icon: "Zap", color: "text-primary", title: "", slug: "", desc: "" }] });
  };

  const removeItem = (i: number) => {
    if (!confirm("Remove this service?")) return;
    setForm({ ...form, items: form.items.filter((_, j) => j !== i) });
  };

  const move = (i: number, dir: -1 | 1) => {
    const items = [...form.items];
    const ni = i + dir;
    if (ni < 0 || ni >= items.length) return;
    [items[i], items[ni]] = [items[ni], items[i]];
    setForm({ ...form, items });
  };

  return (
    <div className="max-w-2xl space-y-6">
      <div>
        <Label className="text-xs mb-1 block" style={labelStyle}>Section Heading</Label>
        <Input value={form.heading} onChange={(e) => setForm({ ...form, heading: e.target.value })} style={inputStyle} />
      </div>
      <div>
        <Label className="text-xs mb-1 block" style={labelStyle}>Subheading</Label>
        <Input value={form.subheading} onChange={(e) => setForm({ ...form, subheading: e.target.value })} style={inputStyle} />
      </div>

      <div>
        <Label className="text-xs mb-2 block" style={labelStyle}>Service Cards</Label>
        {form.items.map((item, i) => (
          <div key={i} className="p-4 rounded-lg mb-3 border" style={{ background: "#0c0c14", borderColor: "#1e1e2e" }}>
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-medium" style={{ color: "#e2e8f0" }}>{item.title || "New Service"}</span>
              <div className="flex gap-1">
                <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => move(i, -1)} disabled={i === 0}><ArrowUp size={12} /></Button>
                <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => move(i, 1)} disabled={i === form.items.length - 1}><ArrowDown size={12} /></Button>
                <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => removeItem(i)} style={{ color: "#ef4444" }}><Trash2 size={12} /></Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-2">
              <div><Label className="text-[10px] block mb-1" style={labelStyle}>Title</Label><Input value={item.title} onChange={(e) => updateItem(i, "title", e.target.value)} style={inputStyle} /></div>
              <div><Label className="text-[10px] block mb-1" style={labelStyle}>Slug</Label><Input value={item.slug} onChange={(e) => updateItem(i, "slug", e.target.value)} style={inputStyle} /></div>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-2">
              <div><Label className="text-[10px] block mb-1" style={labelStyle}>Icon (lucide)</Label><Input value={item.icon} onChange={(e) => updateItem(i, "icon", e.target.value)} style={inputStyle} /></div>
              <div>
                <Label className="text-[10px] block mb-1" style={labelStyle}>Color</Label>
                <select value={item.color} onChange={(e) => updateItem(i, "color", e.target.value)} className="w-full h-10 rounded-md border px-3 text-sm" style={inputStyle}>
                  <option value="text-primary">Indigo</option>
                  <option value="text-secondary">Cyan</option>
                  <option value="text-destructive">Rose</option>
                </select>
              </div>
            </div>
            <div><Label className="text-[10px] block mb-1" style={labelStyle}>Description</Label><Textarea value={item.desc} onChange={(e) => updateItem(i, "desc", e.target.value)} rows={2} style={inputStyle} /></div>
          </div>
        ))}
        <Button variant="outline" size="sm" onClick={addItem} style={{ borderColor: "#1e1e2e", color: "#94a3b8" }}>
          <Plus size={14} className="mr-1" /> Add Service
        </Button>
      </div>

      <div className="flex gap-3 pt-4">
        <Button onClick={save} style={{ background: "#6366f1", color: "#fff", boxShadow: "0 0 20px rgba(99,102,241,0.4)" }}><Save size={14} className="mr-1" /> Save Changes</Button>
        <Button variant="outline" onClick={reset} style={{ borderColor: "#1e1e2e", color: "#94a3b8" }}><RotateCcw size={14} className="mr-1" /> Reset</Button>
      </div>
    </div>
  );
};

export default ServicesEditor;
