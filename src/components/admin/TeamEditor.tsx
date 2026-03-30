import { useState, useRef } from "react";
import { useSiteData } from "@/contexts/SiteDataContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { RotateCcw, Save, Plus, Trash2, ArrowUp, ArrowDown, Upload } from "lucide-react";
import type { TeamData, TeamMember } from "@/data/siteData";

const inputStyle = { background: "#13131a", borderColor: "#1e1e2e", color: "#cbd5e1" };
const labelStyle = { color: "#94a3b8" };

const TeamEditor = () => {
  const { data, updateSection, resetSection } = useSiteData();
  const [form, setForm] = useState<TeamData>(JSON.parse(JSON.stringify(data.team)));

  const save = () => { updateSection("team", form); toast({ title: "✅ Team saved!" }); };
  const reset = () => { resetSection("team"); setForm(JSON.parse(JSON.stringify(data.team))); toast({ title: "Team reset" }); };

  const updateMember = (i: number, key: string, value: any) => {
    const members = form.members.map((m, j) => j === i ? { ...m, [key]: value } : m);
    setForm({ ...form, members });
  };

  const addMember = () => {
    setForm({ ...form, members: [...form.members, { name: "", role: "", tags: [], bio: "", avatar: "", initials: "", links: [] }] });
  };

  const removeMember = (i: number) => {
    if (!confirm("Remove this team member?")) return;
    setForm({ ...form, members: form.members.filter((_, j) => j !== i) });
  };

  const moveMember = (i: number, dir: -1 | 1) => {
    const members = [...form.members];
    const ni = i + dir;
    if (ni < 0 || ni >= members.length) return;
    [members[i], members[ni]] = [members[ni], members[i]];
    setForm({ ...form, members });
  };

  const handleAvatarUpload = (i: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      updateMember(i, "avatar", ev.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const updateLink = (mi: number, li: number, key: string, value: string) => {
    const members = [...form.members];
    const links = [...members[mi].links];
    links[li] = { ...links[li], [key]: value };
    members[mi] = { ...members[mi], links };
    setForm({ ...form, members });
  };

  const addLink = (mi: number) => {
    if (form.members[mi].links.length >= 5) return;
    const members = [...form.members];
    members[mi] = { ...members[mi], links: [...members[mi].links, { label: "", url: "", icon: "Link" }] };
    setForm({ ...form, members });
  };

  const removeLink = (mi: number, li: number) => {
    const members = [...form.members];
    members[mi] = { ...members[mi], links: members[mi].links.filter((_, j) => j !== li) };
    setForm({ ...form, members });
  };

  return (
    <div className="max-w-2xl space-y-6">
      <div><Label className="text-xs mb-1 block" style={labelStyle}>Section Heading</Label><Input value={form.heading} onChange={(e) => setForm({ ...form, heading: e.target.value })} style={inputStyle} /></div>
      <div><Label className="text-xs mb-1 block" style={labelStyle}>Subheading</Label><Input value={form.subheading} onChange={(e) => setForm({ ...form, subheading: e.target.value })} style={inputStyle} /></div>

      <div>
        <Label className="text-xs mb-2 block" style={labelStyle}>Team Members</Label>
        {form.members.map((member, i) => (
          <div key={i} className="p-4 rounded-lg mb-3 border" style={{ background: "#0c0c14", borderColor: "#1e1e2e" }}>
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-3">
                {member.avatar ? (
                  <img src={member.avatar} alt="" className="h-10 w-10 rounded-full object-cover" />
                ) : (
                  <div className="h-10 w-10 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: "#6366f1", color: "#fff" }}>{member.initials || "?"}</div>
                )}
                <span className="text-sm font-medium" style={{ color: "#e2e8f0" }}>{member.name || "New Member"}</span>
              </div>
              <div className="flex gap-1">
                <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => moveMember(i, -1)} disabled={i === 0}><ArrowUp size={12} /></Button>
                <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => moveMember(i, 1)} disabled={i === form.members.length - 1}><ArrowDown size={12} /></Button>
                <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => removeMember(i)} style={{ color: "#ef4444" }}><Trash2 size={12} /></Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-2">
              <div><Label className="text-[10px] block mb-1" style={labelStyle}>Name</Label><Input value={member.name} onChange={(e) => updateMember(i, "name", e.target.value)} style={inputStyle} /></div>
              <div><Label className="text-[10px] block mb-1" style={labelStyle}>Role</Label><Input value={member.role} onChange={(e) => updateMember(i, "role", e.target.value)} style={inputStyle} /></div>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-2">
              <div><Label className="text-[10px] block mb-1" style={labelStyle}>Initials</Label><Input value={member.initials} onChange={(e) => updateMember(i, "initials", e.target.value)} style={inputStyle} maxLength={3} /></div>
              <div>
                <Label className="text-[10px] block mb-1" style={labelStyle}>Avatar</Label>
                <label className="flex items-center gap-2 cursor-pointer text-xs px-3 py-2 rounded-md border" style={inputStyle}>
                  <Upload size={12} /> Upload Image
                  <input type="file" accept="image/*" className="hidden" onChange={(e) => handleAvatarUpload(i, e)} />
                </label>
              </div>
            </div>
            <div><Label className="text-[10px] block mb-1" style={labelStyle}>Tags (comma-separated)</Label><Input value={member.tags.join(", ")} onChange={(e) => updateMember(i, "tags", e.target.value.split(",").map(t => t.trim()).filter(Boolean))} style={inputStyle} /></div>
            <div className="mt-2"><Label className="text-[10px] block mb-1" style={labelStyle}>Bio</Label><Textarea value={member.bio} onChange={(e) => updateMember(i, "bio", e.target.value)} rows={3} style={inputStyle} /></div>

            <div className="mt-3">
              <Label className="text-[10px] block mb-1" style={labelStyle}>Links ({member.links.length}/5)</Label>
              {member.links.map((link, li) => (
                <div key={li} className="flex gap-2 mb-2">
                  <Input value={link.label} onChange={(e) => updateLink(i, li, "label", e.target.value)} style={inputStyle} placeholder="Label" className="h-8 text-xs" />
                  <Input value={link.url} onChange={(e) => updateLink(i, li, "url", e.target.value)} style={inputStyle} placeholder="URL" className="h-8 text-xs flex-1" />
                  <Input value={link.icon} onChange={(e) => updateLink(i, li, "icon", e.target.value)} style={inputStyle} placeholder="Icon" className="h-8 text-xs w-24" />
                  <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0" onClick={() => removeLink(i, li)} style={{ color: "#ef4444" }}><Trash2 size={10} /></Button>
                </div>
              ))}
              {member.links.length < 5 && (
                <Button variant="outline" size="sm" className="text-xs" onClick={() => addLink(i)} style={{ borderColor: "#1e1e2e", color: "#94a3b8" }}>
                  <Plus size={10} className="mr-1" /> Add Link
                </Button>
              )}
            </div>
          </div>
        ))}
        <Button variant="outline" size="sm" onClick={addMember} style={{ borderColor: "#1e1e2e", color: "#94a3b8" }}>
          <Plus size={14} className="mr-1" /> Add Team Member
        </Button>
      </div>

      <div><Label className="text-xs mb-1 block" style={labelStyle}>Bottom Text</Label><Input value={form.bottomText} onChange={(e) => setForm({ ...form, bottomText: e.target.value })} style={inputStyle} /></div>
      <div><Label className="text-xs mb-1 block" style={labelStyle}>Bottom Email</Label><Input value={form.bottomEmail} onChange={(e) => setForm({ ...form, bottomEmail: e.target.value })} style={inputStyle} /></div>

      <div className="flex gap-3 pt-4">
        <Button onClick={save} style={{ background: "#6366f1", color: "#fff", boxShadow: "0 0 20px rgba(99,102,241,0.4)" }}><Save size={14} className="mr-1" /> Save Changes</Button>
        <Button variant="outline" onClick={reset} style={{ borderColor: "#1e1e2e", color: "#94a3b8" }}><RotateCcw size={14} className="mr-1" /> Reset</Button>
      </div>
    </div>
  );
};

export default TeamEditor;
