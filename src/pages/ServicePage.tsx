import { useParams } from "react-router-dom";
import { servicePages } from "@/data/servicePages";
import ServicePageLayout from "@/components/ServicePageLayout";
import NotFound from "./NotFound";

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = servicePages.find((s) => s.slug === slug);

  if (!data) return <NotFound />;

  return <ServicePageLayout data={data} />;
};

export default ServicePage;
