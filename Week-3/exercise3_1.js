const cache = {};
const add = (...args) => args.reduce((a, b) => a + b, 0);
const memoizeAdd = (...args) => {
    if (args.toString() in cache) {
        console.log(cache[args]);
    } else {
        cache[args] = add(...args);
    }
    console.log(cache[args]);
}

memoizeAdd(100, 200, 300);
