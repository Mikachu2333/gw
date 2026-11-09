# ShapeRange.Distribute

在指定的形状范围内均匀分布形状。



## 语法

express.**Distribute(Distribute, RelativeTo)**

express   一个代表 **ShapeRange** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Distribute | 必选 | MsoDistributeCmd | 指定图形是横向分布还是纵向分布。 |
| RelativeTo | 必选 | number（int4 精度） | 如果为 msoTrue，则将图形均匀分布在页面的整个横向或者纵向空间上。如果为 msoFalse，则图形在其原来占有的横向或者纵向空间内分布。 |

## 返回值

void

## 说明


可选择纵向分布或横向分布，也可选择将各图形分布于整个页面还是仅限于原先占据的空间。



## 示例


```JavaScript
/*本示例定义一个图形区域，该区域包含活动文档中所有的自选图形，再将各图形水平分布在此区域内。*/
function test() {
    let shapes = ActiveDocument.Shapes
    let numShapes = shapes.Count
    if (numShapes > 1) {
        let numAutoShapes = 0
        let autoShpArray = []
        for (let i = 1; i <= numShapes; i++) {
            if (shapes.Item(i).Type == msoAutoShape) {
                autoShpArray[numAutoShapes] = shapes.Item(i).Name
                numAutoShapes++
            }
        }
        if (numAutoShapes > 1) {
            let asRange = shapes.Range(autoShpArray)
            asRange.Distribute(msoDistributeHorizontally, msoFalse)
        }
    }
}
```


```JavaScript
/*本示例将第一个文档中所有形状均匀分布在页面的纵向空间上。*/
function test() {
    Documents.Item(1).Shapes.SelectAll()
    Selection.ShapeRange.Distribute(msoDistributeVertically, msoTrue)
}
```
