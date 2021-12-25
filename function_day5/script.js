// Q1. Do the below programs in anonymous function & IIFE

// 1. Print odd numbers in an array
//<------Anonymous----->
let arr = [11, 22, 44, 55, 33, 88, 23, 48, 111, 555, 7, 31];
let temp = [];
const oddNo = function (arr) {
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] % 2 !== 0)
        {
            temp.push(arr[i]);
        }
    }
    return temp;
}
console.log(oddNo(arr));

//<------IIFE------>
let temp1 = [];
(function () {
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] % 2 !== 0)
        {
            temp1.push(arr[i]);
        }
    }
    console.log(temp1);
}) ();

// 2. Convert all the strings to title caps in a string array
//<------Anonymous----->
let str = ["stars","moon","sun","earth","mercury","venus"];
let temp2 = [];
const titleCase = function (str){
    for(let i = 0; i < str.length; i++)
    {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        temp2.push(str[i]);
    }
    return temp2;
}
console.log(titleCase(str));

//<------IIFE------>
let temp3 = [];
(function () {
    for(let i = 0; i < str.length; i++)
    {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        temp3.push(str[i]);
    }
    console.log(temp3);
}) ();

// 3. Sum of all numbers in an array. Refering array -> arr
//<------Anonymous----->
let sum = 0;
const result = function (arr){
    for(let i = 0; i < arr.length; i++)
    {
        sum += arr[i];      
    }
    return sum;
}
console.log(result(arr));

//<------IIFE------>
let sum1 = 0;
(function () {
    for(let i = 0; i < arr.length; i++)
    {
        sum1 += arr[i];      
    }
    console.log(sum1);
}) ();

// 4. Return all the prime numbers in an array
//<------Anonymous----->
const isPrime = function (num) {
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
   
let primeNo = arr.filter(isPrime);
console.log(primeNo);

//<------IIFE------>
(function () {
    let primes = [];
    for(let i = 0; i < arr.length; i++)
    {
        if(isPrime(arr[i]))
        {
            primes.push(arr[i]);
        }   
    }
    console.log(primes);
}) ();

// 5. Return all the palindromes in an array
//<------Anonymous----->
let str1 = ["Bob","noon","moon","Level","child","civic"]
let temp4 = [];
const palindrome = function (str){
    for(let i = 0; i < str.length; i++)
    {
        if(str[i].toLowerCase() === str[i].toLowerCase().split("").reverse().join(""))
        {
            temp4.push(str[i]);
        }
    }
    return temp4;
}
console.log(palindrome(str1));

//<------IIFE------>
(function () {
    for(let i = 0; i < str.length; i++)
    {
        if(str[i].toLowerCase() === str[i].toLowerCase().split("").reverse().join(""))
        {
            temp4.push(str[i]);
        }
    }
    console.log(temp4);
}) ();

// 6. Return median of two sorted arrays of same size
//<------Anonymous----->
let ar1 = [1,2,3];
let ar2 = [4,5,6];
const findMedian = function(ar1, ar2){
    let n = ar1.length; //both array of same size
    let i = 0;  //curent index of ar1[]
    let j = 0;  //current index of ar2[]
    let count;
    let m1 = -1, m2 = -1;

    for(count = 0; count <= n; count++) 
    {
        //all element of ar1[] are smaller than smallest or first element of ar2[]
        if (i == n)
        {
            m1 = m2;
            m2 = ar2[0];
            break;
        }
        //all element of ar2[] are smaller than smallest or first element of ar1[]
        else if (j == n)
        {
            m1 = m2;
            m2 = ar1[0];
            break;
        }
        if (ar1[i] <= ar2[j])
        {
            m1 = m2;
            m2 = ar1[i];
            i++;
        } else
        {
            m1 = m2;
            m2 = ar2[j];
            j++;
        }
    }
    return (m1 + m2)/2;
}

console.log(findMedian(ar1, ar2));

//<------IIFE------>
(function (ar1, ar2) {
    let n = ar1.length; //both array of same size
    let i = 0;  //curent index of ar1[]
    let j = 0;  //current index of ar2[]
    let count;
    let m1 = -1, m2 = -1;

    for(count = 0; count <= n; count++) 
    {
        //all element of ar1[] are smaller than smallest or first element of ar2[]
        if (i == n)
        {
            m1 = m2;
            m2 = ar2[0];
            break;
        }
        //all element of ar2[] are smaller than smallest or first element of ar1[]
        else if (j == n)
        {
            m1 = m2;
            m2 = ar1[0];
            break;
        }
        if (ar1[i] <= ar2[j])
        {
            m1 = m2;
            m2 = ar1[i];
            i++;
        } else
        {
            m1 = m2;
            m2 = ar2[j];
            j++;
        }
    }
    console.log ((m1 + m2)/2);
}) (ar1, ar2);

// 7. Remove duplicates from an array
//<------Anonymous----->
let ary = ["Oreo","Oreo","Cookies","Biscuit"];
let temp5 = [];

const uniqueArray = function (){
    ary.forEach((arr) => {
        if (!temp5.includes(arr))
        {
            temp5.push(arr);
        }      
    })
    return temp5;
}
console.log(uniqueArray(ary));

//<------IIFE------>
let uniqArr = [];
(function () {
    ary.forEach((arr) => {
        if (!uniqArr.includes(arr))
        {
            uniqArr.push(arr);
        }      
    })
    console.log(uniqArr);
}) ();

// 8. Rotate an array by k times
//<------Anonymous----->
let arry = [1,2,3,4,5,6,7,8];
const rotateArray = function (){
    let n = arry.length;
    let k = 4;
    k = k % n;

    for(let i = 0; i < n; i++){
        if (i < k){
            console.log(arry[n + i - k] + " ");
        }
        else {
            console.log(arry[i - k] + " ");
        }
    }
}
rotateArray(arry);

//<------IIFE------>
(function () {
    let n = arry.length;
    let k = 4;
    k = k % n;

    for(let i = 0; i < n; i++){
        if (i < k){
            console.log(arry[n + i - k] + " ");
        }
        else {
            console.log(arry[i - k] + " ");
        }
    }
}) ();

