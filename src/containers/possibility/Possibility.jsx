import possibilityImage from "../../assets/possibility.png"
import "./possibility.css"

const Possibility = () => {
    return (
        <div className="gpt__possibility section__padding" id="possibility">
            <div className="gpt__possibility-image">
                <img src={possibilityImage} alt="possibility" />
            </div>

            <div className="gpt__possibility-content">
                <h4>Request Access to Get Started</h4>
                <h1 className="gradient__text">The possibilities are <br /> Beyond your imagination</h1>
                <p>Explore the endless possibilities with our cutting-edge technology. Join us to unlock new opportunities and redefine your potential.</p>
                <h4>Request Access to Get Started</h4>
            </div>
        </div>
    )
}

export default Possibility