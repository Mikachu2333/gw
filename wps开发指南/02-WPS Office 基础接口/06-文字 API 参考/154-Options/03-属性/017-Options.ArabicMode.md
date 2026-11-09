# Options.ArabicMode

返回或设置阿拉伯语的拼写检查模式。 **[WdAraSpeller](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdAraSpeller)** 类型，可读写。



## 语法

express.**ArabicMode**

express   一个代表 **Options** 对象的变量。

## 类型

WdAraSpeller

## 示例


```JavaScript
/*本示例设置拼写检查忽略阿拉伯语中关于单词以 alef hamza 开头的拼写规则。*/
function test() {
    Options.ArabicMode = wdInitialAlef
}
```


```JavaScript
/*本示例显示为阿拉伯语拼写检查时指定的拼写规则。*/
function test() {
    switch (Options.ArabicMode) {
        case wdNone:
            alert("忽略有关以字母 yaa 结尾或以 alef hamza 开头的阿拉伯语单词拼写规则。")
            break
        case wdInitialAlef:
            alert("使用有关以 alef hamza 开头的阿拉伯语单词拼写规则。")
            break
        case wdFinalYaa:
            alert("使用有关以字母 yaa 结尾的阿拉伯语单词拼写规则。")
            break
        case wdBoth:
            alert("使用有关以字母 yaa 结尾和以 alef hamza 开头的阿拉伯语单词拼写规则。")
            break
    }
}
```
