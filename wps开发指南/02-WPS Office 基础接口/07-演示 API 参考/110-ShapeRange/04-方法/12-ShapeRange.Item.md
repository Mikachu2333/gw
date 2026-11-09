# ShapeRange.Item

返回指定的 **ShapeRange** 集合中的单个 **Shape** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **ShapeRange** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 集合中要返回的单个对象的名称或索引号。 |

## 返回值

Shape

## 示例


```JavaScript
/*本示例将活动演示文稿第一张幻灯片上指定形状范围中第二个形状的前景填充色设置为红色。*/
function test() {
    let shapeRange = ActivePresentation.Slides.Item(1).Shapes.Range([1, 2])
    shapeRange.Item(2).Fill.ForeColor.RGB = RGB(255, 0, 0)
}
```


```JavaScript
/*本示例删除活动窗口上选中形状范围中名称为“Rectangle 1”的形状。*/
function test() {
    ActiveWindow.Selection.ShapeRange.Item("Rectangle 1").Delete()
}
```
