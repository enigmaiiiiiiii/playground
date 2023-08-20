import random

class yoggA(object):
    name = 'yoggA'
    health = 5
    attack = 7
    cost = 10

    def __init__(self, game):
        self.game = game
        
    def on_play(self):
        for i in range(7):
            self.game.summon(random.choice(self.game.minions), self.game.current_player, i)
        self.game.summon(self, self.game.current_player, 7)
        self.game.current_player.deck.shuffle()
        self.game.current_player.hand.append(random.choice(self.game.current_playe))

