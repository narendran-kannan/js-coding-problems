p = (args) => console.log(args)

sort_array = (pos, neg) => {
  sorted = []
  let i = 0, j = 0
  while (i < pos.length &&  j < neg.length) {
    if (pos[i] <= neg[j]) {
      sorted.push(pos[i])
      i++
    }
    else {
      sorted.push(neg[j])
      j++
    }
  }
  sorted.push(pos.slice(i, pos.length))
  sorted.push(neg.slice(j, neg.length));
  p(sorted.flat())
}

square_and_sort = (arr) => {
  let first_positive_index = 0;
  for (let num of arr) {
    if (num >= 0) {
      break;
    }
    first_positive_index++;
  }
  neg = arr.slice(0, first_positive_index).map(x => x ** 2).reverse()
  pos = arr.slice(first_positive_index, arr.length).map(x => x ** 2)

  sort_array(pos, neg)
}

square_and_sort([-9, -2, 0, 2, 3])
square_and_sort([0, 2, 4])
square_and_sort([-9, -2, 0])