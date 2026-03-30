import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";
import { defaultSiteData, type SiteData } from "@/data/siteData";

const STORAGE_KEY = "cd-site-data";

interface SiteDataContextType {
  data: SiteData;
  updateSection: <K extends keyof SiteData>(key: K, value: SiteData[K]) => void;
  resetSection: (key: keyof SiteData) => void;
  resetAll: () => void;
}

const SiteDataContext = createContext<SiteDataContextType | null>(null);

function loadFromStorage(): Partial<SiteData> {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch {}
  return {};
}

function mergeData(defaults: SiteData, overrides: Partial<SiteData>): SiteData {
  const result = { ...defaults };
  for (const key of Object.keys(overrides) as (keyof SiteData)[]) {
    if (overrides[key] !== undefined) {
      (result as any)[key] = overrides[key];
    }
  }
  return result;
}

export function SiteDataProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<SiteData>(() => {
    const overrides = loadFromStorage();
    return mergeData(defaultSiteData, overrides);
  });

  const updateSection = useCallback(<K extends keyof SiteData>(key: K, value: SiteData[K]) => {
    setData((prev) => {
      const next = { ...prev, [key]: value };
      try {
        // Only save overrides (diff from defaults)
        const stored = loadFromStorage();
        stored[key] = value;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
      } catch {}
      return next;
    });
  }, []);

  const resetSection = useCallback((key: keyof SiteData) => {
    setData((prev) => {
      const next = { ...prev, [key]: defaultSiteData[key] };
      try {
        const stored = loadFromStorage();
        delete stored[key];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
      } catch {}
      return next;
    });
  }, []);

  const resetAll = useCallback(() => {
    setData(defaultSiteData);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}
  }, []);

  return (
    <SiteDataContext.Provider value={{ data, updateSection, resetSection, resetAll }}>
      {children}
    </SiteDataContext.Provider>
  );
}

export function useSiteData() {
  const ctx = useContext(SiteDataContext);
  if (!ctx) throw new Error("useSiteData must be used within SiteDataProvider");
  return ctx;
}
