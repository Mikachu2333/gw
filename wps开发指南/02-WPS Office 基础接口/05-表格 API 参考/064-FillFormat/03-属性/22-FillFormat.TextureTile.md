# FillFormat.TextureTile

返回指定填充的纹理平铺样式。可读/写 **MsoTriState** 类型。



## 语法

express.**TextureTile**

express   一个代表 **FillFormat** 对象的变量。

## 类型

MsoTriState

## 说明


| MsoTriState 可以是下列 **MsoTriState** 常量之一。 |
| --------------------------------------- |
| **msoCTrue**                            |
| **msoFalse**                            |
| **msoTriStateMixed**                    |
| **msoTriStateToggle**                   |
| **msoTrue**                             |



## 示例


```JavaScript
/*本示例显示活动工作表中第一个形状填充的纹理是否为平铺。*/
function test() {
    let fillFormat = ActiveSheet.Shapes.Item(1).Fill
    alert(fillFormat.TextureTile == msoTrue)
}
```


```JavaScript
/*本示例将第一张工作表中第二个形状填充的纹理设置为拉伸方式。*/
function test() {
    let fillFormat = Application.Worksheets.Item(1).Shapes.Item(2).Fill
    fillFormat.TextureTile = msoFalse
}
```
