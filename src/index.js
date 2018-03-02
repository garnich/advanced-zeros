module.exports = function getZerosCount(number, base) {


  var arr =[];
  var ii = 2;
              while (ii <= base)
              {
                  if (base % ii == 0)
                  {
                   //console.log(ii);
                      base = base / ii;
                      arr.push(ii);
                  }
                  else
                  {
                      ii++;
                  }
              }//console.log(arr);
              var t= arr.length-1;
              console.log(t + " t number");
              var y = 1;
              if(t >= 0){
                for (var h = t; h >= 0; h--){

                if(arr[arr.length-1]==arr[h-1]){
                  console.log(t);
                  console.log(arr[h] + " massive");
                  console.log(arr[h-1] + " massive");
                  y=y+1;
                  console.log(y + " this is y");
                }
              }};
  var ad = ii;
   //console.log(ad + " составные")

   var m, f, t, q;
   var v = 0;
   if(ad == 2){
     m =  Math.floor(Math.log(number))}else{
       m =  Math.floor(Math.log(number)) / Math.floor(Math.log(ad));
     }
    q = Math.floor(m);
   //console.log(q + " типа ответ");
   var t = 0;
   for(var i=1; i<=q; i++){
     f = Math.pow(ad,i);
     v = v + Math.floor(number/f);
   }
  //console.log(v + "  answer");


  return Math.floor(v/y);
  // your implementation
}
