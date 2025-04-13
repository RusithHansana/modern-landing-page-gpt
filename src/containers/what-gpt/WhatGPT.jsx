import { Feature } from "../../components";
import "./what-gpt.css"

const WhatGPT = () => {
    return (
        <div className="gpt__whatgpt section__margin" id="wgpt">
            <div className="gpt__whatgpt-feature">
                <Feature title="What is GPT" text="GPT is a state-of-the-art language processing AI model developed by OpenAI. It can generate human-like text, answer questions, and perform various language tasks." />
            </div>

            <div className="gpt__whatgpt-heading">
                <h1 className="gradient__text">The possibilities are beyond your imagination.</h1>
                <p>Explore the Library</p>
            </div>

            <div className="gpt__whatgpt-container">
                <Feature title="Chatbots" text="Chatbots powered by GPT can engage in natural conversations, providing customer support and assistance." />
                <Feature title="Knowledgebase" text="GPT can generate informative articles and summaries, making it a valuable tool for knowledge sharing." />
                <Feature title="Education" text="GPT can assist in tutoring, providing explanations and answering questions on various subjects." />
            </div>
        </div >
    )
}

export default WhatGPT