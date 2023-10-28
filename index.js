const getValyuta=()=>{
  var str1 = document.querySelector('.val1')
  var str2 = document.querySelector('.val2')
  data.map((item, key)=>{
    str1.innerHTML += `<option value="${key}">${item.title}</option>`
    str2.innerHTML += `<option value="${key}">${item.title}</option>`
  })
}
console.log(data);
getValyuta()
const getShortCode=(id)=>{
  var sel = document.querySelector('.val' +id).value
  document.querySelector('.span' +id).innerHTML=data[sel].code
  calculate()
}
const checkInput=()=>{
   var sum1 = document.querySelector('.sum1')
   if(sum1.value.length==0) {
      sum1.value = '0.00'
   } else if (sum1.value.indexOf('-')!=-1) {
    sum1.value = sum1.value.replaseAll('-', '')
   }
}
const calculate=()=>{
  var val1 = document.querySelector('.val1').value
  var val2 = document.querySelector('.val2').value
  var sum1 = Number(document.querySelector('.sum1').value)
  var sum2 =0
  if(sum1!=0) {
    val1 = Number(data[val1].cb_price)
    val2 = Number(data[val2].cb_price)
    var sum2=(sum1*val1)/val2
  }
  document.querySelector(".sum2").value=Math.abs(sum2).toFixed(2)
}
