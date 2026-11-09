# Document.Variables

返回一个 **[Variables](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Variables/obj)** 集合，该集合代表指定文档所存的变量。只读。



## 语法

express.**Variables**

express   一个代表 **Document** 对象的变量。

## 类型

Variables

## 示例


```JavaScript
/*此示例将名为“Value1”的文档变量添加到活动文档中，然后将指定字符串与该文档变量的值拼接，并显示结果。*/
function test() {
    ActiveDocument.Variables.Add("Value1", "1")
    alert(ActiveDocument.Variables.Item("Value1").Value + "3")
}
```


```JavaScript
/*本示例显示活动文档的所有变量的名称和值。*/
function test() {
    let variables = ActiveDocument.Variables
    for (let i = 1; i <= variables.Count; i++) {
        alert(`Name = ${variables.Item(i).Name}\nValue = ${variables.Item(i).Value}`)
    }
}
```
