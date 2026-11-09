# Shape.Reflection

返回指定形状的 **[ReflectionFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/ReflectionFormat/obj)** 对象，该对象包含形状的映像格式属性。只读。



## 语法

express.**Reflection**

express   一个代表 **Shape** 对象的变量。

## 类型

ReflectionFormat

## 示例


```JavaScript
/*本示例判断活动工作表的第一个形状是否是无反射类型。*/
function test() {
    let shape = ActiveSheet.Shapes.Item(1)
    if (shape.Reflection.Type == msoReflectionTypeNone) {
        alert("反射效果为无反射")
    }else {
        alert("反射效果不是无反射")
    }
}
```


```JavaScript
/*本示例给第一个工作表的形状设置不同类型的反射效果。*/
function test() {
    let shape1 = Application.Worksheets.Item(1).Shapes.Item(1)
    let shape2 = Application.Worksheets.Item(1).Shapes.Item(2)
    shape1.Reflection.Type = msoReflectionType1
    shape2.Reflection.Type = msoReflectionType2
}
```
