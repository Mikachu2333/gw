# Find.Format

如果在查找操作中包含格式，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**Format**

express   一个代表 **Find** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例清除活动文档中所有的加粗格式。*/
function test() {
    let find = ActiveDocument.Content.Find
    find.ClearFormatting()
    find.Font.Bold = true
    find.Format = true
    find.Replacement.ClearFormatting()
    find.Replacement.Font.Bold = false
    find.Execute("", null, null, null, null, null, true, null, null, "", wdReplaceAll)
}
```


```JavaScript
/*本示例显示所选内容的查找操作中是否包含格式。*/
function test() {
    alert(Selection.Find.Format)
}
```
