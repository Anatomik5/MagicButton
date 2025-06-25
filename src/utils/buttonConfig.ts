interface ButtonConfig {
  label: string;
  emoji: string;
  gradient: string;
  shadowColor: string;
  description: string;
}

const buttonConfigs: ButtonConfig[] = [
  {
    label: "Spin Me Around!",
    emoji: "🌪️",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    shadowColor: "rgba(102, 126, 234, 0.4)",
    description: "Let's make everything dizzy!"
  },
  {
    label: "Motivate Me!",
    emoji: "💪",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    shadowColor: "rgba(240, 147, 251, 0.4)",
    description: "Get ready for some inspiration!"
  },
  {
    label: "Shake It Up!",
    emoji: "📳",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    shadowColor: "rgba(79, 172, 254, 0.4)",
    description: "Time to rattle your screen!"
  },
  {
    label: "Color Explosion!",
    emoji: "🎨",
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    shadowColor: "rgba(67, 233, 123, 0.4)",
    description: "Prepare for a rainbow takeover!"
  },
  {
    label: "Confetti Time!",
    emoji: "🎉",
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    shadowColor: "rgba(250, 112, 154, 0.4)",
    description: "Let's celebrate with some confetti!"
  },
  {
    label: "Fake Crash!",
    emoji: "💥",
    gradient: "linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)",
    shadowColor: "rgba(255, 107, 107, 0.4)",
    description: "Don't worry, it's just pretend!"
  },
  {
    label: "Magic 8-Ball",
    emoji: "🎱",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    shadowColor: "rgba(102, 126, 234, 0.4)",
    description: "Ask a question and get mystical answers!"
  },
  {
    label: "Dance Mode!",
    emoji: "💃",
    gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
    shadowColor: "rgba(255, 236, 210, 0.4)",
    description: "Time to boogie!"
  },
  {
    label: "Surprise Me!",
    emoji: "🎁",
    gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    shadowColor: "rgba(168, 237, 234, 0.4)",
    description: "What's in the mystery box?"
  },
  {
    label: "Joke of the Day",
    emoji: "😂",
    gradient: "linear-gradient(135deg, #ffeaa7 0%, #fab1a0 100%)",
    shadowColor: "rgba(255, 234, 167, 0.4)",
    description: "Get ready to laugh!"
  },
  {
    label: "Time Warp!",
    emoji: "⏰",
    gradient: "linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)",
    shadowColor: "rgba(116, 185, 255, 0.4)",
    description: "Let's bend reality a little!"
  },
  {
    label: "Disco Fever!",
    emoji: "🕺",
    gradient: "linear-gradient(135deg, #fd79a8 0%, #fdcb6e 100%)",
    shadowColor: "rgba(253, 121, 168, 0.4)",
    description: "Groovy vibes incoming!"
  },
  {
    label: "Mind Blown!",
    emoji: "🤯",
    gradient: "linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%)",
    shadowColor: "rgba(108, 92, 231, 0.4)",
    description: "Prepare to have your mind blown!"
  },
  {
    label: "Launch Rocket!",
    emoji: "🚀",
    gradient: "linear-gradient(135deg, #ff7675 0%, #fd79a8 100%)",
    shadowColor: "rgba(255, 118, 117, 0.4)",
    description: "3... 2... 1... Blast off!"
  },
  {
    label: "Magic Trick!",
    emoji: "🎩",
    gradient: "linear-gradient(135deg, #2d3436 0%, #636e72 100%)",
    shadowColor: "rgba(45, 52, 54, 0.4)",
    description: "Abracadabra! Watch the magic happen!"
  },
  {
    label: "Party Mode!",
    emoji: "🎊",
    gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
    shadowColor: "rgba(255, 154, 158, 0.4)",
    description: "Let's get this party started!"
  },
  {
    label: "Zen Mode",
    emoji: "🧘",
    gradient: "linear-gradient(135deg, #a8e6cf 0%, #dcedc1 100%)",
    shadowColor: "rgba(168, 230, 207, 0.4)",
    description: "Find your inner peace!"
  },
  {
    label: "Glitch Effect!",
    emoji: "📺",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    shadowColor: "rgba(102, 126, 234, 0.4)",
    description: "Enter the digital realm!"
  },
  {
    label: "Fortune Cookie",
    emoji: "🥠",
    gradient: "linear-gradient(135deg, #ffeaa7 0%, #fab1a0 100%)",
    shadowColor: "rgba(255, 234, 167, 0.4)",
    description: "Crack open some wisdom!"
  },
  {
    label: "Bubble Pop!",
    emoji: "🫧",
    gradient: "linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)",
    shadowColor: "rgba(116, 185, 255, 0.4)",
    description: "Pop goes the bubble!"
  },
  {
    label: "Lightning Strike!",
    emoji: "⚡",
    gradient: "linear-gradient(135deg, #ffeaa7 0%, #fab1a0 100%)",
    shadowColor: "rgba(255, 234, 167, 0.4)",
    description: "Feel the power!"
  },
  {
    label: "Rainbow Bridge",
    emoji: "🌈",
    gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
    shadowColor: "rgba(255, 154, 158, 0.4)",
    description: "Cross the rainbow bridge!"
  },
  {
    label: "Alien Contact!",
    emoji: "👽",
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    shadowColor: "rgba(67, 233, 123, 0.4)",
    description: "We come in peace!"
  },
  {
    label: "Treasure Hunt!",
    emoji: "🏴‍☠️",
    gradient: "linear-gradient(135deg, #ffeaa7 0%, #fab1a0 100%)",
    shadowColor: "rgba(255, 234, 167, 0.4)",
    description: "X marks the spot!"
  },
  {
    label: "Crystal Ball",
    emoji: "🔮",
    gradient: "linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%)",
    shadowColor: "rgba(108, 92, 231, 0.4)",
    description: "Gaze into the future!"
  },
  {
    label: "Fireworks Show!",
    emoji: "🎆",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    shadowColor: "rgba(102, 126, 234, 0.4)",
    description: "Light up the sky!"
  },
  {
    label: "Secret Message",
    emoji: "🕵️",
    gradient: "linear-gradient(135deg, #2d3436 0%, #636e72 100%)",
    shadowColor: "rgba(45, 52, 54, 0.4)",
    description: "Decode the mystery!"
  },
  {
    label: "Teleport!",
    emoji: "🌀",
    gradient: "linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)",
    shadowColor: "rgba(116, 185, 255, 0.4)",
    description: "Beam me up!"
  },
  {
    label: "Mood Ring",
    emoji: "💍",
    gradient: "linear-gradient(135deg, #fd79a8 0%, #fdcb6e 100%)",
    shadowColor: "rgba(253, 121, 168, 0.4)",
    description: "What's your current vibe?"
  },
  {
    label: "Time Machine",
    emoji: "⏳",
    gradient: "linear-gradient(135deg, #ff7675 0%, #fd79a8 100%)",
    shadowColor: "rgba(255, 118, 117, 0.4)",
    description: "Travel through time!"
  },
  {
    label: "Surprise Party!",
    emoji: "🎈",
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    shadowColor: "rgba(250, 112, 154, 0.4)",
    description: "Surprise! It's party time!"
  }
];

export const getDailyButtonConfig = (day: number): ButtonConfig => {
  const index = (day - 1) % buttonConfigs.length;
  return buttonConfigs[index];
};