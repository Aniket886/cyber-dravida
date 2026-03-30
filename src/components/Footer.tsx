import { Link } from "react-router-dom";
import { useSiteData } from "@/contexts/SiteDataContext";

const Footer = () => {
  const { data } = useSiteData();
  const footer = data.footer;

  return (
    <footer id="footer" className="py-8 border-t border-border bg-[#080808]">
      <div className="container mx-auto px-4 flex flex-col items-center gap-4">
        <a href="#hero" className="flex items-center gap-2">
          <img src="/CDTRANS.png" alt="Cyber Dravida" className="h-9 w-9 object-contain" />
          <span className="font-heading text-lg font-bold text-heading">Cyber Dravida</span>
        </a>
        <p className="text-muted-foreground text-sm">{footer.copyright}</p>
        <Link
          to="/admin"
          className="text-[11px] hover:text-muted-foreground transition-colors"
          style={{ color: "#1e1e2e" }}
        >
          Admin
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
