const facts = [{
    style:"Air", 
    fact: "Originally from the Air Nomads. More into seasons of Fall or Autumn",
}, {
    style: "Water",
    fact: "Uniquely comes from the Moon. Sub-bending includes Blood-bending. Usually required a full moon to use Blood-bending, but later in the future, a villain had access to using Blood-bending freely"
}, {
    style: "Fire",
    fact: "Generally the most aggressive bending while also being into the season of summer(obviously). Rooted in dragons. Sub-bending includes Lightning-bending and Combustion-bending"
}, {
    style: "Earth",
    fact: "Originally rooted in gigantic Badger Moles. Sub-bending includes Metal bending and Lava bending; Metal bending is way more common than Lava bending"
}
]

const filters = {
    searchText: ""
}

const renderSearch = function (facts, filters) {
    const filteredFacts = facts.filter(function (factoid) {
        return factoid.fact.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector("#sect-facts").innerHTML = ''

    filteredFacts.forEach(function (factoid) {
        const factEl = document.createElement('p')
        factEl.textContent = factoid.fact
        document.querySelector("#sect-facts").appendChild(factEl)
    })

}

renderSearch(facts, filters)

document.querySelector("#search-filter").addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderSearch(facts, filters)
})