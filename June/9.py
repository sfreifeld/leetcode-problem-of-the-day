class Solution:
    def heightChecker(self, heights: List[int]) -> int:
        expected = [0] * (max(heights) + 1)
        for h in heights:
            expected[h] += 1
        i = res = 0
        for j in range(1, len(expected)):
            while expected[j]:
                if heights[i] != j:
                    res += 1
                expected[j] -= 1
                i += 1
        return res