import { Ai, People } from "../../assets"

import "./header.css"

const Header = () => {
    return (
        <header className="gpt__header section__padding" id="home">
            <div className="gpt__header-content">
                <h1 className="gradient__text">Let's Build something amazing with GPT OpenAI</h1>
                <p>Try out amazing features that comes with GPT to create anything of your imagination.</p>

                <div className="gpt__header-content__input">
                    <input type="email" placeholder="Your Email Address" />
                    <button type="button">Get Started</button>
                </div>

                <div className="gpt__header-content__people">
                    <img src={People} alt="people" />
                    <p>1,600 people requested access in the last 24 hours</p>
                </div>
            </div>

            <div className="gpt__header-image">
                <img src={Ai} alt="ai" />
            </div>
        </header>
    )
}

export default Header