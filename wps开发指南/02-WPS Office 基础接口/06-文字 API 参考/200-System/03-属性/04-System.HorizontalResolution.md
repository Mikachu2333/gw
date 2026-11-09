# System.HorizontalResolution

以像素为单位返回显示器的水平分辨率。 **Long** 类型，只读。



## 语法

express.**HorizontalResolution**

express   一个代表 **System** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示当前的屏幕分辨率（例如，“1024 x 768”）。*/
function test() {
    let horizontal = Application.System.HorizontalResolution
    let vertical = Application.System.VerticalResolution
    alert(`Resolution = ${horizontal} x ${vertical}`)
}
```


```JavaScript
/*本示例将所选内容替换为显示器的水平分辨率。*/
function test() {
    Selection.Range.Text = Application.System.HorizontalResolution
}
```
