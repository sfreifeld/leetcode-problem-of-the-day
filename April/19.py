'''


'''

a1 = [0,1,2,3]
a2 = [0,1,3]
a3 = [0,1]

b1 = [0,0,0]
b2=[1,1,1]
b3=[2,3]
b4= [3]


a1=[0,1]
a2=[0,1]
a3=[2]
a4=[3,4]


def island_search_dfs(grid):
    if not grid:
        return 0
    
    rows, cols = len(grid), len(grid[0])
    island_count = 0

    def dfs(r,c):
        if r < 0 or c < 0 or r >= rows or c >= cols or grid[r][c] =='0':
            return
        
        grid[r][c] = '0'

        dfs(r +1 ,c)
        dfs(r-1, c)
        dfs(r, c + 1)
        dfs(r, c - 1)

    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == '1':
                island_count += 1
                dfs(r, c)

    return island_count