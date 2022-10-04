

function f_toast() {
    toast.className = "show";
    setTimeout(function () {
        toast.className = toast.className.replace("show", "");
    }, 3000);
}


const toast = document.querySelector("#snackbar");  

console.log(toast);
let text = toast.textContent;
if (text != "") {
    if(text == "thêm thành công" || text == "sửa thành công" || text == "xóa thành công"){
        toast.style.background = "green";
    }else{
        toast.style.background = "red";
    }
   
    f_toast();
}
