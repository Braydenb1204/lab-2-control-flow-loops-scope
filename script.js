let number = 1930;

if (number > 1400)
    console.log('number is greater than 1400')

    else if (number < 1400)
        console.log('number is less than 1400')

    else
        console.log('number is smaller than zero')



    var day = 'Thursday';

    switch (day) {
        case 'Sunday':
            console.log('Today is Sunday')
            break;

        case 'Monday':
            console.log('Today is Monday')
            break;

        case 'Tuesday':
            console.log('Today is Tuesday')
            break;

        case 'Wednesday':
            console.log('Today is Wednesday')
            break;

        case 'Thursday':
            console.log('Today is Thursday')
            break;

        case 'Friday':
            console.log('Today is Friday')
            break;

        case 'Saturday':
            console.log('Today is Saturday')
            break;
    }



    myCustomLabel : {
    for (let i = 1; i <= 6; i++) {
        if (i === 6) {
            break myCustomLabel;
        }
        console.log(i);
    }
}

let i = 1;

while (i <= 5) {
    console.log(i)
    i++;
}


let j = 1;

do {
    console.log(j);
    j++;
} while (j <= 5);



for (var n = 1; n <= 10; n++) {
    if (n === 4) {
        break;
    }
    console.log(n);
}


var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
for (var n = 0; n < numbers.length; n++) {
    if (numbers[n] > 3) {
        continue; // Skipping for failing scores
    }
    console.log(numbers[n]);
}


let globalVar = ("I'm global");
testingScope("I'm Brayden!")

function testingScope(name){
    console.log(name);
    let localVar = ("I'm local");
    console.log(localVar)
}

console.log(globalVar)


