const a=13;
const b="Friday";
const c=a+b;
const d="Friday13";
const e = (a * 3) / 2;


if(c === d){
	console.log("smartyPants");
}else if(c === '13Friday'){
	console.log('now they always say congratulations');
}
else{
	console.log('Sponge Bob Square Pants');
};
const userName='puppy53';
const pwd="I'm not gonna fail discrete math";
const typedUserName='superman';
const typedPWD="I'm not gonna fail discrete math";
if(userName ===typedUserName &&  pwd===typedPWD){
	console.log('You are in!!!!');
}else if(pwd !== typedPWD || userName !== typedUserName) {
    console.log('Wrong password or userName. Please try again'); 
}