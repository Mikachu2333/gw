# Pane.Index

返回一个 **Long** 类型的值，该值代表项目在集合中的位置。只读。



## 语法

express.**Index**

express   一个代表 **Pane** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动窗格的 Index 属性值。*/
function test() {
    alert(ActiveWindow.ActivePane.Index)
}
```


```JavaScript
/*本示例显示最后一个窗格的 Index 属性值。*/
function test() {
    alert(ActiveWindow.Panes.Item(ActiveWindow.Panes.Count).Index)
}
```
