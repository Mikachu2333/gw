# Master.Hyperlinks

返回一个代表指定幻灯片中的所有超链接的 **[Hyperlinks](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Hyperlinks/obj)** 集合。只读。



## 语法

express.**Hyperlinks**

express   一个代表 **Master** 对象的变量。

## 类型

Hyperlinks

## 示例


```JavaScript
/*以下示例允许用户更新当前演示文稿幻灯片母版中所有超链接中已过时的 Internet 地址。*/
function test() {
    let oldAddress = InputBox("Old Internet address")
    let newAddress = InputBox("New Internet address")
    for (let i = 1; i <= ActivePresentation.Slides.Count; i++) {
        let hyperlinks = ActivePresentation.Slides.Item(i).Master.Hyperlinks
        for (let j = 1; j <= hyperlinks.Count; j++) {
            if (hyperlinks.Item(j).Address.toLowerCase() == oldAddress) {
                hyperlinks.Item(j).Address = newAddress
            }
        }
    }
}
```


```JavaScript
/*本示例删除活动演示文稿幻灯片母版的第一个超链接。*/
function test() {
    let master = ActivePresentation.SlideMaster
    master.Hyperlinks.Item(1).Delete()
}
```
