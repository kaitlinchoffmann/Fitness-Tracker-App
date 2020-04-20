import { CurrentUser } from "./Users";
import myFetch from "./myFetch";

export let State = {};

export function driInit(){
    myFetch('/user')
        .then(x=> { 
            State = x;
            console.log(x);
        });
}