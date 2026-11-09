# ShapeRange.ID

返回一个 Long 值，它代表指定对象的类型。



## 语法

express.**ID**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

number（int4 精度）

## 说明


可将 ID 标签用作其他 HTML 文档或相同网页上的超链接引用。



## 示例


```JavaScript
/*本示例显示第一张工作表中新建的ShapeRange对象的ID。*/
function test() {
    let shpRange = Application.Worksheets.Item(1).Shapes.Range([1])
    alert(shpRange.ID)
}
```


```JavaScript
/*本示例显示活动工作表中新建的ShapeRange对象的ID。*/
function test() {
    let shpRange = ActiveSheet.Shapes.Range(["等腰三角形 2"])
    alert(shpRange.ID)
}
```
