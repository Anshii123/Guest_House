import Link from "next/link";
import { ArrowRight, Home, Compass } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#F7F4EC] px-4 py-20">
      <div className="max-w-md w-full text-center space-y-6">
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-[#C8795A]">
          PAGE NOT FOUND
        </span>

        <h1 className="font-serif text-5xl sm:text-6xl text-[#244638]">
          404
        </h1>

        <div className="space-y-2">
          <h2 className="font-serif text-2xl text-[#292D29]">
            It Seems You&rsquo;ve Wandered Off The Path
          </h2>
          <p className="text-sm text-[#555A54] leading-relaxed">
            The page you are looking for doesn&rsquo;t exist or may have been moved. Let us guide you back to our comfortable spaces.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#244638] hover:bg-[#1b352a] text-[#F7F4EC] px-6 py-3 rounded-full text-sm font-medium transition-all shadow hover:shadow-md"
          >
            <Home className="w-4 h-4 text-[#A8B5A0]" />
            <span>Return to Home</span>
          </Link>

          <Link
            href="/rooms"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-[#FAF8F3] text-[#244638] border border-[#EFEBE1] px-6 py-3 rounded-full text-sm font-medium transition-all"
          >
            <Compass className="w-4 h-4 text-[#244638]" />
            <span>Explore Rooms</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
