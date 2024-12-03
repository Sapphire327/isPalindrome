function isPalindrome (str){
    const regexp = /[^0-9a-z]/g;
    str=str.toLowerCase().replace(regexp,'').toString()
    for (let i=0; i<str.length-1; i++){
        if(str[i]!==str[str.length-i-1]){
            return false;
        }
    }
    return true
}
s = "A man, a plan, a canal: Panama"
console.log(isPalindrome(s));
