const generateUrlBrush = () => {
  let arrayList = []
  let limite = 28

  for (let index = 2; index < limite; index++) {
    arrayList.push(`https://raw.githubusercontent.com/CkillDy/brush-Ibispaint-ck/main/brushs-ck/ck${index}.png`)
  }
  return arrayList
}

export default generateUrlBrush