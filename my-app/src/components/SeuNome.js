function SeuNome({ setNome }) {
    return (
        <div>
            <h1>Digite o sue nome</h1>
            <input type="text" placeholder="Qual é o seu nome?" onChange={(e) => setNome(e.target.value)}/>
        </div>
    )
}

export default SeuNome