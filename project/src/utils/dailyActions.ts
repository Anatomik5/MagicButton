export interface DailyAction {
  type: string;
  execute: () => void;
  message?: string;
  image?: string;
  emoji?: string;
  data?: any;
}

const motivationalQuotes = [
  "You're doing amazing! Keep going! 🌟",
  "Today is your day to shine! ✨",
  "Believe in yourself - you've got this! 💪",
  "Every small step counts! 🚀",
  "You're stronger than you think! 💎",
  "Dream big, start small, act now! 🌈"
];

const jokes = [
  "Why don't scientists trust atoms? Because they make up everything! 😄",
  "I told my wife she was drawing her eyebrows too high. She looked surprised! 😂",
  "Why don't eggs tell jokes? They'd crack each other up! 🥚",
  "I'm reading a book about anti-gravity. It's impossible to put down! 📚",
  "Why did the scarecrow win an award? He was outstanding in his field! 🌾"
];

const fortuneMessages = [
  "A pleasant surprise awaits you today! 🎁",
  "Your kindness will be rewarded! 💝",
  "Something you've been waiting for is coming soon! ⭐",
  "Trust your instincts - they're spot on! 🎯",
  "A new opportunity is heading your way! 🚪"
];

const magic8BallAnswers = [
  "It is certain! ✨",
  "Without a doubt! 💯",
  "Yes definitely! ✅",
  "Most likely! 👍",
  "Ask again later! 🔄",
  "Cannot predict now! 🌫️",
  "Don't count on it! ❌",
  "Very doubtful! 🤔"
];

const secretMessages = [
  "The cake is a lie! 🍰",
  "You found the secret! 🕵️",
  "42 is the answer to everything! 🤖",
  "The narwhal beacons at midnight! 🦄",
  "Pizza is life! 🍕"
];

export const dailyActions: DailyAction[] = [
  {
    type: 'spin',
    message: "Wheeee! Everything is spinning! Hope you didn't get too dizzy! 🌪️",
    image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400",
    emoji: "🌪️",
    execute: () => {
      document.body.style.transform = 'rotate(360deg)';
      document.body.style.transition = 'transform 2s ease-in-out';
      setTimeout(() => {
        document.body.style.transform = '';
        document.body.style.transition = '';
      }, 2000);
    }
  },
  {
    type: 'motivational',
    message: motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)],
    image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400",
    emoji: "💪",
    execute: () => {}
  },
  {
    type: 'shake',
    message: "Did you feel that earthquake? Don't worry, it was just me shaking things up! 📳",
    image: "https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=400",
    emoji: "📳",
    execute: () => {
      document.body.style.animation = 'shake 0.5s ease-in-out 0s 6';
      setTimeout(() => {
        document.body.style.animation = '';
      }, 3000);
    }
  },
  {
    type: 'rainbow',
    message: "Taste the rainbow! Your screen just got a colorful makeover! 🌈",
    image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400",
    emoji: "🎨",
    execute: () => {
      const colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
      let index = 0;
      const interval = setInterval(() => {
        document.body.style.backgroundColor = colors[index];
        index = (index + 1) % colors.length;
      }, 200);
      setTimeout(() => {
        clearInterval(interval);
        document.body.style.backgroundColor = '';
      }, 3000);
    }
  },
  {
    type: 'confetti',
    message: "🎉 PARTY TIME! 🎉 Confetti everywhere! Let's celebrate your awesome button-clicking skills!",
    image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400",
    emoji: "🎉",
    execute: () => {
      const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
      for (let i = 0; i < 50; i++) {
        setTimeout(() => {
          const confetti = document.createElement('div');
          confetti.style.position = 'fixed';
          confetti.style.width = '10px';
          confetti.style.height = '10px';
          confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
          confetti.style.left = Math.random() * window.innerWidth + 'px';
          confetti.style.top = '-10px';
          confetti.style.borderRadius = '50%';
          confetti.style.pointerEvents = 'none';
          confetti.style.zIndex = '9999';
          document.body.appendChild(confetti);
          
          const animation = confetti.animate([
            { transform: 'translateY(0px) rotate(0deg)', opacity: 1 },
            { transform: `translateY(${window.innerHeight + 20}px) rotate(360deg)`, opacity: 0 }
          ], {
            duration: 3000,
            easing: 'linear'
          });
          
          animation.onfinish = () => confetti.remove();
        }, i * 50);
      }
    }
  },
  {
    type: 'fake-crash',
    message: "SYSTEM ERROR! Just kidding! 😄 Your computer is perfectly fine. I just wanted to give you a little scare!",
    image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400",
    emoji: "💥",
    execute: () => {
      const overlay = document.createElement('div');
      overlay.style.position = 'fixed';
      overlay.style.top = '0';
      overlay.style.left = '0';
      overlay.style.width = '100%';
      overlay.style.height = '100%';
      overlay.style.backgroundColor = '#0000ff';
      overlay.style.color = 'white';
      overlay.style.display = 'flex';
      overlay.style.alignItems = 'center';
      overlay.style.justifyContent = 'center';
      overlay.style.fontSize = '24px';
      overlay.style.fontFamily = 'monospace';
      overlay.style.zIndex = '10000';
      overlay.innerHTML = `
        <div style="text-align: center;">
          <div style="font-size: 48px; margin-bottom: 20px;">💀</div>
          <div>SYSTEM ERROR</div>
          <div style="margin-top: 10px; font-size: 14px;">Just kidding! Click anywhere to continue...</div>
        </div>
      `;
      
      overlay.onclick = () => overlay.remove();
      document.body.appendChild(overlay);
      
      setTimeout(() => {
        if (overlay.parentNode) overlay.remove();
      }, 5000);
    }
  },
  {
    type: 'magic8ball',
    message: `🎱 The Magic 8-Ball has spoken: ${magic8BallAnswers[Math.floor(Math.random() * magic8BallAnswers.length)]}`,
    image: "https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=400",
    emoji: "🎱",
    execute: () => {}
  },
  {
    type: 'dance',
    message: "💃 DANCE PARTY! 💃 Your screen is getting its groove on! Feel the rhythm!",
    image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400",
    emoji: "💃",
    execute: () => {
      document.body.style.animation = 'bounce 0.5s ease-in-out 0s infinite alternate';
      setTimeout(() => {
        document.body.style.animation = '';
      }, 3000);
    }
  },
  {
    type: 'surprise',
    message: "🎁 SURPRISE! You just made my day by clicking that button! You're absolutely wonderful! 😊",
    image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400",
    emoji: "🎁",
    execute: () => {
      const surprises = [
        () => { document.body.style.filter = 'hue-rotate(180deg)'; setTimeout(() => document.body.style.filter = '', 3000); },
        () => { document.body.style.transform = 'scale(1.1)'; setTimeout(() => document.body.style.transform = '', 2000); }
      ];
      const surprise = surprises[Math.floor(Math.random() * surprises.length)];
      surprise();
    }
  },
  {
    type: 'joke',
    message: jokes[Math.floor(Math.random() * jokes.length)],
    image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400",
    emoji: "😂",
    execute: () => {}
  },
  {
    type: 'time-warp',
    message: "⏰ TIME WARP ACTIVATED! You just traveled through time and space! How was the journey?",
    image: "https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=400",
    emoji: "⏰",
    execute: () => {
      document.body.style.filter = 'blur(5px)';
      document.body.style.transition = 'filter 0.5s ease-in-out';
      setTimeout(() => {
        document.body.style.filter = '';
      }, 2000);
    }
  },
  {
    type: 'disco',
    message: "🕺 DISCO FEVER! 🕺 The 70s are back! Can you feel the funky vibes?",
    image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400",
    emoji: "🕺",
    execute: () => {
      const colors = ['#ff0080', '#00ff80', '#8000ff', '#ff8000', '#0080ff'];
      let index = 0;
      const interval = setInterval(() => {
        document.body.style.background = `linear-gradient(45deg, ${colors[index]}, ${colors[(index + 1) % colors.length]})`;
        index = (index + 1) % colors.length;
      }, 100);
      setTimeout(() => {
        clearInterval(interval);
        document.body.style.background = '';
      }, 3000);
    }
  },
  {
    type: 'mind-blown',
    message: "🤯 MIND = BLOWN! Did you know a group of flamingos is called a 'flamboyance'? The more you know!",
    image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400",
    emoji: "🤯",
    execute: () => {}
  },
  {
    type: 'rocket',
    message: "🚀 BLAST OFF! Your rocket has successfully launched into space! Mission accomplished!",
    image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400",
    emoji: "🚀",
    execute: () => {
      const rocket = document.createElement('div');
      rocket.innerHTML = '🚀';
      rocket.style.position = 'fixed';
      rocket.style.fontSize = '50px';
      rocket.style.bottom = '10px';
      rocket.style.left = '50%';
      rocket.style.transform = 'translateX(-50%)';
      rocket.style.zIndex = '9999';
      document.body.appendChild(rocket);
      
      const animation = rocket.animate([
        { transform: 'translateX(-50%) translateY(0px)' },
        { transform: 'translateX(-50%) translateY(-100vh)' }
      ], {
        duration: 2000,
        easing: 'ease-out'
      });
      
      animation.onfinish = () => rocket.remove();
    }
  },
  {
    type: 'magic-trick',
    message: "🎩✨ ABRACADABRA! ✨🎩 The greatest magic trick ever performed! Did you see me disappear and reappear?",
    image: "https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=400",
    emoji: "🎩",
    execute: () => {
      document.body.style.visibility = 'hidden';
      setTimeout(() => {
        document.body.style.visibility = 'visible';
      }, 1000);
    }
  },
  {
    type: 'party',
    message: "🎊 PARTY TIME! 🎊 You are absolutely AWESOME! Let's celebrate your button-clicking excellence!",
    image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400",
    emoji: "🎊",
    execute: () => {
      document.body.style.animation = 'pulse 0.5s ease-in-out 0s 6';
      setTimeout(() => {
        document.body.style.animation = '';
      }, 3000);
    }
  },
  {
    type: 'zen',
    message: "🧘 ZEN MODE ACTIVATED 🧘 Take a deep breath... You are at peace... Feel the tranquility... ✨",
    image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400",
    emoji: "🧘",
    execute: () => {
      document.body.style.filter = 'sepia(1) saturate(0.5)';
      setTimeout(() => {
        document.body.style.filter = '';
      }, 3000);
    }
  },
  {
    type: 'glitch',
    message: "📺 GLITCH IN THE MATRIX! 📺 Reality is bending! You've entered the digital realm!",
    image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400",
    emoji: "📺",
    execute: () => {
      const glitchInterval = setInterval(() => {
        document.body.style.filter = `hue-rotate(${Math.random() * 360}deg) saturate(${Math.random() * 3})`;
      }, 50);
      setTimeout(() => {
        clearInterval(glitchInterval);
        document.body.style.filter = '';
      }, 2000);
    }
  },
  {
    type: 'fortune',
    message: `🥠 Fortune Cookie Wisdom: ${fortuneMessages[Math.floor(Math.random() * fortuneMessages.length)]}`,
    image: "https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=400",
    emoji: "🥠",
    execute: () => {}
  },
  {
    type: 'bubble',
    message: "🫧 BUBBLE PARTY! 🫧 Look at all those beautiful bubbles floating around! Pop pop pop!",
    image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400",
    emoji: "🫧",
    execute: () => {
      for (let i = 0; i < 20; i++) {
        setTimeout(() => {
          const bubble = document.createElement('div');
          bubble.innerHTML = '🫧';
          bubble.style.position = 'fixed';
          bubble.style.fontSize = '30px';
          bubble.style.left = Math.random() * window.innerWidth + 'px';
          bubble.style.bottom = '-50px';
          bubble.style.pointerEvents = 'none';
          bubble.style.zIndex = '9999';
          document.body.appendChild(bubble);
          
          const animation = bubble.animate([
            { transform: 'translateY(0px)', opacity: 1 },
            { transform: `translateY(-${window.innerHeight + 100}px)`, opacity: 0 }
          ], {
            duration: 4000,
            easing: 'ease-out'
          });
          
          animation.onfinish = () => bubble.remove();
        }, i * 100);
      }
    }
  },
  {
    type: 'lightning',
    message: "⚡ LIGHTNING STRIKE! ⚡ You have been struck by lightning! (Don't worry, it's just pretend!) ZAP!",
    image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400",
    emoji: "⚡",
    execute: () => {
      document.body.style.background = 'white';
      setTimeout(() => {
        document.body.style.background = '';
      }, 100);
    }
  },
  {
    type: 'rainbow-bridge',
    message: "🌈 RAINBOW BRIDGE ACTIVATED! 🌈 You have crossed the magical rainbow bridge! Make a wish!",
    image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400",
    emoji: "🌈",
    execute: () => {
      document.body.style.background = 'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)';
      setTimeout(() => {
        document.body.style.background = '';
      }, 3000);
    }
  },
  {
    type: 'alien',
    message: "👽 ALIEN CONTACT! 👽 Greetings, Earthling! We come in peace! Your planet is quite lovely! 🛸",
    image: "https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=400",
    emoji: "👽",
    execute: () => {}
  },
  {
    type: 'treasure',
    message: "🏴‍☠️ TREASURE FOUND! 🏴‍☠️ Ahoy! You found the treasure! 💰 The real treasure was the fun we had along the way! ⚓",
    image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400",
    emoji: "🏴‍☠️",
    execute: () => {}
  },
  {
    type: 'crystal-ball',
    message: `🔮 CRYSTAL BALL REVEALS: ${['I see... good things in your future! 🌟', 'The crystal ball reveals... pizza in your near future! 🍕', 'I foresee... lots of laughter today! 😄', 'The future shows... someone thinking you\'re awesome! 💫'][Math.floor(Math.random() * 4)]}`,
    image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400",
    emoji: "🔮",
    execute: () => {}
  },
  {
    type: 'fireworks',
    message: "🎆 FIREWORKS SPECTACULAR! 🎆 Light up the sky! What a magnificent display of colors and sparkles!",
    image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400",
    emoji: "🎆",
    execute: () => {
      const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ffffff'];
      for (let i = 0; i < 30; i++) {
        setTimeout(() => {
          const firework = document.createElement('div');
          firework.innerHTML = '✨';
          firework.style.position = 'fixed';
          firework.style.fontSize = '20px';
          firework.style.color = colors[Math.floor(Math.random() * colors.length)];
          firework.style.left = Math.random() * window.innerWidth + 'px';
          firework.style.top = Math.random() * window.innerHeight + 'px';
          firework.style.pointerEvents = 'none';
          firework.style.zIndex = '9999';
          document.body.appendChild(firework);
          
          setTimeout(() => firework.remove(), 1000);
        }, i * 100);
      }
    }
  },
  {
    type: 'secret',
    message: `🕵️ TOP SECRET MESSAGE: ${secretMessages[Math.floor(Math.random() * secretMessages.length)]} (Don't tell anyone!)`,
    image: "https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=400",
    emoji: "🕵️",
    execute: () => {}
  },
  {
    type: 'teleport',
    message: "🌀 TELEPORTATION COMPLETE! 🌀 Welcome to your new location! (Spoiler: it's the same place, but now with 100% more magic!)",
    image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400",
    emoji: "🌀",
    execute: () => {
      document.body.style.opacity = '0';
      document.body.style.transition = 'opacity 0.5s';
      setTimeout(() => {
        document.body.style.opacity = '1';
      }, 1000);
    }
  },
  {
    type: 'mood-ring',
    message: `💍 MOOD RING ACTIVATED! 💍 The mood ring says you're feeling: ${['Happy 😊', 'Excited 🤩', 'Calm 😌', 'Energetic ⚡', 'Creative 🎨'][Math.floor(Math.random() * 5)]}`,
    image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400",
    emoji: "💍",
    execute: () => {
      const colors = ['yellow', 'orange', 'blue', 'red', 'purple'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      document.body.style.backgroundColor = color;
      setTimeout(() => {
        document.body.style.backgroundColor = '';
      }, 2000);
    }
  },
  {
    type: 'time-machine',
    message: `⏳ TIME MACHINE ACTIVATED! ⏳ You just visited ${['the 1980s', 'the 1990s', 'the 2000s', 'the 2010s', 'the future'][Math.floor(Math.random() * 5)]}! How was the trip?`,
    image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400",
    emoji: "⏳",
    execute: () => {
      document.body.style.filter = 'sepia(1)';
      setTimeout(() => {
        document.body.style.filter = '';
      }, 2000);
    }
  }
];