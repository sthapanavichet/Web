const average = (test_scores) => {
    let total = 0
    for(let score of test_scores) {
        total += score
    }
    return (total / test_scores.length)
}

test_scores = []
test_scores.push(66)
test_scores.push(70)
test_scores.push(80)
test_scores.push(56)
console.log("Test scores length: ")
console.log(test_scores.length)
console.log("Test scores: ")
for(let i = 0; i < test_scores.length; i++) {
    console.log(test_scores[i])
}
console.log("Average: ")
console.log(average(test_scores))