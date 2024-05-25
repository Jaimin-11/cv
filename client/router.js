class router {
    constructor(current_path) {
        this.current_path = current_path;
    }

    changeRoute(target_path, element_id) {
        this.current_path = target_path;
        this.loadData(this.current_path);
    }

    loadData(target_path, element_id) {
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