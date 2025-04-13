import { Feature } from '../../components';
import "./features.css"

const featuresData = [
    {
        title: 'Improving end distrusts instantly',
        text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
    },
    {
        title: 'Become the tended active',
        text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
    },
    {
        title: 'Message or am nothing',
        text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
    },
    {
        title: 'Really boy law county',
        text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..',
    },
];

const Features = () => {
    return (
        <div className="gpt__features section__padding" id="features">
            <div className="gpt__features-heading">
                <h1 className="gradient__text">The Future is now and you just have to realize it. Step Into future today and Make It Happen</h1>
                <p>Request Early Access to Get Started</p>
            </div>

            <div className="gpt__features-container">
                {featuresData.map((feature, index) => (
                    <Feature
                        key={feature.title + index}
                        title={feature.title}
                        text={feature.text}
                    />
                ))}
            </div>
        </div>
    )
}

export default Features