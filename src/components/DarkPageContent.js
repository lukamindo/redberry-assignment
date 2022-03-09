import "./DarkPageContent.css"

export default function DarkPageContent(props) {
    return (
        <p className={`DarkPageContent ${props.DarkPageContentClass}`} >{props.children}</p>
        
    )
}