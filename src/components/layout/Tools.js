import React from "react";
import ToolsItem from "./ToolsItem";

const items = [
    { text: "HTML", icon: "icon-embed2" },
    { text: "CSS", icon: "icon-css3" },
    { text: "Sass", icon: "icon-sass" },
    { text: "JavaScript", icon: "icon-javascript" },
    { text: "jQuery", icon: "icon-jquery" },
    { text: "ReactJS", icon: "icon-react" },
    { text: "Redux", icon: "icon-redux" },
    { text: "Next.js", icon: "icon-next-dot-js" },
    { text: "Firebase", icon: "icon-firebase" },
    { text: "Node.js", icon: "icon-node-dot-js" }
]

const Tools = () => (
    <section className="tools">
        <h2 className="section-heading tools__heading">{"Tools & Languages"}</h2>
        <div className="tools__grid">
            {items.map((item, index) =>
                <ToolsItem
                    key={item.text}
                    text={item.text}
                    icon={item.icon}
                    mirror={index + 1 > Math.round(items.length / 2)}
                />)}
        </div>
    </section>
)

export default Tools;