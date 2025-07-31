import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Amitoj",
  lastName: "Singh",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  email: "amitojsingh95@gmail.com",
  location: "America/Edmonton", // Calgary, AB timezone
  languages: ["English", "Punjabi", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about software development, React.js, React Native,
      and share insights on building scalable applications.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/amitojsingh",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/singh-amitoj/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role} with 7+ years of experience in web and mobile development`,
  headline: <>Building scalable applications with React.js and React Native</>,
  featured: {
    display: true,
    title: (
      <>
        Recent project:{" "}
        <strong className="ml-4">Cross-platform Mobile App</strong>
      </>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Amitoj, a Software Engineer with over 7 years of experience in web and
      mobile application development,
      <br /> specializing in React.js and React Native. Passionate about
      building intuitive user experiences.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from Calgary, AB with 7+ years of experience`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/amitojsingh",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Amitoj is a Calgary-based Software Engineer with over 7 years of
        experience in web and mobile application development, specializing in
        React.js and React Native. He has a proven track record of delivering
        scalable, high-performance applications and collaborating across
        cross-functional teams. Adept at writing clean, maintainable code,
        authoring technical documentation, and driving development best
        practices. Passionate about building intuitive user experiences and
        contributing to the growth of innovative platforms through both
        technical expertise and leadership.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Khalis Foundation",
        timeframe: "01/2022 - Present",
        role: "Software Engineer",
        achievements: [
          <>
            Modernized legacy codebases (React, Node.js, TypeScript) using
            modular architecture and reusable components, improving performance
            and reducing maintenance overhead.
          </>,
          <>
            Built and deployed cross-platform apps in React Native (700k+
            installs), optimizing UI/UX and boosting active users by 20%.
          </>,
          <>
            Implemented CI/CD pipelines with Fastlane and GitHub Actions,
            streamlining app releases across iOS and Android.
          </>,
          <>
            Authored clear technical docs and onboarding workflows using Notion
            and ClickUp, reducing ramp-up time for new devs.
          </>,
          <>
            Collaborated in Agile teams, leading code reviews and promoting best
            practices in testing (Jest, Detox), linting, and version control.
          </>,
          <>
            Developed cross-platform software for mobile and desktop, with
            experience in native modules, Firebase, and AWS services.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "React Native App Development",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Fleet Hawks Inc.",
        timeframe: "10/2020 - 07/2022",
        role: "Software Developer",
        achievements: [
          <>
            Led a team of 10 developers, spearheading multiple projects to
            successful delivery.
          </>,
          <>
            Updated old code bases to modern development standards, improving
            functionality.
          </>,
          <>
            Collaborated with project managers to select ambitious but realistic
            coding milestones on pre-release software project development.
          </>,
          <>
            Utilized AWS services (EC2, S3, RDS, Lambda) to build scalable,
            secure cloud-based infrastructures, enhancing deployment pipelines
            and data storage solutions.
          </>,
          <>
            Designed intuitive graphical user interfaces to improve user
            experience.
          </>,
        ],
        images: [],
      },
      {
        company: "Cambridge Cultural Association",
        timeframe: "12/2019 - 09/2020",
        role: "Freelance Web Developer",
        achievements: [
          <>
            Planned website development, converting mockups into a usable web
            presence with HTML, JavaScript, AJAX and JSON coding.
          </>,
          <>
            Provided front-end website development using WordPress, WooCommerce
            and other editing software.
          </>,
          <>
            Provided security maintenance and patching on the website interface
            to maintain viability after launch.
          </>,
          <>
            Designed, implemented and monitored web pages, plugins and
            functionality for continuous improvement.
          </>,
          <>
            Oversaw technical issues and troubleshooting requests to resolve
            user problems.
          </>,
          <>
            Generated web hosting presence to accommodate specified needs and
            maintain files on account.
          </>,
          <>Gathered the user traffic with more than 10k users in one day.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Post Graduate Diploma: Web and Mobile App Design and Development",
        description: (
          <>
            Conestoga College - Kitchener, ON (2019). Elected as President of
            the Sikh Student Association in 2019. Dean's List Student of Highest
            Distinction.
          </>
        ),
      },
      {
        name: "Bachelor of Technology: Computer Science",
        description: (
          <>
            Guru Nanak Dev Engineering College - Ludhiana (2017). Member of the
            Linux User Group. Elected Captain of Cricket Team. Mentored Google
            Code-In. Awarded Best Project in the Education Category.
          </>
        ),
      },
      {
        name: "Diploma: Computer Science",
        description: (
          <>
            Guru Nanak Dev Polytechnic College - Ludhiana (2014). Member of the
            Great Developer Group. Awarded Most Innovative Project.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "Languages",
        description: (
          <>JavaScript (ES6+), TypeScript, C++, PHP, HTML, CSS/SASS</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "JavaScript Development",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Frameworks/Libraries",
        description: <>React.js, Angular, Redux, React Native, Next.js</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "React Development",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Tools & Technologies",
        description: (
          <>
            Git, Bitbucket, NPM, Docker, AWS (EC2, S3, RDS, Lambda), MySQL,
            Responsive & Mobile-Web Design, REST/GraphQL APIs, Low-Latency
            Messaging (WebSockets, Kafka), CI/CD, Agile/Scrum
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "AWS Cloud Services",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about software development and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Software development projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
