const { BedrockRuntimeClient, InvokeModelCommand, ConverseCommand } = require('@aws-sdk/client-bedrock-runtime');

class PersonalTrainerBot {
  constructor() {
    this.client = new BedrockRuntimeClient({
        region: "us-west-2",
        credentials: {
          accessKeyId: "replace_me",
          secretAccessKey: "replace_me"
        }
      });
    this.guidingMessage = "You are a knowledgeable and motivating personal trainer. Provide workout recommendations, analyze recent workouts, and offer encouragement and advice to help the user achieve their fitness goals.";
  }

  async chat(userMessage) {
    const fullPrompt = `${this.guidingMessage}\n\nUser: ${userMessage}\n\nAssistant:`;
    const modelId = 'anthropic.claude-3-5-sonnet-20240620-v1:0';
    const params = {
      modelId,
      prompt: fullPrompt,
      inferenceConfig: {
        maxTokenCount: 2000,
        temperature: 0.7,
        topP: 1,
      }
    };

    const command = new ConverseCommand(params);

    try {
      const response = await this.client.send(command);
      const responseText = response.output.message.content[0].text;
      return responseText;
    } catch (error) {
      console.error('Error invoking model:', error);
      throw error;
    }
  }
}

module.exports = PersonalTrainerBot;
