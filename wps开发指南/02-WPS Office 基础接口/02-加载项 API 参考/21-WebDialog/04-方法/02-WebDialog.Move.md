# WebDialog.Move

移动对话框到指定位置。

## 语法

```typescript
Move(x: number, y: number): void
```

express   一个代表 **WebDialog** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| x | 必选 | number | 新的 X 坐标（像素）。 |
| y | 必选 | number | 新的 Y 坐标（像素）。 |

## 示例

```javascript
/* 移动对话框 */
function test() {
  var dlg = Application.GetWebDialog(1)
  if (dlg) {
    dlg.Move(100, 200)
  }
}
```
