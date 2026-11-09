# WebDialog.Resize

调整对话框大小。

## 语法

```typescript
Resize(width: number, height: number): void
```

express   一个代表 **WebDialog** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| width | 必选 | number | 新的宽度（像素）。 |
| height | 必选 | number | 新的高度（像素）。 |

## 示例

```javascript
/* 调整对话框大小 */
function test() {
  var dlg = Application.GetWebDialog(1)
  if (dlg) {
    dlg.Resize(800, 600)
  }
}
```
