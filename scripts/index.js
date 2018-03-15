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

var svg = $("#svg-canvas");
var height = svg.height();
var width = svg.width();
var line1 = $("#line-1");
var line2 = $("#line-2");
var line3 = $("#line-3");
var line4 = $("#line-4");
/*line1.attr("x2",width);
line2.attr("y2",height);
line3.attr("y1",height);
line3.attr("x2",width);
line3.attr("y2",height);
line4.attr("x1",width);
line4.attr("x2",width);
line4.attr("y2",height);

line1.animate({
        'foo': height/5},{
        step: function(foo){
                $(this).attr('y1', foo);
                $(this).attr('y2', foo);
        },
        duration: 2000
});

line2.animate({
        'foo': width/10},{
        step: function(foo){
                $(this).attr('x1', foo);
                $(this).attr('x2', foo);
        },
        duration: 2000
});

line3.animate({
        'foo': 4*height/5},{
        step: function(foo){
                $(this).attr('y1', foo);
                $(this).attr('y2', foo);
        },
        duration: 2000
});

line4.animate({
        'foo': 9*width/10},{
        step: function(foo){
                $(this).attr('x1', foo);
                $(this).attr('x2', foo);
        },
        duration: 2000
});*/