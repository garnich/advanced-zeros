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
              var t= arr.length;
              var y = 1;
              if(t > 2){
                for (var h = t-1; h >= 0; h--){
                if(arr[h-1]==arr[h-2]){
                  y++;
                }}};
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


  return (v);
  // your implementation
}
