# FillFormat.TextureOffsetX

返回指定填充的偏移 X 值。可读/写 **Single** 类型。



## 语法

express.**TextureOffsetX**

express   一个代表 **FillFormat** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例显示第一张工作表中第一个形状填充的偏移 X 值。*/
function test() {
    let fillFormat = Application.Worksheets.Item(1).Shapes.Item(1).Fill
    alert(fillFormat.TextureOffsetX)
}
```


```JavaScript
/*本示例将活动工作表中第二个形状填充的偏移 X 值设置为15。*/
function test() {
    let fillFormat = ActiveSheet.Shapes.Item(2).Fill
    fillFormat.TextureOffsetX = 15
}
```
