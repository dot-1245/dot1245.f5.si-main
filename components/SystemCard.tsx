import React from 'react';
import { SystemSpec } from '../types';
import { Terminal, Monitor } from 'lucide-react';

interface SystemCardProps {
  spec: SystemSpec;
}

export const SystemCard: React.FC<SystemCardProps> = ({ spec }) => {
  const isDebian = spec.os.toLowerCase().includes('debian');

  return (
    <div className="border border-swiss-gray p-6 h-full flex flex-col justify-between hover:bg-white/5 transition-colors duration-300 group">
      <div className="flex justify-between items-start mb-8">
        {isDebian ? (
          <Terminal className="w-6 h-6 text-swiss-white opacity-70 group-hover:opacity-100 transition-opacity" />
        ) : (
          <Monitor className="w-6 h-6 text-swiss-white opacity-70 group-hover:opacity-100 transition-opacity" />
        )}
        <span className="font-mono text-xs text-swiss-gray uppercase tracking-widest">
          {spec.type}
        </span>
      </div>
      
      <div>
        <h3 className="text-2xl font-bold tracking-tight mb-1">{spec.os}</h3>
        <div className="font-mono text-sm text-gray-400 border-l-2 border-swiss-gray pl-3 mt-4 space-y-1">
          <p>VER: <span className="text-white">{spec.version}</span></p>
          {spec.codename && <p>CODE: <span className="text-white">{spec.codename}</span></p>}
          {spec.hardware && <p>SPEC: <span className="text-white">{spec.hardware}</span></p>}
          {spec.de && <p>DE: <span className="text-white">{spec.de}</span></p>}
          {spec.wm && <p>WM: <span className="text-white">{spec.wm}</span></p>}
          {spec.ds && <p>DS: <span className="text-white">{spec.ds}</span></p>}
          {spec.kernel && <p>KERNEL: <span className="text-white">{spec.kernel}</span></p>}
        </div>
      </div>
    </div>
  );
};