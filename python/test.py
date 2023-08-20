class Generator:
    pass

class DopamineGenerator:
    def __init__(self, config):
        self.config = config
        self.generator = Generator(config)

    def generate(self):
        self.generator.generate()
