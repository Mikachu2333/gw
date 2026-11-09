# CustomXMLPart.Id

获取一个 **String** 类型的值，其中包含分配给当前 **CustomXMLPart** 对象的 GUID。只读。



## 语法

express.**Id**

express   一个代表 **CustomXMLPart** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例运行于文字组件，显示活动文档上第四个 CustomXMLPart 对象的 GUID。*/
function test() {
    let customXMLPart = ActiveDocument.CustomXMLParts.Item(4)
    alert(customXMLPart.Id)
}
```


```JavaScript
/*本示例运行于文字组件，在光标处插入活动文档的第一个内容控件映射到的自定义 XML 部件的 GUID。*/
function test() {
    let customXMLPart = ActiveDocument.ContentControls.Item(1).XMLMapping.CustomXMLPart
    Selection.TypeText(customXMLPart.Id)
}
```
