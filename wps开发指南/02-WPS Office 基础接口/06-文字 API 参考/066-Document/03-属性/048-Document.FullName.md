# Document.FullName

返回一个 **String** 类型的值，该值表示文档的名称，包括路径。只读。



## 语法

express.**FullName**

express   一个代表 **Document** 对象的变量。

## 类型

string

## 说明


使用该属性与按顺序使用 **Path** 、 **PathSeparator** 和 **Name** 属性的作用相同。



## 示例


```JavaScript
/*本示例显示活动文档的路径和文件名。*/
function test() {
    alert(ActiveDocument.FullName)
}
```


```JavaScript
/*本示例在光标处插入以不同形式表示的第一个文档的路径和文件名。*/
function test() {
    let document = Documents.Item(1)
    Selection.TypeText(document.FullName + "\n")
    Selection.TypeText(`${document.Path}${Application.PathSeparator}${document.Name}`)
}
```
