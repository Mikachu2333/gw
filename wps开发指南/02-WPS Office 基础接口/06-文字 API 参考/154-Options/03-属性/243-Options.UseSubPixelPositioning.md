# Options.UseSubPixelPositioning

返回或设置 **Boolean** 类型的值，该值指定是否启用子像素定位。可读/写。



## 语法

express.**UseSubPixelPositioning**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 说明


如果启用了子像素定位，则 **UseSubPixelPositioning** 值为 **True** 。



## 示例


```JavaScript
/*本示例启用 WPS 的子像素定位。*/
function test() {
    Options.UseSubPixelPositioning = true
}
```


```JavaScript
/*本示例判断如果 WPS 启用子像素定位，则通知用户。*/
function test() {
    if (Options.UseSubPixelPositioning) {
        alert("WPS 启用子像素定位")
    }
}
```
