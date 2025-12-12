import React, { useState, useEffect } from 'react';
import { SwissGrid, GridItem } from './components/SwissGrid';
import { SystemCard } from './components/SystemCard';
import { UserProfile, SystemSpec } from './types';
import { MapPin, User, Globe } from 'lucide-react';
// @ts-ignore
import { SiYoutube, SiDiscord, SiSteam, SiSpotify } from 'react-icons/si';
// @ts-ignore
import { RiMailFill } from 'react-icons/ri';

const App: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const user: UserProfile = {
    handle: "dot1245",
    gender: "Male",
    location: "Japan",
    region: "JP/Asia-Pacific (+0900)",
    roles: ["Minimalist", "Developer", "System Enthusiast"]
  };

  const systems: SystemSpec[] = [
    {
      os: "Windows 11",
      version: "25H2",
      type: "primary",
      kernel: "NT 10.0",
      hardware: "i5-12400F / RTX 3060"
    },
    {
      os: "Debian GNU/Linux",
      version: "13",
      type: "secondary",
      codename: "Trixie",
      kernel: "Linux 6.x",
      de: "KDE Plasma",
      ds: "Wayland",
      wm: "KWin"
    }
  ];

  return (
    <div className={`min-h-screen bg-swiss-black text-swiss-white selection:bg-white selection:text-black transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Navigation / Header Line */}
      <header className="fixed top-0 left-0 w-full z-50 mix-blend-difference px-4 py-6 md:px-12">
        <div className="flex justify-between items-center border-b border-swiss-gray/50 pb-4">
          <h1 className="text-xl font-bold tracking-tighter">DOT1245</h1>
          <span className="font-mono text-xs hidden md:block">{new Date().getFullYear()} © PORTFOLIO</span>
        </div>
      </header>

      <main className="pt-32 px-4 md:px-12 pb-20">
        
        {/* HERO SECTION */}
        <SwissGrid className="mb-24 md:mb-40">
          <GridItem colSpan={4} mdColSpan={8} lgColSpan={8} className="flex flex-col justify-end min-h-[40vh]">
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.85] mb-4">
              HELLO.<br />
              I AM DOT.
            </h2>
          </GridItem>
          <GridItem colSpan={4} mdColSpan={8} lgColSpan={4} className="flex flex-col justify-end pb-2">
             <div className="text-right md:text-left lg:text-right">
                <p className="text-lg font-light text-gray-400">JAPANESE MALE</p>
                <p className="text-lg font-light text-gray-400">BASED IN JAPAN</p>
             </div>
          </GridItem>
        </SwissGrid>

        {/* IDENTITY SECTION */}
        <div className="border-t border-swiss-white/20 pt-8 mb-24">
          <SwissGrid>
            <GridItem colSpan={4} mdColSpan={2} lgColSpan={3}>
               <span className="text-xs font-mono text-gray-500 uppercase">Identity</span>
            </GridItem>
            <GridItem colSpan={4} mdColSpan={6} lgColSpan={9}>
              <div className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-400 mb-2">
                      <User size={16} />
                      <span className="font-mono text-sm uppercase">Profile</span>
                    </div>
                    <p className="text-2xl md:text-3xl font-medium leading-tight">
                      Known as <span className="text-white border-b-2 border-white">{user.handle}</span>. 
                      A digital native focusing on simplicity and structure.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-400 mb-2">
                      <MapPin size={16} />
                      <span className="font-mono text-sm uppercase">Location</span>
                    </div>
                    <p className="text-2xl md:text-3xl font-medium leading-tight">
                      Operating from <span className="text-white">{user.location}</span>.
                      <br />
                      <span className="text-base text-gray-400 font-mono mt-1 block">{user.region}</span>
                    </p>
                  </div>
                </div>
              </div>
            </GridItem>
          </SwissGrid>
        </div>

        {/* SYSTEM ENVIRONMENT SECTION */}
        <div className="border-t border-swiss-white/20 pt-8 mb-24">
          <SwissGrid>
            <GridItem colSpan={4} mdColSpan={2} lgColSpan={3}>
               <span className="text-xs font-mono text-gray-500 uppercase">Environment</span>
            </GridItem>
            <GridItem colSpan={4} mdColSpan={6} lgColSpan={9}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {systems.map((sys) => (
                  <SystemCard key={sys.os} spec={sys} />
                ))}
              </div>
            </GridItem>
          </SwissGrid>
        </div>

        {/* PHILOSOPHY / FOOTER */}
        <div className="bg-white text-black p-8 md:p-12 mt-20">
          <SwissGrid>
            <GridItem colSpan={4} mdColSpan={8} lgColSpan={8}>
              <h3 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
                MINIMALISM.<br />
                LINEARITY.<br />
                FUNCTION.
              </h3>
            </GridItem>
            <GridItem colSpan={4} mdColSpan={8} lgColSpan={4} className="flex flex-col justify-between">
              <Globe className="w-12 h-12 mb-4 md:mb-0" />
              <div className="space-y-4">
                 <p className="font-mono text-sm">
                   Material Design principles applied with Swiss typographic sensibilities.
                 </p>
                 <div className="flex items-center gap-6 pt-2">
                    <a href="https://www.youtube.com/@dot-1245" target="_blank" rel="noopener noreferrer" className="text-black transition-colors hover:scale-110 duration-200 hover:text-[#FF0000]" aria-label="YouTube">
                      <SiYoutube size={24} />
                    </a>
                    <a href="https://discord.com/users/781823733454733322" target="_blank" rel="noopener noreferrer" className="text-black transition-colors hover:scale-110 duration-200 hover:text-[#5865F2]" aria-label="Discord">
                      <SiDiscord size={24} />
                    </a>
                    <a href="https://steamcommunity.com/profiles/76561199340967978/" target="_blank" rel="noopener noreferrer" className="text-black transition-colors hover:scale-110 duration-200 hover:text-[#1A9FFF]" aria-label="Steam">
                      <SiSteam size={24} />
                    </a>
                    <a href="https://open.spotify.com/user/9mvmw97oqtx5wxi8xcy9vwfsw" target="_blank" rel="noopener noreferrer" className="text-black transition-colors hover:scale-110 duration-200 hover:text-[#1ED760]" aria-label="Spotify">
                      <SiSpotify size={24} />
                    </a>
                    <a href="mailto:dot1245@proton.me" className="text-black transition-colors hover:scale-110 duration-200 hover:text-[#6c4bfd]" aria-label="Email">
                      <RiMailFill size={24} />
                    </a>
                 </div>
              </div>
            </GridItem>
          </SwissGrid>
        </div>
      </main>
    </div>
  );
};

export default App;