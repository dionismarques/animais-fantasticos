export default function outSideClick(element, events, callback) {
  const outSide = 'data-outside';
  const html = document.documentElement; // = html

  function handleOutSideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outSide);
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleOutSideClick);
      });
      callback();
    }
  }

  if (!element.hasAttribute(outSide)) {
    events.forEach((userEvent) => {
      setTimeout(() => html.addEventListener(userEvent, handleOutSideClick));
    });
    element.setAttribute(outSide, '');
  }
}
