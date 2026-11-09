# CustomXMLParts 对象

代表 **[CustomXMLPart](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLPart/obj)** 对象的集合。

## 说明


存在三个始终与文档一起创建的默认部件。它们是“封面”、“文档属性”和“应用程序属性”。最后两个部件在 WPS 文字的以前版本中，但现在是在 **CustomXMLParts** 对象集合中以 XML 形式提供。


## 示例


```JavaScript
/*本示例运行于文字组件，向活动文档中添加一个 CustomXMLPart 对象。*/
function test() {
    let customXMLPart = ActiveDocument.CustomXMLParts.Add("<author>Mark Twain</author>")
}
```


```JavaScript
/*本示例运行于文字组件，在光标处插入活动文档上第四个 CustomXMLPart 对象的 XML 字符串。*/
function test() {
    let customXMLPart = ActiveDocument.CustomXMLParts.Item(4)
    Selection.TypeText(customXMLPart.XML)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLParts/member/Add) | 允许您向文件添加新的 **CustomXMLPart** 。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLParts/member/Item) | 获取 **CustomXMLParts** 集合中的一个 **CustomXMLPart** 对象。只读。 |
| [SelectByID](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLParts/member/SelectByID) | 选择与 GUID 匹配的自定义 XML 部件。 |
| [SelectByNamespace](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLParts/member/SelectByNamespace) | 选择其命名空间与搜索条件匹配的自定义 XML 部件的集合。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLParts/member/Application) | 获取一个代表 **CustomXMLParts** 对象的容器应用程序的 **Application** 对象。只读。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLParts/member/Count) | 获取一个 **Long** 类型的值，指示 **CustomXMLParts** 集合中的项数。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLParts/member/Creator) | 获取一个 32 位整数，指示创建 **CustomXMLParts** 对象时所使用应用程序。只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLParts/member/Parent) | 获取 **CustomXMLParts** 对象的 **Parent** 对象。只读。 |