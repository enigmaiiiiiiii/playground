import copy
import re
import math
from data import cusps

class Config:

    _background: str
    _foreground: str
    _n_hues:     int
    _saturation: int
    _accent:     int

    __saturation_values = {'low', 'medium', 'high'}
    __accent_values = {'bg', 'fg', 'red', 'orange', 'yellow', 'green', 'cyan', 'azure', 'blue', 'purple'}

    def __init__(self, bg, fg, n_hues=8, saturation='high', accent='bg'):
        Config.__validate_hex(bg, 'background')
        Config.__validate_hex(fg, 'foreground')
        Config.__validate_n_hues(n_hues)
        Config.__validate_one_of(saturation, self.__saturation_values, 'saturation')
        Config.__validate_one_of(accent, self.__accent_values, 'accent')

        self._background = bg
        self._foreground = fg
        self._n_hues = n_hues
        self._saturation = saturation
        self._accent = accent

    @property
    def bg(self ):
        return self._background

    @property
    def fg(self):
        return self._foreground

    @property
    def n_hues(self):
        return self._n_hues

    @property
    def saturation(self):
        return self._saturation

    @property
    def accent(self):
        return self._accent

    @staticmethod
    def __validate_hex(hex: str, name: str):
        res = bool(re.match(r'^#[0-9a-fA-F]{6}$', hex))
        if res == False:
            raise ValueError(name + ' is not a valid hex color')

    @staticmethod
    def __validate_n_hues(n_hues: int):
        if n_hues < 0 or n_hues > 8:
            raise ValueError('hues is not in the range 0-8')

    def __validate_one_of(x, choices, name):
        if x not in choices:
            raise ValueError(name + ' is not one of ' + str(choices))

# color conversion
def hex2oklch(hex: str):
    return oklab2oklch(rgb2oklab(hex2rgb(hex)))


def oklch2hex(lch):
    return rgb2hex(oklab2rgb(oklch2oklab(clip_to_gamut(lch))))

def rgb2hex(rgb: dict):
    r = clip(math.floor(rgb['r'] + 0.5), 0, 255)
    g = clip(math.floor(rgb['g'] + 0.5), 0, 255)
    b = clip(math.floor(rgb['b'] + 0.5), 0, 255)

    return '#' + hex(r * 65536 + g * 256 + b)[2:].zfill(6)


def hex2rgb(hex: str) -> dict:
    dec = int(hex[1:], 16)

    b = dec % 256
    g = (dec - b) // 256 % 256
    r = dec // 65536

    return {'r': r, 'g': g, 'b': b}


def rgb2oklab(rgb: dict) -> dict:
    # Convert to linear RGB
    r, g, b = (
        correct_channel(rgb['r'] / 255),
        correct_channel(rgb['g'] / 255),
        correct_channel(rgb['b'] / 255),
    )

    # Convert to Oklab
    l = 0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b
    m = 0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b
    s = 0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b

    l_, m_, s_ = cuberoot(l), cuberoot(m), cuberoot(s)

    L = 0.2104542553 * l_ + 0.7936177850 * m_ - 0.0040720468 * s_
    A = 1.9779984951 * l_ - 2.4285922050 * m_ + 0.4505937099 * s_
    B = 0.0259040371 * l_ + 0.7827717662 * m_ - 0.8086757660 * s_

    # Explicitly convert to gray for nearly achromatic colors
    if abs(A) < 1e-4:
        A = 0
    if abs(B) < 1e-4:
        B = 0

    # Normalize to appropriate range
    return {'l': correct_lightness(100 * L), 'a': 100 * A, 'b': 100 * B}


def oklab2oklch(lab: dict) -> dict:
    c = math.sqrt(lab['a'] ** 2 + lab['b'] ** 2)
    # Treat grays specially
    h = None
    if c > 0:
        h = math.degrees(math.atan2(lab['b'], lab['a'])) % 360
    return {'l': lab['l'], 'c': c, 'h': h}


def oklch2oklab(lch: dict) -> dict:
    if lch['c'] <= 0 or lch['h'] == None:
        return {'l': lch['l'], 'a': 0, 'b': 0}
    a = lch['c'] * math.cos(degree2rad(lch["h"]))
    b = lch['c'] * math.sin(degree2rad(lch["h"]))
    return {'l': lch['l'], 'a': a, 'b': b}


def oklab2rgb(lab: dict) -> dict:
    L, A, B = 0.01 * correct_lightness_inv(lab['l']), 0.01 * lab['a'], 0.01 * lab['b']

    l_ = L + 0.3963377774 * A + 0.2158037573 * B
    m_ = L - 0.1055613458 * A - 0.0638541728 * B
    s_ = L - 0.0894841775 * A - 1.2914855480 * B

    l = l_ * l_ * l_
    m = m_ * m_ * m_
    s = s_ * s_ * s_

    r = 4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s
    g = -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s
    b = -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s

    return {
        'r': 255 * correct_channel_inv(r),
        'g': 255 * correct_channel_inv(g),
        'b': 255 * correct_channel_inv(b),
    }


def clip_to_gamut(lch: dict) -> dict:
    res = copy.deepcopy(lch)
    if res['h'] is None:
        return res

    gamut_points = get_gamut_points(lch)
    is_inside_gamut = lch['c'] <= gamut_points['c_upper']
    if is_inside_gamut:
        return res
    res['l'], res['c'] = gamut_points['l_cusp_clip'], gamut_points['c_cusp_clip']

    return res

def make_hues(bg_h, fg_h: str, n_hues: int) -> dict:

    res = {'bg': bg_h, 'fg': fg_h}
    if n_hues == 0:
        return res

    period = 360 / n_hues
    half_period = period / 2

    # compute delta which determines the furtherst grid
    d = None
    if bg_h == None and fg_h == None:
        d = 0
    if bg_h != None and fg_h == None:
        d = (bg_h % period + half_period) % period
    if bg_h == None and fg_h != None:
        d = (fg_h % period + half_period) % period
    if bg_h != None and fg_h != None:
        ref_bg, ref_fg = bg_h % period, fg_h % period
        mid = 0.5 * (ref_bg + ref_fg)
        mid_alt = (mid + half_period) % period

        d = mid_alt \
            if dist_period(mid, ref_bg, period) < dist_period(mid_alt, ref_bg, period) \
            else mid


    grid = {}
    for i in range(n_hues):
        grid[i] = (d + i * period) % 360

    def dist_fun(x, y):
        return dist_period(x, y, 360)

    def get_closest(x, values, dist_fun):
        best_val, best_dist = None, math.inf
        for _, val in values.items():
            cur_dist = dist_fun(x, val)
            if cur_dist <= best_dist:
                best_val, best_dist = val, cur_dist
        return best_val

    def approx(ref_hue):
        return get_closest(ref_hue, grid, dist_fun)

    res = {
        'red'   : approx(0),
        'orange': approx(45),
        'yellow': approx(90),
        'green' : approx(135),
        'cyan'  : approx(180),
        'azure' : approx(225),
        'blue'  : approx(270),
        'purple': approx(315),
    }


    return res

def make_palette(config: Config):

    bg, fg = config.bg, config.fg
    bg_lch, fg_lch = hex2oklch(config.bg), hex2oklch(config.fg)
    bg_l, fg_l = bg_lch['l'], fg_lch['l']

    if not ((bg_l <= 50 and fg_l > 50) or (bg_l > 50 and fg_l <= 50)):
        raise ValueError('background and foreground must be opposite lightness')

    hues = make_hues(bg_lch['h'], fg_lch['h'], config.n_hues)
    chroma = {'low': 4, 'medium': 8, 'high': 16}[config.saturation]

    # lightness level
    is_dark = bg_l < 50
    l_bg_edge = 0 if is_dark else 100
    l_fg_edge = 100 if is_dark else 0
    l_mid = 0.5 * (bg_l + fg_l)

    res = {
        'bg_edge2': oklch2hex({
            'l': 0.33 * bg_l + 0.67 * l_bg_edge,
            'c': bg_lch['c'],
            'h': bg_lch['h']
        }),
        'bg_edge': oklch2hex({
            'l': 0.67 * bg_l + 0.33 * l_bg_edge,
            'c': bg_lch['c'],
            'h': bg_lch['h']
        }),
        'bg': bg,
        'bg_mid': oklch2hex({
            'l': 0.67 * bg_l + 0.33 * l_mid,
            'c': bg_lch['c'],
            'h': bg_lch['h']
        }),
        'bg_mid2': oklch2hex({
            'l': 0.33 * bg_l + 0.67 * l_mid,
            'c': bg_lch['c'],
            'h': bg_lch['h']
        }),
        'fg_edge2': oklch2hex({
            'l': 0.33 * fg_l + 0.67 * l_fg_edge,
            'c': fg_lch['c'],
            'h': fg_lch['h']
        }),
        'fg_edge': oklch2hex({
            'l': 0.67 * fg_l + 0.33 * l_fg_edge,
            'c': fg_lch['c'],
            'h': fg_lch['h']
        }),
        'fg': fg,
        'fg_mid': oklch2hex({
            'l': 0.67 * fg_l + 0.33 * l_mid,
            'c': fg_lch['c'],
            'h': fg_lch['h']
        }),
        'fg_mid2': oklch2hex({
            'l': 0.33 * fg_l + 0.67 * l_mid,
            'c': fg_lch['c'],
            'h': fg_lch['h']
        }),
        'red'      : oklch2hex({'l': fg_l, 'c': chroma, 'h': hues['red']}),
        'red_bg'   : oklch2hex({'l': bg_l, 'c': chroma, 'h': hues['red']}),
        'orange'   : oklch2hex({'l': fg_l, 'c': chroma, 'h': hues['orange']}),
        'orange_bg': oklch2hex({'l': bg_l, 'c': chroma, 'h': hues['orange']}),
        'yellow'   : oklch2hex({'l': fg_l, 'c': chroma, 'h': hues['yellow']}),
        'yellow_bg': oklch2hex({'l': bg_l, 'c': chroma, 'h': hues['yellow']}),
        'green'    : oklch2hex({'l': fg_l, 'c': chroma, 'h': hues['green']}),
        'green_bg' : oklch2hex({'l': bg_l, 'c': chroma, 'h': hues['green']}),
        'cyan'     : oklch2hex({'l': fg_l, 'c': chroma, 'h': hues['cyan']}),
        'cyan_bg'  : oklch2hex({'l': bg_l, 'c': chroma, 'h': hues['cyan']}),
        'azure'    : oklch2hex({'l': fg_l, 'c': chroma, 'h': hues['azure']}),
        'azure_bg' : oklch2hex({'l': bg_l, 'c': chroma, 'h': hues['azure']}),
        'blue'     : oklch2hex({'l': fg_l, 'c': chroma, 'h': hues['blue']}),
        'blue_bg'  : oklch2hex({'l': bg_l, 'c': chroma, 'h': hues['blue']}),
        'purple'   : oklch2hex({'l': fg_l, 'c': chroma, 'h': hues['purple']}),
        'purple_bg': oklch2hex({'l': bg_l, 'c': chroma, 'h': hues['purple']}),
    }

    accent = config.accent

    if accent == 'bg':
        res["accent"]    = oklch2hex({'l': bg_l, 'c': chroma, 'h': hues['red']})
        res["accent_bg"] = bg
    elif accent == 'fg':
        res["accent"]    = fg
        res["accent_bg"] = oklch2hex({'l': bg_l, 'c': chroma, 'h': fg_lch['h']})
    else:
        res[accent]    =  oklch2hex({'l': fg_l, 'c': chroma, 'h': hues[accent]})
        res["accent_bg"] = oklch2hex({'l': bg_l, 'c': chroma, 'h': hues[accent]})

    return res

# utility functions
def correct_channel(x):
    return 0.0405 < x and math.pow((x + 0.055) / 1.055, 2.4) or (x / 12.92)


def correct_lightness(x):
    x = 0.01 * x
    k1, k2 = 0.206, 0.03
    k3 = (1 + k1) / (1 + k2)

    res = 0.5 * (k3 * x - k1 + math.sqrt((k3 * x - k1) ** 2 + 4 * k2 * k3 * x))
    return 100 * res


def cuberoot(value):
    return value ** (1 / 3)


def clip(x, top, bottom):
    return max(top, min(bottom, x))


def correct_lightness_inv(x):
    x = 0.01 * x
    k1, k2 = 0.206, 0.03
    k3 = (1 + k1) / (1 + k2)
    res = (x / k3) * (x + k1) / (x + k2)
    return 100 * res


def get_gamut_points(lch):
    c, l = lch['c'], clip(lch['l'], 0, 100)
    l = correct_lightness_inv(l)
    cusp = cusps[math.floor(lch['h'] % 360)]
    c_cusp, l_cusp = cusp[0], cusp[1]

    c_upper = (
        l <= l_cusp and (c_cusp * l / l_cusp) or (c_cusp * (100 - l) / (100 - l_cusp))
    )
    c_upper = clip(c_upper, 0, math.inf)
    if c == None:
        return {'c_upper': c_upper}
    c_cusp_clip, l_cusp_clip = 0, 0

    if c <= 0:
        c_cusp_clip, l_cusp_clip = c, l
    elif l <= l_cusp:
        prop = 1 - l / l_cusp
        c_cusp_clip = c_cusp * c / (c_cusp * prop + c)
        l_cusp_clip = l_cusp * c_cusp_clip / c_cusp
    else:
        prop = 1 - (l - 100) / (l_cusp - 100)
        c_cusp_clip = c_cusp * c / (c_cusp * prop + c)
        l_cusp_clip = 100 + c_cusp_clip * (l_cusp - 100) / c_cusp

    return {
        'c_upper': c_upper,
        'l_cusp_clip': correct_lightness(l_cusp_clip),
        'c_cusp_clip': c_cusp_clip,
    }


def correct_channel_inv(x):
    return (0.0031808 >= x) and (12.92 * x) or (1.055 * math.pow(x, 1 / 2.4) - 0.055)


def degree2rad(x):
    return (x % 360) * tau / 360

def rad2degree(x):
    return (x % tau) * 360 / tau


def dist_period(x, y, period):
    period = period or 360
    d = abs((x % period) - (y % period))
    return min(d, period - d)

tau = 2 * math.pi

