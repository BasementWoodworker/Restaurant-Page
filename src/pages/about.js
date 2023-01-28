import createElementWithClassAndContent from "../create-element-custom-function";

function fill(main) {
  const aboutContainer = createElementWithClassAndContent("div", "about-container", "");
  main.replaceChildren();
  aboutContainer.append(
    createElementWithClassAndContent("h1", "", "About"),
    createElementWithClassAndContent("div", "about-spacer", ""),
    createElementWithClassAndContent("div", "about-text", "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.")
  );
  main.appendChild(aboutContainer);
};

export default { fill };