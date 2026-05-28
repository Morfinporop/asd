import { IcShield, IcBot, IcCheck } from './Icons';

const CLIENT_ID = '1509625871797977300';
const INVITE_URL = `https://discord.com/api/oauth2/authorize?client_id=${CLIENT_ID}&permissions=3165184&scope=bot%20applications.commands`;

export default function SettingsPage() {
  return (
    <div className="space-y-6 animate-slide-up max-w-2xl">
      <div>
        <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">Настройки</h1>
        <p className="text-sm text-slate-400 mt-2">Информация о боте</p>
      </div>

      {/* Добавить бота */}
      <div className="glass-md rounded-3xl overflow-hidden">
        <div className="h-1 bg-gradient-to-r from-cyan-400 via-cyan-500 to-sky-500" />
        <div className="p-7">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-sky-500 flex items-center justify-center shadow-lg shadow-cyan-200">
              <IcBot className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-800">SoundForge Music Bot</h2>
              <p className="text-xs text-slate-400">discord-player v6 / Node.js 20+</p>
            </div>
          </div>

          <a
            href={INVITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full justify-center text-base py-4"
          >
            <IcBot className="w-5 h-5" />
            Добавить бота на сервер
          </a>

          <p className="text-xs text-slate-400 mt-3 text-center">
            Бот запросит: отправка сообщений, подключение к каналам, slash-команды
          </p>
        </div>
      </div>

      {/* Команды */}
      <div className="glass-md rounded-3xl p-7">
        <h2 className="text-xs font-bold text-slate-500 uppercase tracking-[.15em] mb-5">Все команды</h2>
        <div className="space-y-2.5">
          {[
            { cmd: '/play <запрос>', desc: 'Поиск и воспроизведение (SoundCloud, Spotify, Apple Music, URL)' },
            { cmd: '/np', desc: 'Текущий трек с кнопками управления' },
            { cmd: '/skip', desc: 'Пропустить текущий трек' },
            { cmd: '/stop', desc: 'Остановить и выйти из канала' },
            { cmd: '/pause', desc: 'Поставить на паузу' },
            { cmd: '/resume', desc: 'Продолжить воспроизведение' },
            { cmd: '/queue', desc: 'Показать очередь' },
            { cmd: '/volume <1-100>', desc: 'Установить громкость' },
            { cmd: '/shuffle', desc: 'Перемешать очередь' },
            { cmd: '/loop <режим>', desc: 'Повтор: выкл / трек / очередь' },
            { cmd: '/library', desc: 'Сохранённые треки (из БД)' },
            { cmd: '/playlib <номер>', desc: 'Играть из библиотеки по номеру' },
          ].map((c, i) => (
            <div key={i} className="flex items-start gap-3">
              <code className="text-[12px] mono font-bold text-cyan-600 bg-cyan-50 px-3 py-1.5 rounded-xl min-w-[160px] flex-shrink-0">{c.cmd}</code>
              <span className="text-[12px] text-slate-400 pt-1">{c.desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Кнопки */}
      <div className="glass-md rounded-3xl p-7">
        <h2 className="text-xs font-bold text-slate-500 uppercase tracking-[.15em] mb-5">Кнопки управления (под треком)</h2>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {[
            { emoji: '⏮️', label: 'Назад' },
            { emoji: '⏸️/▶️', label: 'Пауза/Плей' },
            { emoji: '⏭️', label: 'Пропустить' },
            { emoji: '⏹️', label: 'Стоп' },
            { emoji: '📋', label: 'Очередь' },
            { emoji: '🔀', label: 'Перемешать' },
            { emoji: '🔁', label: 'Повтор' },
            { emoji: '🔉', label: 'Тише' },
            { emoji: '🔊', label: 'Громче' },
            { emoji: '💾', label: 'Сохранить' },
          ].map((b, i) => (
            <div key={i} className="glass rounded-xl p-3 text-center">
              <div className="text-lg mb-1">{b.emoji}</div>
              <div className="text-[10px] text-slate-500 font-semibold">{b.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Источники */}
      <div className="glass-md rounded-3xl p-7">
        <h2 className="text-xs font-bold text-slate-500 uppercase tracking-[.15em] mb-5">Поддерживаемые источники</h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            { name: 'SoundCloud', status: true },
            { name: 'Spotify', status: true },
            { name: 'Apple Music', status: true },
            { name: 'Прямые URL', status: true },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-3 glass rounded-xl p-4">
              <IcCheck className={`w-4 h-4 ${s.status ? 'text-emerald-500' : 'text-slate-300'}`} />
              <span className="text-sm text-slate-600 font-medium">{s.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-start gap-3 px-5 py-4 rounded-2xl bg-gradient-to-r from-cyan-50 to-sky-50 border border-cyan-200/50">
        <IcShield className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
        <p className="text-xs text-cyan-700/70 leading-relaxed">
          Токен и ключи хранятся на сервере Railway в переменных окружения. Они недоступны из браузера.
        </p>
      </div>
    </div>
  );
}
