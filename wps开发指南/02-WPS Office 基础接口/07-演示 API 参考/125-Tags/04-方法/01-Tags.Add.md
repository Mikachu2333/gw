# Tags.Add

向对象的 **[Tags](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Tags/obj)** 集合中添加标记。



## 语法

express.**Add(Name, Value)**

express   一个代表 **Tags** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Name | 必选 | string | 标记的名称。 |
| Value | 必选 | string | 标记的值。 |

## 返回值

void

## 示例


```JavaScript
/*本示例向活动演示文稿的第一张幻灯片中添加标记。*/
function test() {
    let tags = ActivePresentation.Slides.Item(1).Tags
    tags.Add("example1", "test1")
    tags.Add("example2", "test2")
}
```


```JavaScript
/*本示例向活动窗口所选的第一张幻灯片中添加标记，并显示该幻灯片中标记的数量。*/
function test() {
    let tags = ActiveWindow.Selection.SlideRange.Item(1).Tags
    tags.Add("example", "test")
    alert(tags.Count)
}
```
