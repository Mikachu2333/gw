# Shape.Adjustments

返回一个 **Adjustments** 对象，该对象包含所有对指定 **Shape** 对象（代表自选图形或艺术字）进行调整操作的调整值。只读。



## 语法

express.**Adjustments**

express   一个代表 **Shape** 对象的变量。

## 类型

Adjustments

## 示例


```JavaScript
/*本示例显示活动文档第三个形状的调整值数量。*/
function test() {
    alert(ActiveDocument.Shapes.Item(3).Adjustments.Count)
}
```


```JavaScript
/*本示例显示第一个文档中每个形状的调整值数量。*/
function test() {
    let shapes = Documents.Item(1).Shapes
    for (let i = 1; i <= shapes.Count; i++) {
        alert(shapes.Item(i).Adjustments.Count)
    }
}
```
