function convert()
{
     var getyrs=Number(document.getElementById("ager").value);
     document.getElementById("result1").innerHTML=hours(getyrs);

}
function hours(num1)

{
   var calyrs=8760*num1;
   return calyrs;
} 