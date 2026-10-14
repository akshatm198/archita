/**
 * ROMANTIC SURPRISE EXPERIENCE - ARCHITA & AKSHAT (15-PAGE EDITION)
 * Preserves all original 9 rooms + adds 6 new interactive animated rooms (Pages 2-7)
 */

/* ==========================================================================
   CENTRAL CONFIGURATION
   ========================================================================== */
const CONFIG = {
  recipientName: "Archita",
  senderName: "Akshat",
  anniversaryDate: "22-02-2026",
  relationshipDate: "07-08-2026",

  // Local Background Song MP3 Path (Preserved local file)
  bgMusicUrl: "./song.mp3.mp3",

  // 8 High-Resolution Memories
  galleryPhotos: [
    {
      url: "https://ourmoments.live/wp-content/uploads/om-photos/om_94434419ad4a3fb275685f91ffe94136_1791866407.webp",
      caption: "Our Sweetest Smile"
    },
    {
      url: "https://ourmoments.live/wp-content/uploads/om-photos/om_263ae4d7d800c0f5b95abafca022d345_1791866407.webp",
      caption: "Unforgettable Moments"
    },
    {
      url: "https://ourmoments.live/wp-content/uploads/om-photos/om_d18503ff653eaf85d474d18318444536_1791866407.webp",
      caption: "Pure Joy Together"
    },
    {
      url: "https://ourmoments.live/wp-content/uploads/om-photos/om_6b3698b51fcd79e86405038ec62fe745_1791866407.webp",
      caption: "Holding You Close"
    },
    {
      url: "https://ourmoments.live/wp-content/uploads/om-photos/om_649bd28df92930f580e296411f9194ee_1791866408.webp",
      caption: "Every Second With You"
    },
    {
      url: "https://ourmoments.live/wp-content/uploads/om-photos/om_d4e95c271b6764cf5fb113393eea5030_1791866408.webp",
      caption: "Late Night Heart Talks"
    },
    {
      url: "https://ourmoments.live/wp-content/uploads/om-photos/om_cc03328a3612d4ec2a7f3442a9b01f94_1791866409.webp",
      caption: "My Favorite Person"
    },
    {
      url: "https://ourmoments.live/wp-content/uploads/om-photos/om_728b84e1ca4bfd78b1f70bdf035ebbc5_1791866418.webp",
      caption: "Forever & Always"
    }
  ],

  // 10-Question Couple Quiz
  quizQuestions: [
    {
      question: "Hamari official Anniversary date kaunsi hai? ❤️",
      options: ["22-02-2026", "14-02-2026", "01-01-2026", "25-12-2025"],
      correct: 0,
      note: "Haan bilkul! 22 February 2026 hamare liye sabse anmol tareekh hai! 💍"
    },
    {
      question: "Hamari first meet / relationship start date kaunsi hai? 🫶🏻",
      options: ["15-08-2026", "07-08-2026", "01-02-2026", "10-10-2026"],
      correct: 1,
      note: "Sahi jawab! 7 August 2026 jis din se dil ki dastaan shuru hui! ✨"
    },
    {
      question: "Archita ki smile dekh kar Akshat ko kaisa lagta hai? 🌸",
      options: ["Din ban jata hai aur sukoon milta hai 💖", "Theek-thaak", "Normal", "Kuch khas nahi"],
      correct: 0,
      note: "Hazaaron chehron mein sirf Archita ki smile se sukoon milta hai! 🌷"
    },
    {
      question: "Akshat ke universe mein sabse khoobsurat aur special insaan kaun hai? 👑",
      options: ["Archita", "Sirf aur sirf Archita", "Hamesha Archita", "All of the above! ❤️"],
      correct: 3,
      note: "100% true! Har tarah se sirf Archita hi sabse special hai! 💖"
    },
    {
      question: "Archita ka sabse special Birthday kis din celebrate hota hai? 🎂",
      options: ["1st February", "14th February", "7th August", "22nd February"],
      correct: 0,
      note: "Happiest Birthday meri pyaari Archita! 🎂✨"
    },
    {
      question: "Jab Archita udaas hoti hai, toh Akshat ka pehla mission kya hota hai? 🥺",
      options: ["Uski smile wapas lana aur comfort dena", "Busy ho jana", "Ignore karna", "Baad mein baat karna"],
      correct: 0,
      note: "Akshat hamesha Archita ki muskurahat wapas lane ki koshish karega! 🫶🏻"
    },
    {
      question: "Hamare rishte mein sabse khoobsurat cheez kya hai? 💖",
      options: ["Understanding aur dil se respect", "Ladaai", "Chuppi", "Kuch nahi"],
      correct: 0,
      note: "Respect, care aur saccha pyaar hamari sabse badi taqat hai! 🌟"
    },
    {
      question: "“Tumhe paana hi meri mohabbat ki shart nahi…” Is shayari ki agli line kya hai? 🌷",
      options: [
        "Tumhara khush rehna bhi mere liye kisi dua se kam nahi.",
        "Tum mujhe bhool jao toh koi baat nahi.",
        "Tum hamesha door raho.",
        "Tumhe sirf apna banana hai."
      ],
      correct: 0,
      note: "Sahi pehchana! Archita ki khushi hi Akshat ki sabse badi dua hai! 💌"
    },
    {
      question: "Akshat Archita ke aane wale kal (future) ke liye kya dua karta hai? 🌟",
      options: ["Khoob hase, saare sapne poore hon aur hamesha chamakti rahe ✨", "Sirf kaam kare", "Kam bole", "Kuch nahi"],
      correct: 0,
      note: "May God bless you with infinite happiness and success! 🎀"
    },
    {
      question: "Kya Akshat hamesha Archita ke saath aur uski choice ki respect ke sath khada rahega? 💍",
      options: ["Haan, bina kisi shart ke hamesha! ❤️", "Kabhi kabhi", "Shayad", "Sirf achhe waqt mein"],
      correct: 0,
      note: "Forever & Always — through thick and thin! 🥹❤️"
    }
  ],

  // Sacred Promises
  promises: [
    "Never go to bed angry",
    "Say the hard thing, gently",
    "Always share the last bite",
    "Hold your hand in every crowd",
    "Answer the phone at 3am, always"
  ]
};

/* ==========================================================================
   Synthesizer Audio Effects
   ========================================================================== */
class SoundEngine {
  constructor() {
    this.audioCtx = null;
  }

  init() {
    if (!this.audioCtx) {
      const AudioClass = window.AudioContext || window.webkitAudioContext;
      if (AudioClass) this.audioCtx = new AudioClass();
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  playChime() {
    this.init();
    if (!this.audioCtx) return;
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, idx) => {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime + idx * 0.08);
      gain.gain.setValueAtTime(0.001, this.audioCtx.currentTime + idx * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.18, this.audioCtx.currentTime + idx * 0.08 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + idx * 0.08 + 0.7);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start(this.audioCtx.currentTime + idx * 0.08);
      osc.stop(this.audioCtx.currentTime + idx * 0.08 + 0.75);
    });
  }

  playSoftRustle() {
    this.init();
    if (!this.audioCtx) return;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(160, this.audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(80, this.audioCtx.currentTime + 0.2);
    gain.gain.setValueAtTime(0.04, this.audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + 0.2);
    osc.connect(gain);
    gain.connect(this.audioCtx.destination);
    osc.start();
    osc.stop(this.audioCtx.currentTime + 0.22);
  }
}

const sounds = new SoundEngine();

/* ==========================================================================
   Procedural Love Tree & Petals Engine (Background Canvas)
   ========================================================================== */
class ProceduralLoveTreeEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.petals = [];
    this.maxPetals = 65;
    this.treeBufferCanvas = document.createElement('canvas');
    this.treeBufferCtx = this.treeBufferCanvas.getContext('2d');

    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.initPetals();
    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
    this.treeBufferCanvas.width = this.width;
    this.treeBufferCanvas.height = this.height;
    this.drawFractalTreeBuffer();
  }

  drawFractalTreeBuffer() {
    const ctx = this.treeBufferCtx;
    ctx.clearRect(0, 0, this.width, this.height);
    const startX = this.width > 768 ? this.width * 0.82 : this.width * 0.88;
    const startY = this.height;
    const trunkLen = Math.min(this.height * 0.28, 140);

    ctx.save();
    ctx.strokeStyle = '#3a0c18';
    ctx.lineCap = 'round';
    this.drawBranch(ctx, startX, startY, trunkLen, -Math.PI / 2, 14);
    ctx.restore();
  }

  drawBranch(ctx, x, y, length, angle, branchWidth) {
    ctx.save();
    ctx.lineWidth = branchWidth;
    ctx.strokeStyle = '#420d1c';
    ctx.beginPath();
    ctx.moveTo(x, y);
    const endX = x + Math.cos(angle) * length;
    const endY = y + Math.sin(angle) * length;
    ctx.lineTo(endX, endY);
    ctx.stroke();

    if (length < 12) {
      this.drawBlossomCluster(ctx, endX, endY);
      ctx.restore();
      return;
    }

    for (let i = 0; i < 2; i++) {
      const angleVariation = (i === 0 ? -1 : 1) * (0.28 + Math.random() * 0.18);
      const nextLength = length * (0.72 + Math.random() * 0.1);
      this.drawBranch(ctx, endX, endY, nextLength, angle + angleVariation, branchWidth * 0.68);
    }
    ctx.restore();
  }

  drawBlossomCluster(ctx, x, y) {
    const petalColors = ['#ff758f', '#ffb3c1', '#e63946', '#ffffff'];
    for (let i = 0; i < 4; i++) {
      ctx.beginPath();
      const angle = (Math.PI * 2 / 4) * i + Math.random() * 0.3;
      const dist = Math.random() * 10;
      ctx.fillStyle = petalColors[Math.floor(Math.random() * petalColors.length)];
      ctx.globalAlpha = 0.75;
      ctx.arc(x + Math.cos(angle) * dist, y + Math.sin(angle) * dist, 3 + Math.random() * 3, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  initPetals() {
    this.petals = [];
    for (let i = 0; i < this.maxPetals; i++) {
      this.petals.push(this.createPetal(true));
    }
  }

  createPetal(randomY = false) {
    return {
      x: Math.random() * this.width,
      y: randomY ? Math.random() * this.height : -20,
      size: 5 + Math.random() * 9,
      speedY: 0.8 + Math.random() * 1.6,
      speedX: (Math.random() - 0.5) * 1.2,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.03,
      swayFreq: 0.01 + Math.random() * 0.02,
      alpha: 0.4 + Math.random() * 0.55,
      isHeart: Math.random() > 0.45
    };
  }

  burstBlossoms() {
    sounds.playChime();
    for (let i = 0; i < 35; i++) {
      const p = this.createPetal(false);
      p.x = this.width / 2 + (Math.random() - 0.5) * 300;
      p.y = this.height * 0.45 + (Math.random() - 0.5) * 150;
      p.speedY = 1.5 + Math.random() * 3;
      this.petals.push(p);
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.ctx.drawImage(this.treeBufferCanvas, 0, 0);

    const now = Date.now();
    for (let i = 0; i < this.petals.length; i++) {
      const p = this.petals[i];
      p.y += p.speedY;
      p.x += Math.sin(now * p.swayFreq) * 0.8 + p.speedX;
      p.rotation += p.rotSpeed;

      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate(p.rotation);
      this.ctx.globalAlpha = p.alpha;

      if (p.isHeart) {
        this.ctx.fillStyle = '#ff758f';
        this.ctx.beginPath();
        const s = p.size * 0.6;
        this.ctx.moveTo(0, s * 0.3);
        this.ctx.bezierCurveTo(-s, -s * 0.5, -s * 1.2, s * 0.6, 0, s * 1.3);
        this.ctx.bezierCurveTo(s * 1.2, s * 0.6, s, -s * 0.5, 0, s * 0.3);
        this.ctx.fill();
      } else {
        this.ctx.fillStyle = '#ffb3c1';
        this.ctx.beginPath();
        this.ctx.ellipse(0, 0, p.size * 0.8, p.size * 0.4, 0, 0, Math.PI * 2);
        this.ctx.fill();
      }
      this.ctx.restore();

      if (p.y > this.height + 30 || p.x < -30 || p.x > this.width + 30) {
        if (this.petals.length > this.maxPetals) {
          this.petals.splice(i, 1);
          i--;
        } else {
          this.petals[i] = this.createPetal(false);
        }
      }
    }

    requestAnimationFrame(this.animate);
  }
}

/* ==========================================================================
   NEW PAGE 2 (Room 3): Magical Growing Love Tree Engine
   ========================================================================== */
class MagicalGrowingTreeScene {
  constructor(canvasId, typingTextId) {
    this.canvas = document.getElementById(canvasId);
    this.typingEl = document.getElementById(typingTextId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.segments = [];
    this.blossoms = [];
    this.fallingHearts = [];
    this.growthProgress = 0;
    this.hasStarted = false;
    this.typingTimer = null;
    this.message = "Every branch holds a wish for your smile, Archita. May our bond keep blooming brighter every single day. ❤️";

    this.buildTreeGeometry();
    this.initFallingHearts();
    this.renderLoop = this.renderLoop.bind(this);
    requestAnimationFrame(this.renderLoop);
  }

  buildTreeGeometry() {
    this.segments = [];
    this.blossoms = [];
    const w = this.canvas.width;
    const h = this.canvas.height;
    const startX = w * 0.6;
    const startY = h;

    const addBranch = (x, y, len, angle, width, depth) => {
      const x2 = x + Math.cos(angle) * len;
      const y2 = y + Math.sin(angle) * len;
      this.segments.push({ x1: x, y1: y, x2, y2, width, depth });

      if (depth >= 4) {
        const colors = ['#ff4d6d', '#ff758f', '#ffb3c1', '#ff9ebb', '#e63946'];
        for (let i = 0; i < 4; i++) {
          this.blossoms.push({
            x: x2 + (Math.random() - 0.5) * 28,
            y: y2 + (Math.random() - 0.5) * 24,
            size: 6 + Math.random() * 6,
            color: colors[Math.floor(Math.random() * colors.length)],
            appearAt: 0.55 + (depth / 10) + Math.random() * 0.25
          });
        }
      }

      if (depth >= 6) return;

      const subBranches = depth === 0 ? 3 : 2;
      for (let i = 0; i < subBranches; i++) {
        const spread = subBranches === 3 ? (i - 1) * 0.36 : (i === 0 ? -0.34 : 0.34);
        const nextAngle = angle + spread + (Math.random() - 0.5) * 0.12;
        const nextLen = len * (0.74 + Math.random() * 0.06);
        addBranch(x2, y2, nextLen, nextAngle, width * 0.7, depth + 1);
      }
    };

    addBranch(startX, startY, 92, -Math.PI / 2, 13, 0);
  }

  initFallingHearts() {
    this.fallingHearts = [];
    for (let i = 0; i < 18; i++) {
      this.fallingHearts.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        size: 5 + Math.random() * 6,
        vy: 0.45 + Math.random() * 0.85,
        vx: (Math.random() - 0.5) * 0.5,
        color: Math.random() > 0.5 ? '#ff758f' : '#ffb3c1',
        alpha: 0.45 + Math.random() * 0.45
      });
    }
  }

  startExperience() {
    if (!this.hasStarted) {
      this.hasStarted = true;
      this.growthProgress = 0;
      this.startTyping();
    }
  }

  startTyping() {
    if (!this.typingEl) return;
    if (this.typingTimer) clearInterval(this.typingTimer);
    this.typingEl.textContent = '';
    let idx = 0;
    this.typingTimer = setInterval(() => {
      if (idx < this.message.length) {
        this.typingEl.textContent += this.message.charAt(idx);
        idx++;
      } else {
        clearInterval(this.typingTimer);
      }
    }, 32);
  }

  releaseExtraBlossoms() {
    sounds.playChime();
    const w = this.canvas.width;
    const h = this.canvas.height;
    const colors = ['#ff4d6d', '#ff758f', '#ffb3c1', '#ff8fa3'];
    for (let i = 0; i < 22; i++) {
      this.fallingHearts.push({
        x: w * 0.6 + (Math.random() - 0.5) * 180,
        y: h * 0.38 + (Math.random() - 0.5) * 110,
        size: 6 + Math.random() * 7,
        vy: 0.8 + Math.random() * 1.4,
        vx: (Math.random() - 0.5) * 1.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 0.85
      });
    }
  }

  drawHeart(ctx, x, y, size, color, alpha) {
    ctx.save();
    ctx.translate(x, y);
    ctx.fillStyle = color;
    ctx.globalAlpha = alpha;
    ctx.beginPath();
    const s = size * 0.6;
    ctx.moveTo(0, s * 0.3);
    ctx.bezierCurveTo(-s, -s * 0.5, -s * 1.2, s * 0.6, 0, s * 1.3);
    ctx.bezierCurveTo(s * 1.2, s * 0.6, s, -s * 0.5, 0, s * 0.3);
    ctx.fill();
    ctx.restore();
  }

  renderLoop() {
    const ctx = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;
    ctx.clearRect(0, 0, w, h);

    if (this.hasStarted && this.growthProgress < 1) {
      this.growthProgress = Math.min(1, this.growthProgress + 0.012);
    } else if (!this.hasStarted) {
      this.growthProgress = 0.25;
    }

    const maxDepthVisible = this.growthProgress * 6.5;

    // Draw branches progressively by depth
    this.segments.forEach(seg => {
      if (seg.depth <= maxDepthVisible) {
        const localProg = Math.min(1, Math.max(0, maxDepthVisible - seg.depth));
        const curX = seg.x1 + (seg.x2 - seg.x1) * localProg;
        const curY = seg.y1 + (seg.y2 - seg.y1) * localProg;

        ctx.save();
        ctx.strokeStyle = '#5c3327';
        ctx.lineWidth = seg.width;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(seg.x1, seg.y1);
        ctx.lineTo(curX, curY);
        ctx.stroke();
        ctx.restore();
      }
    });

    // Draw blooming heart blossoms
    this.blossoms.forEach(b => {
      if (this.growthProgress >= b.appearAt) {
        const scale = Math.min(1, (this.growthProgress - b.appearAt) * 4);
        this.drawHeart(ctx, b.x, b.y, b.size * scale, b.color, 0.85);
      }
    });

    // Draw floating/falling heart petals
    for (let i = 0; i < this.fallingHearts.length; i++) {
      const fh = this.fallingHearts[i];
      fh.y += fh.vy;
      fh.x += fh.vx + Math.sin(Date.now() * 0.002 + i) * 0.25;
      this.drawHeart(ctx, fh.x, fh.y, fh.size, fh.color, fh.alpha);

      if (fh.y > h + 20) {
        if (this.fallingHearts.length > 20) {
          this.fallingHearts.splice(i, 1);
          i--;
        } else {
          fh.y = -15;
          fh.x = Math.random() * w;
        }
      }
    }

    requestAnimationFrame(this.renderLoop);
  }
}

/* ==========================================================================
   Room Session Manager (Step-by-Step Navigation Across All 15 Slides)
   ========================================================================== */
class SessionManager {
  constructor() {
    this.slides = Array.from(document.querySelectorAll('.slide-page'));
    this.totalSteps = this.slides.length; // 15 slides
    this.currentStep = 1;

    this.progressText = document.getElementById('progress-step-text');
    this.progressFill = document.getElementById('session-progress-fill');

    this.onStepChangeCallbacks = [];
    this.initListeners();
    this.updateUI();
  }

  onStepChange(cb) {
    this.onStepChangeCallbacks.push(cb);
  }

  goTo(stepNumber) {
    if (stepNumber < 1 || stepNumber > this.totalSteps) return;
    this.currentStep = stepNumber;

    this.slides.forEach(slide => {
      const s = parseInt(slide.dataset.step, 10);
      slide.classList.toggle('active', s === this.currentStep);
    });

    this.updateUI();
    sounds.playSoftRustle();
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Notify page-specific animation controllers
    this.onStepChangeCallbacks.forEach(cb => cb(this.currentStep));

    // Room 15 (Original Finale) activates Pop-Pop explosion
    if (this.currentStep === 15) {
      triggerPhotoPopExplosion();
    }
  }

  next() { this.goTo(this.currentStep + 1); }
  prev() { this.goTo(this.currentStep - 1); }

  updateUI() {
    if (this.progressText) {
      this.progressText.textContent = `Room ${this.currentStep} of ${this.totalSteps}`;
    }
    if (this.progressFill) {
      const pct = (this.currentStep / this.totalSteps) * 100;
      this.progressFill.style.width = `${pct}%`;
    }
  }

  initListeners() {
    document.querySelectorAll('.btn-next-slide').forEach(btn => {
      btn.addEventListener('click', () => this.next());
    });

    document.querySelectorAll('.btn-prev-slide').forEach(btn => {
      btn.addEventListener('click', () => this.prev());
    });

    const btnRestart = document.getElementById('btn-restart-slides');
    if (btnRestart) {
      btnRestart.addEventListener('click', () => this.goTo(1));
    }
  }
}

/* ==========================================================================
   Interactive Scratch Card Engine (Original Slide 4 -> Now Slide 10)
   ========================================================================== */
class ScratchCardEngine {
  constructor(canvasId, statusHintId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.statusHint = document.getElementById(statusHintId);
    this.isDrawing = false;
    this.isRevealed = false;

    this.setupCover();
    this.initEvents();
  }

  setupCover() {
    const ctx = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;

    // Metallic Rose Gold Gradient Cover
    const grad = ctx.createLinearGradient(0, 0, w, h);
    grad.addColorStop(0, '#d4af37');
    grad.addColorStop(0.5, '#f5d6ce');
    grad.addColorStop(1, '#c9184a');

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    // Callout text on the scratch surface
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 18px Montserrat, sans-serif';
    ctx.textAlign = 'center';
    ctx.shadowColor = 'rgba(0,0,0,0.5)';
    ctx.shadowBlur = 6;
    ctx.fillText('Scratch Here ✨', w / 2, h / 2 - 10);
    ctx.font = '13px Montserrat, sans-serif';
    ctx.fillText('Rub to reveal our memory ❤️', w / 2, h / 2 + 18);
    ctx.shadowBlur = 0;
  }

  initEvents() {
    const scratch = (e) => {
      if (!this.isDrawing || this.isRevealed) return;
      const rect = this.canvas.getBoundingClientRect();
      const scaleX = this.canvas.width / rect.width;
      const scaleY = this.canvas.height / rect.height;

      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;

      const x = (clientX - rect.left) * scaleX;
      const y = (clientY - rect.top) * scaleY;

      this.ctx.globalCompositeOperation = 'destination-out';
      this.ctx.beginPath();
      this.ctx.arc(x, y, 24, 0, Math.PI * 2);
      this.ctx.fill();

      this.checkProgress();
    };

    const start = (e) => {
      this.isDrawing = true;
      scratch(e);
    };

    const stop = () => {
      this.isDrawing = false;
    };

    this.canvas.addEventListener('mousedown', start);
    window.addEventListener('mousemove', scratch);
    window.addEventListener('mouseup', stop);

    this.canvas.addEventListener('touchstart', start, { passive: false });
    this.canvas.addEventListener('touchmove', scratch, { passive: false });
    window.addEventListener('touchend', stop);
  }

  checkProgress() {
    if (this.isRevealed) return;
    const w = this.canvas.width;
    const h = this.canvas.height;
    const imgData = this.ctx.getImageData(0, 0, w, h);
    let transparentPixels = 0;
    const totalPixels = imgData.data.length / 4;

    for (let i = 3; i < imgData.data.length; i += 16) {
      if (imgData.data[i] === 0) transparentPixels += 4;
    }

    if (transparentPixels / totalPixels > 0.4) {
      this.isRevealed = true;
      this.canvas.style.transition = 'opacity 0.8s ease';
      this.canvas.style.opacity = '0';
      sounds.playChime();
      if (this.statusHint) {
        this.statusHint.textContent = "✨ Purest happiness! Our favorite smile together ❤️";
        this.statusHint.style.color = "var(--accent-gold)";
      }
      setTimeout(() => {
        this.canvas.style.display = 'none';
      }, 800);
    }
  }
}

/* ==========================================================================
   Photo Puzzle Controller (Original Slide 6 -> Now Slide 12)
   ========================================================================== */
class PhotoPuzzleGame {
  constructor(boardId, previewId, statusId, imageUrl) {
    this.container = document.getElementById(boardId);
    this.previewImg = document.getElementById(previewId);
    this.statusText = document.getElementById(statusId);
    this.imageUrl = imageUrl;
    this.correctOrder = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    this.currentOrder = [...this.correctOrder];
    this.selectedTileIndex = null;
    this.isSolved = false;

    this.init();
  }

  init() {
    this.previewImg.src = this.imageUrl;
    const img = new Image();
    img.src = this.imageUrl;
    img.onload = () => {
      this.scramble();
      this.render();
    };
    img.onerror = () => {
      this.scramble();
      this.render();
    };
  }

  scramble() {
    this.isSolved = false;
    this.statusText.textContent = "Tap or drag tiles to restore our photo.";
    this.statusText.style.color = "rgba(255, 240, 243, 0.75)";

    for (let i = this.currentOrder.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.currentOrder[i], this.currentOrder[j]] = [this.currentOrder[j], this.currentOrder[i]];
    }

    if (this.checkSolvedState()) {
      [this.currentOrder[0], this.currentOrder[1]] = [this.currentOrder[1], this.currentOrder[0]];
    }
    this.render();
  }

  render() {
    this.container.innerHTML = '';
    this.currentOrder.forEach((tileValue, gridSlot) => {
      const tile = document.createElement('div');
      tile.className = 'puzzle-tile';
      tile.setAttribute('role', 'button');
      tile.setAttribute('tabindex', '0');

      const row = Math.floor(tileValue / 3);
      const col = tileValue % 3;
      tile.style.backgroundImage = `url("${this.imageUrl}")`;
      tile.style.backgroundSize = '300% 300%';
      tile.style.backgroundPosition = `${col * 50}% ${row * 50}%`;

      tile.draggable = true;
      tile.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', gridSlot);
        tile.classList.add('selected');
      });
      tile.addEventListener('dragend', () => tile.classList.remove('selected'));
      tile.addEventListener('dragover', (e) => e.preventDefault());
      tile.addEventListener('drop', (e) => {
        e.preventDefault();
        const fromSlot = parseInt(e.dataTransfer.getData('text/plain'), 10);
        this.swapSlots(fromSlot, gridSlot);
      });

      tile.addEventListener('click', () => this.handleTileClick(gridSlot));
      this.container.appendChild(tile);
    });
  }

  handleTileClick(slotIndex) {
    if (this.isSolved) return;
    sounds.playSoftRustle();

    if (this.selectedTileIndex === null) {
      this.selectedTileIndex = slotIndex;
      this.container.children[slotIndex]?.classList.add('selected');
    } else {
      if (this.selectedTileIndex === slotIndex) {
        this.container.children[slotIndex]?.classList.remove('selected');
        this.selectedTileIndex = null;
      } else {
        const prevSlot = this.selectedTileIndex;
        this.selectedTileIndex = null;
        this.swapSlots(prevSlot, slotIndex);
      }
    }
  }

  swapSlots(slotA, slotB) {
    [this.currentOrder[slotA], this.currentOrder[slotB]] = [this.currentOrder[slotB], this.currentOrder[slotA]];
    this.render();

    if (this.checkSolvedState()) {
      this.triggerSolvedVictory();
    }
  }

  checkSolvedState() {
    return this.currentOrder.every((val, idx) => val === this.correctOrder[idx]);
  }

  solveInstantly() {
    this.currentOrder = [...this.correctOrder];
    this.render();
    this.triggerSolvedVictory();
  }

  triggerSolvedVictory() {
    this.isSolved = true;
    sounds.playChime();
    this.statusText.textContent = "✨ Beautiful! Our picture is complete, Archita! ✨";
    this.statusText.style.color = "var(--accent-gold)";
    Array.from(this.container.children).forEach(tile => tile.classList.add('tile-solved'));
  }
}

/* ==========================================================================
   Couple Quiz Engine (Original Slide 5 -> Now Slide 11)
   ========================================================================== */
class CoupleQuizEngine {
  constructor() {
    this.questions = CONFIG.quizQuestions;
    this.currentIndex = 0;
    this.score = 0;

    this.counterEl = document.getElementById('quiz-question-counter');
    this.scoreEl = document.getElementById('quiz-score-tracker');
    this.questionTitleEl = document.getElementById('quiz-question-title');
    this.optionsGridEl = document.getElementById('quiz-options-grid');
    this.feedbackBoxEl = document.getElementById('quiz-feedback-box');
    this.btnNext = document.getElementById('btn-quiz-next');

    this.btnNext.addEventListener('click', () => this.nextQuestion());
    this.renderQuestion();
  }

  renderQuestion() {
    const q = this.questions[this.currentIndex];
    this.counterEl.textContent = `Question ${this.currentIndex + 1} of ${this.questions.length}`;
    this.scoreEl.textContent = `Score: ${this.score}`;
    this.questionTitleEl.textContent = q.question;

    this.optionsGridEl.innerHTML = '';
    this.feedbackBoxEl.classList.add('hidden');
    this.btnNext.classList.add('hidden');

    q.options.forEach((optText, optIdx) => {
      const btn = document.createElement('button');
      btn.className = 'quiz-option-btn';
      btn.textContent = optText;
      btn.addEventListener('click', () => this.handleAnswer(optIdx, btn));
      this.optionsGridEl.appendChild(btn);
    });
  }

  handleAnswer(selectedIdx, clickedBtn) {
    const q = this.questions[this.currentIndex];
    const allBtns = this.optionsGridEl.querySelectorAll('.quiz-option-btn');
    allBtns.forEach(btn => btn.disabled = true);

    if (selectedIdx === q.correct) {
      this.score++;
      clickedBtn.classList.add('correct');
      sounds.playChime();
      this.feedbackBoxEl.innerHTML = `<strong>Correct! ❤️</strong> ${q.note}`;
    } else {
      clickedBtn.classList.add('wrong');
      allBtns[q.correct]?.classList.add('correct');
      sounds.playSoftRustle();
      this.feedbackBoxEl.innerHTML = `<strong>Aww! 🥺</strong> ${q.note}`;
    }

    this.scoreEl.textContent = `Score: ${this.score}`;
    this.feedbackBoxEl.classList.remove('hidden');

    if (this.currentIndex < this.questions.length - 1) {
      this.btnNext.textContent = "Next Question ➔";
      this.btnNext.classList.remove('hidden');
    } else {
      this.btnNext.textContent = "Quiz Completed! Proceed to Puzzle ➔";
      this.btnNext.classList.remove('hidden');
    }
  }

  nextQuestion() {
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
      this.renderQuestion();
    } else {
      // Photo Puzzle is now Page 12
      session.goTo(12);
    }
  }
}

/* ==========================================================================
   Pop-Pop Photos Explosion & Lightbox (Original Slide 9 -> Now Slide 15)
   ========================================================================== */
function triggerPhotoPopExplosion() {
  const container = document.getElementById('photo-pop-gallery');
  if (!container || container.dataset.loaded === 'true') return;
  container.dataset.loaded = 'true';

  container.innerHTML = '';
  sounds.playChime();

  CONFIG.galleryPhotos.forEach((photo, idx) => {
    const rot = ((idx % 3) - 1) * 3;
    const card = document.createElement('div');
    card.className = 'pop-photo-item';
    card.style.setProperty('--rot', `${rot}deg`);
    card.innerHTML = `
      <img src="${photo.url}" alt="${photo.caption}" loading="lazy">
      <div class="pop-photo-caption">${photo.caption}</div>
    `;

    // Staggered pop effect
    setTimeout(() => {
      card.classList.add('popped');
      sounds.playSoftRustle();
    }, idx * 130);

    card.addEventListener('click', () => {
      openLightbox(photo.url, photo.caption);
    });

    container.appendChild(card);
  });
}

function openLightbox(imgUrl, caption) {
  const lightbox = document.getElementById('photo-lightbox');
  const lbImg = document.getElementById('lightbox-enlarged-img');
  const lbCaption = document.getElementById('lightbox-caption-text');

  lbImg.src = imgUrl;
  lbCaption.textContent = caption;
  lightbox.classList.remove('hidden');
  sounds.playChime();
}

function closeLightbox() {
  const lightbox = document.getElementById('photo-lightbox');
  lightbox.classList.add('hidden');
}

/* ==========================================================================
   Helper: SVG Rose Generator for New Page 3 (Room 4 - Endless Rose Garden)
   ========================================================================== */
function createRoseSvgMarkup(palette) {
  return `
    <svg viewBox="0 0 64 64" width="100%" height="100%" aria-hidden="true">
      <circle cx="32" cy="32" r="26" fill="${palette.outer}" opacity="0.92"/>
      <path d="M16 28 C16 14, 48 14, 48 28 C52 42, 38 54, 32 52 C26 54, 12 42, 16 28 Z" fill="${palette.mid}"/>
      <path d="M22 30 C20 20, 44 20, 42 30 C44 40, 34 46, 32 45 C30 46, 20 40, 22 30 Z" fill="${palette.inner}"/>
      <path d="M27 31 C27 25, 37 25, 37 31 C37 36, 32 39, 32 39 C32 39, 27 36, 27 31 Z" fill="${palette.core}"/>
      <ellipse cx="26" cy="24" rx="5" ry="2.5" transform="rotate(-20 26 24)" fill="rgba(255,255,255,0.45)"/>
    </svg>
  `;
}

/* ==========================================================================
   DOM Initialization & Event Bindings
   ========================================================================== */
let session = null;

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Step-by-Step Session Manager (15 Pages)
  session = new SessionManager();

  // 2. Background Love Tree Canvas
  const treeEngine = new ProceduralLoveTreeEngine('tree-canvas');
  const btnBurstLove = document.getElementById('btn-burst-love');
  if (btnBurstLove) {
    btnBurstLove.addEventListener('click', () => treeEngine.burstBlossoms());
  }
  const btnShowerHearts = document.getElementById('btn-shower-hearts');
  if (btnShowerHearts) {
    btnShowerHearts.addEventListener('click', () => {
      treeEngine.burstBlossoms();
      sounds.playChime();
    });
  }

  // 3. Background Music Toggle (Preserving ./song.mp3.mp3 across all 15 slides)
  const bgAudio = document.getElementById('bg-audio-player');
  const btnToggleMusic = document.getElementById('btn-toggle-music');
  const musicIcon = document.getElementById('music-icon-state');
  const musicStatusText = document.getElementById('music-status-text');
  let userManuallyPausedMusic = false;

  const updateMusicButtonUI = (isPlaying) => {
    if (isPlaying) {
      btnToggleMusic.classList.add('playing');
      musicIcon.textContent = "🔊";
      musicStatusText.textContent = "Playing";
    } else {
      btnToggleMusic.classList.remove('playing');
      musicIcon.textContent = "🎵";
      musicStatusText.textContent = "Play Song";
    }
  };

  const tryAutoStartMusic = () => {
    if (!bgAudio || !bgAudio.paused || userManuallyPausedMusic) return;
    bgAudio.play().then(() => {
      updateMusicButtonUI(true);
    }).catch(() => {
      // Autoplay restriction or missing local file handled gracefully
    });
  };

  btnToggleMusic.addEventListener('click', () => {
    sounds.init();
    if (bgAudio.paused) {
      userManuallyPausedMusic = false;
      bgAudio.play().then(() => {
        updateMusicButtonUI(true);
      }).catch(() => {
        musicStatusText.textContent = "Tap Again";
      });
    } else {
      userManuallyPausedMusic = true;
      bgAudio.pause();
      updateMusicButtonUI(false);
    }
  });

  // =========================================================================
  // NEW PAGE 1 (Room 2): Romantic Heart Reveal Controller
  // =========================================================================
  const heartStage = document.getElementById('heart-reveal-stage');
  const btnHeartPlay = document.getElementById('btn-heart-reveal-play');
  const heartRevealMsg = document.getElementById('heart-reveal-message');
  const heartRevealHint = document.getElementById('heart-reveal-hint');

  if (btnHeartPlay && heartStage) {
    btnHeartPlay.addEventListener('click', () => {
      sounds.playChime();
      tryAutoStartMusic();
      treeEngine.burstBlossoms();
      const isRevealed = heartStage.classList.toggle('revealed');
      if (isRevealed) {
        heartRevealMsg.classList.remove('hidden');
        heartRevealHint.textContent = "✨ Heart awakened! Click Next to watch our Magical Love Tree grow ➔";
      } else {
        heartRevealMsg.classList.add('hidden');
        heartRevealHint.textContent = "Click the play button on the glowing heart to begin the reveal ✨";
      }
    });
  }

  // =========================================================================
  // NEW PAGE 2 (Room 3): Magical Love Tree Controller
  // =========================================================================
  const magicalTreeScene = new MagicalGrowingTreeScene('magical-tree-canvas', 'tree-typing-text');
  const btnMagicalTreeBloom = document.getElementById('btn-magical-tree-bloom');
  if (btnMagicalTreeBloom) {
    btnMagicalTreeBloom.addEventListener('click', () => {
      magicalTreeScene.releaseExtraBlossoms();
      treeEngine.burstBlossoms();
    });
  }

  // =========================================================================
  // NEW PAGE 3 (Room 4): Endless Rose Garden Controller
  // =========================================================================
  const roseGardenField = document.getElementById('rose-garden-field');
  const roseGardenViewport = document.getElementById('rose-garden-viewport');
  const btnRoseBreeze = document.getElementById('btn-rose-breeze');

  const rosePalettes = [
    { outer: '#f8ad9d', mid: '#f4978e', inner: '#f08080', core: '#e56b6f' }, // Peach Coral
    { outer: '#ffccd5', mid: '#ffb3c1', inner: '#ff8fa3', core: '#ff758f' }, // Blush Pink
    { outer: '#fffdf9', mid: '#f8edeb', inner: '#fae1dd', core: '#ecc8af' }  // Warm Ivory
  ];

  // 26 strategically placed roses framing the garden
  const roseCoords = [
    [8, 12, 64], [18, 8, 52], [30, 10, 58], [45, 7, 48], [60, 9, 60], [74, 8, 54], [88, 12, 66],
    [6, 32, 56], [15, 26, 48], [84, 28, 52], [93, 34, 62],
    [7, 54, 62], [16, 62, 50], [85, 58, 54], [92, 54, 60],
    [9, 78, 58], [20, 84, 64], [34, 88, 52], [50, 91, 60], [66, 88, 54], [80, 84, 64], [91, 78, 56],
    [26, 18, 44], [72, 18, 46], [24, 74, 46], [76, 74, 46]
  ];

  if (roseGardenField) {
    roseCoords.forEach(([rx, ry, rsize], idx) => {
      const roseEl = document.createElement('div');
      roseEl.className = 'garden-rose-item';
      const palette = rosePalettes[idx % rosePalettes.length];
      roseEl.style.setProperty('--rx', `${rx}%`);
      roseEl.style.setProperty('--ry', `${ry}%`);
      roseEl.style.setProperty('--rsize', `${rsize}px`);
      roseEl.style.setProperty('--rrot', `${(idx % 5 - 2) * 12}deg`);
      roseEl.style.setProperty('--rdelay', `${(idx * 0.15).toFixed(2)}s`);
      roseEl.innerHTML = createRoseSvgMarkup(palette);
      roseGardenField.appendChild(roseEl);
    });
  }

  const triggerRoseGardenBloom = () => {
    if (!roseGardenField) return;
    const roses = roseGardenField.querySelectorAll('.garden-rose-item');
    roses.forEach((rose, idx) => {
      rose.classList.remove('bloomed');
      setTimeout(() => {
        rose.classList.add('bloomed');
      }, idx * 55);
    });
  };

  if (roseGardenViewport && roseGardenField) {
    roseGardenViewport.addEventListener('mousemove', (e) => {
      const rect = roseGardenViewport.getBoundingClientRect();
      const dx = ((e.clientX - rect.left) / rect.width - 0.5) * 14;
      const dy = ((e.clientY - rect.top) / rect.height - 0.5) * 14;
      roseGardenField.style.transform = `translate(${dx}px, ${dy}px)`;
    });
    roseGardenViewport.addEventListener('mouseleave', () => {
      roseGardenField.style.transform = 'translate(0px, 0px)';
    });
  }

  if (btnRoseBreeze) {
    btnRoseBreeze.addEventListener('click', () => {
      triggerRoseGardenBloom();
      treeEngine.burstBlossoms();
    });
  }

  // =========================================================================
  // NEW PAGE 4 (Room 5): Animated Gift Surprise Controller
  // =========================================================================
  const surpriseBox3d = document.getElementById('surprise-box-3d');
  const surpriseConfettiLayer = document.getElementById('surprise-confetti-layer');
  const surpriseTapSub = document.getElementById('surprise-tap-sub');

  const spawnSurpriseConfetti = () => {
    if (!surpriseConfettiLayer) return;
    surpriseConfettiLayer.innerHTML = '';
    const icons = ['💖', '✨', '🌸', '🎀', '💗', '🎉'];
    for (let i = 0; i < 18; i++) {
      const span = document.createElement('span');
      span.className = 'confetti-piece';
      span.textContent = icons[i % icons.length];
      const angle = (Math.PI * 2 * i) / 18;
      const dist = 75 + Math.random() * 75;
      span.style.setProperty('--cx', `${Math.cos(angle) * dist}px`);
      span.style.setProperty('--cy', `${Math.sin(angle) * dist - 45}px`);
      span.style.setProperty('--cr', `${(Math.random() - 0.5) * 260}deg`);
      surpriseConfettiLayer.appendChild(span);
    }
  };

  const toggleSurpriseBox = () => {
    if (!surpriseBox3d) return;
    const opened = surpriseBox3d.classList.toggle('opened');
    surpriseBox3d.setAttribute('aria-expanded', String(opened));
    if (opened) {
      sounds.playChime();
      spawnSurpriseConfetti();
      if (surpriseTapSub) surpriseTapSub.textContent = "✨ Birthday card unlocked! Tap box again to close ✨";
    } else {
      sounds.playSoftRustle();
      if (surpriseTapSub) surpriseTapSub.textContent = "(tap to open)";
    }
  };

  if (surpriseBox3d) {
    surpriseBox3d.addEventListener('click', toggleSurpriseBox);
    surpriseBox3d.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleSurpriseBox();
      }
    });
  }

  // =========================================================================
  // NEW PAGE 5 (Room 6): From Me to You Controller
  // =========================================================================
  const fromMeTypewriterEl = document.getElementById('from-me-typewriter-text');
  const btnRevealExtraNote = document.getElementById('btn-reveal-extra-note');
  const fromMeExtraNote = document.getElementById('from-me-extra-note');
  const fromMeMessage = "“Every moment spent talking to you feels like my favorite song on repeat. Thank you for bringing such gentle warmth and pure happiness into my world, Archita.” 💖";
  let fromMeTimer = null;

  const startFromMeTypewriter = () => {
    if (!fromMeTypewriterEl) return;
    if (fromMeTimer) clearInterval(fromMeTimer);
    fromMeTypewriterEl.textContent = '';
    let i = 0;
    fromMeTimer = setInterval(() => {
      if (i < fromMeMessage.length) {
        fromMeTypewriterEl.textContent += fromMeMessage.charAt(i);
        i++;
      } else {
        clearInterval(fromMeTimer);
      }
    }, 30);
  };

  if (btnRevealExtraNote && fromMeExtraNote) {
    btnRevealExtraNote.addEventListener('click', () => {
      const isHidden = fromMeExtraNote.classList.toggle('hidden');
      if (!isHidden) {
        sounds.playChime();
        btnRevealExtraNote.textContent = "Hide Secret Promise 💌";
      } else {
        sounds.playSoftRustle();
        btnRevealExtraNote.textContent = "Read My Secret Promise 💌✨";
      }
    });
  }

  // =========================================================================
  // NEW PAGE 6 (Room 7): Magical Love Museum Controller
  // =========================================================================
  const museumArch = document.getElementById('museum-doorway-arch');
  const museumDoorLeaf = document.getElementById('museum-door-leaf');
  const museumStatusLabel = document.getElementById('museum-status-label');
  const museumDots = document.querySelectorAll('#museum-status-dots .m-dot');
  const museumParticles = document.getElementById('museum-floating-particles');

  if (museumParticles) {
    for (let i = 0; i < 14; i++) {
      const dot = document.createElement('span');
      dot.className = 'museum-sparkle-dot';
      dot.style.left = `${10 + Math.random() * 80}%`;
      dot.style.top = `${12 + Math.random() * 76}%`;
      dot.style.animationDelay = `${(Math.random() * 3).toFixed(2)}s`;
      museumParticles.appendChild(dot);
    }
  }

  const toggleMuseumDoor = () => {
    if (!museumArch || !museumDoorLeaf) return;
    const isOpen = museumArch.classList.toggle('door-open');
    museumDoorLeaf.setAttribute('aria-expanded', String(isOpen));
    museumDots.forEach(d => d.classList.toggle('active', isOpen));
    if (!isOpen && museumDots[0]) museumDots[0].classList.add('active');

    if (isOpen) {
      sounds.playChime();
      if (museumStatusLabel) {
        museumStatusLabel.textContent = "✨ The Museum of Archita is now open! Step inside below ✨";
      }
    } else {
      sounds.playSoftRustle();
      if (museumStatusLabel) {
        museumStatusLabel.textContent = "Tap the golden handle to knock & open...";
      }
    }
  };

  if (museumDoorLeaf) {
    museumDoorLeaf.addEventListener('click', toggleMuseumDoor);
    museumDoorLeaf.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleMuseumDoor();
      }
    });
  }

  // Hook page-entry animations to SessionManager step changes
  session.onStepChange((step) => {
    if (step === 3) {
      magicalTreeScene.startExperience();
    } else if (step === 4) {
      triggerRoseGardenBloom();
    } else if (step === 6) {
      startFromMeTypewriter();
    }
  });

  // =========================================================================
  // ORIGINAL SLIDE 3 (Now Page 9): 3D Gift Box Toggle
  // =========================================================================
  const giftBox = document.getElementById('gift-box');
  const giftHint = document.getElementById('gift-status-hint');

  const toggleGiftBox = () => {
    const isOpened = giftBox.classList.toggle('opened');
    if (isOpened) {
      sounds.playChime();
      giftHint.textContent = "Two memories popped out for you! ✨";
    } else {
      sounds.playSoftRustle();
      giftHint.textContent = "Tap on the gift box to open ✨";
    }
  };

  giftBox.addEventListener('click', toggleGiftBox);
  giftBox.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleGiftBox();
    }
  });

  // =========================================================================
  // ORIGINAL SLIDE 4 (Now Page 10): Scratch Card Initializer
  // =========================================================================
  new ScratchCardEngine('scratch-canvas', 'scratch-status-hint');

  // =========================================================================
  // ORIGINAL SLIDE 5 (Now Page 11): Couple Quiz Initializer
  // =========================================================================
  new CoupleQuizEngine();

  // =========================================================================
  // ORIGINAL SLIDE 6 (Now Page 12): Puzzle Initializer
  // =========================================================================
  const puzzle = new PhotoPuzzleGame(
    'puzzle-board',
    'puzzle-preview-image',
    'puzzle-status',
    CONFIG.galleryPhotos[1].url
  );

  document.getElementById('btn-shuffle-puzzle').addEventListener('click', () => {
    sounds.playSoftRustle();
    puzzle.scramble();
  });

  document.getElementById('btn-solve-puzzle').addEventListener('click', () => {
    puzzle.solveInstantly();
  });

  // =========================================================================
  // ORIGINAL SLIDE 7 (Now Page 13): Sealed Origami Envelope
  // =========================================================================
  const envelopeOuter = document.getElementById('envelope-outer');
  const waxSeal = document.getElementById('wax-seal');
  const envelopeHint = document.getElementById('envelope-hint');

  const toggleEnvelope = () => {
    const isOpen = envelopeOuter.classList.toggle('open');
    if (isOpen) {
      sounds.playChime();
      envelopeHint.textContent = "Scroll inside the parchment to read every single word 💌";
    } else {
      sounds.playSoftRustle();
      envelopeHint.textContent = "Click on the red wax seal to open 💌";
    }
  };

  waxSeal.addEventListener('click', toggleEnvelope);
  waxSeal.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleEnvelope();
    }
  });

  // =========================================================================
  // ORIGINAL SLIDE 8 (Now Page 14): Sacred Promises Checklist & SEALED Stamp
  // =========================================================================
  const promisesList = document.getElementById('promises-list');
  const progressFill = document.getElementById('promise-progress-fill');
  const statusLabel = document.getElementById('promise-status-label');
  const stampSealBadge = document.getElementById('stamp-seal-badge');
  const btnGotoFinale = document.getElementById('btn-goto-finale');

  CONFIG.promises.forEach((promiseText, idx) => {
    const li = document.createElement('li');
    li.className = 'promise-item';
    li.innerHTML = `
      <input type="checkbox" id="promise-check-${idx}" class="promise-checkbox" aria-label="Promise: ${promiseText}">
      <label for="promise-check-${idx}" class="promise-text">${promiseText}</label>
    `;
    promisesList.appendChild(li);
  });

  const checkboxes = document.querySelectorAll('.promise-checkbox');
  checkboxes.forEach(cb => {
    cb.addEventListener('change', () => {
      sounds.playSoftRustle();
      const checkedCount = Array.from(checkboxes).filter(c => c.checked).length;
      const total = checkboxes.length;
      const pct = (checkedCount / total) * 100;

      progressFill.style.width = `${pct}%`;
      statusLabel.textContent = `${checkedCount} of ${total} Promises Sealed`;

      if (checkedCount === total) {
        sounds.playChime();
        stampSealBadge.classList.remove('hidden');
        btnGotoFinale.disabled = false;
      } else {
        stampSealBadge.classList.add('hidden');
        btnGotoFinale.disabled = true;
      }
    });
  });

  btnGotoFinale.addEventListener('click', () => {
    session.goTo(15);
  });

  // =========================================================================
  // 10. Lightbox Modal Event Handlers
  // =========================================================================
  const btnCloseLightbox = document.getElementById('btn-close-lightbox');
  const lightbox = document.getElementById('photo-lightbox');

  btnCloseLightbox.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });
});