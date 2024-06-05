import { useState } from "react"
import QuestionsElement from "./QuestionsElement"

const questions = [
    {   id:1,
        question: "What is Frontend Mentor, and how will it help me?",
        answer: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It’s suitable for all levels and ideal for portfolio building."
    },
    {   id:2,
        question: 'Is Frontend Mentor free?',
        answer: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
    },

    {   id:3,
        question: 'Can I use Frontend Mentor projects in my portfolio?',
        answer: "Yes, you can use projects completed on Frontend Mentor in your portfolio.It's an excellentway to showcase your skills to potential employers!"
    },

    {   id:4,
        question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",

        answer: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
    }

]



function ListQuestions() {
    const [active,setActive]=useState(null)
    return (
        <ul className="divide-y">
            {questions.map((element)=>(
                <QuestionsElement element={element} active={active} setActive={setActive} id={element.id} key={element.id}/>
            ))}
        </ul>
    )
}

export default ListQuestions
