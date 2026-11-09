# AddinFunctions 对象

加载项的自定义函数集合。

## 说明

通过 [WPSAddin.Functions](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/WPSAddin/member/Functions) 获取。提供注册、注销和查找自定义函数的能力。注册和注销操作只能由函数所属的加载项自身调用——跨加载项操作会失败。

## 示例

```javascript
/* 注册并查找函数 */
function test() {
  var funcs = Application.CurrentWPSAddIn.Functions
  funcs.Register("myFunc", function(a, b) { return a + b })
  var f = funcs.Item("myFunc")
  console.log(f.Name)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/AddinFunctions/member/Item) | 根据索引（从 1 开始）或名称获取对应的 **[AddinFunction](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/AddinFunction/obj)**。 |
| [Register](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/AddinFunctions/member/Register) | 注册一个自定义函数。 |
| [Unregister](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/AddinFunctions/member/Unregister) | 注销指定名称的自定义函数。 |

## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/AddinFunctions/member/Count) | 已注册的自定义函数数量。 **number** 类型，只读。 |
