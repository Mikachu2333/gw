# ShapeRange.Reflection

返回指定形状范围的反射格式。只读。



## 语法

express.**Reflection**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

ReflectionFormat

## 示例


```JavaScript
/*本示例显示活动演示文稿第一张幻灯片中包含第二个和第三个形状的形状范围的反射效果透明度。*/
function test() {
    let shapeRange = ActivePresentation.Slides.Item(1).Shapes.Range([2, 3])
    alert(shapeRange.Reflection.Transparency)
}
```


```JavaScript
/*本示例设置活动窗口中选中形状范围的反射虚化效果程度。*/
function test() {
    ActiveWindow.Selection.ShapeRange.Reflection.Blur = 70
}
```
