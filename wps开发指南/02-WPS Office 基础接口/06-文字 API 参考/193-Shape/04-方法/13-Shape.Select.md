# Shape.Select

选择指定的形状。



## 语法

express.**Select(Replace)**

express   一个代表 **Shape** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Replace | 可选 | any | 在添加形状时，如果该参数值为 **True** ，则替换所选内容。如果该参数值为 **False** ，则将新形状添加到所选内容。 |

## 返回值

void

## 示例


```JavaScript
/*本示例选中活动文档形状集合中的第一个形状*/
function test() {
    Application.ActiveDocument.Shapes.Item(1).Select()
}
```


```JavaScript
/*本示例选中第一个文档形状集合中的第一个形状和第二个形状*/
function test() {
    Documents.Item(1).Shapes.Item(1).Select(false)
    Documents.Item(1).Shapes.Item(2).Select(false)
}
```
