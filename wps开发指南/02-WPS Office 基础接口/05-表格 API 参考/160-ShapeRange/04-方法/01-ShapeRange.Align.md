# ShapeRange.Align

对齐指定形状区域中的形状。



## 语法

express.**Align(AlignCmd, RelativeTo)**

express   一个代表 **ShapeRange** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| AlignCmd | 必选 | MsoAlignCmd | 指定某个指定形状范围中形状的对齐方式。 |
| RelativeTo | 必选 | MsoTriState | 不在 ET 中使用。必须为 False。 |

## 返回值

void

## 示例


```JavaScript
/*本示例将第一张工作表的所有形状的左边与该范围内最左边的形状的左边对齐。*/
function test() {
    let shapes = Application.Worksheets.Item(1).Shapes
    shapes.SelectAll()
    Selection.ShapeRange.Align(msoAlignLefts, false)
}
```


```JavaScript
/*本示例将活动工作表中新建的ShapeRange对象的右边与该范围内最右边的形状的右边对齐。*/
function test() {
    let shpRange = ActiveSheet.Shapes.Range([2, 3])
    shpRange.Align(msoAlignRights, false)
}
```
