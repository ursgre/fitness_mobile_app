function start(){
    var id = "data1";
    document.getElementById("page_content").innerHTML = document.getElementById(id).innerHTML;
    document.getElementById(id).remove="hidden";
}

function change_content(id, numberOfLoops, forgotPasswordPage, changeContentAlign){
    document.getElementById("page_content").innerHTML = document.getElementById(id).innerHTML;

    for (let i = 1; i <= numberOfLoops; i++) {
        document.getElementById("data"+i).add="hidden";
    }

    if(forgotPasswordPage) {
        if(id === "data2") {
            document.getElementById("phone").style.background = "#0b0b12";
            document.getElementById("phone").style.alignContent = "center";
            var element = document.getElementById("image_container");
            element.classList.add("hidden");
        }
        else {
            document.getElementById("phone").style.background = "linear-gradient(0deg, rgba(11,11,18,1) 50%, rgba(217,217,217,0) 100%)";
            document.getElementById("phone").style.alignContent = "flex-start";
            var element = document.getElementById("image_container");
            element.classList.remove("hidden");
        }
    }

    if(changeContentAlign) {
        if(id === "data2" || id === "data3") {
            document.getElementById("phone").style.alignContent = "center";
        }
        else {
            document.getElementById("phone").style.alignContent = "flex-start";
        }
    }
    
    document.getElementById(id).remove="hidden";
}