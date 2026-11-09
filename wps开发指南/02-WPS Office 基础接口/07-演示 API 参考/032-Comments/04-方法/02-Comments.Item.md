# Comments.Item

从指定的 **Comments** 集合中返回单个 **Comment** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **Comments** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int 精度） | 集合中要返回的单个 **Comment** 对象的索引号。 |

## 返回值

Comment

## 示例


```JavaScript
/*本示例显示活动演示文稿第一张幻灯片的第一个批注的作者和内容。*/
function test() {
    let comments = ActivePresentation.Slides.Item(1).Comments
    alert(`批注作者：${comments.Item(1).Author}\n批注内容：${comments.Item(1).Text}`)
}
```


```JavaScript
/*本示例显示活动窗口所选的第一张幻灯片的最新批注的创建时间。*/
function test() {
    let comments = ActiveWindow.Selection.SlideRange.Item(1).Comments
    alert(comments.Item(comments.Count).DateTime)
}
```
