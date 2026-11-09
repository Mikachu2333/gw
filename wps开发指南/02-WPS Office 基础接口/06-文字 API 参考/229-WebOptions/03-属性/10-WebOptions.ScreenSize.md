# WebOptions.ScreenSize

返回或设置在 Web 浏览器中查看保存的文档时应使用的理想最小屏幕尺寸（宽 x 高，以像素为单位）。可读写 **MsoScreenSize** 类型。



## 语法

express.**ScreenSize**

express   一个代表 **WebOptions** 对象的变量。

## 类型

MsoScreenSize

## 示例


```JavaScript
/*本示例当活动文档另存为网页时将该网页的目标屏幕尺寸设置为 800x600 像素。*/
function test() {
    ActiveDocument.WebOptions.ScreenSize = msoScreenSize800x600
}
```


```JavaScript
/*本示例显示当第一个文档另存为网页时该网页的目标屏幕尺寸是否为 1152x882 像素。*/
function test() {
    alert(Documents.Item(1).WebOptions.ScreenSize == msoScreenSize1152x882)
}
```
