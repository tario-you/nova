
import boto3
import json

class BedRockPersonalTrainer:
    def __init__(self):
        self.bedrock_runtime = boto3.client(
            service_name='bedrock-runtime',
            region_name='us-west-2'
        )
        self.model_id = 'anthropic.claude-3-5-sonnet-20240620-v1:0'

    def generate_response(self, prompt, recent_workouts=None):
        body = json.dumps({
            "anthropic_version": "bedrock-2023-05-31",
            "max_tokens": 1000,
            "messages": [
                {
                    "role": "user",
                    "content": "You are a knowledgeable and motivating personal trainer. Provide workout recommendations, analyze recent workouts, and offer encouragement and advice to help the user achieve their fitness goals." + self._construct_prompt(prompt, recent_workouts)
                }
            ],
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
        return response_body['content'][0]['text']

    def _construct_prompt(self, prompt, recent_workouts):
        if recent_workouts:
            return f"Recent workouts: {recent_workouts}\n\nUser: {prompt}"
        else:
            return f"User: {prompt}"

    def get_workout_recommendation(self):
        prompt = "Can you give me a workout recommendation for today?"
        return self.generate_response(prompt)

    def analyze_progress(self, recent_workouts):
        prompt = "How am I doing with my workouts?"
        return self.generate_response(prompt, recent_workouts)

    def ask_fitness_question(self, question):
        return self.generate_response(question)

# Example usage:
# trainer = BedRockPersonalTrainer()
# recommendation = trainer.get_workout_recommendation()
# progress_analysis = trainer.analyze_progress("Monday: 30 min run, Wednesday: strength training, Friday: yoga")
# answer = trainer.ask_fitness_question("What's the best way to improve my core strength?")

trainer= BedRockPersonalTrainer()
recommendation = trainer.get_workout_recommendation()
print(recommendation)