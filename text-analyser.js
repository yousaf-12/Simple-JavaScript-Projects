// Text Analyser Project
function textAnalyser(input) {
    try{
        const text = input.trim();
        if(!text) {
            throw new error("Please Enter a text!");
        }
        const words = text.split(/\s+/);

        return{
            upperCase: text.toupperCase(),
            lowerCase: text.toLowerCase(),
            Characters: text.length(),
            wordsCount: words.length()
        };

    } catch(error) {
        return {eror: error.message};
    }

    console.log(textAnalyser("JS is Power!"));
    console.log(textAnalyser(" "));
}