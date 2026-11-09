# Workbook.Save

保存对指定工作簿所做的更改。



## 语法

express.**Save()**

express   一个代表 **Workbook** 对象的变量。

## 返回值

void

## 说明


要打开工作簿文件，请使用 **Open** 方法。

要将工作簿标记为已保存，但不将其写入磁盘，请将它的 **Saved** 属性设置为 **True** 。

首次保存工作簿时，请使用 [SaveAs](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/SaveAs) 方法指定文件名。



## 示例


```JavaScript
/*本示例保存当前活动工作簿。*/
function test() {
    Application.ActiveWorkbook.Save()
}
```


```JavaScript
/*本示例保存所有打开的工作簿，然后关闭 ET。*/
function test() {
    for (let w = 1; w <= Application.Workbooks.Count; w++) {
        Application.Workbooks.Item(w).Save()
    }
    Application.Quit()
}
```
