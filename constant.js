const { Dimensions } = require("react-native");

export const container = {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
}


export const API_HELPER = async (route_name, data, method="POST") => {
    const URL = 'https://firealert.tksproject.xyz/mobileapi/' + route_name;

    let return_api = {
        status_code:200,
        status:'success',
        message:'success',
        data:[]
    }


    try {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        //PARAMETER YANG DIHANTAR KE BACK END
        var raw = JSON.stringify(data);

        var requestOptions = {
            method: method,
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        await fetch(URL, requestOptions)
        .then(response => response.json())
        .then(result => {
        console.log(result)

            return_api.status_code  =   result.status_code
            return_api.status       =   result.status
            return_api.message      =   result.message
            return_api.data         =   result.data
        })
        .catch(error => console.log('error', error));
        
    } catch (error) {

        console.log("SYSTEM ERROR :", error)
        return_api.status_code  =   500
        return_api.status       =   'Internal Server Error'
        return_api.message      =   'Internal Server Error. Please contact your system administrator'
        return_api.data         =   []
        
    }

    return return_api;
}

