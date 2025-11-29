# Game API Library

создать
```js  
interface Game {
    sessionId: string;
}
 const sdk = new GameAPI(game: Game);
```

получить данные по клиенту или пустой обьект { } если еще не готовы данные
```js
 sdk.getUser()
 ```

старт игры
```js
 sdk.gameplayStart()
 ```

## Installation

```bash
npm install git+https://github.com/7ka-dev/time2join.me-sdk.git
```
or
```bash
npm install git+ssh://git@github.com:7ka-dev/time2join.me-sdk.git
```