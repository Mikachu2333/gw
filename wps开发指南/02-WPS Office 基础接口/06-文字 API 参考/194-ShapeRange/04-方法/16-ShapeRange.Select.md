# ShapeRange.Select

选择指定的形状范围。



## 语法

express.**Select(Replace)**

express   一个代表 **ShapeRange** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Replace | 可选 | any | 在添加形状时，如果该参数值为 **True** ，则替换所选内容。如果该参数值为 **False** ，则将新形状添加到所选内容。 |

## 返回值

void

## 示例


```JavaScript
/*本示例选中活动文档中的第一个和第二个形状。*/
function test() {
    let shapes = ActiveDocument.Shapes
    shapes.Range([1, 2]).Select()
}
```


```JavaScript
/*本示例将第一个文档中的第三个形状添加到所选内容中。*/
function test() {
    Documents.Item(1).Shapes.Range(3).Select(false)
}
```
