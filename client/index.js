class router {
    constructor(home_path) {
        this.home_path = home_path;
        this.current_path = null;
    }

    changeRoute(element_id) {
        let target_element = element_id;
        let target_path = this.home_path;
        target_path = this.home_path.substring(0, target_path.search("#^#")) + "#^#" + element_id;
        window.history.replaceState({}, "Jaimin Patel", target_path)
        this.loadData(target_element);
    }

    loadData(element_id) {

        // if target path element and current path is same then do nothing...
        if (element_id === this.current_path){
            return;
        }

        var xhr = typeof XMLHttpRequest != 'undefined' ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
        let file_name = element_id.toLowerCase() + ".html";

        xhr.open('get', 'templates/' + file_name, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                document.getElementById("CONTENT-BOX").innerHTML = xhr.responseText;
            }
        }
        xhr.send();

        this.current_path = element_id;

    }
}

const home_path = window.location.href;
const curr_router = new router(home_path);
const tab_css_link = document.getElementById("TAB-CSS-LINK");

function changeActiveTab(element_id){
    // set all tab class to normal
    document.getElementById('HOME').classList = ['link-tab'];
    document.getElementById('WORK').classList = ['link-tab'];
    document.getElementById('ABOUT_ME').classList = ['link-tab'];

    // set active tab class to active
    document.getElementById(element_id).classList = ['link-tab-active'];

}

function tabClicked(element_id){
    curr_router.changeRoute(element_id);
    changeActiveTab(element_id);
    tab_css_link.href = "templates/" + element_id.toLowerCase() + ".css";
}

tabClicked("HOME");
