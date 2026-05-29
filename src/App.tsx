export default function App() {
  const INVITE = `https://discord.com/api/oauth2/authorize?client_id=1509625871797977300&permissions=3165184&scope=bot%20applications.commands`;
  const Ic = ({ d, c = 'w-5 h-5' }: { d: string; c?: string }) => (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d={d} /></svg>
  );
  return (
    <div className="min-h-screen bg-[#0c0914] text-white relative overflow-hidden">
      {/* BG */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-200px] left-[-100px] w-[600px] h-[600px] rounded-full bg-violet-600/10 blur-[180px]" />
        <div className="absolute bottom-[-200px] right-[-100px] w-[600px] h-[600px] rounded-full bg-purple-800/10 blur-[180px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-fuchsia-700/5 blur-[120px]" />
      </div>
      <div className="relative z-10 flex flex-col items-center min-h-screen px-6 pt-28 pb-20">
        {/* Logo */}
        <div className="w-[72px] h-[72px] rounded-[22px] bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center mb-10 shadow-2xl shadow-violet-600/30 ring-1 ring-white/10">
          <svg className="w-9 h-9 text-white/90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" />
          </svg>
        </div>
        <h1 className="text-5xl sm:text-6xl font-black tracking-[-0.04em] mb-4 bg-gradient-to-r from-violet-300 via-purple-200 to-fuchsia-300 bg-clip-text text-transparent">
          SoundForge
        </h1>
        <p className="text-violet-300/40 text-center max-w-md mb-14 text-[15px] leading-relaxed font-medium">
          Discord music bot. Direct MP3 links, SoundCloud search, queue management, interactive controls.
        </p>
        {/* CTA */}
        <a href={INVITE} target="_blank" rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-700 font-bold text-[15px] shadow-2xl shadow-violet-600/30 hover:shadow-violet-500/50 hover:scale-[1.02] active:scale-[0.99] transition-all ring-1 ring-white/10 mb-24">
          <svg className="w-5 h-5 text-white/80" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.373-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.1.246.198.373.292a.077.077 0 0 1-.006.127 12.3 12.3 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419s.956-2.419 2.157-2.419c1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419s.955-2.419 2.157-2.419c1.21 0 2.176 1.095 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>
          Add to server
          <svg className="w-4 h-4 text-white/50 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
        {/* Features */}
        <div className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-3 mb-20">
          {[
            { t: 'Direct URLs', d: 'MP3, WAV, OGG — paste any audio link', p: 'M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.193-9.193a4.5 4.5 0 00-6.364 0l-4.5 4.5a4.5 4.5 0 001.242 7.244' },
            { t: 'SoundCloud', d: 'Search by name or paste link', p: 'M9 18V5l12-2v13 M6 18a3 3 0 100-6 3 3 0 000 6z M18 16a3 3 0 100-6 3 3 0 000 6z' },
            { t: 'Controls', d: 'Pause, skip, volume, loop, shuffle', p: 'M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z' },
            { t: 'Library', d: 'Save tracks to DB, play later', p: 'M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25' },
            { t: 'Queue', d: 'Add multiple tracks, reorder, shuffle', p: 'M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z' },
            { t: '24/7 Uptime', d: 'Hosted on Railway, always online', p: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z' },
          ].map((f, i) => (
            <div key={i} className="flex gap-4 p-5 rounded-2xl border border-violet-500/8 bg-violet-500/[.03] hover:bg-violet-500/[.06] transition-all group">
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-violet-500/15 transition-colors">
                <Ic d={f.p} c="w-5 h-5 text-violet-400/70" />
              </div>
              <div>
                <div className="font-bold text-sm text-violet-100/80 mb-1">{f.t}</div>
                <div className="text-xs text-violet-300/25 leading-relaxed">{f.d}</div>
              </div>
            </div>
          ))}
        </div>
        {/* Commands */}
        <h2 className="text-[11px] font-bold text-violet-400/30 uppercase tracking-[.25em] mb-6">Commands</h2>
        <div className="w-full max-w-2xl grid grid-cols-3 sm:grid-cols-4 gap-2 mb-20">
          {['/play','/np','/skip','/stop','/pause','/resume','/queue','/volume','/shuffle','/loop','/library','/playlib'].map(c => (
            <div key={c} className="text-center py-3 rounded-xl border border-violet-500/8 bg-violet-500/[.02] hover:bg-violet-500/[.05] transition-colors">
              <code className="text-[11px] font-mono font-bold text-violet-400/50">{c}</code>
            </div>
          ))}
        </div>
        <div className="text-[11px] text-violet-300/15 font-medium tracking-wide">
          SoundForge
        </div>
      </div>
    </div>
  );
}
