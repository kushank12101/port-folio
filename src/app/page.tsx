import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Profile from "@/components/Profile";
import Experience from "@/components/Experience";
import Impact from "@/components/Impact";
import Credentials from "@/components/Credentials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <Profile />
      <Experience />
      <Impact />
      <Credentials />
      <Contact />
    </main>
  );
}
