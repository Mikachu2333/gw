# TableStyleElement.HasFormat

返回表样式元素是否具有应用到指定元素的格式设置。只读 **Boolean** 类型。



## 语法

express.**HasFormat**

express   一个代表 **TableStyleElement** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示活动工作表上第一张列表中标题行样式元素是否具有格式设置。*/
function test() {
    let listObj = ActiveSheet.ListObjects.Item(1)
    alert(listObj.TableStyle.TableStyleElements.Item(xlHeaderRow).HasFormat)
}
```


```JavaScript
/*本示例显示第一张工作表上第一张列表中总计行样式元素是否具有格式设置。*/
function test() {
    let listObj = Application.Worksheets.Item(1).ListObjects.Item(1)
    alert(listObj.TableStyle.TableStyleElements.Item(xlGrandTotalRow).HasFormat)
}
```
