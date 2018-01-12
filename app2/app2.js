//app1.js

let domEl;

export function bootstrap(props) {
  return Promise
    .resolve()
    .then(() => {
      domEl = document.createElement('div');
      domEl.id = 'app2';
      domEl.classList.add('application-wrappers')
      document.body.appendChild(domEl);
    });
}

export function mount(props) {
  return Promise
    .resolve()
    .then(() => {
      /**
       * window.requestAnimationFrame() is necessary in order to have the transition on first bootstrap/mount,
       * otherwise the browser batches the addition of the 'mounting' class with the 'wrapper' class from bootstrap
       * above and the transition doens't actually happen.
       **/
      window.requestAnimationFrame(() => domEl.classList.add('application-mounting'))
      domEl.innerHTML = `App 2 is mounted! <a href=#/app1>Go to app1</a>`
      domEl.style.backgroundColor = 'orange'
    })
}

export function unmount(props) {
  return Promise
    .resolve()
    .then(() => {
      domEl.classList.remove('application-mounting')
      domEl.innerHTML = '';
    })
}