var found=0;
function IsPalindrome()
{

if(birthdayVar.value){

   // console.log(birthdayVar.value.gtMonth())
   var dt = new Date(birthdayVar.value);
 
   tempdateVar=dt.getDate()+"";
   tempmonthVar=(eval(dt.getMonth()) + eval(1))+"";
   dateVar=tempdateVar.length>1?tempdateVar:"0"+tempdateVar;
   monthVar=tempmonthVar.length>1?tempmonthVar:"0"+tempmonthVar;
   yearVar=dt.getFullYear()+"";
   //format_date=['ddmmyyyy','yyyymmdd','mmddyy','ddmmyy','mmddyyyy','yyddmm'];
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
            console.log(found)
        }
    });
});
}
return found;
}
function reverseString(str) {
    var listOfChars = str.split('');
    var reversedListOfChar = listOfChars.reverse();
    var reversedString = reversedListOfChar.join('');
    return reversedString;
  }
  
  function isStringPalindrome(str) {
    var reversedString = reverseString(str);
    return str === reversedString;
  }
  
  function getDateAsString(date) {
    var dateInStr = { day: '', month: '', year: '' };
  
    if (date.day < 10) {
      dateInStr.day = '0' + date.day;
    }
    else {
      dateInStr.day = date.day.toString();
    }
  
    if (date.month < 10) {
      dateInStr.month = '0' + date.month;
    }
    else {
      dateInStr.month = date.month.toString();
    }
  
    dateInStr.year = date.year.toString();
    return dateInStr;
  }
  
  function getDateInAllFormats(date) {
    var ddmmyyyy = date.day + date.month + date.year;
    var mmddyyyy = date.month + date.day + date.year;
    var yyyymmdd = date.year + date.month + date.day;
    var ddmmyy = date.day + date.month + date.year.slice(-2);
    var mmddyy = date.month + date.day + date.year.slice(-2);
    var yyddmm = date.year.slice(-2) + date.day + date.month;
  
    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yyddmm];
  }
  
  function checkPalindromeForAllDateFormats(date) {
    var dateFormatList = getDateInAllFormats(date);
    var palindromeList = [];
  
    for (var i = 0; i < dateFormatList.length; i++) {
      var result = isStringPalindrome(dateFormatList[i]);
      palindromeList.push(result);
    }
    return palindromeList;
  }
  
  function isLeapYear(year) {
  
    if (year % 400 === 0)
      return true;
  
    if (year % 100 === 0)
      return false;
  
    if (year % 4 === 0)
      return true;
  
    return false;
  }
  
  function getNextDate(date) {
    var day = date.day + 1;
    var month = date.month;
    var year = date.year;
  
    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
    if (month === 2) {
      if (isLeapYear(year)) {
        if (day > 29) {
          day = 1;
          month = 3;
        }
      }
      else {
        if (day > 28) {
          day = 1;
          month = 3;
        }
      }
    }
    else {
      if (day > daysInMonth[month - 1]) {
        day = 1;
        month++;
      }
    }
  
    if (month > 12) {
      month = 1;
      year++;
    }
  
    return {
      day: day,
      month: month,
      year: year
    }
  }
  
  
  function getNextPalindromeDate(date) {
  
    var nextDate = getNextDate(date);
    var ctr = 0;
  
    while (1) {
      ctr++;
      var dateStr = getDateAsString(nextDate);
      var resultList = checkPalindromeForAllDateFormats(dateStr);
  
      for (let i = 0; i < resultList.length; i++) {
        if (resultList[i]) {
          return [ctr, nextDate];
        }
      }
      nextDate = getNextDate(nextDate);
    }
  }
  function ShowLoader()
  {
      loaderVar=document.querySelector(".loader")
      setTimeout(() => { loaderVar.style.display="block";
      document.querySelector('.display').innerHTML = ''; }, 0);
  }
  function getPosition(string, subString, index) {
    return string.split(subString, index).join(subString).length;
  }
  
  function hideLoader()
  {
      loaderVar=document.querySelector(".loader")
      setTimeout(() => { loaderVar.style.display="none"; 
      displayOutput();
  
  }, 1000);
  }


  btnSubmitVar=document.querySelector('#submitdate');
  birthdayVar=document.querySelector('#birthday');
  btnSubmitVar.addEventListener("click",CallCheckPalindrome);
  btnSubmitVar.addEventListener("click",ShowLoader);
   function CallCheckPalindrome(){


  console.log(birthdayVar.value)
  birthdayVarDate = new Date(birthdayVar.value)
  console.log(birthdayVarDate.getDate());
  console.log((birthdayVarDate.getMonth())+1);
  console.log(birthdayVarDate.getFullYear());

  var date = {
    day: birthdayVarDate.getDate(),
    month: (birthdayVarDate.getMonth())+1,
    year: birthdayVarDate.getFullYear()
  }

IsPalindrome();
  if(found==1)
{
    hideLoader();
    console.log("Hurray, Your birthday is Palindrome");
    showOutputMsg="Hurray, Your birthday is Palindrome";
    //document.querySelector('.display').innerHTML = showOutputMsg;
    displayOutput();
    found=0;
    
}
else{
    output=getNextPalindromeDate(date);
    num_of_days=output[0];
    next_palindrome_date=''+output[1].day+'-'+output[1].month+'-'+output[1].year
    
    num_of_days=output[0];
        next_palindrome_date=''+output[1].day+'-'+output[1].month+'-'+output[1].year
    hideLoader();
    console.log("Sorry, Your birthday is not palindrome. You missed it by "+ num_of_days + " days. The nearest Palindrome date is "+next_palindrome_date);
    showOutputMsg= "Sorry, Your birthday is not palindrome. You missed it by "+ num_of_days + " days. The nearest Palindrome date is "+next_palindrome_date
    //document.querySelector('.display').innerHTML = showOutputMsg
    displayOutput();
}

}
function displayOutput(){
    document.querySelector('.display').innerHTML = showOutputMsg;
}