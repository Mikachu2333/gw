# MediaFormat 对象

包含可访问并控制音频和视频媒体的方法和属性。


## 示例


```JavaScript
/*本示例显示活动演示文稿第一张幻灯片的第一个媒体的总长度（以毫秒为单位）。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    alert(shape.MediaFormat.Length)
}
```


```JavaScript
/*本示例设置活动窗口选定的第一个媒体的淡入持续时间（毫秒）。*/
function test() {
    let shape = ActiveWindow.Selection.ShapeRange.Item(1)
    shape.MediaFormat.FadeInDuration = 150
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [EndPoint](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/MediaFormat/member/EndPoint) | 获取或设置媒体的剪裁区域终点的时间。可读/写。 |
| [FadeInDuration](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/MediaFormat/member/FadeInDuration) | 获取或设置媒体的淡入持续时间（毫秒）。可读/写。 |
| [FadeOutDuration](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/MediaFormat/member/FadeOutDuration) | 获取或设置媒体的淡出持续时间（毫秒）。可读/写。 |
| [IsLinked](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/MediaFormat/member/IsLinked) | 返回是否链接媒体文件。只读。 |
| [Length](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/MediaFormat/member/Length) | 返回媒体的总长度（以毫秒为单位）。只读。 |
| [StartPoint](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/MediaFormat/member/StartPoint) | 获取或设置剪裁区域的起点。可读/写。 |
| [Volume](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/MediaFormat/member/Volume) | 获取或设置媒体的音量。可读/写。 |