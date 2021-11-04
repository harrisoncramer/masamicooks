export function debounce(fn, time) {
  let timer
  return function (...args) {
    if (timer) clearTimeout(timer)
    setTimeout(() => {
      fn(...args)
    }, time)
  }
}
