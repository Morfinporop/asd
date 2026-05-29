import { useState, useEffect } from 'react';

const API = '/api';

interface Track {
  _id: string;
  title: string;
  artist: string;
  url: string;
  addedBy: string;
  addedAt: string;
}

export default function App() {
  const INVITE = `https://discord.com/api/oauth2/authorize?client_id=1509625871797977300&permissions=3165184&scope=bot%20applications.commands`;

  const [tracks, setTracks] = useState<Track[]>([]);
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState('');
  const [tab, setTab] = useState<'home' | 'upload' | 'library'>('home');

  const load = async () => {
    try {
      const r = await fetch(API + '/tracks');
      if (r.ok) setTracks(await r.json());
    } catch {}
  };

  useEffect(() => { load(); }, []);

  const addTrack = async () => {
    if (!title.trim() || !url.trim()) return;
    setLoading(true);
    try {
      const r = await fetch(API + '/tracks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: title.trim(), artist: artist.trim() || 'Unknown', url: url.trim(), addedBy: 'web' })
      });
      if (r.ok) {
        setTitle(''); setArtist(''); setUrl('');
        setMsg('Added!');
        setTimeout(() => setMsg(''), 2000);
        load();
      }
    } catch {}
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#0c0914] text-white relative overflow-hidden">
      {/* BG */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-200px] left-[-100px] w-[600px] h-[600px] rounded-full bg-violet-600/10 blur-[180px]" />
        <div className="absolute bottom-[-200px] right-[-100px] w-[600px] h-[600px] rounded-full bg-purple-800/10 blur-[180px]" />
      </div>

      {/* Nav */}
      <nav className="relative z-20 flex items-center justify-between px-6 h-16 border-b border-violet-500/8">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center">
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
          </div>
          <span className="font-black text-sm tracking-tight bg-gradient-to-r from-violet-300 to-purple-300 bg-clip-text text-transparent">SoundForge</span>
        </div>
        <div className="flex gap-1">
          {(['home', 'upload', 'library'] as const).map(t => (
            <button key={t} onClick={() => { setTab(t); if (t === 'library') load(); }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${tab === t ? 'bg-violet-500/15 text-violet-300' : 'text-violet-400/30 hover:text-violet-400/60'}`}>
              {t === 'home' ? 'Home' : t === 'upload' ? 'Upload' : 'Library'}
            </button>
          ))}
        </div>
      </nav>

      <div className="relative z-10 max-w-3xl mx-auto px-6 pt-12 pb-20">
        {/* HOME */}
        {tab === 'home' && (
          <div className="flex flex-col items-center text-center">
            <div className="w-[72px] h-[72px] rounded-[22px] bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center mb-10 shadow-2xl shadow-violet-600/30 ring-1 ring-white/10">
              <svg className="w-9 h-9 text-white/90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
            </div>
            <h1 className="text-5xl font-black tracking-[-0.04em] mb-4 bg-gradient-to-r from-violet-300 via-purple-200 to-fuchsia-300 bg-clip-text text-transparent">SoundForge</h1>
            <p className="text-violet-300/30 max-w-md mb-14 text-[15px] leading-relaxed">
              Upload music to database. Bot plays it in Discord voice channels. No external services needed.
            </p>
            <a href={INVITE} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-700 font-bold text-[15px] shadow-2xl shadow-violet-600/30 hover:shadow-violet-500/50 hover:scale-[1.02] transition-all ring-1 ring-white/10 mb-16">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.373-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.1.246.198.373.292a.077.077 0 0 1-.006.127 12.3 12.3 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419s.956-2.419 2.157-2.419 2.176 1.095 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419s.955-2.419 2.157-2.419 2.176 1.095 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/></svg>
              Add to server
            </a>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
              {[
                { t: 'Upload Music', d: 'Add MP3 links to database from this site', p: 'M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5' },
                { t: 'Play in Discord', d: '/play command picks tracks from your library', p: 'M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z' },
                { t: 'Interactive Controls', d: 'Pause, skip, volume, loop via buttons', p: 'M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z' },
                { t: 'MongoDB Storage', d: 'All tracks stored permanently in database', p: 'M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75' },
              ].map((f, i) => (
                <div key={i} className="flex gap-4 p-5 rounded-2xl border border-violet-500/8 bg-violet-500/[.03]">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-violet-400/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d={f.p}/></svg>
                  </div>
                  <div>
                    <div className="font-bold text-sm text-violet-100/80 mb-1">{f.t}</div>
                    <div className="text-xs text-violet-300/25">{f.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* UPLOAD */}
        {tab === 'upload' && (
          <div>
            <h2 className="text-2xl font-black mb-2 bg-gradient-to-r from-violet-300 to-purple-300 bg-clip-text text-transparent">Upload Music</h2>
            <p className="text-violet-300/25 text-sm mb-8">Add track URL to database. Bot will play it via /play command.</p>

            <div className="space-y-4 max-w-md">
              <div>
                <label className="text-xs text-violet-400/40 font-bold mb-1.5 block">Title *</label>
                <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Track name"
                  className="w-full px-4 py-3 rounded-xl bg-violet-500/5 border border-violet-500/10 text-sm text-white placeholder:text-violet-400/20 outline-none focus:border-violet-500/30 transition-colors" />
              </div>
              <div>
                <label className="text-xs text-violet-400/40 font-bold mb-1.5 block">Artist</label>
                <input value={artist} onChange={e => setArtist(e.target.value)} placeholder="Artist name"
                  className="w-full px-4 py-3 rounded-xl bg-violet-500/5 border border-violet-500/10 text-sm text-white placeholder:text-violet-400/20 outline-none focus:border-violet-500/30 transition-colors" />
              </div>
              <div>
                <label className="text-xs text-violet-400/40 font-bold mb-1.5 block">URL (direct link to MP3) *</label>
                <input value={url} onChange={e => setUrl(e.target.value)} placeholder="https://example.com/song.mp3"
                  className="w-full px-4 py-3 rounded-xl bg-violet-500/5 border border-violet-500/10 text-sm text-white placeholder:text-violet-400/20 outline-none focus:border-violet-500/30 transition-colors" />
              </div>
              <div className="flex items-center gap-4 pt-2">
                <button onClick={addTrack} disabled={loading || !title.trim() || !url.trim()}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-purple-700 font-bold text-sm disabled:opacity-30 hover:scale-[1.02] transition-all">
                  {loading ? 'Adding...' : 'Add to Library'}
                </button>
                {msg && <span className="text-xs text-emerald-400 font-bold">{msg}</span>}
              </div>
            </div>
          </div>
        )}

        {/* LIBRARY */}
        {tab === 'library' && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-black bg-gradient-to-r from-violet-300 to-purple-300 bg-clip-text text-transparent">Library</h2>
                <p className="text-violet-300/25 text-sm mt-1">{tracks.length} tracks in database</p>
              </div>
              <button onClick={load} className="px-4 py-2 rounded-xl bg-violet-500/10 text-violet-400/50 text-xs font-bold hover:bg-violet-500/20 transition-colors">Refresh</button>
            </div>

            {tracks.length === 0 ? (
              <div className="text-center py-20">
                <svg className="w-12 h-12 text-violet-400/10 mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
                <p className="text-violet-400/20 text-sm">Empty. Go to Upload tab to add tracks.</p>
              </div>
            ) : (
              <div className="space-y-2">
                {tracks.map((t, i) => (
                  <div key={t._id} className="flex items-center gap-4 p-4 rounded-xl border border-violet-500/5 bg-violet-500/[.02] hover:bg-violet-500/[.05] transition-colors">
                    <span className="text-xs text-violet-400/20 font-mono w-6 text-right">{i + 1}</span>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-bold text-violet-100/70 truncate">{t.title}</div>
                      <div className="text-xs text-violet-300/20 truncate">{t.artist}</div>
                    </div>
                    <code className="text-[10px] text-violet-400/15 font-mono truncate max-w-[150px] hidden sm:block">{t.url}</code>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
