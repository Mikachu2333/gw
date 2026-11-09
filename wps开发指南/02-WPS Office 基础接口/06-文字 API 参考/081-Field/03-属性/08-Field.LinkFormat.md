# Field.LinkFormat

返回一个 **LinkFormat** 对象，该对象代表指定域的链接选项。只读。



## 语法

express.**LinkFormat**

express   一个代表 **Field** 对象的变量。

## 类型

LinkFormat

## 示例


```JavaScript
/*本示例更新活动文档中的所有域。*/
function test() {
    let fields = ActiveDocument.Fields
    for (let i = 1; i <= fields.Count; i++) {
        fields.Item(i).LinkFormat.Update()
    }
}
```


```JavaScript
/*本示例显示所选内容中第一个域的链接的源文件的名称和路径。*/
function test() {
    let field = Selection.Fields.Item(1)
    alert(field.LinkFormat.SourceFullName)
}
```
