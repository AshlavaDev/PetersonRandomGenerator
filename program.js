//Arrays for all the parts as well as one variable for spaces and one for mid-sentence joiner
const villains = ["Postmodern Neomarxists", "Feminists (who secretly crave domination)", "Leftists academics", "Dangerous ideologues", "Derrida and Foucault", "Indoctrinated students", "Social justice types", "Radical trans activists", "Politically Correct HR departments", "Actual Communists", "The Left", "Millenials with a victimhood mentality"];
const spicyVerb = ["are totally corrupting", "have zero respect for", "want to annihilate", "assault the archetype of", "don't bloody believe in", "will quickly infect", "unleash the Chaos Dragon of", "dismiss and transgress", "must be stopped from attacking", "will make Gulags out of", "feminize of weaken"];
const favouriteThings = ["the dominace hierarchy", "the metaphorical substrate", "Western values", "the classical humanities", "the individual", "the Hero's journey", "the fabric of Being", "Solzhenitsyn's genius", "Carl Jung's legacy", "IQ testing's ability to determine achievement", "the divine Logos", "the inescapable tradegy and suffering of life", "the humble lobster's quest"];
const evilWeapons = ["murderous equity doctrine", "dangerous egalitarian utopia", "hatred of Objectice Truth", "compelled speech", "group identity", "Maoist pronouns", "propaganda from Frozen", "radical collectivism", "lens of power for everything", "disdain for Being", "ideological bill C-16", "low seratonin levels and poor posture", "totalitarian ideology which I've been studying for decades"];
const ominousConclusion = ["and we can't even have a conversation about it!", "so just ask the Kulaks how that worked out.", "and no one is talking about it!", "as you can bloody well imagine!", "just like Nietzsche prophesized.", "so you should sign up for the Self Authoring Suite.", "[while ignoring original question] so let me aske you this...", "and you can be damn sure about that!"];
const space = " ";
const becauseOf = "because of their";

//A function that takes an array for sentence parts, and returns a part
function getRandomPart(partArray) {
  return partArray[Math.floor(Math.random()*partArray.length)];
}

//A function to make the whole sentence from different parts
function makeSentence(partOne, partTwo, partThree, partFour, partFive, space, becauseOf) {
  return getRandomPart(partOne) + space + getRandomPart(partTwo) + space + getRandomPart(partThree) + space + becauseOf + space + getRandomPart(partFour) + space + getRandomPart(partFive);
}

function clickButton(partOne, partTwo, partThree, partFour, partFive, space, becauseOf) {
    let sentence = makeSentence(partOne, partTwo, partThree, partFour, partFive, space, becauseOf);
    document.getElementById("sentence").innerText = sentence;

}
console.log(makeSentence(villains, spicyVerb, favouriteThings, evilWeapons, ominousConclusion, space, becauseOf));