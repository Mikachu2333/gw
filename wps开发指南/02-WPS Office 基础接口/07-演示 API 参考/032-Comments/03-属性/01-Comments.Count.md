# Comments.Count

返回指定集合中的对象数。只读。



## 语法

express.**Count**

express   一个代表 **Comments** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动演示文稿第一张幻灯片的批注的数量。*/
function test() {
    let comments = ActivePresentation.Slides.Item(1).Comments
    alert(comments.Count)
}
```
