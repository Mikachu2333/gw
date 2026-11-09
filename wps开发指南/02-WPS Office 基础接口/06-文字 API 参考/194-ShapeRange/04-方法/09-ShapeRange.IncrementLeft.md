# ShapeRange.IncrementLeft

将指定形状水平移动指定的磅数。



## 语法

express.**IncrementLeft(Increment)**

express   一个代表 **ShapeRange** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Increment | 必选 | number（float 精度） | 指定形状水平移动的距离，以磅为单位。为正值时将形状右移；为负值时将形状左移。 |

## 返回值

void

## 示例


```JavaScript
/*本示例将活动文档中第一个和第三个形状水平右移 1 英寸。*/
function test() {
    ActiveDocument.Shapes.Range([1, 3]).IncrementLeft(InchesToPoints(1))
}
```


```JavaScript
/*本示例将选定形状水平左移 100 磅。*/
function test() {
    Selection.ShapeRange.IncrementLeft(-100)
}
```
