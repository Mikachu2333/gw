# Names.Item

从 **Names** 集合返回一个 **[Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Name/obj)** 对象。



## 语法

express.**Item(Index, IndexLocal, RefersTo)**

express   一个代表 **Names** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 可选 | any | 要返回的定义名称的名称或编号。 |
| IndexLocal | 可选 | any | 以用户语言表示的定义名称的名称。如果使用该参数，将不转换名称。 |
| RefersTo | 可选 | any | 名称引用的内容。使用该参数以引用的内容标识名称。 |

## 返回值

Name

## 说明


必须只指定这三个参数中的一个。



## 示例


```JavaScript
/*此示例将活动工作簿中的 mySortRange 名称删除。*/
function test() {
    Application.ActiveWorkbook.Names.Item("mySortRange").Delete()
}
```


```JavaScript
/*本示例显示 Sheet1 中索引为1的名称是否可见。*/
function test() {
    alert(Application.Worksheets.Item("Sheet1").Names.Item(1).Visible)
}
```
