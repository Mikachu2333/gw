# Borders.SurroundHeader

如果页面边框环绕文档页眉，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**SurroundHeader**

express   一个代表 **Borders** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置活动文档中第一节的页面边框格式，使页面边框不环绕页眉和页脚。*/
function test() {
    let borders = ActiveDocument.Sections.Item(1).Borders
    borders.SurroundFooter = false
    borders.SurroundHeader = false
}
```


```JavaScript
/*本示例显示第一个文档第一节的页面边框是否环绕文档页眉。*/
function test() {
    alert(Documents.Item(1).Sections.Item(1).Borders.SurroundHeader)
}
```
