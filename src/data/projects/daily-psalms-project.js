export default {
  slug: 'daily-psalms-app',
  title: 'Daily Psalms App',
  year: '2026',
  type: 'Software',
  category: 'Native Android Application',
  role: 'Developer / Product Designer',
  thumbnail: {
    src: '/projects/daily-psalms/FeatureGraphic.png',
    alt: 'Daily Psalms app feature graphic.',
  },
  description:
    'Daily Psalms is a native, offline Android app designed to help users build a daily Scripture reading habit. It calculates daily readings, tracks streaks, and provides in-line study tools in a linear, distraction-free reading experience.\n\nThe app was built from a personal need to make a five-Psalms-and-one-Proverb reading practice easier to sustain. What began as a personal project became a public Google Play release.\n\nA major objective was making everything work completely offline. Custom Python scripts scrape, sanitize, and transform public-domain texts into a unified JSON schema and local lexicons. Jetpack Compose reader views use LazyColumn for large chapters with interactive word links, while DataStore manages reading tracks, preferences, and streak state. A home-screen widget keeps reading progress visible.\n\nThe app includes nine local translations, Hebrew and Greek interlinear study tools mapped to Strong\'s numbers, a morphological Latin dictionary, grammar color-coding, customizable reading schedules, and weekly grace days that protect streaks when readings are missed.',
  tools: [
    'Kotlin',
    'Jetpack Compose',
    'Android SDK',
    'Python',
    'DataStore',
    'JSON data pipelines',
  ],
  media: [
    {
      type: 'image',
      src: '/projects/daily-psalms/Showcase1.png',
      alt: 'Daily Psalms reading plan and streak progress.',
      caption: 'Daily reading plan and streak progress.',
    },
    {
      type: 'image',
      src: '/projects/daily-psalms/Showcase2.png',
      alt: 'Daily Psalms distraction-free offline reading view.',
      caption: 'Distraction-free offline reading.',
    },
    {
      type: 'image',
      src: '/projects/daily-psalms/Showcase4.png',
      alt: 'Daily Psalms Hebrew lexicon word study.',
      caption: 'Original-language study tools.',
    },
    {
      type: 'image',
      src: '/projects/daily-psalms/Showcase5.png',
      alt: 'Daily Psalms translation selector.',
      caption: 'Modern, historical, and original-language translations.',
    },
    {
      type: 'image',
      src: '/projects/daily-psalms/Showcase6.png',
      alt: 'Daily Psalms customizable reading schedule settings.',
      caption: 'Flexible reading schedules and grace-day settings.',
    },
    {
      type: 'image',
      src: '/projects/daily-psalms/Showcase7.png',
      alt: 'Daily Psalms home-screen widget.',
      caption: 'Home-screen widget for daily progress.',
    },
  ],
  credits: [
    {
      label: 'Release',
      name: 'Available on Google Play',
      url: 'https://play.google.com/store/apps/details?id=com.peter.dailypsalms',
    },
    {
      label: 'Source',
      name: 'Daily Psalms on GitHub',
      url: 'https://github.com/CephasHill/DailyPsalms',
    },
  ],
  published: true,
  featured: false,
}
