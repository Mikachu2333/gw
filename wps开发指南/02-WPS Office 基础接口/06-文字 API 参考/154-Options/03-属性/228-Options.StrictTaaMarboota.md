# Options.StrictTaaMarboota

如果拼写检查器使用拼写规则来标记以 haa（而不是 taa marboota）结尾的阿拉伯语单词，则该属性值为 **True** 。可读/写。



## 语法

express.**StrictTaaMarboota**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置拼写检查器使用拼写规则来标记以 haa（而不是 taa marboota）结尾的阿拉伯语单词。*/
function test() {
    Application.Options.StrictTaaMarboota = true
}
```


```JavaScript
/*本示例判断拼写检查器是否使用拼写规则来标记以 haa（而不是 taa marboota）结尾的阿拉伯语单词，并通知用户。*/
function test() {
    if (Application.Options.StrictTaaMarboota) {
        alert("拼写检查器使用拼写规则来标记以 haa（而不是 taa marboota）结尾的阿拉伯语单词")
    } else {
        alert("拼写检查器未使用拼写规则来标记以 haa（而不是 taa marboota）结尾的阿拉伯语单词")
    }
}
```
