/**
 * a naive debounce implementation
 * original function will be called after 'wait' ms
 *
 * @param {*} func
 * @param {number} [wait=50]
 * @returns
 */
function naiveDebounce(func, wait = 50) {
    let timer = null;
    // return a wrapper function to limit the call to original function
    return function () {
        if (!timer) {
            // timer is null
            timer = setTimeout(() => {
                // call target function.
                func.apply(this, arguments)
                // reset timer handle
                timer = null;
            }, wait)
        }
        else {
            // timer is not null. omit the call
        }
    }
}
/* 
references to
https://github.com/InterviewMap/CS-Interview-Knowledge-Map/pull/177/commits/10e134d909bc6187d549c791d259d7bfecc24465
*/
function advDebounce(func, wait = 50, immediate = true) {
    let timer = null;
    return function () {
        if (!timer) {
            // timer is null
            let timeoutFn = immediate ? () => { } : func;
            if (immediate) {
                func.apply(this, arguments);
            }
            timer = setTimeout(() => {
                timeoutFn.apply(this, arguments);
                timer = null;
            }, wait)
        }
        else {
            // omit the call
        }
    }
}

/**
 * from:
 * https://yuchengkai.cn/docs/frontend/#%E9%98%B2%E6%8A%96
 * 防抖函数，返回函数连续调用时，空闲时间必须大于或等于 wait，func 才会执行
 *
 * @param  {function} func        回调函数
 * @param  {number}   wait        表示时间窗口的间隔
 * @param  {boolean}  immediate   设置为ture时，是否立即调用函数
 * @return {function}             返回客户调用函数
 */
function debounce(func, wait = 50, immediate = true) {
    let timer, context, args

    // 延迟执行函数
    const later = () => setTimeout(() => {
        // 延迟函数执行完毕，清空缓存的定时器序号
        timer = null
        // 延迟执行的情况下，函数会在延迟函数中执行
        // 使用到之前缓存的参数和上下文
        if (!immediate) {
            func.apply(context, args)
            context = args = null
        }
    }, wait)

    // 这里返回的函数是每次实际调用的函数
    return function (...params) {
        // 如果没有创建延迟执行函数（later），就创建一个
        if (!timer) {
            timer = later()
            // 如果是立即执行，调用函数
            // 否则缓存参数和调用上下文
            if (immediate) {
                func.apply(this, params)
            } else {
                context = this
                args = params
            }
            // 如果已有延迟执行函数（later），调用的时候清除原来的并重新设定一个
            // 这样做延迟函数会重新计时
        } else {
            clearTimeout(timer)
            timer = later()
        }
    }
}

export { naiveDebounce, advDebounce, debounce }