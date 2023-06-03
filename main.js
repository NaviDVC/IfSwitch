let numOrStr = prompt('input number or string');
console.log(numOrStr)

switch (numOrStr) {
    case (numOrStr === null):
        console.log('You cancelled');
        break;
    case ( numOrStr.trim() === '' ):
        console.log('Empty string');
        break;
    case ( isNaN( +numOrStr )):
        console.log('Number is Ba_NaN');
        break;
    default:
        console.log('OK!');
        break;
}