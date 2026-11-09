# Shape.Height

返回或设置指定图形的高度。 **Single** 类型，可读写。



## 语法

express.**Height**

express   一个代表 **Shape** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例将活动文档第二个形状高度设置为 200磅。*/
function test() {
    let shape = ActiveDocument.Shapes.Item(2)
    shape.Height = 200
}
```


```JavaScript
/*本示例显示第一个文档中第一个形状的高度。*/
function test() {
    let shape = Documents.Item(1).Shapes.Item(1)
    alert(shape.Height)
}
```
