export class router {
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
        file_name = element_id.toLowerCase() + ".html";
        xhr.open('get', 'templates/' + file_name, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                document.getElementById(element_id).innerHTML = xhr.responseText;
            }
        }
        xhr.send();
    }
}
