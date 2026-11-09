# Pages.Count

返回一个 **Long** 类型的值，该值代表集合中的页数。只读。



## 语法

express.**Count**

express   一个代表 **Pages** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动窗口中第一个窗格的页面数量。*/
function test() {
    alert(ActiveDocument.ActiveWindow.Panes(1).Pages.Count)
}
```
