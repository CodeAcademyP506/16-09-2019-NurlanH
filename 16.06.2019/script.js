// My body
var mainBody = document.body;

mainBody.style.margin = "0px";
mainBody.style.padding = "0px";
mainBody.style.fontFamily = "verdana";



// Header
var header = document.createElement("header");
var hcontain = document.createElement("div");
var hbrand = document.createElement("div");
var hnav = document.createElement("div");
var hBrandWord = document.createElement("span");
var hnavList = ["Home", "About", "Services", "Contact"];



header.style.width = "100%";
header.style.height = "60px";
header.style.boxSizing = "border-box";
header.style.backgroundColor = "#212529";
header.style.display = "flex";
header.style.zIndex = "10";
header.style.justifyContent = "center";

hcontain.style.width = "70%";
hcontain.style.display = "flex";
hcontain.style.justifyContent = "space-between";
hcontain.style.alignItems = "center";

hBrandWord.innerText = "Start Bootstrap";
hBrandWord.style.color = "white";
hBrandWord.style.cursor = "pointer";



for (var i = 0; i < hnavList.length; i++) {
    var listSpan = document.createElement("a");
    listSpan.setAttribute("href", "#")
    listSpan.setAttribute("class", "def")
    listSpan.innerText = hnavList[i]
    listSpan.style.marginRight = "10px"
    listSpan.style.fontSize = "1em"
    listSpan.style.color = "#a8a8a8"
    listSpan.style.textDecoration = "none"
    listSpan.style.transition = "all 0.3s ease-in-out"
    listSpan.addEventListener("mouseover", function () {
        this.style.color = "white"
    })
    listSpan.addEventListener("mouseout", function () {
        this.style.color = "#a8a8a8"
    })
    hnav.appendChild(listSpan)
}



header.appendChild(hcontain)
hcontain.appendChild(hbrand)
hcontain.appendChild(hnav)
hbrand.appendChild(hBrandWord)


document.addEventListener("scroll",function(){
    if(window.scrollY >= 100){
        header.style.position = "fixed";
    }else{
        header.style.position = "static";        
    }
})


mainBody.appendChild(header)





// Website Content
var bigContentBox = document.createElement("section");
var bigContain = document.createElement("div");
var bigLeft = document.createElement("div");
var bigRight = document.createElement("div");
var bigLeftWord = document.createElement("h1");
var bigRightSlider = document.createElement("div");
var bigRightCardBox = document.createElement("div")
var bigRightCard = ["Item One", "Item Two", "Item Three", "Item Four", "Item Five", "Item Six"];


var bigLeftCategory = ["Category 1", "Category 2", "Category 3"]

bigContentBox.style.width = "100%";
bigContentBox.style.height = "auto";
bigContentBox.style.display = "flex";
bigContentBox.style.justifyContent = "center";


bigContain.style.width = "70%";
bigContain.style.display = "flex";
bigContain.style.paddingTop = "10px";

// left side
bigLeft.style.width = "30%";
bigLeft.style.height = "auto";
bigLeft.style.padding = "0 10px";

bigLeftWord.innerText = "Shop Name"
bigLeft.appendChild(bigLeftWord)

for (var c = 0; c < bigLeftCategory.length; c++) {
    var ctgr = document.createElement("a");
    ctgr.setAttribute("href", "#");
    ctgr.innerText = bigLeftCategory[c];
    ctgr.style.padding = "10px 20px";
    ctgr.style.border = "1px solid #d5d5d5";
    ctgr.style.borderRadius = "2px";
    ctgr.style.display = "block";
    ctgr.style.marginBottom = "5px";
    ctgr.style.color = "blue";
    ctgr.style.textDecoration = "none";

    ctgr.addEventListener("mouseover", function () {
        this.style.textDecoration = "underline";
    })
    ctgr.addEventListener("mouseout", function () {
        this.style.textDecoration = "none";
    })
    bigLeft.appendChild(ctgr)
}

// rigth side
bigRight.style.width = "70%";
bigRight.style.height = "auto";
bigRight.style.paddinbg = "0 10px";

var btnLeft = document.createElement("div")
var btnRight = document.createElement("div")

bigRightSlider.style.width = "100%";
bigRightSlider.style.height = "280px";
bigRightSlider.style.background = "gray";
bigRightSlider.style.display = "flex";
bigRightSlider.style.position = "relative";
bigRightSlider.id = "sliderBox";
bigRightSlider.style.overflow = "hidden";

btnLeft.style.position = "absolute"
btnLeft.style.width = "50px"
btnLeft.style.height = "280px"
btnLeft.style.background = "#a8a8a8"
btnLeft.style.cursor = "pointer"
btnLeft.style.zIndex = "5"



btnLeft.addEventListener('mouseover',function(){
    this.style.backgroundColor = "#838383"

})
btnLeft.addEventListener('mouseout',function(){
    this.style.backgroundColor = "#a8a8a8"
})


btnRight.style.position = "absolute"
btnRight.style.right = "0"
btnRight.style.width = "50px"
btnRight.style.height = "280px"
btnRight.style.background = "#a8a8a8"
btnRight.style.cursor = "pointer"
btnRight.style.zIndex = "5"


btnRight.addEventListener('mouseover',function(){
    this.style.backgroundColor = "#838383"
})
btnRight.addEventListener('mouseout',function(){
    this.style.backgroundColor = "#a8a8a8"
})


bigRightSlider.appendChild(btnLeft)
bigRightSlider.appendChild(btnRight)
bigRight.appendChild(bigRightSlider)

for (var s = 1; s < 3; s++) {
    var image = document.createElement("img")
    image.setAttribute("src", `images/slider${s}.png`)
    image.setAttribute("class", "img")
    image.style.width = "100%"
    image.style.height = "280px"
    image.style.height = "280px"
    image.style.transition = "all 0.3s ease-in-out"
    bigRightSlider.appendChild(image);

       
}


btnLeft.addEventListener("click", function () {
    var images = document.querySelectorAll('img');
        images[0].style.transform = "translateX(-100%)"
        images[1].style.transform = "translateX(-100%)"
})


btnRight.addEventListener("click", function () {
    var images = document.querySelectorAll('img');
        images[1].style.transform = "translateX(0%)"
        images[0].style.transform = "translateX(0%)"
})




bigRightCardBox.style.display = 'flex';
bigRightCardBox.style.flexWrap = 'wrap';
bigRightCardBox.style.justifyContent = 'space-between';
bigRightCardBox.style.marginTop = '20px';


for (var item = 0; item < bigRightCard.length; item++) {
    var rCard = document.createElement("div");
    var rCardImgBox = document.createElement("div")
    var rCardContectBox = document.createElement("div")
    var rcContent = document.createElement("h4")
    var rcContentPrice = document.createElement("h4")
    var rcContentDesc = document.createElement("span")
    var rCardFooter = document.createElement("div")

    rCard.style.width = "32%";
    rCard.style.height = "350px";
    rCard.style.border = "1px solid #a8a8a8";
    rCard.style.marginBottom = "10px";
    rCard.style.borderRadius = "3px";

    rCardImgBox.style.width = "100%";
    rCardImgBox.style.height = "130px";
    rCardImgBox.style.backgroundImage = "url('images/cardImg.png')";
    rCardImgBox.style.backgroundSize = "cover";
    rCardImgBox.style.backgroundRepeat = "no-repeat";
    rCardImgBox.style.backgroundPosition = "50%";
    rCard.appendChild(rCardImgBox)

    rCardContectBox.style.width = "100%";
    rCardContectBox.style.height = "170px";
    rCardContectBox.style.padding = "10px";
    rCardContectBox.style.boxSizing = "border-box";

    rcContent.innerText = bigRightCard[item]
    rcContent.style.color = "blue"

    rCard.appendChild(rCardContectBox)
    rCardContectBox.appendChild(rcContent)

    rcContentPrice.innerText = "$24.99"
    rCardContectBox.appendChild(rcContentPrice)


    rcContentDesc.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit"
    rCardContectBox.appendChild(rcContentDesc)

    rCardFooter.style.width = "100%";
    rCardFooter.style.height = "40px";
    rCardFooter.style.marginTop = "10px";
    rCardFooter.style.padding = "6px 10px";
    rCardFooter.style.boxSizing = "border-box";
    rCardFooter.style.borderTop = "1px solid #a8a8a8";
    rCardFooter.style.backgroundColor = "rgba(0,0,0,0.125)"
    rCardFooter.innerText = "★ ★ ★ ★ ☆"
    rCard.appendChild(rCardFooter)


    bigRightCardBox.appendChild(rCard)
}


bigRight.appendChild(bigRightCardBox)
bigContain.appendChild(bigLeft)
bigContain.appendChild(bigRight)
bigContentBox.appendChild(bigContain);
mainBody.appendChild(bigContentBox);



// Footer

var footer = document.createElement("footer");
var footerWord = document.createElement("p");

footer.style.width = "100%";
footer.style.height = "120px";
footer.style.backgroundColor = "rgb(33, 37, 41)";
footer.style.textAlign = "center";

footerWord.innerText = "Copyright © Your Website 2019";
footerWord.style.lineHeight = "120px";
footerWord.style.color = "white";

footer.appendChild(footerWord);

mainBody.appendChild(footer);
