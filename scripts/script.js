
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

openTab("#paper-dioxido-de-carbono")

const input_metano = document.querySelector('#input-metano')
const input_gas_oxigenio = document.querySelector('#input-gas-oxigenio')
const input_dioxido_de_carbono = document.querySelector('#input-dioxido-de-carbono')
const input_agua = document.querySelector('#input-agua')

input_metano.addEventListener('input', estequiometria_dioxido_de_carbono)

function estequiometria_dioxido_de_carbono() {
    const value_metano = input_metano.value

    const gas_oxigenio = value_metano * 3
    const dioxido_de_carbono = value_metano * 1
    const agua = value_metano * 2

    console.log(value_metano, gas_oxigenio, dioxido_de_carbono, agua)

    input_gas_oxigenio.setAttribute('value', gas_oxigenio)
    input_dioxido_de_carbono.setAttribute('value', dioxido_de_carbono)
    input_agua.setAttribute('value', agua)
}