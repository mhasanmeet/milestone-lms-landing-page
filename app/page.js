import Hero from "@/components/sections/Hero";
import FeaturedUpdates from "@/components/sections/FeaturedUpdates";
import ClassSelection from "@/components/sections/ClassSelection";
import SkillCourses from "@/components/sections/SkillCourses";
import AppFeatures from "@/components/sections/AppFeatures";
import VideoContent from "@/components/sections/VideoContent";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen">
      <Hero />
      <FeaturedUpdates />
      <ClassSelection />
      <SkillCourses />
      <AppFeatures />
      <VideoContent />
      <Testimonials />
    </main>
  );
}
