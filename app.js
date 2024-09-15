// let  street, country

// street = "main street"
// country = "Pakistan"

// fullMailingAddress = `${street}  ${country}`

// console.log(fullMailingAddress);


// const score1 = 80;
// const score2 = 90;
// const score3 = 85;

// const total_score = score1+score2+score3
// const average_score = (score1+score2+score3) /3

// console.log(average_score);

// const plates = 20
// const peoples = 7
// let remaining = plates%peoples
// console.log(remaining);
// ++remaining ;
// const message = `there are ${remaining} plates available`
// const message1 = 'there are ' + remaining + ' plates available'

// console.log(message);

//ALERT

// // alert ('Hello World')

// var fruits = ['mango', 'banana', 'orange', 45 ]
// var firstFruit = fruits[0]

// fruits [3]= "Apple"
// console.log(firstFruit);
// console.log(fruits);


// const car = {

//     make: 'Honda',
//     model: 'city',
//     year:   2021,
//     color: ['red', 'white', 'blue'],
//     hybrid: true,

//     drive: function () {
//         console.log('car chal rahi hai');
//     },

//     stop: function () {
//         console.log('car ruk gaye hai')
//     }
// }
// console.log(car.make)
// console.log(car.color[0])
// car.drive()
// car.stop()


// challenge 35


// const person1 = {
//     name : 'danish',
//     age : 32,
//     status : 'tourist',
// }

// const person2 = {
//     name : 'salman',
//     age : 40,
//     status : 'resident',
// }



// if (person1.age > 18 && person1.status == "resident"){
//     console.log(`${person1.name} you are eligable`)}
// else{
//     console.log('You are not allowed')

// }




// if (person2.age > 18 && person2.status == "resident"){
//     console.log(`${person2.name} you are eligable`)}
// else{
//     console.log('You are not allowed')

// }



// FOR LOOPS

const menu = ['tikka', 'daal chawal', 'nihari', 'bbq', 'sabzi'];

let userWish = prompt('Sir ap kia khana pasand karenge?');
var itemMila = false

for (i = 0; i < menu.length; i++) {
    if (userWish === menu[i]) {
        console.log(
            'user ko ' + menu[i] + ' provide kardeni hai, jo k counter number ' + i + ' se mil jyegi');
            itemMila = true
        break;
    } 
    
}

if (itemMila){
    console.log('ustad dish deliver kardi hai');
} else {
    console.log(userWish + " nahi hai");

}

