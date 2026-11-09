# Application.PointsToPixels

将长度值的单位由磅转换为像素。以 **Single** 类型返回转换结果。



## 语法

express.**PointsToPixels(Points, fVertical)**

express   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Points | 必选 | number（float 精度） | 要转换为像素值的磅值。 |
| fVertical | 可选 | any | 如果该属性值为 **True** ，则返回的结果是垂直像素值；如果该属性值为 **False** ，则返回的结果是水平像素值。 |

## 返回值

Single

## 示例


```JavaScript
/*本示例将指定磅值转换为像素。*/
function test() {
    alert(`180x120 points is equivalent to ${Application.PointsToPixels(180, false)}x${Application.PointsToPixels(120, true)} pixels on this display.`)
}
```


```JavaScript
/*本示例在光标处插入200磅转换为像素的值。*/
function test() {
    Selection.TypeText(Application.PointsToPixels(200))
}
```
