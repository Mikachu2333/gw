# Shape.Id

返回一个 **Long** 类型值，该值标识形状或形状范围。只读。



## 语法

express.**Id**

express   一个代表 **Shape** 对象的变量。

## 类型

number（int 精度）

## 示例


```JavaScript
/*本示例向当前演示文稿第一张幻灯片上添加一个新形状，再根据 ID 属性的值填充该形状。*/
function test() {
    let shape = Application.ActivePresentation.Slides.Item(1).Shapes.AddShape(msoShape5pointStar, 100, 100, 100, 100)
    switch (shape.Id) {
        case shape.Id > 0 && shape.Id <= 500:
            shape.Fill.ForeColor.RGB = RGB(255, 0, 0)
            break
        case shape.Id > 500 && shape.Id <= 1000:
            shape.Fill.ForeColor.RGB = RGB(255, 255, 0)
            break
        case shape.Id > 1000 && shape.Id <= 1500:
            shape.Fill.ForeColor.RGB = RGB(255, 0, 255)
            break
        case shape.Id > 1500 && shape.Id <= 2000:
            shape.Fill.ForeColor.RGB = RGB(0, 255, 0)
            break
        case shape.Id > 2000 && shape.Id <= 2500:
            shape.Fill.ForeColor.RGB = RGB(0, 255, 255)
            break
        default:
            shape.Fill.ForeColor.RGB = RGB(0, 0, 255)
    }
}
```


```JavaScript
/*本示例在当前演示文稿第一张幻灯片上添加一个新形状并显示其 Id。*/
function test() {
    let shape = Application.ActivePresentation.Slides.Item(1).Shapes.AddShape(msoShape16pointStar, 150, 150, 200, 100)
    alert(shape.Id)
}
```
