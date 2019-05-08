window.addEventListener('load',shuffleAll);
// GLOBALS
let twoSlices = [];


function shuffleAll(){
    let allLevelDivs = document.querySelectorAll('[class*="level"]');
    for (const levelDiv of allLevelDivs) {
        let allSlices = levelDiv.querySelectorAll('[class*="img-holder"]');

        let orderArray = [];
        for (let i = 0; i < allSlices.length; i++) {
            orderArray.push(i+1);
        }
        for (let i = 0; i < allSlices.length; i++) {
            let rand = Math.floor(Math.random()*orderArray.length)
            allSlices[i].style.order = orderArray[rand];
            orderArray.splice(rand,1);
        }
    }
    startTheGame();
}

function startTheGame(){
    // set navbar link to show hide
    setNavLinks() // done
    // set clicks on all slices
    addCliksToSlices() // clicks will call selectMe function
}

function selectMe(){
    twoSlices.push(this);
    this.style.border = "2px dotted green";

    if(twoSlices.length == 2){
            // get order of two clicks
      let orderFirst = window.getComputedStyle(twoSlices[0]).getPropertyValue('order');
      let orderSecond = window.getComputedStyle(twoSlices[1]).getPropertyValue('order');
         
             //reorder
         twoSlices[0].style.order = orderSecond;
         twoSlices[1].style.order = orderFirst;

             // remove border 
        twoSlices[0].style.border = "none";
        twoSlices[1].style.border = "none";

            // reset 
        twoSlices.length = 0;
    }
    
}

function addCliksToSlices(){
    let allSlices = document.querySelectorAll('[class*="img-holder"]');
    for (const slice of allSlices) {
        slice.addEventListener('click',selectMe)
    }
}

function setNavLinks(){
    let headerNavLinks = document.querySelectorAll('[data-lvl]');
    let allLevelDivs = document.querySelectorAll('[class*="level"]');
    for (let i = 0; i < headerNavLinks.length; i++) {
        const link = headerNavLinks[i];
        link.addEventListener('click',function(){
            twoSlices.length = 0;
            for (let i = 0; i < allLevelDivs.length; i++) {
                const element = allLevelDivs[i];
                element.style.display = "none";
            }
            let divToShow = document.querySelector('.'+this.getAttribute('data-lvl'));
            divToShow.style.display = "flex";
        });
    }
}





// let allSlices_1 = document.querySelectorAll('.img-holder');

// let level1Div = document.querySelector('.level-1');
// let level2Div = document.querySelector('.level-2');

// let order = [1,2,3,4];

// for (let i = 0; i < allSlices_1.length; i++) {
//     const slice = allSlices_1[i];
//     slice.addEventListener('click',changeOrder);
// }


// function changeOrder() {
//     twoSlices.push(this);
//     counter++;
//     this.style.border = "1px solid green";
//     if(counter === 2){
//         reorderDivs()
//     }
    
// }
// function reorderDivs(){
//     // get order of two clicks
//     let orderFirst = window.getComputedStyle(twoSlices[0]).getPropertyValue('order');
//     let orderSecond = window.getComputedStyle(twoSlices[1]).getPropertyValue('order');

//     //reorder

//     twoSlices[0].style.order = orderSecond;
//     twoSlices[1].style.order = orderFirst;

//     // remove border 
//     twoSlices[0].style.border = "none";
//     twoSlices[1].style.border = "none";

//     // reset 
//     counter = 0;
//     twoSlices.length = 0;

//     checkOrderAll();
// }
// function checkOrderAll() {
//     let nowOrder = [];
//     setTimeout(() => {
//         for (let i = 0; i < allSlices_1.length; i++) {
//             const slice = allSlices_1[i];
//             nowOrder.push(window.getComputedStyle(slice).getPropertyValue('order'));
//         }
//         if(nowOrder.toString() == order.toString()){
//             console.log("yeee");
            
//             level1Div.style.border = "5px solid green";
//             level1Div.style.boxShadow = "0 0 16px green";
//         }
//     }
//     ,350)
 
// }
