# ReflectionFormat.Type

获取或设置 **ReflectionFormat** 对象的类型。可读/写。



## 语法

express.**Type**

express   一个代表 **ReflectionFormat** 对象的变量。

## 类型

MsoReflectionType

## 示例


```JavaScript
/*本示例将活动文档上第一个形状中文本字体的反射格式的类型设置为msoReflectionType5。*/
function test() {
    shape = ActiveDocument.Shapes.Item(1)
    shape.TextFrame.TextRange.Font.Reflection.Type = msoReflectionType5
}
```


```JavaScript
/*本示例显示第一个文档上第二个形状中文字字体的反射格式的类型是否为msoReflectionTypeNone。*/
function test() {
    let font = Documents.Item(1).Shapes.Item(1).TextFrame.TextRange.Font
    alert(font.Reflection.Type == msoReflectionTypeNone)
}
```
