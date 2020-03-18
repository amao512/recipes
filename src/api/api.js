import Client from '../contentful';

export const getAPI = async () => {
    try {
        return await Client.getEntries({
            content_type: 'reactRecipes',
        })
    } catch (error) {
        console.log(error)
    }
}