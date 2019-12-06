const {
  set,
  splitEvery,
  split,
  lensIndex,
  range,
  xprod
} = require('ramda')
const fs = require('fs')

const OPERATION_MAPPING = {
  1: (x, y) => x + y,
  2: (x, y) => x * y
}

const run = ([opCode, p1, p2, writeTo], input) => {
  const operation = OPERATION_MAPPING[opCode]
  const output = operation(input[p1], input[p2])

  return set(lensIndex(writeTo), output, input)
}

const calculate = (input, step = 0) => {
  const instruction = splitEvery(4)(input)[step]

  if (instruction[0] === 99) {
    return input
  }

  return calculate(run(instruction, input), step + 1)
}

const replace = (input, noun, verb) => (
  set(
    lensIndex(1),
    noun,
    set(lensIndex(2), verb, input)
  )
)

const readFile = (fileName) => new Promise((resolve, reject) => {
  console.log(`Reading ${fileName}...`)

  fs.readFile(fileName, 'utf8', (err, contents) => {
    if (err) {
      return reject(err)
    }

    return resolve(contents)
  })
})

const main = (output) => (
  readFile('input.txt')
    .then((content) => split(',', content).map(Number))
    .then((input) => {
      console.log('Part 1 result: ', calculate(replace(input, 12, 2))[0])

      return input
    })
    .then((input) => {
      xprod(range(0, 100), range(0, 100)).forEach(([noun, verb]) => {
        const result = calculate(replace(input, noun, verb))

        if (result[0] === output) {
          console.log('Part 2 result: ', 100 * noun + verb)
        }
      })
    })
)


main(19690720)
