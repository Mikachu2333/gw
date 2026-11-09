# Slide.Design

返回代表设计的 **Design** 对象。



## 语法

express.**Design**

express   一个代表 **Slide** 对象的变量。

## 类型

Design

## 示例


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片的设计模板名称。*/
function test() {
    let slides = ActivePresentation.Slides
    alert(slides.Item(1).Design.Name)
}
```


```JavaScript
/*本示例将活动演示文稿中第一张幻灯片设置为保留设计母版以免更改。*/
function test() {
    ActivePresentation.Slides.Item(1).Design.Preserved = msoTrue
}
```
