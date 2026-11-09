# WebDialog.Visible

对话框是否可见。

## 语法

express.**Visible**

express   一个代表 **WebDialog** 对象的变量。

## 类型

boolean，可读写。

## 说明

通过 [CreateWebDialog](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/Application/member/CreateWebDialog) 创建的对话框默认不可见，需设为 `true` 显示。

## 示例

```javascript
/* 显示对话框 */
function test() {
  var dlg = Application.CreateWebDialog("https://example.com")
  dlg.Visible = true
}
```
