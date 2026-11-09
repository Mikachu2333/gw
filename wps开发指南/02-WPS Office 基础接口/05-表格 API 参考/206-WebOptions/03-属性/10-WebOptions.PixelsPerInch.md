# WebOptions.PixelsPerInch

返回或设置网页中图形图像的密度（每英寸的像素数）及表格单元格的密度。密度设置范围通常为 19 到 480 之间，对于普通的屏幕大小，通常的设置一般为 72、96 和 120。默认设置是 96。 **Long** 型，可读写。



## 语法

express.**PixelsPerInch**

express   一个代表 **WebOptions** 对象的变量。

## 类型

number（int4 精度）

## 说明


无论何时在 Web 浏览器中查看所保存文档，此属性都可确定指定的网页中相对于文本尺寸的图像以及单元格的大小。图像或单元格的实际最终尺寸等于原始尺寸（以英寸为单位）乘以每英寸中的像素数。

使用 **ScreenSize** 属性可为目标 Web 浏览器设置最佳屏幕大小。



## 示例


```JavaScript
/*此示例根据浏览器的目标屏幕大小来设置像素密度。对于 800x600 像素的屏幕，其密度为 72 像素/英寸。对于 1024x768 像素的屏幕，其密度为 96 像素/英寸。对于所有其他情况，则使用的密度为 120 像素/英寸。*/
function test() {
    let webOptions = Application.ActiveWorkbook.WebOptions
    switch (webOptions.ScreenSize) {
        case msoScreenSize800x600:
            webOptions.PixelsPerInch = 72
            break
        case msoScreenSize1024x768:
            webOptions.PixelsPerInch = 96
            break
        default:
            webOptions.PixelsPerInch = 120
    }
}
```


```JavaScript
/*本示例显示网页中图形图像的密度（每英寸的像素数）及表格单元格的密度。*/
function test() {
    alert(Workbooks.Item(1).WebOptions.PixelsPerInch)
}
```
