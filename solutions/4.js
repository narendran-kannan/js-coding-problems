p = (args) => { console.log(args) }

reverse_bits = (str) => {
  let reversed = []
  for (let bit of str) {
    if(bit == " "){
      reversed.push(' ')
      continue;
    }
    parseInt(bit) ? reversed.push('0') : reversed.push('1')

  }
  return reversed.join("")
}

p(reverse_bits('101') == '010')

p(reverse_bits('1111 0000 1111 0000 1111 0000 1111 0000') == '0000 1111 0000 1111 0000 1111 0000 1111')