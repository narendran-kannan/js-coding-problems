p = (args) => { console.log(args) }

hops_helper = (array, start_index, target_index) => {
  if(start_index == target_index){
    return true
  }
  let hops = array[start_index]
  if(hops==0 || start_index+hops > target_index){
    return false
  }
  return hops_helper(array, start_index+hops, target_index)
}

reach_last = (array) => {
  return(hops_helper(array, 0, (array.length-1)))
}

p(reach_last([2, 0, 1, 0])) // true
p(reach_last([2, 1, 2, 3])) // false