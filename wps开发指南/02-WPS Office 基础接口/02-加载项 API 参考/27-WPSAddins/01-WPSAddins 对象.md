# WPSAddins 对象

当前应用实例关联的加载项集合。

## 说明

通过 `Application.WPSAddIns` 获取。只包含与当前应用组件类型（文字、表格、演示等）匹配的加载项。支持按索引或名称查找。

## 示例

```javascript
/* 遍历所有加载项 */
function test() {
  var addins = Application.WPSAddIns
  for (var i = 1; i <= addins.Count; i++) {
    console.log(addins.Item(i).Name)
  }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/WPSAddins/member/Item) | 按索引或名称获取加载项。 |

## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/WPSAddins/member/Count) | 加载项数量。 **number** 类型，只读。 |
