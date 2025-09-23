'use client';

export function WaitlistSection() {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Join Our Waitlist</h2>
        <p className="text-xl text-muted-foreground mb-8">
          Be among the first to experience the future of interactive cooking.
          Sign up now and get early access when we launch.
        </p>
        <a
          href="https://forms.gle/xhC3GgxG2vy3GkJE8"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 bg-primary text-white rounded-full text-lg hover:bg-primary-light transition-colors mb-8"
        >
          Join Waitlist
        </a>
        
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">Follow Us</h3>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://www.reddit.com/r/allyoucancook/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-orange-500/25 transform hover:scale-105"
              title="Reddit Community"
            >
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">R</span>
              </div>
              <span className="hidden sm:inline">Reddit</span>
            </a>
            
            <a
              href="https://www.facebook.com/groups/1985719762246706"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-500/25 transform hover:scale-105"
              title="Facebook Group"
            >
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">f</span>
              </div>
              <span className="hidden sm:inline">Facebook</span>
            </a>
            
            <a
              href="https://x.com/acaicook"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-black hover:bg-gray-800 dark:bg-gray-200 dark:hover:bg-white text-white dark:text-black rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-gray-500/25 transform hover:scale-105"
              title="Twitter/X"
            >
              <div className="w-6 h-6 bg-white/20 dark:bg-black/20 rounded-full flex items-center justify-center">
                <span className="text-white dark:text-black text-sm font-bold">𝕏</span>
              </div>
              <span className="hidden sm:inline">Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
