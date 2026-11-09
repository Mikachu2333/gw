# Fields.Item

返回集合中的单个 **[Field](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Field/obj)** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **Fields** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int4 精度） | 要返回的单个对象。可以是代表单个对象序号位置的 Long 类型值。 |

## 返回值

Field

## 示例


```JavaScript
/*本示例选中活动文档中第二个域。*/
function test() {
    ActiveDocument.Fields.Item(2).Select()
}
```


```JavaScript
/*本示例显示活动文档中第一个域的结果文本。*/
function test() {
    alert(Application.ActiveDocument.Fields.Item(1).Result.Text)
}
```
