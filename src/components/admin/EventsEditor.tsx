import { useState } from "react";
import { useSiteData } from "@/contexts/SiteDataContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { RotateCcw, Save, Plus, Trash2, ArrowUp, ArrowDown } from "lucide-react";
import type { EventsData } from "@/data/siteData";

const inputStyle = { background: "#13131a", borderColor: "#1e1e2e", color: "#cbd5e1" };
const labelStyle = { color: "#94a3b8" };

const EventsEditor = () => {
  const { data, updateSection, resetSection } = useSiteData();
  const [form, setForm] = useState<EventsData>(JSON.parse(JSON.stringify(data.events)));

  const save = () => { updateSection("events", form); toast({ title: "✅ Events saved!" }); };
  const reset = () => { resetSection("events"); setForm(JSON.parse(JSON.stringify(data.events))); toast({ title: "Events reset" }); };

  const updateItem = (i: number, key: string, value: any) => {
    const items = form.items.map((item, j) => j === i ? { ...item, [key]: value } : item);
    setForm({ ...form, items });
  };

  const addEvent = () => {
    setForm({ ...form, items: [...form.items, { status: "Upcoming" as const, title: "", date: "", location: "", desc: "", link: "" }] });
  };

  const removeEvent = (i: number) => {
    if (!confirm("Remove this event?")) return;
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
      <div><Label className="text-xs mb-1 block" style={labelStyle}>Section Heading</Label><Input value={form.heading} onChange={(e) => setForm({ ...form, heading: e.target.value })} style={inputStyle} /></div>
      <div><Label className="text-xs mb-1 block" style={labelStyle}>Subheading</Label><Input value={form.subheading} onChange={(e) => setForm({ ...form, subheading: e.target.value })} style={inputStyle} /></div>

      <div>
        <Label className="text-xs mb-2 block" style={labelStyle}>Events</Label>
        {form.items.map((item, i) => (
          <div key={i} className="p-4 rounded-lg mb-3 border" style={{ background: "#0c0c14", borderColor: "#1e1e2e" }}>
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-medium" style={{ color: "#e2e8f0" }}>{item.title || "New Event"}</span>
              <div className="flex gap-1">
                <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => move(i, -1)} disabled={i === 0}><ArrowUp size={12} /></Button>
                <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => move(i, 1)} disabled={i === form.items.length - 1}><ArrowDown size={12} /></Button>
                <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => removeEvent(i)} style={{ color: "#ef4444" }}><Trash2 size={12} /></Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-2">
              <div>
                <Label className="text-[10px] block mb-1" style={labelStyle}>Status</Label>
                <select value={item.status} onChange={(e) => updateItem(i, "status", e.target.value)} className="w-full h-10 rounded-md border px-3 text-sm" style={inputStyle}>
                  <option value="Upcoming">Upcoming</option>
                  <option value="Past">Past</option>
                </select>
              </div>
              <div><Label className="text-[10px] block mb-1" style={labelStyle}>Date</Label><Input value={item.date} onChange={(e) => updateItem(i, "date", e.target.value)} style={inputStyle} /></div>
            </div>
            <div><Label className="text-[10px] block mb-1" style={labelStyle}>Title</Label><Input value={item.title} onChange={(e) => updateItem(i, "title", e.target.value)} style={inputStyle} /></div>
            <div className="mt-2"><Label className="text-[10px] block mb-1" style={labelStyle}>Location</Label><Input value={item.location} onChange={(e) => updateItem(i, "location", e.target.value)} style={inputStyle} /></div>
            <div className="mt-2"><Label className="text-[10px] block mb-1" style={labelStyle}>Description</Label><Textarea value={item.desc} onChange={(e) => updateItem(i, "desc", e.target.value)} rows={2} style={inputStyle} /></div>
            <div className="mt-2"><Label className="text-[10px] block mb-1" style={labelStyle}>Link URL (optional)</Label><Input value={item.link} onChange={(e) => updateItem(i, "link", e.target.value)} style={inputStyle} placeholder="https://..." /></div>
          </div>
        ))}
        <Button variant="outline" size="sm" onClick={addEvent} style={{ borderColor: "#1e1e2e", color: "#94a3b8" }}><Plus size={14} className="mr-1" /> Add Event</Button>
      </div>

      <div className="flex gap-3 pt-4">
        <Button onClick={save} style={{ background: "#6366f1", color: "#fff", boxShadow: "0 0 20px rgba(99,102,241,0.4)" }}><Save size={14} className="mr-1" /> Save Changes</Button>
        <Button variant="outline" onClick={reset} style={{ borderColor: "#1e1e2e", color: "#94a3b8" }}><RotateCcw size={14} className="mr-1" /> Reset</Button>
      </div>
    </div>
  );
};

export default EventsEditor;
