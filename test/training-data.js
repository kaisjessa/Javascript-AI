let trainedNet;
const trainingData = [

  {
    input: { r: 0.03, g: 0.7, b: 0.5 },
    output: { black: 1 }
  },
  {
    input: { r: 0.16, g: 0.09, b: 0.2 },
    output: { white: 1 }
  },
  {
    input: { r: 0.5, g: 0.5, b: 1.0 },
    output: { white: 1 }
  }
];



function train(data) {
  let net = new brain.NeuralNetwork();
  net.train(trainingData);
  trainedNet = net.toFunction();
}

function execute(input) {
  console.log(input);
  let results = trainedNet(input);
  return results;
}

train(trainingData);
let output = execute({ r: 0, g: 0.4, b: 0 });
console.log(output)
