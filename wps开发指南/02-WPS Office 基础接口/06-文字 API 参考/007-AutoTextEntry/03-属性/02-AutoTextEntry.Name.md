# AutoTextEntry.Name

返回或设置指定对象的名称。 **String** 类型，可读写。



## 语法

express.**Name**

express   一个代表 **AutoTextEntry** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示 Normal 模板中第一个“自动图文集”条目的名称。*/
function test() {
    alert(Application.NormalTemplate.AutoTextEntries.Item(1).Name)
}
```


```JavaScript
/*本示例设置 Normal 模板中第二个“自动图文集”条目的名称。*/
function test() {
    Application.NormalTemplate.AutoTextEntries.Item(2).Name = "Test2"
}
```
