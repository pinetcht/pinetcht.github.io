import harmony from "../assets/harmony3.png"
import ratemysongs from "../assets/ratemysongs.png"
import nlp from "../assets/textgen-tv.png"
import playlist from "../assets/p-laylist.png"
import housing47 from "../assets/housing47.png"
export const ProjectList = [
  {
    name: "Housing47",
    desc: "A user-friendly housing selection platform for a visual and stress-free room draw experience",
    tech: "React.js, Maptiler, Express.js, Firebase",
    pic: housing47,
    link: "https://housing47.netlify.app/",
    githubLink: "https://github.com/pinetcht/housing47"
  },
  {
    name: "Harmony: A Spotify Social Media App",
    desc: "A music social media platform for personal Spotify profiles, forums, and DMs",
    tech: "Spotify API, React.js, Express.js, Firebase",
    pic: harmony,
    link: "https://join-harmony.vercel.app/",
    githubLink: "https://github.com/pinetcht/Harmony"
  },
  {
    name: "Rate My Songs",
    desc: "Android social app to rate songs based on genres",
    tech: "Kotlin, Jetpack Compose, Firebase",
    pic: ratemysongs,
    githubLink: "https://github.com/pinetcht/RateMySongs"
  },
  {
    name: "Character-Based Text Generation and Classification",
    desc: "A bigram text generator to simulate dialogue styles of three movie characters.",
    tech: "NLP, Machine Learning, Java, Python",
    pic: nlp,
    githubLink: "https://github.com/pinetcht/CharacterBasedTextGeneration"
  },
  {
    name: "P-laylist",
    desc: "Personalized, no-repeats song recommendation based on your music tastes",
    tech: "Docker Compose, Nginx, Flask, Python",
    pic: playlist,
    githubLink: "https://github.com/pinetcht/p-laylist"
  }
];
