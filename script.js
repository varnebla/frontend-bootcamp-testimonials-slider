function changeClasses(from, to) {
  let hidedElements = document.querySelectorAll('.hide');
  let activeElements = document.querySelectorAll('.active');
  activeElements.forEach((el) => {
    removeAnimations(el);
    el.classList.remove('active');
    el.classList.add('hide');
    addLeaveAnimation(el, to);
  });
  hidedElements.forEach((el) => {
    removeAnimations(el);
    el.classList.remove('hide');
    el.classList.add('active');
    addEnterAnimation(el, from);
  });
}

function moveNext() {
  changeClasses('left', 'right');
}

function movePrev() {
  changeClasses('right', 'left');
}

function removeAnimations(el) {
  el.classList.remove(
    'send-to-right',
    'send-to-left',
    'enter-from-right',
    'enter-from-left'
  );
}

function addEnterAnimation(el, direction) {
  (direction == 'right' || direction == 'left') &&
    el.classList.add(`enter-from-${direction}`);
}

function addLeaveAnimation(el, direction) {
  (direction == 'right' || direction == 'left') &&
    el.classList.add(`send-to-${direction}`);
}
