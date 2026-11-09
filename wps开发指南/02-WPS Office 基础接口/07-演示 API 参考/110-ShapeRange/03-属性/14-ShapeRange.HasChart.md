# ShapeRange.HasChart

返回指定的对象代表的形状区域是否包含图表。只读。



## 语法

express.**HasChart**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

MsoTriState

## 说明


 **HasChart** 属性的值可以是下列 **MsoTriState** 常量之一。

| 常量           | 说明                                |
| ------------ | --------------------------------- |
| **msoFalse** | 指定的形状区域不包含图表。 |
| **msoTrue**  | 指定的形状区域包含图表。   |



## 示例


```JavaScript
/*本示例显示活动演示文稿第一张幻灯片上指定的形状区域是否包含图表。*/
function test() {
    let shapeRange = ActivePresentation.Slides.Item(1).Shapes.Range([1, 2])
    alert(shapeRange.HasChart == msoTrue)
}
```


```JavaScript
/*本示例显示活动窗口上选中形状区域是否包含图表。*/
function test() {
    alert(ActiveWindow.Selection.ShapeRange.HasChart == msoTrue)
}
```
