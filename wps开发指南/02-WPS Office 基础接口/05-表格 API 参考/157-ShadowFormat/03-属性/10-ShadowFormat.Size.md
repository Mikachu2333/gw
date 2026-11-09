# ShadowFormat.Size

返回或设置指定底纹的大小。可读/写 **Single** 类型。



## 语法

express.**Size**

express   一个代表 **ShadowFormat** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例显示第一张工作表中第二个形状阴影的大小。*/
function test() {
    let shadow = Application.Worksheets.Item(1).Shapes.Item(2).Shadow
    alert(shadow.Size)
}
```


```JavaScript
/*本示例为活动工作表中第三个形状设置阴影类型并设置阴影大小为90。*/
function test() {
    let shadow = ActiveSheet.Shapes.Item(3).Shadow
    shadow.Type = msoShadow16
    shadow.Size = 90
}
```
