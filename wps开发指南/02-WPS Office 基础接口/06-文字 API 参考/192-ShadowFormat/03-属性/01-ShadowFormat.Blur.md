# ShadowFormat.Blur

返回或设置一个 **Single** 类型的值，该值代表阴影格式的模糊级别。可读写。



## 语法

express.**Blur**

express   一个代表 **ShadowFormat** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例显示活动文档第一个形状的阴影格式的模糊级别。*/
function test() {
    alert(ActiveDocument.Shapes.Item(1).Shadow.Blur)
}
```


```JavaScript
/*本示例设置所选内容中第一个内嵌形状的阴影格式的模糊级别。*/
function test() {
    Selection.InlineShapes.Item(1).Shadow.Blur = 6
}
```
