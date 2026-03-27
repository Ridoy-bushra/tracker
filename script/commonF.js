function selectorId(id) {
    const select = document.querySelector(`#${id}`);
    return select;
}
function selectorClass(Class) {
    const selectC = document.querySelector(`.${Class}`);
    return selectC;
}
function selectorClassN(ClassN) {
    const selectCn = document.querySelectorAll(`.${ClassN}`);
    return selectCn;
}