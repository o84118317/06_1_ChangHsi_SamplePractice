alert (+'1000px'); // NaN

// parseInt -> return an integer
// parseFloat -> return a floating-point number

alert ( parseInt('100px') ); // 100
alert ( parseFloat('12.5em') ); //12.5


alert ( parseInt('12.3') ); 
// 12, only the integer part is returned
alert ( parseFloat('12.3.4') ); 
//12.3, the second point stops the reading


alert ( parseInt('a123') );
// NaN, the first symbol stopd the process 