/**
 * Salon-Themed Digital Rain Animation
 * High-performance HTML5 Canvas animation inspired by Matrix rain
 * with luxury salon aesthetic and custom sharp icons
 */

class SalonDigitalRain {
  constructor(options = {}) {
    // Customizable options with defaults
    this.config = {
      // Tiered icon system with weighted frequency
      // Tier 1: Primary (60%) - Most frequent
      tier1Icons: options.tier1Icons || ['scissors_classic', 'straight_razor', 'hair_comb_fine', 'hair_clipper', 'hand_mirror', 'mustache_icon'],

      // Tier 2: Secondary (25%) - Medium frequency
      tier2Icons: options.tier2Icons || ['trimmer_detail', 'beard_comb', 'spray_bottle', 'round_brush', 'shaving_brush', 'aftershave_bottle', 'hair_dryer_minimal'],

      // Tier 3: Accent/Luxury (15%) - Low frequency
      tier3Icons: options.tier3Icons || ['sparkle_dot', 'gold_particle', 'light_streak', 'hair_strand_curve', 'steam_wave', 'glow_circle'],

      // Luxury color palette: all gold tones
      // Luxury color palette: all rich gold tones
      colors: options.colors || [
        '#FFD700',      // Gold
        '#DAA520',      // Goldenrod
        '#B8860B',      // Dark Goldenrod
        '#C5A009',      // Deep Gold
        '#E6BE8A',      // Pale Gold
        '#D4AF37',      // Metallic Gold
      ],

      // Animation parameters
      // Animation parameters (Pixels Per Second)
      // Animation parameters (Pixels Per Second)
      minSpeed: options.minSpeed || 200,      // Reduced for smoothness (less jitter)
      maxSpeed: options.maxSpeed || 200,      // Fixed constant speed
      minSize: options.minSize || 40,
      maxSize: options.maxSize || 80,
      density: options.density || 5.5,        // Increased 10x to 5.5 (550% of screen area)
      minOpacity: options.minOpacity || 0.4,
      maxOpacity: options.maxOpacity || 0.95,
    };

    this.canvas = null;
    this.ctx = null;
    // Singleton Guard: Stop previous instance if running (prevents double-drawing)
    if (window.salonRainInstance) {
      window.salonRainInstance.stop();
    }
    window.salonRainInstance = this;

    this.columns = [];
    this.animationId = null;
    this.isRunning = false;
    this.lastTime = 0;

    // Bind resize handler for cleanup
    this.resizeHandler = this.resize.bind(this);
    window.addEventListener('resize', this.resizeHandler);

    this.scissorImg = new Image();
    this.scissorImg.src = 'assets/scissor.svg';

    this.razorImg = new Image();
    this.razorImg.src = 'assets/razor.svg';

    this.combImg = new Image();
    this.combImg.src = 'assets/comb.svg';

    this.dryerImg = new Image();
    this.dryerImg.src = 'assets/dryer.svg';

    this.sprayImg = new Image();
    this.sprayImg.src = 'assets/spray.svg';

    this.mirrorImg = new Image();
    this.mirrorImg.src = 'assets/mirror.svg';

    this.brushImg = new Image();
    this.brushImg.src = 'assets/brush.svg';

    this.init();
  }

  /**
   * Initialize canvas and start animation
   */
  init() {
    // Create canvas element
    this.canvas = document.createElement('canvas');
    this.canvas.id = 'salon-rain-canvas';
    this.canvas.style.position = 'fixed';
    this.canvas.style.top = '0';
    this.canvas.style.left = '0';
    this.canvas.style.zIndex = '-1';
    this.canvas.style.pointerEvents = 'none';

    // Insert as first element in body to sit behind everything
    document.body.insertBefore(this.canvas, document.body.firstChild);

    this.ctx = this.canvas.getContext('2d', { alpha: true });

    // Handle initial sizing and resizing
    this.resize();
    // Event listeners
    // Removed duplicate listener add here, moved to resizeHandler binding above
    this.start();
  }

  /**
   * Handle canvas resize for responsiveness
   */
  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    // Calculate column width based on average icon size
    const iconWidth = this.config.maxSize * 1.6; // Increased to 1.6 to absolutely prevent overlap
    const numColumns = Math.ceil(this.canvas.width / iconWidth);

    // Calculate rows needed to fill height
    const iconHeight = this.config.maxSize * 2.5; // Increased spacing (reduced density)
    const numRows = Math.ceil(this.canvas.height / iconHeight) + 1; // +1 buffer

    // Initialize items array
    // We overwrite completely on resize to ensure distribution
    this.columns = [];

    for (let c = 0; c < numColumns; c++) {
      for (let r = 0; r < numRows; r++) {
        this.columns.push(this.createItem(c, r, iconHeight));
      }
    }
  }

  /**
   * Create a new rain item with grid-based distribution
   */
  createItem(colIndex, rowIndex, rowHeight) {
    const iconWidth = this.config.maxSize * 1.6; // Match strict resize spacing

    // Uniform X distribution: center of the "lane" - NO JITTER to prevent overlap
    const xPos = (colIndex * iconWidth) + (iconWidth * 0.5);

    // Uniform Y distribution with Stagger
    // Offset every other column by half a row height to break horizontal lines (Brick pattern)
    const stagger = (colIndex % 2) * (rowHeight * 0.5);

    let yPos;
    if (typeof rowIndex !== 'undefined') {
      // Grid + Stagger + NO JITTER (Strict Grid)
      yPos = (rowIndex * rowHeight) + stagger;
    } else {
      yPos = -rowHeight;
    }

    return {
      x: xPos,
      y: yPos,
      rowHeight: rowHeight, // Store for looping logic
      speed: this.config.minSpeed,
      size: this.config.minSize + Math.random() * (this.config.maxSize - this.config.minSize),
      opacity: this.config.minOpacity + Math.random() * (this.config.maxOpacity - this.config.minOpacity),
      color: this.config.colors[Math.floor(Math.random() * this.config.colors.length)],
      iconType: this.selectWeightedIcon(),
      originalX: xPos // Store original X for resetting
    };
  }

  /**
   * Select icon based on weighted tier probability
   * Tier 1 (60%): Primary icons
   * Tier 2 (25%): Secondary icons
   * Tier 3 (15%): Accent/Luxury particles
   */
  selectWeightedIcon() {
    const rand = Math.random() * 100;

    if (rand < 60) {
      // Tier 1: 60%
      return this.config.tier1Icons[Math.floor(Math.random() * this.config.tier1Icons.length)];
    } else if (rand < 85) {
      // Tier 2: 25%
      return this.config.tier2Icons[Math.floor(Math.random() * this.config.tier2Icons.length)];
    } else {
      // Tier 3: 15%
      return this.config.tier3Icons[Math.floor(Math.random() * this.config.tier3Icons.length)];
    }
  }

  /**
   * Update animation state
   * @param {number} dt Delta time in seconds
   */
  update(dt) {
    const now = Date.now();
    const iconHeight = this.config.maxSize * 1.5;

    for (let column of this.columns) {
      // Move column down based on time, not frames
      column.y += column.speed * dt;
      // Smooth continuous rotation - constant slow speed for consistency
      if (typeof column.rotation === 'undefined') { column.rotation = 0; }
      column.rotation += 0.5 * dt; // Fixed slow rotation for all items

      // Reset column when it falls off screen (Infinite Loop Wrapping)
      // Instead of randomizing, we wrap it exactly to the top to preserve grid spacing
      const totalLoopHeight = (Math.ceil(this.canvas.height / column.rowHeight) + 1) * column.rowHeight;

      if (column.y > this.canvas.height + column.size) {
        // Wrap around by subtracting the total height of the grid content
        // This places it exactly above the screen, maintaining the neighbor distance
        column.y -= totalLoopHeight;

        // Randomize visual properties only, keeping positions stable
        column.size = this.config.minSize + Math.random() * (this.config.maxSize - this.config.minSize);
        column.iconType = this.selectWeightedIcon();
        column.opacity = this.config.minOpacity + Math.random() * (this.config.maxOpacity - this.config.minOpacity);
      }

      // Randomly change icon and color periodically for variety
      if (now > column.nextChangeTime) {
        column.color = this.config.colors[Math.floor(Math.random() * this.config.colors.length)];
        column.nextChangeTime = now + (2000 + Math.random() * 3000); // Change color every 2-5 seconds
      }
    }
  }

  /**
   * Draw custom salon icons on canvas
   */
  drawIcon(ctx, iconType, x, y, size, color, rotation) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    ctx.lineWidth = Math.max(1, size / 12);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    const s = size / 20; // Scale factor

    switch (iconType) {
      case 'scissors_classic':
        // Real world scissor - viewed from above with two handles and crossed blades
        if (this.scissorImg && this.scissorImg.complete && this.scissorImg.naturalHeight !== 0) {
          // Draw the realistic image
          ctx.drawImage(this.scissorImg, -size / 2, -size / 2, size, size);
        } else {
          // Fallback to minimal shape if not loaded
          ctx.lineWidth = Math.max(1.5, size / 11);

          // Left handle (circle)
          ctx.beginPath();
          ctx.arc(-5 * s, 0, 2.2 * s, 0, Math.PI * 2);
          ctx.fill();

          // Right handle (circle)
          ctx.beginPath();
          ctx.arc(5 * s, 0, 2.2 * s, 0, Math.PI * 2);
          ctx.fill();

          // Left blade going to top-right
          ctx.lineWidth = Math.max(2.5, size / 8);
          ctx.beginPath();
          ctx.moveTo(-4.5 * s, 0);
          ctx.lineTo(3.5 * s, 5 * s);
          ctx.stroke();

          // Left blade going to bottom-right
          ctx.beginPath();
          ctx.moveTo(-4.5 * s, 0);
          ctx.lineTo(3.5 * s, -5 * s);
          ctx.stroke();

          // Right blade going to top-left
          ctx.beginPath();
          ctx.moveTo(4.5 * s, 0);
          ctx.lineTo(-3.5 * s, 5 * s);
          ctx.stroke();

          // Right blade going to bottom-left
          ctx.beginPath();
          ctx.moveTo(4.5 * s, 0);
          ctx.lineTo(-3.5 * s, -5 * s);
          ctx.stroke();

          // Center pivot point - darker for depth
          ctx.beginPath();
          ctx.arc(0, 0, 1.3 * s, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
          ctx.fill();
          ctx.fillStyle = color;
        }
        break;

      case 'straight_razor':
        // Straight razor - classic barber tool
        if (this.razorImg && this.razorImg.complete && this.razorImg.naturalHeight !== 0) {
          ctx.drawImage(this.razorImg, -size / 2, -size / 2, size, size);
        } else {
          ctx.lineWidth = Math.max(2, size / 9);
          // Handle
          ctx.fillRect(-2 * s, -5 * s, 4 * s, 5 * s);
          // Blade - sharp angle
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(3 * s, 2 * s);
          ctx.lineTo(2.5 * s, 5 * s);
          ctx.lineTo(-1 * s, 3 * s);
          ctx.closePath();
          ctx.fill();
        }
        break;

      case 'hair_comb_fine':
        // Fine hair comb - detailed
        if (this.combImg && this.combImg.complete && this.combImg.naturalHeight !== 0) {
          ctx.drawImage(this.combImg, -size / 2, -size / 2, size, size);
        } else {
          // Handle
          ctx.fillRect(-2.5 * s, -6 * s, 5 * s, 3 * s);
          // Fine teeth
          ctx.lineWidth = Math.max(0.8, size / 18);
          for (let i = -4; i <= 4; i++) {
            ctx.beginPath();
            ctx.moveTo(i * 1.2 * s, -3 * s);
            ctx.lineTo(i * 1.2 * s, 4 * s);
            ctx.stroke();
          }
        }
        break;

      case 'hair_clipper':
        // Hair clipper outline
        // Body
        ctx.fillRect(-3 * s, -4 * s, 6 * s, 8 * s);
        // Blade slot
        ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
        ctx.fillRect(-2.5 * s, -2 * s, 5 * s, 1.5 * s);
        ctx.fillStyle = color;
        // Top button
        ctx.beginPath();
        ctx.arc(0, -5 * s, 1.5 * s, 0, Math.PI * 2);
        ctx.fill();
        break;

      case 'beard_outline':
        // Beard shape outline
        ctx.lineWidth = Math.max(1.5, size / 10);
        ctx.beginPath();
        ctx.moveTo(-4 * s, -2 * s);
        ctx.quadraticCurveTo(-5 * s, 2 * s, -3 * s, 6 * s);
        ctx.quadraticCurveTo(0, 8 * s, 3 * s, 6 * s);
        ctx.quadraticCurveTo(5 * s, 2 * s, 4 * s, -2 * s);
        ctx.closePath();
        ctx.stroke();
        break;

      case 'mustache_icon':
        // Classic mustache silhouette
        ctx.lineWidth = Math.max(2, size / 8);
        // Left curve
        ctx.beginPath();
        ctx.moveTo(-0.5 * s, 0);
        ctx.quadraticCurveTo(-5 * s, -2 * s, -6 * s, 0);
        ctx.stroke();
        // Right curve
        ctx.beginPath();
        ctx.moveTo(0.5 * s, 0);
        ctx.quadraticCurveTo(5 * s, -2 * s, 6 * s, 0);
        ctx.stroke();
        break;

      case 'trimmer_detail':
        // Electric trimmer detail
        ctx.lineWidth = Math.max(1, size / 12);
        // Cord/body
        ctx.fillRect(-2 * s, -6 * s, 4 * s, 6 * s);
        // Head
        ctx.fillRect(-3 * s, 0, 6 * s, 4 * s);
        // Teeth pattern
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.4)';
        for (let i = 0; i < 5; i++) {
          ctx.strokeRect(-2.5 * s + i * 1.2 * s, 0.5 * s, 0.8 * s, 2 * s);
        }
        ctx.strokeStyle = color;
        break;

      case 'beard_comb':
        // Wide beard comb
        ctx.fillRect(-4 * s, -5 * s, 8 * s, 3 * s);
        // Wider teeth
        ctx.lineWidth = Math.max(1, size / 14);
        for (let i = -3; i <= 3; i++) {
          ctx.beginPath();
          ctx.moveTo(i * 2.2 * s, -2 * s);
          ctx.lineTo(i * 2.2 * s, 5 * s);
          ctx.stroke();
        }
        break;

      case 'beard_brush':
        // Beard brush with bristles
        // Handle
        ctx.fillRect(-2 * s, -6 * s, 4 * s, 3 * s);
        // Bristles - radiating
        ctx.lineWidth = Math.max(0.8, size / 16);
        for (let angle = 0; angle < Math.PI; angle += Math.PI / 6) {
          ctx.beginPath();
          ctx.moveTo(0, -3 * s);
          ctx.lineTo(Math.cos(angle - Math.PI / 2) * 4 * s, -3 * s + Math.sin(angle - Math.PI / 2) * 4 * s);
          ctx.stroke();
        }
        break;

      case 'shaving_brush':
        // Shaving brush with soft bristles
        // Handle
        ctx.fillRect(-1.5 * s, -6 * s, 3 * s, 3 * s);
        // Bristle head - fluffy circle
        ctx.beginPath();
        ctx.arc(0, -2 * s, 3.5 * s, 0, Math.PI * 2);
        ctx.stroke();
        // Inner bristle texture
        ctx.lineWidth = Math.max(0.5, size / 20);
        for (let i = 0; i < 8; i++) {
          const angle = (i / 8) * Math.PI * 2;
          ctx.beginPath();
          ctx.moveTo(0, -2 * s);
          ctx.lineTo(Math.cos(angle) * 3 * s, -2 * s + Math.sin(angle) * 3 * s);
          ctx.stroke();
        }
        break;

      case 'aftershave_bottle':
        // Aftershave/cologne bottle
        // Neck
        ctx.fillRect(-1 * s, -6 * s, 2 * s, 2 * s);
        // Cap
        ctx.fillRect(-1.5 * s, -7.5 * s, 3 * s, 1.5 * s);
        // Bottle body
        ctx.beginPath();
        ctx.moveTo(-2.5 * s, -4 * s);
        ctx.quadraticCurveTo(-3 * s, 0, -2 * s, 4 * s);
        ctx.lineTo(2 * s, 4 * s);
        ctx.quadraticCurveTo(3 * s, 0, 2.5 * s, -4 * s);
        ctx.closePath();
        ctx.stroke();
        break;

      case 'hair_dryer_minimal':
        if (this.dryerImg && this.dryerImg.complete && this.dryerImg.naturalHeight !== 0) {
          ctx.drawImage(this.dryerImg, -size / 2, -size / 2, size, size);
        } else {
          // Hair dryer minimal design
          // Nozzle
          ctx.beginPath();
          ctx.arc(-3 * s, 0, 1.5 * s, 0, Math.PI * 2);
          ctx.fill();
          // Barrel
          ctx.fillRect(-1.5 * s, -2 * s, 3 * s, 4 * s);
          // Handle
          ctx.beginPath();
          ctx.arc(1.5 * s, 3 * s, 2 * s, 0, Math.PI * 2);
          ctx.stroke();
        }
        break;

      case 'spray_bottle':
        if (this.sprayImg && this.sprayImg.complete && this.sprayImg.naturalHeight !== 0) {
          ctx.drawImage(this.sprayImg, -size / 2, -size / 2, size, size);
        } else {
          // Fallback simple bottle
          ctx.fillRect(-1.5 * s, -2 * s, 3 * s, 5 * s);
          ctx.fillRect(-0.5 * s, -4 * s, 1 * s, 2 * s);
        }
        break;

      case 'hand_mirror':
        if (this.mirrorImg && this.mirrorImg.complete && this.mirrorImg.naturalHeight !== 0) {
          ctx.drawImage(this.mirrorImg, -size / 2, -size / 2, size, size);
        } else {
          ctx.beginPath();
          ctx.arc(0, -2 * s, 4 * s, 0, Math.PI * 2);
          ctx.stroke();
          ctx.fillRect(-1 * s, 2 * s, 2 * s, 4 * s);
        }
        break;

      case 'round_brush':
        if (this.brushImg && this.brushImg.complete && this.brushImg.naturalHeight !== 0) {
          ctx.drawImage(this.brushImg, -size / 2, -size / 2, size, size);
        } else {
          ctx.fillRect(-4 * s, -2 * s, 8 * s, 4 * s);
          ctx.fillRect(4 * s, -0.5 * s, 2 * s, 1 * s);
        }
        break;

      case 'sparkle_dot':
        // Tiny sparkle dots
        ctx.beginPath();
        ctx.arc(0, 0, 2 * s, 0, Math.PI * 2);
        ctx.fill();
        // Glow
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.beginPath();
        ctx.arc(-0.5 * s, -0.5 * s, 1 * s, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = color;
        break;

      case 'gold_particle':
        // Small gold hexagon particle
        ctx.lineWidth = Math.max(1, size / 14);
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const angle = (i / 6) * Math.PI * 2;
          const px = Math.cos(angle) * 3 * s;
          const py = Math.sin(angle) * 3 * s;
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.fill();
        break;

      case 'light_streak':
        // Light streak - diagonal line with glow
        ctx.lineWidth = Math.max(2, size / 9);
        ctx.globalAlpha = ctx.globalAlpha * 0.6;
        ctx.beginPath();
        ctx.moveTo(-3 * s, -4 * s);
        ctx.lineTo(3 * s, 4 * s);
        ctx.stroke();
        ctx.globalAlpha = ctx.globalAlpha / 0.6;
        break;

      case 'hair_strand_curve':
        // Elegant curved hair strand
        ctx.lineWidth = Math.max(1, size / 12);
        ctx.beginPath();
        ctx.moveTo(-4 * s, -5 * s);
        ctx.quadraticCurveTo(0, 0, 4 * s, 5 * s);
        ctx.stroke();
        break;

      case 'steam_wave':
        // Steam wave - wavy lines
        ctx.lineWidth = Math.max(1, size / 12);
        for (let wave = 0; wave < 2; wave++) {
          ctx.beginPath();
          ctx.moveTo(-4 * s, -3 * s + wave * 3 * s);
          for (let i = 0; i < 20; i++) {
            const x = -4 * s + (i / 20) * 8 * s;
            const y = -3 * s + wave * 3 * s + Math.sin((i / 20) * Math.PI * 4) * 1.5 * s;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();
        }
        break;

      case 'glow_circle':
        // Glowing circle with rings
        ctx.lineWidth = Math.max(1, size / 12);
        // Outer ring
        ctx.beginPath();
        ctx.arc(0, 0, 4.5 * s, 0, Math.PI * 2);
        ctx.stroke();
        // Middle ring
        ctx.beginPath();
        ctx.arc(0, 0, 2.5 * s, 0, Math.PI * 2);
        ctx.stroke();
        // Center dot
        ctx.beginPath();
        ctx.arc(0, 0, 0.8 * s, 0, Math.PI * 2);
        ctx.fill();
        break;

      default:
        // Fallback - small circle
        ctx.beginPath();
        ctx.arc(0, 0, 3 * s, 0, Math.PI * 2);
        ctx.fill();
    }

    ctx.restore();
  }

  /**
   * Render the canvas with premium glow effect
   */
  render() {
    // Clear canvas completely with no blur/fade effect
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Draw all icons with premium glow effect for luxury appearance
    for (let column of this.columns) {
      // Draw subtle glow/shadow for premium depth
      this.ctx.globalAlpha = column.opacity * 0.18;
      this.ctx.shadowColor = column.color;
      this.ctx.shadowBlur = 12;
      this.ctx.shadowOffsetX = 0;
      this.ctx.shadowOffsetY = 0;

      this.drawIcon(
        this.ctx,
        column.iconType,
        column.x,
        column.y,
        column.size,
        column.color,
        column.rotation
      );

      // Draw main icon with full opacity and sharp edges
      this.ctx.globalAlpha = column.opacity;
      this.ctx.shadowColor = 'transparent';
      this.ctx.shadowBlur = 0;

      this.drawIcon(
        this.ctx,
        column.iconType,
        column.x,
        column.y,
        column.size,
        column.color,
        column.rotation
      );
    }

    this.ctx.globalAlpha = 1;
  }

  /**
   * Animation loop using requestAnimationFrame for optimal performance
   */
  animationLoop = (timestamp) => {
    if (this.isRunning) {
      if (!this.lastTime) this.lastTime = timestamp;

      // Calculate delta time in seconds
      let dt = (timestamp - this.lastTime) / 1000;
      this.lastTime = timestamp;

      // prevent huge jumps if tab was inactive (clamp to max 0.05s / 20fps equivalent minimum)
      if (dt > 0.05) dt = 0.05;

      this.update(dt);
      this.render();
      this.animationId = requestAnimationFrame(this.animationLoop);
    }
  };

  /**
   * Start the animation
   */
  start() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.lastTime = 0; // Reset time
      this.animationId = requestAnimationFrame(this.animationLoop);
    }
  }

  /**
   * Stop the animation and clean up
   */
  stop() {
    this.isRunning = false;
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }

  /**
   * Update configuration at runtime
   */
  updateConfig(newOptions) {
    this.config = { ...this.config, ...newOptions };
    // Reinitialize columns with new config
    this.columns = Array.from({ length: this.columns.length }, () => this.createColumn());
  }

  /**
   * Destroy the animation and clean up
   */
  destroy() {
    this.stop();
    if (this.canvas) {
      this.canvas.remove();
    }
    window.removeEventListener('resize', () => this.resize());
  }
}

// Initialize the animation when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.salonRain = new SalonDigitalRain();
  });
} else {
  window.salonRain = new SalonDigitalRain();
}

// Initialize the animation when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.salonRain = new SalonDigitalRain();
  });
} else {
  window.salonRain = new SalonDigitalRain();
}
