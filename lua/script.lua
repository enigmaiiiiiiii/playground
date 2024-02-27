local flag = 0

local function foo()
  local count = 0
  while true do
    count = count + 1
    flag = flag + 1
    if flag == 3 then
      print("foo")
    else
      print("time to return")
      return count
    end
  end
end

print("Count:", foo())
