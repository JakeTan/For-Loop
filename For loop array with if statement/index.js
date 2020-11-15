//Mini Challenge: We have decided to play a game between all of us. Create a loop that loops over the numbers given to each one of us. If the person has even number, print out the word 'blue team'. If it is odd, print out the word 'red team'.

const people = 56

for (let i =1; i <= people; i++) {
    if (i % 2 === 0) {
        console.log('Person ' + i + ' is on the blue team')
    } else {
        console.log('Person ' + i + ' is on the red team')
    }
}