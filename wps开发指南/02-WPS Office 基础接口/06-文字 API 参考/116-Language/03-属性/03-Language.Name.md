# Language.Name

返回指定对象的名称。 **String** 类型，只读。



## 语法

express.**Name**

express   一个代表 **Language** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示简体中文的名称。*/
function test() {
    alert(Application.Languages.Item(wdSimplifiedChinese).Name)
}
```


```JavaScript
/*本示例显示数组“arr”中语言对象的名称。*/
function test() {
    let arr = [wdSimplifiedChinese, wdChineseMacaoSAR, wdEnglishUS]
    for (let i = 0; i < arr.length; i++) {
        alert(Application.Languages.Item(arr[i]).Name)
    }
}
```
