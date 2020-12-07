const form = document.querySelector("form");
const result = document.querySelector(".result");

form.addEventListener("submit", convert);

function convert(e) {
  e.preventDefault();
  const binaryNumber = form["binary"].value;
  const reg = /([^01])/;

  if (!reg.test(binaryNumber)) {
    result.innerText = `The Decimal For This Binay Is : ${parseInt(
      binaryNumber,
      2
    )}`;
  } else {
    result.innerText = `You Entered Something Othe Than 0 And1`;
  }
}
