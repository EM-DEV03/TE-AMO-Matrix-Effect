    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const text = "TE AMO";
    const fontSize = 20;
    const columns = Math.floor(window.innerWidth / fontSize);
    const drops = Array(columns).fill(1);
    const pink = "#ff69b4";

    function draw() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = pink;
      ctx.font = `${fontSize}px 'Tilt Neon', cursive`;
      ctx.textAlign = "center";

      for (let i = 0; i < drops.length; i++) {
        const x = i * fontSize + fontSize / 2;
        const y = drops[i] * fontSize;

        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    }

    // animación lenta tipo Matrix
    setInterval(draw, 40);

    // const emojis = ["❤️", "🥰"];

    function showExplosion(x, y) {
      for (let i = 0; i < 25; i++) {
        const span = document.createElement("span");
        const isEmoji = Math.random() < 0.5;
        span.textContent = isEmoji ? emojis[Math.floor(Math.random() * emojis.length)] : "TE AMO";
        span.className = "explosion";
        span.style.left = (x + (Math.random() * 100 - 50)) + "px";
        span.style.top = (y + (Math.random() * 100 - 50)) + "px";
        span.style.fontSize = (22 + Math.random() * 20) + "px";
        document.body.appendChild(span);
        setTimeout(() => span.remove(), 1000);
      }
    }

    document.addEventListener("click", e => {
      showExplosion(e.clientX, e.clientY);
      playMusic(); // activamos la música al primer clic
    });

    document.addEventListener("touchstart", e => {
      const touch = e.touches[0];
      if (touch) {
        showExplosion(touch.clientX, touch.clientY);
        playMusic();
      }
    });

    let musicStarted = false;
    function playMusic() {
      if (!musicStarted) {
        const music = document.getElementById("bgMusic");
        music.play().catch(() => {});
        musicStarted = true;
      }
    }
 