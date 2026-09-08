/**
 * CORE // PREMIER MULTI-GAME PLATFORM
 * Client Architecture & Interactive Engine
 * Aesthetic: Confident, Silent, Powerful, Minimal, Technical.
 */

(function () {
  'use strict';

  // Strict Global Loader Endpoint
  const CORE_LOADER_SNIPPET = 'loadstring(game:HttpGet("https://getcore.gg/loader.lua"))()';

  // Game Instances Database (Strict Format: CORE // [GAME])
  const INSTANCES = [
      {
      id: 'tds',
      title: 'CORE // TOWER DEFENSE',
      game: 'Tower Defense Simulator',
      category: 'strategy',
      genre: 'Strategy / Tower Defense',
      image: './assets/TDS-GPY4yJXr.png',
      version: 'v1.9.5',
      modules: 31,
      status: 'OPERATIONAL',
      statusType: 'normal',
      ping: '9ms',
      features: ['Auto Strat Player', 'Auto Upgrade Optimal', 'Smart Placement Grid', 'Wave Speedup Sync', 'Auto Leave & Rejoin', 'Loot Telemetry']
    },
    {
      id: 'rivals',
      title: 'CORE // RIVALS',
      game: 'Rivals',
      category: 'competitive',
      genre: 'Competitive FPS',
      image: './assets/Rivals-DQS_IRqX.png',
      version: 'v2.8.4',
      modules: 42,
      status: 'OPERATIONAL',
      statusType: 'normal',
      ping: '8ms',
      features: ['Silent Aim Engine', 'Hitbox Multiplier', 'Desync Bypass', 'Chams Wallhack', 'Velocity Prediction', 'FOV Customizer', 'Triggerbot', 'Auto Reload']
    },
    {
      id: 'arsenal',
      title: 'CORE // ARSENAL',
      game: 'Arsenal',
      category: 'competitive',
      genre: 'Competitive FPS',
      image: './assets/Arsenal-xLzPwFr9.png',
      version: 'v3.1.0',
      modules: 38,
      status: 'OPERATIONAL',
      statusType: 'normal',
      ping: '11ms',
      features: ['Silent Aim', 'Kill All Teleport', 'Fast Fire Multiplier', 'Wallbang Hook', 'ESP Box & Bones', 'Infinite Ammo', 'No Recoil / Spread']
    },
    {
      id: 'bloxburg',
      title: 'CORE // BLOXBURG',
      game: 'Bloxburg',
      category: 'simulator',
      genre: 'Life Simulator',
      image: './assets/BloxBurg-lhpV0gmz.png',
      version: 'v2.1.2',
      modules: 26,
      status: 'OPERATIONAL',
      statusType: 'normal',
      ping: '14ms',
      features: ['Auto Pizza Delivery', 'Instant Build Teleport', 'Mood Auto-Refill', 'Fast Worker AI', 'Anti-AFK Core', 'Vehicle Speed Mod']
    },
    {
      id: 'fish-it',
      title: 'CORE // FISH IT',
      game: 'Fish It / Fisch',
      category: 'simulator',
      genre: 'Adventure Simulator',
      image: './assets/FishIt-Chrjc924.png',
      version: 'v2.4.0',
      modules: 29,
      status: 'OPERATIONAL',
      statusType: 'normal',
      ping: '12ms',
      features: ['Instant Auto Catch', 'Perfect Shake Clicker', 'Rarity Filter', 'Auto Sell Remote', 'Zone Teleport', 'Infinite Rod Cast']
    },
    {
      id: 'counter-blox',
      title: 'CORE // COUNTER BLOX',
      game: 'Counter Blox',
      category: 'competitive',
      genre: 'Tactical Shooter',
      image: './assets/CounterBlox-Dl9uUmol.png',
      version: 'v2.6.2',
      modules: 36,
      status: 'OPERATIONAL',
      statusType: 'normal',
      ping: '7ms',
      features: ['Backtrack Engine (200ms)', 'Silent Aim Angle', 'Bunnyhop Auto', 'Skin Changer Sync', 'Defuse ESP', 'Sound ESP Radar']
    },
    {
      id: 'ftf',
      title: 'CORE // FLEE THE FACILITY',
      game: 'Flee the Facility',
      category: 'survival',
      genre: 'Horror Survival',
      image: './assets/FTF-CpTjKoWK.png',
      version: 'v1.7.8',
      modules: 22,
      status: 'OPERATIONAL',
      statusType: 'normal',
      ping: '10ms',
      features: ['Auto Hack PC (No Fail)', 'Beast ESP & Distance', 'Freeze Pod ESP', 'Instant Crawl Bypass', 'Speed Multiplier', 'Door Auto-Unlock']
    },
    {
      id: 'solo-hunters',
      title: 'CORE // SOLO HUNTERS',
      game: 'Solo Hunters',
      category: 'survival',
      genre: 'Action RPG',
      image: './assets/SoloHunters-DguKlPXF.png',
      version: 'v2.0.1',
      modules: 28,
      status: 'OPERATIONAL',
      statusType: 'normal',
      ping: '13ms',
      features: ['Auto Dungeon Clear', 'Instant Mob Magnet', 'Godmode Bypass', 'Auto Skill Rotation', 'Loot Auto Collector', 'Boss ESP']
    },
    {
      id: 'zombie-rush',
      title: 'CORE // ZOMBIE RUSH',
      game: 'Zombie Rush',
      category: 'survival',
      genre: 'Survival Waves',
      image: './assets/ZombieRush-CeBX7et4.png',
      version: 'v1.5.4',
      modules: 20,
      status: 'OPERATIONAL',
      statusType: 'normal',
      ping: '9ms',
      features: ['Auto Headshot All', 'Infinite Ammo Buff', 'Instant Kill Wave', 'Walkspeed Multiplier', 'Safe Teleport Zone']
    },
    {
      id: 'abyss',
      title: 'CORE // ABYSS',
      game: 'Abyss',
      category: 'survival',
      genre: 'Deep Sea Adventure',
      image: './assets/Abyss-B-8AnJCn.png',
      version: 'v1.4.2',
      modules: 24,
      status: 'OPERATIONAL',
      statusType: 'normal',
      ping: '15ms',
      features: ['Infinite Oxygen', 'Depth Teleport', 'Relic & Ore ESP', 'Instant Mining Remote', 'Submarine Speed Hook']
    },
    {
      id: 'bloxstrike',
      title: 'CORE // BLOXSTRIKE',
      game: 'BloxStrike',
      category: 'competitive',
      genre: 'Tactical Shooter',
      image: './assets/BloxStrike-BFcXB7Uo.png',
      version: 'v2.2.0',
      modules: 33,
      status: 'OPERATIONAL',
      statusType: 'normal',
      ping: '10ms',
      features: ['Silent Aim Assist', 'Recoil Compensator', 'Box & Tracer ESP', 'Grenade Trajectory HUD', 'Triggerbot Precision']
    },
    {
      id: 'flick',
      title: 'CORE // FLICK',
      game: 'Flick',
      category: 'competitive',
      genre: 'Skill Shooter',
      image: './assets/Flick-BjTg-7dU.png',
      version: 'v1.8.6',
      modules: 21,
      status: 'OPERATIONAL',
      statusType: 'normal',
      ping: '8ms',
      features: ['Target Predictor', 'Pixel Aim Assist', 'Micro Adjuster', 'Hit Sounds Mod', 'Custom Crosshair HUD']
    },
    {
      id: 'onetap',
      title: 'CORE // ONE TAP',
      game: 'One Tap',
      category: 'competitive',
      genre: 'Competitive Duel',
      image: './assets/OneTap-DTAXl2pB.png',
      version: 'v2.0.0',
      modules: 25,
      status: 'OPERATIONAL',
      statusType: 'normal',
      ping: '6ms',
      features: ['100% Precision Aim', 'Instant Clicker', 'Anti-Aim Jitter', 'Desync Angles', 'Opponent Ping HUD']
    },
    {
      id: 'speed-key-escape',
      title: 'CORE // SPEED KEYBOARD',
      game: 'Speed Keyboard Escape',
      category: 'strategy',
      genre: 'Skill / Typing',
      image: './assets/SpeedKeyEscape-CF_1W2af.png',
      version: 'v1.2.0',
      modules: 16,
      status: 'OPERATIONAL',
      statusType: 'normal',
      ping: '11ms',
      features: ['Instant Auto Type (WPM 250)', 'Word Predictor AI', 'Trap Avoidance Teleport', 'Speed Bypass']
    },
    {
      id: 'tap-simulator',
      title: 'CORE // TAP SIMULATOR',
      game: 'Tap Simulator',
      category: 'simulator',
      genre: 'Incremental Simulator',
      image: './assets/TapSimulator-Dv3H5boS.png',
      version: 'v1.6.1',
      modules: 22,
      status: 'OPERATIONAL',
      statusType: 'normal',
      ping: '12ms',
      features: ['Multi-Threaded Auto Tap', 'Auto Rebirth Optimal', 'Instant Egg Hatch', 'Super Pet Equip', 'Zone Teleport']
    }
  ];

  /* ==========================================================================
     TOAST NOTIFICATION ENGINE
     ========================================================================== */
  function showToast(message, iconHtml) {
    let container = document.getElementById('toastContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toastContainer';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = (iconHtml || '●') + ' <span>' + message + '</span>';
    container.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  }

  /* ==========================================================================
     CLIPBOARD UTILITY
     ========================================================================== */
  async function copyToClipboard(text, btnElement, successMsg) {
    try {
      await navigator.clipboard.writeText(text);
      showToast(successMsg || 'Command copied to clipboard', '<span style="color:#FF2A42;">[CORE]</span>');
      if (btnElement) {
        const originalText = btnElement.innerHTML;
        btnElement.classList.add('copied');
        btnElement.textContent = 'COPIED';
        setTimeout(() => {
          btnElement.classList.remove('copied');
          btnElement.innerHTML = originalText;
        }, 2000);
      }
    } catch (e) {
      showToast('Clipboard access unavailable', '!');
    }
  }

  /* ==========================================================================
     1. THE SINGULARITY CANVAS (HERO CORE ANIMATION)
     A glowing red singularity core with slow breathing/pulsing animation,
     concentric orbital coordinate rings, inward particle drift, and mouse reaction.
     ========================================================================== */
  function initSingularity() {
    const canvas = document.getElementById('singularityCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = window.devicePixelRatio || 1;
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let time = 0;

    // Particle field orbiting and drifting toward the singularity
    const PARTICLE_COUNT = 65;
    const particles = [];

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect();
      width = rect.width || 800;
      height = rect.height || 800;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    }

    window.addEventListener('resize', resize);
    resize();

    // Mouse parallax tracking
    window.addEventListener('pointermove', (e) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      targetMouseX = (e.clientX - centerX) / centerX;
      targetMouseY = (e.clientY - centerY) / centerY;
    }, { passive: true });

    // Initialize particles
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = 90 + Math.random() * 260;
      particles.push({
        angle: angle,
        dist: dist,
        speed: 0.003 + Math.random() * 0.007,
        radialSpeed: 0.2 + Math.random() * 0.4,
        size: 1 + Math.random() * 1.8,
        alpha: 0.2 + Math.random() * 0.6
      });
    }

    function render() {
      time += 0.016;

      // Smooth mouse damping
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const cx = width / 2 + mouseX * 24;
      const cy = height / 2 + mouseY * 24;

      // Breathing scale calculation (slow, deep breath: ~5-6s cycle)
      const breath = Math.sin(time * 1.1);
      const pulseRadius = 78 + breath * 4;
      const auraRadius = 140 + breath * 12;

      // 1. Outermost Ambient Volumetric Halo
      const ambientGlow = ctx.createRadialGradient(cx, cy, 30, cx, cy, auraRadius + 80);
      ambientGlow.addColorStop(0, 'rgba(229, 20, 46, 0.28)');
      ambientGlow.addColorStop(0.35, 'rgba(229, 20, 46, 0.10)');
      ambientGlow.addColorStop(0.7, 'rgba(229, 20, 46, 0.02)');
      ambientGlow.addColorStop(1, 'transparent');
      ctx.fillStyle = ambientGlow;
      ctx.beginPath();
      ctx.arc(cx, cy, auraRadius + 80, 0, Math.PI * 2);
      ctx.fill();

      // 2. Concentric Orbit Rings (Rotating geometric coordinates)
      ctx.save();
      ctx.translate(cx, cy);

      // Ring 1: Inner reticle ring
      ctx.strokeStyle = 'rgba(255, 42, 66, 0.35)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(0, 0, pulseRadius + 32, 0, Math.PI * 2);
      ctx.stroke();

      // Ring 2: Segmented dashing outer ring (Counter-clockwise rotation)
      ctx.save();
      ctx.rotate(-time * 0.15);
      ctx.strokeStyle = 'rgba(255, 42, 66, 0.25)';
      ctx.lineWidth = 1.2;
      ctx.setLineDash([12, 18, 4, 18]);
      ctx.beginPath();
      ctx.arc(0, 0, pulseRadius + 75, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      // Ring 3: Deep outer coordinate ring with tick marks
      ctx.save();
      ctx.rotate(time * 0.08);
      ctx.strokeStyle = 'rgba(51, 51, 51, 0.5)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 8]);
      ctx.beginPath();
      ctx.arc(0, 0, pulseRadius + 120, 0, Math.PI * 2);
      ctx.stroke();

      // 4 Cardinal Tech Ticks
      ctx.strokeStyle = 'rgba(229, 20, 46, 0.5)';
      ctx.setLineDash([]);
      for (let a = 0; a < 4; a++) {
        ctx.rotate(Math.PI / 2);
        ctx.beginPath();
        ctx.moveTo(pulseRadius + 114, 0);
        ctx.lineTo(pulseRadius + 126, 0);
        ctx.stroke();
      }
      ctx.restore();

      ctx.restore();

      // 3. Orbiting Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.angle += p.speed;
        p.dist -= p.radialSpeed * 0.3;
        if (p.dist < pulseRadius + 5) {
          p.dist = 260 + Math.random() * 60;
          p.angle = Math.random() * Math.PI * 2;
        }

        const px = cx + Math.cos(p.angle) * p.dist;
        const py = cy + Math.sin(p.angle) * p.dist * 0.85; // Slight isometric slant

        ctx.fillStyle = `rgba(255, 59, 83, ${p.alpha * (p.dist / 260)})`;
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // 4. Accretion Disk / Crimson Corona Rim Light
      const corona = ctx.createRadialGradient(cx, cy, pulseRadius - 12, cx, cy, pulseRadius + 28);
      corona.addColorStop(0, 'rgba(229, 20, 46, 0)');
      corona.addColorStop(0.4, 'rgba(255, 42, 66, 0.85)');
      corona.addColorStop(0.7, 'rgba(255, 59, 83, 0.45)');
      corona.addColorStop(1, 'rgba(229, 20, 46, 0)');
      ctx.fillStyle = corona;
      ctx.beginPath();
      ctx.arc(cx, cy, pulseRadius + 28, 0, Math.PI * 2);
      ctx.fill();

      // 5. The Singularity Core Horizon (Deep obsidian void sphere with sharp crimson crescent rim)
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, pulseRadius, 0, Math.PI * 2);
      ctx.fillStyle = '#050505';
      ctx.fill();

      // Inner horizon shadow
      const innerShadow = ctx.createRadialGradient(cx - pulseRadius * 0.25, cy - pulseRadius * 0.25, pulseRadius * 0.1, cx, cy, pulseRadius);
      innerShadow.addColorStop(0, '#090909');
      innerShadow.addColorStop(0.7, '#020202');
      innerShadow.addColorStop(1, '#000000');
      ctx.fillStyle = innerShadow;
      ctx.beginPath();
      ctx.arc(cx, cy, pulseRadius, 0, Math.PI * 2);
      ctx.fill();

      // Crescent Rim Highlight (Stylized glowing edge)
      ctx.strokeStyle = 'rgba(255, 42, 66, 0.95)';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.arc(cx, cy, pulseRadius - 1, Math.PI * 0.7, Math.PI * 1.9);
      ctx.stroke();

      ctx.restore();

      requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
  }

  /* ==========================================================================
     2. IN-GAME CLIENT UI SIMULATOR ("THE ENGINE")
     Interactive digital twin faithful to the provided Luau CoreRed code
     ========================================================================== */
  function initSimulator() {
    const simTabs = document.querySelectorAll('.sim-tab-btn');
    const simContents = document.querySelectorAll('.sim-tab-content');
    const breadcrumbTab = document.getElementById('simBreadcrumbTab');
    const runtimeVal = document.getElementById('simRuntimeVal');
    const pingVal = document.getElementById('simPingVal');
    const fpsVal = document.getElementById('simFpsVal');
    const loggerBox = document.getElementById('simLogOutput');
    const themeBtn = document.getElementById('simThemeBtn');
    const simWindow = document.getElementById('simWindowFrame');

    // Tab Switching
    simTabs.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTab = btn.dataset.tab;
        simTabs.forEach(b => b.classList.remove('active'));
        simContents.forEach(c => c.classList.remove('active'));

        btn.classList.add('active');
        const targetContent = document.getElementById('simTab_' + targetTab);
        if (targetContent) targetContent.classList.add('active');

        if (breadcrumbTab) breadcrumbTab.textContent = targetTab.toUpperCase();
        addLogEntry('NAV', 'Navigated to ' + targetTab.toUpperCase() + ' viewport');
      });
    });

    // Session Runtime Counter
    let secondsElapsed = 3682; // starts at ~1h 1m 22s
    setInterval(() => {
      secondsElapsed++;
      const h = Math.floor(secondsElapsed / 3600);
      const m = Math.floor((secondsElapsed % 3600) / 60);
      const s = secondsElapsed % 60;
      if (runtimeVal) {
        runtimeVal.textContent = `${h}h ${m}m ${s}s`;
      }
    }, 1000);

    // Live Ping and FPS jitter for realistic in-game engine feel
    setInterval(() => {
      if (pingVal) {
        const jitterPing = Math.floor(8 + Math.random() * 5);
        pingVal.textContent = jitterPing + ' ms';
      }
      if (fpsVal) {
        const jitterFps = Math.floor(59 + Math.random() * 2);
        fpsVal.textContent = jitterFps + ' FPS';
      }
    }, 2200);

    // Interactive Toggles
    const toggles = document.querySelectorAll('.sim-toggle');
    toggles.forEach(toggle => {
      toggle.addEventListener('click', () => {
        const isChecked = toggle.classList.toggle('checked');
        const toggleName = toggle.dataset.name || 'Module';
        addLogEntry(
          isChecked ? 'ENABLE' : 'DISABLE',
          `${toggleName} set to ${isChecked ? 'TRUE' : 'FALSE'}`,
          isChecked ? 'crimson' : ''
        );
      });
    });

    // Interactive Sliders
    const sliders = document.querySelectorAll('.sim-slider-track');
    sliders.forEach(slider => {
      const fill = slider.querySelector('.sim-slider-fill');
      const valDisplay = slider.parentElement.querySelector('.sim-slider-val');
      const min = parseFloat(slider.dataset.min || 0);
      const max = parseFloat(slider.dataset.max || 100);
      const unit = slider.dataset.unit || '';

      function setSliderPos(clientX) {
        const rect = slider.getBoundingClientRect();
        const rel = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
        const val = Math.round(min + rel * (max - min));
        if (fill) fill.style.width = (rel * 100) + '%';
        if (valDisplay) valDisplay.textContent = val + unit;
      }

      let isDragging = false;
      slider.addEventListener('pointerdown', (e) => {
        isDragging = true;
        setSliderPos(e.clientX);
      });

      window.addEventListener('pointermove', (e) => {
        if (isDragging) setSliderPos(e.clientX);
      });

      window.addEventListener('pointerup', () => {
        if (isDragging) {
          isDragging = false;
          addLogEntry('PARAM', `Slider adjusted`);
        }
      });
    });

    // Segmented License Tiers inside the Simulator
    const tierBtns = document.querySelectorAll('.sim-switcher-btn');
    const tierData = {
      free: {
        name: 'Free Key',
        badge: '$0 forever',
        btnText: 'Current Default Tier (Keysystem)',
        perks: ['Access to free scripts', 'Standard community support', 'Keysystem access']
      },
      premium: {
        name: 'Premium Key',
        badge: 'one-time access',
        btnText: 'Get Premium • https://getcore.gg',
        perks: ['Every current and future script', 'No keysystem required', 'Priority support, around the clock', 'Premium Discord role']
      },
      booster: {
        name: 'Booster Key',
        badge: 'until boost runs out',
        btnText: 'Boost Server • Copy Invite Link',
        perks: ['Every current and future script', 'No keysystem required', 'Priority support, around the clock', 'Special Discord role']
      }
    };

    tierBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const tier = btn.dataset.tier;
        tierBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const info = tierData[tier];
        if (!info) return;

        const titleEl = document.getElementById('simTierTitle');
        const badgeEl = document.getElementById('simTierBadge');
        const perksEl = document.getElementById('simTierPerks');
        const ctaBtn = document.getElementById('simTierCta');

        if (titleEl) titleEl.textContent = info.name;
        if (badgeEl) badgeEl.textContent = info.badge;
        if (ctaBtn) ctaBtn.textContent = info.btnText;

        if (perksEl) {
          perksEl.innerHTML = info.perks.map(p => `
            <div class="sim-perk-row">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polyline points="20 6 9 17 4 12"/></svg>
              <span>${p}</span>
            </div>
          `).join('');
        }
        addLogEntry('LICENSE', `Inspecting entitlement: ${info.name}`);
      });
    });

    // Theme Switcher (Dark / Light toggle faithfully mirroring Lua applyTheme)
    let isLightMode = false;
    if (themeBtn && simWindow) {
      themeBtn.addEventListener('click', () => {
        isLightMode = !isLightMode;
        themeBtn.innerHTML = isLightMode
          ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>'
          : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';

        simWindow.style.background = isLightMode ? '#F2F4F8' : '#0F0F12';
        simWindow.style.borderColor = isLightMode ? '#D8DEEC' : '#30303C';
        showToast(isLightMode ? 'Simulator: Light Mode active' : 'Simulator: CoreRed Void active', '◐');
      });
    }

    // Logger Utilities
    function addLogEntry(tag, msg, colorClass) {
      if (!loggerBox) return;
      const now = new Date();
      const timeStr = now.toTimeString().split(' ')[0];
      const row = document.createElement('div');
      row.className = 'sim-log-row ' + (colorClass || '');
      row.innerHTML = `<span class="log-time">[${timeStr}]</span> <strong>[${tag}]</strong> ${msg}`;
      loggerBox.appendChild(row);
      loggerBox.scrollTop = loggerBox.scrollHeight;
    }

    // Clear and Copy Log Buttons
    const clearLogBtn = document.getElementById('simClearLogBtn');
    const copyLogBtn = document.getElementById('simCopyLogBtn');
    if (clearLogBtn && loggerBox) {
      clearLogBtn.addEventListener('click', () => {
        loggerBox.innerHTML = '';
        addLogEntry('SYS', 'Telemetry stream cleared');
      });
    }
    if (copyLogBtn && loggerBox) {
      copyLogBtn.addEventListener('click', () => {
        const text = loggerBox.innerText;
        copyToClipboard(text, copyLogBtn, 'System logs copied');
      });
    }

    // Auto-stream realistic diagnostics in the background
    const randomTelemetry = [
      { tag: 'KERNEL', msg: 'Roblox VM memory hook intact (0x7FFE2)', color: 'green' },
      { tag: 'SECURITY', msg: 'Core desync bypass active (0 detections)', color: '' },
      { tag: 'RENDER', msg: 'Direct3D frame hook locked at 60 FPS', color: 'green' },
      { tag: 'PACKET', msg: 'RemoteEvent telemetry filtered safely', color: '' },
      { tag: 'STATUS', msg: 'License validation heartbeats acknowledged', color: 'crimson' }
    ];

    let tIndex = 0;
    setInterval(() => {
      const item = randomTelemetry[tIndex % randomTelemetry.length];
      addLogEntry(item.tag, item.msg, item.color);
      tIndex++;
    }, 4500);
  }

  /* ==========================================================================
     3. SUPPORTED INSTANCES / GAME LIBRARY GRID
     Filter tabs, live search, card hover, and inspect modal drawer
     ========================================================================== */
  function initLibrary() {
    const grid = document.getElementById('libraryGrid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const searchInput = document.getElementById('librarySearch');
    const countDisplay = document.getElementById('libraryCountDisplay');

    let activeFilter = 'all';
    let searchQuery = '';

    function renderCards() {
      if (!grid) return;
      grid.innerHTML = '';

      const filtered = INSTANCES.filter(inst => {
        const matchesFilter = activeFilter === 'all' || inst.category === activeFilter;
        const matchesSearch = searchQuery === '' ||
          inst.title.toLowerCase().includes(searchQuery) ||
          inst.game.toLowerCase().includes(searchQuery) ||
          inst.genre.toLowerCase().includes(searchQuery);
        return matchesFilter && matchesSearch;
      });

      if (countDisplay) {
        countDisplay.textContent = `${filtered.length} INSTANCES`;
      }

      if (filtered.length === 0) {
        grid.innerHTML = `
          <div style="grid-column: 1 / -1; padding: 60px 20px; text-align: center; color: var(--text-muted); font-family: var(--font-mono);">
            [NO MATCHING INSTANCES LOCATED FOR QUERY: "${searchQuery.toUpperCase()}"]
          </div>
        `;
        return;
      }

      filtered.forEach(inst => {
        const card = document.createElement('article');
        card.className = 'instance-card';
        card.setAttribute('data-id', inst.id);

        const coverImageHtml = inst.image
          ? `<img src="${inst.image}" alt="${inst.title}" loading="lazy">`
          : `<div style="width:100%;height:100%;display:grid;place-items:center;background:#101014;color:#444;font-family:var(--font-mono);font-size:0.8rem;letter-spacing:0.1em;">CORE // ASSET</div>`;

        card.innerHTML = `
          <div class="instance-cover">
            ${coverImageHtml}
            <div class="instance-overlay"></div>
            <div class="instance-status">
              <span class="instance-status-dot"></span>
              <span>ONLINE</span>
            </div>
            <div class="instance-genre">${inst.genre}</div>
          </div>
          <div class="instance-content">
            <h3 class="instance-title">${inst.title}</h3>
            <div class="instance-meta">
              <span>PATCH: <strong class="meta-val">${inst.version}</strong></span>
              <span>MODULES: <strong class="meta-val">${inst.modules}</strong></span>
              <span>LATENCY: <strong class="meta-val">${inst.ping}</strong></span>
            </div>
            <div class="instance-footer">
              <button class="btn btn-secondary instance-btn inspect-btn" type="button" data-id="${inst.id}">
                [ INSPECT SPEC ]
              </button>
            </div>
          </div>
        `;

        grid.appendChild(card);
      });

      // Bind inspect buttons
      document.querySelectorAll('.inspect-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const id = btn.dataset.id;
          openInspectModal(id);
        });
      });
    }

    // Filter Buttons
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeFilter = btn.dataset.filter || 'all';
        renderCards();
      });
    });

    // Search Input
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        renderCards();
      });
    }

    renderCards();
  }

  /* ==========================================================================
     4. INSTANCE INSPECTION MODAL DRAWER
     ========================================================================== */
  function openInspectModal(instanceId) {
    const inst = INSTANCES.find(i => i.id === instanceId);
    if (!inst) return;

    let backdrop = document.getElementById('inspectModalBackdrop');
    if (!backdrop) {
      backdrop = document.createElement('div');
      backdrop.id = 'inspectModalBackdrop';
      backdrop.className = 'modal-backdrop';
      document.body.appendChild(backdrop);
    }

    backdrop.innerHTML = `
      <div class="modal-dialog">
        <div class="modal-header">
          <div class="modal-title">${inst.title}</div>
          <button class="modal-close" id="modalCloseBtn" aria-label="Close modal">&times;</button>
        </div>
        <div class="modal-body">
          <div class="modal-grid-info">
            <div class="modal-info-tile">
              <span class="lbl">Engine Status</span>
              <span class="val" style="color:#2ECC71;">OPERATIONAL</span>
            </div>
            <div class="modal-info-tile">
              <span class="lbl">Patch Version</span>
              <span class="val">${inst.version}</span>
            </div>
            <div class="modal-info-tile">
              <span class="lbl">Detection Risk</span>
              <span class="val" style="color:#FF465A;">UNDETECTED</span>
            </div>
          </div>

          <div>
            <span class="tech-label" style="display:block; margin-bottom:10px;">Supported Modules & Hooks (${inst.features.length})</span>
            <div class="modal-modules-list">
              ${inst.features.map(f => `<span class="modal-module-chip">● ${f}</span>`).join('')}
            </div>
          </div>

          <div>
            <span class="tech-label" style="display:block; margin-bottom:8px;">Direct Execution String</span>
            <div class="command-row" style="background:#090909; padding:10px 14px;">
              <span class="command-prompt">&gt;</span>
              <code class="command-code" style="font-size:0.75rem;">${CORE_LOADER_SNIPPET}</code>
              <button class="copy-btn btn-sm" id="modalCopyLoaderBtn" type="button">COPY</button>
            </div>
          </div>

          <div style="display:flex; justify-content:flex-end; gap:10px; margin-top:10px;">
            <a class="btn btn-primary btn-sm" href="https://discord.gg/corehub" target="_blank" rel="noopener">
              JOIN COMMUNITY DISCORD
            </a>
          </div>
        </div>
      </div>
    `;

    backdrop.classList.add('open');

    // Close handler
    const closeBtn = document.getElementById('modalCloseBtn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => backdrop.classList.remove('open'));
    }
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) backdrop.classList.remove('open');
    });

    // Copy handler inside modal
    const modalCopyBtn = document.getElementById('modalCopyLoaderBtn');
    if (modalCopyBtn) {
      modalCopyBtn.addEventListener('click', () => {
        copyToClipboard(CORE_LOADER_SNIPPET, modalCopyBtn, `Copied loader for ${inst.title}`);
      });
    }
  }

  /* ==========================================================================
     5. GLOBAL BUTTON ACTIONS (COPY LOADER, SCROLL SPY)
     ========================================================================== */
  function initGlobalActions() {
    // Primary CTAs: Copy Loader
    const copyBtns = [
      document.getElementById('navInitBtn'),
      document.getElementById('heroInitBtn'),
      document.getElementById('terminalCopyBtn'),
      document.getElementById('freeTierCopyBtn')
    ];

    copyBtns.forEach(btn => {
      if (btn) {
        btn.addEventListener('click', () => {
          copyToClipboard(CORE_LOADER_SNIPPET, btn, 'CORE loader copied to clipboard');
        });
      }
    });

    // Terminal Input click-to-copy
    const termCode = document.getElementById('terminalCommandCode');
    if (termCode) {
      termCode.addEventListener('click', () => {
        copyToClipboard(CORE_LOADER_SNIPPET, null, 'CORE loader copied to clipboard');
      });
    }

    // Navigation Fixed Header on Scroll
    const siteNav = document.getElementById('siteNav');
    window.addEventListener('scroll', () => {
      if (siteNav) {
        siteNav.classList.toggle('scrolled', window.scrollY > 20);
      }
    }, { passive: true });

    // Technical FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
      const trigger = item.querySelector('.faq-trigger');
      const content = item.querySelector('.faq-content');
      if (trigger && content) {
        trigger.addEventListener('click', () => {
          const isOpen = item.classList.contains('active');
          faqItems.forEach(other => {
            other.classList.remove('active');
            const otherContent = other.querySelector('.faq-content');
            if (otherContent) otherContent.style.maxHeight = null;
          });
          if (!isOpen) {
            item.classList.add('active');
            content.style.maxHeight = content.scrollHeight + 'px';
          }
        });
      }
    });

    // Mobile Navigation Drawer Toggle
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinks = document.getElementById('navLinks');
    if (mobileToggle && navLinks) {
      mobileToggle.addEventListener('click', () => {
        const isOpen = navLinks.style.display === 'flex';
        navLinks.style.display = isOpen ? 'none' : 'flex';
        if (!isOpen) {
          navLinks.style.position = 'absolute';
          navLinks.style.top = 'var(--header-height)';
          navLinks.style.left = '0';
          navLinks.style.right = '0';
          navLinks.style.background = '#090909';
          navLinks.style.flexDirection = 'column';
          navLinks.style.padding = '24px';
          navLinks.style.borderBottom = '1px solid var(--steel)';
        }
      });
    }
  }

  /* ==========================================================================
     6. DISCORD TELEMETRY WIDGET INTEGRATION
     ========================================================================== */
  async function initDiscordTelemetry() {
    const onlineEl = document.getElementById('discordOnlineCount');
    const serverNameEl = document.getElementById('discordServerName');
    const avatarStack = document.getElementById('discordAvatarStack');
    const inviteBtn = document.getElementById('discordInviteBtn');

    try {
      const res = await fetch('https://discord.com/api/guilds/1453469070534905969/widget.json');
      if (!res.ok) throw new Error('Widget status: ' + res.status);
      const data = await res.json();

      if (serverNameEl && data.name) serverNameEl.textContent = data.name;
      if (onlineEl && typeof data.presence_count === 'number') {
        onlineEl.textContent = `${data.presence_count.toLocaleString()} ONLINE NOW`;
      }
      if (inviteBtn && data.instant_invite) {
        inviteBtn.href = data.instant_invite;
      }
      if (avatarStack && data.members && data.members.length) {
        avatarStack.innerHTML = '';
        data.members.slice(0, 4).forEach(m => {
          const img = document.createElement('img');
          img.src = m.avatar_url;
          img.alt = m.username || 'Discord user';
          img.loading = 'lazy';
          avatarStack.appendChild(img);
        });
      }
    } catch (e) {
      if (onlineEl) onlineEl.textContent = '2,400+ ONLINE NOW';
      if (serverNameEl) serverNameEl.textContent = 'CORE COMMUNITY';
    }
  }

  /* ==========================================================================
     INITIALIZATION SEQUENCE
     ========================================================================== */
  document.addEventListener('DOMContentLoaded', () => {
    initSingularity();
    initSimulator();
    initLibrary();
    initGlobalActions();
    initDiscordTelemetry();
  });
})();
