# Two Sum - Approach 3: One-pass Hash Table

It turns out we can do it in one-pass. While we are iterating and inserting elements into the hash table, we also look back to check if current element's complement already exists in the hash table. If it exists, we have found a solution and return the indices immediately.

## Complexity Analysis
Time complexity: `O(n)`. We traverse the list containing `n` elements only once. Each lookup in the table costs only `O(1)` time.
Space complexity: `O(n)`. The extra space required depends on the number of items stored in the hash table, which stores at most `n` elements.

```
Input: 
nums = [2,7,11,15]
target = 9
```
```
Expected: [0,1]
```


```
Debug:

Map(0) {}
7 = (9 - 2)
Map(1) { 2 => 0 }
2 = (9 - 7)
Map(2) { 2 => 0, 7 => 1 }
-2 = (9 - 11)
Map(3) { 2 => 0, 7 => 1, 11 => 2 }
-6 = (9 - 15)
Map(4) { 2 => 0, 7 => 1, 11 => 2, 15 => 3 }
```


