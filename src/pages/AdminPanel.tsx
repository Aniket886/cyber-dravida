import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { useSiteData } from "@/contexts/SiteDataContext";
import {
  LogOut, ExternalLink, RotateCcw, Monitor,
  Home, Info, Wrench, GraduationCap, BarChart3,
  CalendarDays, Users, BookOpen, Mail, Footprints, Bot,
} from "lucide-react";
import HeroEditor from "@/components/admin/HeroEditor";
import AboutEditor from "@/components/admin/AboutEditor";
import ServicesEditor from "@/components/admin/ServicesEditor";
import CoursesEditor from "@/components/admin/CoursesEditor";
import StatsEditor from "@/components/admin/StatsEditor";
import EventsEditor from "@/components/admin/EventsEditor";
import TeamEditor from "@/components/admin/TeamEditor";
import BlogEditor from "@/components/admin/BlogEditor";
import ContactEditor from "@/components/admin/ContactEditor";
import FooterEditor from "@/components/admin/FooterEditor";
import ChatbotEditor from "@/components/admin/ChatbotEditor";
import { useIsMobile } from "@/hooks/use-mobile";

const sections = [
  { key: "hero", label: "Hero", icon: Home },
  { key: "about", label: "About", icon: Info },
  { key: "services", label: "Services", icon: Wrench },
  { key: "courses", label: "Courses & Products", icon: GraduationCap },
  { key: "stats", label: "Stats", icon: BarChart3 },
  { key: "events", label: "Events", icon: CalendarDays },
  { key: "team", label: "Team", icon: Users },
  { key: "blog", label: "Blog", icon: BookOpen },
  { key: "contact", label: "Contact", icon: Mail },
  { key: "footer", label: "Footer", icon: Footprints },
  { key: "chatbot", label: "Chatbot Settings", icon: Bot },
] as const;

const editors: Record<string, React.FC> = {
  hero: HeroEditor,
  about: AboutEditor,
  services: ServicesEditor,
  courses: CoursesEditor,
  stats: StatsEditor,
  events: EventsEditor,
  team: TeamEditor,
  blog: BlogEditor,
  contact: ContactEditor,
  footer: FooterEditor,
  chatbot: ChatbotEditor,
};

interface Props {
  onLogout: () => void;
}

const AdminPanel = ({ onLogout }: Props) => {
  const [activeSection, setActiveSection] = useState("hero");
  const { resetAll } = useSiteData();
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 text-center" style={{ background: "#080808" }}>
        <div className="space-y-4">
          <Monitor className="h-16 w-16 mx-auto" style={{ color: "#6366f1" }} />
          <h2 className="text-xl font-bold" style={{ color: "#e2e8f0" }}>
            Desktop Required
          </h2>
          <p style={{ color: "#64748b" }}>
            Please use a desktop browser (768px+) to access the admin panel.
          </p>
          <Button asChild variant="outline">
            <Link to="/">Back to Site</Link>
          </Button>
        </div>
      </div>
    );
  }

  const handleLogout = () => {
    sessionStorage.removeItem("cd-admin");
    onLogout();
  };

  const handleResetAll = () => {
    if (confirm("Reset ALL sections to defaults? This cannot be undone.")) {
      resetAll();
      toast({ title: "All sections reset to defaults" });
    }
  };

  const EditorComponent = editors[activeSection];

  return (
    <div className="min-h-screen flex" style={{ background: "#080808" }}>
      {/* Sidebar */}
      <aside
        className="w-60 shrink-0 border-r flex flex-col h-screen sticky top-0"
        style={{ background: "#0c0c14", borderColor: "#1e1e2e" }}
      >
        {/* Logo */}
        <div className="p-4 border-b flex items-center gap-2" style={{ borderColor: "#1e1e2e" }}>
          <img src="/CDTRANS.png" alt="" className="h-8 w-8 object-contain" />
          <span className="font-bold text-sm" style={{ color: "#e2e8f0" }}>
            Cyber Dravida Admin
          </span>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto py-2">
          {sections.map((s) => {
            const Icon = s.icon;
            const active = activeSection === s.key;
            return (
              <button
                key={s.key}
                onClick={() => setActiveSection(s.key)}
                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors text-left"
                style={{
                  color: active ? "#e2e8f0" : "#64748b",
                  background: active ? "#6366f1" + "20" : "transparent",
                  borderRight: active ? "2px solid #6366f1" : "2px solid transparent",
                }}
              >
                <Icon size={16} />
                {s.label}
              </button>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-3 border-t space-y-2" style={{ borderColor: "#1e1e2e" }}>
          <Button
            variant="outline"
            size="sm"
            className="w-full text-xs"
            onClick={handleResetAll}
            style={{ borderColor: "#1e1e2e", color: "#ef4444" }}
          >
            <RotateCcw size={12} className="mr-1" /> Reset All
          </Button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Top bar */}
        <header
          className="h-14 border-b flex items-center justify-between px-6 sticky top-0 z-10"
          style={{ background: "#0c0c14", borderColor: "#1e1e2e" }}
        >
          <h2 className="font-semibold text-sm capitalize" style={{ color: "#e2e8f0" }}>
            {sections.find((s) => s.key === activeSection)?.label}
          </h2>
          <div className="flex items-center gap-3">
            <Button asChild variant="ghost" size="sm" className="text-xs" style={{ color: "#6366f1" }}>
              <Link to="/">
                <ExternalLink size={14} className="mr-1" /> Back to Site
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-xs"
              onClick={handleLogout}
              style={{ color: "#ef4444" }}
            >
              <LogOut size={14} className="mr-1" /> Logout
            </Button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          {EditorComponent && <EditorComponent />}
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;
