import Item from "./Item"

function List() {
    return (
        <>
            <h1>Minhas lista</h1>
            <ul>
                <Item marca="Ferrari" lancamento={1985}/>
                <Item marca="Fiat" lancamento={1964}/>
                <Item marca={"Chevrollet"} lancamento={1997}/>
            </ul>
        </>
    )
}

export default List