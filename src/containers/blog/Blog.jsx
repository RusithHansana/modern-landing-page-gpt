import { Article } from "../../components"
import { Blog01, Blog02, Blog03, Blog04, Blog05 } from "../../assets"

import "./blog.css"

const Blog = () => {
    return (
        <div className="gpt__blog section__padding" id="blog">
            <div className="gpt__blog-heading">
                <h1 className="gradient__text" >A lot is happening <br /> Let's catch up.</h1>
            </div>

            <div className="gpt__blog-container">
                <div className="gpt__blog-container__groupA">
                    <Article
                        imgUrl={Blog01}
                        date="Sep 26, 2021"
                        text="GPT-3 and Open AI is the future. Let us explore how it is?"
                    />
                </div>
                <div className="gpt__blog-container__groupB">
                    <Article
                        imgUrl={Blog02}
                        date="Sep 26, 2021"
                        text="GPT-3 and Open AI is the future. Let us explore how it is?"
                    />
                    <Article
                        imgUrl={Blog03}
                        date="Sep 26, 2021"
                        text="GPT-3 and Open AI is the future. Let us explore how it is?"
                    />
                    <Article
                        imgUrl={Blog04}
                        date="Sep 26, 2021"
                        text="GPT-3 and Open AI is the future. Let us explore how it is?"
                    />
                    <Article
                        imgUrl={Blog05}
                        date="Sep 26, 2021"
                        text="GPT-3 and Open AI is the future. Let us explore how it is?"
                    />
                </div>
            </div>
        </div>
    )
}

export default Blog