# Master.Design

返回代表设计的 **Design** 对象。



## 语法

express.**Design**

express   一个代表 **Master** 对象的变量。

## 类型

Design

## 示例


```JavaScript
/*本示例删除活动演示文稿的幻灯片母版的设计模板。*/
function test() {
    ActivePresentation.SlideMaster.Design.Delete()
}
```


```JavaScript
/*本示例显示活动窗口选定的第一张幻灯片的幻灯片母版的设计名称。*/
function test() {
    let slide = ActiveWindow.Selection.SlideRange.Item(1)
    alert(slide.Master.Design.Name)
}
```
