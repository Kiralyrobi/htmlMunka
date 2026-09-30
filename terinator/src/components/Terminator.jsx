export default function Terminator(props) {
    return(
        <div className="bg-light-blue dib br3 pa3 ma2 grow">
            <img src={`https://robohash.org/${props.id}?size=180x180`} alt="terminátor" />
            <div>
                <h2>{props.name}</h2>
                <p>SN: {props.serialNumber}</p>
            </div>
        </div>
    )
}