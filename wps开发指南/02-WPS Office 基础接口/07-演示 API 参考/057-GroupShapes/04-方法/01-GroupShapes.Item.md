# GroupShapes.Item

从指定的 **GroupShapes** 集合中返回单个 **Shape** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **GroupShapes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 集合中要返回的单个 **Shape** 对象的名称或索引号。 |

## 返回值

Shape

## 示例


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片的第一个形状组中第一个形状的名称。*/
function test() {
    let groupShapes = ActivePresentation.Slides.Item(1).Shapes.Item(1).GroupItems
    alert(groupShapes.Item(1).Name)
}
```


```JavaScript
/*本示例将活动窗口所选形状组中最后一个形状的前景填充色设置为红色。*/
function test() {
    let groupShapes = ActiveWindow.Selection.ShapeRange.GroupItems
    groupShapes.Item(groupShapes.Count).Fill.ForeColor.RGB = RGB(255, 0, 0)
}
```
