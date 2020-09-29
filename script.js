function volm(e){
	var volume;
	var radius=document.getElementById('radius').value;
	// radius = Math.abs(radius);
	volume = (4/3) * Math.PI * Math.pow(radius,3 );
	volume = volume.toFixed(3);
	document.getElementById('vol').value = volume;
	return false;

}

document.getElementById('myForm').onsubmit = volm;