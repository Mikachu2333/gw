# ShapeRange.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **ShapeRange** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例将第一张工作表中新建的ShapeRange对象删除。*/
function test() {
    let shpRange = Application.Worksheets.Item(1).Shapes.Range([1, 2])
    shpRange.Delete()
}
```


```JavaScript
/*本示例将活动工作表中新建的ShapeRange对象删除。*/
function test() {
    let shpRange = ActiveSheet.Shapes.Range(["正五边形 1", "椭圆 3"])
    shpRange.Delete()
}
```
