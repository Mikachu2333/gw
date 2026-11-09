# Window.RangeFromPoint

返回位于指定屏幕坐标对的 **Shape** 或 **Range** 对象。 如果指定坐标处没有形状，则此方法返回 **null** 。



## 语法

express.**RangeFromPoint(x, y)**

express   一个代表 **Window** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| x | 必选 | number（int4 精度） | 表示从顶部开始到屏幕左边缘的水平距离的值（以像素为单位）。 |
| y | 必选 | number（int4 精度） | 表示从左侧开始到屏幕顶部的垂直距离的值（以像素为单位）。 |

## 返回值

Object

## 示例


```JavaScript
/*本示例判断如果指定屏幕坐标的形状的类型为图表、线条或图片，则将该形状的可选文字说明赋值给变量 text。*/
function test() {
    let obj = ActiveWindow.RangeFromPoint(300, 500)
    let text = null
    if (obj !== null) {
        switch (obj.Type) {
            case msoChart:
            case msoLine:
            case msoPicture:
                text = shape.AlternativeText
                break
            default:
                text = ""
        }
    } else {
        text = ""
    }
}
```


```JavaScript
/*本示例选中指定屏幕坐标的形状。*/
function test() {
    let obj = Application.Windows.Item(1).RangeFromPoint(400, 600)
    obj.Select()
}
```
