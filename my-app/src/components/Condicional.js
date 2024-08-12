import { useState } from "react"

function Condicional() {

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e) {
        e.preventDefault()
        setUserEmail(email)
    }

    function limparEmail() {
        setUserEmail("")
    }


    return (
        <div>
            <h2>Cadastre seu email</h2>
            <form>
                <input type="email" placeholder="Digite o seu email" onChange={(e) => setEmail(e.target.value)}/>
                <button onClick={enviarEmail}>enviar email</button>
                {userEmail && (
                    <div>
                        <p>O email do usuario é: {userEmail}</p>
                        <button onClick={limparEmail}>Limpar email</button>
                    </div>
                )}
            </form>
        </div>
    )
}

export default Condicional