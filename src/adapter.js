export class Adapter {
  constructor(url) {
    this.ws = new WebSocket(url)
  }
  onOpen(f) {
    this.ws.onopen = f
  }
  onMessage(f) {
    this.ws.onmessage = f
  }
  onError(f) {
    this.ws.onerror = f
  }

  send(txt) {
    this.ws.send(txt)
  }
  close() {
    this.ws.close()
  }
}

export function log(...args) {
  /* eslint-disable-next-line no-undef */
  if (window.DEBUG && window.DEBUG.includes('deribit:api')) {
    /* eslint-disable-next-line no-console */
    console.log.apply(null, args)
  }
}
export function error(...args) {
  /* eslint-disable-next-line no-console */
  console.error.apply(null, args)
}
export function nextTick(f) {
  setTimeout(f, 0)
}
