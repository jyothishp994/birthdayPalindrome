btnSubmitVar=document.querySelector('#submitdate');
birthdayVar=document.querySelector('#birthday');
btnSubmitVar.addEventListener("click",checkPalindrome);
btnSubmitVar.addEventListener("click",ShowLoader);
function checkPalindrome()
{

if(birthdayVar.value){

   // console.log(birthdayVar.value.gtMonth())
   var dt = new Date(birthdayVar.value);
 
   tempdateVar=dt.getDate()+"";
   tempmonthVar=(eval(dt.getMonth()) + eval(1))+"";
   dateVar=tempdateVar.length>1?tempdateVar:"0"+tempdateVar;
   monthVar=tempmonthVar.length>1?tempmonthVar:"0"+tempmonthVar;
   yearVar=dt.getFullYear()+"";
   format_date=['ddmmyyyy','yyyymmdd','mm-dd-yy','ddmmyy','mmddyyyy'];
   possible_comb=[dateVar+"-"+monthVar+"-"+yearVar,
       yearVar+"-"+monthVar+"-"+dateVar,
   monthVar+"-"+dateVar+"-"+yearVar.substr(-2),
   dateVar+"-"+monthVar+"-"+yearVar.substr(-2),
   monthVar+"-"+dateVar+"-"+yearVar];
   req_fmt_dt=monthVar+"-"+dateVar+"-"+yearVar;
   console.log(req_fmt_dt)
    console.log(possible_comb);
    temp='';
    var rev_comb_user_date_no_hypen=[];
    possible_comb.forEach(element => {
        for (let index = element.length-1; index >=0; index--) {
            temp=""+temp+element[index];
            
        }
        //console.log(temp);
        rev_comb_user_date_no_hypen.push(temp.replace(/-/g, ""));
        
        temp='';
   });
   date_nohypen=[];
   pos_comb_date_nohypen=[];
   possible_comb.forEach(element => {
    pos_comb_date_nohypen.push(element.replace(/-/g, ""));
   });
   console.log(pos_comb_date_nohypen);
console.log(rev_comb_user_date_no_hypen);
found=0;

rev_comb_user_date_no_hypen.forEach(rev_element => {
    pos_comb_date_nohypen.forEach(actual_element => {
        if(rev_element==actual_element)
        {
            found=1;
        }
    });
});
Palindrome_date_diff=[]
Palindromes=["02-12-2021","01-02-2010","11-02-2011","02-02-2020","12-02-2021","03-02-2030","04-02-2040","05-02-2050","06-02-2060"];
console.log(Palindromes);
usr_req_fmt_dt=new Date(req_fmt_dt);
var diffTime=0;
var diffDays=0;
Palindromes.forEach(element => {
    console.log(element)
    console.log(req_fmt_dt)
    tempelement=new Date(element);
 diffTime = Math.abs(usr_req_fmt_dt - tempelement);
 diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
 Nearest_Palindrome_date=element;
 Palindrome_date_diff.push(diffDays)
});
console.log(Palindrome_date_diff);
min_value=Palindrome_date_diff[0]
min_index=0
for(index=1;index<Palindrome_date_diff.length;index++)
{
if(min_value>Palindrome_date_diff[index])
{
    min_value=Palindrome_date_diff[index];
    min_index=index;
}
}
console.log(min_value)
console.log(min_index)



if(found==1)
{
    hideLoader();
    console.log("Hurray, Your birthday is Palindrome");
    showOutputMsg="Hurray, Your birthday is Palindrome";
    //document.querySelector('.display').innerHTML = showOutputMsg
    
}
else{
    hideLoader();
    console.log("Sorry, Your birthday is not palindrome. You missed it by "+ min_value + " days. The nearest Palindrome date is "+Palindromes[min_index]);
    showOutputMsg= "Sorry, Your birthday is not palindrome. You missed it by "+ min_value + " days. The nearest Palindrome date is "+Palindromes[min_index]
    //document.querySelector('.display').innerHTML = showOutputMsg
}
}
else{
    hideLoader()
    console.log("Please enter a date");
    showOutputMsg="Please enter a date";
    //document.querySelector('.display').innerHTML = showOutputMsg;
}

}
function displayOutput(){
    document.querySelector('.display').innerHTML = showOutputMsg;
}
function ShowLoader()
{
    loaderVar=document.querySelector(".loader")
    setTimeout(() => { loaderVar.style.display="block";
    document.querySelector('.display').innerHTML = ''; }, 0);
}
function hideLoader()
{
    loaderVar=document.querySelector(".loader")
    setTimeout(() => { loaderVar.style.display="none"; 
    displayOutput();

}, 1000);
}
