import '../Titulo/styles.css'

function Titulo (props) {
    return (
        <div className= "title">
              <h1>{props.texto}</h1>
         </div>
    )
}

export default Titulo