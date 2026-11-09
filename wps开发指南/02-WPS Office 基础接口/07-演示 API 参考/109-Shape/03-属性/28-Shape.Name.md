# Shape.Name

创建形状时，WPP 自动以 ShapeType Number 的形式为其分配一个名称，其中 ShapeType 指明形状或自选图形的类型，Number 是在幻灯片上形状的集合中具有唯一性的整数。例如，为幻灯片上的形状自动生成的名称可以为 Placeholder 1、Oval 2 和 Rectangle 3。为了避免与自动分配的名称发生冲突，对用户定义的名称请不要使用 ShapeType Number 形式，其中 ShapeType 为一个用于自动生成名称的值，Number 为任意的正整数。形状范围必须至少包含一个形状。 **String** 类型，可读/写。



## 语法

express.**Name**

express   一个代表 **Shape** 对象的变量。

## 类型

string

## 说明


如果包含某对象的集合的 **Item** 方法采用 **Variant** 类型的参数，则可以将该对象的名称与 **Item** 方法联合使用来返回对该对象的引用。例如，如果形状的 Name 属性值为 Rectangle 2，.Shapes("Rectangle 2") 则返回对该形状的引用。



## 示例


```JavaScript
/*本示例将活动演示文稿第一张幻灯片上的第二个形状的名称设为“big triangle”。*/
function test() {
    Application.ActivePresentation.Slides.Item(1).Shapes.Item(2).Name = "big triangle"
}
```


```JavaScript
/*本示例为当前演示文稿第一张幻灯片中名为“形状2”的形状设置填充颜色。*/
function test() {
    let shapes = Application.ActivePresentation.Slides.Item(1).Shapes
    for (let i = 1; i <= shapes.Count; i++) {
        if (shapes.Item(i).Name == "形状2") {
            shapes.Item(i).Fill.ForeColor.RGB = RGB(0, 0, 255)
        }
    }
}
```
