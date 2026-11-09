# DefaultWebOptions.ScreenSize

返回或设置在 Web 浏览器中查看已保存文档时应使用的理想的最小屏幕大小（以像素为单位，宽度乘以高度）。可以是 **MsoScreenSize** 常量之一。默认常量是 **msoScreenSize800x600** 。 **MsoScreenSize** 类型，可读写。



## 语法

express.**ScreenSize**

express   一个代表 **DefaultWebOptions** 对象的变量。

## 类型

MsoScreenSize

## 示例


```JavaScript
/*此示例设置（Web全局选项）浏览器中查看已保存文档时应使用的理想的最小屏幕大小。*/
function test() {
    Application.DefaultWebOptions.ScreenSize = msoScreenSize1280x1024
}
```


```JavaScript
/*本示例显示（Web全局选项）浏览器中查看已保存文档时应使用的理想的最小屏幕大小是否为 msoScreenSize1024x768。*/
function test() {
    alert(Application.DefaultWebOptions.ScreenSize == msoScreenSize1024x768)
}
```
