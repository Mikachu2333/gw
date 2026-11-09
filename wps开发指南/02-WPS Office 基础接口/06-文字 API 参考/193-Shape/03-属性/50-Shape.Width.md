# Shape.Width

返回或设置指定形状的宽度（以磅为单位）。可读写 **Long** 类型。



## 语法

express.**Width**

express   一个代表 **Shape** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例显示活动文档第一个形状的宽度。*/
function test() {
    alert(ActiveDocument.Shapes.Item(1).Width)
}
```


```JavaScript
/*本示例将第一个文档中第二个形状的宽度设置为 50 磅。*/
function test() {
    Documents.Item(1).Shapes.Item(2).Width = 50
}
```
