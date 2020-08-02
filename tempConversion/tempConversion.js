const ftoc = fTemp => {
  let c = (fTemp - 32) * (5/9);
  let final = Math.round((c + Number.EPSILON) * 10) / 10;
  return final;
}

const ctof = cTemp => {
  let f = cTemp * (9/5) + 32;
  let final = Math.round((f + Number.EPSILON) * 10) / 10;
  return final;
}

module.exports = {
  ftoc,
  ctof
}
