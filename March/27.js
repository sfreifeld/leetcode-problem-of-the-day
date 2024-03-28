// Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.




const nums=[10,5,2,6]
const k = 100


var numSubarrayProductLessThanK = function(nums, k) {
    if (k <= 1) return 0
  
    let left = 0, right = 0, product = 1, count = 0
    const n = nums.length;
  
    while (right < n) {
      product *= nums[right]
      while (product >= k) product /= nums[left++]
      count += 1 + (right - left)
      right++;
    }
  
    return count
  }




/*
    // single elements less than k

    const subArr = []

    

    const sortedArray = nums.sort(function(a,b) {
        return a-b
    })


    
    // figure out how many values in 
    let levelNumber = 1
    for (val of sortedArray) {
        levelNumber = levelNumber * val
        console.log(levelNumber)

    }
    
    
    
    
    
    let slicedArray = [...sortedArray]

    
    function findMedianValue(nums) {
        return sortedArray[Math.round((sortedArray.length - 1)/2)]
    }


    let highestValue = 0
    
    while (slicedArray.length > 1) {
        if (findMedianValue(slicedArray)< k) {
            slicedArray = slicedArray.slice(Math.round((slicedArray.length - 1)/2))
            console.log(slicedArray)
            highestValue=slicedArray[0]
            console.log(highestValue)

            
        }

        console.log(sortedArray.findIndex((val) => val == highestValue))

    }


    sortedArray.forEach((val) => {
        if (sortedArray.indexOf(val) <= sortedArray.indexOf(highestValue)) {
            subArr.push([val])
        }
    })


    if (sortedArray[0]*sortedArray[1] > k) {
        return subArr.length
    }

    
    
    
*/
