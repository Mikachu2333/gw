# Master.Height

返回指定对象的高度（以磅为单位）。只读。



## 语法

express.**Height**

express   一个代表 **Master** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例显示活动演示文稿第一张幻灯片的幻灯片母版高度。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    alert(slide.Master.Height + " 磅")
}
```


```JavaScript
/*本示例显示活动窗口选定的所有幻灯片的幻灯片母版高度。*/
function test() {
    let slideRange = ActiveWindow.Selection.SlideRange
    alert(slideRange.Master.Height + " 磅")
}
```
