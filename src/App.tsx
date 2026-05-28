export default function App() {
  const CLIENT_ID = '1509625871797977300';
  const INVITE_URL = `https://discord.com/api/oauth2/authorize?client_id=${CLIENT_ID}&permissions=3165184&scope=bot%20applications.commands`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white">
      {/* Фон — градиентные круги */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px]" />
      </div>

      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-20">
        {/* Логотип */}
        <div className="mb-8">
          <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 flex items-center justify-center shadow-2xl shadow-indigo-500/30">
            <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 18V5l12-2v13" />
              <circle cx="6" cy="18" r="3" />
              <circle cx="18" cy="16" r="3" />
            </svg>
          </div>
        </div>

        {/* Заголовок */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center mb-4 tracking-tight">
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            SoundForge
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-slate-300 text-center mb-12 max-w-xl">
          Музыкальный бот для Discord с кнопками управления, библиотекой и поддержкой всех площадок
        </p>

        {/* Кнопка добавить */}
        <a
          href={INVITE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 text-white font-bold text-lg shadow-2xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-105 transition-all duration-300 mb-16"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
          </svg>
          Добавить бота на сервер
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>

        {/* Что умеет */}
        <div className="w-full max-w-4xl">
          <h2 className="text-xl font-bold text-center text-slate-300 mb-8 uppercase tracking-widest text-sm">
            Что умеет бот
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: '▶️', title: 'Воспроизведение', desc: 'SoundCloud, Spotify, Apple Music, прямые ссылки на MP3' },
              { icon: '🎛️', title: 'Кнопки управления', desc: 'Пауза, пропуск, громкость, повтор, перемешивание' },
              { icon: '📚', title: 'Библиотека', desc: 'Сохранение треков в MongoDB и воспроизведение по номеру' },
              { icon: '🔍', title: 'Поиск везде', desc: 'Автоматический поиск по всем площадкам' },
              { icon: '📋', title: 'Очередь', desc: 'Просмотр, перемешивание, управление списком' },
              { icon: '⚡', title: '24/7 онлайн', desc: 'Работает на Railway без перерывов' },
              { icon: '🎵', title: '12 команд', desc: 'Все команды через / — удобно и быстро' },
              { icon: '💾', title: 'Сохранение', desc: 'Кнопка 💾 под каждым треком для сохранения' },
              { icon: '🔊', title: 'Качество', desc: 'Высокое качество звука, стабильное подключение' },
            ].map((f, i) => (
              <div
                key={i}
                className="group glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-bold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Команды */}
        <div className="w-full max-w-3xl mt-16">
          <h2 className="text-xl font-bold text-center text-slate-300 mb-8 uppercase tracking-widest text-sm">
            Все команды
          </h2>
          <div className="glass rounded-2xl p-6 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { cmd: '/play <запрос>', desc: 'Воспроизвести трек' },
                { cmd: '/np', desc: 'Текущий трек + кнопки' },
                { cmd: '/skip', desc: 'Пропустить' },
                { cmd: '/stop', desc: 'Остановить' },
                { cmd: '/pause', desc: 'Пауза' },
                { cmd: '/resume', desc: 'Продолжить' },
                { cmd: '/queue', desc: 'Очередь' },
                { cmd: '/volume <1-100>', desc: 'Громкость' },
                { cmd: '/shuffle', desc: 'Перемешать' },
                { cmd: '/loop <режим>', desc: 'Повтор' },
                { cmd: '/library', desc: 'Сохранённые треки' },
                { cmd: '/playlib <номер>', desc: 'Из библиотеки' },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-3">
                  <code className="text-sm font-mono font-bold text-cyan-400 bg-cyan-950/50 px-3 py-1.5 rounded-lg min-w-[140px]">
                    {c.cmd}
                  </code>
                  <span className="text-sm text-slate-400">{c.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Футер */}
        <footer className="mt-20 text-center text-slate-500 text-sm">
          <p>discord.js v14 • discord-player v6 • Node.js 20+</p>
          <p className="mt-2">Хостинг на Railway</p>
        </footer>
      </main>

      <style>{`
        .glass {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.06);
        }
      `}</style>
    </div>
  );
}
