// Iteration 1: Names and Input

//1.1
let hacker1 = "Antoine";

//1.2
//console.log("The driver's name is " + hacker1)
console.log(`The driver name is ${hacker1}`);

//1.3
let hacker2 = "Babar";

//1.4
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

let driverLength = hacker1.length;
let navigatorLength = hacker2.length;

if (driverLength > navigatorLength) {
    console.log (`The driver has the longest name,
    it has ${driverLength} characters.`)
} else if (navigatorLength > driverLength) {
    console.log(`It seems that the navigator has the longest name,
        it has ${navigatorLength} characters`)
} else if (navigatorLength = driverLength) {
    console.log(`Wow, you both have equally long names,
     ${navigatorLength} characters!`)
}

// Iteration 3: Loops

// 3.1

let result = "";

for (let i=0; i<driverLength; i++ ) {
   result += hacker1[i].toUpperCase();
   result+= " ";
}

console.log(result);


//3.2

let res = "";

for (let i=1; i<=navigatorLength; i++ ) {
    res += hacker2[navigatorLength-i];
}

console.log(res);

//3.3

let min = Math.min(navigatorLength, driverLength) + 1;
let first = "";
let i = 0;

while (i<min) {
    if (hacker1[i]>hacker2[i]) {
        first = hacker2;
        break;
    }
    if (hacker2[i]>hacker1[i]) {
        first = hacker1;
        break;
    } 
    if (hacker2[i]==undefined) {
        first = hacker2;
        break;
    }
    if (hacker1[i]==undefined) {
        first = hacker1;
        break;
    }
    i++;
}

switch (first) {
    case hacker1:
        console.log("The driver's name goes first");
        break;
    case hacker2:
        console.log("Yo, the navigator goes first definitely.");
        break;
    default:
       console.log("What?! You both have the same name?");
        break;
}
 

// Bonus 1

let test = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin congue, velit nec tincidunt rhoncus, enim orci laoreet nisi, ullamcorper porta urna quam vel nisi. Sed magna mi, sollicitudin nec justo in, tristique porttitor mi. Integer a sollicitudin mauris, sed vulputate eros. Pellentesque dolor dolor, sodales vitae auctor at, pulvinar et risus. Aenean vitae tortor eget ex tincidunt porttitor nec ac ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse tempus aliquam ante. Nulla id consectetur libero. Curabitur ac augue consectetur, semper lacus nec, accumsan massa. Morbi pellentesque quam at facilisis finibus. Mauris id diam at quam volutpat commodo et id quam. Nunc magna enim, pretium id diam id, sagittis aliquam ipsum. Cras scelerisque a quam id rhoncus. Maecenas in fringilla diam. Duis efficitur porttitor molestie. Phasellus rutrum ligula id finibus laoreet.

Duis purus libero, posuere nec urna non, interdum aliquam ex. Nunc tristique convallis tellus, vel pharetra lectus auctor sed. Ut a imperdiet quam, ac bibendum erat. Ut convallis congue ornare. Ut imperdiet ultrices feugiat. Phasellus nec lectus at ante feugiat fringilla. Proin sit amet magna luctus, pharetra neque eu, sodales felis. Suspendisse eget tincidunt diam, quis laoreet metus. Praesent blandit elementum dolor, ac pretium libero maximus sed. Donec in mattis ante. Nullam finibus sagittis neque, volutpat tincidunt metus finibus quis. Aenean tempus hendrerit lectus pellentesque finibus. Phasellus vitae massa et eros consectetur bibendum nec id augue. Aliquam a diam a purus commodo tristique. Nullam euismod semper nisi et sollicitudin.

Mauris nulla massa, euismod eu vehicula eu, tristique at dolor. Pellentesque a nibh nisl. Proin scelerisque erat lorem, eget rhoncus nisl gravida porttitor. Cras nec accumsan sem. Nam non libero egestas, auctor felis nec, blandit dolor. Sed molestie nisi sed pellentesque porta. Nulla facilisi. Sed varius, lectus sit amet viverra pharetra, sapien purus blandit risus, sit amet laoreet nibh felis et eros. Pellentesque erat velit, semper sed leo vitae, pulvinar fringilla magna.`

let test2 = "Je suis une fille.";

let count=0;
let numberWords=1;
let testLength = test.length;


while (count<testLength) {
    if (test[count] ==" ") {
        numberWords +=1;
    } else if (test[count - 1] ==".") {
        numberWords +=1;
    }
    count++;
}

console.log(numberWords);

