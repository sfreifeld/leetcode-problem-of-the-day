def isIsomorphic(s, t):
    s_dict ={}
    t_dict = {}

    if len(s) != len(t):
        return False

    for letter in s:
        if letter not in s_dict:
            s_dict[letter] = 1
        else:
            s_dict[letter] += 1
    
    for letter in t:
        if letter not in t_dict:
            t_dict[letter] = 1
        else:
            t_dict[letter] += 1

    if len(t_dict) == len(s_dict):
        return True
    else:
        return False

# make a dictionary of letter counts in s and t

print(isIsomorphic("maggg", "talll"))