/*
Instructions to use the fullpage object:-

To add a function to be called on the transition from section n to n+1 use the method setTransition()
eg:- Let's have a function protoFunc() which will do a console output
        Let's add this function for the transition from section 1 to 2. It can be add as follows
            fullpageObj.setTransition("1-2", protoFunc);

To make the fullpage move to the next section simple call the method nextSection()
        fullpageObj.nextSection();

To make the fullpage move to the previous section simple call the method prevSection()
        fullpageObj.prevSection()

To make the fullpage move to a specific section x call the method moveToSection(x)
eg:- Lets move to section 2. Use this statement
        fullpageObj.move
*/

var isMobile = {
        Android: function() {
                return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
                return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
                return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
                return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
};

var fullpage = $("#fullpage");
var delay = 500;
if(!isMobile.any()){
        var fullpageObj = new FullPage(fullpage, delay);        //FullPage object.... Add all transition functions to this object
}

$(".section-arrow").click(()=>{
        fullpageObj.nextSection();
});

/*
function protoFunc(){
    console.log("Transition from section 1 to 2");
}

fullpageObj.setTransition("1-2", protoFunc);

function protoFunc2(){
    console.log("Transition from section 2 to 1")
}

fullpageObj.setTransition("2-1", protoFunc2);*/


/* Page Animations */

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
/*particlesJS.load('particles-js-0', '../assets/particles-0.json', function() {
        console.log('callback - particles.js config loaded');
});

particlesJS.load('particles-js-1', '../assets/particles-1.json', function() {
        console.log('callback - particles.js config loaded');
});

particlesJS.load('particles-js-2', '../assets/particles-0.json', function() {
        console.log('callback - particles.js config loaded');
});

particlesJS.load('particles-js-3', '../assets/particles-1.json', function() {
        console.log('callback - particles.js config loaded');
});*/

var dates = $(".schedule-date");
var upcoming = true;
for(var i=0 ; i<dates.length ; i++){
        var dateobj = $(dates[i]);
        var curdate = new Date();
        var date = new Date(dateobj.attr("data-date"));
        if(date>curdate && upcoming){
                dateobj.find(".fas").remove();
                dateobj.find(".far").removeClass("far").addClass("fas");
                upcoming = false;
        }
        else if(date>curdate)
                dateobj.find(".fas").remove();
        else
                dateobj.find(".far").remove();
}


// Adjusting animation overlay link box sizes
logoResize();
window.addEventListener('resize', logoResize, true);

function logoResize() {
    var width = real_width = document.body.clientWidth;
    if(real_width > 800) {
        width = 800;
    }
    document.querySelector(".excel-logo-overlay").style.width = width/5+"px";
    document.querySelector(".excel-logo-overlay").style.height = width/5+"px";

    document.querySelector(".arrow-logo-overlay").style.width = width/5+"px";
    document.querySelector(".arrow-logo-overlay").style.height = width/10+"px";
    document.querySelector(".arrow-logo-overlay").style.left = real_width/2 - width/10 + "px";

    document.querySelector(".mec-logo-overlay").style.width = width/5.3+"px";
    document.querySelector(".mec-logo-overlay").style.height = width/5.3+"px";
}