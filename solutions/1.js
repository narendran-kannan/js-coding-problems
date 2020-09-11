return_first_recurring = (str) => {
  let set = new Set();
  for (let c of str){
    if (set.has(c)){
      return c
    }
    set.add(c)
  }
  return null
}

console.log(return_first_recurring("acbbac"));
console.log(return_first_recurring("abcdef"));