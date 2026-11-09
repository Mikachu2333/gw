# Range.Next

返回一个代表下一个单元格的 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象。



## 语法

express.**Next**

express   一个代表 **Range** 对象的变量。

## 类型

Range

## 说明


如果该对象为区域，则此属性会模拟 Tab 键，但会返回下一个单元格，而不选中它。

在处于保护状态的工作表中，此属性返回下一个未锁定单元格。在未保护的工作表中，此属性总是返回紧靠指定单元格右边的单元格。



## 示例


```JavaScript
/*本示例将 A1 单元格的下一个单元格的值设置为 b1，并显示 A1:C5 单元格区域的下一个值*/
function test() {
    Range("A1").Next.Value2 = "b1"
    alert(Range("A1:C5").Next.Value2)
}
```


```JavaScript
/*本示例将 A2、C3 单元格取消锁定，显示保护状态下 A2 单元格的下一个可编辑单元格的地址*/
function test() {
    Range("A2").Locked = false
    Range("C3").Locked = false
    ActiveSheet.Protect()
    alert(Range("A2").Next.Address())
}
```
