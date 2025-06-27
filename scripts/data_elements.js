const elements = {
    "hidrogenio": {
        symbol: "H",
        name: "Hidrogênio",
        category: "hidrogenio",
        atomic_number: 1,
        atomic_mass: 1.008,
        description: "O hidrogênio é o elemento mais simples e abundante do universo, composto por apenas um próton e um elétron. Ele é incolor, inodoro e altamente inflamável, sendo essencial em processos químicos e energéticos, como a formação da água e a produção de energia limpa. Além disso, possui potencial como fonte de combustível sustentável devido à sua capacidade de gerar energia sem emitir poluentes."
    },
    "helio": {
        symbol: "He",
        name: "Hélio",
        category: "gas_nobre",
        atomic_number: 2,
        atomic_mass: 4.0026,
        description: "O hélio é um gás nobre incolor, inodoro e não inflamável, sendo o segundo elemento mais abundante no universo. É conhecido por sua baixa densidade e por ser usado em balões e dirigíveis, além de aplicações criogênicas e na ressonância magnética. Por ser quimicamente inerte, não forma compostos facilmente, tornando-o seguro para diversas aplicações científicas e industriais."
    },
    "litio": {
        symbol: "Li",
        name: "Lítio",
        category: "metal_alcalino",
        atomic_number: 3,
        atomic_mass: 6.94,
        description: "O lítio é um metal alcalino leve e macio, sendo o elemento sólido mais leve da tabela periódica. Amplamente utilizado em baterias recarregáveis, ele revolucionou a tecnologia de dispositivos eletrônicos e veículos elétricos. Também tem aplicações na psiquiatria, como estabilizador de humor, e na produção de ligas metálicas resistentes."
    },
    "carbono": {
        symbol: "C",
        name: "Carbono",
        category: "ametal",
        atomic_number: 6,
        atomic_mass: 12.011,
        description: "O carbono é a base da vida na Terra, presente em todas as moléculas orgânicas e com uma incrível capacidade de formar diversas estruturas. Existe em várias formas alotrópicas, como grafite, diamante e grafeno, cada uma com propriedades únicas. Sua versatilidade o torna essencial na indústria, na tecnologia e até mesmo na medicina."
    },
    "nitrogenio": {
        symbol: "N",
        name: "Nitrogênio",
        category: "ametal",
        atomic_number: 7,
        atomic_mass: 14.007,
        description: "O nitrogênio é um gás inerte que compõe cerca de 78% da atmosfera terrestre, sendo essencial para a vida. É um componente fundamental de proteínas e DNA, além de ser usado na produção de fertilizantes e na conservação de alimentos. Na forma líquida, é utilizado em criogenia e em procedimentos médicos e industriais."
    },
    "oxigenio": {
        symbol: "O",
        name: "Oxigênio",
        category: "ametal",
        atomic_number: 8,
        atomic_mass: 15.999,
        description: "O oxigênio é um elemento vital para a respiração dos seres vivos e um dos mais abundantes na Terra. Presente na água e no ar, é essencial para a combustão e para processos biológicos, como a produção de energia celular. Também é utilizado na medicina, na indústria e até mesmo em sistemas de suporte à vida no espaço."
    },
    "fluor": {
        symbol: "F",
        name: "Flúor",
        category: "halogenio",
        atomic_number: 9,
        atomic_mass: 18.998,
        description: "O flúor é o elemento mais eletronegativo da tabela periódica, altamente reativo e encontrado principalmente em minerais. É amplamente utilizado na odontologia, na forma de fluoreto, para fortalecer os dentes e prevenir cáries. Também é essencial na produção de plásticos, como o Teflon, e em processos industriais, como o enriquecimento de urânio."
    },
    "sodio": {
        symbol: "Na",
        name: "Sódio",
        category: "metal_alcalino",
        atomic_number: 11,
        atomic_mass: 22.989,
        description: "O sódio é um metal alcalino altamente reativo, conhecido por seu papel fundamental na biologia e na indústria. Presente no sal de cozinha (cloreto de sódio), é essencial para o funcionamento dos nervos e músculos. Também é usado em lâmpadas de vapor de sódio, na produção de sabões e em processos químicos industriais."
    },
    "magnesio": {
        symbol: "Mg",
        name: "Magnésio",
        category: "metal_alcalino_terroso",
        atomic_number: 12,
        atomic_mass: 24.305,
        description: "O magnésio é um metal leve e resistente, essencial para a vida e amplamente utilizado em ligas metálicas. Desempenha um papel crucial na fotossíntese e na saúde humana, sendo importante para ossos e músculos. Na indústria, é usado em fogos de artifício, automóveis leves e até mesmo em laptops e smartphones."
    },
    "aluminio": {
        symbol: "Al",
        name: "Alumínio",
        category: "metal_representativo",
        atomic_number: 13,
        atomic_mass: 26.981,
        description: "O alumínio é um metal leve, resistente à corrosão e amplamente utilizado em embalagens, construção e transporte. Sua reciclabilidade o torna um material sustentável, presente em latas, aviões e estruturas arquitetônicas. Também é usado em cabos elétricos e na produção de espelhos telescópicos devido ao seu alto poder reflexivo."
    },
    "fosforo": {
        symbol: "P",
        name: "Fósforo",
        category: "ametal",
        atomic_number: 15,
        atomic_mass: 30.974,
        description: "O fósforo é um elemento essencial para a vida, presente no DNA, no ATP e em fertilizantes agrícolas. Existe em formas alotrópicas, como o fósforo branco (altamente reativo) e o fósforo vermelho (usado em fósforos de segurança). Sua escassez em alguns ecossistemas pode limitar o crescimento de plantas, tornando-o crucial para a agricultura."
    },
    "enxofre": {
        symbol: "S",
        name: "Enxofre",
        category: "ametal",
        atomic_number: 16,
        atomic_mass: 32.06,
        description: "O enxofre é um elemento amarelo e brilhante, essencial para a produção de aminoácidos e vitaminas. Usado na fabricação de pneus, ácido sulfúrico e fertilizantes, também é encontrado em fontes termais e vulcões. Seus compostos têm odor característico, como o cheiro de ovo podre (sulfeto de hidrogênio)."
    },
    "cloro": {
        symbol: "Cl",
        name: "Cloro",
        category: "halogenio",
        atomic_number: 17,
        atomic_mass: 35.45,
        description: "O cloro é um gás amarelo-esverdeado altamente reativo, essencial para o tratamento de água e desinfecção. Presente no sal marinho (cloreto de sódio), é usado na produção de plásticos, como o PVC, e em produtos de limpeza. Embora tóxico em sua forma pura, seus compostos são vitais para a saúde pública e a indústria química."
    },
    "ferro": {
        symbol: "Fe",
        name: "Ferro",
        category: "metal_de_transicao",
        atomic_number: 26,
        atomic_mass: 55.845,
        description: "O ferro é um metal fundamental para a civilização, usado em construções, ferramentas e na produção de aço. É essencial para a vida, sendo um componente central da hemoglobina, que transporta oxigênio no sangue. Sua abundância na crosta terrestre e suas propriedades magnéticas o tornam indispensável na tecnologia moderna."
    },
    "niquel": {
        symbol: "Ni",
        name: "Níquel",
        category: "metal_de_transicao",
        atomic_number: 28,
        atomic_mass: 58.693,
        description: "O níquel é um metal resistente à corrosão, amplamente utilizado em ligas metálicas, como o aço inoxidável. Presente em baterias recarregáveis (níquel-cádmio e níquel-metal hidreto), também é usado em moedas e revestimentos. Sua capacidade de resistir a altas temperaturas o torna valioso na indústria aeroespacial."
    },
    "cobre": {
        symbol: "Cu",
        name: "Cobre",
        category: "metal_de_transicao",
        atomic_number: 29,
        atomic_mass: 63.546,
        description: "O cobre é um metal altamente condutor, essencial para a eletrônica, fiação elétrica e sistemas de telecomunicação. Foi um dos primeiros metais utilizados pelo homem, presente em moedas, instrumentos musicais e obras de arte. Suas propriedades antibacterianas também o tornam útil em superfícies hospitalares e sistemas de água potável."
    },
    "ouro": {
        symbol: "Au",
        name: "Ouro",
        category: "metal_de_transicao",
        atomic_number: 79,
        atomic_mass: 196.967,
        description: "O ouro é um metal precioso, resistente à corrosão e altamente valorizado em joias, eletrônicos e investimentos. Sua excelente condutividade elétrica o torna essencial em componentes eletrônicos de alta precisão. Além de seu uso monetário ao longo da história, é aplicado na medicina, como em tratamentos de artrite reumatoide."
    },
    "uranio": {
        symbol: "U",
        name: "Urânio",
        category: "actinideo",
        atomic_number: 92,
        atomic_mass: 238.029,
        description: "O urânio é um elemento radioativo usado como combustível em usinas nucleares e na produção de armas atômicas. Seu isótopo U-235 é fissionável, liberando grandes quantidades de energia, enquanto o U-238 é mais estável. Apesar de sua controvérsia, a energia nuclear baseada em urânio é uma fonte significativa de eletricidade em muitos países."
    },
    "arsenio": {
        symbol: "As",
        name: "Arsênio",
        category: "semimetal",
        atomic_number: 33,
        atomic_mass: 74.922,
        description: "O arsênio é um elemento tóxico, conhecido por seu uso histórico em venenos e sua presença natural em águas subterrâneas. Embora seja um veneno potente, tem aplicações na indústria eletrônica (como em semicondutores) e na medicina (tratamento de certas leucemias). A contaminação por arsênio em água potável é um grave problema de saúde pública em várias regiões do mundo."
    }
}
