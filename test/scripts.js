let trainedNet;

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
