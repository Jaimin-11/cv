import { router} from "./router.js";

const home_path = window.location.href;
console.log(home_path);

const curr_router = new router(home_path);

console.log("obj", curr_router.home_path);

document.getElementsByClassName("link-tab").addEventListener("click", tabClicked(), false);

function tabClicked(element_id){
    console.log("clicked");
    curr_router.changeRoute(element_id);
}
