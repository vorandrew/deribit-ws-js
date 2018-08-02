# deribit-ws-js
Deribit.com WebSocket browser generic library

# Install

```bash
yarn add deribit-ws-js
```

Constructor

```js
import Deribit from 'deribit-ws-js'
const ws = new Deribit({
  key: 'deribit_key',
  secret: 'secret',
  testnet: false,
  message: msg => console.log(msg),

  // see documentation for possible events
  trade: trade => console.log(msg),

})
```

Wait for connection

```js
await ws.connected
// or ws.connected.then(() => console.log('Ready') )
```

Disconnect when done

```js
ws.disconnect()
```

## Actions

```js
    ws.action('positions').then(console.log)
```

```js
  ws.action('buy', {
    instrument: 'BTC-28DEC18-15000-C',
    quantity: 1,
    type: 'market',
    label: '1123123',
  }).then(console.log)
```

## Event hooks

Filters and events (see https://www.deribit.com/main#/pages/docs/api -> WebSocket API -> Subscribe)

```js
let filters = ['all', 'futures', 'options', 'index', 'any_instrument_name']
```
```js
let events = ['order_book', 'trade', 'user_order', 'my_trade']
```

Hooks

```js
ws.hook('my_trade', trade => console.log(trade))
```

With filter

```js
ws.hook('order_book', 'BTC-28SEP18', cb)
```

Array as filter

```js
ws.hook('trade', ['BTC-28SEP18','BTC-28DEC18'], cb)
```
