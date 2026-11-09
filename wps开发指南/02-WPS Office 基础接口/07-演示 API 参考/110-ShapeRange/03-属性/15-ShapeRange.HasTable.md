# ShapeRange.HasTable

返回指定的形状是否为表。只读。MsoTriState 类型。



## 语法

express.**HasTable**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

MsoTriState

## 说明


 **HasTable** 属性的值可以是下列 **MsoTriState** 常量之一。

| 常量           | 说明                                |
| ------------ | --------------------------------- |
| **msoFalse** | 指定的形状不是表。 |
| **msoTrue**  | 指定的形状是表。   |



## 示例


```JavaScript
/*本示例判断如果活动窗口上选定的形状是表格，则将该表格的第一列的宽度设置为 1 英寸（72 磅）。*/
function test() {
    let shapeRange = ActiveWindow.Selection.ShapeRange
    if (shapeRange.HasTable == msoTrue) {
        shapeRange.Table.Columns.Item(1).Width = 72
    }
}
```


```JavaScript
/*本示例显示活动演示文稿第一张幻灯片上指定的形状区域是否包含表格。*/
function test() {
    let shapeRange = ActivePresentation.Slides.Item(1).Shapes.Range([1, 2])
    alert(shapeRange.HasTable == msoTrue)
}
```
