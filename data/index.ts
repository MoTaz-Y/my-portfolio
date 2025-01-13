export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently working on CarePulse project for health care",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Threads Clone - Social Media App",
    des: "Explore and connect with a global community of people who share their passions and interests.",
    img: "/p1.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/MoTaz-Y/Threads-II",
  },
  {
    id: 2,
    title: "User Portfolio - in 3d style",
    des: "A Real Software-portfolio web page using the React and react-three-fiber tech.",
    img: "/p2.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/MoTaz-Y/3D-Portfolio",
  },
  {
    id: 3,
    title: "Movie - TV Shows App",
    des: "A Movie and TV Shows website to see the latest movies and TV shows using React .",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/MoTaz-Y/tMovies",
  },
  {
    id: 4,
    title: "Netflix Clone App",
    des: "Recreated Netflix website as a personal project using React.js, Tailwind CSS, Node.js and Framer Motion.",
    img: "/p4.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/MoTaz-Y/NetflixClone",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Motaz was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Ahmed Shawky",
    title: "Softare Engineer",
    img: "/Shawky.jpg",
  },
  {
    quote:
      "Understanding my vision and implementing it was a great experience. Motaz's expertise and dedication were evident in every aspect of the project. Recommending him for any future projects is a no-brainer.",
    name: "Muhammad Al Baraa",
    title: "Head accountant",
    img: "/Baraa.jpg",
  },
  {
    quote:
      "It was a very positive experience working with Motaz. He is a talented and skilled Engineer. He was able to maintain very good quality of work .It was a pleasure working with him.",
    name: "Nour Turky",
    title: "Cardiologist and Vascular Doctor",
    img: "/Nour.jpg",
  },
  {
    quote:
      "Motaz is a talented and skilled Engineer. He consistently delivers high-quality work and is a valuable asset to any team. I highly recommend working with him.",
    name: "Tareq Khalefa",
    title: "Senior Electrical Engineer",
    img: "/Tareq.jpg",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Full Stack Engineer Intern",
    desc: "Designed and developed E-commerce app  using React.js and Node.js.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Portfolio Project",
    desc: "Developed and maintained user-facing features using React.js and Tailwind CSS and Three.js.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Full Stack Engineer",
    desc: "Cloning Threads website using Next.js, Tailwind CSS, and Three.js.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/MoTaz-Y",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/motazyasser_y",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://linkedin.com/in/motaz-yasser",
  },
];
