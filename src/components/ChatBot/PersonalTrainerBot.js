const { BedrockRuntimeClient, InvokeModelCommand } = require('@aws-sdk/client-bedrock-runtime');

class PersonalTrainerBot {
  constructor() {
    this.client = new BedrockRuntimeClient({
      region: 'us-west-2',
    });
    this.guidingMessage = "You are a knowledgeable and motivating personal trainer. Provide workout recommendations, analyze recent workouts, and offer encouragement and advice to help the user achieve their fitness goals.";
  }

  async chat(userMessage) {
    const fullPrompt = `${this.guidingMessage}\n\nUser: ${userMessage}\n\nAssistant:`;
    const params = {
      modelId: 'anthropic.claude-3-5-sonnet-20240620-v1:0',
      contentType: 'application/json',
      accept: 'application/json',
      body: JSON.stringify({
        prompt: fullPrompt,
        max_tokens_to_sample: 2000,
        temperature: 0.7,
      }),
    };

    const command = new InvokeModelCommand(params);

    try {
      const response = await this.client.send(command);
      const responseBody = await response.body.text();
      const data = JSON.parse(responseBody);
      return data.completion;
    } catch (error) {
      console.error('Error invoking model:', error);
      throw error;
    }
  }
}

module.exports = PersonalTrainerBot;
