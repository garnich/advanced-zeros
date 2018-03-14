module.exports = function getZerosCount(number, base) {


  var arr =[];
  var ii = 2;
var why;
  var temp = number;
      for( ii; ii <= base; ii++){
            //  while (ii <= base)
                var z = 0;
                while (base % ii == 0)  //кол-во множителей
                  {
                                          z++;
                   //console.log(ii);
                      base = Math.floor(base / ii);
                      arr.push(ii);

                  }

              //console.log(arr);
            //   var t= arr.length-1;
            // //  console.log(t + " t number");
            //   var y = 1;
            //   if(t >= 0){
            //     for (var h = t; h >= 0; h--){
            //
            //     if(arr[arr.length-1]==arr[h-1]){
            //     //  console.log(t);
            //     //  console.log(arr[h] + " massive");
            //     //  console.log(arr[h-1] + " massive");
            //       y=y+1;
            //     //  console.log(y + " this is y");
            //     }
            //   }};
  //var ad = ii;
  var ad = 0;
  var out = number;
   //console.log(ad + " составные")
while(out/ii > 0){
  ad = ad +  Math.floor(out/ii); //сумма делителей
  out = Math.floor(out/ii); // цельный остаток от деления
}
   // var m, f, t, q;
   // var v = 0;
   // if(ad == base){
   //   m =  Math.floor(Math.log(number))}else{
   //     m =  Math.floor(Math.log(number)) / Math.floor(Math.log(ad));
   //   }
   //  q = Math.floor(m);
   // //console.log(q + " типа ответ");
   // var t = 0;
   // for(var i=1; i<=q; i++){
   //
   //   v = v + Math.floor(number/ii);
   //    f = Math.pow(ad,i);
   // }
  //console.log(v + "  answer");
if(temp > ad/z){
  temp = ad/z;
}
}
  return Math.floor(temp);
  // your implementation
}
