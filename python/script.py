import os
import fileinput
from translate import Translator

def translate_markdown_files(directory):
    translator = Translator(from_lang='chinese', to_lang='english')
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.md'):
                file_path = os.path.join(root, file)
                translate_file(file_path, translator)

def translate_file(file_path, translator):
    translated_lines = []
    with fileinput.FileInput(file_path, inplace=True, backup='.bak') as file:
        for line in file:
            translated_line = translator.translate(line)
            translated_lines.append(translated_line)

    with open(file_path, 'w') as file:
        file.writelines(translated_lines)

# Usage example
translate_markdown_files('D:\\experimental-target\\NoteLab')
