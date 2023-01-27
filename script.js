// complete the given function

function palindrome(str){
	let s = str.toLowerCase();
	let n = s.length()-1;
	for(let i = 0; i < s.length(); i++){
		if(s[i] !== s[n]){
			return false;
		}
		n--;
	}
	return true;
}
module.exports = palindrome
