# Break.PageIndex

返回一个 **Long** 类型的值，该值代表指定分隔符出现的页码。



## 语法

express.**PageIndex**

express   一个代表 **Break** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示指定分隔符出现的页码。*/
function test() {
    alert(Application.ActiveDocument.ActiveWindow.Panes.Item(1).Pages.Item(1).Breaks.Item(1).PageIndex)
}
```


```JavaScript
/*本示例显示活动窗口的第一个窗格的第一页中的所有分隔符出现的页码。*/
function test() {
    let breaks = ActiveWindow.Panes.Item(1).Pages.Item(1).Breaks
    for (let i = 1; i <= breaks.Count; i++) {
        alert(breaks.Item(i).PageIndex)
    }
}
```
