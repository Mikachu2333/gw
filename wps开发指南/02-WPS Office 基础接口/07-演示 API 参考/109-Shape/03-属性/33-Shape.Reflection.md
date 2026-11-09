# Shape.Reflection

返回指定形状的映像格式。只读。



## 语法

express.**Reflection**

express   一个代表 **Shape** 对象的变量。

## 类型

ReflectionFormat

## 示例


```JavaScript
/*本示例判断活动演示文稿内第一张幻灯片上的第一个形状是否为无反射类型。*/
function test() {
    let shape = ActivePresentation.Slides(1).Shapes.Item(1)
    if (shape.Reflection.Type == msoReflectionTypeNone) {
        alert("反射效果为无反射类型")
    } else {
        alert("反射效果不为无反射类型")
    }
}
```


```JavaScript
/*本示例将活动演示文稿内第一张幻灯片上的第二个形状反射效果的透明度设置为 0.8。*/
function test() {
    let shape = ActivePresentation.Slides(1).Shapes.Item(2)
    shape.Reflection.Transparency = 0.8
}
```
