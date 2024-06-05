

function QuestionsElement({ element,active,setActive,id}) {
    const { question, answer } = element
    function x() {
        if (id===active) {
            setActive(null)
            return
        }
        setActive(id)
    }
    return (
        <li className=" cursor-pointer p-2" onClick={x}>
            <div className="flex justify-between  gap-2">
                <h2 >{question}</h2>
                <img src={`images/icon-${active===id?"minus":"plus"}.svg`} alt="" />
            </div>
            {active===id && <p className=" text-Grayish-purple my-2">{answer}</p>}
        </li>
    )
}

export default QuestionsElement
