# SlideRange.Hyperlinks

返回一个代表指定幻灯片中的所有超链接的 **[Hyperlinks](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Hyperlinks/obj)** 集合。只读。



## 语法

express.**Hyperlinks**

express   一个代表 **SlideRange** 对象的变量。

## 类型

Hyperlinks

## 示例


```JavaScript
/*以下示例允许用户更新当前演示文稿中所有超链接中已过时的 Internet 地址。*/
function test() {
    let oldAddr = ("Old Internet address")
    let newAddr = ("New Internet address")

    for (let s = 1; s <= Application.ActivePresentation.Slides.Count; s++) {
        for (let h = 1; h <= Application.ActivePresentation.Slides.Range(s).Hyperlinks.Count; h++) {
            if (Application.ActivePresentation.Slides.Range(s).Hyperlinks.Item(h).Address.toLowerCase() == oldAddr) {
                Application.ActivePresentation.Slides.Range(s).Hyperlinks.Item(h).Address = newAddr
            }
        }
    }
}
```


```JavaScript
/*本示例删除活动演示文稿第一个窗口中选定的幻灯片的第一个超链接。*/
function test() {
    let slideRange = ActivePresentation.Windows.Item(1).Selection.SlideRange
    slideRange.Hyperlinks.Item(1).Delete()
}
```
