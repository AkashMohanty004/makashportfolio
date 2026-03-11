import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SocialSidebar from "@/components/SocialSidebar";

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 pt-16 animate-fade-in">{children}</main>
      <Footer />
    </div>
  );
};

export default PageWrapper;
