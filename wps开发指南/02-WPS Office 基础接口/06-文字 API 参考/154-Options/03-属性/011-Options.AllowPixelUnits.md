# Options.AllowPixelUnits

如果 WPS 用像素作为默认度量单位（这是 HTML 功能所支持的度量单位），则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**AllowPixelUnits**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例使 WPS 可以将像素作为 HTML 功能的默认度量单位。*/
function test() {
    Options.AllowPixelUnits = true
}
```


```JavaScript
/*本示例显示 WPS 是否用像素作为 HTML 功能的默认度量单位。*/
function test() {
    alert(Options.AllowPixelUnits)
}
```
