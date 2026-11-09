# WebDialog.Delete

销毁对话框。

## 语法

```typescript
Delete(): void
```

express   一个代表 **WebDialog** 对象的变量。

## 说明

先隐藏对话框，然后从管理器中移除并释放资源。调用后此对象不再有效，后续对该对象的操作未定义。

## 示例

```javascript
/* 关闭并销毁对话框 */
function test() {
  var dlg = Application.GetWebDialog(1)
  if (dlg) {
    dlg.Delete()
  }
}
```
