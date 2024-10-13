// Import the AWS SDK for JavaScript v3 Bedrock Runtime Client
const { BedrockRuntimeClient, InvokeModelCommand } = require('@aws-sdk/client-bedrock-runtime');

// Configure the AWS Bedrock client with your AWS credentials and region
const client = new BedrockRuntimeClient({
  region: 'us-east-1', // Replace with your AWS region
  credentials: {
    accessKeyId: 'YOUR_ACCESS_KEY_ID',         // Replace with your AWS access key ID
    secretAccessKey: 'YOUR_SECRET_ACCESS_KEY', // Replace with your AWS secret access key
  },
});

// The guiding message for the model
const guidingMessage = "You are a knowledgeable and motivating personal trainer. Provide workout recommendations, analyze recent workouts, and offer encouragement and advice to help the user achieve their fitness goals.";

// Function to call the Bedrock API
async function callBedrockAPI(prompt) {
  const params = {
    modelId: 'anthropic.claude-3-5-sonnet-20240620-v1:0',
    contentType: 'application/json',
    accept: 'application/json',
    body: JSON.stringify({
      prompt: prompt,
      max_tokens_to_sample: 512,
      temperature: 0.7,
      // Add any other parameters as needed
    }),
  };

  const command = new InvokeModelCommand(params);

  try {
    const response = await client.send(command);
    const responseBody = await response.body.text();
    const data = JSON.parse(responseBody);
    console.log('Model response:', data.completion);
  } catch (error) {
    console.error('Error invoking model:', error);
  }
}

// Call the function with the guiding message
callBedrockAPI(guidingMessage);
