'use strict';



/**
 * add Event on elements
 */
// document.addEventListener('contextmenu', (event) => {
//   event.preventDefault();
// });
// Content for each internship
const contentArray = [
  {
    title: "Javascript",
    description: [
      "Learn JavaScript basics: variables, functions, events, and DOM manipulation.",
      "Focus on making websites interactive.",
      "Prepares you for web development."
    ]
  },
  {
    title: "Full-Stack Development",
    description: [
      "Master HTML, CSS, and JavaScript for front-end development.",
      "Explore frameworks like React or Angular.",
      "Focus on creating responsive and dynamic websites."
    ]
  },
  {
    title: "Cyber Security",
    description: [
      "Basics of network security, cryptography, and ethical hacking.",
      "Learn to identify vulnerabilities and protect systems."
    ]
  },
  {
    title: "Data Analyst",
    description: [
      "Introduction to data cleaning, visualization, and interpretation.",
      "Tools: Excel, Power BI, Tableau, and Python libraries like Pandas.",
      "Focus on extracting insights from datasets."
    ]
  },
  {
    title: "AI Course",
    description: [
      "Learn AI fundamentals: neural networks, machine learning algorithms.",
      "Tools: TensorFlow, PyTorch, or scikit-learn.",
      "Work on projects like chatbots or image classifiers."
    ]
  },
  {
    title: "Digital Marketing",
    description: [
      "Master SEO, social media marketing, and Google Ads.",
      "Learn analytics tools to track marketing performance."
    ]
  },
  {
    title: "Python Development",
    description: [
      "Learn Python basics: syntax, data types, loops, and conditionals.",
      "Introduction to object-oriented programming (OOP) and libraries.",
      "Ideal for beginners to gain programming fundamentals."
    ]
  },
  {
    title: "MySQL",
    description: [
      "Learn database design, queries, and optimization techniques.",
      "Work with real-world datasets and build back-end applications."
    ]
  },
  {
    title: "Portfolio Development",
    description: [
      "Combine knowledge from all courses to build projects:",
      "Portfolio Website: Using Web Development and JavaScript.",
      "Data Analysis Project: Using MySQL and Python.",
      "AI Application: Based on the AI course.",
      "Marketing Strategy Report: From Digital Marketing concepts.",
      "Document all projects in a professional portfolio."
    ]
  }
];


const showPopup = (title) => {
  const popupTitle = document.getElementById('popup-title');
  const popupDescription = document.getElementById('popup-description');

  // Find the matching content by title
  const selectedContent = contentArray.find(item => item.title === title);

  // Update popup title
  popupTitle.textContent = selectedContent?.title || "Title not available";

  // Clear previous description content
  popupDescription.innerHTML = "";

  // Add each description line as an <li> item if description exists
  if (selectedContent?.description) {
    const ul = document.createElement('ul');
    selectedContent.description.forEach(line => {
      const li = document.createElement('li');
      li.textContent = line;
      ul.appendChild(li);
    });
    popupDescription.appendChild(ul);
  } else {
    popupDescription.textContent = "Details not available.";
  }

  document.getElementById("popup").style.display = "block";
};

const hidePopup = () => {
  document.getElementById("popup").style.display = "none";
};

  
  


const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}




/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header & back top btn show when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const headerActive = function () {
  if (window.scrollY > 80) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", headerActive);