# WebOptions.ScreenSize

返回或设置在 Web 浏览器中查看已保存文档时应使用的理想的最小屏幕大小（以像素为单位，宽度乘以高度）。可以是 **MsoScreenSize** 常量之一。默认常量是 **msoScreenSize800x600** 。 **MsoScreenSize** 类型，可读写。



## 语法

express.**ScreenSize**

express   一个代表 **WebOptions** 对象的变量。

## 类型

MsoScreenSize

## 示例


```JavaScript
/*此示例设置 Web 浏览器中查看已保存文档时应使用的理想的最小屏幕大小。*/
function test() {
    Workbooks.Item(1).WebOptions.ScreenSize = msoScreenSize640x480
}
```


```JavaScript
/*本示例显示 Web 浏览器中查看已保存文档时应使用的理想的最小屏幕大小是否为 msoScreenSize800x600。*/
function test() {
    alert(ActiveWorkbook.WebOptions.ScreenSize == msoScreenSize800x600)
}
```
