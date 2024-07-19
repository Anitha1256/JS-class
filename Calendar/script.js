var div = document.createElement("div");
div.className = "main";

var input = document.createElement("input");
input.setAttribute("type","date");
input.id = "dob";

var button = document.createElement("button")
button.setAttribute("type","button");
button.className = "btn btn-primary";
button.innerHTML = "Display Data";
button.addEventListener("click",date_generator)
div.append(input,button);


function date_generator(){
    var res = document.getElementById("dob").value;
    var inputdate = new Date(res);
    var currentdate = new Date();
    console.log(inputdate,currentdate);
    var p = document.createElement("p");
    var millisecdiff = parseInt(currentdate.getTime() - inputdate.getTime()); 
    p.innerText = `millisecond is`+" " + millisecdiff;
    var secdiff = Math.floor(millisecdiff/1000);
    console.log(secdiff);
    var p1 = document.createElement("p");
    p1.innerText = `Second is`+ " " + secdiff;
    var mindiff = Math.floor(secdiff/60);
    console.log(mindiff);
    var p2 = document.createElement("p");
    p2.innerHTML = `Minute `+" "+ mindiff;
    var hrdiff = Math.floor(mindiff/60)
    console.log(hrdiff);
    var p3 = document.createElement("p");
    p3.innerHTML= `Hour is`+" "+ hrdiff
    var daydiff = Math.floor(hrdiff/24)
    console.log(daydiff);
    var p4 = document.createElement("p");
    p4.innerHTML= `Day is`+" "+ daydiff;
    var yeardiff = Math.floor(currentdate.getFullYear()-inputdate.getFullYear());
    console.log(yeardiff);
    var p5= document.createElement("p");
    p5.innerHTML = `Year is`+" "+ yeardiff;
    var monthdiff = (yeardiff*12)+(currentdate.getMonth()-inputdate.getMonth());
    console.log(monthdiff);
    var p6 = document.createElement("p");
    p6.innerHTML = `Year is`+" "+ monthdiff;
    div.append(p5,p6,p4,p3,p2,p1,p);

}

document.body.append(div);


