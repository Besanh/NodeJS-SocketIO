function tinhtong(a,b)
{
    return a+b;
}

var x = tinhtong(2,3);
console.log(x);

function hello()
{
    console.log('Hellow World');
}

function goiHam(fn)
{
    fn();   // goi toi ham
}

goiHam(hello);

/////////////////////////////////
/**
 * Bien co the la ham
 */
var tong = function()
{
    console.log('Lap trinh NodeJS');
}

tong();