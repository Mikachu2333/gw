# Selection.Characters

返回一个 **[Characters](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Characters/obj)** 集合，该集合代表文档、区域或选定内容中的字符。只读。



## 语法

express.**Characters**

express   一个代表 **Selection** 对象的变量。

## 类型

Characters

## 示例


```JavaScript
/*本示例显示所选内容的第一个字符。如果没有选定任何内容，则显示插入点后的第一个字符。*/
function test() {
    let string = Selection.Characters.Item(1).Text
    alert(`The first character is... ${string}`)
}
```


```JavaScript
/*本示例将选中的内容中的第二个字符设置为 72 磅加粗。*/
function test() {
    let range = ActiveWindow.Selection.Characters.Item(2)
    range.Bold = msoTrue
    range.Font.Size = 72
}
```
