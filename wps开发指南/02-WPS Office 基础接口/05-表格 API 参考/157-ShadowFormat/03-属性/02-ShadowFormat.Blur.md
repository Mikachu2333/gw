# ShadowFormat.Blur

返回或设置指定底纹的模糊度。可读/写 **Single** 类型。



## 语法

express.**Blur**

express   一个代表 **ShadowFormat** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例显示第一张工作表中第二个形状阴影的模糊度。*/
function test() {
    let shadow = Application.Worksheets.Item(1).Shapes.Item(2).Shadow
    alert(shadow.Blur)
}
```


```JavaScript
/*本示例将活动工作表中第一个形状阴影的模糊度设置为8。*/
function test() {
    let shadow = ActiveSheet.Shapes.Item(1).Shadow
    shadow.Blur = 8
}
```
