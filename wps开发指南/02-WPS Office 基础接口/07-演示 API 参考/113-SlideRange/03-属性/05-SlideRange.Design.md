# SlideRange.Design

返回一个 **Design** 对象，该对象表示一个设计。



## 语法

express.**Design**

express   一个代表 **SlideRange** 对象的变量。

## 类型

Design

## 示例


```JavaScript
/*以下示例锁定并保护第一篇演示文稿的第一张幻灯片对应的设计模板。*/
function test() {
    let slides = Presentations.Item(1).Slides
    let design = slides.Range(1).Design
    design.Preserved = msoTrue
}
```


```JavaScript
/*本示例显示活动演示文稿第一个窗口中选定的幻灯片设计模板的名称。*/
function test() {
    let slideRange = ActivePresentation.Windows.Item(1).Selection.SlideRange
    alert(slideRange.Design.Name)
}
```
