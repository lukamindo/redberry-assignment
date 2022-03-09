import "./Heading.css"


export default function Heading (props) {
    return (
        <h1 className={`Heading ${props.HeadingClass}`}>{props.children}</h1>
    )
}   

