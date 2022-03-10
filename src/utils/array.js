/**
 * 向给定数组末尾添加一项,如果数组中已经存在则不添加
 *
 * @param {Aray} arr 给定数组
 * @param {any} value 需要添加的一项
 */
export function addToArray(arr, value) {
  const i = arr.indexOf(value)
  if (!~i) arr.push(value)
}
/**
 * 删除给定数组中的目标值
 *
 * @param {Array} arr 给定数组
 * @param {any} value 目标值
 */
export function removeFromArray(arr, value) {
  const i = arr.indexOf(value)
  if (~i) arr.splice(i, 1)
}
