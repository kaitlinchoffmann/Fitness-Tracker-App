import User from "./Users";

// const api_root = "http://localhost:3000";
const api_root = '';

export default async function myFetch(url, data){

    let response;
    const headers = {};
    if(User.CurrentUser && User.CurrentUser._id != null) {
        headers.authorization = "bearer " + User.CurrentUser._id; //our token
    }


    if(data){
        console.log(api_root + url);
        response = await fetch(api_root + url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
                ...headers,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
    }else{
        console.log(api_root + url);
        response = await fetch(api_root + url, { 
            headers
         });
    }

    if(response.ok){
        console.log({ success: true })
        return await response.json();
    }else{
        console.log({ success: response.statusText })
        throw await response.json();
    }
}