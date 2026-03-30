import { useState } from "react";
import { useSiteData } from "@/contexts/SiteDataContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { RotateCcw, Save, Plus, Trash2 } from "lucide-react";
import type { AboutData } from "@/data/siteData";

const inputStyle = { background: "#13131a", borderColor: "#1e1e2e", color: "#cbd5e1" };
const labelStyle = { color: "#94a3b8" };

const AboutEditor = () => {
  const { data, updateSection, resetSection } = useSiteData();
  const [form, setForm] = useState<AboutData>({ ...data.about, features: data.about.features.map(f => ({ ...f })) });

  const save = () => { updateSection("about", form); toast({ title: "✅ About section saved!" }); };
  const reset = () => { resetSection("about"); setForm({ ...data.about, features: data.about.features.map(f => ({ ...f })) }); toast({ title: "About reset to defaults" }); };

  const updateFeature = (i: number, key: string, value: string) => {
    const features = form.features.map((f, j) => j === i ? { ...f, [key]: value } : f);
    setForm({ ...form, features });
  };

  const addFeature = () => {
    if (form.features.length >= 8) return;
    setForm({ ...form, features: [...form.features, { icon: "Shield", label: "", desc: "" }] });
  };

  const removeFeature = (i: number) => {
    if (form.features.length <= 1) return;
    setForm({ ...form, features: form.features.filter((_, j) => j !== i) });
  };

  return (
    <div className="max-w-2xl space-y-6">
      <div>
        <Label className="text-xs mb-1 block" style={labelStyle}>Section Heading</Label>
        <Input value={form.heading} onChange={(e) => setForm({ ...form, heading: e.target.value })} style={inputStyle} />
      </div>
      <div>
        <Label className="text-xs mb-1 block" style={labelStyle}>Paragraph 1</Label>
        <Textarea value={form.paragraph1} onChange={(e) => setForm({ ...form, paragraph1: e.target.value })} rows={4} style={inputStyle} />
      </div>
      <div>
        <Label className="text-xs mb-1 block" style={labelStyle}>Paragraph 2</Label>
        <Textarea value={form.paragraph2} onChange={(e) => setForm({ ...form, paragraph2: e.target.value })} rows={4} style={inputStyle} />
      </div>

      <div>
        <Label className="text-xs mb-2 block" style={labelStyle}>Features ({form.features.length}/8)</Label>
        {form.features.map((f, i) => (
          <div key={i} className="p-3 rounded-lg mb-3 border" style={{ background: "#0c0c14", borderColor: "#1e1e2e" }}>
            <div className="grid grid-cols-2 gap-3 mb-2">
              <div>
                <Label className="text-[10px] block mb-1" style={labelStyle}>Icon Name</Label>
                <Input value={f.icon} onChange={(e) => updateFeature(i, "icon", e.target.value)} style={inputStyle} placeholder="e.g. Shield" />
              </div>
              <div>
                <Label className="text-[10px] block mb-1" style={labelStyle}>Label</Label>
                <Input value={f.label} onChange={(e) => updateFeature(i, "label", e.target.value)} style={inputStyle} />
              </div>
            </div>
            <div>
              <Label className="text-[10px] block mb-1" style={labelStyle}>Description</Label>
              <Input value={f.desc} onChange={(e) => updateFeature(i, "desc", e.target.value)} style={inputStyle} />
            </div>
            {form.features.length > 1 && (
              <Button variant="ghost" size="sm" className="mt-2 text-xs" onClick={() => removeFeature(i)} style={{ color: "#ef4444" }}>
                <Trash2 size={12} className="mr-1" /> Remove
              </Button>
            )}
          </div>
        ))}
        {form.features.length < 8 && (
          <Button variant="outline" size="sm" onClick={addFeature} style={{ borderColor: "#1e1e2e", color: "#94a3b8" }}>
            <Plus size={14} className="mr-1" /> Add Feature
          </Button>
        )}
      </div>

      <div className="flex gap-3 pt-4">
        <Button onClick={save} style={{ background: "#6366f1", color: "#fff", boxShadow: "0 0 20px rgba(99,102,241,0.4)" }}>
          <Save size={14} className="mr-1" /> Save Changes
        </Button>
        <Button variant="outline" onClick={reset} style={{ borderColor: "#1e1e2e", color: "#94a3b8" }}>
          <RotateCcw size={14} className="mr-1" /> Reset
        </Button>
      </div>
    </div>
  );
};

export default AboutEditor;
