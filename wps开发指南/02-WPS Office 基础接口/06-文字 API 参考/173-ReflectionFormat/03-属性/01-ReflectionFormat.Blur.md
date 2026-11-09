# ReflectionFormat.Blur

返回或设置 **Single** 类型值，该值指定应用于指定对象的虚化效果程度。可读/写。



## 语法

express.**Blur**

express   一个代表 **ReflectionFormat** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例设置活动文档上第一个形状的反射效果的虚化程度。*/
function test() {
    let rftFormat = ActiveDocument.Shapes.Item(1).Reflection
    rftFormat.Blur = 1.5
}
```


```JavaScript
/*本示例显示所选字体的反射效果的虚化程度。*/
function test() {
    alert(Selection.Font.Reflection.Blur)
}
```
