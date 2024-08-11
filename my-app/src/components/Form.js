function Form(params) {

    function cadUser(e) {
        e.preventDefault()
        console.log("Cadastrou o usuario")
    }

    return(
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadUser}>
                <div>
                    <input type="text" placeholder="Digite seu nome"/>
                </div>
                <div>
                    <input type="Submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Form