const rec: Record<string, number> = {
  a: 1,
  b: 2,
  c: 3,
}

const res = Object.keys(rec).filter((key) => {
  console.log(rec[key])
  return rec[key] >= 2
})

console.log(res)



