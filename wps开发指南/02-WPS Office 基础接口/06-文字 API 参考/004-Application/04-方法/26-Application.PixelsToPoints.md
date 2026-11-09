# Application.PixelsToPoints

将度量单位由像素转换为磅。以 **Single** 类型返回转换结果。



## 语法

express.**PixelsToPoints(Pixels, fVertical)**

express   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Pixels | 必选 | number（float 精度） | 要转换为磅值的像素值。 |
| fVertical | 可选 | any | 如果该属性值为 **True** ，则转换垂直像素；如果该属性值为 **False** ，则转换水平像素。 |

## 返回值

Single

## 示例


```JavaScript
/*此示例将指定像素转换为磅，并通知用户。*/
function test() {
    alert(`320x240 pixels is equivalent to ${Application.PixelsToPoints(320, false)}x${Application.PixelsToPoints(240, true)} points on this display.`)
}
```


```JavaScript
/*本示例在光标处插入100像素转换为磅的值。*/
function test() {
    Selection.TypeText(Application.PixelsToPoints(100))
}
```
