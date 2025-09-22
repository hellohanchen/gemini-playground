import Image from 'next/image';
import { HeroSection } from '@/components/hero-section';
import { MeetAcaiSection } from '@/components/meet-acai-section';
import { FeaturesSection } from '@/components/features-section';
import { WaitlistSection } from '@/components/waitlist-section';

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <div className="text-2xl font-bold text-gradient">All You Can Cook</div>
            <div className="flex gap-3">
              <a
                href="https://demo.allyoucancook.life/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105"
              >
                App
              </a>
              <a
                href="https://forms.gle/xhC3GgxG2vy3GkJE8"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary-light transition-colors"
              >
                Join Waitlist
              </a>
            </div>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <HeroSection />
        <FeaturesSection />
        <WaitlistSection />
      </main>

      <footer className="container mx-auto px-4 py-12 text-center text-muted-foreground">
        <p>© 2025 All You Can Cook. All rights reserved.</p>
      </footer>
    </div>
  );
}
