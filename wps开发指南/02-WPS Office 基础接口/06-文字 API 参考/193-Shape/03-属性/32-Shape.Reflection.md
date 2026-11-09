# Shape.Reflection

返回一个 **ReflectionFormat** 对象，该对象代表形状的反射格式。只读。



## 语法

express.**Reflection**

express   一个代表 **Shape** 对象的变量。

## 类型

ReflectionFormat

## 示例


```JavaScript
/*本示例判断活动文档的第一个形状是否为无反射类型。*/
function test() {
    let shape = ActiveDocument.Shapes.Item(1)
    if (shape.Reflection.Type == msoReflectionTypeNone) {
        alert("反射效果为无反射类型")
    } else {
        alert("反射效果不为无反射类型")
    }
}
```


```JavaScript
/*本示例将第一个文档的第二个形状反射效果的透明度设置为 0.8。*/
function test() {
    let shape = Application.Documents.Item(1).Shapes.Item(2)
    shape.Reflection.Transparency = 0.8
}
```
