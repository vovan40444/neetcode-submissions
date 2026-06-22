class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        return new Set(nums).size !== nums.length
    }
}

console.log(new Solution().hasDuplicate([1, 2, 3, 3]));
