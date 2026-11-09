# ShadowFormat.Type

返回或设置一个代表阴影格式类型的 **MsoShadowType** 值。



## 语法

express.**Type**

express   一个代表 **ShadowFormat** 对象的变量。

## 类型

MsoShadowType

## 示例


```JavaScript
/*本示例显示第一张工作表中第二个形状阴影的格式类型是否为msoShadow17。*/
function test() {
    let shadow = Application.Worksheets.Item(1).Shapes.Item(2).Shadow
    alert(shadow.Type == msoShadow17)
}
```


```JavaScript
/*本示例将活动工作表中第一个形状阴影的格式类型改为msoShadow16。*/
function test() {
    let shadow = ActiveSheet.Shapes.Item(1).Shadow
    shadow.Type = msoShadow16
}
```
