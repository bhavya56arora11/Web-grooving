    let counter = 1;
    let btn = document.getElementsByClassName("btn");
    btn[counter-1].checked = true;
    function shiftimg(n){
        counter = n;
        let slide = document.getElementsByClassName("slides")
        slide[0].style.marginLeft =String((counter-1) * (-100)) + "%";
        btn[counter-1].checked = true;
    }
    setInterval( automatic_slide , 3000)
    function automatic_slide(){
        shiftimg(counter)
        counter += 1;
        if( counter > 4){
            counter = 1;
        }
    }