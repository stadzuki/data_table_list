const list = document.querySelectorAll('.container > ul > li > span')

document.querySelector('table').onclick = function(event) {
    if(event.target.tagName !== 'TD') return;
    let data = [...event.target.parentNode.children]
    let text = data.map(item => item.textContent)
    list.forEach((item, idx) => item.textContent = text[idx]);
}