# Tags.Item

从指定的 **[Tags](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Tags/obj)** 集合中返回单个标记。



## 语法

express.**Item(Name)**

express   一个代表 **Tags** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Name | 必选 | string | 集合中要返回的单个标记的名称。 |

## 返回值

String

## 示例


```JavaScript
/*此示例判断如果活动演示文稿的幻灯片中名为“example”的标记的值不为“east”，则隐藏该幻灯片。*/
function test() {
    for (let i = 1; i <= ActivePresentation.Slides.Count; i++) {
        let slide = ActivePresentation.Slides.Item(i)
        if (slide.Tags.Item("example") != "east") {
            slide.SlideShowTransition.Hidden = msoTrue
        }
    }
}
```


```JavaScript
/*本示例显示活动窗口所选的第一张幻灯片中名为“example1”的标记的值字符串。*/
function test() {
    let tags = ActiveWindow.Selection.SlideRange.Item(1).Tags
    alert(tags.Item("example1"))
}
```
