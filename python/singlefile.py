from translate import Translator
import fileinput

def translate_file_content(file_path):
    translator = Translator(from_lang="chinese", to_lang="english")

    with fileinput.FileInput(file_path, inplace=True, backup=".bak", encoding="utf-8") as file:
        for line in file:
            translated_text = translator.translate(line)
            print(translated_text)


# Example usage
file_path = "D:\\experimental-target\\NoteLab\\sorted\\Linux\\linux-file-descriptor.md"
translate_file_content(file_path)
