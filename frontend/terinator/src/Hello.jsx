import './Hello.css'
export default function Hello(props) {

    return (
    <div className="hello">
    <h1>Hello világ! </h1>
    <p>Ez egy sima szöveg</p>
    <p>{props.udvozlet}</p>
    </div>

)}