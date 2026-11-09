# CustomXMLPart.BuiltIn

获取一个指示 **CustomXMLPart** 是否为内置的值。只读



## 语法

express.**BuiltIn**

express   一个代表 **CustomXMLPart** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例运行于表格组件，显示第一张工作簿上第一个 CustomXMLPart 对象是否内置。*/
function test() {
    let customXMLPart = Workbooks.Item(1).CustomXMLParts.Item(1)
    alert(customXMLPart.BuiltIn)
}
```


```JavaScript
/*本示例运行于表格组件，判断如果活动工作簿上第一个 CustomXMLPart 对象内置，则显示该 CustomXMLPart 对象的 GUID。*/
function test() {
    let customXMLPart = ActiveWorkbook.CustomXMLParts.Item(1)
    if (customXMLPart.BuiltIn) {
        alert(customXMLPart.Id)
    }
}
```
