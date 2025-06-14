
const data_links_elements = document.querySelectorAll('.link-element')

for ( const data_link_element of data_links_elements ) {
    const value = data_link_element.getAttribute('value')
    const element = elements[value]

    if (!element) continue

    const id = "#paper-" + value
    
    const a_link_element = document.createElement('a')
    a_link_element.innerHTML = element.symbol
    a_link_element.href = id
    a_link_element.classList.add('small-element')
    a_link_element.classList.add(element.category)

    a_link_element.addEventListener('click', function () { openTab(id) })

    data_link_element.appendChild(a_link_element)
}

const data_elements = document.querySelectorAll('.element')

for ( const data_element of data_elements ) {
    const value = data_element.getAttribute('value')
    const element = elements[value]
    
    data_element.classList.add('element')
    data_element.classList.add(element.category)

    const p_atomic_number = document.createElement('p')
    p_atomic_number.classList.add('atomic-number')
    p_atomic_number.innerHTML = element.atomic_number
    data_element.appendChild(p_atomic_number)

    const p_symbol = document.createElement('p')
    p_symbol.classList.add('symbol')
    p_symbol.innerHTML = element.symbol
    data_element.appendChild(p_symbol)

    const p_name = document.createElement('p')
    p_name.classList.add('name')
    p_name.innerHTML = element.name
    data_element.appendChild(p_name)

    const p_atomic_mass = document.createElement('p')
    p_atomic_mass.classList.add('atomic-mass')
    p_atomic_mass.innerHTML = element.atomic_mass + " u"
    data_element.appendChild(p_atomic_mass)
}

const folders = document.querySelectorAll('.folder')

for ( const folder of folders ) {
    const papers = folder.querySelectorAll('.paper')

    let i = 0
    for ( const paper of papers ) {
        const el_title = paper.querySelector('.title')
        const title = el_title.innerHTML

        const div_menu = document.createElement('div')
        div_menu.classList.add('folder-tag')
        
        const button_menu = document.createElement('button')
        button_menu.style.marginLeft = (i*80%400)+'px'
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


        button_menu.addEventListener('click',
            function () { openTab("#"+paper_id) })

        i++
    }

    const folder_front = document.createElement('div')
    folder_front.className = 'folder-front'
    folder.appendChild(folder_front)
}

function openTab(id) {
    const paper = document.querySelector(id)
    paper.classList.toggle('selected')
}