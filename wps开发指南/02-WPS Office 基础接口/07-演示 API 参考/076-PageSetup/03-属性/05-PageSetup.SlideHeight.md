# PageSetup.SlideHeight

以磅为单位返回或设置幻灯片的高度。可读/写。



## 语法

express.**SlideHeight**

express   一个代表 **PageSetup** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例将活动演示文稿幻灯片的高度设为 8.5 英寸，宽度设为 11 英寸。*/
function test() {
    let pageSetup = ActivePresentation.PageSetup
    pageSetup.SlideWidth = 11 * 72
    pageSetup.SlideHeight = 8.5 * 72
}
```


```JavaScript
/*本示例显示第一个演示文稿的幻灯片的高度。*/
function test() {
    let pageSetup = Presentations.Item(1).PageSetup
    alert(pageSetup.SlideHeight + " 磅")
}
```
