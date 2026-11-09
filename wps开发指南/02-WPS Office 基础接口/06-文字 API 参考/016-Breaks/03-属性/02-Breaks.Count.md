# Breaks.Count

返回 **Breaks** 集合中的项目数。 **Long** 类型，只读。



## 语法

express.**Count**

express   一个代表 **Breaks** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动窗口的第一个窗格的第一页中分隔符的数量。*/
function test() {
    alert(ActiveWindow.Panes.Item(1).Pages.Item(1).Breaks.Count)
}
```
