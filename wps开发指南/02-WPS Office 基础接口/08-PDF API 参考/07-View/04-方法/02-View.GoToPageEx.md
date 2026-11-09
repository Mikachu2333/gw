# View.GoToPageEx

跳转到指定页面（增强版），支持偏移和翻页动画。

## 语法

express.**GoToPageEx**

express   一个代表 **View** 对象的变量。

## 参数说明

| 参数 | 类型 | 说明 |
|-----|------|------|
| PageIndex | long | 目标页码（**从 1 开始**，与 `GoToPage` 一致） |
| OffsetX | number (可选) | 视图横向偏移量（视图布局像素，非页面坐标）；省略或传 `-1` 表示不偏移，定位到页面顶部 |
| OffsetY | number (可选) | 视图纵向偏移量（视图布局像素）；省略或传 `-1` 表示不偏移 |
| RefreshView | boolean (可选) | **当前版本该参数未使用，传入任意值无效果** |
| NeedAnim | boolean (可选) | 是否启用翻页动画，默认 `false` |

## 返回值

无

## 示例

```JavaScript
// 跳转到第 5 页，不偏移
app.ActiveWindow.ActiveView.GoToPageEx(5);

// 跳转到第 3 页，带动画
app.ActiveWindow.ActiveView.GoToPageEx(3, -1, -1, false, true);
```
