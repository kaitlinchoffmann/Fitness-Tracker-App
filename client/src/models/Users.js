import myFetch, { User } from "./myFetch";

// export let CurrentUser = null;

// export async function Login(email, password) {

//     const user = await myFetch('/user/login', { email, password }) ;
//     console.log(User);

//     return CurrentUser = user;
// }


let ob = {
    CurrentUser: null,
    async Login(email, password){
        const user = await myFetch('/user/login', { email, password });
        
        return this.CurrentUser = user;
    }
}

export default ob;

export let CurrentDRI = {};

export async function currentDRI() {

    const dri = await myFetch('/user/getDRI') ;
    console.log(dri);

    return CurrentDRI = dri;
}


