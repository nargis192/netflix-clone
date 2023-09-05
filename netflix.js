let Ndiv1 = document.querySelector(".diva");
console.log(Ndiv1);

let blanck1=document.querySelector(".blank1");
console.log(blanck1);
let blanck2=document.querySelector(".blank2");
console.log(blanck2);
let blanck3=document.querySelector(".blank3");
console.log(blanck3);
let blanck4=document.querySelector(".blank4");
console.log(blanck4);
let blanck5=document.querySelector(".blank5");
console.log(blanck5);
let blanck6=document.querySelector(".blank6");
console.log(blanck6);

let iconjs1=document.querySelector(".icon1");
console.log(iconjs1);
let iconjs2=document.querySelector(".icon2");
console.log(iconjs2);
let iconjs3=document.querySelector(".icon3");
console.log(iconjs3);
let iconjs4=document.querySelector(".icon4");
console.log(iconjs4);
let iconjs5=document.querySelector(".icon5");
console.log(iconjs5);
let iconjs6=document.querySelector(".icon6");
console.log(iconjs6);



let Ndiv2=document.querySelector(".divb");
console.log(Ndiv2);

let Ndiv3=document.querySelector(".divc");
console.log(Ndiv3);

let Ndiv4=document.querySelector(".divd");
console.log(Ndiv4);

let Ndiv5=document.querySelector(".dive");
console.log(Ndiv5);

let Ndiv6=document.querySelector(".divf");
console.log(Ndiv6);

let Ndiv7=document.querySelector(".dive");
console.log(Ndiv7);

let clickcount1=0;


Ndiv1.addEventListener("click" , () => {
        clickcount1++;
        console.log(clickcount1);

        if(clickcount1 % 2 === 1){
            blanck1.style.display="flex";
            let addeddiv1=document.createElement("div");
            let textnode=document.createTextNode ("Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.");
            let textnode1=document.createTextNode (" You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!");
            addeddiv1.appendChild(textnode);
            addeddiv1.appendChild(textnode1);
            blanck1.appendChild(addeddiv1);
            iconjs1.innerHTML="×";
           
        }
        else{
            blanck1.style.display="none";
            iconjs1.innerHTML="+";
            blanck1.innerHTML='';
         }
})

let clickcount2=0;

Ndiv2.addEventListener("click" , () => {
    clickcount2++;
    console.log(clickcount1);

    if(clickcount2 % 2 === 1){
        blanck2.style.display="flex";
        let addeddiv2=document.createElement("div");
        let textnode2=document.createTextNode ("Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.");
        addeddiv2.appendChild(textnode2);
        blanck2.appendChild(addeddiv2);
        iconjs2.innerHTML="×";
    }
    else{
        blanck2.style.display="none";
        iconjs2.innerHTML="+";
        blanck2.innerHTML='';
     }
})

let clickcount3=0;

Ndiv3.addEventListener("click" , () => {
    clickcount3++;
    console.log(clickcount3);

    if(clickcount3 % 2 === 1){
        blanck3.style.display="flex";
        let addeddiv3=document.createElement("div");
        let textnode3=document.createTextNode ("Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.");
        addeddiv3.appendChild(textnode3);
        blanck3.appendChild(addeddiv3);
        iconjs3.innerHTML="×";
    }
    else{
        blanck3.style.display="none";
        iconjs3.innerHTML="+";
        blanck3.innerHTML='';
     }
})

let clickcount4=0;

Ndiv4.addEventListener("click" , () => {
    clickcount4++;
    console.log(clickcount4);

    if(clickcount4 % 2 === 1){
        blanck4.style.display="flex";
        let addeddiv4=document.createElement("div");
        let textnode4=document.createTextNode ("Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.");
        addeddiv4.appendChild(textnode4);
        blanck4.appendChild(addeddiv4);
        iconjs4.innerHTML="×";
    }
    else{
        blanck4.style.display="none";
        iconjs4.innerHTML="+";
        blanck4.innerHTML='';
     }
})

let clickcount5=0;

Ndiv5.addEventListener("click" , () => {
    clickcount5++;
    console.log(clickcount5);

    if(clickcount5 % 2 === 1){
        blanck5.style.display="flex";
        let addeddiv5=document.createElement("div");
        let textnode5=document.createTextNode ("Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.");
        addeddiv5.appendChild(textnode5);
        blanck5.appendChild(addeddiv5);
        iconjs5.innerHTML="×";
    }
    else{
        blanck5.style.display="none";
        iconjs5.innerHTML="+";
        blanck5.innerHTML='';
     }
})

let clickcount6=0;

Ndiv6.addEventListener("click" , () => {
    clickcount6++;
    console.log(clickcount6);

    if(clickcount6 % 2 === 1){
        blanck6.style.display="flex";
        let addeddiv6=document.createElement("div");
        let textnode6=document.createTextNode ("The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.");
        addeddiv6.appendChild(textnode6);
        blanck6.appendChild(addeddiv6);
        iconjs6.innerHTML="×";
    }
    else{
        blanck6.style.display="none";
        iconjs6.innerHTML="+";
        blanck6.innerHTML='';
     }
})





