// import { router} from "./router.js";

class router {
    constructor(home_path) {
        this.home_path = home_path;
    }

    changeRoute(element_id) {
        let target_path = this.home_path + "/" + element_id;
        window.history.replaceState({}, "Jaimin Patel", target_path)
        this.loadData(target_path);
    }

    loadData(element_id) {
        var xhr = typeof XMLHttpRequest != 'undefined' ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
        let file_name = element_id.toLowerCase() + ".html";
        console.log("filename", file_name)
        xhr.open('get', 'templates/' + file_name, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                document.getElementById(element_id).innerHTML = xhr.responseText;
            }
        }
        xhr.send();
    }
}


const home_path = window.location.href;
console.log(home_path);

const curr_router = new router(home_path);

console.log("obj", curr_router.home_path);

// document.getElementsByClassName("link-tab").addEventListener("onclick", tabClicked(), false);

function tabClicked(element_id){
    console.log("clicked");
    curr_router.changeRoute(element_id);
}
