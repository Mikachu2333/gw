# SmartArtColors 对象

 **[SmartArtColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtColor/obj)** 对象的集合。

## 说明


模拟 WPS Office 功能区用户界面中“SmartArt 工具”上“设计”组内的“更改颜色”命令上的选项。


## 示例


```JavaScript
/*本示例运行于演示组件，设置活动演示文稿上第一张幻灯片的第一个 SmartArt 图表的配色方案。*/
function test() {
    ActivePresentation.Slides.Item(1).Shapes.Item(1).SmartArt.Color = Application.SmartArtColors.Item(1)
}
```


```JavaScript
/*本示例运行于各组件，显示第五个 SmartArt 图表配色方案的名称。*/
function test() {
    alert(Application.SmartArtColors.Item(5).Name)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtColors/member/Item) | 检索位于指定索引处或具有指定的唯一 Id 的 **[SmartArtColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtColor/obj)** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtColors/member/Application) | 获取一个 **Application** 对象，该对象代表 **SmartArtColors** 对象的容器应用程序。只读。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtColors/member/Count) | 检索包含在 **[SmartArtColors](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtColors/obj)** 集合中的 **SmartArtColor** 对象数的计数。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtColors/member/Creator) | 获取一个 32 位整数，该整数指示在其中创建了 **SmartArtColors** 对象的应用程序。只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtColors/member/Parent) | 返回调用对象。只读。 |