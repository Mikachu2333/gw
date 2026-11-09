# Hyperlink.Address

返回或设置目标文档的 Internet 地址（URL）。可读/写 **String** 类型。



## 语法

express.**Address**

express   一个代表 **Hyperlink** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例遍历活动演示文稿第一张幻灯片中所有超链接，以查找指向 WPS 网站的 URL。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    for (let i = 1; i <= slide.Hyperlinks.Count; i++) {
        if (slide.Hyperlinks.Item(i).Address == "https://www.wps.cn/") {
            alert("You have a link to the WPS Home Page")
        }
    }
}
```


```JavaScript
/*本示例设置活动窗口选定的第一个形状在幻灯片放映中，单击该形状时跳转到的网址。*/
function test() {
    let shape = ActiveWindow.Selection.ShapeRange.Item(1)
    shape.ActionSettings(ppMouseClick).Hyperlink.Address = "https://www.wps.com"
}
```
