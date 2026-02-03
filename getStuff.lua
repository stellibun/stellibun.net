local emojis = {};

for v in io.lines("assets/css/status.css") do
    if string.find(v,".statuses.",1) then
        emojis[#emojis+1] = string.sub(v,11,#v-2);
    end
end

local str = "";
for _,v in pairs(emojis) do
    str = str.."\""..v.."\",";
end

print(str);