import Button from "./eventsComponents/Button"

function Evento({numero}) {

    function meuEvento() {
        console.log('Ativando primeiro evento')
    }

    function segEvento() {
        console.log('Ativando segundo evento')
    }

    return(
        <div>
            <p>Clique para disparar um evento:</p>
            <Button event={meuEvento} text="Primeiro evento"/>
            <Button event={segEvento} text="Segundo evento"/>
        </div>
    )
}

export default Evento