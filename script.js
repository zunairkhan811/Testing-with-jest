function stringlength(string){
    let arr = string.replaceAll(" ","")
    if(arr.length <1 || arr.length > 10){
       return 'error' 
    }
    return arr.length
}

console.log(stringlength('ali aslma akram'));
module.exports = stringlength