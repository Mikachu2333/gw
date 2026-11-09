# ShapeRange.Count

返回一个 **Long** 值，它代表集合中对象的数量。



## 语法

express.**Count**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例在第一张工作表中按形状的名称生成一组形状的 ShapeRange 集合，并输出集合形状数量。*/
function test() {
    let shpRange = Application.Worksheets.Item(1).Shapes.Range(["矩形 1", "椭圆 2"])
    alert(shpRange.Count)
}
```


```JavaScript
/*本示例在第一张工作表中按形状的索引生成一组形状的 ShapeRange 集合，并输出集合形状数量。*/
function test() {
    let shpRange = ActiveSheet.Shapes.Range([3, 2, 1])
    alert(shpRange.Count)
}
```
