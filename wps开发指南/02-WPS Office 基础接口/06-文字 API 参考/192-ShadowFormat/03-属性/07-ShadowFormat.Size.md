# ShadowFormat.Size

返回或设置一个 **Single** 类型的值，该值代表阴影的宽度。可读写。



## 语法

express.**Size**

express   一个代表 **ShadowFormat** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例设置活动文档的第一个形状的阴影的宽度。*/
function test() {
    ActiveDocument.Shapes.Item(1).Shadow.Size = 120
}
```


```JavaScript
/*本示例显示所选内容中第一个内嵌形状的阴影的宽度。*/
function test() {
    alert(Selection.InlineShapes.Item(1).Shadow.Size)
}
```
