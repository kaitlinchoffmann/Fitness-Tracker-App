import myFetch from "./myFetch";

let ob = {
    CurrentUser: null,
    async Login(email, password){
        const user = await myFetch('/user/login', { email, password });
        
        return this.CurrentUser = user;
    },
    async Logout() {
        const user = await myFetch('/user/logout');
        return this.CurrentUser = null;
    },
    async Register(email, name, age, pw, cpw, h, w, act, goal, sex){
        const newUser = await myFetch('/user/register', { email, name, age, pw, cpw, h, w, act, goal, sex });
        return this.CurrentUser = newUser;
    }
}

export default ob;


