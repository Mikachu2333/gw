# Table.Columns

返回一个 **Columns** 集合，该集合代表表格中的所有列。只读。



## 语法

express.**Columns**

express   一个代表 **Table** 对象的变量。

## 类型

Columns

## 示例


```JavaScript
/*本示例显示活动演示文稿内第一个表格对应的形状编号、幻灯片编号和表格的列数。*/
function test() {
    let slides = ActivePresentation.Slides
    for (let i = 1; i <= slides.Count; i++) {
        for (let j = 1; j <= slides.Item(i).Shapes.Count; j++) {
            if (slides.Item(i).Shapes.Item(j).HasTable) {
                let columnCount = slides.Item(i).Shapes.Item(j).Table.Columns.Count
                MsgBox(`Shape ${j} on slide ${i} contains the first table and has ${columnCount} columns.`)
                return
            }
        }
    }
}
```


```JavaScript
/*本示例判断选定的形状是否包含表格，如果包含表格，则设置第一列的列宽为 72 磅（一英寸）。*/
function test() {
    let shapeRange = ActiveWindow.Selection.ShapeRange
    if (shapeRange.HasTable) {
        shapeRange.Table.Columns.Item(1).Width = 72
    }
}
```
