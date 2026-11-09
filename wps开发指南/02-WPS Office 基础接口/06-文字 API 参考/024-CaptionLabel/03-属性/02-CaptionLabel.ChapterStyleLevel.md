# CaptionLabel.ChapterStyleLevel

当指定题注标签包含章节号时，返回或设置用来标记新章节的标题样式。 **Long** 类型，可读写。



## 语法

express.**ChapterStyleLevel**

express   一个代表 **CaptionLabel** 对象的变量。

## 类型

number（int4 精度）

## 说明


数字 1 对应于“标题 1”，数字 2 对应于“标题 2”，以此类推。 **[IncludeChapterNumber](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/CaptionLabel/member/IncludeChapterNumber)** 属性必须设置为 **True** ，题注标签才能包含章节号。



## 示例


```JavaScript
/*本示例设置名为“example”的题注标签，以使其包含章节号。章节号取自格式设置为"标题 2"样式的段落。*/
function test() {
    let captionLabel = Application.CaptionLabels.Item("example")
    captionLabel.IncludeChapterNumber = true
    captionLabel.ChapterStyleLevel = 2
}
```


```JavaScript
/*本示例显示第二个题注标签包含章节号时标记新章节的标题样式。*/
function test() {
    let captionLabel = Application.CaptionLabels.Item(2)
    captionLabel.IncludeChapterNumber = true
    alert(captionLabel.ChapterStyleLevel)
}
```
