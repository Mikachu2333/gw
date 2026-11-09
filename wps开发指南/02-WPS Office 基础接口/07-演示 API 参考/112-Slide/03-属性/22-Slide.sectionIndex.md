# Slide.sectionIndex

返回在 **Slide** 范围中选择的节的索引。只读。



## 语法

express.**sectionIndex**

express   一个代表 **Slide** 对象的变量。

## 类型

number（int 精度）

## 示例


```JavaScript
/*本示例显示活动演示文稿第二张幻灯片选择的节的索引。*/
function test() {
    let slide = ActivePresentation.Slides.Item(2)
    alert(slide.sectionIndex)
}
```


```JavaScript
/*本示例判断如果活动演示文稿第二张幻灯片选择节的索引为 2，则删除第二张幻灯片的第一个形状。*/
function test() {
    let slide = ActivePresentation.Slides.Item(2)
    if (slide.sectionIndex == 2) {
        slide.Shapes.Item(1).Delete()
    }
}
```
