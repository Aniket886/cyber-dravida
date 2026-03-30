import { useState } from "react";
import { useSiteData } from "@/contexts/SiteDataContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { RotateCcw, Save, Plus, Trash2, ArrowUp, ArrowDown } from "lucide-react";
import type { BlogData } from "@/data/siteData";

const inputStyle = { background: "#13131a", borderColor: "#1e1e2e", color: "#cbd5e1" };
const labelStyle = { color: "#94a3b8" };

const BlogEditor = () => {
  const { data, updateSection, resetSection } = useSiteData();
  const [form, setForm] = useState<BlogData>(JSON.parse(JSON.stringify(data.blog)));

  const save = () => { updateSection("blog", form); toast({ title: "✅ Blog saved!" }); };
  const reset = () => { resetSection("blog"); setForm(JSON.parse(JSON.stringify(data.blog))); toast({ title: "Blog reset" }); };

  const updatePost = (i: number, key: string, value: string) => {
    const posts = form.posts.map((p, j) => j === i ? { ...p, [key]: value } : p);
    setForm({ ...form, posts });
  };

  const addPost = () => {
    setForm({ ...form, posts: [...form.posts, { tag: "", tagClass: "bg-primary/20 text-primary border-primary/30", title: "", excerpt: "", link: "", author: "", readTime: "5 min read" }] });
  };

  const removePost = (i: number) => {
    if (!confirm("Remove this blog post?")) return;
    setForm({ ...form, posts: form.posts.filter((_, j) => j !== i) });
  };

  const move = (i: number, dir: -1 | 1) => {
    const posts = [...form.posts];
    const ni = i + dir;
    if (ni < 0 || ni >= posts.length) return;
    [posts[i], posts[ni]] = [posts[ni], posts[i]];
    setForm({ ...form, posts });
  };

  return (
    <div className="max-w-2xl space-y-6">
      <div><Label className="text-xs mb-1 block" style={labelStyle}>Section Heading</Label><Input value={form.heading} onChange={(e) => setForm({ ...form, heading: e.target.value })} style={inputStyle} /></div>
      <div><Label className="text-xs mb-1 block" style={labelStyle}>Subheading</Label><Input value={form.subheading} onChange={(e) => setForm({ ...form, subheading: e.target.value })} style={inputStyle} /></div>

      <div>
        <Label className="text-xs mb-2 block" style={labelStyle}>Blog Posts</Label>
        {form.posts.map((post, i) => (
          <div key={i} className="p-4 rounded-lg mb-3 border" style={{ background: "#0c0c14", borderColor: "#1e1e2e" }}>
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-medium truncate" style={{ color: "#e2e8f0" }}>{post.title || "New Post"}</span>
              <div className="flex gap-1">
                <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => move(i, -1)} disabled={i === 0}><ArrowUp size={12} /></Button>
                <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => move(i, 1)} disabled={i === form.posts.length - 1}><ArrowDown size={12} /></Button>
                <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => removePost(i)} style={{ color: "#ef4444" }}><Trash2 size={12} /></Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-2">
              <div><Label className="text-[10px] block mb-1" style={labelStyle}>Tag</Label><Input value={post.tag} onChange={(e) => updatePost(i, "tag", e.target.value)} style={inputStyle} /></div>
              <div>
                <Label className="text-[10px] block mb-1" style={labelStyle}>Tag Color</Label>
                <select value={post.tagClass} onChange={(e) => updatePost(i, "tagClass", e.target.value)} className="w-full h-10 rounded-md border px-3 text-sm" style={inputStyle}>
                  <option value="bg-primary/20 text-primary border-primary/30">Indigo</option>
                  <option value="bg-secondary/20 text-secondary border-secondary/30">Cyan</option>
                  <option value="bg-destructive/20 text-destructive border-destructive/30">Rose</option>
                </select>
              </div>
            </div>
            <div><Label className="text-[10px] block mb-1" style={labelStyle}>Title</Label><Input value={post.title} onChange={(e) => updatePost(i, "title", e.target.value)} style={inputStyle} /></div>
            <div className="mt-2"><Label className="text-[10px] block mb-1" style={labelStyle}>Excerpt</Label><Textarea value={post.excerpt} onChange={(e) => updatePost(i, "excerpt", e.target.value)} rows={2} style={inputStyle} /></div>
            <div className="mt-2"><Label className="text-[10px] block mb-1" style={labelStyle}>Link</Label><Input value={post.link} onChange={(e) => updatePost(i, "link", e.target.value)} style={inputStyle} /></div>
            <div className="grid grid-cols-2 gap-3 mt-2">
              <div><Label className="text-[10px] block mb-1" style={labelStyle}>Author</Label><Input value={post.author} onChange={(e) => updatePost(i, "author", e.target.value)} style={inputStyle} /></div>
              <div><Label className="text-[10px] block mb-1" style={labelStyle}>Read Time</Label><Input value={post.readTime} onChange={(e) => updatePost(i, "readTime", e.target.value)} style={inputStyle} /></div>
            </div>
          </div>
        ))}
        <Button variant="outline" size="sm" onClick={addPost} style={{ borderColor: "#1e1e2e", color: "#94a3b8" }}><Plus size={14} className="mr-1" /> Add Blog Post</Button>
      </div>

      <div><Label className="text-xs mb-1 block" style={labelStyle}>"Read All Posts" URL</Label><Input value={form.allPostsUrl} onChange={(e) => setForm({ ...form, allPostsUrl: e.target.value })} style={inputStyle} /></div>

      <div className="flex gap-3 pt-4">
        <Button onClick={save} style={{ background: "#6366f1", color: "#fff", boxShadow: "0 0 20px rgba(99,102,241,0.4)" }}><Save size={14} className="mr-1" /> Save Changes</Button>
        <Button variant="outline" onClick={reset} style={{ borderColor: "#1e1e2e", color: "#94a3b8" }}><RotateCcw size={14} className="mr-1" /> Reset</Button>
      </div>
    </div>
  );
};

export default BlogEditor;
