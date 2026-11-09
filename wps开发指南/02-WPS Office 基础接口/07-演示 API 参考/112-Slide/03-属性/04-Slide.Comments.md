# Slide.Comments

返回一个 **Comments** 对象，该对象代表批注的集合。



## 语法

express.**Comments**

express   一个代表 **Slide** 对象的变量。

## 类型

Comments

## 示例


```JavaScript
/*本示例在活动演示文稿的第一张幻灯片中添加一个批注。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    slide.Comments.Add(0, 0, "John Doe", "jd", "Please check this spelling again before the next draft.")
}
```


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片中批注的数量。*/
function test() {
    alert(ActivePresentation.Slides.Item(1).Comments.Count)
}
```
