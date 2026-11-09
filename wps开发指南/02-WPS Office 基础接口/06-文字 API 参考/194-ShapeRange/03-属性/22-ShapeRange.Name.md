# ShapeRange.Name

返回或设置指定对象的名称。 **String** 类型，可读写。



## 语法

express.**Name**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例先在第一个文档创建ShapeRange对象，再将其名称设置为“ShapeRange1”。*/
function test() {
    let shpRange = Application.Documents.Item(1).Shapes.Range([1])
    shpRange.Name = "ShapeRange1"
}
```


```JavaScript
/*本示例判断如果活动文档新建的ShapeRange对象的名称是“Oval 3”，则删除该对象。*/
function test() {
    let shpRange = ActiveDocument.Shapes.Range([2])
    if (shpRange.Name == "Oval 3") {
        shpRange.Delete()
    }
}
```
