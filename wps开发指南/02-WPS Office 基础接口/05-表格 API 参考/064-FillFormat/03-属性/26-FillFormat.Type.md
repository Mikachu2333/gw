# FillFormat.Type

返回代表填充类型的 **MsoFillType** 值。



## 语法

express.**Type**

express   一个代表 **FillFormat** 对象的变量。

## 类型

MsoFillType

## 说明


此属性也可返回 **xlAutomatic** 或 **xlNone** 。  

在 ET 中不使用 **msoFillBackground** 常量。



## 示例


```JavaScript
/*本示例判断活动工作表中第二个形状的填充类型是否是纹理填充。*/
function test() {
    let fillFormat = ActiveSheet.Shapes.Item(2).Fill
    if (fillFormat.Type == msoFillTextured) {
        alert("是纹理填充")
    } else {
        alert("不是纹理填充")
    }
}
```


```JavaScript
/*本示例显示第一张工作表中第一个形状的填充类型是否是实心填充。*/
function test() {
    let fillFormat = Application.Worksheets.Item(1).Shapes.Item(1).Fill
    alert(fillFormat.Type == msoFillSolid)
}
```
