# Shape.Select

选择对象。



## 语法

express.**Select(Replace)**

express   一个代表 **Shape** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Replace | 可选 | any | （仅用于工作表）。如果为 True，则用指定的对象替换当前所选内容。如果为 False，则扩展当前所选内容以包括以前选择的对象和指定的对象。 |

## 返回值

void

## 示例


```JavaScript
/*本示例选中第一张工作表中的所有平行四边形。*/
function test() {
    let shapes = Application.Worksheets.Item(1).Shapes
    for (let i = 1; i <= shapes.Count; i++) {
        if (shapes.Item(i).AutoShapeType == msoShapeParallelogram) {
            shapes.Item(i).Select(false)
        }
    }
}
```


```JavaScript
/*本示例将活动工作表的第一个和第三个形状选中。*/
function test() {
    let shapes = ActiveSheet.Shapes
    shapes.Item(1).Select()
    shapes.Item(3).Select(false)
}
```
