# Design.Index

返回 **Long** 类型值，该值代表设计的索引号。只读。



## 语法

express.**Index**

express   一个代表 **Design** 对象的变量。

## 类型

number（int 精度）

## 示例


```JavaScript
/*本示例显示活动演示文稿第一张幻灯片设计模板的索引号。*/
function test() {
    let design = Application.ActivePresentation.Slides.Item(1).Design
    alert(design.Index)
}
```


```JavaScript
/*本示例显示第一篇演示文稿的幻灯片母版中设计模板的索引号。*/
function test() {
    let design = Presentations.Item(1).SlideMaster.Design
    alert(design.Index)
}
```
