# Template.Saved

如果自上次保存之后指定的模板未更改，则该属性值为 **True** 。如果关闭文档时 WPS 提示保存对文档所做的更改，则该属性值为 **False** 。 **Boolean** 类型，可读写。



## 语法

express.**Saved**

express   一个代表 **Template** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将 Normal 模板的状态设置为未更改。如果更改了 Normal 模板，则退出 WPS 时不保存所做的更改。*/
function test() {
    NormalTemplate.Saved = true
    Application.Quit()
}
```


```JavaScript
/*本示例判断Normal模板的Saved属性，并通知用户。*/
function test() {
    if (Application.NormalTemplate.Saved) {
        alert("自上次保存之后指定的模板未更改")
    } else {
        alert("关闭文档时 WPS 提示保存对文档所做的更改")
    }
}
```
