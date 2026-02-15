"use client";

import { ReactNode } from "react";
import { Navbar } from "@/components/navbar";

interface SiteWrapperProps {
  children: ReactNode;
}

export function SiteWrapper({ children }: SiteWrapperProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 container py-6 md:py-8 px-4 sm:px-6 lg:px-8">
        {children}
      </main>
      <footer className="border-t border-border/40">
        <div className="container flex justify-center items-center px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            #
            <span className="bg-gradient-to-r from-cyan-600/80 via-cyan-500/70 to-cyan-600/80 bg-clip-text text-transparent">
              Stryx
            </span>
          </h2>
        </div>
      </footer>
    </div>
  );
}
