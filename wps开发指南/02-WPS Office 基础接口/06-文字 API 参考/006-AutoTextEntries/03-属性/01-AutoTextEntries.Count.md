# AutoTextEntries.Count

返回 **[AutoTextEntries](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AutoTextEntries/obj)** 集合中的项目数。 **Long** 类型，只读。



## 语法

express.**Count**

express   一个代表 **AutoTextEntries** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示 Normal 模板中自动图文集条目的数量。*/
function test() {
    alert(Application.NormalTemplate.AutoTextEntries.Count)
}
```
