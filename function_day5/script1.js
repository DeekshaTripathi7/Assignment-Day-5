// 1. Print odd numbers in an array

let sarr = [11, 22, 44, 55, 33, 88, 23, 48, 111, 555, 7, 31];
let out = [];
let odd_No = (arry) => {
    for(let i = 0; i < arry.length; i++)
    {
        if(arry[i] % 2 !== 0)
        {
            out.push(arry[i]);
        }
    }
    console.log(out)
}
odd_No(sarr);

// 2. Convert all the strings to title caps in a string array

let sstr = ["stars","moon","sun","earth","mercury","venus"];
let out2 = [];
let title_Case = (str) => {
    for(let i = 0; i < sstr.length; i++)
    {
        sstr[i] = sstr[i].charAt(0).toUpperCase() + sstr[i].slice(1);
        out2.push(str[i]);
    }
    console.log(out2);
}
title_Case(sstr);

// 3. Sum of all numbers in an array. Refering array -> arr

let sum2 = 0;
let total = (arr) => {
    for(let i = 0; i < arr.length; i++)
    {
        sum2 += arr[i];      
    }
    console.log(sum2)
}
total(sarr);

// 4. Return all the prime numbers in an array
//<------Anonymous----->
let is_Prime = (num) => {
    // 0,1 and negative number are not prime
    if(num <= 1)
    {
       return false;
    } else 
    {
        for(let i = 2; i < num; i++)
        {
            if (num % i == 0)
            {
                return false;
            }
        }
        return num;
    }
}

let prime_No = sarr.filter(is_Prime);
console.log(prime_No);

// 5. Return all the palindromes in an array
//<------Anonymous----->
let str_1 = ["Bob","noon","moon","Level","child","civic"]
let out3 = [];
let palindrome_array = (str) => {
    for(let i = 0; i < str.length; i++)
    {
        if(str[i].toLowerCase() === str[i].toLowerCase().split("").reverse().join(""))
        {
            out3.push(str[i]);
        }
    }
    console.log(out3);
}
palindrome_array(str_1);
