# WebDialog.ExecuteJavaScript

在对话框的浏览器上下文中执行 JavaScript 代码。

## 语法

```typescript
ExecuteJavaScript(jscode: string): void
```

express   一个代表 **WebDialog** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| jscode | 必选 | string | 要执行的 JavaScript 代码字符串。 |

## 示例

```javascript
/* 在对话框中执行脚本 */
function test() {
  var dlg = Application.GetWebDialog(1)
  if (dlg) {
    dlg.ExecuteJavaScript("document.title = '新标题'")
  }
}
```
