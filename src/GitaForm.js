import React from 'react'

const GitsForm = () =>{
    const gitInput = React.createRef()

    const addGit = (e) => {
        e.preventDefault()
        console.log('form', gitInput.current.value)
    }

    return <form onSubmit={addGit}>
        <input ref={gitInput} />
        <button type='submit'>Add git</button>
    </form>
}

export default GitsForm