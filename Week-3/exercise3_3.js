function createIncrement() {
    let count = 0;
    function increment() {
        count++;
    }
    let message = `Count is ${count}`;
    function log() {
        console.log(message);
    }
    return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log();// What is logged?

// Count is 0
/*
    message is initialized when count was 0 and even if when count gets updated to new value, message is
    still pointing to old instance of count and hence we get the output as Count is 0"
*/
