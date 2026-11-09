# Borders.AlwaysInFront

如果在文档文本之前显示页面边框，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**AlwaysInFront**

express   一个代表 **Borders** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例在活动文档中第一节的文档文本之前添加艺术型页面边框*/
function test() {
    let section = ActiveDocument.Sections.Item(1)
    section.Borders.AlwaysInFront = true
    for (let i = 1; i <= section.Borders.Count; i++) {
        let border = section.Borders.Item(i)
        border.ArtStyle = wdArtPeople
        border.ArtWidth = 15
    }
}
```


```JavaScript
/*本示例显示是否在所选内容的第一节之前展示页面边框*/
function test() {
    alert(Selection.Sections.Item(1).Borders.AlwaysInFront)
}
```
