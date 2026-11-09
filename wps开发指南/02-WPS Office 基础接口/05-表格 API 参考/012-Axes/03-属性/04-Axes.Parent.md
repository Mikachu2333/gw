# Axes.Parent

返回指定对象的父对象。只读。




## 语法

express.**Parent**

express   一个代表 **Axes** 对象的变量。

## 类型

Object

## 示例


```JavaScript
/*本示例显示包含 myAxis 的图表的名称。*/
function test(){
    let myAxis = Application.Charts.Item(1).Axes(xlValue)
    alert(myAxis.Parent.Name)
}
```
