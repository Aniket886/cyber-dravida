import { useState } from "react";
import { useSiteData } from "@/contexts/SiteDataContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { RotateCcw, Save, Plus, Trash2 } from "lucide-react";
import type { HeroData } from "@/data/siteData";

const HeroEditor = () => {
  const { data, updateSection, resetSection } = useSiteData();
  const [form, setForm] = useState<HeroData>({ ...data.hero });

  const save = () => {
    updateSection("hero", form);
    toast({ title: "✅ Hero section saved!" });
  };

  const reset = () => {
    resetSection("hero");
    setForm({ ...data.hero });
    toast({ title: "Hero reset to defaults" });
  };

  return (
    <div className="max-w-2xl space-y-6">
      <Field label="Badge Text" value={form.badgeText} onChange={(v) => setForm({ ...form, badgeText: v })} />
      <Field label="Heading Line 1" value={form.headingLine1} onChange={(v) => setForm({ ...form, headingLine1: v })} />
      <Field label="Heading Line 2" value={form.headingLine2} onChange={(v) => setForm({ ...form, headingLine2: v })} />
      <div>
        <Label className="text-xs mb-1 block" style={{ color: "#94a3b8" }}>Subheading</Label>
        <Textarea
          value={form.subheading}
          onChange={(e) => setForm({ ...form, subheading: e.target.value })}
          rows={3}
          style={{ background: "#13131a", borderColor: "#1e1e2e", color: "#cbd5e1" }}
        />
      </div>
      <Field label="CTA Button 1 Text" value={form.cta1Text} onChange={(v) => setForm({ ...form, cta1Text: v })} />
      <Field label="CTA Button 2 Text" value={form.cta2Text} onChange={(v) => setForm({ ...form, cta2Text: v })} />
      
      <div>
        <Label className="text-xs mb-2 block" style={{ color: "#94a3b8" }}>Stat Pills</Label>
        {form.statPills.map((pill, i) => (
          <div key={i} className="flex gap-2 mb-2">
            <Input
              value={pill}
              onChange={(e) => {
                const pills = [...form.statPills];
                pills[i] = e.target.value;
                setForm({ ...form, statPills: pills });
              }}
              style={{ background: "#13131a", borderColor: "#1e1e2e", color: "#cbd5e1" }}
            />
            {form.statPills.length > 1 && (
              <Button variant="ghost" size="icon" onClick={() => setForm({ ...form, statPills: form.statPills.filter((_, j) => j !== i) })} style={{ color: "#ef4444" }}>
                <Trash2 size={14} />
              </Button>
            )}
          </div>
        ))}
        <Button variant="outline" size="sm" onClick={() => setForm({ ...form, statPills: [...form.statPills, ""] })} style={{ borderColor: "#1e1e2e", color: "#94a3b8" }}>
          <Plus size={14} className="mr-1" /> Add Pill
        </Button>
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

const Field = ({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) => (
  <div>
    <Label className="text-xs mb-1 block" style={{ color: "#94a3b8" }}>{label}</Label>
    <Input value={value} onChange={(e) => onChange(e.target.value)} style={{ background: "#13131a", borderColor: "#1e1e2e", color: "#cbd5e1" }} />
  </div>
);

export default HeroEditor;
