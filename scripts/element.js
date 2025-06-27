
const folder_element = document.querySelector('#folder-elements')
const papers = Object.keys(elements)

for (const paper of papers) {
    const element_id = paper
    const element = elements[element_id]

    const paper_element = document.createElement('div')
    paper_element.classList.add('paper')
    paper_element.setAttribute('id', "paper-" + element_id)

    const content_element = document.createElement('p')

    const data_element = document.createElement('data')
    data_element.classList.add('element')
    data_element.classList.add('float-right')
    data_element.setAttribute('value', element_id)

    const title_element = document.createElement('h2')
    title_element.classList.add('title')
    title_element.innerHTML = element.name

    const description_element = document.createElement('p')
    description_element.classList.add('description')
    description_element.innerHTML = element.description

    content_element.appendChild(title_element)
    content_element.appendChild(data_element)
    content_element.appendChild(description_element)

    paper_element.appendChild(content_element)

    folder_element.appendChild(paper_element)
}

const data_links_elements = document.querySelectorAll('.link-element')

for (const data_link_element of data_links_elements) {
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

for (const data_element of data_elements) {
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