# Application.SmartTagTypes

返回一个 **SmartTagTypes** 集合，代表 WPS 中所安装的智能标记组件的智能标记类型。




## 语法

express.**SmartTagTypes**

express   一个代表 **Application** 对象的变量。

## 类型

SmartTagTypes

## 说明


智能标记类型是智能标记组件中的单个项目。智能标记组件可以包含多个智能标记类型。例如，安装在英文系统上的 Address (English) 智能标记列表默认情况下包含 name 智能标记类型、street 智能标记类型和 city 智能标记类型，等等。 **SmartTagTypes** 集合包含用户计算机上安装的所有组件的所有智能标记类型。




## 示例


```JavaScript
/*下列示例循环遍历 SmartTagTypes 集合。如果 SmartTagType 是 Address 智能标记，则重新加载该智能标记的识别器和处理程序。*/
function GetSmartTagsTypes(){
    let strSmartTagType
    let objSmartTagType = Application.SmartTagTypes
    strSmartTagType = "urn:schemas-microsoft-com" + ":office:smarttags#address"
    for(let i=1; i<=objSmartTagType.Count; i++){
        if(objSmartTagType == strSmartTagType){
            objSmartTagType.Item(i).smartTagActions.ReloadActions()
            objSmartTagType.Item(i).SmartTagRecognizers.ReloadRecognizers()
        }
    }
}
```
