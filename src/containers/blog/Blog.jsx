import Article from "../../components/article/Article"
import blog1 from "../../assets/blog01.png"
import blog2 from "../../assets/blog02.png"
import blog3 from "../../assets/blog03.png"
import blog4 from "../../assets/blog04.png"
import blog5 from "../../assets/blog05.png"

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
                        imgUrl={blog1}
                        date="Sep 26, 2021"
                        text="GPT-3 and Open AI is the future. Let us explore how it is?"
                    />
                </div>
                <div className="gpt__blog-container__groupB">
                    <Article
                        imgUrl={blog2}
                        date="Sep 26, 2021"
                        text="GPT-3 and Open AI is the future. Let us explore how it is?"
                    />
                    <Article
                        imgUrl={blog3}
                        date="Sep 26, 2021"
                        text="GPT-3 and Open AI is the future. Let us explore how it is?"
                    />
                    <Article
                        imgUrl={blog4}
                        date="Sep 26, 2021"
                        text="GPT-3 and Open AI is the future. Let us explore how it is?"
                    />
                    <Article
                        imgUrl={blog5}
                        date="Sep 26, 2021"
                        text="GPT-3 and Open AI is the future. Let us explore how it is?"
                    />
                </div>
            </div>
        </div>
    )
}

export default Blog