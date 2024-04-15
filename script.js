function constructNote(str1, str2)
{
    let letters = {};
    for (let str of str2)
    {
        letters[str] = (letters[str] + 1) || 1;
    }
    for (let str of str1)
    {
        if (!letters[str] || letters[str] <= 0)
        {
            return false;
        }
        else
        {
            letters[str]--;
        }
    }
    return true;
}

function averagePair(arr, target)
{   
    let pointerA = 0;
    let pointerB = arr.length -1;

    while (pointerA < pointerB)
    {
        let avg = (arr[pointerA] + arr[pointerB]) / 2
        if(avg=== target)
        {
            return true;
        }
        else if (avg > target)
        {
             pointerB--;
        }
        else if (avg < target)
        {
            pointerA++;
        }
    }
    return false;

}


function twoArrayObject(arr1, arr2)
{
    let finalObj = {};
 
    for (let i =0; i < arr1.length; i++)
    {
        finalObj[arr1[i]] = (arr2[i]) || null;
    }
    return finalObj;
}

function sameFrequency(int1, int2)
{
    let string1 = int1.toString();
    let string2 = int2.toString();

    let obj1 = {};
    let obj2 = {};
    for (let i of string1)
    {
        obj1[i] = (obj1[i] +1) || 1; 
    }
    for (let i of string2)
    {
        obj2[i] = (obj2[i] +1) || 1; 
    }
    for (let o in obj1)
    {
        if (obj1[o] !== obj2[0])
        {
            return false;
        }
    }
    return true;
    
}

function separatePositive(nums) {
    let start = 0;
    let end = nums.length - 1;
  
    while (start < end) {
      if (nums[start] < 0 && nums[end] > 0) {
        var temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
  
        start += 1;
        end -= 1;
      } else {
        if (nums[start] > 0) start += 1;
        else end -= 1;
      }
    }
    return nums;
  }

  function isSubsequence(str1, str2) {
    let str1Idx = 0;
    let str2Idx = 0;
    if (!str1) return true;
    while (str2Idx < str2.length) {
      if (str2[str2Idx] === str1[str1Idx]) {
        str1Idx += 1;
      }
      if (str1Idx === str1.length) return true;
      str2Idx += 1;
    }
    return false;
  }


  function countPairs(arr, target)
  {
    let idx1 = 0;
    let idx2 = arr.length-1;
    let count = 0;
    while ( idx1 < arr.length-1)
    {
        if (arr[idx1] + arr[idx2] === target)
        {
            count++;
        }
        idx2--;
        if (idx2 <= idx1)
        {
            idx2 = arr.length -1
            idx1++;
        }
    }
    return count;
  }
  