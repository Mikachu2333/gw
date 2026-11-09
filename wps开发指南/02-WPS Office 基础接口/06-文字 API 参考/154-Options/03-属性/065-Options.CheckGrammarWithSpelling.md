# Options.CheckGrammarWithSpelling

如果 WPS 在检查拼写的同时也检查语法，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**CheckGrammarWithSpelling**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 说明


当使用 **“审阅”** 选项卡中的 **“拼写检查”** 命令检查拼写时，可用本属性控制 WPS 是否同时检查语法。

若要通过 JavaScript 过程检查拼写或语法，可用 **[CheckSpelling](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/CheckSpelling)** 方法只检查拼写，而用 **[CheckGrammar](#TODO)** 方法同时检查拼写和语法。



## 示例


```JavaScript
/*本示例判断如果在检查拼写的同时也检查语法，则如下代码会检查活动文档的拼写和语法；否则只检查拼写。*/
function test() {
    if (Options.CheckGrammarWithSpelling) {
        ActiveDocument.CheckGrammar()
    } else {
        ActiveDocument.CheckSpelling()
    }
}
```


```JavaScript
/*本示例设置 WPS 在检查拼写的同时也检查语法。*/
function test() {
    Options.CheckGrammarWithSpelling = true
}
```
