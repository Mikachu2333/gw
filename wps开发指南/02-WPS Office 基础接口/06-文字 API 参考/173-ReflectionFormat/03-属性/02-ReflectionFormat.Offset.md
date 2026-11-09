# ReflectionFormat.Offset

返回或设置反射图像与形状的分离量（以磅为单位）。可读/写。



## 语法

express.**Offset**

express   一个代表 **ReflectionFormat** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例设置活动文档上第一个形状与反射图像的分离量。*/
function test() {
    let rftFormat = ActiveDocument.Shapes.Item(1).Reflection
    rftFormat.Offset = 2
}
```


```JavaScript
/*本示例显示所选字体与反射图像的分离量。*/
function test() {
    alert(Selection.Font.Reflection.Offset)
}
```
