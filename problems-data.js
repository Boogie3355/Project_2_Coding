const problems = [
    // Easy Problems (1-50)
    {
        id: 1,
        title: "Two Sum",
        difficulty: "easy",
        acceptance: "48.2%",
        description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
        examples: [
            {
                input: "nums = [2,7,11,15], target = 9",
                output: "[0,1]",
                explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]."
            }
        ],
        constraints: [
            "2 <= nums.length <= 104",
            "-109 <= nums[i] <= 109",
            "-109 <= target <= 109"
        ],
        testCases: [
            { input: { nums: [2,7,11,15], target: 9 }, output: [0,1] },
            { input: { nums: [3,2,4], target: 6 }, output: [1,2] },
            { input: { nums: [3,3], target: 6 }, output: [0,1] }
        ],
        hints: [
            "Try using a hash map to store the numbers you've seen",
            "For each number, check if its complement exists in the hash map"
        ],
        solution: {
            javascript: `function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}`,
        },
        starterCode: {
            javascript: `function twoSum(nums, target) {
    // Your code here
};`,
            python: `def twoSum(nums, target):
    # Your code here
    pass`,
            java: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Your code here
    }
}`,
            cpp: `class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        // Your code here
    }
};`,
            c: `int* twoSum(int* nums, int numsSize, int target, int* returnSize) {
    // Your code here
    *returnSize = 2;
    return NULL;
}`,
            csharp: `public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        // Your code here
    }
}`,
            php: `class Solution {
    /**
     * @param Integer[] $nums
     * @param Integer $target
     * @return Integer[]
     */
    function twoSum($nums, $target) {
        // Your code here
    }
}`
        },
        discussions: [
            {
                id: 1,
                user: "john_doe",
                content: "The hash map solution has O(n) time complexity",
                timestamp: "2023-04-01T12:00:00Z",
                replies: []
            }
        ]
    },
    {
        id: 2,
        title: "Palindrome Number",
        difficulty: "easy",
        acceptance: "52.1%",
        description: "Given an integer x, return true if x is a palindrome, and false otherwise.",
        examples: [
            {
                input: "x = 121",
                output: "true",
                explanation: "121 reads as 121 from left to right and from right to left."
            }
        ],
        constraints: ["-231 <= x <= 231 - 1"],
        testCases: [
            { input: { x: 121 }, output: true },
            { input: { x: -121 }, output: false },
            { input: { x: 10 }, output: false }
        ],
        hints: [
            "Convert the number to a string and check if it reads the same forwards and backwards",
            "Or solve it without converting to string by reversing the number"
        ],
        starterCode: {
            javascript: `function isPalindrome(x) {
    // Your code here
};`
        }
    },
    {
        id: 3,
        title: "Valid Parentheses",
        difficulty: "easy",
        acceptance: "40.1%",
        description: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. The string is valid if all open brackets are closed in the correct order.",
        examples: [
            {
                input: "s = '()'",
                output: "true",
                explanation: "Simple pair of parentheses is valid"
            },
            {
                input: "s = '()[]{}'",
                output: "true",
                explanation: "Each opening bracket is closed by its corresponding closing bracket"
            },
            {
                input: "s = '(]'",
                output: "false",
                explanation: "Opening parenthesis cannot be closed by closing bracket"
            }
        ],
        constraints: [
            "1 <= s.length <= 104",
            "s consists of parentheses only '()[]{}'",
        ],
        testCases: [
            { input: { s: "()" }, output: true },
            { input: { s: "()[]{}" }, output: true },
            { input: { s: "(]" }, output: false },
            { input: { s: "([)]" }, output: false },
            { input: { s: "{[]}" }, output: true }
        ],
        starterCode: {
            javascript: `function isValid(s) {
    // Your code here
};`
        }
    },
    {
        id: 4,
        title: "Maximum Subarray",
        difficulty: "easy",
        acceptance: "49.5%",
        description: "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
        examples: [
            {
                input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
                output: "6",
                explanation: "The subarray [4,-1,2,1] has the largest sum 6"
            },
            {
                input: "nums = [1]",
                output: "1",
                explanation: "Single element array, the maximum sum is 1"
            }
        ],
        constraints: [
            "1 <= nums.length <= 105",
            "-104 <= nums[i] <= 104"
        ],
        testCases: [
            { input: { nums: [-2,1,-3,4,-1,2,1,-5,4] }, output: 6 },
            { input: { nums: [1] }, output: 1 },
            { input: { nums: [5,4,-1,7,8] }, output: 23 }
        ],
        starterCode: {
            javascript: `function maxSubArray(nums) {
    // Your code here
};`,
            java: `public class Solution {
    public int maxSubArray(int[] nums) {
        // Initialize maxSum and currentSum with first element
        int maxSum = nums[0];
        int currentSum = nums[0];
        
        // Start from second element
        for (int i = 1; i < nums.length; i++) {
            // Either start new subarray from current element
            // or add current element to existing subarray
            currentSum = Math.max(nums[i], currentSum + nums[i]);
            
            // Update maxSum if currentSum is greater
            maxSum = Math.max(maxSum, currentSum);
        }
        
        return maxSum;
    }
}`,
            python: `def maxSubArray(nums):
    # Your code here
    pass`
        }
    },
    {
        id: 5,
        title: "Merge Sorted Array",
        difficulty: "easy",
        acceptance: "45.6%",
        description: "You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively. Merge nums1 and nums2 into a single array sorted in non-decreasing order.",
        examples: [
            {
                input: "nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3",
                output: "[1,2,2,3,5,6]",
                explanation: "The arrays we are merging are [1,2,3] and [2,5,6]. The result is [1,2,2,3,5,6]."
            }
        ],
        constraints: [
            "nums1.length == m + n",
            "nums2.length == n",
            "0 <= m, n <= 200",
            "1 <= m + n <= 200",
            "-109 <= nums1[i], nums2[j] <= 109"
        ],
        testCases: [
            { input: { nums1: [1,2,3,0,0,0], m: 3, nums2: [2,5,6], n: 3 }, output: [1,2,2,3,5,6] },
            { input: { nums1: [1], m: 1, nums2: [], n: 0 }, output: [1] }
        ],
        starterCode: {
            javascript: `function merge(nums1, m, nums2, n) {
    // Your code here
};`
        }
    },
    {
        id: 6,
        title: "Best Time to Buy and Sell Stock",
        difficulty: "easy",
        acceptance: "54.2%",
        description: "You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction.",
        examples: [
            {
                input: "prices = [7,1,5,3,6,4]",
                output: "5",
                explanation: "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5."
            }
        ],
        constraints: [
            "1 <= prices.length <= 105",
            "0 <= prices[i] <= 104"
        ],
        testCases: [
            { input: { prices: [7,1,5,3,6,4] }, output: 5 },
            { input: { prices: [7,6,4,3,1] }, output: 0 }
        ],
        starterCode: {
            javascript: `function maxProfit(prices) {
    // Your code here
};`
        }
    },
    {
        id: 7,
        title: "Valid Anagram",
        difficulty: "easy",
        acceptance: "61.9%",
        description: "Given two strings s and t, return true if t is an anagram of s, and false otherwise. An anagram is a word formed by rearranging the letters of another word.",
        examples: [
            {
                input: "s = 'anagram', t = 'nagaram'",
                output: "true",
                explanation: "Both strings contain the same letters in different order."
            }
        ],
        constraints: [
            "1 <= s.length, t.length <= 5 * 104",
            "s and t consist of lowercase English letters"
        ],
        testCases: [
            { input: { s: "anagram", t: "nagaram" }, output: true },
            { input: { s: "rat", t: "car" }, output: false }
        ],
        starterCode: {
            javascript: `function isAnagram(s, t) {
    // Your code here
};`
        }
    },
    {
        id: 8,
        title: "Climbing Stairs",
        difficulty: "easy",
        acceptance: "51.2%",
        description: "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
        examples: [
            {
                input: "n = 3",
                output: "3",
                explanation: "There are three ways: (1,1,1), (1,2), (2,1)"
            }
        ],
        constraints: ["1 <= n <= 45"],
        testCases: [
            { input: { n: 2 }, output: 2 },
            { input: { n: 3 }, output: 3 }
        ],
        starterCode: {
            javascript: `function climbStairs(n) {
    // Your code here
};`
        }
    },
    {
        id: 55,
        title: "Jump Game",
        difficulty: "medium",
        acceptance: "37.8%",
        description: "You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position. Return true if you can reach the last index, or false otherwise.",
        examples: [
            {
                input: "nums = [2,3,1,1,4]",
                output: "true",
                explanation: "Jump 1 step from index 0 to 1, then 3 steps to the last index."
            }
        ],
        constraints: [
            "1 <= nums.length <= 104",
            "0 <= nums[i] <= 105"
        ],
        testCases: [
            { input: { nums: [2,3,1,1,4] }, output: true },
            { input: { nums: [3,2,1,0,4] }, output: false }
        ],
        starterCode: {
            javascript: `function canJump(nums) {
    // Your code here
};`
        }
    },
    // Add more easy problems...

    // Medium Problems (51-100)
    {
        id: 51,
        title: "Add Two Numbers",
        difficulty: "medium",
        acceptance: "39.8%",
        description: "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.",
        examples: [
            {
                input: "l1 = [2,4,3], l2 = [5,6,4]",
                output: "[7,0,8]",
                explanation: "342 + 465 = 807"
            }
        ],
        testCases: [
            {
                input: {
                    l1: [2,4,3],
                    l2: [5,6,4]
                },
                output: [7,0,8]
            }
        ],
        starterCode: {
            javascript: `function addTwoNumbers(l1, l2) {
    // Your code here
};`
        }
    },
    {
        id: 52,
        title: "Longest Substring Without Repeating Characters",
        difficulty: "medium",
        acceptance: "33.8%",
        description: "Given a string s, find the length of the longest substring without repeating characters.",
        examples: [
            {
                input: 's = "abcabcbb"',
                output: "3",
                explanation: "The answer is 'abc', with the length of 3"
            },
            {
                input: 's = "bbbbb"',
                output: "1",
                explanation: "The answer is 'b', with the length of 1"
            },
            {
                input: 's = "pwwkew"',
                output: "3",
                explanation: "The answer is 'wke', with the length of 3"
            }
        ],
        constraints: [
            "0 <= s.length <= 5 * 104",
            "s consists of English letters, digits, symbols and spaces"
        ],
        testCases: [
            { input: { s: "abcabcbb" }, output: 3 },
            { input: { s: "bbbbb" }, output: 1 },
            { input: { s: "pwwkew" }, output: 3 }
        ],
        starterCode: {
            javascript: `function lengthOfLongestSubstring(s) {
    // Your code here
};`
        }
    },
    {
        id: 53,
        title: "Container With Most Water",
        difficulty: "medium",
        acceptance: "54.1%",
        description: "Given n non-negative integers height where each represents a point at coordinate (i, height[i]), find two lines that together with the x-axis form a container that would hold the most water.",
        examples: [
            {
                input: "height = [1,8,6,2,5,4,8,3,7]",
                output: "49",
                explanation: "The maximum area is obtained by choosing height[1] = 8 and height[8] = 7"
            }
        ],
        constraints: [
            "n == height.length",
            "2 <= n <= 105",
            "0 <= height[i] <= 104"
        ],
        testCases: [
            { input: { height: [1,8,6,2,5,4,8,3,7] }, output: 49 },
            { input: { height: [1,1] }, output: 1 },
            { input: { height: [4,3,2,1,4] }, output: 16 }
        ],
        starterCode: {
            javascript: `function maxArea(height) {
    // Your code here
};`
        }
    },
    {
        id: 54,
        title: "3Sum",
        difficulty: "medium",
        acceptance: "32.4%",
        description: "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.",
        examples: [
            {
                input: "nums = [-1,0,1,2,-1,-4]",
                output: "[[-1,-1,2],[-1,0,1]]",
                explanation: "The triplets that sum to zero are [-1,-1,2] and [-1,0,1]."
            }
        ],
        constraints: [
            "3 <= nums.length <= 3000",
            "-105 <= nums[i] <= 105"
        ],
        testCases: [
            { input: { nums: [-1,0,1,2,-1,-4] }, output: [[-1,-1,2],[-1,0,1]] },
            { input: { nums: [] }, output: [] }
        ],
        starterCode: {
            javascript: `function threeSum(nums) {
    // Your code here
};`
        }
    },
    // Add more medium problems...

    // Hard Problems (101-150)
    {
        id: 101,
        title: "Median of Two Sorted Arrays",
        difficulty: "hard",
        acceptance: "35.2%",
        description: "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.",
        examples: [
            {
                input: "nums1 = [1,3], nums2 = [2]",
                output: "2.00000",
                explanation: "merged array = [1,2,3] and median is 2."
            }
        ],
        testCases: [
            {
                input: {
                    nums1: [1,3],
                    nums2: [2]
                },
                output: 2.0
            }
        ],
        starterCode: {
            javascript: `function findMedianSortedArrays(nums1, nums2) {
    // Your code here
};`
        }
    },
    {
        id: 102,
        title: "Regular Expression Matching",
        difficulty: "hard",
        acceptance: "27.8%",
        description: "Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where '.' matches any single character and '*' matches zero or more of the preceding element.",
        examples: [
            {
                input: 's = "aa", p = "a"',
                output: "false",
                explanation: "A single 'a' cannot match 'aa'"
            },
            {
                input: 's = "aa", p = "a*"',
                output: "true",
                explanation: "'a*' means zero or more 'a's, so it matches 'aa'"
            },
            {
                input: 's = "ab", p = ".*"',
                output: "true",
                explanation: "'.*' means zero or more of any character"
            }
        ],
        constraints: [
            "1 <= s.length <= 20",
            "1 <= p.length <= 30",
            "s contains only lowercase English letters",
            "p contains only lowercase English letters, '.', and '*'"
        ],
        testCases: [
            { input: { s: "aa", p: "a" }, output: false },
            { input: { s: "aa", p: "a*" }, output: true },
            { input: { s: "ab", p: ".*" }, output: true }
        ],
        starterCode: {
            javascript: `function isMatch(s, p) {
    // Your code here
};`
        }
    },
    {
        id: 103,
        title: "Merge k Sorted Lists",
        difficulty: "hard",
        acceptance: "45.9%",
        description: "You are given an array of k linked-lists lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.",
        examples: [
            {
                input: "lists = [[1,4,5],[1,3,4],[2,6]]",
                output: "[1,1,2,3,4,4,5,6]",
                explanation: "Merging the three sorted lists results in a single sorted list"
            },
            {
                input: "lists = []",
                output: "[]",
                explanation: "Empty input results in empty output"
            }
        ],
        constraints: [
            "k == lists.length",
            "0 <= k <= 104",
            "0 <= lists[i].length <= 500",
            "-104 <= lists[i][j] <= 104",
            "lists[i] is sorted in ascending order"
        ],
        testCases: [
            { 
                input: { 
                    lists: [[1,4,5],[1,3,4],[2,6]]
                }, 
                output: [1,1,2,3,4,4,5,6]
            },
            { 
                input: { lists: [] }, 
                output: [] 
            }
        ],
        starterCode: {
            javascript: `function mergeKLists(lists) {
    // Your code here
};`
        }
    },
    {
        id: 104,
        title: "Trapping Rain Water",
        difficulty: "hard",
        acceptance: "58.5%",
        description: "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
        examples: [
            {
                input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
                output: "6",
                explanation: "The elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water are being trapped."
            }
        ],
        constraints: [
            "n == height.length",
            "1 <= n <= 2 * 104",
            "0 <= height[i] <= 105"
        ],
        testCases: [
            { input: { height: [0,1,0,2,1,0,1,3,2,1,2,1] }, output: 6 },
            { input: { height: [4,2,0,3,2,5] }, output: 9 }
        ],
        starterCode: {
            javascript: `function trap(height) {
    // Your code here
};`
        }
    },
    // Add more hard problems...

    // Dynamic Programming Problems
    {
        id: 9,
        title: "Longest Palindromic Substring",
        difficulty: "medium",
        acceptance: "31.5%",
        description: "Given a string s, return the longest palindromic substring in s.",
        examples: [
            {
                input: 's = "babad"',
                output: '"bab"',
                explanation: '"aba" is also a valid answer.'
            }
        ],
        constraints: ["1 <= s.length <= 1000", "s consist of only digits and English letters"],
        testCases: [
            { input: { s: "babad" }, output: "bab" },
            { input: { s: "cbbd" }, output: "bb" }
        ],
        starterCode: {
            javascript: `function longestPalindrome(s) {
    // Your code here
};`
        }
    },
    // Tree Problems
    {
        id: 10,
        title: "Binary Tree Level Order Traversal",
        difficulty: "medium",
        acceptance: "60.8%",
        description: "Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).",
        examples: [
            {
                input: "root = [3,9,20,null,null,15,7]",
                output: "[[3],[9,20],[15,7]]",
                explanation: "Level order traversal: level 1: [3], level 2: [9,20], level 3: [15,7]"
            }
        ],
        constraints: [
            "The number of nodes in the tree is in the range [0, 2000]",
            "-1000 <= Node.val <= 1000"
        ],
        testCases: [
            { input: { root: [3,9,20,null,null,15,7] }, output: [[3],[9,20],[15,7]] },
            { input: { root: [1] }, output: [[1]] }
        ],
        starterCode: {
            javascript: `function levelOrder(root) {
    // Your code here
};`
        }
    },
    // Graph Problems
    {
        id: 11,
        title: "Number of Islands",
        difficulty: "medium",
        acceptance: "53.5%",
        description: "Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.",
        examples: [
            {
                input: 'grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]',
                output: "1",
                explanation: "One island surrounded by water"
            }
        ],
        constraints: [
            "m == grid.length",
            "n == grid[i].length",
            "1 <= m, n <= 300",
            "grid[i][j] is '0' or '1'"
        ],
        testCases: [
            { 
                input: { 
                    grid: [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]
                }, 
                output: 1 
            }
        ],
        starterCode: {
            javascript: `function numIslands(grid) {
    // Your code here
};`
        }
    },
    // String Problems
    {
        id: 12,
        title: "Longest Common Prefix",
        difficulty: "easy",
        acceptance: "39.7%",
        description: "Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string ''.",
        examples: [
            {
                input: 'strs = ["flower","flow","flight"]',
                output: '"fl"',
                explanation: "The longest common prefix is 'fl'"
            }
        ],
        constraints: [
            "1 <= strs.length <= 200",
            "0 <= strs[i].length <= 200",
            "strs[i] consists of only lowercase English letters"
        ],
        testCases: [
            { input: { strs: ["flower","flow","flight"] }, output: "fl" },
            { input: { strs: ["dog","racecar","car"] }, output: "" }
        ],
        starterCode: {
            javascript: `function longestCommonPrefix(strs) {
    // Your code here
};`
        }
    },
    // Design Problems
    {
        id: 13,
        title: "LRU Cache",
        difficulty: "medium",
        acceptance: "40.2%",
        description: "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
        examples: [
            {
                input: '["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]\n[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]',
                output: "[null, null, null, 1, null, -1, null, -1, 3, 4]",
                explanation: "Cache operations with capacity 2"
            }
        ],
        constraints: [
            "1 <= capacity <= 3000",
            "0 <= key <= 104",
            "0 <= value <= 105"
        ],
        testCases: [
            { 
                input: { 
                    operations: ["LRUCache","put","put","get","put","get","put","get","get","get"],
                    values: [[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]
                }, 
                output: [null,null,null,1,null,-1,null,-1,3,4]
            }
        ],
        starterCode: {
            javascript: `class LRUCache {
    constructor(capacity) {
        // Initialize your data structure here
    }
    
    get(key) {
        // Your code here
    }
    
    put(key, value) {
        // Your code here
    }
};`
        }
    },
    // More Graph Traversal Problems
    {
        id: 14,
        title: "Course Schedule",
        difficulty: "medium",
        acceptance: "45.2%",
        description: "There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai. Return true if you can finish all courses. Otherwise, return false.",
        examples: [
            {
                input: "numCourses = 2, prerequisites = [[1,0]]",
                output: "true",
                explanation: "There are 2 courses to take. To take course 1 you should have finished course 0. So it is possible."
            }
        ],
        testCases: [
            { input: { numCourses: 2, prerequisites: [[1,0]] }, output: true },
            { input: { numCourses: 2, prerequisites: [[1,0],[0,1]] }, output: false }
        ],
        starterCode: {
            javascript: `function canFinish(numCourses, prerequisites) {
    // Your code here
};`
        }
    },
    // Advanced Dynamic Programming
    {
        id: 15,
        title: "Edit Distance",
        difficulty: "hard",
        acceptance: "35.8%",
        description: "Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2. You have the following three operations permitted on a word: Insert a character, Delete a character, Replace a character.",
        examples: [
            {
                input: 'word1 = "horse", word2 = "ros"',
                output: "3",
                explanation: "horse -> rorse (replace 'h' with 'r') -> rose (remove 'r') -> ros (remove 'e')"
            }
        ],
        testCases: [
            { input: { word1: "horse", word2: "ros" }, output: 3 },
            { input: { word1: "intention", word2: "execution" }, output: 5 }
        ],
        starterCode: {
            javascript: `function minDistance(word1, word2) {
    // Your code here
};`
        }
    },
    // System Design
    {
        id: 16,
        title: "Design Twitter",
        difficulty: "medium",
        acceptance: "35.2%",
        description: "Design a simplified version of Twitter where users can post tweets, follow/unfollow another user, and see the 10 most recent tweets in the user's news feed.",
        examples: [
            {
                input: '["Twitter", "postTweet", "getNewsFeed", "follow", "postTweet", "getNewsFeed", "unfollow", "getNewsFeed"]\n[[],[1, 5],[1],[1, 2],[2, 6],[1],[1, 2],[1]]',
                output: "[null, null, [5], null, null, [6, 5], null, [5]]",
                explanation: "Twitter operations sequence"
            }
        ],
        starterCode: {
            javascript: `class Twitter {
    constructor() {
        // Initialize your data structure here
    }
    
    postTweet(userId, tweetId) {
        // Your code here
    }
    
    getNewsFeed(userId) {
        // Your code here
    }
    
    follow(followerId, followeeId) {
        // Your code here
    }
    
    unfollow(followerId, followeeId) {
        // Your code here
    }
};`
        }
    },
    // Tree Manipulation
    {
        id: 17,
        title: "Serialize and Deserialize Binary Tree",
        difficulty: "hard",
        acceptance: "42.1%",
        description: "Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.",
        examples: [
            {
                input: "root = [1,2,3,null,null,4,5]",
                output: "[1,2,3,null,null,4,5]",
                explanation: "Original tree is reconstructed"
            }
        ],
        starterCode: {
            javascript: `class Codec {
    serialize(root) {
        // Your code here
    }
    
    deserialize(data) {
        // Your code here
    }
};`
        }
    },
    // Matrix/Grid Problems
    {
        id: 18,
        title: "Word Search",
        difficulty: "medium",
        acceptance: "39.8%",
        description: "Given an m x n grid of characters board and a string word, return true if word exists in the grid. The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring.",
        examples: [
            {
                input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"',
                output: "true",
                explanation: "Path can be formed using adjacent letters"
            }
        ],
        testCases: [
            { 
                input: { 
                    board: [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 
                    word: "ABCCED" 
                }, 
                output: true 
            }
        ],
        starterCode: {
            javascript: `function exist(board, word) {
    // Your code here
};`
        }
    },
    // Linked List Problems
    {
        id: 19,
        title: "Reverse Nodes in k-Group",
        difficulty: "hard",
        acceptance: "51.2%",
        description: "Given a linked list, reverse the nodes of a linked list k at a time and return its modified list. k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.",
        examples: [
            {
                input: "head = [1,2,3,4,5], k = 2",
                output: "[2,1,4,3,5]",
                explanation: "Reverse in groups of 2"
            }
        ],
        testCases: [
            { input: { head: [1,2,3,4,5], k: 2 }, output: [2,1,4,3,5] },
            { input: { head: [1,2,3,4,5], k: 3 }, output: [3,2,1,4,5] }
        ],
        starterCode: {
            javascript: `function reverseKGroup(head, k) {
    // Your code here
};`
        }
    }
];

// Helper functions
function getProblemById(id) {
    return problems.find(p => p.id === id);
}

// Function to check if problem is solved
function isProblemSolved(problemId) {
    const progress = userProgress.getProgress();
    return progress.solved.includes(problemId);
}

// Function to get problem status class
function getProblemStatusClass(problemId) {
    const progress = userProgress.getProgress();
    if (progress.solved.includes(problemId)) {
        return 'bg-green-500 shadow-sm';
    } else if (progress.attempted.includes(problemId)) {
        return 'bg-yellow-500 shadow-sm';
    }
    return 'bg-gray-200 shadow-sm';
}

// User progress tracking
const userProgress = {
    getProgress: function() {
        return JSON.parse(localStorage.getItem('userProgress')) || {
            solved: [],
            attempted: [],
            submissions: []
        };
    },
    
    saveProgress: function(progress) {
        localStorage.setItem('userProgress', JSON.stringify(progress));
    },
    
    addSubmission: function(problemId, code, status, language) {
        const progress = this.getProgress();
        progress.submissions.push({
            problemId,
            code,
            status,
            language,
            timestamp: new Date().toISOString()
        });
        
        if (status === 'solved' && !progress.solved.includes(problemId)) {
            progress.solved.push(problemId);
        }
        if (!progress.attempted.includes(problemId)) {
            progress.attempted.push(problemId);
        }
        
        this.saveProgress(progress);
    }
};

// Discussion system
const discussionSystem = {
    getDiscussions: function(problemId) {
        return JSON.parse(localStorage.getItem(`discussions_${problemId}`)) || [];
    },
    
    addDiscussion: function(problemId, content, userId) {
        const discussions = this.getDiscussions(problemId);
        discussions.push({
            id: Date.now(),
            content,
            userId,
            timestamp: new Date().toISOString(),
            replies: []
        });
        localStorage.setItem(`discussions_${problemId}`, JSON.stringify(discussions));
    },
    
    addReply: function(problemId, discussionId, content, userId) {
        const discussions = this.getDiscussions(problemId);
        const discussion = discussions.find(d => d.id === discussionId);
        if (discussion) {
            discussion.replies.push({
                id: Date.now(),
                content,
                userId,
                timestamp: new Date().toISOString()
            });
            localStorage.setItem(`discussions_${problemId}`, JSON.stringify(discussions));
        }
    }
}; 