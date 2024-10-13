import boto3
import json

class BedRockPersonalTrainer:
    def __init__(self):
        self.bedrock_runtime = boto3.client(
            service_name='bedrock-runtime',
            region_name='us-west-2'
        )
        self.model_id = 'anthropic.claude-3-5-sonnet-20240620-v1:0'
        self.conversation_history = []

    def chat(self, user_input):
        self.conversation_history.append({"role": "user", "content": user_input})
        
        body = json.dumps({
            "anthropic_version": "bedrock-2023-05-31",
            "max_tokens": 1000,
            "messages": self._prepare_messages(),
            "temperature": 0.5,
            "top_p": 0.9,
        })

        response = self.bedrock_runtime.invoke_model(
            body=body,
            modelId=self.model_id,
            accept='application/json',
            contentType='application/json'
        )

        response_body = json.loads(response.get('body').read())
        assistant_response = response_body['content'][0]['text']
        
        self.conversation_history.append({"role": "assistant", "content": assistant_response})
        return assistant_response

    def _prepare_messages(self):
        system_message = {
            "role": "system",
            "content": "You are a knowledgeable and motivating personal trainer. Provide workout recommendations, analyze recent workouts, and offer encouragement and advice to help the user achieve their fitness goals."
        }
        return [system_message] + self.conversation_history[-10:]  # Include last 10 messages for context

    def reset_conversation(self):
        self.conversation_history = []

    def analyze_progress(self, recent_workouts):
        prompt = "How am I doing with my workouts?"
        return self.generate_response(prompt, recent_workouts)

    def ask_fitness_question(self, question):
        return self.generate_response(question)

# Example usage:
# trainer = BedRockPersonalTrainer()
# response = trainer.chat("Can you give me a workout recommendation for today?")
# print(response)
# response = trainer.chat("That sounds good. Can you modify it for a beginner?")
# print(response)
# trainer.reset_conversation()  # Start a new conversation

trainer = BedRockPersonalTrainer()
response = trainer.chat("Can you give me a workout recommendation for today?")
print(response)