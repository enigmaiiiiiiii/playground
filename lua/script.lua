local function escape_pattern(pattern)
    return pattern:gsub('[%-%.%+%[%]%(%)%$%^%%%?%*]','%%%1')
end

local a = "hello-\nfoo\t-bar"
local b = [[hello-foo]]
local esa = [["]] .. a .. [["]]

-- Escape all characters in b
local escaped_b = escape_pattern(b)

local c = string.gsub(a, escaped_b, '')
print(esa)  -- -bar

