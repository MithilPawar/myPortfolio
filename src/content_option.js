import dentalImage from "./assets/images/dental.jpg";
import qr from "./assets/images/qr.png";
import rockPaper from "./assets/images/rockPaper.jpg";
import whether from "./assets/images/whether.jpg";
import headerImage from "./assets/images/head.jpg" ; 
import portfolioImage from "./assets/images/portfolio.jpg" ;
import passwordImage from "./assets/images/password.jpg" ;
import todoImage from "./assets/images/todo.jpg" ;

const logotext = "Mithil";
const meta = {
    title: "Mithil Pawar",
    description: "I’m Mithil Pawar, currently persuing my MCA from Mumbai University",
};

const introdata = {
    title: "I’m Mithil Pawar",
    animated: {
        first: "Building scalable web applications",
        second: "Crafting intuitive user experiences",
        third: "Developing innovative mobile solutions",
    },
    description: "Passionate about technology and innovation, I specialize in creating efficient, user-centric software solutions that drive meaningful impact.",
    your_img_url: headerImage,
};


const dataabout = {
    title: "A Bit About Myself",
    aboutme: "I am a passionate and dedicated developer with a strong foundation in web and mobile application development. I enjoy solving complex problems, exploring new technologies, and continuously improving my skills to deliver innovative and efficient solutions. With a keen eye for detail and a commitment to excellence, I strive to create impactful digital experiences.",
};

const worktimeline = [{
        jobtitle: "Masterb of Computer Application",
        where: "Finolex Academy of Management and Technology, Ratnagiri",
        date: "2025",
    },
    {
        jobtitle: "BSC Information Technology, Ratnagiri",
        where: "Gogate Jogalekar College",
        date: "2022",
    },
];

const skills = [{
        name: "JavaScript",
        value: 90,
    },
    {
        name: "ReactJs",
        value: 85,
    },
    {
        name: "NodeJs",
        value: 80,
    },
    {
        name: "MongoDB",
        value: 60,
    },
    {
        name: "Java",
        value: 85,
    },
];

const services = [
    {
        title: "Coming Soon",
        description: "I am currently focusing on honing my skills and working on exciting projects. Stay tuned for services I will offer in the near future!",
    },
];


const dataportfolio = [{
        img: dentalImage,
        description: "Dental Clinic Management System (C#)",
        link: "#",
    },
    {
        img: qr,
        description: "QR Code Generator(Javascript)",
        link: "#",
    },
    {
        img: rockPaper,
        description: "Rock Paper Scissors(Javascript)",
        link: "#",
    },
    {
        img: whether,
        description: "Whether Forecast (Java)",
        link: "#",
    },
    {
        img: portfolioImage,
        description: "Portfolio Website(Javascript)",
        link: "#",
    },

    {
        img: passwordImage,
        description: "Password Generator (ReactJs)",
        link: "#",
    },
    {
        img: todoImage,
        description: "Todo (ReactJs)",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "mithilpawar7044@gmail.com",
    YOUR_FONE: "+91 9860195017",
    description: "Feel free to reach out to me for collaboration, project inquiries, or any professional opportunities. I am always eager to connect and contribute to exciting ventures.",
    // Set up your EmailJS account 
    // Follow this tutorial for implementation: https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_ifzmskp",
    YOUR_TEMPLATE_ID: "template_f54wexf",
    YOUR_USER_ID: "quRJhpkA7Y-QVOtfM",
};


const socialprofils = {
    github: "https://github.com/MithilPawar",
    facebook: "https://facebook.com",
    linkedin: "linkedin.com/in/mithil-pawar/",
    twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};