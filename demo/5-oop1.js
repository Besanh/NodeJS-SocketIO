/**
 * Class person
 */
var person = {
    ho: 'Le',
    ten: 'Anh',
    chaomung: function(){
        console.log('Chao mung '+this.ho+' '+this.ten);
    }
}
person.chaomung();
console.log(person['ten']);