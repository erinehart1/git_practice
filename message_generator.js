//Add functionality to randomly select the different message components so they can create a cohesive message.


const words = {
    nouns:      ['ball','toy','bone','treat'],
    verbs:      ['fetch','chase','throw','drop'],
    adjectives: ['large', 'tiny','orange','new']
}

const randomizer = (Math.floor(Math.random()*4));

console.log(`Walter, ${words.verbs[randomizer]} the ${words.adjectives[randomizer]} ${words.nouns[randomizer]}!`);

