# Tags.Delete

删除标记。



## 语法

express.**Delete(Name)**

express   一个代表 **Tags** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Name | 必选 | string | 要删除的标记的名称。 |

## 返回值

void

## 示例


```JavaScript
/*本示例删除活动演示文稿的第一张幻灯片中名为“example1”的标记。*/
function test() {
    let tags = ActivePresentation.Slides.Item(1).Tags
    tags.Delete("example1")
}
```


```JavaScript
/*本示例删除活动窗口所选的第一张幻灯片中名为“example”的标记，然后显示该幻灯片中标记的数量。*/
function test() {
    let tags = ActiveWindow.Selection.SlideRange.Item(1).Tags
    tags.Delete("example")
    alert(tags.Count)
}
```
