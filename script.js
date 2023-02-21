var likeCount = [9, 12, 9];

function increaseLikes(index) {
    likeCount[index]++;
    var selectorToQuery = "#user-" + index + "-likes"
    document.querySelector(selectorToQuery).innerText = likeCount[index] + " like(s)"
}