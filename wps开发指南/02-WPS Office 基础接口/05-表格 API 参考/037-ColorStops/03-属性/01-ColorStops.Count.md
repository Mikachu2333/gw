# ColorStops.Count

返回指定对象的计数。只读。



## 语法

express.**Count**

express   一个代表 **ColorStops** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*以下示例显示活动单元格中的 ColorStops 数。*/
function test() {
    alert(ActiveCell.Interior.Gradient.ColorStops.Count)
}
```
