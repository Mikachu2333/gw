# Application.FileConverters

返回一个 **FileConverters** 集合，该集合代表可用于 WPS 的所有文件转换器。只读。




## 语法

express.**FileConverters**

express   一个代表 **Application** 对象的变量。

## 类型

FileConverters

## 说明


有关返回集合中单个成员的信息，请参阅 返回集合中的对象。




## 示例


```JavaScript
/*本示例显示一条消息，以表明 FileConverters 集合的第三个转换器能否用来保存文件。*/
function test() {
    if (Application.FileConverters.Item(3).CanSave == true) {
        alert(Application.FileConverters.Item(3).FormatName + " can save files")
    }
    else {
        alert(Application.FileConverters.Item(3).FormatName + " cannot save files")
    }
}


```


```JavaScript
/*本示例显示最后一个文件转换器的名称。*/
function test() {
    let fcTemp = Application.FileConverters.Item(Application.FileConverters.Count)
    alert("The file name extensions for " + fcTemp.FormatName + " files are: " + fcTemp.Extensions)
}

```
