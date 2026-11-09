# Hyperlinks.Item

从指定的 **Hyperlinks** 集合中返回单个 **Hyperlink** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **Hyperlinks** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int 精度） | 要返回的集合中单个 **Hyperlink** 对象的索引号。 |

## 返回值

Hyperlink

## 示例


```JavaScript
/*本示例将活动演示文稿第一张幻灯片中指向特定网址的超链接的电子邮件主题行设置为“test”。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    for (let i = 1; i <= slide.Hyperlinks.Count; i++) {
        if (slide.Hyperlinks.Item(i).Address == "https://www.wps.cn/") {
            slide.Hyperlinks.Item(i).EmailSubject = "test"
        }
    }
}
```


```JavaScript
/*本示例删除活动窗口选定的第一张幻灯片的第二个超链接。*/
function test() {
    let hyperlinks = ActiveWindow.Selection.SlideRange.Item(1).Hyperlinks
    hyperlinks.Item(2).Delete()
}
```
