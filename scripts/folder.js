
const folders = document.querySelectorAll('.folder')

for (const folder of folders) {
    const papers = folder.querySelectorAll('.paper')

    let i = 0
    for (const paper of papers) {
        const el_title = paper.querySelector('.title')
        const title = el_title.innerHTML

        const div_menu = document.createElement('div')
        div_menu.classList.add('folder-tag')
        const button_menu = document.createElement('button')
        button_menu.style.marginLeft = `mod(${i * 50}px, 70%)`
        button_menu.innerHTML = title
        div_menu.appendChild(button_menu)

        const my_paper = paper
        paper.remove()

        const div_tab = document.createElement('div')
        div_tab.appendChild(div_menu)
        div_tab.appendChild(my_paper)
        folder.appendChild(div_tab)

        const paper_id = my_paper.getAttribute('id')
        my_paper.removeAttribute('id')
        div_tab.setAttribute('id', paper_id)

        button_menu.addEventListener('click', function () { openTab("#" + paper_id) })
        i++
    }

    const data_folder_title = folder.querySelector('.folder-data')
    const folder_title = data_folder_title.getAttribute('value')

    const folder_front = document.createElement('div')
    folder_front.className = 'folder-front'
    folder_front.innerHTML = folder_title
    folder.appendChild(folder_front)
}

function openTab(id) {
    const paper = document.querySelector(id)

    paper.classList.remove('start-paper')

    if (paper.classList.contains('selected')) {
        paper.classList.add('unselected')
        paper.classList.remove('selected')
    }
    else {
        paper.classList.add('selected')
        paper.classList.remove('unselected')
    }

}