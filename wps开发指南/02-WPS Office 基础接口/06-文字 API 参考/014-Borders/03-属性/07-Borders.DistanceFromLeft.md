# Borders.DistanceFromLeft

返回或设置文本与左边框的距离（以磅为单位）。 **Long** 类型，可读写。



## 语法

express.**DistanceFromLeft**

express   一个代表 **Borders** 对象的变量。

## 类型

number（int4 精度）

## 说明


将该属性与页边框结合使用，可设置文本与页面左边框之间的距离，或页面左边缘与页面左边框之间的距离。这个距离是根据 **[DistanceFrom](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Borders/member/DistanceFrom)** 属性的值测量的。



## 示例


```JavaScript
/*本示例为活动文档中的每个图文框添加边框，并且将图文框与边框的距离设置为 5 磅。*/
function test() {
    for (let i = 1; i <= ActiveDocument.Frames.Count; i++) {
        let borders = ActiveDocument.Frames.Item(i).Borders
        borders.Enable = msoTrue
        borders.DistanceFromLeft = 5
        borders.DistanceFromRight = 5
        borders.DistanceFromTop = 5
        borders.DistanceFromBottom = 5
    }
}
```


```JavaScript
/*本示例为活动文档的第一个段落添加边框，并将文本与左边框的距离设置为 3 磅*/
function test() {
    let borders = ActiveDocument.Paragraphs.Item(1).Borders
    borders.Enable = msoTrue
    borders.DistanceFromLeft = 3
}
```
