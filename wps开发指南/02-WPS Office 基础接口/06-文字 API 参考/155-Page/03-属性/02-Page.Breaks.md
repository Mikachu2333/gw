# Page.Breaks

返回一个 **Breaks** 集合，该集合代表页面上的分隔符。



## 语法

express.**Breaks**

express   一个代表 **Page** 对象的变量。

## 类型

Breaks

## 说明


 **Breaks** 集合包含分页符、分栏符和分节符。使用 **Breaks** 集合以及相关对象和属性可通过编程方式定义文档的页面版式。



## 示例


```JavaScript
/*本示例显示活动文档上活动窗口的第一个窗格的第一页的第一个分隔符出现的页码。*/
function test() {
    let breaks = Application.ActiveDocument.ActiveWindow.Panes.Item(1).Pages.Item(1).Breaks
    alert(`第一个分隔符出现的页码： ${breaks.Item(1).PageIndex}`)
}
```


```JavaScript
/*本示例显示活动窗口的第一个窗格的第一页中分隔符的数量。*/
function test() {
    alert(ActiveWindow.Panes.Item(1).Pages.Item(1).Breaks.Count)
}
```
