# Shape.Name

返回或设置指定对象的名称。 **String** 类型，可读写。



## 语法

express.**Name**

express   一个代表 **Shape** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例将第一个文档中第二个形状的名字设置为“shape”。*/
function test() {
    const shape = Application.Documents.Item(1).Shapes.Item(2)
    shape.Name = "shape"
}
```


```JavaScript
/*本示例显示活动文档第一个形状的名称。*/
function test() {
    const shape = ActiveDocument.Shapes.Item(1)
    alert(shape.Name)
}
```
