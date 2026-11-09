# ShapeRange.Reflection

返回一个 **ReflectionFormat** 对象，该对象代表形状区域的反射格式。只读。



## 语法

express.**Reflection**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

ReflectionFormat

## 示例


```JavaScript
/*本示例显示活动文档中包含第二个和第三个形状的形状范围的反射效果透明度。*/
function test() {
    let shapeRange = ActiveDocument.Shapes.Range([2, 3])
    alert(shapeRange.Reflection.Transparency)
}
```


```JavaScript
/*本示例设置选中形状范围的反射虚化效果程度。*/
function test() {
    Selection.ShapeRange.Reflection.Blur = 70
}
```
