/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Suneet Mahajan",
  title: "Hi there, I'm Suneet",
  subTitle: emoji(
    "I code and do some other stuff"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1XOswacU8MWIZrapBb6ePDOzAQ47OT3-e/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

// gmail: "fixthissometime@gmail.com",
// gitlab: "https://gitlab.com/maybe",
// facebook: "https://www.facebook.com/maybe",
// stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",

const socialMediaLinks = {
  github: "https://github.com/SMiles02",
  linkedin: "https://www.linkedin.com/in/suneetmahajan/",
  // medium: "https://medium.com/@suneet02",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Skills",
  subTitle: "",
  skills: [
    "Proficient in:",
    emoji("⚡ C++"),
    emoji("⚡ Java"),
    emoji("⚡ Python"),
    emoji("⚡ Go"),
    emoji("⚡ Rust"),
    emoji("⚡ Algorithmic Problem-Solving"),
    emoji("⚡ Data Structures & Algorithms"),
    emoji("⚡ Competitive Programming")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    // {
    //   skillName: "html-5",
    //   fontAwesomeClassname: "fab fa-html5"
    // },
    // {
    //   skillName: "css3",
    //   fontAwesomeClassname: "fab fa-css3-alt"
    // },
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
    // {
    //   skillName: "JavaScript",
    //   fontAwesomeClassname: "fab fa-js"
    // },
    // {
    //   skillName: "reactjs",
    //   fontAwesomeClassname: "fab fa-react"
    // },
    // {
    //   skillName: "nodejs",
    //   fontAwesomeClassname: "fab fa-node"
    // },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    // {
    //   skillName: "npm",
    //   fontAwesomeClassname: "fab fa-npm"
    // },
    // {
    //   skillName: "sql-database",
    //   fontAwesomeClassname: "fas fa-database"
    // },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws"
    // },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    // {
    //   skillName: "python",
    //   fontAwesomeClassname: "fab fa-python"
    // },
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Engineer",
      company: "Pika",
      companylogo: require("./assets/images/pikaLogo.png"),
      date: "October 2025 - present",
      desc: "😶‍🌫️",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: "Research Intern",
      company: "Huawei",
      companylogo: require("./assets/images/huaweiLogo.png"),
      date: "June 2022 - Sep 2022",
      desc: "Developed and implemented novel heuristic algorithms which allowed internal routing engine's performance to be assessed, primarily using Rust.",
    },
    {
      role: "Senior Mathematics Enrichment Tutor",
      company: "Irish Maths Trust",
      companylogo: require("./assets/images/uccLogo.png"),
      date: "Jan 2022 - present",
      desc: "Taught mathematics, particularly combinatorics and graph theory to highly talented secondary school students. Multiple of my students proceeded to be selected to represent Ireland at IMO/EGMO 2022-2025."
    },
    {
      role: "Backend Engineering Intern",
      company: "Homeplan",
      companylogo: require("./assets/images/homeplanLogo.png"),
      date: "April 2024 - August 2024",
      desc: "Developed and implemented heuristic algorithms for internal analytics systems.",

    },
    {
      role: "Software Engineer Intern",
      company: "IBM",
      companylogo: require("./assets/images/ibmLogo.png"),
      date: "Feb 2017 – Mar 2017",
      desc: "Handled work assignments alongside learning frameworks used by IBM SWEs, primarily using Go."
    },
    {
      role: "Contest Coordinator",
      company: "Codeforces",
      companylogo: require("./assets/images/codeforcesSmallLogo.webp"),
      date: "June 2021 – Feb 2025",
      desc: "Authored & coordinated 10 contests on the online judge Codeforces, each with over 20,000 contestants."
    }
  ]
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University College Cork",
      logo: require("./assets/images/uccLogo.png"),
      subHeader: "BSc Data Science & Analytics [First Class Honours]",
      duration: "September 2021 - June 2025",
      desc: "Cork, Ireland",
      descBullets: [
        "UCC Sports Executive Member",
        "Chess Club Captain",
        "Data Science Society Vice-Chairperson",
        "Indian Society Vice-Chairperson",
        "Badminton Club Events and Health & Safety Officer"
      ]
    },
    {
      schoolName: "University of Zagreb",
      logo: require("./assets/images/uozLogo.png"),
      subHeader: "UNIC Mathematics Summer School",
      duration: "June 2024 - August 2024",
      desc: "Zagreb, Croatia",
    },
    {
      schoolName: "Douglas Community School",
      logo: require("./assets/images/dcsLogo.png"),
      subHeader: "Secondary School",
      duration: "September 2014 - February 2021",
      desc: "Cork, Ireland",
      descBullets: [
        "Chess Team Captain",
        "Cricket Team Captain",
        "Robotics Team Captain"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements 🏆 "),
  subtitle:
    "",

  achievementsCards: [
    {
      title: "IOI Silver Medallist",
      subtitle:
        "Represented Ireland at the International Olympiad of Informatics 2020 and 2021, winning a silver medal internationally.",
      image: require("./assets/images/ioiLogo.png"),
      imageAlt: "IOI Logo",
      footerLink: [
        {
          name: "My IOI Profile",
          url: "http://stats.ioinformatics.org/people/7138"
        },
      ]
    },
    {
      title: "IrlCPC 2025 Winner",
      subtitle:
        "Team member of the winning team 'View From The Top'.",
      image: require("./assets/images/acmLogo.png"),
      imageAlt: "IrlCPC Student Chapter Logo",
      footerLink: [
        {
          name: "Winning Announcement",
          url: "https://www.insight-centre.org/acm-irish-collegiate-programming-competition/"
        }
      ]
    },
    {
      title: "Patch",
      subtitle: "Part of the 2021 cohort, which selected 25 young adults from across the world to participate in a 7 week long accelerator programme.",
      image: require("./assets/images/patchLogo.png"),
      imageAlt: "Patch Logo",
      footerLink: [
        {
          name: "Alumni Page",
          url: "https://www.joinpatch.org/community"
        }
      ]
    },
    {
      title: "Top 2% in Google Code Jam",
      subtitle: "Finished 849th out of 38,000 participants in the 2021 Google Code Jam.",
      image: require("./assets/images/codejamLogo.png"),
      imageAlt: "Google Code Jam Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1pcqUme1IGVLXzvqxB-e6Zvv_lCvb_YBX/view?usp=sharing"
        }
      ]
    },
    {
        title: "Top 1% in Facebook Hacker Cup",
        subtitle: "Finished 337th out of 35,000 participants in the 2021 Facebook Hacker Cup.",
        image: require("./assets/images/fhcLogo.png"),
        imageAlt: "Facebook Hacker Cup Logo",
        footerLink: [
          {
            name: "Certificate",
            url: "https://www.facebook.com/codingcompetitions/hacker-cup/2021/certificate/2562612360660864"
          }
        ]
    }

    // {
    //   title: "",
    //   subtitle: "",
    //   image: require("./assets/images/ioiLogo.png"),
    //   imageAlt: "<> Logo",
    //   footerLink: [
    //     {
    //       name: "",
    //       url: ""
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

const problemSolving = {
  title: "Problem Solving Activities",
  subtitle: "My Competitive Programming Journey",
  projects: [
    {
      image: require("./assets/images/codeforcesLogo.png"),
      projectName: "Codeforces Master",
      projectDesc:
        "Highest Rating: 2200,  Top 1 percent among 600,000+ users",
      footerLink: [
        {
          name: "ScarletS",
          url: "https://codeforces.com/profile/ScarletS"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/atcoderLogo.png"),
      projectName: "AtCoder 1st Dan",
      projectDesc:
        "Highest Rating: 2006, Top 0.9 percent among 150,000+ users",
      footerLink: [
        {
          name: "ScarletS",
          url: "https://atcoder.jp/users/ScarletS"
        }
      ]
    },
    {
      image: require("./assets/images/usacoLogo.png"),
      projectName: "USACO Platinum",
      projectDesc:
        "Platinum (highest possible) Division since January 2021",
      footerLink: [
        {
          name: "Link to promotion results",
          url: "http://usaco.org/current/data/jan21_gold_results.html"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: {
    text: "Click here to see all my blogposts!", // Custom text for the link
    url: "https://blog.suneetmahajan.com/"
  },
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.suneetmahajan.com/posts/optimal-control/",
      title: "Optimal Control & Backpropagation",
      description:
        "My undergraduate thesis on optimal control and backpropagation."
    },
    {
      url: "https://blog.suneetmahajan.com/posts/prime-cicadas/",
      title: "Are You Worse at Maths than a Cicada?",
      description:
        "A lighthearted investigation into the mathematical properties of prime-numbered cicadas."
    },
    {
      url: "https://blog.suneetmahajan.com/posts/amogus-trick/",
      title: "Amogus Trick",
      description:
        "A self-named method to determine whether a binary system consisting of equations of the form xi = yi and xi =/= yi is solvable in O(α(n) + m) time and O(n) memory, along with its applications in theoretical computer science problems"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I'll do one of these eventually I hope 😅"
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Will I ever have a use for this?",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "I won't bite, I promise!",
//  number: "",
  email_address: "suneetmahajan5 <at> gmail <dot> com"
};

// Twitter Section

const twitterDetails = {
  userName: "suneet02", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  techStack,
  workExperiences,
  educationInfo,
  openSource,
  bigProjects,
  achievementSection,
  problemSolving,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};