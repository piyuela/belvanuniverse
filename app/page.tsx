"use client";

import { useEffect, useMemo, useRef, useState, type ChangeEvent } from "react";

const chapters = ["Inicio", "Momentos", "La ruleta", "Universos", "La canción"];
const chapterIds = ["chapter-1", "chapter-2", "chapter-3", "chapter-5", "chapter-6"];
const songLink = "https://www.mureka.ai/song-detail/BzMxVykGD9VcqTMYGVEbsb?is_from_share=1";
const baseMomentPhotoPaths = [
  "/Photos/momentos/WhatsApp Image 2026-09-18 at 13.03.10.jpeg",
  "/Photos/momentos/WhatsApp Image 2026-09-18 at 13.03.27.jpeg",
  "/Photos/momentos/WhatsApp Image 2026-09-18 at 13.03.44.jpeg",
  "/Photos/momentos/WhatsApp Image 2026-09-18 at 13.14.40.jpeg",
  "/Photos/momentos/WhatsApp Image 2026-09-18 at 13.17.33.jpeg",
  "/Photos/momentos/WhatsApp Image 2026-09-18 at 13.17.54.jpeg",
  "/Photos/momentos/WhatsApp Image 2026-09-18 at 13.19.38.jpeg",
  "/Photos/momentos/WhatsApp Image 2026-09-18 at 13.29.45.jpeg",
  "/Photos/momentos/WhatsApp Image 2026-09-18 at 13.32.23.jpeg",
  "/Photos/momentos/WhatsApp Image 2026-09-18 at 13.34.56.jpeg",
  "/Photos/momentos/WhatsApp Image 2026-09-18 at 13.36.16.jpeg",
  "/Photos/momentos/WhatsApp Image 2026-09-18 at 13.36.55.jpeg",
  "/Photos/momentos/WhatsApp Image 2026-09-18 at 13.37.19.jpeg",
  "/Photos/momentos/WhatsApp Image 2026-09-18 at 13.38.17.jpeg",
  "/Photos/momentos/WhatsApp Image 2026-09-18 at 13.39.13.jpeg",
  "/Photos/momentos/WhatsApp Image 2026-09-18 at 13.40.48.jpeg",
  "/Photos/momentos/WhatsApp Image 2026-09-18 at 13.41.33.jpeg",
  "/Photos/momentos/WhatsApp Image 2026-09-18 at 13.44.04.jpeg",
  "/Photos/momentos/WhatsApp Image 2026-09-18 at 13.44.42.jpeg",
  "/Photos/momentos/WhatsApp Image 2026-09-18 at 13.46.24.jpeg",
  "/Photos/momentos/WhatsApp Image 2026-09-18 at 13.46.54.jpeg",
  "/Photos/momentos/WhatsApp Image 2026-09-18 at 13.47.12.jpeg",
  "/Photos/momentos/WhatsApp Image 2026-09-18 at 13.48.40.jpeg",
  "/Photos/momentos/WhatsApp Image 2026-09-18 at 13.49.23.jpeg",
  "/Photos/momentos/WhatsApp Image 2026-09-18 at 13.50.04.jpeg",
  "/Photos/momentos/WhatsApp Image 2026-09-18 at 13.51.31.jpeg",
  "/Photos/momentos/WhatsApp Image 2026-09-18 at 13.52.12.jpeg",
  "/Photos/momentos/WhatsApp Image 2026-09-18 at 13.53.13.jpeg",
  "/Photos/momentos/WhatsApp Image 2026-09-18 at 13.54.47.jpeg",
  "/Photos/momentos/WhatsApp Image 2026-09-18 at 13.55.16.jpeg",
  "/Photos/momentos/WhatsApp Image 2026-09-18 at 13.55.37.jpeg",
  "/Photos/momentos/WhatsApp Image 2026-09-18 at 13.56.10.jpeg",
  "/Photos/momentos/WhatsApp Image 2026-09-18 at 13.57.52.jpeg",
  "/Photos/momentos/WhatsApp Image 2026-09-18 at 13.58.15.jpeg",
  "/Photos/momentos/WhatsApp Image 2026-09-18 at 13.59.26.jpeg",
  "/Photos/momentos/WhatsApp Image 2026-09-18 at 14.00.27.jpeg",
  "/Photos/momentos/WhatsApp Image 2026-09-18 at 14.03.40.jpeg",
  "/Photos/momentos/WhatsApp Image 2026-09-18 at 14.04.19.jpeg",
  "/Photos/momentos/WhatsApp Image 2026-09-18 at 14.04.54.jpeg",
  "/Photos/momentos/WhatsApp Image 2026-09-18 at 14.05.47.jpeg",
  "/Photos/momentos/WhatsApp Image 2026-09-18 at 14.06.11.jpeg",
  "/Photos/momentos/WhatsApp Image 2026-09-18 at 14.06.30.jpeg",
  "/Photos/momentos/WhatsApp Image 2026-09-18 at 14.07.21.jpeg",
  "/Photos/momentos/WhatsApp Image 2026-09-18 at 14.08.08.jpeg",
  "/Photos/momentos/WhatsApp Image 2026-09-18 at 14.08.33.jpeg",
  "/Photos/momentos/WhatsApp Image 2026-09-18 at 14.09.03.jpeg",
  "/Photos/momentos/WhatsApp Image 2026-09-18 at 14.09.45.jpeg",
  "/Photos/momentos/WhatsApp Image 2026-09-18 at 14.10.08.jpeg",
  "/Photos/momentos/WhatsApp Image 2026-09-18 at 14.11.20.jpeg",
  "/Photos/momentos/WhatsApp Image 2026-09-18 at 14.11.50.jpeg",
  "/Photos/momentos/WhatsApp Image 2026-09-18 at 14.12.17.jpeg",
];
const universePhotoPaths = [
  "/photos/1555A79D-08C2-4A81-A17A-11AEF4E98866.PNG",
  "/photos/15A9B9ED-DB97-436E-98C3-3665197CCFBB.PNG",
  "/photos/1DB343E3-A096-43DC-9009-524408915556.PNG",
  "/photos/24EEE72F-8E15-4D64-9AAB-A4A4CA33645B.PNG",
  "/photos/78A15D60-2C84-4B61-A922-81A119B901FA.PNG",
  "/photos/836E6693-B0AA-449B-89F4-559AE1549816.PNG",
  "/photos/8BE2FAAC-8692-4151-9F5D-17F12EC6A53B.PNG",
  "/photos/EE20B097-42BE-4D42-9DF1-84BDA71D399C.PNG",
  "/photos/B8243F69-F02C-4840-A8CF-1E25102E67A4.PNG",
  "/photos/F13D7879-962C-4E1B-A10D-E100E9D884AF.PNG",
  "/photos/96755745-188C-4FF7-91E6-52DCB0D637D7.PNG",
];
const universeCaptions = [
  "París en los años 20",
  "Apocalipsis Zombie",
  "Viejitas",
  "Pelicula de los 80",
  "Nueva York de los 50",
  "Versión anime",
  "Versión Fortnite",
  "Universo espacial",
  "Japón futurista",
  "Fantansia medieval",
  "Y la que más me hace ilusión contigo",
];

function insertMomentItems<T>(baseItems: T[], newItems: T[], positions: number[]) {
  const result = [...baseItems];
  [...newItems].reverse().forEach((item, reverseIndex) => {
    const position = positions[positions.length - 1 - reverseIndex];
    result.splice(position - 1, 0, item);
  });
  return result;
}

const slotSymbols = ["7", "♥", "★", "♦", "✦", "☾"];
const prizeOptions = ["Masaje", "Helado", "Cuidado Facial", "Mandocas"];
type GameState = { date: string; attempts: number; prizes: string[] };

function readGameState(): GameState {
  const today = new Date().toISOString().slice(0, 10);
  const saved = window.localStorage.getItem("belvan-slot-game");
  const parsed = saved ? JSON.parse(saved) as GameState : null;
  const productionResetKey = "belvan-slot-game-production-reset-v1";
  if (window.localStorage.getItem(productionResetKey) !== "done") {
    const cleanState = { date: today, attempts: 3, prizes: [] };
    window.localStorage.setItem(productionResetKey, "done");
    window.localStorage.setItem("belvan-slot-game", JSON.stringify(cleanState));
    return cleanState;
  }
  return parsed?.date === today ? parsed : { date: today, attempts: 3, prizes: parsed?.prizes ?? [] };
}

function playCasinoTone(frequency: number, duration: number) {
  const AudioContextClass = window.AudioContext || (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!AudioContextClass) return;
  const context = new AudioContextClass();
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.type = "square";
  oscillator.frequency.value = frequency;
  gain.gain.setValueAtTime(0.035, context.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + duration);
  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start();
  oscillator.stop(context.currentTime + duration);
  oscillator.addEventListener("ended", () => void context.close());
}

function playWinCelebration() {
  [523, 659, 784, 1047, 1318].forEach((frequency, index) => {
    window.setTimeout(() => playCasinoTone(frequency, index === 4 ? 0.45 : 0.22), index * 130);
  });
}

function playApplauseBurst() {
  const AudioContextClass = window.AudioContext || (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!AudioContextClass) return;
  const context = new AudioContextClass();
  const buffer = context.createBuffer(1, context.sampleRate * 0.32, context.sampleRate);
  const data = buffer.getChannelData(0);
  for (let index = 0; index < data.length; index += 1) data[index] = (Math.random() * 2 - 1) * Math.exp(-index / (data.length * 0.45));
  const source = context.createBufferSource();
  const filter = context.createBiquadFilter();
  const gain = context.createGain();
  source.buffer = buffer;
  filter.type = "bandpass";
  filter.frequency.value = 1500;
  gain.gain.value = 0.16;
  source.connect(filter);
  filter.connect(gain);
  gain.connect(context.destination);
  source.start();
  source.addEventListener("ended", () => void context.close());
}

function useObjectUrls(files: File[]) {
  const urls = useMemo(() => files.map((file) => URL.createObjectURL(file)), [files]);
  useEffect(() => {
    return () => urls.forEach((url) => URL.revokeObjectURL(url));
  }, [urls]);
  return urls;
}

export default function Home() {
  const [activeChapter, setActiveChapter] = useState(0);
  const [momentSlide, setMomentSlide] = useState(0);
  const [universePhotos, setUniversePhotos] = useState<File[]>([]);
  const [universeSlide, setUniverseSlide] = useState(0);
  const [gameState, setGameState] = useState<GameState>({ date: "", attempts: 3, prizes: [] });
  const [reels, setReels] = useState(["7", "7", "7"]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [wonPrize, setWonPrize] = useState<string | null>(null);
  const [attemptsExhausted, setAttemptsExhausted] = useState(false);
  const celebrationTimerRef = useRef<number | null>(null);
  const universeUrls = useObjectUrls(universePhotos);
  const universeGallery = [...universePhotoPaths, ...universeUrls];
  const baseMomentCaptions = [
    "Nuestra primera cita sin saberlo",
    "El after de la primera cita",
    "Cuando me llevabas a emborracharme al malecón",
    "Cuando te cuidaba y tú te burlabas de mis notas",
    "El gif mas odiado",
    "Tu viaje de cumple = nuestro primer beso",
    "Nuestro forever",
    "La foto que no necesita descripción pero que tanto amas",
    "Visitarte cuando amabas vivir así como nómada",
    "Nuestro primer viaje juntas solas",
    "Cuando me celebraste 14 de febrero por primera vez",
    "Nuestra fiesta de no cumpleaños",
    "Nuestra primera guacherna",
    "Cuando nos íbamos de rumba cada vez que nos veíamos",
    "Nuestro primer viaje con mis amigos",
    "Verte feliz con tu decoración de cumpleaños",
    "Nuestro primer burger master",
    "Nuestra excusa para limpiar palomas 🤣",
    "El primer aniversario",
    "Nuestro primer show de disney",
    "Nuestra fit era",
    "La primera carrera",
    "Tus detalles en momentos dificiles",
    "Nuestra primera navidad juntas",
    "Las mandoquitas que te hicieron feliz",
    "El reset que me regalaste",
    "Cuando conociste a paco",
    "Nuestra venta de paletas",
    "Nuestro paseo a villa de leyva",
    "Llevar al flaco a su primer concierto",
    "Ir a conocer México",
    "Que no llegarán niños a pedir dulces",
    "Nuestro vuelo de ida a Europa",
    "Ir juntas al bernabéu",
    "Todo nuestro eurotrip",
    "Que me pidieras ser tu novia de una forma tan hermosa",
    "Nuestro inicio en action",
    "Nuestro paseo al Zuana",
    "Nuestro carnaval pro max",
    "El paseo que me regalaste para relajarme x10000",
    "y tus detalles tan hermosos",
    "Colarnos en la carrera",
    "Gorreandonos la comida del casino",
    "Nuestro recuerdo de SAI",
    "Cuando vimos la tortuguita de mar",
    "Tu cumple con piñata de Ed",
    "Tu felicidad con tu regalo de cumple más preciado",
    "Cuando te cantaron el cumpleaños",
    "Que me llevaras a Nueva York por primera vez",
    "Mas Nueva York",
    "Conocer el mundo de mario",
  ];
  const newMomentPhotos = [
    "/Photos/momentos/WhatsApp Image 2026-09-18 at 14.53.17.jpeg",
    "/Photos/momentos/WhatsApp Image 2026-09-18 at 14.53.29.jpeg",
    "/Photos/momentos/WhatsApp Image 2026-09-18 at 14.53.41.jpeg",
    "/Photos/momentos/WhatsApp Image 2026-09-18 at 14.53.50.jpeg",
    "/Photos/momentos/WhatsApp Image 2026-09-18 at 14.54.08.jpeg",
    "/Photos/momentos/WhatsApp Image 2026-09-18 at 14.54.41.jpeg",
  ];
  const insertPositions = [1, 9, 25, 33, 37, 57];
  const momentPhotoPaths = insertMomentItems(baseMomentPhotoPaths, newMomentPhotos, insertPositions);
  const momentCaptions = insertMomentItems(baseMomentCaptions, newMomentPhotos.map((_, index) => `Caption pendiente · Momento nuevo ${index + 1}`), insertPositions);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setGameState(readGameState);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => () => {
    if (celebrationTimerRef.current !== null) window.clearInterval(celebrationTimerRef.current);
  }, []);

  const spin = () => {
    if (isSpinning || gameState.attempts <= 0 || gameState.prizes.length === prizeOptions.length) return;
    setIsSpinning(true);
    setWonPrize(null);
    setAttemptsExhausted(false);
    playCasinoTone(180, 0.18);
    const nextReels = Array.from({ length: 3 }, () => slotSymbols[Math.floor(Math.random() * slotSymbols.length)]);
    let ticks = 0;
    const reelTimer = window.setInterval(() => {
      ticks += 1;
      setReels(Array.from({ length: 3 }, (_, index) => slotSymbols[(ticks + index + Math.floor(Math.random() * slotSymbols.length)) % slotSymbols.length]));
      playCasinoTone(260 + (ticks % 4) * 45, 0.07);
    }, 115);
    window.setTimeout(() => {
      window.clearInterval(reelTimer);
      setReels([nextReels[0], nextReels[1], nextReels[2]]);
      playCasinoTone(330, 0.16);
      const nextState = { ...gameState, attempts: gameState.attempts - 1 };
      const isWinner = nextReels.every((symbol) => symbol === nextReels[0]);
      if (isWinner) {
        const availablePrizes = prizeOptions.filter((prize) => !gameState.prizes.includes(prize));
        const prize = availablePrizes[Math.floor(Math.random() * availablePrizes.length)];
        nextState.prizes = [...gameState.prizes, prize];
        setWonPrize(prize);
        playWinCelebration();
        playApplauseBurst();
        celebrationTimerRef.current = window.setInterval(() => {
          playWinCelebration();
          playApplauseBurst();
        }, 1800);
      } else if (nextState.attempts === 0) {
        setAttemptsExhausted(true);
      }
      setGameState(nextState);
      window.localStorage.setItem("belvan-slot-game", JSON.stringify(nextState));
      setIsSpinning(false);
    }, 5000);
  };

  const goTo = (index: number) => {
    const safeIndex = Math.min(index, chapters.length - 1);
    setActiveChapter(safeIndex);
    document.getElementById(chapterIds[safeIndex])?.scrollIntoView({ behavior: "smooth" });
  };
  const handleFiles = (event: ChangeEvent<HTMLInputElement>, setter: (files: File[]) => void) => setter(Array.from(event.target.files ?? []));

  return (
    <main className="love-book">
      <nav className="chapter-nav" aria-label="Capítulos de nuestra historia">
        <button className="brand-mark" onClick={() => goTo(0)} aria-label="Volver al inicio">B<span>♡</span>V</button>
        <div className="chapter-dots">{chapters.map((chapter, index) => <button key={chapter} className={`chapter-dot ${activeChapter === index ? "is-active" : ""}`} onClick={() => goTo(index)}><span>{String(index + 1).padStart(2, "0")}</span><small>{chapter}</small></button>)}</div>
        <span className="nav-count">{String(activeChapter + 1).padStart(2, "0")} / 05</span>
      </nav>

      <section className="chapter chapter-welcome" id="chapter-1"><div className="welcome-orbit orbit-one" /><div className="welcome-orbit orbit-two" /><p className="eyebrow">BELVAN · 2026</p><h1>Hola,<br /><em>cst.</em></h1><p className="intro-copy">Para Vanessa,<br />en esta y en todas.</p><button className="round-arrow" onClick={() => goTo(1)} aria-label="Abrir nuestra historia">↓</button><p className="scroll-hint">Desliza para abrir</p></section>

      <section className="chapter moments-chapter" id="chapter-2"><div className="section-heading"><p className="eyebrow">Capítulo 02</p><h2>Momentos que<br /><em>no quiero olvidar</em></h2></div><div className="moments-gallery"><img src={momentPhotoPaths[momentSlide]} alt={momentCaptions[momentSlide]} /><div className="moments-caption"><span>{String(momentSlide + 1).padStart(2, "0")} / {String(momentPhotoPaths.length).padStart(2, "0")}</span><p>{momentCaptions[momentSlide]}</p></div><button className="moments-arrow moments-prev" onClick={() => setMomentSlide((current) => (current - 1 + momentPhotoPaths.length) % momentPhotoPaths.length)} aria-label="Momento anterior">←</button><button className="moments-arrow moments-next" onClick={() => setMomentSlide((current) => (current + 1) % momentPhotoPaths.length)} aria-label="Momento siguiente">→</button></div><ChapterFooter current={2} onNext={() => goTo(2)} total={5} /></section>

      <section className="chapter slot-chapter" id="chapter-3"><div className="section-heading"><p className="eyebrow">Capítulo 03</p><h2>La ruleta de<br /><em>la suerte</em></h2></div><div className="slot-machine"><div className="slot-topline"><span>♥ BELVAN JACKPOT ♥</span><strong>777</strong></div><div className="slot-reels">{reels.map((symbol, index) => <div className={`slot-reel ${isSpinning ? "is-spinning" : ""}`} key={index}><span>{symbol}</span></div>)}</div><div className="slot-lights"><i /><i /><i /><i /><i /></div><button className="spin-button" onClick={spin} disabled={isSpinning || gameState.attempts <= 0 || gameState.prizes.length === prizeOptions.length}>{gameState.prizes.length === prizeOptions.length ? "Premios completos" : isSpinning ? "Girando..." : "Jugar"}</button></div><div className="game-status"><strong>{gameState.attempts}</strong><span>intentos restantes hoy</span></div><div className="prize-board"><span className="prize-label">Premios desbloqueados</span>{prizeOptions.map((prize) => <span className={`prize-chip ${gameState.prizes.includes(prize) ? "is-won" : ""}`} key={prize}>{gameState.prizes.includes(prize) ? "✓ " : "○ "}{prize}</span>)}</div>{wonPrize ? <div className="win-modal" role="dialog" aria-modal="true"><div className="celebration-fireworks" aria-hidden="true">{Array.from({ length: 13 }, (_, index) => <i className="firework" key={index} />)}</div><div className="win-modal-card"><button className="modal-close" onClick={() => { if (celebrationTimerRef.current !== null) window.clearInterval(celebrationTimerRef.current); setWonPrize(null); }} aria-label="Cerrar felicitación">×</button><span className="win-spark">✦</span><p className="eyebrow">Premio desbloqueado</p><h3>¡Felicidades!</h3><p>Los tres símbolos coincidieron.</p><strong>Ganaste: {wonPrize}</strong><button className="modal-action" onClick={() => { if (celebrationTimerRef.current !== null) window.clearInterval(celebrationTimerRef.current); setWonPrize(null); }}>Guardar mi premio</button></div></div> : attemptsExhausted ? <div className="win-modal" role="dialog" aria-modal="true"><div className="win-modal-card"><button className="modal-close" onClick={() => setAttemptsExhausted(false)} aria-label="Cerrar mensaje">×</button><span className="win-spark">♡</span><p className="eyebrow">Fin de la jugada</p><h3>Gracias por intentarlo</h3><p>Vuelve mañana para aumentar tus posibilidades de ganar.</p><button className="modal-action" onClick={() => setAttemptsExhausted(false)}>Cerrar</button></div></div> : null}<ChapterFooter current={3} onNext={() => goTo(3)} /></section>

      <section className="chapter universe-chapter" id="chapter-5"><div className="section-heading"><p className="eyebrow">Capítulo 05</p><h2>En otros universos<br /><em>también te elegiría</em></h2></div><div className="future-upload"><PhotoUpload multiple label="Agregar más recuerdos" detail="Puedes elegir varias fotos" onChange={(event) => { handleFiles(event, setUniversePhotos); setUniverseSlide(universePhotoPaths.length); }} /></div><div className="universe-carousel" onTouchStart={(event) => { event.currentTarget.dataset.startX = String(event.touches[0].clientX); }} onTouchEnd={(event) => { const startX = Number(event.currentTarget.dataset.startX); const distance = event.changedTouches[0].clientX - startX; if (Math.abs(distance) > 45) setUniverseSlide((current) => Math.min(Math.max(current + (distance < 0 ? 1 : -1), 0), universeGallery.length - 1)); }}><button className="carousel-arrow carousel-prev" onClick={() => setUniverseSlide((current) => (current - 1 + universeGallery.length) % universeGallery.length)} aria-label="Foto anterior">←</button><img src={universeGallery[universeSlide]} alt={universeCaptions[universeSlide] ?? `Recuerdo ${universeSlide + 1} de nuestra historia`} /><button className="carousel-arrow carousel-next" onClick={() => setUniverseSlide((current) => (current + 1) % universeGallery.length)} aria-label="Foto siguiente">→</button><div className="carousel-caption"><span>{String(universeSlide + 1).padStart(2, "0")} / {String(universeGallery.length).padStart(2, "0")}</span><p>{universeCaptions[universeSlide] ?? "Un recuerdo más de nosotros"}</p></div></div><div className="carousel-dots" aria-label="Seleccionar foto">{universeGallery.map((url, index) => <button key={url} className={index === universeSlide ? "is-active" : ""} onClick={() => setUniverseSlide(index)} aria-label={`Ver foto ${index + 1}`} />)}</div><ChapterFooter current={5} onNext={() => goTo(5)} total={6} /></section>

      <section className="chapter song-chapter" id="chapter-6"><div className="section-heading"><p className="eyebrow">Capítulo 06</p><h2>La canción que<br /><em>suena a nosotras</em></h2></div><div className="record"><div className="record-label">B<br /><span>♡</span><br />V</div></div><div className="song-card"><span className="song-kicker">Nuestra canción</span><h3>Te volvería<br /><em>a elegir</em></h3><p>Una canción para todas las versiones de nuestra historia.</p><a className="song-link" href={songLink} target="_blank" rel="noreferrer">Escuchar en Mureka <span>↗</span></a><small>Se abrirá en una nueva pestaña</small></div><ChapterFooter current={6} onNext={() => goTo(0)} total={6} /></section>
    </main>
  );
}

function PhotoUpload({ multiple, accept = "image/*", label, detail, onChange }: { multiple?: boolean; accept?: string; label: string; detail: string; onChange: (event: ChangeEvent<HTMLInputElement>) => void }) { return <label className="upload-control photo-upload"><span className="upload-icon">↗</span><span><strong>{label}</strong><small>{detail}</small></span><input type="file" accept={accept} multiple={multiple} onChange={onChange} /></label>; }
function ChapterFooter({ current, onNext, total = 6 }: { current: number; onNext: () => void; total?: number }) { return <div className="chapter-footer"><span>{String(current).padStart(2, "0")} — {String(total).padStart(2, "0")}</span><button onClick={onNext} aria-label="Siguiente capítulo">↓</button></div>; }
