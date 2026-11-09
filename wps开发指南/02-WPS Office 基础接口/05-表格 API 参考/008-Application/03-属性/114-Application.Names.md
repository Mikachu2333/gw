# Application.Names

返回一个 **[Names](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Names/obj)** 集合，该集合代表活动工作簿中的所有名称。只读 **[Names](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Names/obj)** 对象。



## 语法

express.**Names**

express   一个代表 **Application** 对象的变量。

## 类型

Names

## 说明


在不使用对象识别符的情况下使用此属性等效于使用 `ActiveWorkbook.Names`。



## 示例


```JavaScript
/*本示显示 Names 集合中对象的数量。*/
function test() {
    alert("Names 集合中对象的数量为：" + Application.Names.Count)
}
```


```JavaScript
/*此示例为活动工作簿中 Sheet1 上的区域 A1:D3 定义一个新名称。*/
function test() {
    alert("定义的新名称为：" +  Application.ActiveWorkbook.Names.Add("tempRange", "=Sheet1!$A$1:$D$3").Name)
}
```
