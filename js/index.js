const emailRegExp = /^[\w\d]+@\w+\.\w{2,3}$/;

document.querySelector("form").onsubmit = (e) => {
  e.preventDefault();

  let okay;

  for (let child of Array.from(e.target.elements)) {
    if (child.nodeName != "INPUT") continue;

    okay = child.value.trim();

    child.nextSibling.textContent = okay
      ? ""
      : child.placeholder + " cannot be empty";

    child.classList.add(okay ? "success" : "failure");
    child.classList.remove(okay ? "failure" : "success");
  }

  let emailField = e.target.elements.email;
  let email = emailField.value;

  okay = emailRegExp.test(email);

  emailField.nextSibling.textContent = okay
    ? ""
    : email == ""
    ? "Email cannot be empty"
    : "Looks like this is not an email";

  emailField.classList.add(okay ? "success" : "failure");
  emailField.classList.remove(okay ? "failure" : "success");
};
