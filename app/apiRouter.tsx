// const api = "http://10.0.2.2:8000"
const api = "http://192.168.1.41:8000"



function ApiRouter (table:string, method:string, id?:number) {

    if (id) {
        var apiUrl = `${api}/${table}/${id}/${method}`
    } else {
        var apiUrl = `${api}/${table}/${method}`
    }

    console.log(apiUrl)

    return apiUrl

}

export default ApiRouter