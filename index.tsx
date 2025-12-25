import './global.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { 
  Copy, 
  Check, 
  ExternalLink, 
  ChevronRight, 
  ChevronLeft, 
  Sparkles,
  Settings,
  Volume2,
  VolumeX,
  Mail,
  Heart,
  MousePointer2,
  X,
  Minus
} from 'lucide-react';

// Import assets
import DominikNeutral from './Characters/Dominik_Neutral.png';
import DominikHappy from './Characters/Dominik_Happy.png';
import DominikHappier from './Characters/Dominik_Happier.png';
import DominikSuperHappy from './Characters/Dominik_SuperHappy.png';
import StarNeutral from './Characters/Star_Neutral.png';
import StarHappy from './Characters/Star_Happy.png';
import StarHappier from './Characters/Star_Happier.png';
import StarSuperHappy from './Characters/Star_SuperHappy.png';
import DominikStarTogether from './Characters/DominikStarTogether.png';
import ChristmasAudio from './Audio/Snow Days - Christmas Lofi & Jazzhop.mp3';
import ClickSfx from './Audio/click.mp3';
import ExtraGiftImg from './Images/ExtraGift.png';
import CatGif from './Images/cat.gif';
import GCBackground from './Images/GCBackground.png';

const ASSETS = {
  ME: [
    DominikNeutral,
    DominikHappy,
    DominikHappier,
    DominikSuperHappy,
  ],
  HER: [
    StarNeutral,
    StarHappy,
    StarHappier,
    StarSuperHappy,
  ],
  TOGETHER: DominikStarTogether,
  AUDIO: ChristmasAudio,
};

const GIFT_CODE = "AMZN-XM25-REVEAL-500";

const SLIDES = [
  { text: "Little something for **my favorite Star** ✨", mood: "heart" },
  { text: "Of course, I couldn't let Christmas go by **without doing something for you.**", mood: "cool" },
  { text: "I know it'll never be as special as **being there in person, handing you a present myself…**", mood: "cool" },
  { text: "There were many moments this year when I wished I could be by your side, and Christmas is one of them.", mood: "cool" },
  { text: "Imagine how fun would it be, us walking in the snow, laughing, talking, just enjoying the holidays together…", mood: "warm" },
  { text: "And hmm… if you let me, **maybe I could steal a few kisses from those beautiful lips.** 👀👀", mood: "warm" },
  { text: "**Happiest Christmas fr.** 🙏", mood: "warm" },
  { text: "Unfortunately, this year it just wasn't possible, but **we're gonna make it happen someday.** 🤞", mood: "cool" },
  { text: "Well, knowing you...", mood: "heart" },
  { text: "I bet you're gonna say: \"Oh, you didn't have to do this for me... and this and that...\"", mood: "warm" },
  { text: "But hey, **you deserve it, and so much more.** You're **someone really special to me.**", mood: "heart" },
  { text: "This comes **straight from my heart** to the girl **I've been loving getting to know more** with each passing day. ❤️", mood: "heart" },
  { text: "I know we have this distance, and all these busy days that sometimes feel endless...", mood: "heart" },
  { text: "And also everything else you're going through right now... I know...", mood: "heart" },
  { text: "**But always remember that I'm here for you, and I'm not going anywhere.**" },
  { text: "And **I'll always do my best to make you feel appreciated,** just like you deserve. 🤞", mood: "heart" },
  { text: "And this… well, it might be something simple, but it's just another way I'm trying to show you how special you are.**", mood: "heart" },
  { text: "And to remind you that **you've found someone who truly cares about you.**", mood: "heart" },
  { text: "I hope I'm doing things right between us, and that even if we're still physically apart...", mood: "heart" },
  { text: "I can still **give you good moments** when we're together and **make you feel cared for and valued.**", mood: "heart" },
  { text: "About your present, this time I wanted to do **something a little bit different.** 🎁", mood: "silver" },
  { text: "I hope you enjoy it.", mood: "silver" },
  { text: "Well, with that, you can even get Guaraná, or maybe some of those Brazilian Skala hair products... Just kidding. 🤣", mood: "silver" },
  { text: "**Use it however you want,** get yourself something you like, oke? 😉", mood: "silver" },
  { text: "**MERRY CHRISTMAS, my Spooky Love!**", mood: "final" }
];

function RedParticles({ centerX, centerY }: { centerX?: number; centerY?: number }) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  
  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;
    
    const updateCanvas = () => {
      const canvasWidth = Math.min(window.innerWidth, 800);
      const canvasHeight = Math.min(window.innerHeight, 800);
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
    };
    
    updateCanvas();
    window.addEventListener('resize', updateCanvas);
    
    const count = 220;
    const particleCenterX = centerX !== undefined ? centerX : canvas.width / 2;
    const particleCenterY = centerY !== undefined ? centerY : canvas.height / 2;
    
    const particles = Array.from({ length: count }, () => {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 0.8 + 0.4;
      return {
        x: particleCenterX + (Math.random() - 0.5) * 20,
        y: particleCenterY + (Math.random() - 0.5) * 20,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        radius: Math.random() * 3 + 1.5,
        opacity: Math.random() * 0.7 + 0.3,
        life: 1,
        decay: Math.random() * 0.002 + 0.001
      };
    });

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;
        
        if (p.life <= 0) {
          p.x = particleCenterX + (Math.random() - 0.5) * 20;
          p.y = particleCenterY + (Math.random() - 0.5) * 20;
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 0.8 + 0.4;
          p.vx = Math.cos(angle) * speed;
          p.vy = Math.sin(angle) * speed;
          p.life = 1;
        }
        
        const red = 255;
        const green = Math.floor(30 + p.life * 30);
        const blue = Math.floor(30 + p.life * 30);
        ctx.fillStyle = `rgba(${red}, ${green}, ${blue}, ${p.opacity * p.life * 0.8})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * p.life, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = `rgba(${red}, ${green}, ${blue}, ${p.opacity * p.life * 0.3})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * p.life * 2, 0, Math.PI * 2);
        ctx.fill();
      });
      requestAnimationFrame(loop);
    };
    
    loop();
    loop();
    
    return () => {
      window.removeEventListener('resize', updateCanvas);
    };
  }, [centerX, centerY]);
  
  return (
    <canvas 
      ref={canvasRef}
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        pointerEvents: 'none'
      }}
    />
  );
}

function SnowOverlay() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  
  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;
    
    const count = 60;
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vy: Math.random() * 0.4 + 0.15,
      vx: (Math.random() - 0.5) * 0.08,
      radius: Math.random() * 2 + 0.8,
      opacity: Math.random() * 0.3 + 0.15
    }));

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        p.y += p.vy;
        p.x += p.vx;
        
        if (p.y > window.innerHeight) {
          p.y = -10;
          p.x = Math.random() * window.innerWidth;
        }
        if (p.x < 0) p.x = window.innerWidth;
        if (p.x > window.innerWidth) p.x = 0;
        
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      requestAnimationFrame(loop);
    };

    const resize = () => { 
      canvas.width = window.innerWidth; 
      canvas.height = window.innerHeight; 
    };
    
    window.addEventListener('resize', resize);
    resize(); 
    loop();
    return () => window.removeEventListener('resize', resize);
  }, []);
  
  return (
    <canvas 
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 45
      }}
    />
  );
}

function Snowfall() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  
  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;
    
    const count = 200;
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vy: Math.random() * 0.6 + 0.2,
      vx: (Math.random() - 0.5) * 0.1,
      radius: Math.random() * 2.5 + 0.5,
      opacity: Math.random() * 0.4 + 0.1
    }));

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        p.y += p.vy;
        p.x += p.vx;
        
        if (p.y > window.innerHeight) {
          p.y = -10;
          p.x = Math.random() * window.innerWidth;
        }
        if (p.x < 0) p.x = window.innerWidth;
        if (p.x > window.innerWidth) p.x = 0;
        
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      requestAnimationFrame(loop);
    };

    const resize = () => { 
      canvas.width = window.innerWidth; 
      canvas.height = window.innerHeight; 
    };
    
    window.addEventListener('resize', resize);
    resize(); 
    loop();
    return () => window.removeEventListener('resize', resize);
  }, []);
  
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      pointerEvents: 'none',
      zIndex: 5
    }}>
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%', opacity: 0.5 }} />
    </div>
  );
}

function Typewriter({ text, onComplete, shouldBlink = false }: { text: string; onComplete?: () => void; shouldBlink?: boolean }) {
  const [displayedText, setDisplayedText] = React.useState("");
  const [isComplete, setIsComplete] = React.useState(false);
  const [showCaret, setShowCaret] = React.useState(false);
  const [caretBlinks, setCaretBlinks] = React.useState(0);
  const timeoutRef = React.useRef<any>(null);
  const isTypingRef = React.useRef(false);
  const completedRef = React.useRef(false);
  
  const cleanText = React.useMemo(() => {
    return text.replace(/\*\*|_/g, '');
  }, [text]);
  
  React.useEffect(() => {
    setDisplayedText("");
    setIsComplete(false);
    setShowCaret(false);
    setCaretBlinks(0);
    completedRef.current = false;
    isTypingRef.current = true;
    
    if (shouldBlink) {
      setTimeout(() => {
        setShowCaret(true);
        setTimeout(() => {
          setCaretBlinks(1);
          setTimeout(() => {
            setCaretBlinks(2);
            let i = 0;
            const typeNext = () => {
              if (!isTypingRef.current) return;
              
              if (i < cleanText.length) {
                const currentChar = cleanText[i];
                const codePoint = currentChar.charCodeAt(0);
                
                if (codePoint >= 0xD800 && codePoint <= 0xDBFF) {
                  i += 2; // Skip surrogate pair
                } else if (codePoint > 0x2000) {
                  i++;
                  while (i < cleanText.length) {
                    const nextCode = cleanText.charCodeAt(i);
                    if (nextCode === 0x200D || (nextCode >= 0xFE00 && nextCode <= 0xFE0F)) {
                      i++;
                      if (i < cleanText.length) i++; // Skip the next char after joiner
                    } else {
                      break;
                    }
                  }
                } else {
                  i++;
                }
                
                setDisplayedText(cleanText.substring(0, i));
                const delay = /[.,;:!?…]/.test(cleanText[i - 1]) ? 180 : cleanText[i - 1] === ' ' ? 90 : 70;
                timeoutRef.current = setTimeout(typeNext, delay);
              } else {
                setIsComplete(true);
                if (!completedRef.current) {
                  completedRef.current = true;
                  setTimeout(() => onComplete?.(), 100);
                }
              }
            };
            
            timeoutRef.current = setTimeout(typeNext, 200);
          }, 1000); // Wait 1s after 2nd blink
        }, 1000); // Wait 1s after 1st blink
      }, 300); // Initial delay for fade in
    } else {
      setShowCaret(true);
      setCaretBlinks(2); // Skip to typing state
      let i = 0;
      const typeNext = () => {
        if (!isTypingRef.current) return;
        
        if (i < cleanText.length) {
          const currentChar = cleanText[i];
          const codePoint = currentChar.charCodeAt(0);
          
          if (codePoint >= 0xD800 && codePoint <= 0xDBFF) {
            i += 2; // Skip surrogate pair
          } else if (codePoint > 0x2000) {
            i++;
            while (i < cleanText.length) {
              const nextCode = cleanText.charCodeAt(i);
              if (nextCode === 0x200D || (nextCode >= 0xFE00 && nextCode <= 0xFE0F)) {
                i++;
                if (i < cleanText.length) i++; // Skip the next char after joiner
              } else {
                break;
              }
            }
          } else {
            i++;
          }
          
          setDisplayedText(cleanText.substring(0, i));
          const delay = /[.,;:!?…]/.test(cleanText[i - 1]) ? 180 : cleanText[i - 1] === ' ' ? 90 : 70;
          timeoutRef.current = setTimeout(typeNext, delay);
        } else {
          setIsComplete(true);
          if (!completedRef.current) {
            completedRef.current = true;
            setTimeout(() => onComplete?.(), 100);
          }
        }
      };
      
      timeoutRef.current = setTimeout(typeNext, 200);
    }
    
    return () => {
      isTypingRef.current = false;
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [cleanText, shouldBlink]);
  
  const handleSkip = () => {
    if (!isComplete) {
      isTypingRef.current = false;
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setDisplayedText(cleanText);
      setIsComplete(true);
      if (!completedRef.current) {
        completedRef.current = true;
        setTimeout(() => onComplete?.(), 100);
      }
    }
  };

  const renderStyledText = () => {
    const segments = text.split(/(\*\*.*?\*\*|_.*?_)/g).filter(Boolean);
    let charCount = 0;
    const result: React.ReactElement[] = [];
    
    for (let i = 0; i < segments.length; i++) {
      const segment = segments[i];
      let cleanSegment = segment;
      let style: React.CSSProperties = {};
      
      if (segment.startsWith('**') && segment.endsWith('**')) {
        cleanSegment = segment.slice(2, -2);
        style = { fontWeight: 600, opacity: 1 };
      } else if (segment.startsWith('_') && segment.endsWith('_')) {
        cleanSegment = segment.slice(1, -1);
        style = { opacity: 0.7, fontWeight: 400, fontSize: '0.95em' };
      }
      
      const segmentEnd = charCount + cleanSegment.length;
      const visiblePart = cleanSegment.substring(0, Math.max(0, displayedText.length - charCount));
      
      if (visiblePart.length > 0) {
        result.push(<span key={i} style={style}>{visiblePart}</span>);
      }
      
      charCount = segmentEnd;
      if (charCount >= displayedText.length) break;
    }
    
    return result;
  };

  return (
    <div 
      onClick={handleSkip}
      style={{
        textAlign: 'center',
        width: '100%',
        padding: 'clamp(0.25rem, 3vw, 2rem)',
        position: 'relative',
        maxWidth: '100%',
        margin: '0 auto',
        userSelect: 'none',
        cursor: isComplete ? 'default' : 'pointer',
        wordWrap: 'break-word',
        overflowWrap: 'break-word',
        boxSizing: 'border-box'
      }}
    >
      <span style={{
        position: 'relative',
        display: 'inline',
        fontSize: 'clamp(1.4rem, 5.5vw, 2.8rem)',
        lineHeight: 'clamp(1.4, 1.7, 1.7)',
        letterSpacing: '-0.025em',
        color: 'rgba(255, 255, 255, 0.95)',
        textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
        fontFamily: 'Geist, sans-serif',
        wordBreak: 'break-word'
      }}>
        {renderStyledText()}
        {!isComplete && showCaret && (
          <span style={{
            display: 'inline-block',
            width: '2px',
            height: '0.9em',
            backgroundColor: '#ef4444',
            marginLeft: '0.375rem',
            verticalAlign: 'middle',
            animation: caretBlinks < 2 ? 'caretBlink 0.5s steps(1, end) infinite' : 'blink 1s infinite',
            opacity: showCaret ? 1 : 0,
            transform: showCaret ? 'translateY(0)' : 'translateY(-10px)',
            transition: 'opacity 0.3s ease-out, transform 0.3s ease-out'
          }} />
        )}
      </span>
    </div>
  );
}

function AvatarJourney({ currentSlide, avatarsFadingOut }: { currentSlide: number; avatarsFadingOut?: boolean }) {
  const total = SLIDES.length;
  const isFinal = currentSlide === total - 1;

  const sceneScale = React.useMemo(() => {
    if (typeof window === 'undefined') return 1;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const baseW = 440;
    const baseH = 720;
    const scaleW = vw / baseW;
    const scaleH = vh / baseH;
    return Math.min(1, Math.min(scaleW, scaleH));
  }, []);

  const [viewportWidth, setViewportWidth] = React.useState<number>(() => typeof window !== 'undefined' ? window.innerWidth : 1024);
  const resizeTimeout = React.useRef<number | null>(null);
  React.useEffect(() => {
    const handler = () => {
      if (resizeTimeout.current) window.clearTimeout(resizeTimeout.current!);
      resizeTimeout.current = window.setTimeout(() => setViewportWidth(window.innerWidth), 100) as unknown as number;
    };
    window.addEventListener('resize', handler);
    return () => {
      window.removeEventListener('resize', handler);
      if (resizeTimeout.current) window.clearTimeout(resizeTimeout.current!);
    };
  }, []);

  const isMobile = viewportWidth < 768;
  const initialDist = isMobile ? 300 : 280;

  const totalSlides = total;
  
  // Cálculo específico para desktop: começa no slide 0 e vai até o penúltimo
  // Desktop usa progressão mais agressiva para garantir aproximação visível
  const desktopDenom = Math.max(1, totalSlides - 2);
  const desktopProgress = Math.min(currentSlide / desktopDenom, 1);
  
  // Mobile usa mesma lógica
  const mobileDenom = Math.max(1, totalSlides - 2);
  const mobileProgress = Math.min(currentSlide / mobileDenom, 1);
  
  const approachProgress = isMobile ? mobileProgress : desktopProgress;
  const approachProgressMobile = mobileProgress;

  // Avatar sizing and gaps
  const avatarRenderedWidth = Math.min(Math.max(140, viewportWidth * (isMobile ? 0.36 : 0.4)), 230);
  const sidePadding = Math.max(12, viewportWidth * 0.04);
  const centerX = viewportWidth / 2;
  const maxAllowedGap = Math.max(0, 2 * (centerX - (sidePadding + avatarRenderedWidth / 2)));

  // Safe minimum distance - desktop usa valor mais baixo para permitir maior aproximação
  const safeMinDistance = isMobile 
    ? Math.max(120, Math.floor(viewportWidth * 0.22)) 
    : Math.max(160, Math.floor(viewportWidth * 0.18)); // Desktop: mais próximo
    
  const minCenterGap = safeMinDistance;
  
  // Desktop começa mais afastado para ter range maior de aproximação
  const initialCenterGap = isMobile ? initialDist * 1.6 : initialDist * 2.2;
  
  const effectiveInitialGap = Math.min(initialCenterGap, maxAllowedGap || initialCenterGap);
  const progressForGap = isMobile ? approachProgressMobile : approachProgress;
  const currentGap = isFinal ? 0 : Math.round(Math.max(minCenterGap, effectiveInitialGap - (effectiveInitialGap - minCenterGap) * progressForGap));

  // Debug output in dev
  if (typeof window !== 'undefined' && (window as any).console && process.env.NODE_ENV !== 'production') {
    console.debug('[AvatarJourney]', { currentSlide, total, isMobile, viewportWidth, approachProgress, approachProgressMobile, currentGap, maxAllowedGap, avatarRenderedWidth });
  }

  const expIndex = approachProgress > 0.85 ? 3 : approachProgress > 0.55 ? 2 : approachProgress > 0.25 ? 1 : 0;
  const saturation = 0.25 + 0.75 * approachProgress;
  const glowBase = isMobile ? 8 : 16;
  const glowScale = isMobile ? 10 : 24;
  const glow2Scale = isMobile ? 28 : 60;
  const glowOpacity1 = 0.28 + approachProgress * 0.32;
  const glowOpacity2 = approachProgress * (isMobile ? 0.26 : 0.4);

  if (isFinal) {
    return (
      <div style={{ position: 'relative', width: '100%', maxWidth: '100%', height: isMobile ? 'clamp(260px, 38vh, 380px)' : 'clamp(520px, 70vh, 720px)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0', marginTop: isMobile ? 'clamp(0.25rem, 1.5vh, 1rem)' : 'clamp(2rem, 6vh, 4rem)', padding: '0', overflow: 'visible' }}>
        <div className="parallax-slow" style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'visible' }}>
          <div style={{ position: 'relative', width: isMobile ? 'clamp(260px, 70vw, 350px)' : 'clamp(420px, 80vw, 620px)', height: isMobile ? 'clamp(260px, 70vw, 350px)' : 'clamp(420px, 80vw, 620px)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'visible' }}>
            {/* On mobile render the together image fixed so its glow isn't clipped */}
            {isMobile ? (
              <div style={{ position: 'fixed', left: '50%', top: 'clamp(8%, 10%, 12%)', transform: 'translate(-50%, 0)', width: 'clamp(260px, 70vw, 350px)', height: 'clamp(260px, 70vw, 350px)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'visible', zIndex: 220, pointerEvents: 'none' }}>
                <div style={{ position: 'absolute', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 219 }}>
                  <RedParticles />
                </div>
                <img src={ASSETS.TOGETHER} alt="Together" className="animate-comfy-float animate-fade-in-final" draggable={false} style={{ width: '100%', height: '100%', objectFit: 'contain', WebkitUserDrag: 'none', position: 'relative', zIndex: 221 }} />
              </div>
            ) : (
              <>
                <div style={{ position: 'absolute', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 0 }}>
                  <RedParticles />
                </div>
                <img src={ASSETS.TOGETHER} alt="Together" className="animate-comfy-float animate-fade-in-final" draggable={false} style={{ width: '100%', height: '100%', objectFit: 'contain', WebkitUserDrag: 'none', position: 'relative', zIndex: 1 }} />
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ position: 'relative', width: '100%', height: isMobile ? 'clamp(240px, 35vh, 320px)' : '288px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem', opacity: avatarsFadingOut ? 0 : 1, transition: 'opacity 0.8s ease-out' }}>
      <div style={{ position: 'relative', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <div style={{ position: 'absolute', height: '1px', background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.2), transparent)', opacity: 0.2, width: `${initialDist * 2.4}px` }} />

        <div className="parallax-char-left" style={{ position: 'absolute', left: '50%', zIndex: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', transform: isMobile ? `translate3d(calc(-50% - ${currentGap / 2}px), 0, 0) scale(${1 + approachProgressMobile * 0.12})` : `translate3d(calc(-50% - ${currentGap / 2}px), 0, 0) scale(${1 + approachProgress * 0.12})`, transition: 'transform 600ms cubic-bezier(.22,.8,.2,1)', willChange: 'transform' }}>
           <img src={ASSETS.ME[expIndex]} alt="Me" draggable={false} style={{ width: isMobile ? 'clamp(120px, 32vw, 180px)' : 'clamp(150px, 36vw, 200px)', height: isMobile ? 'clamp(120px, 32vw, 180px)' : 'clamp(150px, 36vw, 200px)', objectFit: 'contain', filter: `saturate(${saturation}) drop-shadow(0 0 ${glowBase + approachProgress * glowScale}px rgba(255,0,0,${glowOpacity1})) drop-shadow(0 0 ${approachProgress * glow2Scale}px rgba(255,0,0,${glowOpacity2}))`, transition: 'filter 0.6s ease', WebkitUserDrag: 'none' }} />
          <span style={{ marginTop: 0, fontSize: '8px', fontWeight: 'bold', letterSpacing: '0.4em', color: 'rgba(255,255,255,0.1)', textTransform: 'uppercase', marginLeft: '2.5rem' }}>ME</span>
        </div>

        <div className="parallax-char-right" style={{ position: 'absolute', left: '50%', zIndex: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', transform: isMobile ? `translate3d(calc(-50% + ${currentGap / 2}px), 0, 0) scale(${1 + approachProgressMobile * 0.12})` : `translate3d(calc(-50% + ${currentGap / 2}px), 0, 0) scale(${1 + approachProgress * 0.12})`, transition: 'transform 600ms cubic-bezier(.22,.8,.2,1)', willChange: 'transform' }}>
           <img src={ASSETS.HER[expIndex]} alt="You" draggable={false} style={{ width: isMobile ? 'clamp(120px, 32vw, 180px)' : 'clamp(150px, 36vw, 200px)', height: isMobile ? 'clamp(120px, 32vw, 180px)' : 'clamp(150px, 36vw, 200px)', objectFit: 'contain', filter: `saturate(${saturation}) drop-shadow(0 0 ${glowBase + approachProgress * glowScale}px rgba(255,0,0,${glowOpacity1})) drop-shadow(0 0 ${approachProgress * glow2Scale}px rgba(255,0,0,${glowOpacity2}))`, transition: 'filter 0.6s ease', WebkitUserDrag: 'none' }} />
          <span style={{ marginTop: 0, fontSize: '8px', fontWeight: 'bold', letterSpacing: '0.4em', color: 'rgba(255,255,255,0.1)', textTransform: 'uppercase', marginRight: '1rem' }}>YOU</span>
        </div>
      </div>
    </div>
  );
}

function GiftCard({ code, onCopy }: { code: string; onCopy: () => void }) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    onCopy();
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: 'min(90vw, 900px)',
        minWidth: '220px',
        margin: '0 auto',
        aspectRatio: '1.7/1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        overflow: 'hidden',
        borderRadius: '2.2rem',
        padding: 0,
        backgroundImage: `url(${GCBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        boxSizing: 'border-box'
      }}
    >
    </div>
  );
}

function FloatingBalloon({ onClick, show }: { onClick: () => void; show: boolean }) {
  const [localMousePos, setLocalMousePos] = React.useState({ x: 0, y: 0 });
  const [isMobileView, setIsMobileView] = React.useState(() => typeof window !== 'undefined' && window.innerWidth < 768);

  React.useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setLocalMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

    return (
    <div 
      onClick={onClick}
      className="animate-gentle-float"
      style={{
        position: isMobileView ? 'fixed' : 'absolute',
        // Keep balloon visible above envelope, relative to parent container
        right: isMobileView ? 'clamp(8%, 12vw, 18%)' : 'clamp(8%, 10vw, 14%)',
        top: isMobileView ? 'clamp(35vh, 40vh, 45vh)' : 'clamp(-80px, -10vh, -60px)',
        cursor: 'pointer',
        zIndex: 270,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.75rem',
        animation: 'gentle-float 3.5s ease-in-out infinite, breathing 4.5s ease-in-out infinite',
        opacity: show ? 1 : 0,
        transform: show ? `translate(${localMousePos.x * 15}px, ${localMousePos.y * 12}px) translateY(0)` : 'translate(0, -40px)',
        transition: 'opacity 1s ease 0.3s, transform 1s ease 0.3s',
        pointerEvents: show ? 'auto' : 'none'
      }}
    >
      <div style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <div 
          onMouseEnter={(e) => {
            e.currentTarget.style.filter = 'drop-shadow(0 0 8px #8528ee) drop-shadow(0 0 14px rgba(133, 40, 238, 0.25)) brightness(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.filter = 'drop-shadow(0 0 6px #8528ee) drop-shadow(0 0 12px rgba(133, 40, 238, 0.2))';
          }}
          style={{
            width: isMobileView ? 'min(180px, 45vw)' : 'clamp(140px, 30vw, 180px)',
            height: isMobileView ? 'min(180px, 45vw)' : 'clamp(140px, 30vw, 180px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            transition: 'all 0.3s ease',
            filter: 'drop-shadow(0 0 6px #8528ee) drop-shadow(0 0 12px rgba(133, 40, 238, 0.2))'
          }}>
          <img 
            src={ExtraGiftImg} 
            alt="Extra Gift"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain'
            }}
          />
        </div>
      </div>
    </div>
  );
}

function App() {
  const [unlocked, setUnlocked] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [typingComplete, setTypingComplete] = React.useState(false);
  const [showSlide0Elements, setShowSlide0Elements] = React.useState(false);
  const [isMuted, setIsMuted] = React.useState(false);
  const [volume, setVolume] = React.useState(0.08);
  const [unboxingStage, setUnboxingStage] = React.useState(0);
  const [isShaking, setIsShaking] = React.useState(false);
  const [showDevPanel, setShowDevPanel] = React.useState(false);
  const [showVolumeBar, setShowVolumeBar] = React.useState(false);
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  const [isFading, setIsFading] = React.useState(false);
  const [hasReachedEnd, setHasReachedEnd] = React.useState(false);
  const [avatarsFadingOut, setAvatarsFadingOut] = React.useState(false);
  const [showExtraModal, setShowExtraModal] = React.useState(false);
  const [extraModalStep, setExtraModalStep] = React.useState<'question' | 'story' | 'wrong'>('question');
  const [showJumpSavedToast, setShowJumpSavedToast] = React.useState(false);
  const [jumpSaved, setJumpSaved] = React.useState<boolean>(false);

  const audioRef = React.useRef<HTMLAudioElement>(null);
  const clickSfxRef = React.useRef<HTMLAudioElement>(null);
  const volumeBarTimeout = React.useRef<any>(null);
  const volumeMenuRef = React.useRef<HTMLDivElement>(null);
  const devPanelRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    console.log('App mounted. Unlocked:', unlocked);
  }, [unlocked]);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Enter') {
        if (typingComplete && currentSlide < SLIDES.length - 1) {
          handleNext();
        }
      } else if (e.key === 'ArrowLeft') {
        if (currentSlide > 0) {
          handlePrev();
        }
      } else if (e.key === ' ') {
        e.preventDefault();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        if (showVolumeBar) {
          setShowVolumeBar(false);
        }
        if (showDevPanel) {
          setShowDevPanel(false);
        }
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, typingComplete, showVolumeBar, showDevPanel, showExtraModal]);

  React.useEffect(() => {
    const handleEscClose = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showExtraModal) {
        setShowExtraModal(false);
        setExtraModalStep('question');
      }
    };
    
    window.addEventListener('keydown', handleEscClose);
    return () => window.removeEventListener('keydown', handleEscClose);
  }, [showExtraModal]);

  // Preload all important images
  React.useEffect(() => {
    const imagesToPreload = [
      ...ASSETS.ME,
      ...ASSETS.HER,
      ASSETS.TOGETHER,
      ExtraGiftImg,
      CatGif,
      GCBackground
    ];

    imagesToPreload.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (volumeMenuRef.current && !volumeMenuRef.current.contains(e.target as Node)) {
        const volumeButton = document.querySelector('[title="Volume control"]');
        if (volumeButton && !volumeButton.contains(e.target as Node)) {
          setShowVolumeBar(false);
        }
      }
      if (devPanelRef.current && !devPanelRef.current.contains(e.target as Node)) {
        const devButton = document.querySelector('[title="Dev panel - Jump to any slide"]');
        if (devButton && !devButton.contains(e.target as Node)) {
          setShowDevPanel(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  React.useEffect(() => {
    if (currentSlide === SLIDES.length - 1) {
      setHasReachedEnd(true);
      try {
        localStorage.setItem('jumpToSlideSaved', 'true');
        setJumpSaved(true);
      } catch (e) {}
      setShowJumpSavedToast(true);
      setTimeout(() => setShowJumpSavedToast(false), 3500);
    }
  }, [currentSlide]);

  React.useEffect(() => {
    try {
      const v = localStorage.getItem('jumpToSlideSaved');
      if (v === 'true') {
        setJumpSaved(true);
        setHasReachedEnd(true);
      }
    } catch (e) {}
  }, []);

  React.useEffect(() => {
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;
    let isMouseInside = true;
    
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };
    
    const animate = () => {
      if (isMouseInside) {
        currentX = lerp(currentX, targetX, 0.05);
        currentY = lerp(currentY, targetY, 0.05);
      }
      document.documentElement.style.setProperty('--mx', currentX.toString());
      document.documentElement.style.setProperty('--my', currentY.toString());
      requestAnimationFrame(animate);
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      targetX = (e.clientX / window.innerWidth) * 2 - 1;
      targetY = (e.clientY / window.innerHeight) * 2 - 1;
    };
    
    const handleMouseEnter = () => {
      isMouseInside = true;
    };
    
    const handleMouseLeave = () => {
      isMouseInside = false;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);
    
    const animationFrame = requestAnimationFrame(animate);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  React.useEffect(() => {
    if (audioRef.current && unlocked) {
      audioRef.current.volume = 0;
      audioRef.current.play().then(() => {
        let start = 0;
        const fadeIn = (timestamp: number) => {
          if (!start) start = timestamp;
          const progress = Math.min((timestamp - start) / 2000, 1);
          if (audioRef.current) audioRef.current.volume = progress * volume;
          if (progress < 1) requestAnimationFrame(fadeIn);
        };
        requestAnimationFrame(fadeIn);
      }).catch(() => {});
    }
  }, [unlocked]);

  const playClick = () => {
    if (clickSfxRef.current) {
      clickSfxRef.current.volume = 0;
      clickSfxRef.current.currentTime = 0;
      clickSfxRef.current.play().catch(() => {});
    }
  };

  const handleNext = () => {
    playClick();
    if (currentSlide < SLIDES.length - 1 && !isFading) {
      if (currentSlide === 24) {
        setAvatarsFadingOut(true);
      }
      setIsFading(true);
      setTimeout(() => {
        setCurrentSlide(prev => prev + 1);
        setTypingComplete(false);
        setIsFading(false);
      }, 400);
    }
  };

  const handlePrev = () => {
    playClick();
    if (currentSlide > 0 && !isFading) {
      setIsFading(true);
      setTimeout(() => {
        setCurrentSlide(prev => prev - 1);
        setTypingComplete(false);
        setIsFading(false);
      }, 400);
    }
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isMuted) {
      audioRef.current.volume = volume;
      audioRef.current.play().catch(() => {});
      setIsMuted(false);
    } else {
      audioRef.current.pause();
      setIsMuted(true);
    }
  };

  const handleVolumeButtonClick = () => {
    setShowVolumeBar(!showVolumeBar);
    if (!showVolumeBar) {
      if (volumeBarTimeout.current) clearTimeout(volumeBarTimeout.current);
      volumeBarTimeout.current = setTimeout(() => setShowVolumeBar(false), 3000);
    }
  };

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
    if (newVolume === 0) {
      setIsMuted(true);
      if (audioRef.current) audioRef.current.pause();
    } else {
      setIsMuted(false);
      if (audioRef.current && audioRef.current.paused) audioRef.current.play().catch(() => {});
    }
  };

  const handleSealClick = () => {
    playClick();
    if (unboxingStage >= 3) return;
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 300);
    if (unboxingStage < 2) {
      setUnboxingStage(prev => prev + 1);
    } else {
      setUnboxingStage(3);
      setTimeout(() => setUnboxingStage(4), 1200);
    }
  };

  const isFinal = currentSlide === SLIDES.length - 1;
  const progressGlow = Math.min(currentSlide / (SLIDES.length - 1), 1);
  const isMobileView = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <div style={{
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      fontFamily: 'Geist, sans-serif',
      backgroundColor: '#060606',
      minHeight: '100vh',
      width: '100%',
      maxWidth: '100vw',
      overflowX: 'hidden',
      overflowY: 'auto',
      paddingTop: '40px',
      paddingBottom: isMobileView ? '2rem' : '0',
      background: `#060606 radial-gradient(ellipse at center, rgba(220, 38, 38, ${0.08 + progressGlow * 0.22}) 0%, rgba(6, 6, 6, 1) 70%)`,
      border: '1px solid rgba(10, 10, 10, 0.95)',
      boxSizing: 'border-box',
      userSelect: 'none',
      WebkitUserSelect: 'none'
    }}>
      {/* Preload all font weights to prevent FOUT */}
      <div style={{ position: 'absolute', opacity: 0, pointerEvents: 'none', fontFamily: 'Geist, sans-serif' }}>
        <span style={{ fontWeight: 300 }}>.</span>
        <span style={{ fontWeight: 400 }}>.</span>
        <span style={{ fontWeight: 600 }}>.</span>
        <span style={{ fontWeight: 700 }}>.</span>
        <span style={{ fontWeight: 800 }}>.</span>
      </div>
      
      <audio ref={audioRef} src={ASSETS.AUDIO} loop />
      <audio ref={clickSfxRef} src={ClickSfx} preload="auto" />
      
      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.03,
        backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E')",
        animation: 'noise 1s steps(10) infinite'
      }} />

      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        backdropFilter: 'blur(0.5px)',
        WebkitBackdropFilter: 'blur(0.5px)'
      }} />

      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1,
        pointerEvents: 'none',
        background: 'radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(0, 0, 0, 0.4) 80%, rgba(0, 0, 0, 0.7) 100%)'
      }} />

      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2,
        pointerEvents: 'none',
        opacity: 0.2,
        backgroundImage: "url('https://www.transparenttextures.com/patterns/dark-matter.png')"
      }} />
      <Snowfall />
      <SnowOverlay />


      <div style={{
        position: 'fixed',
        top: '1rem',
        right: '1rem',
        zIndex: 50,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '0.5rem'
      }}>
        <button
          onClick={handleVolumeButtonClick}
          title="Volume control"
          style={{
            padding: '1rem',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '9999px',
            cursor: 'pointer',
            backdropFilter: 'blur(12px)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          {isMuted || volume === 0 ? <VolumeX style={{ width: '24px', height: '24px', color: '#9ca3af' }} /> : <Volume2 style={{ width: '24px', height: '24px', color: 'white' }} />}
        </button>
        
        {showVolumeBar && (
          <div ref={volumeMenuRef} style={{
            padding: '1rem',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '0.75rem',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem'
          }}
          onMouseEnter={() => {
            if (volumeBarTimeout.current) clearTimeout(volumeBarTimeout.current);
          }}
          onMouseLeave={() => {
            volumeBarTimeout.current = setTimeout(() => setShowVolumeBar(false), 2000);
          }}
          >
            <div style={{ position: 'relative', width: isMobileView ? '150px' : '200px', height: '24px', display: 'flex', alignItems: 'center' }}>
              <div style={{
                position: 'absolute',
                left: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                height: '8px',
                width: '100%',
                backgroundColor: '#6b7280',
                borderRadius: '4px'
              }} />
              <div style={{
                position: 'absolute',
                left: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                height: '8px',
                width: `${volume * 100}%`,
                backgroundColor: 'white',
                borderRadius: '4px',
                transition: 'width 0.1s'
              }} />
              <input
                type="range"
                min={0}
                max={100}
                step={1}
                value={volume * 100}
                onChange={e => handleVolumeChange(Number(e.target.value) / 100)}
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  opacity: 0,
                  cursor: 'pointer',
                  zIndex: 2
                }}
              />
            </div>
            <span style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.7)' }}>{Math.round(volume * 100)}%</span>
          </div>
        )}
      </div>

      <main style={{
        width: '100%',
        maxWidth: '100vw',
        padding: isFinal
          ? (isMobileView ? '0' : 'clamp(0.5rem, 3vw, 1rem)')
          : (isMobileView ? 'clamp(0.25rem, 2vw, 0.5rem)' : 'clamp(0.75rem, 5vw, 1rem)'),
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: isMobileView ? 'flex-start' : 'center',
        minHeight: '100vh',
        height: isMobileView ? 'auto' : 'auto',
        position: 'relative',
        zIndex: 10,
        borderRadius: isFinal ? '0' : '12px',
        overflow: 'hidden',
        boxSizing: 'border-box',
        overflowX: 'hidden'
      }}>
        <div style={{
          opacity: currentSlide === 0 && !showSlide0Elements ? 0 : 1,
          transform: currentSlide === 0 && !showSlide0Elements ? 'translateY(-20px)' : 'translateY(0)',
          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
          pointerEvents: currentSlide === 0 && !showSlide0Elements ? 'none' : 'auto'
        }}>
          <AvatarJourney currentSlide={currentSlide} avatarsFadingOut={avatarsFadingOut} />
        </div>
        
        {!isFinal && (
           <div style={{ 
             marginBottom: isMobileView ? 'clamp(0.5rem, 2vh, 1rem)' : '1.5rem',
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            gap: '0.75rem',
            opacity: currentSlide === 0 && !showSlide0Elements ? 0 : 1,
            transform: currentSlide === 0 && !showSlide0Elements ? 'translateY(-20px)' : 'translateY(0)',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s',
            pointerEvents: currentSlide === 0 && !showSlide0Elements ? 'none' : 'auto'
          }}>
            <div style={{
              width: '100%',
              maxWidth: '400px',
              height: '3px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '2px',
              overflow: 'hidden'
            }}>
              <div style={{
                height: '100%',
                width: `${((currentSlide + 1) / SLIDES.length) * 100}%`,
                backgroundColor: 'rgba(239, 68, 68, 0.8)',
                borderRadius: '2px',
                transition: 'width 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 0 10px rgba(239, 68, 68, 0.5), 0 0 20px rgba(239, 68, 68, 0.3), 0 0 30px rgba(239, 68, 68, 0.2)'
              }} />
            </div>
            <div style={{
              fontSize: '11px',
              letterSpacing: '0.6em',
              textTransform: 'uppercase',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              opacity: 0.5,
              color: 'rgba(255, 255, 255, 0.9)'
            }}>
              {currentSlide + 1} / {SLIDES.length}
            </div>
          </div>
        )}

        <div style={{
           minHeight: isMobileView ? 'auto' : '500px',
           width: '100%',
           maxWidth: '100%',
           display: 'flex',
           flexDirection: 'column',
           alignItems: 'center',
           justifyContent: 'flex-start',
           paddingTop: isMobileView ? 'clamp(0.25rem, 1.5vw, 0.75rem)' : 'clamp(1.5rem, 5vw, 3rem)',
           paddingLeft: isMobileView ? '0.25rem' : '0.5rem',
           paddingRight: isMobileView ? '0.25rem' : '0.5rem',
           boxSizing: 'border-box',
           overflow: 'hidden',
           overflowX: 'hidden',
           flex: 1
        }}>
          {!isFinal ? (
            <>
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: isMobileView ? '90vw' : 'min(800px, 90vw)',
                maxWidth: '100%',
                height: '400px',
                background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.02) 0%, transparent 70%)',
                pointerEvents: 'none',
                zIndex: 1
              }} />
              
              {currentSlide === 0 && !unlocked ? (
                <div style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 10
                }}>
                  <div style={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: 'min(380px, 90vw)',
                    padding: '0 1rem',
                    animation: unlocked ? 'fadeOutDown 0.6s cubic-bezier(0.4, 0, 1, 1) forwards' : 'fadeInDown 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}>
                    <div style={{
                      position: 'relative',
                      padding: 'clamp(1.5rem, 5vw, 3rem) clamp(1.5rem, 4vw, 2.5rem)',
                      backgroundColor: 'rgba(0, 0, 0, 0.6)',
                      borderRadius: '12px',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(30px)',
                      WebkitBackdropFilter: 'blur(30px)',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                      zIndex: 1,
                      width: '100%',
                      boxSizing: 'border-box'
                    }}>
                      <form onSubmit={(e) => {
                        e.preventDefault();
                        if (password === 'spookyboo') {
                          setUnlocked(true);
                          setPasswordError("");
                          setTypingComplete(false);
                        } else {
                          setPasswordError('Incorrect password');
                          setTimeout(() => setPasswordError(""), 2500);
                        }
                      }} style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.5rem',
                        alignItems: 'center',
                        userSelect: 'none'
                      }}>
                        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
                          <input
                            type="text"
                            value={password}
                            onChange={e => { setPassword(e.target.value); setPasswordError(''); }}
                            placeholder="Enter Password"
                            autoFocus
                            style={{
                              width: '100%',
                              padding: 'clamp(0.75rem, 2vw, 0.875rem) 1rem',
                              fontSize: '16px',
                              backgroundColor: 'rgba(255, 255, 255, 0.05)',
                              border: passwordError ? '0.5px solid rgba(220, 38, 38, 0.5)' : '0.5px solid rgba(255, 255, 255, 0.1)',
                              borderRadius: '8px',
                              color: 'rgba(255, 255, 255, 0.9)',
                              outline: 'none',
                              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                              fontWeight: '400',
                              letterSpacing: '0.01em',
                              textAlign: 'center',
                              userSelect: 'none',
                              transition: 'none',
                              boxShadow: 'none'
                            }}
                          />
                          {passwordError && (
                            <div style={{
                              position: 'fixed',
                              top: 'calc(50% + 5rem)',
                              left: '50%',
                              transform: 'translateX(-50%)',
                              padding: '0.625rem 1.25rem',
                              backgroundColor: 'rgba(15, 15, 15, 0.95)',
                              border: '1px solid rgba(220, 38, 38, 0.3)',
                              borderRadius: '8px',
                              color: 'rgba(239, 68, 68, 0.95)',
                              fontWeight: '500',
                              fontSize: '0.8125rem',
                              whiteSpace: 'nowrap',
                              userSelect: 'none',
                              backdropFilter: 'blur(12px)',
                              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
                              zIndex: 9999
                            }}>
                              {passwordError}
                            </div>
                          )}
                        </div>
                        
                        <button
                          type="submit"
                          onClick={playClick}
                          style={{
                            width: '100%',
                            padding: 'clamp(0.875rem, 2vw, 1rem)',
                            borderRadius: '8px',
                            background: 'rgba(255, 255, 255, 0.1)',
                            border: '0.5px solid rgba(255, 255, 255, 0.15)',
                            fontWeight: '500',
                            textTransform: 'none',
                            letterSpacing: '0.01em',
                            cursor: 'pointer',
                            color: 'rgba(255, 255, 255, 0.95)',
                            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                            fontSize: 'clamp(0.9rem, 2vw, 0.9375rem)',
                            transition: 'all 0.2s ease',
                            userSelect: 'none',
                            position: 'relative',
                            overflow: 'hidden',
                            boxShadow: 'none',
                            minHeight: '44px'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                          }}
                          onMouseDown={(e) => {
                            e.currentTarget.style.transform = 'scale(0.98)';
                          }}
                          onMouseUp={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                          }}
                        >
                          Continue
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              ) : (
                <div style={{
                  opacity: isFading ? 0 : 1,
                  transform: isFading ? 'translateY(30px)' : 'translateY(0)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  zIndex: 10
                }}>
                  <div key={currentSlide}>
                    <Typewriter 
                      text={SLIDES[currentSlide].text}
                      shouldBlink={currentSlide === 0}
                      onComplete={() => {
                        setTypingComplete(true);
                        if (currentSlide === 0) {
                          setTimeout(() => setShowSlide0Elements(true), 300);
                        }
                      }} 
                    />
                  </div>
                </div>
              )}
              
              <div style={{
                 marginTop: isMobileView ? 'clamp(1rem, 3vh, 2rem)' : '4rem',
                 marginBottom: isMobileView ? '1rem' : '0',
                 minHeight: isMobileView ? '60px' : '80px',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 'clamp(0.75rem, 2vw, 1.5rem)',
                flexWrap: 'wrap',
                opacity: (currentSlide === 0 && !showSlide0Elements) ? 0 : (isFading ? 0 : (typingComplete ? 1 : 0)),
                transform: (currentSlide === 0 && !showSlide0Elements) ? 'translateY(-20px)' : (isFading ? 'translateY(30px)' : 'translateY(0)'),
                animation: (!isFading && typingComplete && (currentSlide !== 0 || showSlide0Elements)) ? 'fadeInDown 0.5s ease' : 'none',
                transition: currentSlide === 0 && !showSlide0Elements ? 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s' : 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                pointerEvents: (typingComplete && (currentSlide !== 0 || showSlide0Elements) && !isFading) ? 'auto' : 'none',
                position: 'relative',
                zIndex: 10
              }}>
                  {currentSlide > 0 && (
                    <button 
                      onClick={handlePrev}
                      title="Previous slide (← Arrow key)"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'clamp(0.5rem, 3vw, 1rem)',
                        padding: 'clamp(0.875rem, 3vw, 1.25rem) clamp(1.5rem, 5vw, 2.5rem)',
                        backgroundColor: 'transparent',
                        border: 'none',
                        borderRadius: '9999px',
                        cursor: 'pointer',
                        color: 'rgba(255, 255, 255, 0.3)',
                        fontWeight: 'bold',
                        fontSize: 'clamp(9px, 2.5vw, 12px)',
                        letterSpacing: '0.4em',
                        textTransform: 'uppercase',
                        transition: 'all 0.3s ease',
                        minHeight: '52px'
                      }}
                    >
                      <ChevronLeft style={{ width: 'clamp(14px, 3vw, 18px)', height: 'clamp(14px, 3vw, 18px)', color: 'rgba(255, 255, 255, 0.2)' }} />
                      <span>Previous</span>
                    </button>
                  )}
                  <button 
                    onClick={handleNext}
                    title="Next slide (→ Arrow key or Enter)"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.boxShadow = '0 30px 60px -15px rgba(0, 0, 0, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'clamp(0.5rem, 3vw, 1.5rem)',
                      padding: 'clamp(0.875rem, 3vw, 1.25rem) clamp(2rem, 6vw, 3.5rem)',
                      backgroundColor: 'white',
                      borderRadius: '9999px',
                      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                      cursor: 'pointer',
                      border: 'none',
                      color: 'black',
                      fontWeight: 'bold',
                      fontSize: 'clamp(9px, 2.5vw, 13px)',
                      letterSpacing: '0.7em',
                      textTransform: 'uppercase',
                      transition: 'all 0.3s ease',
                      minHeight: '52px'
                    }}
                  >
                    <span>Next</span>
                    <ChevronRight style={{ width: 'clamp(14px, 3vw, 18px)', height: 'clamp(14px, 3vw, 18px)', color: 'black' }} />
                  </button>
                </div>
            </>
          ) : (
            <div style={{ position: 'relative', marginTop: '0', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: isMobileView ? '0 0.75rem 2rem' : '0 1rem 3rem', minHeight: 'auto', justifyContent: 'flex-start', zIndex: 250, overflow: 'visible' }}>
              <FloatingBalloon onClick={() => setShowExtraModal(true)} show={isFinal} />
              {unboxingStage < 4 ? (
                <div 
                  className={`envelope-texture wax-seal-texture ${isShaking ? 'animate-shake' : ''}`}
                  onClick={handleSealClick}
                  style={{ 
                    position: 'relative', 
                    cursor: 'pointer', 
                    transformStyle: 'preserve-3d', 
                    perspective: '1000px',
                    borderRadius: '0.75rem',
                    animation: 'fadeInUp 0.8s ease forwards',
                    opacity: 0,
                    zIndex: 260
                  }}
                >
                  <div style={{
                    position: 'relative',
                    width: isMobileView ? 'clamp(220px, 70vw, 320px)' : 'clamp(256px, 80vw, 384px)',
                    aspectRatio: '1.4/1',
                    background: '#1a1a1a',
                    backgroundImage: "url('https://www.transparenttextures.com/patterns/linen.png')",
                    borderRadius: '0.75rem',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.7s ease',
                    transformStyle: 'preserve-3d',
                      transform: unboxingStage === 3 ? 'scale(1.05) translateY(3.5rem)' : 'scale(1)',
                    overflow: 'visible'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '50%',
                      background: '#1f1f1f',
                      borderRadius: '0.75rem 0.75rem 0 0',
                      borderBottom: '1px solid rgba(0, 0, 0, 0.2)',
                      transformOrigin: 'top center',
                      transformStyle: 'preserve-3d',
                      transition: 'transform 1400ms cubic-bezier(0.34, 1.56, 0.64, 1)',
                      transform: unboxingStage >= 3 ? 'rotateX(-180deg)' : 'rotateX(0deg)',
                      zIndex: 20,
                      backfaceVisibility: 'hidden'
                    }}>
                      <div style={{ 
                        position: 'absolute', 
                        inset: 0, 
                        background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.05), transparent)', 
                        pointerEvents: 'none',
                        borderRadius: '0.75rem 0.75rem 0 0'
                      }} />
                      <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        background: 'linear-gradient(90deg, transparent, rgba(239, 68, 68, 0.3), transparent)',
                        opacity: unboxingStage >= 3 ? 0 : 1,
                        transition: 'opacity 0.5s'
                      }} />
                    </div>
                    <div style={{ zIndex: 10, textAlign: 'center', userSelect: 'none', pointerEvents: 'none' }}>
                      <span className="silver-handwriting" style={{ fontSize: 'clamp(1.25rem, 5vw, 1.875rem)', opacity: 0.6 }}></span>
                    </div>
                    <div style={{
                      position: 'absolute',
                      top: '48%',
                      left: '50%',
                      transform: unboxingStage === 3 ? 'translate(-50%, -50%) scale(0.3) rotate(360deg)' : 'translate(-50%, -50%)',
                      zIndex: 30,
                      transition: 'all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                      opacity: unboxingStage === 3 ? 0 : 1
                    }}>
                      <div style={{ position: 'relative' }}>
                        {unboxingStage < 3 && (
                          <>
                            <div style={{ position: 'absolute', inset: '-0.5rem', borderRadius: '9999px', border: '2px solid rgba(239, 68, 68, 0.4)', animation: 'seal-pulse-ring 3.5s cubic-bezier(0.4, 0, 0.6, 1) infinite backwards', zIndex: -1, opacity: unboxingStage < 3 ? 0.38 : 0 }} />
                            <div style={{ position: 'absolute', inset: '-0.5rem', borderRadius: '9999px', border: '2px solid rgba(239, 68, 68, 0.4)', animation: 'seal-pulse-ring 3.5s cubic-bezier(0.4, 0, 0.6, 1) infinite 1.2s backwards', zIndex: -1, opacity: unboxingStage < 3 ? 0.32 : 0 }} />
                            <div style={{ position: 'absolute', inset: '-0.5rem', borderRadius: '9999px', border: '2px solid rgba(239, 68, 68, 0.4)', animation: 'seal-pulse-ring 3.5s cubic-bezier(0.4, 0, 0.6, 1) infinite 2.4s backwards', zIndex: -1, opacity: unboxingStage < 3 ? 0.26 : 0 }} />
                          </>
                        )}
                        <div className="animate-seal-breathe" style={{
                          width: 'clamp(3.5rem, 15vw, 5rem)',
                          height: 'clamp(3.5rem, 15vw, 5rem)',
                          background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.05), transparent), #b91c1c',
                          borderRadius: '9999px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: '4px solid #121212',
                          boxShadow: '0 0 30px rgba(225,29,72,0.3), inset 0 0 15px rgba(0,0,0,0.5)',
                          transition: 'all 0.3s ease',
                          overflow: 'hidden'
                        }}>
                          <Sparkles style={{ width: 'clamp(1.5rem, 6vw, 2rem)', height: 'clamp(1.5rem, 6vw, 2rem)', color: '#ef4444', opacity: unboxingStage > 0 ? 0.2 : 1, transition: 'opacity 0.3s' }} />
                          {unboxingStage >= 1 && (
                            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.6 }}>
                              <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%', fill: 'none', stroke: 'rgba(0,0,0,0.4)', strokeWidth: 2 }}>
                                <path d="M50 20 L45 50 L55 80 M20 50 L80 50" />
                                {unboxingStage >= 2 && <path d="M20 20 L50 50 L80 80 M80 20 L20 80" />}
                              </svg>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    {unboxingStage === 3 && (
                      <div className="animate-card-emerge" style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 5 }}>
                        <div style={{ width: '80%', height: '80%', background: '#232323', borderRadius: '1rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', border: '1px solid rgba(255, 255, 255, 0.08)' }} />
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="animate-slide-in-up" style={{ width: '100%', maxWidth: isMobileView ? '85vw' : '28rem', zIndex: 260 }}>
                  <GiftCard code={GIFT_CODE} onCopy={playClick} />
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      {hasReachedEnd && (
        <button 
          onClick={() => { playClick(); setShowDevPanel(!showDevPanel); }}
          title="Dev panel - Jump to any slide"
          style={{
            position: 'fixed',
            bottom: '1rem',
            right: '1rem',
            zIndex: 50,
            padding: '1rem',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '9999px',
            color: 'rgba(255, 255, 255, 0.2)',
            cursor: 'pointer',
            backdropFilter: 'blur(12px)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        <Settings style={{ width: '24px', height: '24px' }} />
      </button>
      )}

      {showDevPanel && hasReachedEnd && (
        <div ref={devPanelRef} style={{
          position: 'fixed',
          bottom: '4rem',
          right: '1rem',
          padding: '1rem',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '1rem',
          backdropFilter: 'blur(24px)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          maxHeight: '300px',
          overflowY: 'auto',
          width: isMobileView ? 'calc(100vw - 3rem)' : '256px',
          maxWidth: '256px',
          zIndex: 50
        }}>
          <p style={{
            fontSize: '9px',
            fontWeight: 'bold',
            color: '#dc2626',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '1rem'
          }}>Jump to Slide</p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '0.5rem'
          }}>
            {SLIDES.map((_, idx) => (
              <button 
                key={idx} 
                onClick={() => { playClick(); setCurrentSlide(idx); setTypingComplete(false); setShowDevPanel(false); }}
                style={{
                  aspectRatio: '1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '0.5rem',
                  fontSize: '10px',
                  fontWeight: 'bold',
                  backgroundColor: currentSlide === idx ? '#dc2626' : 'rgba(255, 255, 255, 0.05)',
                  color: currentSlide === idx ? 'white' : 'rgba(255, 255, 255, 0.5)',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        </div>
      )}

      {showExtraModal && (
        <div 
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowExtraModal(false);
              setExtraModalStep('question');
            }
          }}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 100,
            backdropFilter: 'blur(4px)'
          }}
        >
          <div className="extra-modal" style={{
            position: 'relative',
            backgroundColor: 'rgba(15, 15, 15, 0.98)',
            borderRadius: '1.5rem',
            padding: extraModalStep === 'story' ? 'clamp(2rem, 5vw, 3rem)' : 'clamp(2rem, 5vw, 3rem) clamp(1.5rem, 4vw, 2.5rem)',
            paddingBottom: '2.5rem',
            maxWidth: extraModalStep === 'story' ? 'min(900px, 95vw)' : 'min(520px, 95vw)',
            width: '90%',
            maxHeight: '85vh',
            overflow: 'auto',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.1)',
            animation: 'fadeIn 0.3s ease',
            boxSizing: 'border-box'
          }}>
            {extraModalStep === 'question' && (
              <>
                <h2 style={{
                  fontSize: 'clamp(1.5rem, 5vw, 2rem)',
                  fontWeight: '700',
                  color: 'white',
                  textAlign: 'center',
                  marginBottom: '2.5rem',
                  letterSpacing: '-0.02em',
                  wordWrap: 'break-word'
                }}>
                  Are you my Spooky Boo? 😊
                </h2>
                <div style={{
                  display: 'flex',
                  gap: '1.25rem',
                  justifyContent: 'center'
                }}>
                  <button
                    onClick={() => {
                      playClick();
                      setExtraModalStep('story');
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 8px 20px rgba(220, 38, 38, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(220, 38, 38, 0.3)';
                    }}
                    style={{
                      padding: '1.125rem 3rem',
                      backgroundColor: '#dc2626',
                      color: 'white',
                      border: 'none',
                      borderRadius: '0.75rem',
                      fontSize: '1.15rem',
                      fontWeight: '700',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      boxShadow: '0 4px 12px rgba(220, 38, 38, 0.3)',
                      letterSpacing: '0.02em'
                    }}
                  >
                    Yess
                  </button>
                  <button
                    onClick={() => {
                      playClick();
                      setExtraModalStep('wrong');
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                    style={{
                      padding: '1.125rem 3rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      color: 'white',
                      border: '2px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '0.75rem',
                      fontSize: '1.15rem',
                      fontWeight: '700',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      letterSpacing: '0.02em'
                    }}
                  >
                    Naurr..
                  </button>
                </div>
              </>
            )}

            {extraModalStep === 'story' && (
              <>
                <div style={{
                  color: 'rgba(255, 255, 255, 0.92)',
                  fontSize: isMobileView ? 'clamp(1.25rem, 3.5vw, 1.4rem)' : 'clamp(1.15rem, 3vw, 1.3rem)',
                  lineHeight: isMobileView ? '1.95' : '1.75',
                  fontWeight: '300',
                  marginBottom: '2.5rem',
                  wordWrap: 'break-word',
                  overflowWrap: 'break-word'
                }}>
                  <p style={{ marginBottom: '1.5rem', fontSize: '1.2rem', fontWeight: '600', color: 'white' }}>
                   Looking back on 2025, I'm gonna tell you about one of my favorite moments of the year.
                  </p>
                  <p style={{ marginBottom: '1.5rem' }}>
                    One random night, I was lying in bed watching YouTube when, completely out of nowhere, I got a message from a girl. Yes, exactly that girl, Stargirl. You know her, right?! Well, she was in Seattle, if I'm not mistaken. After a really exhausting day at work, she was heading back to her hotel and sent me a photo of herself in her work uniform. I remember everything about this moment. I remember she said after the photo: "I know I look awful, I'm exhausted."
                  </p>
                  <p style={{ marginBottom: '1.5rem' }}>
                    And I remember thinking: Wtf, how can she think that? Look at her, she's gorgeous! She's perfect!
                  </p>
                  <p style={{ marginBottom: '1.5rem' }}>
                    But what stood out even more was what she wrote right under the photo: "Thinking of you."
                  </p>
                  <p>
                    That was the first time she had ever said something like that to me, and honestly, it caught me completely by surprise, because of the photo ofc, I always love seeing her, and especially what she said. I wasn't expecting it at all. It made me really happy, and I found myself thinking about it for a while. It definitely made me smile every time it came back to mind, and it still does.
                  </p>
                  <p>But shhhh… this is our little secret. Don't tell her. xD</p>
                </div>
                <button
                  onClick={() => {
                    playClick();
                    setShowExtraModal(false);
                    setExtraModalStep('question');
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#b91c1c';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#dc2626';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    backgroundColor: '#dc2626',
                    color: 'white',
                    border: 'none',
                    borderRadius: '0.75rem',
                    fontSize: '1.05rem',
                    fontWeight: '700',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 4px 12px rgba(220, 38, 38, 0.3)'
                  }}
                >
                  Close
                </button>
              </>
            )}

            {extraModalStep === 'wrong' && (
              <>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '2rem'
                }}>
                  <img 
                    src={CatGif} 
                    alt="Cat" 
                    style={{
                      width: '240px',
                      height: '240px',
                      objectFit: 'cover',
                      borderRadius: '1rem',
                      border: '3px solid rgba(255, 255, 255, 0.1)',
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)'
                    }}
                  />
                  <p style={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontSize: '1.15rem',
                    textAlign: 'center',
                    lineHeight: '1.7',
                    fontWeight: '500'
                  }}>
                    Why did you choose that? 😭
                  </p>
                  <button
                    onClick={() => {
                      playClick();
                      setExtraModalStep('question');
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#b91c1c';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#dc2626';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      backgroundColor: '#dc2626',
                      color: 'white',
                      border: 'none',
                      borderRadius: '0.75rem',
                      fontSize: '1.05rem',
                      fontWeight: '700',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      boxShadow: '0 4px 12px rgba(220, 38, 38, 0.3)'
                    }}
                  >
                    Try Again
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

const container = document.getElementById('root');
if (container) {
  ReactDOM.createRoot(container).render(<App />);
}
