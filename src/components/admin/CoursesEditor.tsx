import { useState } from "react";
import { useSiteData } from "@/contexts/SiteDataContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { RotateCcw, Save, Plus, Trash2, ArrowUp, ArrowDown } from "lucide-react";
import type { CoursesData } from "@/data/siteData";

const inputStyle = { background: "#13131a", borderColor: "#1e1e2e", color: "#cbd5e1" };
const labelStyle = { color: "#94a3b8" };

const CoursesEditor = () => {
  const { data, updateSection, resetSection } = useSiteData();
  const [form, setForm] = useState<CoursesData>(JSON.parse(JSON.stringify(data.courses)));

  const save = () => { updateSection("courses", form); toast({ title: "✅ Courses saved!" }); };
  const reset = () => { resetSection("courses"); setForm(JSON.parse(JSON.stringify(data.courses))); toast({ title: "Courses reset" }); };

  const updateProduct = (i: number, key: string, value: any) => {
    const products = form.products.map((p, j) => j === i ? { ...p, [key]: value } : p);
    setForm({ ...form, products });
  };

  const addProduct = () => {
    setForm({ ...form, products: [...form.products, { tag: "", tagColor: "bg-primary/20 text-primary", title: "", desc: "", price: 0, link: "" }] });
  };

  const removeProduct = (i: number) => {
    if (!confirm("Remove this product?")) return;
    setForm({ ...form, products: form.products.filter((_, j) => j !== i) });
  };

  const moveProduct = (i: number, dir: -1 | 1) => {
    const products = [...form.products];
    const ni = i + dir;
    if (ni < 0 || ni >= products.length) return;
    [products[i], products[ni]] = [products[ni], products[i]];
    setForm({ ...form, products });
  };

  const updateFeature = (i: number, value: string) => {
    const features = [...form.featured.features];
    features[i] = value;
    setForm({ ...form, featured: { ...form.featured, features } });
  };

  const updateTestimonial = (i: number, key: string, value: string) => {
    const testimonials = form.testimonials.map((t, j) => j === i ? { ...t, [key]: value } : t);
    setForm({ ...form, testimonials });
  };

  return (
    <div className="max-w-2xl space-y-8">
      {/* Section heading */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold" style={{ color: "#e2e8f0" }}>Section</h3>
        <div><Label className="text-xs mb-1 block" style={labelStyle}>Heading</Label><Input value={form.heading} onChange={(e) => setForm({ ...form, heading: e.target.value })} style={inputStyle} /></div>
        <div><Label className="text-xs mb-1 block" style={labelStyle}>Subheading</Label><Input value={form.subheading} onChange={(e) => setForm({ ...form, subheading: e.target.value })} style={inputStyle} /></div>
      </div>

      {/* Featured Course */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold" style={{ color: "#e2e8f0" }}>Featured Course</h3>
        <div className="grid grid-cols-2 gap-3">
          <div><Label className="text-[10px] block mb-1" style={labelStyle}>Category Tag</Label><Input value={form.featured.categoryTag} onChange={(e) => setForm({ ...form, featured: { ...form.featured, categoryTag: e.target.value } })} style={inputStyle} /></div>
          <div><Label className="text-[10px] block mb-1" style={labelStyle}>Sales Badge</Label><Input value={form.featured.salesBadge} onChange={(e) => setForm({ ...form, featured: { ...form.featured, salesBadge: e.target.value } })} style={inputStyle} /></div>
        </div>
        <div><Label className="text-[10px] block mb-1" style={labelStyle}>Title</Label><Input value={form.featured.title} onChange={(e) => setForm({ ...form, featured: { ...form.featured, title: e.target.value } })} style={inputStyle} /></div>
        <div><Label className="text-[10px] block mb-1" style={labelStyle}>Description</Label><Textarea value={form.featured.description} onChange={(e) => setForm({ ...form, featured: { ...form.featured, description: e.target.value } })} rows={2} style={inputStyle} /></div>
        <div>
          <Label className="text-[10px] block mb-1" style={labelStyle}>Features</Label>
          {form.featured.features.map((f, i) => (
            <div key={i} className="flex gap-2 mb-2">
              <Input value={f} onChange={(e) => updateFeature(i, e.target.value)} style={inputStyle} />
              <Button variant="ghost" size="icon" className="shrink-0" onClick={() => setForm({ ...form, featured: { ...form.featured, features: form.featured.features.filter((_, j) => j !== i) } })} style={{ color: "#ef4444" }}><Trash2 size={12} /></Button>
            </div>
          ))}
          <Button variant="outline" size="sm" onClick={() => setForm({ ...form, featured: { ...form.featured, features: [...form.featured.features, ""] } })} style={{ borderColor: "#1e1e2e", color: "#94a3b8" }}><Plus size={12} className="mr-1" /> Add Feature</Button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div><Label className="text-[10px] block mb-1" style={labelStyle}>Price (₹)</Label><Input type="number" value={form.featured.price} onChange={(e) => setForm({ ...form, featured: { ...form.featured, price: Number(e.target.value) } })} style={inputStyle} /></div>
          <div><Label className="text-[10px] block mb-1" style={labelStyle}>CTA Text</Label><Input value={form.featured.ctaText} onChange={(e) => setForm({ ...form, featured: { ...form.featured, ctaText: e.target.value } })} style={inputStyle} /></div>
        </div>
        <div><Label className="text-[10px] block mb-1" style={labelStyle}>Topmate Link</Label><Input value={form.featured.link} onChange={(e) => setForm({ ...form, featured: { ...form.featured, link: e.target.value } })} style={inputStyle} /></div>
        <div><Label className="text-[10px] block mb-1" style={labelStyle}>Enrolled Text</Label><Input value={form.featured.enrolledText} onChange={(e) => setForm({ ...form, featured: { ...form.featured, enrolledText: e.target.value } })} style={inputStyle} /></div>
      </div>

      {/* Products */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold" style={{ color: "#e2e8f0" }}>Products ({form.products.length})</h3>
        {form.products.map((p, i) => (
          <div key={i} className="p-3 rounded-lg border" style={{ background: "#0c0c14", borderColor: "#1e1e2e" }}>
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-medium truncate" style={{ color: "#e2e8f0" }}>{p.title || "New Product"}</span>
              <div className="flex gap-1 shrink-0">
                <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => moveProduct(i, -1)} disabled={i === 0}><ArrowUp size={10} /></Button>
                <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => moveProduct(i, 1)} disabled={i === form.products.length - 1}><ArrowDown size={10} /></Button>
                <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => removeProduct(i)} style={{ color: "#ef4444" }}><Trash2 size={10} /></Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mb-2">
              <div><Label className="text-[10px] block mb-1" style={labelStyle}>Tag</Label><Input value={p.tag} onChange={(e) => updateProduct(i, "tag", e.target.value)} style={inputStyle} className="h-8 text-xs" /></div>
              <div>
                <Label className="text-[10px] block mb-1" style={labelStyle}>Tag Color</Label>
                <select value={p.tagColor} onChange={(e) => updateProduct(i, "tagColor", e.target.value)} className="w-full h-8 rounded-md border px-2 text-xs" style={inputStyle}>
                  <option value="bg-primary/20 text-primary">Indigo</option>
                  <option value="bg-secondary/20 text-secondary">Cyan</option>
                  <option value="bg-destructive/20 text-destructive">Rose</option>
                </select>
              </div>
            </div>
            <div><Label className="text-[10px] block mb-1" style={labelStyle}>Title</Label><Input value={p.title} onChange={(e) => updateProduct(i, "title", e.target.value)} style={inputStyle} className="h-8 text-xs" /></div>
            <div className="mt-2"><Label className="text-[10px] block mb-1" style={labelStyle}>Description</Label><Textarea value={p.desc} onChange={(e) => updateProduct(i, "desc", e.target.value)} rows={2} style={inputStyle} className="text-xs" /></div>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div><Label className="text-[10px] block mb-1" style={labelStyle}>Price (₹)</Label><Input type="number" value={p.price} onChange={(e) => updateProduct(i, "price", Number(e.target.value))} style={inputStyle} className="h-8 text-xs" /></div>
              <div><Label className="text-[10px] block mb-1" style={labelStyle}>Link</Label><Input value={p.link} onChange={(e) => updateProduct(i, "link", e.target.value)} style={inputStyle} className="h-8 text-xs" /></div>
            </div>
            <div className="flex gap-4 mt-2">
              <label className="flex items-center gap-1 text-[10px]" style={labelStyle}>
                <input type="checkbox" checked={!!p.popular} onChange={(e) => updateProduct(i, "popular", e.target.checked)} /> Popular
              </label>
              <label className="flex items-center gap-1 text-[10px]" style={labelStyle}>
                <input type="checkbox" checked={!!p.comingSoon} onChange={(e) => updateProduct(i, "comingSoon", e.target.checked)} /> Coming Soon
              </label>
            </div>
          </div>
        ))}
        <Button variant="outline" size="sm" onClick={addProduct} style={{ borderColor: "#1e1e2e", color: "#94a3b8" }}><Plus size={14} className="mr-1" /> Add Product</Button>
      </div>

      {/* Bottom CTA */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold" style={{ color: "#e2e8f0" }}>Bottom CTA</h3>
        <div><Label className="text-xs mb-1 block" style={labelStyle}>Text</Label><Input value={form.bottomCtaText} onChange={(e) => setForm({ ...form, bottomCtaText: e.target.value })} style={inputStyle} /></div>
        <div><Label className="text-xs mb-1 block" style={labelStyle}>Link</Label><Input value={form.bottomCtaLink} onChange={(e) => setForm({ ...form, bottomCtaLink: e.target.value })} style={inputStyle} /></div>
      </div>

      {/* Testimonials */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold" style={{ color: "#e2e8f0" }}>Testimonials</h3>
        {form.testimonials.map((t, i) => (
          <div key={i} className="p-3 rounded-lg border" style={{ background: "#0c0c14", borderColor: "#1e1e2e" }}>
            <div><Label className="text-[10px] block mb-1" style={labelStyle}>Quote</Label><Textarea value={t.quote} onChange={(e) => updateTestimonial(i, "quote", e.target.value)} rows={2} style={inputStyle} className="text-xs" /></div>
            <div className="mt-2"><Label className="text-[10px] block mb-1" style={labelStyle}>Translation</Label><Input value={t.translation} onChange={(e) => updateTestimonial(i, "translation", e.target.value)} style={inputStyle} className="h-8 text-xs" /></div>
            <div className="mt-2"><Label className="text-[10px] block mb-1" style={labelStyle}>Author</Label><Input value={t.author} onChange={(e) => updateTestimonial(i, "author", e.target.value)} style={inputStyle} className="h-8 text-xs" /></div>
          </div>
        ))}
      </div>

      <div className="flex gap-3 pt-4">
        <Button onClick={save} style={{ background: "#6366f1", color: "#fff", boxShadow: "0 0 20px rgba(99,102,241,0.4)" }}><Save size={14} className="mr-1" /> Save Changes</Button>
        <Button variant="outline" onClick={reset} style={{ borderColor: "#1e1e2e", color: "#94a3b8" }}><RotateCcw size={14} className="mr-1" /> Reset</Button>
      </div>
    </div>
  );
};

export default CoursesEditor;
