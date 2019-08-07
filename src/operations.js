import actions from './actions'

const fetchAPI = async () => {
    const reposne = await fetch('https://api.github.com/users/Nico2d', {method: 'GET'})
    const json =await reposne.json()

    return json
}

export const getGit = () =>
    async(dispatch) => {
        const GitHub = await fetchAPI()
        console.log(GitHub)
    }
