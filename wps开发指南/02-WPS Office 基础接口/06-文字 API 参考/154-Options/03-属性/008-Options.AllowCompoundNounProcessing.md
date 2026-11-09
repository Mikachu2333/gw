# Options.AllowCompoundNounProcessing

如果 WPS 在朝鲜语文档中执行拼写检查时将忽略复合名词，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**AllowCompoundNounProcessing**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 说明


有关在 WPS 中使用亚洲语言的详细信息，请参阅 WPS 中关于亚洲语言的功能。



## 示例


```JavaScript
/*本示例询问用户：WPS 在朝鲜语文档中执行拼写检查时，是否忽略复合名词。*/
function test() {
    if (!Options.AllowCompoundNounProcessing) {
        let response = MsgBox("Do you want to ignore compound nouns when checking spelling?", jsYesNo)
        if (response == jsResultYes) {
            Options.AllowCompoundNounProcessing = true
            MsgBox("Compound nouns will be ignored!")
        }
    }
}
```


```JavaScript
/*本示例判断在朝鲜语文档中执行拼写检查时，是否忽略复合名词并通知用户。*/
function test() {
    if (Options.AllowClickAndTypeMouse) {
        alert("忽略复合名词")
    } else {
        alert("不忽略复合名词")
    }
}
```
