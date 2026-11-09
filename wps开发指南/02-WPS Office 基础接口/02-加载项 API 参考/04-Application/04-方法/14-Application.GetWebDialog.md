# Application.GetWebDialog

根据 ID 获取已创建的 Web 对话框。

## 语法

```typescript
function GetWebDialog(id: number): WebDialog | undefined
```

express   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| id | 必选 | number | 对话框的 ID。 |

## 返回值

找到返回 [WebDialog](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/WebDialog/obj) 对象，未找到返回 `undefined`。

## 说明

通过 [CreateWebDialog](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/Application/member/CreateWebDialog) 创建的对话框会自动分配唯一 ID（可通过 [WebDialog.ID](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/WebDialog/member/ID) 获取），后续可用此方法获取该对话框的引用。

## 示例

```javascript
/* 获取已创建的对话框 */
function test() {
  var dlg = Application.GetWebDialog(1)
  if (dlg) {
    dlg.Visible = true
  }
}
```
