# Application.HighQualityModeForGraphics

返回或设置 ET 是否使用高质量模式来打印图形。可读/写。



## 语法

express.**HighQualityModeForGraphics**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示ET是否使用高质量模式打印图像。*/
function test() {
    alert(Application.HighQualityModeForGraphics)
}
```


```JavaScript
/*本示例将ET设置为使用高质量模式打印图像。*/
function test() {
    Application.HighQualityModeForGraphics = true
}
```
