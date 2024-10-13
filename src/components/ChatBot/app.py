from flask import Flask, request, jsonify
from BedRockAPICaller import BedRockPersonalTrainer

app = Flask(__name__)
trainer = BedRockPersonalTrainer()

@app.route('/api/chat', methods=['POST'])
def chat():
    message = request.json['message']
    response = trainer.chat(message)
    return jsonify({'response': response})

if __name__ == '__main__':
    app.run(debug=True)
