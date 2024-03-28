//You are given an integer array nums and an integer k.

//The frequency of an element x is the number of times it occurs in an array.

//An array is called good if the frequency of each element in this array is less than or equal to k.

//Return the length of the longest good subarray of nums.

//A subarray is a contiguous non-empty sequence of elements within an array.







const nums = [1,2,3,1,2,3,1,2]
const k = 2


function maxSubarrayLength(nums, k) {
  
    let left = 0
    let right = 1
    let longestArray = 0

    for (right=1; right<=nums.length; right++) {

        let slicedArray = nums.slice(left, right)
        let filteredArray = slicedArray.filter((num)=> {
            return num == slicedArray[slicedArray.length - 1]
        })
        console.log("slicedArray: ",slicedArray)
        console.log("filteredArray: ",filteredArray)


        if (filteredArray.length <= k && filteredArray.length >= 1) {
            longestArray = slicedArray.length

        }

        else {
            left ++
        }
        
        
        console.log("longestArray: ",longestArray)








    }




};

maxSubarrayLength(nums, k)