function intersection(array1, array2) {
  // pretty simple procedure; we take one array and turn it into a hashmap
  // (in python collections.Counter would be a great fit) 
  // then we iterate over second array; if its presence is in both arr1 and arr2
  // we can without further hesitation declare it shall be in our result
  // and decrese its allowed occurence by one
  const hsh = {};
  const done_arr = [];
  
  for (let num of array1) {
      if (!hsh[num]) {
          hsh[num] = 1;
      } else {
          hsh[num]++;
      }
  }
  
  for (let num of array2) {
      if (hsh[num] > 0) {
          done_arr.push(num);
          hsh[num]--;
      }
  }
  
  return done_arr;
  };

//console.log(intersection([1,2,2,3], [2,2,3,4]))
//console.log(intersection([1,2,2,3], [6,5,4]))


function union(array1, array2) {
  // union = both arrays merged without the intersection part of it
  // we already have an intersection coded up so we might aswell use it
  
  intersex = intersection(array1, array2)
  const hsh = {}

  // could be done with O(max(n,m)) via picking up iteration after we do both simultaneously
  // but its O(m+n) who cares really
  for (let num of array1) {
    if (!hsh[num]) {
        hsh[num] = 1;
    } else {
        hsh[num]++;
    }
  }

  for (let num of array2) {
    if (!hsh[num]) {
        hsh[num] = 1;
    } else {
        hsh[num]++;
    }
  }


  // it contains all of the elements and intersection is a subset of it;
  // therefore we dont have to handle whether or not we go under
  for (let key of intersex) {
    hsh[key]-=1
  }

  //now we are having key:val in hashmap 
  var arr=[]
  for (var key in hsh) {
    var tmp = new Array(hsh[key]).fill(+key)
    arr = [].concat(tmp, arr) 
  }
  
  return arr

}

console.log(union([1,2,2,3], [2,2,2,3,4])) //122324
console.log(union([1,2,3], [2,3,4])) //1234
console.log(union([1,2,3], [4, 5, 6])) //all

