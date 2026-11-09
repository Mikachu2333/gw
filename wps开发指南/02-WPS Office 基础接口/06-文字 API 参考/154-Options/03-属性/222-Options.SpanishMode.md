# Options.SpanishMode

返回或设置西班牙语拼写器的模式。可读/写 **[WdSpanishSpeller](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdSpanishSpeller)** 。



## 语法

express.**SpanishMode**

express   一个代表 **Options** 对象的变量。

## 类型

WdSpanishSpeller

## 示例


```JavaScript
/*本示例设置西班牙语拼写器的模式为 wdSpanishTuteoOnly。*/
function test() {
    Options.SpanishMode = wdSpanishTuteoOnly
}
```


```JavaScript
/*本示例显示西班牙语拼写器的模式。*/
function test() {
    switch (Options.SpanishMode) {
        case wdSpanishTuteoOnly:
            alert("西班牙语拼写检查器仅识别 tuteo 动词。")
            break
        case wdSpanishTuteoAndVoseo:
            alert("西班牙语拼写检查器可识别 tuteo 和 voseo 动词。")
            break
        case wdSpanishVoseoOnly:
            alert("西班牙语拼写检查器仅识别 voseo 动词。")
            break
    }
}
```
