# ShapeRange.Align

对齐指定形状范围中的形状。



## 语法

express.**Align(Align, RelativeTo)**

express   一个代表 **ShapeRange** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Align | 必选 | MsoAlignCmd | 指定特定形状范围中形状的对齐方式。 |
| RelativeTo | 必选 | number（int4 精度） | 如果该参数值为 msoTrue，则相对于文档边缘对齐形状。如果该参数值为 msoFalse，则相对于彼此对齐形状。 |

## 返回值

void

## 示例


```JavaScript
/*本示例将选定范围内所有形状的左边缘与该范围最左边的形状的左边缘对齐。*/
function test() {
    let shapeRange = Selection.ShapeRange
    shapeRange.Align(msoAlignLefts, msoFalse)
}
```


```JavaScript
/*本示设置活动文档中第二个形状相对于文档边缘右对齐。*/
function test() {
    let shapeRange = ActiveDocument.Shapes.Range(2)
    shapeRange.Align(msoAlignRights, msoTrue)
}
```
