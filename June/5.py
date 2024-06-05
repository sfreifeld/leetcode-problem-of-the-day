## wrong

class Solution:
    def commonChars(self, words: List[str]) -> List[str]:
        
        char_count = {}
        longest_word_length = len(max(words, key=len))

        for char in range(longest_word_length):
            for word in words:
                if char >= len(word):
                    continue
                if word[char] in char_count:
                    char_count[word[char]] += 1
                else:
                    char_count[word[char]] = 1

        # Filter characters that appear in each word
        solution = list(filter(lambda x: char_count[x] >= len(words), char_count.keys()))

        print(char_count)
        print(solution)
        return solution
        