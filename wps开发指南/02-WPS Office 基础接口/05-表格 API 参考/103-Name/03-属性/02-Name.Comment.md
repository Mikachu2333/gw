# Name.Comment

返回或设置与名称关联的批注。可读/写 **String** 类型。



## 语法

express.**Comment**

express   一个代表 **Name** 对象的变量。

## 类型

string

## 说明


批注文本不能超过 255 个字符。



## 示例


```JavaScript
/*本示例在活动工作簿中为名称“test”添加备注。*/
function test() {
    ActiveWorkbook.Names.Item("test").Comment = "名称备注"
}
```


```JavaScript
/*本示例显示 Sheet1 中名称为“test1”的备注。*/
function test() {
    let name = Application.Worksheets.Item("Sheet1").Names.Item("test1")
    alert(name.Comment)
}
```
