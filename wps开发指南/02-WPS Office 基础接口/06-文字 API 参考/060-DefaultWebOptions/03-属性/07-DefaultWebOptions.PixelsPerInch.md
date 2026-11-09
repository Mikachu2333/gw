# DefaultWebOptions.PixelsPerInch

返回或设置网页中图形图像及表格单元格的密度（每英寸的像素数）。可读/写 **Long** 类型。



## 语法

express.**PixelsPerInch**

express   一个代表 **DefaultWebOptions** 对象的变量。

## 类型

number（int4 精度）

## 说明


设置范围通常为 19 到 480 之间，对于普通的屏幕大小，通常的设置为 72、96 和 120。默认设置是 96。

无论何时在 Web 浏览器中查看所保存文档，本属性都可确定指定的网页中相对于文本尺寸的图像以及单元格的大小。图像或单元格的实际最终尺寸等于原始尺寸（以英寸为单位）乘以每英寸中的像素数。

使用 **ScreenSize** 属性为目标 Web 浏览器设置最佳屏幕大小。



## 示例


```JavaScript
/*本示例设置网页中图形图像及表格单元格的密度（每英寸的像素数）。*/
function test() {
    Application.DefaultWebOptions().PixelsPerInch = 72
}
```


```JavaScript
/*本示例显示网页中图形图像及表格单元格的密度（每英寸的像素数）。*/
function test() {
    alert(Application.DefaultWebOptions().PixelsPerInch)
}
```
