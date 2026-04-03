import java.util.HashMap;
import java.util.Map;

public class Solution {
    /**
     * 查找数组中两个数，使它们的和等于目标值
     * @param nums 输入数组
     * @param target 目标和
     * @return 包含两个索引的数组，对应数组中相加等于目标值的两个元素
     *         如果没有找到，返回[-1, -1]
     * 时间复杂度：O(n)，其中n是数组长度
     * 空间复杂度：O(n)，最坏情况下需要存储所有元素
     */
    public int[] twoSum(int[] nums, int target) {
        // 使用HashMap存储已经遍历过的元素及其索引
        Map<Integer, Integer> map = new HashMap<>();
        
        // 遍历数组
        for (int i = 0; i < nums.length; i++) {
            // 计算需要的另一个值
            int need = target - nums[i];
            
            // 检查需要的值是否已经在HashMap中
            if (map.containsKey(need)) {
                // 如果存在，返回两个数的索引
                return new int[]{map.get(need), i};
            }
            
            // 将当前元素及其索引加入HashMap
            map.put(nums[i], i);
        }
        
        // 没有找到符合条件的两个数
        return new int[]{-1, -1};
    }

    /**
     * 主方法，用于测试twoSum方法的功能
     * @param args 命令行参数（未使用）
     */
    public static void main(String[] args) {
        // 创建Solution实例
        Solution solution = new Solution();
        
        // 测试用例：输入数组
        int[] nums = {2, 7, 7,11, 15};
        
        // 测试用例：目标和
        int target = 9;
        
        // 调用twoSum方法计算结果
        int[] res = solution.twoSum(nums, target);
        
        // 输出结果
        System.out.println(res[0] + ", " + res[1]);
    }
}