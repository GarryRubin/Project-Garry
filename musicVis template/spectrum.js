function Spectrum(){
	this.name = "spectrum";

	this.draw = function(){
		push();
		var spectrum = fourier.analyze();
		noStroke();
		
		fill(0,255,0)
		for (var i = 0; i< spectrum.length; i++){
			var x = map(i, 0, spectrum.length, 0, width);
//            var x = map(i, 0, spectrum.length, 0, height);
		    var h = -height + map(spectrum[i], 0, 255, height, 0);
//            var h = -width + map(spectrum[i], 0, 255, width, 0);
		    rect(x, height, width / spectrum.length, h );
//    	    rect(x, -height, width / spectrum.length, h );
            console.log(spectrum.length)
  		}
	
		pop();
	};
}
