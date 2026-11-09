# ContentControls.Item

返回 **[ContentControl](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControl/obj)** 对象，该对象表示文档中的内容控件集合内的指定内容控件。



## 语法

express.**Item(Index)**

express   一个代表 **ContentControls** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 指定要返回的内容控件的序号位置。 |

## 返回值

ContentControl

## 示例


```JavaScript
/*本示例显示活动文档上第一个内容控件的类型是否为wdContentControlComboBox。*/
function test() {
    let contentControl = ActiveDocument.ContentControls.Item(1)
    alert(contentControl.Type == wdContentControlComboBox)
}
```


```JavaScript
/*本示例设置第一个文档上第二个内容控件的颜色。*/
function test() {
    let contentControl = Documents.Item(1).ContentControls.Item(2)
    contentControl.Color = wdColorBlue
}
```
