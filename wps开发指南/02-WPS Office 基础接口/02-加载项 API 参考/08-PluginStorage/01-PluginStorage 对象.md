# PluginStorage 对象

通过PluginStorage 对象可以实现一个 WPS 加载项中的多个网页之间的数据共享。 注意通过 **PluginStorage** 对象只能传递简单的数据类型，JSON 数据建议转成字符串后再进行共享。

## 说明

 **PluginStorage** 对象是 **Application** 对象的子对象，每一个 **WPS** 加载项都只有一个 **PluginStorage** 实例。 注意 **PluginStorage** 对象不能持久化，所有数据只在关闭 **WPS** 加载项之前有效。 数据持久化可以将数据写入本地文件中，参考[ **FileSystem** 对象](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/FileSystem/obj)。 

```javascript
let ps = Application.PluginStorage
```

下列代码示例往 **PluginStorage** 中存储一个key为"count", 值为5的代码，如果 **PluginStorage** 中key为count的代码已存在，则会用新值进行覆盖。 

```javascript
Application.PluginStorage.setItem("count", 5)
```

以下示例枚举出 **PluginStorage** 中所有的key。 

```javascript
let ps = Application.PluginStorage
let itemCounts = ps.length; for(let i = 0;  i < itemCounts; ++i){     let itemKey = ps.Key(i) //如果要取到对应的value，使用ps.GetItem(itemKey)     console.log(itemKey) }
```

 有关 **PluginStorage** 的详细方法和属性，可以参考 **PluginStorage** 方法和属性相关介绍

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [clear](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/PluginStorage/member/clear) | 清空容器中的所有键值对。 |
| [getItem](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/PluginStorage/member/getItem) | 返回key对应的value。 |
| [key](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/PluginStorage/member/key) | 返回index对应的key。 |
| [removeItem](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/PluginStorage/member/removeItem) | 删除容器中key对应的键值对。 |
| [setItem](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/PluginStorage/member/setItem) | 向容器中添加键值对。 |

## 属性

| **名称** | **说明** |
| :------ | :------- |
| [length](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/PluginStorage/member/length) | 返回PluginStorage容器中键值对的个数 |