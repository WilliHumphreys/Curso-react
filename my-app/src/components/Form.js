import { useState } from 'react'

function Form(params) {

    function cadUser(e) {
        e.preventDefault()
        console.log(name)
        console.log(password)
        console.log("Cadastrou o usuario")
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return(
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadUser}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input 
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Digite seu nome"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="senha">Senha:</label>
                    <input 
                        type="password"
                        id="senha"
                        name="senha"
                        placeholder="Digite sua senha"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <input type="Submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Form