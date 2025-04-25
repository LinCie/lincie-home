import HomeHeroSection from "./sections/hero";
import HomeProjectsSection from "./sections/projects";

function HomePage() {
  return (
    <main className="mx-auto max-w-2xl space-y-6 px-4 py-8 md:space-y-8 md:px-0 md:py-10 lg:py-16">
      <HomeHeroSection />
      <HomeProjectsSection />
    </main>
  );
}

export default HomePage;
