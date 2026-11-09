# Slide.Hyperlinks

返回一个代表指定幻灯片中的所有超链接的 **HyperLinks** 集合。只读。



## 语法

express.**Hyperlinks**

express   一个代表 **Slide** 对象的变量。

## 类型

Hyperlinks

## 示例


```JavaScript
/*本示例允许用户更新当前演示文稿中所有超链接中已过时的 Internet 地址。*/
function test() {
    let oldAddr = InputBox("Old Internet address")
    let newAddr = InputBox("New Internet address")
    let Slides = ActivePresentation.Slides
    for (let i = Slides.Count; i > 0; i--) {
        for (let j = Slides.Item(i).Hyperlinks.Count; j > 0; j--) {
            if (Slides.Item(i).Hyperlinks.Item(j).Address.toLowerCase() == oldAddr) {
                Slides.Item(i).Hyperlinks.Item(j).Address = newAddr
            }
        }
    }
}
```


```JavaScript
/*本示例显示活动演示文稿中第一张幻灯片的超链接的数量。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    alert(slide.Hyperlinks.Count)
}
```
