function titleCase(sentence: string) {
    const tCase = []
    const split = sentence.split(" ")
    const changeCase = split.map(item => {
        var text = item.split("")
        const firstText = text[0].toUpperCase()
        text.shift()
        const newArray = [firstText, ...text]
        return newArray.join("")
    })

    return changeCase.join(" ")
}
console.log(titleCase("my name is shakib"))