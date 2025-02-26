import ApiRouter from "./apiRouter";

function Api(table:string, method:string, id?:number, content?:string) {
    const url = ApiRouter(table, method, id)
    const requestOptions = {
        method: method.toUpperCase(),
        headers: { 'Content-Type': 'application/json' }
    };

    if (method.toUpperCase() !== "GET" && content) {
        requestOptions.body = JSON.stringify(content);
    }

    console.log(requestOptions)
    console.log(url)
    return fetch(url, requestOptions)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            switch (method) {
                case "post":
                    return response.json();
                case "get":
                    if (id) {
                        return response.json()
                    } else {
                        return response.json()
                    }
                case "put":
                    return response.json()
                case "delete":
                    return response.json()
            }
        })
        .catch((error) => {
            console.error("API Error:", error);
            throw error;
        })
}

export default Api