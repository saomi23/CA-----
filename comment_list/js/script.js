// function zeroPadding(number, length){
// 	return (Array(length).join('0') + number).slice(-length);
// }	
// function negaeribtn() {
// 	var x = document.getElementById("icon1_count").innerHTML;
// 	x++;
// 	x = String(x);
// 	x = zeroPadding(x, 4);
// 	document.getElementById("icon1_count").innerHTML= x;
// 	var y = document.getElementById("icon2_count").innerHTML;
// 	y--;
// 	y = String(y);
// 	y = zeroPadding(y, 4);
// 	document.getElementById("icon2_count").innerHTML= y;
// }

window.onload = function(){
	var para = window.location.search ;
	console.log(para);
	document.getElementById('icon-container').className = para.substring(1);
}
function negaeribtn() {
	var El = document.getElementById('icon-container');
	if(El.className === 'vs1') {
		console.log('vs1');
		El.className = "vs2";
		//type = "vs2";
	} else {
		console.log('vs2');
		El.className = "vs1";
		//type = "vs1";
	}
}
	// var type = El.className;
	// var x = document.getElementById('negaeri');
	// x.addEventListener('click',function() {
