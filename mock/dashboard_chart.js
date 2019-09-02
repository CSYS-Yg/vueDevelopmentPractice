function chart(method) {
  let res = null;
  switch (method) {
    case "GET":
      res = [20, 40, 78, 10, 76, 48];
      break;
    default:
      res = null;
  }
  return res;
}

module.exports = chart;
