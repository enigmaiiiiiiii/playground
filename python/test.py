from dotenv import load_dotenv
import os
import openai

load_dotenv()

openai.api_key = os.environ.get("OPENAI_API_KEY")

prompt_base = """
translate this text to english.
if it is already english, just copy it
here is the text:\n
"""

def translate_line(text):

    response = openai.Completion.create(
        model="text-davinci-003",
        prompt=prompt_base + text,
        temperature=0.3,
        max_tokens=300,
        top_p=1.0,
        frequency_penalty=0.0,
        presence_penalty=0.0,
    )
    return response.choices[0].text.strip()

file_path = "D:/experimental-target/NoteLab/sorted/Linux/linux-network-command.md"

with open(file_path, 'r', encoding='utf-8') as file:
    for line in file:
        translated_line = translate_line(line)
        print(translated_line)

