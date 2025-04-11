import proj1 from '../assets/images/proj1.png'
import proj2 from '../assets/images/proj2.png'
import proj3 from '../assets/images/proj3.png'
import proj4 from '../assets/images/proj4.png'
import proj5 from '../assets/images/proj5.png'
import proj6 from '../assets/images/guess the word.png'
import modal1 from '../assets/images/Modal1.png'
import modal2 from '../assets/images/Modal2.png'
import modal3 from '../assets/images/Modal3.png'
import modal4 from '../assets/images/Modal4.png'
import modal5 from '../assets/images/Modal5.png'
import modal6 from '../assets/images/Modal6.png'


const projects = [
    { id: 1, toR: true, image: proj1,modal:modal1 , title: "THE MOVIE DB", description: "This project marked my first experience with React, where I explored its capabilities to build dynamic and responsive web applications. Leveraging the Movie DB API, The project focused on  data fetching, state management, and routing in React, providing a seamless and interactive user experience.", tools: ["REACT",'VITE'], Link: 'https://ahmedalsaid03.github.io/The_Movie_DB/#/home'},
    { id: 2, toR: false, image: proj2, modal: modal2 , title: "Bakery", description: "This project was my introduction to web development, where I created a static website using HTML and CSS. It served as a hands-on experience to master the foundational concepts of web design, including layout structure, styling.", tools: ["html", "css"], Link:'https://ahmedalsaid03.github.io/Bakery-Project/' },
    { id: 3, toR: true, image: proj3, modal: modal3 , title: "DANIELS", description: "This project was my first step into integrating JavaScript into web development. I built a responsive website that included basic interactivity using JavaScript,  It was a significant milestone where I combined HTML, CSS, and JavaScript to create a functional and mobile-friendly design, gaining a deeper understanding of responsive layouts and client-side scripting.", tools: ["html", "css", "js"], Link:'https://ahmedalsaid03.github.io/Daniel-Project/' },
    { id: 4, toR: false, image: proj4, modal: modal4,  title: "TYPING SPEED TESTER", description: "While practicing on the Typing Racer website to improve my typing speed, I had the idea to create my own platform for testing typing speed. This project allowed me to design and develop a typing speed test application, combining HTML, CSS, and JavaScript. The application calculates typing accuracy, words per minute (WPM), and characters per minute (CPM) dynamically over a customizable time interval. This project not only enhanced my JavaScript skills but also provided a practical solution for users to measure and improve their typing performance.", tools: ["html", "css", "js"], Link:'https://ahmedalsaid03.github.io/Typing-Speed-Tester/' },
    { id: 5, toR: true, image: proj5, modal: modal5 , title: "MEMORY GAME", description: "In this project, I developed a classic memory game to enhance my skills in JavaScript, particularly focusing on setTimeout and localStorage. The game challenges users to match pairs of cards within a time limit, adding an interactive and engaging experience. I utilized setTimeout to create delays for card flips and added persistence by storing player progress and scores in localStorage. This project served as an excellent exercise to refine my understanding of JavaScript's asynchronous behavior and client-side data storage.", tools: ["html", "css", "js"], Link:'https://ahmedalsaid03.github.io/Memory-Game/' },
    { id: 6, toR: false, image: proj6, modal: modal6,  title: "GUESS THE WORD", description: "This project was a fun and challenging way to sharpen my JavaScript skills by focusing on implementing game logic. In Guess the Word , players attempt to deduce a hidden word based on clues or limited guesses. Building this game allowed me to deepen my understanding of programming logic, enhance problem-solving skills, and manage game states efficiently. The project was a valuable step in mastering JavaScript fundamentals and creating interactive user experiences.", tools: ["html", "css", "js"], Link:'https://ahmedalsaid03.github.io/Guess-The-Word-Game/' },
]

export default projects;