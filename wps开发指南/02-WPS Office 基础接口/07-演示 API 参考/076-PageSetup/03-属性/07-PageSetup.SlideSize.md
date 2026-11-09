# PageSetup.SlideSize

返回或设置指定演示文稿的幻灯片大小。可读/写。



## 语法

express.**SlideSize**

express   一个代表 **PageSetup** 对象的变量。

## 类型

PpSlideSizeType

## 说明


 **SlideSize** 属性的值可以是下列 **PpSlideSizeType** 常量之一：

| **常量** |
| ------------------------------------------- |
| **ppSlideSize35MM**                         |
| **ppSlideSizeA3Paper**                      |
| **ppSlideSizeA4Paper**                      |
| **ppSlideSizeB4ISOPaper**                   |
| **ppSlideSizeB4JISPaper**                   |
| **ppSlideSizeB5ISOPaper**                   |
| **ppSlideSizeB5JISPaper**                   |
| **ppSlideSizeBanner**                       |
| **ppSlideSizeCustom**                       |
| **ppSlideSizeHagakiCard**                   |
| **ppSlideSizeLedgerPaper**                  |
| **ppSlideSizeLetterPaper**                  |
| **ppSlideSizeOnScreen**                     |
| **ppSlideSizeOverhead**                     |



## 示例


```JavaScript
/*本示例将活动演示文稿的幻灯片的大小设置为 ppSlideSizeOverhead。*/
function test() {
    ActivePresentation.PageSetup.SlideSize = ppSlideSizeOverhead
}
```


```JavaScript
/*本示例显示第一篇演示文稿的幻灯片大小是否为 ppSlideSizeCustom。*/
function test() {
    let pageSetup = Presentations.Item(1).PageSetup
    alert(pageSetup.SlideSize == ppSlideSizeCustom)
}
```
