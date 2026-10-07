export default function Card({ emoji, title, text }) {
    return (
        <div className="card">
            <div className="card-emoji">{emoji}</div>
            <h2 className="card-title">{title}</h2>
            <p className="card-text">{text}</p>

        </div>
    )
}