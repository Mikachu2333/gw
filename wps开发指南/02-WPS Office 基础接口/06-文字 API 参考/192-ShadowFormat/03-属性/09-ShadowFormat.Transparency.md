# ShadowFormat.Transparency

返回或设置指定阴影的透明度，其值为从 0.0（不透明）到 1.0（全透明）。可读写 **Single** 类型。



## 语法

express.**Transparency**

express   一个代表 **ShadowFormat** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例将活动文档中第一个形状的阴影设为半透明的红色.*/
function test() {
    let shadowFormat = ActiveDocument.Shapes.Item(1).Shadow
    shadowFormat.Visible = msoTrue
    shadowFormat.ForeColor.RGB = RGB(255, 0, 0)
    shadowFormat.Transparency = 0.5
}
```


```JavaScript
/*本示例显示所选内容中第一个内嵌形状的阴影的透明度。*/
function test() {
    alert(Selection.InlineShapes.Item(1).Shadow.Transparency)
}
```
