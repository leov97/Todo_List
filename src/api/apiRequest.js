
export const apiRequest = async() =>{
    try{
    const response = await fetch('http://localhost:5000/task', {method: 'GET'})
    const data = await response.json()
    return data
    }catch(error){
        console.log(error)
        return []
    }
}