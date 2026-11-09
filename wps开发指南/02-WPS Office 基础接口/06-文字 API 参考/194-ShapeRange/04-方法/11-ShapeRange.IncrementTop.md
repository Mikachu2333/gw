# ShapeRange.IncrementTop

以指定磅数垂直移动指定形状。



## 语法

express.**IncrementTop(Increment)**

express   一个代表 **ShapeRange** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Increment | 必选 | number（float 精度） | 指定对象的垂直移动距离，以磅为单位。为正值时将形状下移；为负值时将形状上移。 |

## 返回值

void

## 示例


```JavaScript
/*本示例将活动文档中第一个和第三个形状垂直下移 1 英寸。*/
function test() {
    ActiveDocument.Shapes.Range([1, 3]).IncrementTop(InchesToPoints(1))
}
```


```JavaScript
/*本示例将选定形状垂直上移 100 磅。*/
function test() {
    Selection.ShapeRange.IncrementTop(-100)
}
```
