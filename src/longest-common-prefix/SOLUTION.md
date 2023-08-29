# Longest Common Prefix - Approach 1: Horizontal scanning

## Intuition
For a start we will describe a simple way of finding the longest prefix shared by a set of strings `LCP(S1...Sn)`.

We will use the observation that:
`LCP(S1...Sn) = LCP(LCP(LCP(S1, S2), S3), ...Sn)`

## Algorithm
To employ this idea, the algorithm iterates through the strings `[S1...Sn ]`, finding at each iteration `i` the longest common prefix of strings `LCP(S1...Si)` When `LCP(S1...Si)` is an empty string, the algorithm ends. Otherwise after `n` iterations, the algorithm returns `LCP(S1...Sn)`.

## Complexity Analysis
- Time complexity: `O(S)`, where `S` is the sum of all characters in all strings.

- Note: In the worst case all `n` string are the same. The algorithm compares the string `S1` with the other strings `[S2...Sn]`. There are `S` character comparisons, where `S` is the sum of all characters in the input array,  

- Space complexity: `O(1)`. We only used constant extra space.

## Explanation 2 (best)

The time complexity of the provided `longestCommonPrefix` algorithm is O(m * n), where m is the length of the longest string and n is the number of strings in the input array.

Here's the breakdown of the time complexity:

1. The algorithm checks if the input array is empty in constant time, O(1).

2. The algorithm initializes the `prefix` variable with the first string in the array in constant time, O(1).

3. The main loop iterates through the remaining strings in the array, starting from the second string. In the worst case, this loop iterates n - 1 times, where n is the number of strings in the array.

4. Inside the main loop, there is a while loop that checks the index of the `prefix` within each string. In the worst case, this operation takes O(m) time, where m is the length of the longest string.

5. The substring operation, which shortens the `prefix` by one character, also takes O(m) time in the worst case.

Overall, the worst-case time complexity of the algorithm is O(m * n), where m is the length of the longest string and n is the number of strings in the input array.

The space complexity of the algorithm is O(1) since it only uses a constant amount of additional space to store the `prefix` variable.