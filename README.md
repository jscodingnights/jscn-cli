# JSCN-CLI
A CLI interface for supporting the [JavaScript Coding Nights](www.meetup.com/JS-Coding-Nights-Munich/) Meetup group.

## To run:
```
npm run jscn -- --help
npm run jscn -- list-meetups

# --or--

./node_modules/.bin/babel-node -- index.js --help
./node_modules/.bin/babel-node -- index.js list-meetups
```

## Feature Ideas (Please invent your own too!):

- Show a list of projects, including one that's being featured
- Upon project selection, clone the relevant project source repository into a new folder at your cwd.  If the meetup topic involves external resources rather than cloning a repo, display those resources in the browser
- Desktop notifications with node-notifier for attendee communication during the event such as...
- LFG ("Looking for Group"): auto-group creation and/or notification
- Share your work with others via automatic pull requests via `jscn submit` (will probably require first doing something like `jscn init` to enter your github api auth token)
- Submit feedback or topic/project proposals for future meetups, including the ability to tell me that my project ideas are awful.


// <![CDATA[
function init() {
document.IQtest.Result.value="Test in progress...";
}

function valTest() {
sc=0;

if (document.IQtest.q1.value.toUpperCase()=="M") {console.log('q1.- right');}
if (document.IQtest.q2.value && eval(document.IQtest.q2.value)==15) {console.log('q2.- right');}
if (document.IQtest.q3.value && eval(document.IQtest.q3.value)==8) {console.log('q3.- right');}
if (document.IQtest.q4.value && eval(document.IQtest.q4.value)==6) {console.log('q4.- right');}
if (document.IQtest.q5.value && eval(document.IQtest.q5.value)==5) {console.log('q5.- right');}
if (document.IQtest.q6.value && eval(document.IQtest.q6.value)==4) {console.log('q6.- right');}
if (document.IQtest.q7.value && eval(document.IQtest.q7.value)==1) {console.log('q7.- right');}
if (document.IQtest.q8.value && eval(document.IQtest.q8.value)==2) {console.log('q8.- right');}

if (document.IQtest.q9[2].checked==true) {console.log('q9[- right');}
if (document.IQtest.q10[1].checked==true) {console.log('q10- right');}
if (document.IQtest.q11[3].checked==true) {console.log('q11- right');}
if (document.IQtest.q12[3].checked==true) {console.log('q12- right');}
if (document.IQtest.q13[3].checked==true) {console.log('q13- right');}
if (document.IQtest.q14[2].checked==true) {console.log('q14- right');}
if (document.IQtest.q15[2].checked==true) {console.log('q15- right');}
if (document.IQtest.q16[3].checked==true) {console.log('q16- right');}
if (document.IQtest.q17[1].checked==true) {console.log('q17- right');}
if (document.IQtest.q18[0].checked==true) {console.log('q18- right');}

if (document.IQtest.q19[0].checked==true & document.IQtest.q19[1].checked==false & document.IQtest.q19[2].checked==false & document.IQtest.q19[3].checked==true & document.IQtest.q19[4].checked==false) {console.log('19.- right');}
if (document.IQtest.q20[0].checked==false & document.IQtest.q20[1].checked==true & document.IQtest.q20[2].checked==true & document.IQtest.q20[3].checked==false & document.IQtest.q20[4].checked==false) {console.log('20.- right');}
if (document.IQtest.q21[0].checked==true & document.IQtest.q21[1].checked==false & document.IQtest.q21[2].checked==false & document.IQtest.q21[3].checked==true & document.IQtest.q21[4].checked==false) {console.log('21.- right');}
if (document.IQtest.q22[0].checked==false & document.IQtest.q22[1].checked==true & document.IQtest.q22[2].checked==false & document.IQtest.q22[3].checked==true & document.IQtest.q22[4].checked==false) {console.log('22.- right');}

if (document.IQtest.q23[3].checked==true) {console.log('q23- right');}
if (document.IQtest.q24[2].checked==true) {console.log('q24- right');}
if (document.IQtest.q25[1].checked==true) {console.log('q25- right');}
if (document.IQtest.q26[2].checked==true) {console.log('q26- right');}

if (document.IQtest.q27[1].checked==true) {console.log('q27- right');}
if (document.IQtest.q28[3].checked==true) {console.log('q28- right');}
if (document.IQtest.q29[2].checked==true) {console.log('q29- right');}
if (document.IQtest.q30[0].checked==true) {console.log('q30- right');}
if (document.IQtest.q31[2].checked==true) {console.log('q31- right');}
if (document.IQtest.q32[3].checked==true) {console.log('q32- right');}
if (document.IQtest.q33[2].checked==true) {console.log('q33- right');}

var Res="Thank you for taking the Mensa Online Test!\n"
Res+="You have "+sc+" correct answer"+(sc==1?"":"s")+", this means you have "
if (sc>=28) {Res+="excellent";}
else {
if (sc>=22) {Res+="good";}
else {
if (sc>=18) {Res+="some";}
else {
Res+="few";
}
}
}
Res+=" chances to pass the real Mensa Test";
document.IQtest.Result.value=Res;
}
// ]]>
