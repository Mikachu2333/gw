# Application.ClipboardFormats

以数字数组的形式返回剪贴板中当前的格式。可用数组中每个元素与“备注”部分所述的适当常量相比较，以判断剪贴板中是否包含特定的格式。 **Variant** 类型，只读。



## 语法

express.**ClipboardFormats(Index)**

express   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 可选 | any | 指明要返回的数组元素。若省略此参数，该属性返回当前剪贴板上所有格式的数组。有关详细信息，请参阅“备注”部分。 |

## 返回值

any

## 说明


该属性返回数值数组。可用数组中每个元素与 **[XlClipboardFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlClipboardFormat)** 常量之一相比较，以确定剪贴板中是否包含特定的格式。



## 示例


```JavaScript
/*本示例判断如果剪贴板中包含 RTF 对象，则显示一消息框。可从 WPS 文档中复制文本以创建 RTF 对象。*/
function test() {
    let formats = Application.ClipboardFormats()
    for (let i = 0; i <= formats.length; i++) {
        if (Application.ClipboardFormats(i) == xlClipboardFormatRTF) {
            alert("Clipboard contains rich text")
        }
    }
}
```


```JavaScript
/*本示例显示剪贴板中数字数组的第四个元素的格式是否为xlClipboardFormatBitmap。*/
function test() {
    alert(Application.ClipboardFormats(4) == xlClipboardFormatBitmap)
}
```
