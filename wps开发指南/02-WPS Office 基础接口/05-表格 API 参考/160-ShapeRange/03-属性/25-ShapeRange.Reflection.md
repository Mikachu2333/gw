# ShapeRange.Reflection

返回指定形状区域的 **ReflectionFormat** 对象，该对象包含形状区域的反射格式属性。只读。



## 语法

express.**Reflection**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

ReflectionFormat

## 示例


```JavaScript
/*本示例判断第一张工作表中新建的ShapeRange对象是否是无反射类型，并显示结果。*/
function test() {
    let shpRange = Application.Worksheets.Item(1).Shapes.Range([2, 1])
    if (shpRange.Reflection.Type == msoReflectionTypeNone) {
        alert("反射效果为无反射")
    }else {
        alert("反射效果不是无反射")
    }
}
```


```JavaScript
/*本示例将活动工作表中新建的shpRange1和shpRange2对象设置不同类型的反射效果。*/
function test() {
    let shpRange1 = ActiveSheet.Shapes.Range([1])
    let shpRange2 = ActiveSheet.Shapes.Range([2, 3])
    shpRange1.Reflection.Type = msoReflectionType1
    shpRange2.Reflection.Type = msoReflectionType3
}
```
