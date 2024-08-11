import Item from "./Item"

function List() {
    return (
        <>
            <h1>Minhas lista</h1>
            <ul>
                <Item marca="Ferrari"/>
                <Item marca="Fiat"/>
                <Item marca="Chevrollet"/>
            </ul>
        </>
    )
}

export default List