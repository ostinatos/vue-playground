
/* 
如果将所有调用队列起来的话，很多场景下，并不需要将这些队列住的调用全部执行
所以throttle的本质要求，应该是在某个时间段内，保证指定函数只会按指定间隔时间执行
*/
function throttle(func, wait, immediate = true) {
    let timer = null;
    let queuedCount = 0;
    // let queued = false;
    return function () {
        // console.log("queuedCount:", queuedCount);
        if (!timer) {
            func.call(this, arguments);
            timer = setInterval(() => {
                if (queuedCount > 0) {
                    func.call(this, arguments);
                    queuedCount--;
                }
                else {
                    clearInterval(timer);
                    // remember to reset the timer
                    timer = null;
                }
            }, wait);
        }
        else {
            // timer is already there
            // if queued count is already above zero, do not increase the count, to avoid accumulating calls.
            if (queuedCount <= 0) {
                queuedCount++;
            }
        }
    }
}

export { throttle }