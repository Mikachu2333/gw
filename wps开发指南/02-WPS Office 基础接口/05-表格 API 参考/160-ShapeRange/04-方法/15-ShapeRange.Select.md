# ShapeRange.Select

选择对象。



## 语法

express.**Select(Replace)**

express   一个代表 **ShapeRange** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Replace | 可选 | any | （仅用于工作表）。如果为 True，则用指定的对象替换当前所选内容。如果为 False，则扩展当前所选内容以包括以前选择的对象和指定的对象。 |

## 返回值

void

## 示例


```JavaScript
/*本示例选中第一张工作表中新建的ShapeRange1对象，并追加新建的ShapeRange2对象。*/
function test() {
    let shpRange1 = Application.Worksheets.Item(1).Shapes.Range([1])
    shpRange1.Select()
    let shpRange2 = Application.Worksheets.Item(1).Shapes.Range([3])
    shpRange2.Select(false)
}
```


```JavaScript
/*本示例选中活动工作表中新建的ShapeRange对象。*/
function test() {
    let shpRange = ActiveSheet.Shapes.Range([1, 2, 3])
    shpRange.Select()
}
```
