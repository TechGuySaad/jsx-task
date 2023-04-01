
export default function Greeting(props){
    return (<>
    <h1 style = {{color : props.color}}> Hello {props.name}</h1>

    </>);
}