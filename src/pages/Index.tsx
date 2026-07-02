import KundleeHome from "@/components/KundleeHome";
import SEOHead from "@/components/SEOHead";

/**
 * Homepage. Targets keyword cluster: "vedic astrology reports",
 * "modern vedic astrology", "personalized kundli reports".
 */
const Index = () => {
  return (
    <>
      <SEOHead path="/" />
      <KundleeHome />
    </>
  );
};

export default Index;
