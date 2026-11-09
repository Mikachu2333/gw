# ShapeRange.Chart

返回当前 **Shape** 对象的 **Chart** 对象。只读。



## 语法

express.**Chart**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

**Chart** 

## 示例


```JavaScript
/*本示例将活动演示文稿第一张幻灯片上包含第一个和第二个形状的形状范围中的图表删除。*/
function test() {
    let shapeRange = ActivePresentation.Slides.Item(1).Shapes.Range([1, 2])
    shapeRange.Chart.Delete()
}
```


```JavaScript
/*本示例设置活动窗口上选定形状范围中图表的标题*/
function test() {
    ActiveWindow.Selection.ShapeRange.Chart.Title = "选定图表"
}
```
