# BrowserGroups 对象

所有浏览器分组的集合。

## 说明

通过 `Application.BrowserGroups` 访问。加载项中的浏览器页面按分组组织，此集合包含所有分组。

## 示例

```javascript
/* 遍历所有分组 */
function test() {
  var groups = Application.BrowserGroups
  for (var i = 1; i <= groups.Count; i++) {
    var group = groups.Item(i)
    console.log(group.Name + "：" + group.Count + " 个浏览器")
  }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/BrowserGroups/member/Item) | 按索引获取浏览器分组，索引从 1 开始。 |

## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/BrowserGroups/member/Count) | 浏览器分组的数量。 **number** 类型，只读。 |
