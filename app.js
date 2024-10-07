let str = "";
let btns = [...document.querySelectorAll(".btns")];
let input = document.querySelector("input");

btns.forEach((btn) => {
    btn.addEventListener("click", (e) =>{
        if (e.target.innerHTML == '='){
            try {
                str = eval(str);
                input.value = str;
            } catch(error) {
                input.value = "error";
                str = "";
            }
            
        } else if(e.target.innerHTML == 'C') {
            str = '';
            input.value = str;
        } else if (e.target.innerHTML == '×'){
            str = str + '*'
        } else if (e.target.innerHTML == '%') {
            str = str/100;
        } else if (e.target.innerHTML == '+/-'){
            str = '-' + str;
            input.value = str;
        } else{
            console.log(e.target);
            str = str + e.target.innerHTML;
            input.value = str;
        } 
    })
})
