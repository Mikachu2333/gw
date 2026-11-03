namespace 公文排版.Properties {

    // 通过此类可以处理设置类的特定事件:
    //  在更改某个设置的值之前将引发 SettingChanging 事件。
    //  在更改某个设置的值之后将引发 PropertyChanged 事件。
    //  在加载设置值之后将引发 SettingsLoaded 事件。
    //  在保存设置值之前将引发 SettingsSaving 事件。
    internal sealed partial class Settings {

        /// <summary>
        /// 只把指定的用户设置恢复成默认值并保存。
        /// 不要用 Settings.Default.Reset() —— 它清空的是全部用户设置，
        /// 而界面上的确认语只说"恢复默认字体设置/页面设置"，
        /// 顺带被抹掉的还有 VBA 运行历史与脚本路径等无关内容。
        /// </summary>
        internal void ResetNames(params string[] names)
        {
            foreach (string name in names)
            {
                var prop = this.Properties[name];
                if (prop == null) continue;
                this[name] = prop.DefaultValue;
            }
            this.Save();
        }
    }
}
