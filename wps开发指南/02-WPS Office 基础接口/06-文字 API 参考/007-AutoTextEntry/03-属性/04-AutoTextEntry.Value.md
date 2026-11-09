# AutoTextEntry.Value

返回或设置“自动图文集”词条的值。 **String** 类型，可读写。



## 语法

express.**Value**

express   一个代表 **AutoTextEntry** 对象的变量。

## 类型

string

## 说明


设置 **Value** 属性仅返回对象值的前 255 个字符。



## 示例


```JavaScript
/*本示例显示 Normal 模板中第一个“自动图文集”条目的值。*/
function test() {
    alert(Application.NormalTemplate.AutoTextEntries.Item(1).Value)
}
```


```JavaScript
/*本示例设置 Normal 模板中第二个“自动图文集”条目的值。*/
function test() {
    Application.NormalTemplate.AutoTextEntries.Item(2).Value = "Hello World"
}
```
