# WebDialog.Url

对话框当前加载的 URL。

## 语法

express.**Url**

express   一个代表 **WebDialog** 对象的变量。

## 类型

string，可读写。

## 说明

设置新值时对话框会导航到新 URL。

## 示例

```javascript
/* 更改页面 */
function test() {
  var dlg = Application.GetWebDialog(1)
  if (dlg) {
    dlg.Url = "https://example.com/new-page.html"
  }
}
```
