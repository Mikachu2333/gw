# Shapes.Count

返回一个 **Long** 值，它代表集合中对象的数量。



## 语法

express.**Count**

express   一个代表 **Shapes** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例将第一张工作表中所有形状的宽度扩大至原来的1.2倍。*/
function test() {
    let shapes = Application.Worksheets.Item(1).Shapes
    for (let i = 1; i <= shapes.Count; i++) {
        shapes.Item(i).Width *= 1.2
    }
}
```


```JavaScript
/*本示例显示活动工作表中形状的数量。*/
function test() {
    let shapes = ActiveSheet.Shapes
    alert(shapes.Count)
}
```
