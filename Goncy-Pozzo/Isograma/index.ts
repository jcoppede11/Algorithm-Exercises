const isIsograma = (text: string): boolean => {

    const letters: string[] = [];
    let normalizedString: string = text.toLowerCase();
    let letter: string;

    for (letter of normalizedString) {
        if (letters.includes(letter)) {
            console.log("No es un isograma");
            return false;
        }
        letters.push(letter);
    }
    console.log("Es isograma")
    return true;
};
