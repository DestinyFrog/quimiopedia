
const input_metano = document.querySelector('#input-metano')
input_metano.addEventListener('input', estequiometria_metano)

function estequiometria_metano() {
    const input_gas_oxigenio = document.querySelector('#input-gas-oxigenio')
    const input_dioxido_de_carbono = document.querySelector('#input-dioxido-de-carbono')
    const input_agua = document.querySelector('#input-agua')

    const value_metano = input_metano.value

    const gas_oxigenio = value_metano * 3
    const dioxido_de_carbono = value_metano * 1
    const agua = value_metano * 2

    input_gas_oxigenio.setAttribute('value', gas_oxigenio)
    input_dioxido_de_carbono.setAttribute('value', dioxido_de_carbono)
    input_agua.setAttribute('value', agua)
}

const input_soda_caustica = document.querySelector('#input-soda-caustica')
input_soda_caustica.addEventListener('input', estequiometria_neutralizacao)

function estequiometria_neutralizacao() {
    const input_acido_sulfurico = document.querySelector('#input-acido-sulfurico')
    const input_agua2 = document.querySelector('#input-agua2')
    const input_sulfato_de_sodio = document.querySelector('#input-sulfato-de-sodio')

    const value_soda_caustica = input_soda_caustica.value

    const acido_sulfurico = value_soda_caustica / 2
    const agua = value_soda_caustica * 2
    const sulfato_de_sodio = acido_sulfurico

    input_acido_sulfurico.setAttribute('value', acido_sulfurico)
    input_agua2.setAttribute('value', agua)
    input_sulfato_de_sodio.setAttribute('value', sulfato_de_sodio)
}
