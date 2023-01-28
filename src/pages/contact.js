import createElementWithClassAndContent from "../create-element-custom-function.js";

function fill(main) {
  main.replaceChildren();
  const contactContainer = createElementWithClassAndContent("div", "contact-container", "");
  const phoneContainer = createElementWithClassAndContent("div", "contact-mini-container", "");
  const emailContainer = createElementWithClassAndContent("div", "contact-mini-container", "");
  const addressContainer = createElementWithClassAndContent("div", "contact-mini-container", "");
  phoneContainer.append(
    createElementWithClassAndContent("span", "", "Phone:"),
    createElementWithClassAndContent("span", "", "333-444-5555"),
  );
  emailContainer.append(
    createElementWithClassAndContent("span", "", "Email:"),
    createElementWithClassAndContent("span", "", "fakeEmail@mail.com")
  );
  addressContainer.append(
    createElementWithClassAndContent("span", "", "Address:"),
    createElementWithClassAndContent("span", "", "Fake city, Fake street 38")
  );
  contactContainer.append(
    createElementWithClassAndContent("h1", "", "Contact"),
    createElementWithClassAndContent("div", "contact-spacer", ""),
    phoneContainer,
    createElementWithClassAndContent("div", "contact-spacer", ""),
    emailContainer,
    createElementWithClassAndContent("div", "contact-spacer", ""),
    addressContainer
  );
  main.appendChild(contactContainer);
};

export default { fill };