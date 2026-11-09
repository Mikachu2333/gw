# Env.GetDesktopDpi

获取桌面的逻辑 DPI（每英寸点数）。

## 语法

```typescript
function GetDesktopDpi(): number
```

express   一个代表 **Env** 对象的变量。

## 返回值

逻辑 DPI 值（整数），标准显示器为 96。

## 说明

返回显示器的水平方向逻辑 DPI。标准显示器返回 96，150% 缩放返回 144，200% 缩放（2x Retina）返回 192。在无头环境或 GUI 未初始化时返回 0。可用于根据显示缩放比例调整 UI 元素的大小。
