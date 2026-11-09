# FormatCondition.Text

返回或设置一个 **String** 类型的值，该值指定条件格式规则所用的文本字符串。



## 语法

express.**Text**

express   一个代表 **FormatCondition** 对象的变量。

## 类型

string

## 说明


如果 **[Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatCondition/member/Type)** 属性不是设置为 **xlTextString** ，则忽略此属性。



## 示例


```JavaScript
/*本示例显示活动工作表上区域 A1:A10 中第一个条件格式所用的特定文本。*/
function test() {
    let formatCondition = ActiveSheet.Range("A1:A10").FormatConditions.Item(1)
    alert(formatCondition.Text)
}
```


```JavaScript
/*本示例设置区域 A1:A10 中第一个条件格式所用的特定文本。*/
function test() {
    let formatCondition = Application.Range("A1:A10").FormatConditions.Item(1)
    formatCondition.Text = "1"
}
```
