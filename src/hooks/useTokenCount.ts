// 保持向后兼容的函数签名，但始终返回0以提高性能
export const useTokenCount = (_input?: string) => {
  // 忽略参数以避免未使用变量警告
  void _input;
  return 0;
};
