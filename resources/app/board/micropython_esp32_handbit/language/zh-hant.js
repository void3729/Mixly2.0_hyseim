'use strict';

// goog.provide('Blockly.Msg.zh.hans');
goog.require('Blockly.Msg');
/**
*原生start
*/
Blockly.Msg.TEXT_IS_NUMBER_HELPURL = '';
Blockly.Msg.TEXT_IS_NUMBER_TOOLTIP = '';
Blockly.Msg.TEXT_IS_NUMBER_MESSAGE0 = '%1 %2';

Blockly.Msg.TEXT_IS_DIGIT = '是數字';
Blockly.Msg.TEXT_IS_ALPHA = '是字母';
Blockly.Msg.TEXT_IS_ALNUM = '是數字和字母的組合';

Blockly.Msg.TEXT_LIST_START = "初始化列表 [";
Blockly.Msg.TEXT_LIST_END = "]";
Blockly.Msg.TEXT_TUPLE_START = "初始化元組 (";
Blockly.Msg.TEXT_TUPLE_END = ")";
Blockly.Msg.TEXT_DICT_START = "初始化字典 {";
Blockly.Msg.TEXT_DICT_END = "}";
Blockly.Msg.TEXT_SET_START = "初始化集合 {";
Blockly.Msg.TEXT_SET_END = "}";
Blockly.Msg.TEXT_SET_HELPURL = "https://mpythonx.readthedocs.io/zh_CN/latest/index.html";
Blockly.Msg.ADD_COMMENT = "添加註釋";
Blockly.Msg.CHANGE_VALUE_TITLE = "更改值：";
Blockly.Msg.CLEAN_UP = "整理塊";
Blockly.Msg.COLLAPSE_ALL = "折疊塊";
Blockly.Msg.COLLAPSE_BLOCK = "折疊塊";
Blockly.Msg.COLOUR_BLEND_COLOUR1 = "顏色1";
Blockly.Msg.COLOUR_BLEND_COLOUR2 = "顏色2";
Blockly.Msg.COLOUR_BLEND_HELPURL = "http://meyerweb.com/eric/tools/color-blend/";  // untranslated
Blockly.Msg.COLOUR_BLEND_RATIO = "比例";
Blockly.Msg.COLOUR_BLEND_TITLE = "混合";
Blockly.Msg.COLOUR_BLEND_TOOLTIP = "用一個給定的比率(0.0-1.0)混合兩種顏色。";
Blockly.Msg.COLOUR_PICKER_HELPURL = "https://zh.wikipedia.org/wiki/顏色";
Blockly.Msg.COLOUR_PICKER_TOOLTIP = "從調色板中選擇一種顏色。";
Blockly.Msg.COLOUR_RANDOM_HELPURL = "http://randomcolour.com";  // untranslated
Blockly.Msg.COLOUR_RANDOM_TITLE = "隨機顏色";
Blockly.Msg.COLOUR_RANDOM_TOOLTIP = "隨機選擇一種顏色。";
Blockly.Msg.COLOUR_RGB_BLUE = "藍色";
Blockly.Msg.COLOUR_RGB_GREEN = "綠色";
Blockly.Msg.COLOUR_RGB_HELPURL = "http://www.december.com/html/spec/colorper.html";  // untranslated
Blockly.Msg.COLOUR_RGB_RED = "紅色";
Blockly.Msg.COLOUR_RGB_TITLE = "顏色";
Blockly.Msg.COLOUR_RGB_TOOLTIP = "通過指定紅色、綠色和藍色的量創建一種顏色。所有的值必須介於0和100之間。";
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_HELPURL = "https://github.com/google/blockly/wiki/Loops#loop-termination-blocks";  // untranslated
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK = "中斷循環";
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE = "繼續下一次循環";
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK = "中斷包含它的循環。";
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE = "跳過這個循環的剩余部分，並繼續下一次叠代。";
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_WARNING = "警告：此塊僅可用於在一個循環內。";
Blockly.Msg.CONTROLS_FOREACH_HELPURL = "https://github.com/google/blockly/wiki/Loops#for-each";  // untranslated
Blockly.Msg.CONTROLS_FOREACH_TITLE = "為每個項目 %1 在列表中 %2";
Blockly.Msg.CONTROLS_FOREACH_TOOLTIP = "遍歷每個列表中的項目，將變量“%1”設定到該項中，然後執行某些語句。";
Blockly.Msg.CONTROLS_FOR_HELPURL = "https://github.com/google/blockly/wiki/Loops#count-with";  // untranslated
Blockly.Msg.CONTROLS_FOR_TITLE = "使用 %1 從範圍 %2 到 %3 每隔 %4";
Blockly.Msg.CONTROLS_FOR_TOOLTIP = "從起始數到結尾數中取出變量“%1”的值，按指定的時間間隔，執行指定的塊。";
Blockly.Msg.CONTROLS_IF_ELSEIF_TOOLTIP = "在if語句塊中增加一個條件。";
Blockly.Msg.CONTROLS_IF_ELSE_TOOLTIP = "添加一個最終的，包括所有情況的節到if塊中。";
Blockly.Msg.CONTROLS_IF_HELPURL = "https://github.com/google/blockly/wiki/IfElse";  // untranslated
Blockly.Msg.TRY_EXCEPT_HELPURL = "https://mpythonx.readthedocs.io/zh_CN/latest/index.html";
Blockly.Msg.CONTROLS_IF_IF_TOOLTIP = "增加、刪除或重新排列各節來重新配置“if”塊。";
Blockly.Msg.CONTROLS_IF_MSG_ELSE = "否則";

Blockly.Msg.CONTROLS_IF_MSG_ELSEIF = "否則如果";

Blockly.Msg.TRY_EXCEPT_FINALLY = "finally";
Blockly.Msg.TRY_EXCEPT_FINALLY_TOOLTIP = "";
Blockly.Msg.TRY_EXCEPT_EXCEPT = "except";
Blockly.Msg.TRY_EXCEPT_EXCEPT_TOOLTIP = "";
Blockly.Msg.TRY_EXCEPT_TRY = "try";
Blockly.Msg.TRY_EXCEPT_TRY_TOOLTIP = "";

Blockly.Msg.CONTROLS_IF_MSG_IF = "如果";
Blockly.Msg.CONTROLS_IF_TOOLTIP_1 = "如果值為真，執行一些語句。";
Blockly.Msg.CONTROLS_IF_TOOLTIP_2 = "如果值為真，則執行第一塊語句。否則，則執行第二塊語句。";
Blockly.Msg.CONTROLS_IF_TOOLTIP_3 = "如果第一個值為真，則執行第一塊的語句。否則，如果第二個值為真，則執行第二塊的語句。";
Blockly.Msg.CONTROLS_IF_TOOLTIP_4 = "如果第一個值為真，則執行第一塊對語句。否則，如果第二個值為真，則執行語句的第二塊。如果沒有值為真，則執行最後一塊的語句。";
Blockly.Msg.CONTROLS_REPEAT_FOREVER = "一直重復";
Blockly.Msg.CONTROLS_REPEAT_FOREVER_TOOLTIP = "一直執行一些語句。";
Blockly.Msg.CONTROLS_REPEAT_HELPURL = "https://zh.wikipedia.org/wiki/For循環";
Blockly.Msg.CONTROLS_REPEAT_INPUT_DO = "";  // "執行";
Blockly.Msg.CONTROLS_REPEAT_TITLE = "重復 %1 次";
Blockly.Msg.CONTROLS_REPEAT_TOOLTIP = "多次執行一些語句。";
Blockly.Msg.CONTROLS_WHILEUNTIL_HELPURL = "https://github.com/google/blockly/wiki/Loops#repeat";  // untranslated
Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_UNTIL = "重復直到";
Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_WHILE = "重復當";
Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL = "只要值為假，執行一些語句。";
Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE = "只要值為真，執行一些語句。";
Blockly.Msg.DELETE_ALL_BLOCKS = "刪除所有%1塊嗎？";
Blockly.Msg.DELETE_BLOCK = "刪除塊";
Blockly.Msg.DELETE_VARIABLE = "刪除“%1”變量";
Blockly.Msg.DELETE_VARIABLE_CONFIRMATION = "刪除“%2”變量的%1種用途麽？";
Blockly.Msg.DELETE_X_BLOCKS = "刪除塊";//"刪除 %1 塊";
Blockly.Msg.DISABLE_BLOCK = "禁用塊";
Blockly.Msg.DUPLICATE_BLOCK = "復制";
Blockly.Msg.ENABLE_BLOCK = "啟用塊";
Blockly.Msg.EXPAND_ALL = "展開塊";
Blockly.Msg.EXPAND_BLOCK = "展開塊";
Blockly.Msg.EXTERNAL_INPUTS = "多行輸入";
Blockly.Msg.HELP = "幫助";
Blockly.Msg.INLINE_INPUTS = "單行輸入";
Blockly.Msg.LISTS_CREATE_EMPTY_HELPURL = "https://github.com/google/blockly/wiki/Lists#create-empty-list";
Blockly.Msg.LISTS_CREATE_EMPTY_TITLE = "創建空列表";
Blockly.Msg.TUPLE_CREATE_EMPTY_TITLE = "創建空元組";
Blockly.Msg.DICT_CREATE_EMPTY_TITLE = "創建空字典";
Blockly.Msg.SET_CREATE_EMPTY_TITLE = "創建空集合";
Blockly.Msg.LISTS_CREATE_EMPTY_TOOLTIP = "返回一個列表，長度為 0，不包含任何數據記錄";
Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD = "列表";
Blockly.Msg.TUPLE_CREATE_WITH_CONTAINER_TITLE_ADD = "元組";
Blockly.Msg.DICT_CREATE_WITH_CONTAINER_TITLE_ADD = "字典";
Blockly.Msg.SET_CREATE_WITH_CONTAINER_TITLE_ADD = "集合";
Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TOOLTIP = "增加、刪除或重新排列各部分以此重新配置這個列表塊。";
Blockly.Msg.TUPLE_CREATE_WITH_CONTAINER_TOOLTIP = "增加、刪除或重新排列各部分以此重新配置這個元組塊。";
Blockly.Msg.DICT_CREATE_WITH_CONTAINER_TOOLTIP = "增加、刪除或重新排列各部分以此重新配置這個字典塊。";
Blockly.Msg.SET_CREATE_WITH_CONTAINER_TOOLTIP = "增加、刪除或重新排列各部分以此重新配置這個集合塊。";
Blockly.Msg.LISTS_CREATE_WITH_HELPURL = "https://github.com/google/blockly/wiki/Lists#create-list-with";
/* Blockly.Msg.LISTS_CREATE_WITH_INPUT_WITH = "建立數組 使用"; */
Blockly.Msg.LISTS_CREATE_WITH_INPUT_WITH = "初始化列表";
Blockly.Msg.TUPLE_CREATE_WITH_INPUT_WITH = "初始化元組";
Blockly.Msg.DICT_CREATE_WITH_INPUT_WITH = "初始化字典";
Blockly.Msg.SET_CREATE_WITH_INPUT_WITH = "初始化集合";
Blockly.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP = "將一個項添加到列表中。";
Blockly.Msg.TUPLE_CREATE_WITH_ITEM_TOOLTIP = "將一個項添加到元組中。";
Blockly.Msg.DICT_CREATE_WITH_ITEM_TOOLTIP = "將一個項添加到字典中。";
Blockly.Msg.SET_CREATE_WITH_ITEM_TOOLTIP = "將一個項添加到集合中。";
Blockly.Msg.LISTS_CREATE_WITH_TOOLTIP = "建立一個具有任意數量項目的列表。";
Blockly.Msg.LISTS_GET_INDEX_FIRST = "第一";
// Blockly.Msg.LISTS_GET_INDEX_FROM_END = "倒數第#";
Blockly.Msg.LISTS_GET_INDEX_FROM_END = "倒數第";
// Blockly.Msg.LISTS_GET_INDEX_FROM_START = "#";
Blockly.Msg.LISTS_GET_INDEX_FROM_START = "第";
Blockly.Msg.LISTS_GET_INDEX_GET = "獲得";
Blockly.Msg.LISTS_GET_INDEX_GET_REMOVE = "取出並移除";
Blockly.Msg.LISTS_GET_INDEX_LAST = "最後";
Blockly.Msg.LISTS_GET_INDEX_RANDOM = "隨機";
Blockly.Msg.LISTS_GET_INDEX_REMOVE = "移除";

Blockly.Msg.LISTS_POP_HELPURL = "";
Blockly.Msg.LISTS_POP_TOOLTIP = "";
Blockly.Msg.LISTS_POP_MESSAGE0 = "在列表 %1 中移除 %2 項";

Blockly.Msg.LISTS_GET_INDEX_TAIL = "";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FIRST = "返回列表中的第一個項目。";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FROM = "返回在列表中的指定位置的項。";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_LAST = "返回列表中的最後一項。";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_RANDOM = "隨機返回列表中的一個項目。";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST = "移除並返回列表中的第一個項目。";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM = "移除並返回列表中的指定位置的項。";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST = "移除並返回列表中的最後一個項目。";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM = "移除並返回列表中的一個隨機項目中。";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST = "移除列表中的第一項";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM = "移除在列表中的指定位置的項。";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST = "移除列表中的最後一項";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM = "刪除列表中的一個隨機的項。";
Blockly.Msg.LISTS_GET_SUBLIST_END_FROM_END = "到倒數第#";
Blockly.Msg.LISTS_GET_SUBLIST_END_FROM_START = "到#";
Blockly.Msg.LISTS_GET_SUBLIST_END_LAST = "到最後";
Blockly.Msg.LISTS_GET_SUBLIST_HELPURL = "https://github.com/google/blockly/wiki/Lists#getting-a-sublist";  // untranslated
Blockly.Msg.LISTS_GET_SUBLIST_START_FIRST = "從頭獲得子列表";
Blockly.Msg.LISTS_GET_SUBLIST_START_FROM_END = "從倒數#取得子列表";
Blockly.Msg.LISTS_GET_SUBLIST_START_FROM_START = "從#取得子列表";
Blockly.Msg.LISTS_GET_SUBLIST_TAIL = "";
Blockly.Msg.LISTS_GET_SUBLIST_TOOLTIP = "復制列表中指定的部分。";
Blockly.Msg.LISTS_INDEX_FROM_END_TOOLTIP = "%1是最後一項。";
Blockly.Msg.LISTS_INDEX_FROM_START_TOOLTIP = "%1是第一個項目。";
Blockly.Msg.LISTS_INDEX_OF_FIRST = "找出第一個項出現";
Blockly.Msg.LISTS_INDEX_OF_HELPURL = "https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list";  // untranslated
Blockly.Msg.LISTS_INDEX_OF_LAST = "找出最後一個項出現";
/* Blockly.Msg.LISTS_INDEX_OF_TOOLTIP = "返回在列表中的第一/最後一個匹配項的索引值。如果找不到項目則返回%1。"; */
Blockly.Msg.LISTS_INDEX_OF_TOOLTIP = "返回在列表中的第一/最後一個匹配項的索引值。如果找不到項目則返回0";
Blockly.Msg.LISTS_INLIST = "在列表中";
Blockly.Msg.LISTS_ISEMPTY_HELPURL = "https://github.com/google/blockly/wiki/Lists#is-empty";  // untranslated
Blockly.Msg.LISTS_ISEMPTY_TITLE = "%1是空的";
Blockly.Msg.LISTS_ISEMPTY_TOOLTIP = "如果改列表為空，則返回真。";
Blockly.Msg.LISTS_LENGTH_HELPURL = "https://github.com/google/blockly/wiki/Lists#length-of";  // untranslated
Blockly.Msg.LISTS_LENGTH_TITLE = "%1的長度";
Blockly.Msg.LISTS_LENGTH_TOOLTIP = "返回列表的長度。";
Blockly.Msg.LISTS_REPEAT_HELPURL = "https://github.com/google/blockly/wiki/Lists#create-list-with";  // untranslated
/* Blockly.Msg.LISTS_REPEAT_TITLE = "建立列表使用項 %1 重復 %2 次"; */
Blockly.Msg.LISTS_REPEAT_TITLE = "建立列表 項 %1 重復 %2 次";
Blockly.Msg.LISTS_REPEAT_TOOLTIP = "建立包含指定重復次數的值的列表。";
Blockly.Msg.LISTS_SET_INDEX_HELPURL = "https://github.com/google/blockly/wiki/Lists#in-list--set";  // untranslated
Blockly.Msg.LISTS_SET_INDEX_INPUT_TO = "為";
Blockly.Msg.LISTS_SET_INDEX_INSERT = "插入在";
Blockly.Msg.LISTS_SET_INDEX_SET = "設置";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST = "在列表的起始處添加該項。";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM = "插入在列表中指定位置的項。";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_LAST = "將該項追加到列表的末尾。";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM = "在列表中隨機插入項。";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FIRST = "設置列表中的第一個項目。";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FROM = "設置在列表中指定位置的項。";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_LAST = "設置列表中的最後一項。";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_RANDOM = "設置列表中一個隨機的項目。";
Blockly.Msg.LISTS_SORT_HELPURL = "https://github.com/google/blockly/wiki/Lists#sorting-a-list";
Blockly.Msg.LISTS_SORT_ORDER_ASCENDING = "升序";
Blockly.Msg.LISTS_SORT_ORDER_DESCENDING = "降序";
Blockly.Msg.LISTS_SORT_TITLE = "排序%1 %2 %3";
Blockly.Msg.LISTS_SORT_TOOLTIP = "排序一個列表的拷貝。";
Blockly.Msg.LISTS_SORT_TYPE_IGNORECASE = "按字母排序，忽略大小寫";
Blockly.Msg.LISTS_SORT_TYPE_NUMERIC = "按數字排序";
Blockly.Msg.LISTS_SORT_TYPE_TEXT = "按字母排序";
Blockly.Msg.LISTS_SPLIT_HELPURL = "https://github.com/google/blockly/wiki/Lists#splitting-strings-and-joining-lists";
Blockly.Msg.LISTS_SPLIT_LIST_FROM_TEXT = "從文本制作列表";
Blockly.Msg.LISTS_SPLIT_TEXT_FROM_LIST = "從列表組合文本";
Blockly.Msg.LISTS_SPLIT_TOOLTIP_JOIN = "加入文本列表至一個文本，由分隔符分隔。";
Blockly.Msg.LISTS_SPLIT_TOOLTIP_SPLIT = "拆分文本到文本列表，按每個分隔符拆分。";
Blockly.Msg.LISTS_SPLIT_WITH_DELIMITER = "用分隔符";
Blockly.Msg.LOGIC_BOOLEAN_FALSE = "假";
Blockly.Msg.LOGIC_BOOLEAN_HELPURL = "https://github.com/google/blockly/wiki/Logic#values";  // untranslated
Blockly.Msg.LOGIC_BOOLEAN_TOOLTIP = "返回真或假。";
Blockly.Msg.LOGIC_BOOLEAN_TRUE = "真";
Blockly.Msg.LOGIC_COMPARE_HELPURL = "https://zh.wikipedia.org/wiki/不等";
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_EQ = "如果兩個輸入結果相等，則返回真。";
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GT = "如果第一個輸入結果比第二個大，則返回真。";
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GTE = "如果第一個輸入結果大於或等於第二個輸入結果，則返回真。";
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LT = "如果第一個輸入結果比第二個小，則返回真。";
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LTE = "如果第一個輸入結果小於或等於第二個輸入結果，則返回真。";
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_NEQ = "如果兩個輸入結果不相等，則返回真。";
Blockly.Msg.LOGIC_NEGATE_HELPURL = "https://github.com/google/blockly/wiki/Logic#not";
Blockly.Msg.LOGIC_NEGATE_TITLE = "非%1";
Blockly.Msg.LOGIC_NEGATE_TOOLTIP = "如果輸入結果為假，則返回真；如果輸入結果為真，則返回假。";
Blockly.Msg.LOGIC_NULL = "空";
Blockly.Msg.LOGIC_NULL_HELPURL = "https://en.wikipedia.org/wiki/Nullable_type";  // untranslated
Blockly.Msg.LOGIC_NULL_TOOLTIP = "返回空值。";
Blockly.Msg.LOGIC_OPERATION_AND = "和";
Blockly.Msg.LOGIC_OPERATION_HELPURL = "https://github.com/google/blockly/wiki/Logic#logical-operations";  // untranslated
Blockly.Msg.LOGIC_OPERATION_OR = "或";
Blockly.Msg.LOGIC_OPERATION_TOOLTIP_AND = "如果兩個輸入結果都為真，則返回真。";
Blockly.Msg.LOGIC_OPERATION_TOOLTIP_OR = "如果至少有一個輸入結果為真，則返回真。";
Blockly.Msg.LOGIC_TERNARY_CONDITION = "測試";
Blockly.Msg.LOGIC_TERNARY_HELPURL = "https://zh.wikipedia.org/wiki/條件運算符";
Blockly.Msg.LOGIC_TERNARY_IF_FALSE = "如果為假";
Blockly.Msg.LOGIC_TERNARY_IF_TRUE = "如果為真";
Blockly.Msg.LOGIC_TERNARY_TOOLTIP = "檢查“test”中的條件。如果條件為真，則返回“if true”的值，否則，則返回“if false”的值。";
Blockly.Msg.MATH_ADDITION_SYMBOL = "+";  // untranslated
Blockly.Msg.MATH_ARITHMETIC_HELPURL = "https://zh.wikipedia.org/wiki/算術";
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_ADD = "返回兩個數字的和。";
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_DIVIDE = "返回兩個數字的商。";
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MINUS = "返回兩個數字的區別。";
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MULTIPLY = "返回兩個數字的乘積。";
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_POWER = "返回第一個數的第二個數次冪。";
Blockly.Msg.MATH_CHANGE_HELPURL = "https://zh.wikipedia.org/wiki/%E5%8A%A0%E6%B3%95";
Blockly.Msg.MATH_CHANGE_TITLE = "將變量 %1 的值增加 %2";
Blockly.Msg.MATH_CHANGE_TOOLTIP = "將一個數添加到變量“%1”。";
Blockly.Msg.MATH_CONSTANT_HELPURL = "https://zh.wikipedia.org/wiki/數學常數";
Blockly.Msg.MATH_CONSTANT_TOOLTIP = "返回一個常見常量：π (3.141......)，e (2.718...)、φ (1.618...)、 sqrt(2) (1.414......)、sqrt(½) (0.707......)或 ∞（無窮大）。";
Blockly.Msg.MATH_CONSTRAIN_HELPURL = "https://en.wikipedia.org/wiki/Clamping_%28graphics%29";  // untranslated
Blockly.Msg.MATH_CONSTRAIN_TITLE = "限制數字 %1 介於 (低) %2 到 (高) %3";
Blockly.Msg.MATH_CONSTRAIN_TOOLTIP = "限制數字介於兩個指定的數字之間";
Blockly.Msg.MATH_CONVERT_HELPURL = "";
Blockly.Msg.MATH_CONVERT_MESSAGE0 = "%1 %2";
Blockly.Msg.MATH_CONVERT_TOOLTIP = "強制轉換數據類型";
Blockly.Msg.MATH_DIVISION_CONSULT_HELPURL = "";
Blockly.Msg.MATH_DIVISION_CONSULT_TITLE = "%1 ÷ %2 商的整數部分";
Blockly.Msg.MATH_DIVISION_CONSULT_TOOLTIP = "";
Blockly.Msg.MATH_DIVISION_SYMBOL = "÷";  // untranslated
Blockly.Msg.MATH_IS_DIVISIBLE_BY = "可被整除";
Blockly.Msg.MATH_IS_EVEN = "是偶數";
Blockly.Msg.MATH_IS_NEGATIVE = "為負";
Blockly.Msg.MATH_IS_ODD = "是奇數";
Blockly.Msg.MATH_IS_POSITIVE = "為正";
Blockly.Msg.MATH_IS_PRIME = "是質數";
Blockly.Msg.MATH_IS_TOOLTIP = "如果數字是偶數、奇數、非負整數、正數、負數或如果它可被某數字整除，則返回真或假。";
Blockly.Msg.MATH_IS_WHOLE = "為整數";
Blockly.Msg.MATH_MODULO_HELPURL = "https://zh.wikipedia.org/wiki/模除";
Blockly.Msg.MATH_MODULO_TITLE = "%1 ÷ %2 的余數";
Blockly.Msg.MATH_MODULO_TOOLTIP = "返回這兩個數字相除後的余數。";
Blockly.Msg.MATH_MULTIPLICATION_SYMBOL = "×";  // untranslated
Blockly.Msg.MATH_NUMBER_BITS_OPS_HELPURL = "";
Blockly.Msg.MATH_NUMBER_BITS_OPS_MESSAGE0 = "%1 %2 %3";
Blockly.Msg.MATH_NUMBER_BITS_OPS_TOOLTIP = "對數字進行位運算";
Blockly.Msg.MATH_NUMBER_HELPURL = "https://zh.wikipedia.org/wiki/數";
Blockly.Msg.MATH_NUMBER_TOOLTIP = "一個數字。";
Blockly.Msg.MATH_ONLIST_HELPURL = "";  // untranslated
Blockly.Msg.MATH_ONLIST_OPERATOR_AVERAGE = "列表中的平均數";
Blockly.Msg.MATH_ONLIST_OPERATOR_MAX = "列表中的最大值";
Blockly.Msg.MATH_ONLIST_OPERATOR_MEDIAN = "列表中位數";
Blockly.Msg.MATH_ONLIST_OPERATOR_MIN = "列表中的最小值";
Blockly.Msg.MATH_ONLIST_OPERATOR_MODE = "列表模式";
Blockly.Msg.MATH_ONLIST_OPERATOR_RANDOM = "列表的隨機項";
Blockly.Msg.MATH_ONLIST_OPERATOR_STD_DEV = "列表中的標準差";
Blockly.Msg.MATH_ONLIST_OPERATOR_SUM = "列表中的數的總和";
Blockly.Msg.MATH_ONLIST_TOOLTIP_AVERAGE = "返回列表中的數值的平均值。";
Blockly.Msg.MATH_ONLIST_TOOLTIP_MAX = "返回列表中最大數。";
Blockly.Msg.MATH_ONLIST_TOOLTIP_MEDIAN = "返回列表中的中位數。";
Blockly.Msg.MATH_ONLIST_TOOLTIP_MIN = "返回列表中最小數。";
Blockly.Msg.MATH_ONLIST_TOOLTIP_MODE = "返回列表中的最常見的項的列表。";
Blockly.Msg.MATH_ONLIST_TOOLTIP_RANDOM = "從列表中返回一個隨機的元素。";
Blockly.Msg.MATH_ONLIST_TOOLTIP_STD_DEV = "返回列表的標準偏差。";
Blockly.Msg.MATH_ONLIST_TOOLTIP_SUM = "返回列表中的所有數字的和。";
Blockly.Msg.MATH_POWER_SYMBOL = "**";  // untranslated
Blockly.Msg.MATH_RANDOM_FLOAT_HELPURL = "https://zh.wikipedia.org/wiki/隨機數生成器";
Blockly.Msg.MATH_RANDOM_FLOAT_TITLE_RANDOM = "隨機小數";
Blockly.Msg.MATH_RANDOM_FLOAT_TOOLTIP = "返回介於（包含）0.0到1.0之間的隨機數。";
Blockly.Msg.MATH_RANDOM_INT_HELPURL = "https://zh.wikipedia.org/wiki/隨機數生成器";
Blockly.Msg.MATH_RANDOM_INT_TITLE = "從 %1 到 %2 之間的隨機整數";
Blockly.Msg.MATH_RANDOM_INT_TOOLTIP = "返回兩個指定的範圍（含）之間的隨機整數。";
Blockly.Msg.MATH_ROUND_HELPURL = "https://zh.wikipedia.org/wiki/數值修約";
Blockly.Msg.MATH_ROUND_OPERATOR_ROUND = "四舍五入";
Blockly.Msg.MATH_ROUND_OPERATOR_ROUNDDOWN = "向下舍入";
Blockly.Msg.MATH_ROUND_OPERATOR_ROUNDUP = "向上舍入";
Blockly.Msg.MATH_ROUND_TOOLTIP = "數字向上或向下舍入。";
Blockly.Msg.MATH_SINGLE_HELPURL = "https://zh.wikipedia.org/wiki/平方根";
Blockly.Msg.MATH_SINGLE_OP_ABSOLUTE = "絕對";
Blockly.Msg.MATH_SINGLE_OP_ROOT = "平方根";
Blockly.Msg.MATH_SINGLE_TOOLTIP_ABS = "返回一個數的絕對值。";
Blockly.Msg.MATH_SINGLE_TOOLTIP_EXP = "返回數的e次冪。";
Blockly.Msg.MATH_SINGLE_TOOLTIP_LN = "返回一個數的自然對數。";
Blockly.Msg.MATH_SINGLE_TOOLTIP_LOG10 = "返回數字的對數。";
Blockly.Msg.MATH_SINGLE_TOOLTIP_NEG = "返回數的邏輯非。";
Blockly.Msg.MATH_SINGLE_TOOLTIP_POW10 = "返回數的10次冪。";
Blockly.Msg.MATH_SINGLE_TOOLTIP_ROOT = "返回數的平方根。";
Blockly.Msg.MATH_SUBTRACTION_SYMBOL = "-";  // untranslated
Blockly.Msg.MATH_TRIG_ACOS = "acos";  // untranslated
Blockly.Msg.MATH_TRIG_ASIN = "asin";  // untranslated
Blockly.Msg.MATH_TRIG_ATAN = "atan";  // untranslated
Blockly.Msg.MATH_TRIG_COS = "cos";  // untranslated
Blockly.Msg.MATH_TRIG_HELPURL = "https://zh.wikipedia.org/wiki/三角函數";
Blockly.Msg.MATH_TRIG_SIN = "sin";  // untranslated
Blockly.Msg.MATH_TRIG_TAN = "tan";  // untranslated
Blockly.Msg.MATH_TRIG_TOOLTIP_ACOS = "返回一個數的反余弦值。";
Blockly.Msg.MATH_TRIG_TOOLTIP_ASIN = "返回一個數的反正弦值。";
Blockly.Msg.MATH_TRIG_TOOLTIP_ATAN = "返回指定角度的反正切值。";
Blockly.Msg.MATH_TRIG_TOOLTIP_COS = "返回指定角度的余弦值(非弧度）。";
Blockly.Msg.MATH_TRIG_TOOLTIP_SIN = "返回指定角度的正弦值(非弧度）。";
Blockly.Msg.MATH_TRIG_TOOLTIP_TAN = "返回指定角度的正切值(非弧度）。";
Blockly.Msg.NEW_VARIABLE = "創建變量...";
Blockly.Msg.NEW_VARIABLE_TITLE = "新變量的名稱：";
Blockly.Msg.ORDINAL_NUMBER_SUFFIX = "";
Blockly.Msg.PROCEDURES_ALLOW_STATEMENTS = "允許聲明";
Blockly.Msg.PROCEDURES_BEFORE_PARAMS = "參數：";
Blockly.Msg.PROCEDURES_CALLNORETURN_HELPURL = "https://zh.wikipedia.org/wiki/子程序";
Blockly.Msg.PROCEDURES_CALLNORETURN_TOOLTIP = "運行用戶定義的函數“%1”。";
Blockly.Msg.PROCEDURES_CALLRETURN_HELPURL = "https://zh.wikipedia.org/wiki/子程序";
Blockly.Msg.PROCEDURES_CALLRETURN_TOOLTIP = "運行用戶定義的函數“%1”，並使用它的輸出值。";
Blockly.Msg.PROCEDURES_CALL_BEFORE_PARAMS = "與：";
Blockly.Msg.PROCEDURES_CREATE_DO = "創建“%1”";
Blockly.Msg.PROCEDURES_DEFNORETURN_COMMENT = "";//"描述該功能...";
Blockly.Msg.PROCEDURES_DEFNORETURN_DO = "";
Blockly.Msg.PROCEDURES_DEFNORETURN_HELPURL = "https://zh.wikipedia.org/wiki/子程序";
Blockly.Msg.PROCEDURES_DEFNORETURN_PROCEDURE = "my_func";
Blockly.Msg.PROCEDURES_DEFNORETURN_TITLE = "定義函數";
Blockly.Msg.PROCEDURES_DEFNORETURN_TOOLTIP = "創建一個不帶輸出值的函數。";
Blockly.Msg.PROCEDURES_DEFRETURN_HELPURL = "https://zh.wikipedia.org/wiki/子程序";
Blockly.Msg.PROCEDURES_DEFRETURN_RETURN = "返回";
Blockly.Msg.PROCEDURES_DEFRETURN_TOOLTIP = "創建一個有輸出值的函數。";
Blockly.Msg.PROCEDURES_DEF_DUPLICATE_WARNING = "警告: 此函數具有重復參數。";
Blockly.Msg.PROCEDURES_HIGHLIGHT_DEF = "突出顯示函數定義";
Blockly.Msg.PROCEDURES_IFRETURN_HELPURL = "http://c2.com/cgi/wiki?GuardClause";
Blockly.Msg.PROCEDURES_IFRETURN_TOOLTIP = "如果值為真，則返回第二個值。";
Blockly.Msg.PROCEDURES_IFRETURN_WARNING = "警告: 僅在定義函數內可使用此塊。";
Blockly.Msg.PROCEDURES_MUTATORARG_TITLE = "輸入名稱：";
Blockly.Msg.PROCEDURES_MUTATORARG_TOOLTIP = "添加函數輸入。";
Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TITLE = "輸入";
Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TOOLTIP = "添加、刪除或重新排此函數的輸入。";
Blockly.Msg.REDO = "重做";
Blockly.Msg.REMOVE_COMMENT = "刪除註釋";
Blockly.Msg.RENAME_VARIABLE = "重命名變量...";
Blockly.Msg.RENAME_VARIABLE_TITLE = "將所有“%1”變量重命名為:";
Blockly.Msg.TEXT_APPEND_APPENDTEXT = "追加文本";
Blockly.Msg.TEXT_APPEND_HELPURL = "https://github.com/google/blockly/wiki/Text#text-modification";  // untranslated
/* Blockly.Msg.TEXT_APPEND_TO = "在"; */
Blockly.Msg.TEXT_APPEND_TO = "";
Blockly.Msg.TEXT_APPEND_TOOLTIP = "將一些文本追加到變量“%1”。";
Blockly.Msg.TEXT_CHANGECASE_HELPURL = "https://github.com/google/blockly/wiki/Text#adjusting-text-case";  // untranslated
Blockly.Msg.TEXT_CHANGECASE_OPERATOR_LOWERCASE = "轉為小寫";
Blockly.Msg.TEXT_CHANGECASE_OPERATOR_TITLECASE = "轉為首字母大寫";
Blockly.Msg.TEXT_CHANGECASE_OPERATOR_UPPERCASE = "轉為大寫";
Blockly.Msg.TEXT_CHANGECASE_TOOLTIP = "使用不同的大小寫復制這段文字。";
Blockly.Msg.TEXT_CHARAT_FIRST = "獲得第一個字符";
Blockly.Msg.TEXT_CHARAT_FROM_END = "獲得倒數第#個字符";
Blockly.Msg.TEXT_CHARAT_FROM_START = "獲得字符#";
Blockly.Msg.TEXT_CHARAT_HELPURL = "https://github.com/google/blockly/wiki/Text#extracting-text";  // untranslated
/* Blockly.Msg.TEXT_CHARAT_INPUT_INTEXT = "於文本中"; */
Blockly.Msg.TEXT_CHARAT_INPUT_INTEXT = "從文本";
Blockly.Msg.TEXT_CHARAT_LAST = "獲得最後一個字符";
Blockly.Msg.TEXT_CHARAT_RANDOM = "獲取隨機的字母";
Blockly.Msg.TEXT_CHARAT_TAIL = "";
Blockly.Msg.TEXT_CHARAT_TOOLTIP = "返回位於指定位置的字母。";
Blockly.Msg.TEXT_CREATE_JOIN_ITEM_TOOLTIP = "將一個項添加到文本中。";
Blockly.Msg.TEXT_CREATE_JOIN_TITLE_JOIN = "加入";
Blockly.Msg.TEXT_CREATE_JOIN_TOOLTIP = "添加、移除或重新排列各節來重新配置這個文本塊。";
Blockly.Msg.TEXT_GET_SUBSTRING_END_FROM_END = "到倒數第#個字符";
Blockly.Msg.TEXT_GET_SUBSTRING_END_FROM_START = "到字符#";
Blockly.Msg.TEXT_GET_SUBSTRING_END_LAST = "到最後一個字符";
Blockly.Msg.TEXT_GET_SUBSTRING_HELPURL = "https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text";  // untranslated
/* Blockly.Msg.TEXT_GET_SUBSTRING_INPUT_IN_TEXT = "自文本"; */
Blockly.Msg.TEXT_GET_SUBSTRING_INPUT_IN_TEXT = "從文本";
Blockly.Msg.TEXT_GET_SUBSTRING_START_FIRST = "取得一段字串自第一個字符";
Blockly.Msg.TEXT_GET_SUBSTRING_START_FROM_END = "取得一段字串自倒數第#個字符";
Blockly.Msg.TEXT_GET_SUBSTRING_START_FROM_START = "取得一段字串自#";
Blockly.Msg.TEXT_GET_SUBSTRING_TAIL = "";
Blockly.Msg.TEXT_GET_SUBSTRING_TOOLTIP = "返回指定的部分文本。";
Blockly.Msg.TEXT_INDEXOF_HELPURL = "https://github.com/google/blockly/wiki/Text#finding-text";  // untranslated
/* Blockly.Msg.TEXT_INDEXOF_INPUT_INTEXT = "自文本"; */
Blockly.Msg.TEXT_INDEXOF_INPUT_INTEXT = "在文本";
Blockly.Msg.TEXT_INDEXOF_OPERATOR_FIRST = "中查找 最先 出現";
Blockly.Msg.TEXT_INDEXOF_OPERATOR_LAST = "中查找 最後 出現";
Blockly.Msg.TEXT_INDEXOF_TAIL = "的位置";
Blockly.Msg.TEXT_INDEXOF_TOOLTIP = "返回在第二個字串中的第一/最後一個匹配項的索引值。如果未找到則返回%1。";
Blockly.Msg.TEXT_ISEMPTY_HELPURL = "https://github.com/google/blockly/wiki/Text#checking-for-empty-text";  // untranslated
Blockly.Msg.TEXT_ISEMPTY_TITLE = "%1是空的";
Blockly.Msg.TEXT_ISEMPTY_TOOLTIP = "如果提供的文本為空，則返回真。";
Blockly.Msg.TEXT_JOIN_HELPURL = "https://github.com/google/blockly/wiki/Text#text-creation";  // untranslated
/* Blockly.Msg.TEXT_JOIN_TITLE_CREATEWITH = "建立字符串 使用"; */
Blockly.Msg.TEXT_JOIN_TITLE_CREATEWITH = "轉為文本";
Blockly.Msg.TEXT_JOIN_TOOLTIP = "通過串起任意數量的項以建立一段文字。";
Blockly.Msg.TEXT_LENGTH_HELPURL = "https://github.com/google/blockly/wiki/Text#text-modification";  // untranslated
Blockly.Msg.TEXT_LENGTH_TITLE = "%1的長度";
Blockly.Msg.TEXT_LENGTH_TOOLTIP = "返回提供文本的字母數（包括空格）。";
Blockly.Msg.TEXT_PRINT_HELPURL = "https://github.com/google/blockly/wiki/Text#printing-text";  // untranslated
Blockly.Msg.TEXT_PRINT_TITLE = "打印%1";
Blockly.Msg.MPYTHON_INPUT_MESSAGE0 ='輸入%1';
Blockly.Msg.TEXT_PRINT_TOOLTIP = "打印指定的文字、數字或其他值。";
Blockly.Msg.TEXT_PROMPT_HELPURL = "https://github.com/google/blockly/wiki/Text#getting-input-from-the-user";  // untranslated
Blockly.Msg.TEXT_PROMPT_TOOLTIP_NUMBER = "提示用戶輸入數字。";
Blockly.Msg.TEXT_PROMPT_TOOLTIP_TEXT = "提示用戶輸入一些文本。";
Blockly.Msg.TEXT_PROMPT_TYPE_NUMBER = "輸入數字並顯示提示消息";
Blockly.Msg.TEXT_PROMPT_TYPE_TEXT = "輸入數字並顯示提示消息";
Blockly.Msg.TEXT_TEXT_HELPURL = "https://zh.wikipedia.org/wiki/字符串";
Blockly.Msg.TEXT_TEXT_TOOLTIP = "一個字母、單詞或一行文本。";
Blockly.Msg.TEXT_TRIM_HELPURL = "https://github.com/google/blockly/wiki/Text#trimming-removing-spaces";  // untranslated
Blockly.Msg.TEXT_TRIM_OPERATOR_BOTH = "消除兩側空格";
Blockly.Msg.TEXT_TRIM_OPERATOR_LEFT = "消除左側空格";
Blockly.Msg.TEXT_TRIM_OPERATOR_RIGHT = "消除右側空格";
Blockly.Msg.TEXT_TRIM_TOOLTIP = "復制這段文字的同時刪除兩端多余的空格。";
Blockly.Msg.TODAY = "今天";
Blockly.Msg.UNDO = "撤銷";
Blockly.Msg.VARIABLES_DEFAULT_NAME = "item";
Blockly.Msg.VARIABLES_GET_CREATE_SET = "創建“設定%1”";
Blockly.Msg.VARIABLES_GET_HELPURL = "https://github.com/google/blockly/wiki/Variables#get";  // untranslated
Blockly.Msg.VARIABLES_GET_TOOLTIP = "返回此變量的值。";
Blockly.Msg.VARIABLES_SET = "將變量 %1 設定為 %2";
Blockly.Msg.VARIABLES_SET_CREATE_GET = "創建“獲得%1”";
Blockly.Msg.VARIABLES_SET_HELPURL = "https://github.com/google/blockly/wiki/Variables#set";  // untranslated
Blockly.Msg.VARIABLES_SET_TOOLTIP = "設置此變量，以使它和輸入值相等。";
Blockly.Msg.VARIABLE_ALREADY_EXISTS = "已存在名為“%1”的變量。";
Blockly.Msg.PROCEDURES_DEFRETURN_TITLE = Blockly.Msg.PROCEDURES_DEFNORETURN_TITLE;
Blockly.Msg.CONTROLS_IF_IF_TITLE_IF = Blockly.Msg.CONTROLS_IF_MSG_IF;
Blockly.Msg.CONTROLS_WHILEUNTIL_INPUT_DO = Blockly.Msg.CONTROLS_REPEAT_INPUT_DO;

Blockly.Msg.CONTROLS_IF_MSG_THEN = Blockly.Msg.CONTROLS_REPEAT_INPUT_DO;

Blockly.Msg.TRY_EXCEPT_TRY = 'try';

Blockly.Msg.CONTROLS_IF_ELSE_TITLE_ELSE = Blockly.Msg.CONTROLS_IF_MSG_ELSE;

Blockly.Msg.CONTROLS_IF_ELSE_TITLE_ELSE = Blockly.Msg.CONTROLS_IF_MSG_ELSE;
Blockly.Msg.PROCEDURES_DEFRETURN_PROCEDURE = Blockly.Msg.PROCEDURES_DEFNORETURN_PROCEDURE;
Blockly.Msg.LISTS_GET_SUBLIST_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
Blockly.Msg.LISTS_GET_INDEX_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
Blockly.Msg.PROCEDURES_DEFRETURN_DO = Blockly.Msg.PROCEDURES_DEFNORETURN_DO;
Blockly.Msg.CONTROLS_IF_ELSEIF_TITLE_ELSEIF = Blockly.Msg.CONTROLS_IF_MSG_ELSEIF;
Blockly.Msg.LISTS_GET_INDEX_HELPURL = Blockly.Msg.LISTS_INDEX_OF_HELPURL;
Blockly.Msg.CONTROLS_FOREACH_INPUT_DO = Blockly.Msg.CONTROLS_REPEAT_INPUT_DO;
Blockly.Msg.LISTS_SET_INDEX_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
Blockly.Msg.CONTROLS_FOR_INPUT_DO = Blockly.Msg.CONTROLS_REPEAT_INPUT_DO;
Blockly.Msg.LISTS_CREATE_WITH_ITEM_TITLE = Blockly.Msg.VARIABLES_DEFAULT_NAME;
Blockly.Msg.TUPLE_CREATE_WITH_ITEM_TITLE = Blockly.Msg.VARIABLES_DEFAULT_NAME;
Blockly.Msg.DICT_CREATE_WITH_ITEM_TITLE = Blockly.Msg.VARIABLES_DEFAULT_NAME;
Blockly.Msg.SET_CREATE_WITH_ITEM_TITLE = Blockly.Msg.VARIABLES_DEFAULT_NAME;
Blockly.Msg.TEXT_APPEND_VARIABLE = Blockly.Msg.VARIABLES_DEFAULT_NAME;
Blockly.Msg.TEXT_CREATE_JOIN_ITEM_TITLE_ITEM = Blockly.Msg.VARIABLES_DEFAULT_NAME;
Blockly.Msg.MATH_CHANGE_TITLE_ITEM = Blockly.Msg.VARIABLES_DEFAULT_NAME;
Blockly.Msg.LISTS_INDEX_OF_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
Blockly.Msg.PROCEDURES_DEFRETURN_COMMENT = Blockly.Msg.PROCEDURES_DEFNORETURN_COMMENT;
/**
*原生end
*/


Blockly.Msg.MPYTHON_MAIN_HELPURL = '';
Blockly.Msg.MPYTHON_MAIN_TOOLTIP = '這個圖形塊不是必須使用。但使用這個圖形塊，能使得程序結構更規整。';
Blockly.Msg.MPYTHON_MAIN_MESSAGE0 = '主程式';

Blockly.Msg.MPYTHON_OPEN = '開啟';
Blockly.Msg.MPYTHON_CLOSE = '關閉';

Blockly.Msg.MPYTHONBOX_RGB_IMAGE_SHIFT_LEFT = '左移';
Blockly.Msg.MPYTHONBOX_RGB_IMAGE_SHIFT_RIGHT = '右移';
Blockly.Msg.MPYTHONBOX_RGB_IMAGE_SHIFT_UP = '上移';
Blockly.Msg.MPYTHONBOX_RGB_IMAGE_SHIFT_DOWN = '下移';

Blockly.Msg.MPYTHON_AI_LCD_SHOW_IMAGE_HEAT_GRAYSCALE = '灰度';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_IMAGE_HEAT_RAINBOW = '彩虹';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_IMAGE_HEAT_NEGATE = '數字反轉';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_IMAGE_HEAT_INVERT = '黑白翻轉';

Blockly.Msg.MPYTHON_AI_LCD_SHOW_IMAGE_DESCARTES_LINPOLAR = '線性極';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_IMAGE_DESCARTES_LOGPOLAR = '對數極';

Blockly.Msg.MPYTHON_AI_SENSOR_PATTERN_GRAYSCALE = '灰度';
Blockly.Msg.MPYTHON_AI_SENSOR_PATTERN_COLOR = '彩色';

Blockly.Msg.MPYTHON_AI_SENSOR_ENABLE_START = '開始抓取圖像';
Blockly.Msg.MPYTHON_AI_SENSOR_ENABLE_STOP = '停止抓取圖像';

Blockly.Msg.MPYTHON_AI_SENSOR_LEVEL_MI_H = '水平鏡像';
Blockly.Msg.MPYTHON_AI_SENSOR_LEVEL_MI_V = '垂直翻轉';

Blockly.Msg.MPYTHON_AI_SENSOR_SETS_CONTRAST = '對比度';
Blockly.Msg.MPYTHON_AI_SENSOR_SETS_BRIGHTNESS = '亮度';
Blockly.Msg.MPYTHON_AI_SENSOR_SETS_SATURATION = '飽和度';

Blockly.Msg.MPYTHON_AI2_FACE_YOLO = '人臉識別';
Blockly.Msg.MPYTHON_AI2_CLASS_20_YOLO = '20類識別';

Blockly.Msg.MPYTHON_AI_TRACE_COLOR_RECTANGLE = '矩形';
Blockly.Msg.MPYTHON_AI_TRACE_COLOR_CROSS = '十字';


/*文本- 開始 */
Blockly.Msg.TEXT_APPEND_TEXT_HELPURL = '';
Blockly.Msg.TEXT_APPEND_TEXT_TOOLTIP = '';
Blockly.Msg.TEXT_APPEND_TEXT_MESSAGE0 = '%1 追加文本 %2';



/*文本 - 結束 */


Blockly.Msg.CHINA_CITY_MESSAGE0 = '%1 %2';
Blockly.Msg.CHINA_CITY_TOWN_MESSAGE0 = '%1 %2 %3 返回 %4';
Blockly.Msg.CHINA_CITY_CNNAME = '中文簡稱';
Blockly.Msg.CHINA_CITY_PINYIN = '拼音';

Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_LANGUAGE_1 = '简体中文';
Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_LANGUAGE_2 = '正體中文';

Blockly.Msg.MPYTHON_SENIVERSE_CITY_WEATHER_HELPURL = '';
Blockly.Msg.MPYTHON_SENIVERSE_CITY_WEATHER_TOOLTIP = '';
Blockly.Msg.MPYTHON_SENIVERSE_CITY_WEATHER_MESSAGE0 = '[心知天氣] %1 信息 %2 地理位置 %3 API私鑰 %4 %5 語言 %6 %7 溫度單位 %8';

Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_API_1 = '天氣實況';
Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_API_2 = '3天天氣預報';
Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_API_3 = '6項生活指數';

Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_UNIT_1 = '攝氏度';
Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_UNIT_2 = '華氏度';

Blockly.Msg.MPYTHON_DEFINE_SENIVERSE_WEATHER_HELPURL = '';
Blockly.Msg.MPYTHON_DEFINE_SENIVERSE_WEATHER_TOOLTIP = '';
Blockly.Msg.MPYTHON_DEFINE_SENIVERSE_WEATHER_MESSAGE0 = '設定 %1 為 %2';

Blockly.Msg.MPYTHON_GET_SENIVERSE_WEATHER_INFO_HELPURL = '';
Blockly.Msg.MPYTHON_GET_SENIVERSE_WEATHER_INFO_TOOLTIP = '';
Blockly.Msg.MPYTHON_GET_SENIVERSE_WEATHER_INFO_MESSAGE0 = '%1 [心知天氣] 通用字段 %2';

Blockly.Msg.MPYTHON_GET_SENIVERSE_WEATHER_INFO1_HELPURL = '';
Blockly.Msg.MPYTHON_GET_SENIVERSE_WEATHER_INFO1_TOOLTIP = '';
Blockly.Msg.MPYTHON_GET_SENIVERSE_WEATHER_INFO1_MESSAGE0 = '%1 [心知天氣] 天氣實況 %2';

Blockly.Msg.MPYTHON_GET_SENIVERSE_WEATHER_INFO2_HELPURL = '';
Blockly.Msg.MPYTHON_GET_SENIVERSE_WEATHER_INFO2_TOOLTIP = '風向角度，範圍0~360\n風速，單位km/h（當unit=c時）、mph（當unit=f時）';
Blockly.Msg.MPYTHON_GET_SENIVERSE_WEATHER_INFO2_MESSAGE0 = '%1 [心知天氣] 3天天氣預報 %2 的 %3';

Blockly.Msg.MPYTHON_GET_SENIVERSE_WEATHER_INFO3_HELPURL = '';
Blockly.Msg.MPYTHON_GET_SENIVERSE_WEATHER_INFO3_TOOLTIP = '';
Blockly.Msg.MPYTHON_GET_SENIVERSE_WEATHER_INFO3_MESSAGE0 = '%1 [心知天氣] 6項生活指數 %2';

Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_city_name = '城市名稱';
Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_city_id = '城市ID';
Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_country = '國家代碼';
Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_path = '行政歸屬';
Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_timezone = '時區';
Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_timezone_offset = 'UTC偏移量';
Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_last_update_date = '數據更新日期';
Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_last_update = '數據更新時間';
Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_object = '原始字典對象';

Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_text = '天氣現象';
Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_code = '天氣現象代碼';
Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_temperature = '溫度';

Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_today = '今天';
Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_tomorrow = '明天';
Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_the_day_after_tomorrow = '後天';

Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_date = '日期';
Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_text_day = '白天天氣現象';
Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_code_day = '白天天氣現象代碼';
Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_text_night = '晚間天氣現象';
Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_code_night = '晚間天氣現象代碼';
Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_high = '當天最高溫度';
Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_low = '當天最低溫度';
Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_wind_direction = '風向';
Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_wind_direction_degree = '風向角度';
Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_wind_speed = '風速';
Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_wind_scale = '風力等級';

Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_car_washing = '洗車指數';
Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_dressing = '穿衣指數';
Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_flu = '感冒指數';
Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_sport = '運動指數';
Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_travel = '旅遊指數';
Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_uv = '紫外線指數';

/*
Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_CODE = '天氣現象代碼';
Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_TEMP_C = '氣溫（攝氏度）';
Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_TEMP_F = '氣溫（華氏度）';
Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_TEXT_ZHS = '天气现象文字';
Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_TEXT_ZHT = '天氣現象文字';*/

/*掌控板 - 擴展 - Bluebit - 開始 */
Blockly.Msg.MPYTHON_RED = '紅';
Blockly.Msg.MPYTHON_GREEN = '綠';
Blockly.Msg.MPYTHON_BLUE = '藍';

Blockly.Msg.MPYTHON_BLUEBIT_HELPURL ='http://wiki.labplus.cn/index.php?title=Bluebit';

Blockly.Msg.MPYTHON_BLUEBIT_NEWRFID_READ_MESSAGE0 ='I2C射頻卡 讀取電子錢包 數據';
Blockly.Msg.MPYTHON_BLUEBIT_NEWRFID_READ_TOOLTIP = '讀取塊數據，長度16位元組';
Blockly.Msg.MPYTHON_BLUEBIT_NEWRFID_READ_HELPURL ='https://mpython.readthedocs.io/zh/master/library/mPython/bluebit.html#rfid';

Blockly.Msg.MPYTHON_BLUEBIT_NEWRFID_WRITE_MESSAGE0 ='I2C射頻卡 寫入電子錢包 數據%1';
Blockly.Msg.MPYTHON_BLUEBIT_NEWRFID_WRITE_TOOLTIP = '寫入塊數據，長度16位元組';
Blockly.Msg.MPYTHON_BLUEBIT_NEWRFID_WRITE_HELPURL ='https://mpython.readthedocs.io/zh/master/library/mPython/bluebit.html#rfid';

Blockly.Msg.MPYTHON_BLUEBIT_NEWRFID_MONEY_MESSAGE0 ='I2C射頻卡 給電子錢包%1 金額%2';
Blockly.Msg.MPYTHON_BLUEBIT_NEWRFID_MONEY_TOOLTIP = '';
Blockly.Msg.MPYTHON_BLUEBIT_NEWRFID_MONEY_HELPURL ='https://mpython.readthedocs.io/zh/master/library/mPython/bluebit.html#rfid';

Blockly.Msg.MPYTHON_BLUEBIT_NEWRFID_INC_MESSAGE0 ='充值';
Blockly.Msg.MPYTHON_BLUEBIT_NEWRFID_DEC_MESSAGE0 ='扣費';

Blockly.Msg.MPYTHON_BLUEBIT_NEWRFID_GET_MESSAGE0 ='I2C射頻卡 獲取電子錢包餘額';
Blockly.Msg.MPYTHON_BLUEBIT_NEWRFID_GET_TOOLTIP = '';
Blockly.Msg.MPYTHON_BLUEBIT_NEWRFID_GET_HELPURL ='https://mpython.readthedocs.io/zh/master/library/mPython/bluebit.html#rfid';

Blockly.Msg.MPYTHON_BLUEBIT_NEWRFID_GETSERIAL_MESSAGE0 ='I2C射頻卡 獲取序號';
Blockly.Msg.MPYTHON_BLUEBIT_NEWRFID_GETSERIAL_TOOLTIP = '';
Blockly.Msg.MPYTHON_BLUEBIT_NEWRFID_GETSERIAL_HELPURL ='https://mpython.readthedocs.io/zh/master/library/mPython/bluebit.html#rfid';

Blockly.Msg.MPYTHON_BLUEBIT_NEWRFID_SET_MESSAGE0 ='I2C射頻卡 初始化電子錢包';
Blockly.Msg.MPYTHON_BLUEBIT_NEWRFID_SET_TOOLTIP = '';
Blockly.Msg.MPYTHON_BLUEBIT_NEWRFID_SET_HELPURL ='https://mpython.readthedocs.io/zh/master/library/mPython/bluebit.html#rfid';

Blockly.Msg.MPYTHON_BLUEBIT_NEWRFID_SCAN_MESSAGE0 ='I2C射頻卡 掃描';
Blockly.Msg.MPYTHON_BLUEBIT_NEWRFID_SCAN_TOOLTIP = '';
Blockly.Msg.MPYTHON_BLUEBIT_NEWRFID_SCAN_HELPURL ='https://mpython.readthedocs.io/zh/master/library/mPython/bluebit.html#rfid';

Blockly.Msg.MPYTHON_BLUEBIT_ULTRASONIC_MESSAGE0 ='I2C超聲波';
Blockly.Msg.MPYTHON_BLUEBIT_ULTRASONIC_TOOLTIP = '';
Blockly.Msg.MPYTHON_BLUEBIT_ULTRASONIC_HELPURL ='http://wiki.labplus.cn/index.php?title=Bluebit';

Blockly.Msg.MPYTHON_BLUEBIT_READ_DIGITAL_MESSAGE0 ='%1 被觸發 引腳%2';
Blockly.Msg.MPYTHON_BLUEBIT_READ_DIGITAL_TOOLTIP = '';
Blockly.Msg.MPYTHON_BLUEBIT_READ_DIGITAL_HELPURL ='http://wiki.labplus.cn/index.php?title=Bluebit';

Blockly.Msg.MPYTHON_BLUEBIT_READ_ANALOG_MESSAGE0 ='%1 模擬值 引腳%2';
Blockly.Msg.MPYTHON_BLUEBIT_READ_ANALOG_TOOLTIP = '';
Blockly.Msg.MPYTHON_BLUEBIT_READ_ANALOG_HELPURL ='http://wiki.labplus.cn/index.php?title=Bluebit';

Blockly.Msg.MPYTHON_BLUEBIT_SET_ANALOG_MESSAGE0 ='設置LED燈 輸出%1 引腳%2';
Blockly.Msg.MPYTHON_BLUEBIT_SET_ANALOG_TOOLTIP = '';
Blockly.Msg.MPYTHON_BLUEBIT_SET_ANALOG_HELPURL ='http://wiki.labplus.cn/index.php?title=Bluebit';

Blockly.Msg.MPYTHON_BLUEBIT_LINE_FOLLOWER_MESSAGE0 ='循跡傳感器 檢測為黑 引腳%1';
Blockly.Msg.MPYTHON_BLUEBIT_LINE_FOLLOWER_TOOLTIP = '';
Blockly.Msg.MPYTHON_BLUEBIT_LINE_FOLLOWER_HELPURL ='http://wiki.labplus.cn/index.php?title=Bluebit';

Blockly.Msg.MPYTHON_BLUEBIT_SET_TRUE_HELPURL ='http://wiki.labplus.cn/index.php?title=Bluebit';
Blockly.Msg.MPYTHON_BLUEBIT_SET_TRUE_MESSAGE0 ='打開 %1 引腳 %2';
Blockly.Msg.MPYTHON_BLUEBIT_SET_TRUE_TOOLTIP = '';

Blockly.Msg.MPYTHON_BLUEBIT_SET_FALSE_HELPURL ='http://wiki.labplus.cn/index.php?title=Bluebit';
Blockly.Msg.MPYTHON_BLUEBIT_SET_FALSE_MESSAGE0 ='關閉 %1 引腳 %2';
Blockly.Msg.MPYTHON_BLUEBIT_SET_FALSE_TOOLTIP = '';

Blockly.Msg.MPYTHON_BLUEBIT_VOICE_RECORD_ON_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E8%AF%AD%E9%9F%B3%E5%BD%95%E6%94%BE';
Blockly.Msg.MPYTHON_BLUEBIT_VOICE_RECORD_ON_TOOLTIP = '';
Blockly.Msg.MPYTHON_BLUEBIT_VOICE_RECORD_ON_MESSAGE0 = '打開錄放器 %1 %2 REC %3  PLAY %4';

Blockly.Msg.MPYTHON_BLUEBIT_VOICE_RECORD_OFF_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E8%AF%AD%E9%9F%B3%E5%BD%95%E6%94%BE';
Blockly.Msg.MPYTHON_BLUEBIT_VOICE_RECORD_OFF_TOOLTIP = '';
Blockly.Msg.MPYTHON_BLUEBIT_VOICE_RECORD_OFF_MESSAGE0 = '關閉錄放器 %1  REC %2  PLAY %3';

Blockly.Msg.MPYTHON_BLUEBIT_VOICE_RECORD_PLAY = '播放';
Blockly.Msg.MPYTHON_BLUEBIT_VOICE_RECORD_REC = '錄音';

Blockly.Msg.MPYTHON_BLUEBIT_IR_RECEIVE = '紅外探測';
Blockly.Msg.MPYTHON_BLUEBIT_SOUND  = '麥克風';
Blockly.Msg.MPYTHON_BLUEBIT_LINE_FOLLOWER  = '循跡';
Blockly.Msg.MPYTHON_BLUEBIT_VIBRATION  = '震動';
Blockly.Msg.MPYTHON_BLUEBIT_RFID  = '射頻卡';
Blockly.Msg.MPYTHON_BLUEBIT_FINGERPRINT_SCANNER  = '指紋';
Blockly.Msg.MPYTHON_BLUEBIT_PIR  = '人體感應';
Blockly.Msg.MPYTHON_BLUEBIT_MAGNETIC  = '門磁開關';
Blockly.Msg.MPYTHON_BLUEBIT_BUTTON = '按鍵';
Blockly.Msg.MPYTHON_BLUEBIT_RELAY  = '繼電器';
Blockly.Msg.MPYTHON_BLUEBIT_LIMIT_SWITCH  = '限位開關';

Blockly.Msg.MPYTHON_BLUEBIT_FAN  = '風扇';
Blockly.Msg.MPYTHON_BLUEBIT_LASER  = '激光';

Blockly.Msg.MPYTHON_BLUEBIT_NTC_TEMP  = '熱敏電阻';
Blockly.Msg.MPYTHON_BLUEBIT_WATER  = '水位';
Blockly.Msg.MPYTHON_BLUEBIT_SOIL_MOISTURE  = '土壤濕度';
Blockly.Msg.MPYTHON_BLUEBIT_ROTATE_DIMMER  = '旋鈕電位器';
Blockly.Msg.MPYTHON_BLUEBIT_LINEAR_SLIDING_POTENTIOMETER  = '直滑電位器';
Blockly.Msg.MPYTHON_BLUEBIT_ANALOG_LIGHT  = '模擬光線';
Blockly.Msg.MPYTHON_BLUEBIT_LM35_TEMP  = 'LM35溫度';
Blockly.Msg.MPYTHON_BLUEBIT_SMOKE  = '煙霧';

Blockly.Msg.MPYTHON_BLUEBIT_MOTOR_ON_CLOCKWISE  = '正轉';
Blockly.Msg.MPYTHON_BLUEBIT_MOTOR_ON_ANTICLOCKWISE  = '反轉';

Blockly.Msg.MPYTHON_BLUEBIT_READ_SOIL_HELPURL  = '';
Blockly.Msg.MPYTHON_BLUEBIT_READ_SOIL_TOOLTIP  = '新的土壤濕度';
Blockly.Msg.MPYTHON_BLUEBIT_READ_SOIL_MESSAGE0  = '土壤濕度(新)%1';

Blockly.Msg.MPYTHON_BLUEBIT_MOTOR_ON_HELPURL  = 'http://wiki.labplus.cn/index.php?title=%E7%94%B5%E6%9C%BA%E9%A9%B1%E5%8A%A8';
Blockly.Msg.MPYTHON_BLUEBIT_MOTOR_ON_TOOLTIP = '速度：-100~100 映射至 -1023~1023';
Blockly.Msg.MPYTHON_BLUEBIT_MOTOR_ON_MESSAGE0  ='打開直流電機 %1 速度 %2 引腳AIN1 %3 引腳AIN2 %4';

Blockly.Msg.MPYTHON_BLUEBIT_MOTOR_OFF_HELPURL  = 'http://wiki.labplus.cn/index.php?title=%E7%94%B5%E6%9C%BA%E9%A9%B1%E5%8A%A8';
Blockly.Msg.MPYTHON_BLUEBIT_MOTOR_OFF_TOOLTIP  = '';
Blockly.Msg.MPYTHON_BLUEBIT_MOTOR_OFF_MESSAGE0  = '停止直流電機 %1 引腳AIN1 %2 引腳AIN2 %3';

Blockly.Msg.MPYTHON_BLUEBIT_SET_FAN_HELPURL  = '';
Blockly.Msg.MPYTHON_BLUEBIT_SET_FAN_TOOLTIP  = '';
Blockly.Msg.MPYTHON_BLUEBIT_SET_FAN_MESSAGE0 = '拓展板 打開風扇 %1';

Blockly.Msg.MPYTHON_BLUEBIT_SET_FAN_OFF_HELPURL  = '';
Blockly.Msg.MPYTHON_BLUEBIT_SET_FAN_OFF_TOOLTIP  = '';
Blockly.Msg.MPYTHON_BLUEBIT_SET_FAN_OFF_MESSAGE0  = '拓展板 關閉風扇 %1';

Blockly.Msg.MPYTHON_BLUEBIT_4BUTTON_HELPURL = 'http://wiki.MPYTHON_BLUEBIT.cn/index.php?title=%E5%9B%9B%E6%8C%89%E9%94%AE';
Blockly.Msg.MPYTHON_BLUEBIT_4BUTTON_TOOLTIP = '';
Blockly.Msg.MPYTHON_BLUEBIT_4BUTTON_MESSAGE0 = '四向按鍵模塊 引腳 %1 按鍵 %2 被按下';
Blockly.Msg.BLUE = 'A';
Blockly.Msg.GREEN = 'B';
Blockly.Msg.RED = 'C';
Blockly.Msg.YELLOW = 'D';

Blockly.Msg.MPYTHON_BLUEBIT_JOYSTICK_HELPURL = '';
Blockly.Msg.MPYTHON_BLUEBIT_JOYSTICK_TOOLTIP = '';
Blockly.Msg.MPYTHON_BLUEBIT_JOYSTICK_MESSAGE0 = '搖桿 引腳A0 %1 引腳A1 %2   %3 軸的值';

Blockly.Msg.MPYTHON_BLUEBIT_MOTOR_ON_I2C_HELPURL = '';
Blockly.Msg.MPYTHON_BLUEBIT_MOTOR_ON_I2C_TOOLTIP = '速度：0~100';
Blockly.Msg.MPYTHON_BLUEBIT_MOTOR_ON_I2C_MESSAGE0 = '拓展板 打開直流電機 %1 %2 速度 %3';

Blockly.Msg.MPYTHON_BLUEBIT_BLUEBIT_MOTOR_OFF_I2C_HELPURL = '';
Blockly.Msg.MPYTHON_BLUEBIT_MOTOR_OFF_I2C_TOOLTIP = '速度：0~100';
Blockly.Msg.MPYTHON_BLUEBIT_MOTOR_OFF_I2C_MESSAGE0 = '拓展板 關閉直流電機';

Blockly.Msg.MPYTHON_BLUEBIT_CODED_THREE_MOTOR_ON_I2C_HELPURL = '';
Blockly.Msg.MPYTHON_BLUEBIT_CODED_THREE_MOTOR_ON_I2C_TOOLTIP = '速度：-1023~1023';
Blockly.Msg.MPYTHON_BLUEBIT_CODED_THREE_MOTOR_ON_I2C_MESSAGE0 = '編碼電機 模式 %1 撥碼 %2 M1速度 %3 M2速度 %4';

Blockly.Msg.MPYTHON_BLUEBIT_CODED_STOP_MOTOR_ON_I2C_HELPURL = '';
Blockly.Msg.MPYTHON_BLUEBIT_CODED_STOP_MOTOR_ON_I2C_TOOLTIP = '停止編碼電機轉動';
Blockly.Msg.MPYTHON_BLUEBIT_CODED_STOP_MOTOR_ON_I2C_MESSAGE0 = '停止編碼電機轉動 %1';

Blockly.Msg.MPYTHON_BLUEBIT_HUM_TEM_HELPURL = '';
Blockly.Msg.MPYTHON_BLUEBIT_HUM_TEM_TOOLTIP = '';
Blockly.Msg.MPYTHON_BLUEBIT_HUM_TEM_MESSAGE0 = 'I2C %1';

Blockly.Msg.MPYTHON_BLUEBIT_TEMPERATURE = '溫度';
Blockly.Msg.MPYTHON_BLUEBIT_HUMIDITY = '濕度';

Blockly.Msg.MPYTHON_BLUEBIT_INIT_MIDI_HELPURL = '';
Blockly.Msg.MPYTHON_BLUEBIT_INIT_MIDI_MESSAGE0 = '初始化MIDI TX引脚 %1';
Blockly.Msg.MPYTHON_BLUEBIT_INIT_MIDI_TOOLTIP = '';

Blockly.Msg.MPYTHON_BLUEBIT_MIDI_VOLUME_HELPURL = '';
Blockly.Msg.MPYTHON_BLUEBIT_MIDI_VOLUME_MESSAGE0 = '設MIDI音量 %1';
Blockly.Msg.MPYTHON_BLUEBIT_MIDI_VOLUME_TOOLTIP = '音量 0~127';

Blockly.Msg.MIDI_PIANO = "平臺鋼琴"; //ACOUSTIC GRAND PIANO
Blockly.Msg.MIDI_BRIGHTACOUSTICPIANO = "亮音鋼琴";
Blockly.Msg.MIDI_ELECTRICGRANDPIANO = "電鋼琴";
Blockly.Msg.MIDI_HARPSICHORD = "大鍵琴";
Blockly.Msg.MIDI_CELESTA = "鋼片琴";
Blockly.Msg.MIDI_GLOCKENSPIEL = "鍾琴";
Blockly.Msg.MIDI_MUSICALBOX = "音樂盒";
Blockly.Msg.MIDI_MARIMBA = "馬林巴琴";
Blockly.Msg.MIDI_XYLOPHONE = "木琴";
Blockly.Msg.MIDI_TUBULARBELL = "管鐘";
Blockly.Msg.MIDI_DULCIMER = "洋琴";
Blockly.Msg.MIDI_VIBRAPHONE = "顫音琴"; //VIBRAPHONE
Blockly.Msg.MIDI_ORGAN = "音栓風琴"; //DRAWBAR ORGAN
Blockly.Msg.MIDI_ACOUSTIC_GUITAR = "木吉他"; //ACOUSTIC GUITAR
Blockly.Msg.MIDI_ELECTRIC_GUITAR = "電吉他"; //ELECTRIC GUITAR
Blockly.Msg.MIDI_ACOUSTIC_BASS = "民謠貝斯";  //ACOUSTIC BASS
Blockly.Msg.MIDI_STRING_ENSEMBLE = "弦樂合奏";  //STRING ENSEMBLE
Blockly.Msg.MIDI_VIOLIN = "小提琴";  //VIOLIN
Blockly.Msg.MIDI_TRUMPET = "小號";  //TRUMPET
Blockly.Msg.MIDI_SAX = "薩克斯";  //SAX
Blockly.Msg.MIDI_STEEL_DRUMS = "鋼鼓";  //STEEL DRUMS
Blockly.Msg.MIDI_LEAD = "合成音主旋律";  //LEAD
Blockly.Msg.MIDI_PAD = "合成音襯底";  //PAD

Blockly.Msg.MPYTHON_BLUEBIT_MIDI_INSTRUMENT_HELPURL = '';
Blockly.Msg.MPYTHON_BLUEBIT_MIDI_INSTRUMENT_MESSAGE0 = '設MIDI樂器 %1';
Blockly.Msg.MPYTHON_BLUEBIT_MIDI_INSTRUMENT_TOOLTIP = '';

Blockly.Msg.MPYTHON_BLUEBIT_MIDI_PLAY_HELPURL = '';
Blockly.Msg.MPYTHON_BLUEBIT_MIDI_PLAY_MESSAGE0 = 'MIDI %1 音調 %2';
Blockly.Msg.MPYTHON_BLUEBIT_MIDI_PLAY_TOOLTIP = '';

Blockly.Msg.MPYTHON_BLUEBIT_MATRIX_BRIGHTNESS_HELPURL = '';
Blockly.Msg.MPYTHON_BLUEBIT_MATRIX_BRIGHTNESS_MESSAGE0 = '設點陣亮度等級 %1';
Blockly.Msg.MPYTHON_BLUEBIT_MATRIX_BRIGHTNESS_TOOLTIP = '亮度等級 0~15';

Blockly.Msg.MPYTHON_BLUEBIT_MATRIX_FILL_HELPURL = '';
Blockly.Msg.MPYTHON_BLUEBIT_MATRIX_FILL_MESSAGE0 = '點陣 %1';
Blockly.Msg.MPYTHON_BLUEBIT_MATRIX_FILL_TOOLTIP = '';

Blockly.Msg.MPYTHON_BLUEBIT_MATRIX_BITMAP_HELPURL = '';
Blockly.Msg.MPYTHON_BLUEBIT_MATRIX_BITMAP_MESSAGE0 = '設置點陣  %1 %2 %3 %4 %5 %6 %7 %8 %9 %10 %11 %12 %13 %14 %15 %16 %17 %18 %19 %20 %21 %22 %23 %24 %25 %26 %27 %28 %29 %30 %31 %32 %33 %34 %35 %36 %37 %38 %39 %40 %41 %42 %43 %44 %45 %46 %47 %48 %49 %50 %51 %52 %53 %54 %55 %56 %57 %58 %59 %60 %61 %62 %63 %64 %65 %66 %67 %68 %69 %70 %71 %72';
Blockly.Msg.MPYTHON_BLUEBIT_MATRIX_BITMAP_TOOLTIP = '';

Blockly.Msg.MPYTHON_BLUEBIT_MATRIX_SHOW_HELPURL = '';
Blockly.Msg.MPYTHON_BLUEBIT_MATRIX_SHOW_MESSAGE0 = '點陣設置生效';
Blockly.Msg.MPYTHON_BLUEBIT_MATRIX_SHOW_TOOLTIP = '';

Blockly.Msg.MPYTHON_BLUEBIT_MP3_VOLUME_HELPURL = '';
Blockly.Msg.MPYTHON_BLUEBIT_MP3_VOLUME_MESSAGE0 = '設MP3音量 %1';
Blockly.Msg.MPYTHON_BLUEBIT_MP3_VOLUME_TOOLTIP = '音量：0~30';

Blockly.Msg.MPYTHON_BLUEBIT_MP3_INIT_HELPURL = '';
Blockly.Msg.MPYTHON_BLUEBIT_MP3_INIT_MESSAGE0 = '初始化MP3 TX引脚 %1';
Blockly.Msg.MPYTHON_BLUEBIT_MP3_INIT_TOOLTIP = '掌控板的 tx 引脚連接音樂模塊的 RXI 引脚';

Blockly.Msg.MPYTHON_BLUEBIT_MP3_VOLUME_PLUS_HELPURL = '';
Blockly.Msg.MPYTHON_BLUEBIT_MP3_VOLUME_PLUS_MESSAGE0 = 'MP3 音量 %1';
Blockly.Msg.MPYTHON_BLUEBIT_MP3_VOLUME_PLUS_TOOLTIP = '';
Blockly.Msg.MPYTHON_PLUS_1 = '加1';
Blockly.Msg.MPYTHON_MINUS_1 = '減1';

Blockly.Msg.MPYTHON_BLUEBIT_MP3_PLAY_SONG_HELPURL = '';
Blockly.Msg.MPYTHON_BLUEBIT_MP3_PLAY_SONG_MESSAGE0 = 'MP3 播放第 %1 首歌';
Blockly.Msg.MPYTHON_BLUEBIT_MP3_PLAY_SONG_TOOLTIP = '';

Blockly.Msg.MPYTHON_BLUEBIT_MP3_CMD_HELPURL = '';
Blockly.Msg.MPYTHON_BLUEBIT_MP3_CMD_MESSAGE0 = 'MP3 播放 %1';
Blockly.Msg.MPYTHON_BLUEBIT_MP3_CMD_TOOLTIP = '';

Blockly.Msg.MPYTHON_BLUEBIT_MP3_SINGLELOOP_HELPURL = '';
Blockly.Msg.MPYTHON_BLUEBIT_MP3_SINGLELOOP_MESSAGE0 =  'Mp3 單曲循環 %1';
Blockly.Msg.MPYTHON_BLUEBIT_MP3_SINGLELOOP_TOOLTIP = '';

Blockly.Msg.MPYTHON_BLUEBIT_EXTIO_IOMODE_HELPURL = '';
Blockly.Msg.MPYTHON_BLUEBIT_EXTIO_IOMODE_MESSAGE0 =  '設擴展端口 IO %2 為 %1';
Blockly.Msg.MPYTHON_BLUEBIT_EXTIO_IOMODE_TOOLTIP = 'IO: 0~7';

Blockly.Msg.MPYTHON_BLUEBIT_EXTIO_READIO_HELPURL = '';
Blockly.Msg.MPYTHON_BLUEBIT_EXTIO_READIO_MESSAGE0 =  '擴展端口值 IO %1';
Blockly.Msg.MPYTHON_BLUEBIT_EXTIO_READIO_TOOLTIP = '';

Blockly.Msg.MPYTHON_BLUEBIT_EXTIO_WRITEIO_HELPURL = '';
Blockly.Msg.MPYTHON_BLUEBIT_EXTIO_WRITEIO_MESSAGE0 =  '設擴展端口 IO %2 為 %1';
Blockly.Msg.MPYTHON_BLUEBIT_EXTIO_WRITEIO_TOOLTIP = '';

Blockly.Msg.MPYTHON_LCD_OBJECT_HELPURL = '';
Blockly.Msg.MPYTHON_LCD_OBJECT_MESSAGE0 = 'LCD1602 初始化';
Blockly.Msg.MPYTHON_LCD_OBJECT_TOOLTIP = '';

Blockly.Msg.MPYTHON_LCD_PRINT_HELPURL = '';
Blockly.Msg.MPYTHON_LCD_PRINT_MESSAGE0 = 'LCD1602 顯示 %1';
Blockly.Msg.MPYTHON_LCD_PRINT_TOOLTIP = '';

Blockly.Msg.MPYTHON_LCD_HOME_HELPURL = '';
Blockly.Msg.MPYTHON_LCD_HOME_MESSAGE0 = 'LCD1602 光標 回到原點';
Blockly.Msg.MPYTHON_LCD_HOME_TOOLTIP = '';

Blockly.Msg.MPYTHON_LCD_CURSOR_HELPURL = '';
Blockly.Msg.MPYTHON_LCD_CURSOR_MESSAGE0 = 'LCD1602 光標 %1';
Blockly.Msg.MPYTHON_LCD_CURSOR_TOOLTIP = '';

Blockly.Msg.MPYTHON_LCD_SET_CURSOR_HELPURL = '';
Blockly.Msg.MPYTHON_LCD_SET_CURSOR_MESSAGE0 = 'LCD1602 起始點 行 %2 列 %1';
Blockly.Msg.MPYTHON_LCD_SET_CURSOR_TOOLTIP = '行列從0開始計數';

Blockly.Msg.MPYTHON_LCD_CLEAR_HELPURL = '';
Blockly.Msg.MPYTHON_LCD_CLEAR_MESSAGE0 = 'LCD1602 清屏';
Blockly.Msg.MPYTHON_LCD_CLEAR_TOOLTIP = '';

Blockly.Msg.MPYTHON_LCD_CURSOR_BLINK = '閃爍';
Blockly.Msg.MPYTHON_LCD_CURSOR_NO_BLINK = '不閃爍';

Blockly.Msg.MPYTHON_RIGHT_TO_LEFT = '從右向左';
Blockly.Msg.MPYTHON_LEFT_TO_RIGHT = '從左向右';

Blockly.Msg.MPYTHON_LCD_TEXT_DIRECTION_HELPURL = '';
Blockly.Msg.MPYTHON_LCD_TEXT_DIRECTION_MESSAGE0 = 'LCD1602 文字方向 %1';
Blockly.Msg.MPYTHON_LCD_TEXT_DIRECTION_TOOLTIP = '';

Blockly.Msg.MPYTHON_LCD_MOVE_HELPURL = '';
Blockly.Msg.MPYTHON_LCD_MOVE_MESSAGE0 = 'LCD1602 向 %1 滾動一格';
Blockly.Msg.MPYTHON_LCD_MOVE_TOOLTIP = '';

Blockly.Msg.MPYTHON_IR_TRANS_HELPURL = '';
Blockly.Msg.MPYTHON_IR_TRANS_MESSAGE0 = '紅外發送 單字節字符串 %1 tx 引脚 %2';
Blockly.Msg.MPYTHON_IR_TRANS_TOOLTIP = 
`
單字節字符串：
'A', 'b', '1'等
`

Blockly.Msg.OUTPUT_PIN_HELPURL = '';
Blockly.Msg.OUTPUT_PIN_MESSAGE0 = '%1';
Blockly.Msg.OUTPUT_PIN_TOOLTIP = "";

Blockly.Msg.INPUT_PIN_HELPURL = '';
Blockly.Msg.INPUT_PIN_MESSAGE0 = '%1';
Blockly.Msg.INPUT_PIN_TOOLTIP = "";

Blockly.Msg.READ_ANALOG_PIN_HELPURL = ''
Blockly.Msg.READ_ANALOG_PIN_MESSAGE0 = '%1'
Blockly.Msg.READ_ANALOG_PIN_TOOLTIP = ""

Blockly.Msg.SET_DIGITAL_HELPURL = ''
Blockly.Msg.SET_DIGITAL_MESSAGE0 = '%1'
Blockly.Msg.SET_DIGITAL_TOOLTIP = ""

Blockly.Msg.SET_ANALOG_HELPURL = ''
Blockly.Msg.SET_ANALOG_MESSAGE0 = '%1'
Blockly.Msg.SET_ANALOG_TOOLTIP = ""

Blockly.Msg.ALL_PIN_HELPURL = ''
Blockly.Msg.ALL_PIN_MESSAGE0 = '%1'
Blockly.Msg.ALL_PIN_TOOLTIP = ""

Blockly.Msg.PWM_PIN_HELPURL = ''
Blockly.Msg.PWM_PIN_MESSAGE0 = '%1'
Blockly.Msg.PWM_PIN_TOOLTIP = ""

Blockly.Msg.DH11_HUM_TEM_PIN_HELPURL = ''
Blockly.Msg.DH11_HUM_TEM_PIN_MESSAGE0 = '%1'
Blockly.Msg.DH11_HUM_TEM_PIN_TOOLTIP = ""

Blockly.Msg.UART_TX_PIN_HELPURL = ''
Blockly.Msg.UART_TX_PIN_MESSAGE0 = '%1'
Blockly.Msg.UART_TX_PIN_TOOLTIP = ""

Blockly.Msg.UART_RX_PIN_HELPURL = ''
Blockly.Msg.UART_RX_PIN_MESSAGE0 = '%1'
Blockly.Msg.UART_RX_PIN_TOOLTIP = ""

Blockly.Msg.I2C_PIN_HELPURL = ''
Blockly.Msg.I2C_PIN_MESSAGE0 = '%1'
Blockly.Msg.I2C_PIN_TOOLTIP = ""






Blockly.Msg.MQTT_COMMON_SETUP_HELPURL = 'https://mpython.readthedocs.io/zh/master/library/mPython/umqtt.simple.html?highlight=mqtt#MQTTClient'
Blockly.Msg.MQTT_COMMON_SETUP_MESSAGE0 = 'MQTT %1 client_id %2 server %3 port %4 user %5 password %6 keepalive %7';
Blockly.Msg.MQTT_COMMON_SETUP_TOOLTIP = "";

Blockly.Msg.MQTT_TENCENT_SETUP_HELPURL = 'https://mpython.readthedocs.io/zh/master/library/mPython/umqtt.simple.html?highlight=mqtt#MQTTClient'
Blockly.Msg.MQTT_TENCENT_SETUP_MESSAGE0 = 'MQTT 騰訊物聯網 %1 服務器 %2 Port %3 AppId %4 Device %5 -- 傳出參數 -- %6 ReportTopic %7 ControlTopic %8';
Blockly.Msg.MQTT_TENCENT_SETUP_TOOLTIP = "";

Blockly.Msg.MQTT_TENCENT_SETUPS_HELPURL = 'https://mpython.readthedocs.io/zh/master/library/mPython/umqtt.simple.html?highlight=mqtt#MQTTClient'
Blockly.Msg.MQTT_TENCENT_SETUPS_MESSAGE0 = 'MQTT 騰訊物聯網 %1 服務器 %2 Port %3 AppId %4 Device %5 -- 傳出參數 -- %6 ReportTopic %7 ControlTopic %8';
Blockly.Msg.MQTT_TENCENT_SETUPS_TOOLTIP = "";

Blockly.Msg.MQTT_SETUP_HELPURL = 'https://mpython.readthedocs.io/zh/master/tutorials/advance/iot/mqtt.html#id2'
Blockly.Msg.MQTT_SETUP_MESSAGE0 = 'MQTT-Easy IoT %1 服務器 %2  Client ID %5 Iot_id %3 Iot_pwd %4';
Blockly.Msg.MQTT_SETUP_TOOLTIP = "";

Blockly.Msg.MQTT_CONNECT_HELPURL = 'https://mpython.readthedocs.io/zh/master/tutorials/advance/iot/mqtt.html#id2'
Blockly.Msg.MQTT_CONNECT_MESSAGE0 = '連接 MQTT';
Blockly.Msg.MQTT_CONNECT_TOOLTIP = "";

Blockly.Msg.MQTT_PUBLISH_HELPURL = 'https://mpython.readthedocs.io/zh/master/tutorials/advance/iot/mqtt.html#id2'
Blockly.Msg.MQTT_PUBLISH_MESSAGE0 = '發佈 %1 至 主題 %2';
Blockly.Msg.MQTT_PUBLISH_TOOLTIP = "";

Blockly.Msg.MQTT_REC_FROM_TOPIC_HELPURL = 'https://mpython.readthedocs.io/zh/master/tutorials/advance/iot/mqtt.html#id2'
Blockly.Msg.MQTT_REC_FROM_TOPIC_MESSAGE0 = '當從主題 %1 接收到 %2 時';
Blockly.Msg.MQTT_REC_FROM_TOPIC_TOOLTIP = "";

Blockly.Msg.MQTT_RECEIVE_HELPURL = 'https://mpython.readthedocs.io/zh/master/tutorials/advance/iot/mqtt.html#id2'
Blockly.Msg.MQTT_RECEIVE_MESSAGE0 = '當從主題 %1 接收到 %2 時';
Blockly.Msg.MQTT_RECEIVE_TOOLTIP = "參數\"主題\"只接受變量";

Blockly.Msg.MQTT_RECEIVED_MESSAGE0 = '當從主題 %1 接收到消息 時';

Blockly.Msg.MQTT_MESSAGE_HELPURL = 'https://mpython.readthedocs.io/zh/master/tutorials/advance/iot/mqtt.html#id2'
Blockly.Msg.MQTT_MESSAGE_MESSAGE0 = '從 MQTT 收到的消息';
Blockly.Msg.MQTT_MESSAGE_TOOLTIP = "";

Blockly.Msg.MQTT_WAIT_MSG_HELPURL = 'https://mpython.readthedocs.io/zh/master/tutorials/advance/iot/mqtt.html#id2'
Blockly.Msg.MQTT_WAIT_MSG_MESSAGE0 = '等待主題消息 以 %1 模式';
Blockly.Msg.MQTT_WAIT_MSG_TOOLTIP = "建議放在'一直重複'中運行";

Blockly.Msg.MQTT_DISCONNECT_HELPURL = 'https://mpython.readthedocs.io/zh/master/tutorials/advance/iot/mqtt.html#id2'
Blockly.Msg.MQTT_DISCONNECT_MESSAGE0 = 'MQTT 斷開連接';
Blockly.Msg.MQTT_DISCONNECT_TOOLTIP = "";

Blockly.Msg.MQTT_LAST_WILL_HELPURL = 'https://mpython.readthedocs.io/zh/master/library/mPython/umqtt.simple.html?highlight=mqtt#MQTTClient.set_last_will'
Blockly.Msg.MQTT_LAST_WILL_MESSAGE0 = '設置 MQTT 主題 %2 離綫消息 %1';
Blockly.Msg.MQTT_LAST_WILL_TOOLTIP = "設置 MQTT last will 消息。應該在 connect() 之前調用。";

// SIoT
Blockly.Msg.MPYTHON_SIOT_CONNECT_HELPURL = '';
Blockly.Msg.MPYTHON_SIOT_CONNECT_TOOLTIP = '';
Blockly.Msg.MPYTHON_SIOT_CONNECT_MESSAGE0 = '創建 SIoT 連接 %1 客戶端ID %2 服務器 %3 用戶 %4 密碼 %5';

Blockly.Msg.MPYTHON_SIOT_ISCONNECTED_HELPURL = '';
Blockly.Msg.MPYTHON_SIOT_ISCONNECTED_TOOLTIP = '';
Blockly.Msg.MPYTHON_SIOT_ISCONNECTED_MESSAGE0 = 'SIoT 連接成功 ?';

Blockly.Msg.MPYTHON_SIOT_SUBSCRIBE_HELPURL = '';
Blockly.Msg.MPYTHON_SIOT_SUBSCRIBE_TOOLTIP = '';
Blockly.Msg.MPYTHON_SIOT_SUBSCRIBE_MESSAGE0 = 'SIoT 訂閱主題';

Blockly.Msg.MPYTHON_SIOT_SUBSCRIBE_EMPTY_TITLE = "點擊左邊星號 訂閱 SIoT 主題";
Blockly.Msg.MPYTHON_SIOT_SUBSCRIBE_INPUT_WITH = "SIoT 訂閱 主題1";
Blockly.Msg.MPYTHON_SIOT_SUBSCRIBE_ITEM_TITLE = "主題";
Blockly.Msg.MPYTHON_SIOT_SUBSCRIBE_ITEM_TOOLTIP = "";
Blockly.Msg.MPYTHON_SIOT_SUBSCRIBE_CONTAINER_TITLE_ADD = "最多訂閱 5 個主題";
Blockly.Msg.MPYTHON_SIOT_SUBSCRIBE_CONTAINER_TOOLTIP = "";

Blockly.Msg.MPYTHON_SIOT_DISCONNECT_HELPURL = "";
Blockly.Msg.MPYTHON_SIOT_DISCONNECT_TOOLTIP = "";
Blockly.Msg.MPYTHON_SIOT_DISCONNECT_MESSAGE0 = "SIoT 斷開連接";

Blockly.Msg.MPYTHON_SIOT_MESSAGE_HELPURL = "";
Blockly.Msg.MPYTHON_SIOT_MESSAGE_TOOLTIP = "";
Blockly.Msg.MPYTHON_SIOT_MESSAGE_MESSAGE0 = "從 SIoT 收到的消息";

Blockly.Msg.MPYTHON_SIOT_TOPIC1 = "主題1";
Blockly.Msg.MPYTHON_SIOT_TOPIC2 = "主題2";
Blockly.Msg.MPYTHON_SIOT_TOPIC3 = "主題3";
Blockly.Msg.MPYTHON_SIOT_TOPIC4 = "主題4";
Blockly.Msg.MPYTHON_SIOT_TOPIC5 = "主題5";

Blockly.Msg.MPYTHON_SIOT_PUBLISH_HELPURL = "";
Blockly.Msg.MPYTHON_SIOT_PUBLISH_TOOLTIP = "";
Blockly.Msg.MPYTHON_SIOT_PUBLISH_MESSAGE0 = "SIoT 發送消息 %1 到 %2";
Blockly.Msg.MPYTHON_SIOT_PUBLISH_TO_MESSAGE0 = "SIoT 發送消息 %1 到 主題 %2";

Blockly.Msg.MPYTHON_SIOT_RECEIVE_HELPURL = "";
Blockly.Msg.MPYTHON_SIOT_RECEIVE_TOOLTIP = "";
Blockly.Msg.MPYTHON_SIOT_RECEIVE_MESSAGE0 = "當從 SIoT %1 收到消息時 %2 執行 %3";
Blockly.Msg.MPYTHON_SIOT_RECEIVE_FROM_MESSAGE0 = "當從 SIoT 主題 %1 收到消息時 %2 執行 %3";


Blockly.Msg.MPYTHON_IR_RECV_HELPURL = '';
Blockly.Msg.MPYTHON_IR_RECV_MESSAGE0 = '紅外接收 整型  rx 引脚 %1';
Blockly.Msg.MPYTHON_IR_RECV_TOOLTIP = '第一次接收總爲空';

Blockly.Msg.MPYTHON_BLUEBIT_OLED_PRINT_HELPURL = '';
Blockly.Msg.MPYTHON_BLUEBIT_OLED_PRINT_MESSAGE0 = 'bluebit OLED 顯示 %1 x %2 y %3';
Blockly.Msg.MPYTHON_BLUEBIT_OLED_PRINT_TOOLTIP = '';

Blockly.Msg.MPYTHON_BLUEBIT_OLED_INIT_HELPURL = '';
Blockly.Msg.MPYTHON_BLUEBIT_OLED_INIT_MESSAGE0 = 'bluebit OLED 初始化 tx %1 rx %2';
Blockly.Msg.MPYTHON_BLUEBIT_OLED_INIT_TOOLTIP = '';

Blockly.Msg.MPYTHON_BLUEBIT_OLED_CLEAR_HELPURL = '';
Blockly.Msg.MPYTHON_BLUEBIT_OLED_CLEAR_MESSAGE0 = 'bluebit OLED 清空';
Blockly.Msg.MPYTHON_BLUEBIT_OLED_CLEAR_TOOLTIP = '';

Blockly.Msg.MPYTHON_BLUEBIT_OLED_BMP_HELPURL = '';
Blockly.Msg.MPYTHON_BLUEBIT_OLED_BMP_MESSAGE0 = 'bluebit OLED 顯示圖像 x %1 y %2 寬 %3 高 %4 16進制圖像數據 %5';
Blockly.Msg.MPYTHON_BLUEBIT_OLED_BMP_TOOLTIP = '';


/*掌控板 - 扩展 - Bluebit - 结束 */

/*掌控实验箱*/
Blockly.Msg.mpython_bme280_hum_tem_pre_MESSAGE0 ='气象 %1';
Blockly.Msg.mpython_bme280_hum_tem_pre_TOOLTIP = '气压单位Pa, 温度单位摄氏度, 环境湿度单位%';

Blockly.Msg.mpythonbox_sound_MESSAGE0 ='聲音值';
Blockly.Msg.mpythonbox_sound_TOOLTIP = '採樣數據，为0~4095。';
Blockly.Msg.mpythonbox_sound_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mPythonBox/lib/mpython.html';

Blockly.Msg.MPYTHONBOX_SLIDER_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mPythonBox/lib/mpython_box.html#mpython-box';
Blockly.Msg.MPYTHONBOX_SLIDER_MESSAGE0 = '滑杆';
Blockly.Msg.MPYTHONBOX_SLIDER_TOOLTIP = '返回滑杆電阻採樣值。範圍0~4095。';

Blockly.Msg.MPYTHONBOX_5BUTTON_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mPythonBox/lib/mpython_box.html#mpython-box';
Blockly.Msg.MPYTHONBOX_5BUTTON_MESSAGE0 = '五向按鍵%1';
Blockly.Msg.MPYTHONBOX_5BUTTON_TOOLTIP = '';

Blockly.Msg.MPYTHONBOX_MOTOR_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mPythonBox/lib/mpython_box.html#mpython-box';
Blockly.Msg.MPYTHONBOX_MOTOR_MESSAGE0 = '馬達 速度%1';
Blockly.Msg.MPYTHONBOX_MOTOR_TOOLTIP = '馬達速度，範圍±100。正值表示正轉，負值則反。';

Blockly.Msg.MPYTHONBOX_ULTRASONIC_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mPythonBox/lib/mpython_box.html#mpython_box.get_key';
Blockly.Msg.MPYTHONBOX_ULTRASONIC_MESSAGE0 = '超聲波';
Blockly.Msg.MPYTHONBOX_ULTRASONIC_TOOLTIP = '超聲波測距，獲取超聲波感測器測距值，組織cm。範圍3~340CM';

Blockly.Msg.MPYTHONBOX_THEHUMANBODYINFRARE_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mPythonBox/lib/mpython_box.html#mpython_box.get_key';
Blockly.Msg.MPYTHONBOX_THEHUMANBODYINFRARE_MESSAGE0 = '人體紅外';
Blockly.Msg.MPYTHONBOX_THEHUMANBODYINFRARE_TOOLTIP = '返回人體紅外觸發值。當為1時，表示已觸發；當為0時，表示未觸發。';

Blockly.Msg.MPYTHONBOX_RGB_pixel_HELPURL = '';
Blockly.Msg.MPYTHONBOX_RGB_pixel_MESSAGE0 = '設定第 %1列 %2行  R%3 G%4 B%5';
Blockly.Msg.MPYTHONBOX_RGB_pixel_TOOLTIP = '設定第多少列，行的RGB顏色';

Blockly.Msg.MPYTHONBOX_RGB_get_pixel_HELPURL = ''; 
Blockly.Msg.MPYTHONBOX_RGB_get_pixel_MESSAGE0 = '返回 第%1列 %2行 RGB颜色';
Blockly.Msg.MPYTHONBOX_RGB_get_pixel_TOOLTIP = '返回第多少列，行位置的RGB顏色';

Blockly.Msg.MPYTHONBOX_RGB_ImageText_HELPURL = '';
Blockly.Msg.MPYTHONBOX_RGB_ImageText_MESSAGE0 = '滾動顯示文本%1  速度%2';
Blockly.Msg.MPYTHONBOX_RGB_ImageText_TOOLTIP = '滾動顯示文字，亮度為0不亮，9最亮';

Blockly.Msg.MPYTHONBOX_RGB_SetImage_HELPURL = ''
Blockly.Msg.MPYTHONBOX_RGB_SetImage_TOOLTIP = '';
Blockly.Msg.MPYTHONBOX_RGB_SetImage_MESSAGE0 = '創建圖像 %1 第一行%2第二行%3第三行%4第四行%5第五行%6';

Blockly.Msg.MPYTHONBOX_RGB_Image_HELPURL = '';
Blockly.Msg.MPYTHONBOX_RGB_Image_MESSAGE0 = '顯示影像%1';
Blockly.Msg.MPYTHONBOX_RGB_Image_TOOLTIP = '顯示影像';

Blockly.Msg.MPYTHONBOX_RGB_SetImage_HELPURL = '';
Blockly.Msg.MPYTHONBOX_RGB_SetImage_MESSAGE0 = '創建影像 %1 第一行%2第二行%3第三行%4第四行%5第五行%6';
Blockly.Msg.MPYTHONBOX_RGB_SetImage_TOOLTIP = '創建新影像，每行每位數代表第幾比特燈，默認紅色；亮度為0不亮，9最亮。';

Blockly.Msg.MPYTHONBOX_RGB_SHOW_IMAGE_MESSAGE0 = '顯示影像/文本 %1';
Blockly.Msg.MPYTHONBOX_RGB_SHOW_IMAGE_TOOLTIP = '顯示影像或文字消息。';
Blockly.Msg.MPYTHONBOX_RGB_SHOW_IMAGE_HELPURL = '';

Blockly.Msg.MPYTHONBOX_RGB_SHOW_IMAGEImport_MESSAGE0 = '顯示影像 %1';
Blockly.Msg.MPYTHONBOX_RGB_SHOW_IMAGEImport_TOOLTIP = '顯示影像。';
Blockly.Msg.MPYTHONBOX_RGB_SHOW_IMAGEImport_HELPURL = '';

Blockly.Msg.MPYTHONBOX_RGB_SHOW_IMAGE_Copy_MESSAGE0 = '複製影像 %1';
Blockly.Msg.MPYTHONBOX_RGB_SHOW_IMAGE_Copy_TOOLTIP = '複製影像。';
Blockly.Msg.MPYTHONBOX_RGB_SHOW_IMAGE_Copy_HELPURL = '';

Blockly.Msg.MPYTHONBOX_RGB_ImageCot_HELPURL = '';
Blockly.Msg.MPYTHONBOX_RGB_ImageCot_MESSAGE0 = '切剪影像%1  列%2  行%3 宽%4 高%5';
Blockly.Msg.MPYTHONBOX_RGB_ImageCot_TOOLTIP = '切剪影像';

Blockly.Msg.MPYTHONBOX_RGB_IMAGE_BUILTINS_MESSAGE0 = '內寘影像 %1';
Blockly.Msg.MPYTHONBOX_RGB_IMAGE_BUILTINS_TOOLTIP = '選擇一個內寘的影像。';
Blockly.Msg.MPYTHONBOX_RGB_IMAGE_BUILTINS_HELPURL = '';

Blockly.Msg.MPYTHONBOX_RGB_IMAGE_SHIFT_MESSAGE0 = '平移影像 %1 %2 %3 位';
Blockly.Msg.MPYTHONBOX_RGB_IMAGE_SHIFT_TOOLTIP = '向特定方向移動影像，並返回移動後的結果。';
Blockly.Msg.MPYTHONBOX_RGB_IMAGE_SHIFT_HELPURL = '';

Blockly.Msg.MPYTHONBOX_RGB_clear_HELPURL = '';
Blockly.Msg.MPYTHONBOX_RGB_clear_MESSAGE0 = '關閉所有 RGB 燈';
Blockly.Msg.MPYTHONBOX_RGB_clear_TOOLTIP = '';

Blockly.Msg.MPYTHONBOX_RGB_pixel_return_HELPURL = '';
Blockly.Msg.MPYTHONBOX_RGB_pixel_return_MESSAGE0 = '返回第 %1列 %2行 顏色';
Blockly.Msg.MPYTHONBOX_RGB_pixel_return_TOOLTIP = '返回第多少列，行的RGB顏色';

Blockly.Msg.MPYTHONBOX_TRIAXIAL_ACCELERATION_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython.html';
Blockly.Msg.MPYTHONBOX_TRIAXIAL_ACCELERATION_MESSAGE0 = '%1軸加速度';
Blockly.Msg.MPYTHONBOX_TRIAXIAL_ACCELERATION_TOOLTIP = '单位g,范围-2~+2g。';

Blockly.Msg.MPYTHONBOX_TRIAXIAL_AUGULAR_VELOCITY_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython.html';
Blockly.Msg.MPYTHONBOX_TRIAXIAL_AUGULAR_VELOCITY_MESSAGE0 = '%1軸角速度';
Blockly.Msg.MPYTHONBOX_TRIAXIAL_AUGULAR_VELOCITY_TOOLTIP = '范围±500°/秒';

Blockly.Msg.MPYTHONBOX_EULER_ANGLE_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython.html';
Blockly.Msg.MPYTHONBOX_EULER_ANGLE_MESSAGE0 = '%1歐拉角';
Blockly.Msg.MPYTHONBOX_EULER_ANGLE_TOOLTIP = '返回當前歐拉角(Pitch,Roll,Yaw),單位角度';

Blockly.Msg.MPYTHONBOX_QUATERNION_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython.html';
Blockly.Msg.MPYTHONBOX_QUATERNION_MESSAGE0 = '%1四元數';
Blockly.Msg.MPYTHONBOX_QUATERNION_TOOLTIP = '返回當前四元數(w,x,y,z)';

Blockly.Msg.MPYTHONBOX_CAMERA_LED_HELPURL = '';
Blockly.Msg.MPYTHONBOX_CAMERA_LED_MESSAGE0 = '攝像燈%1';
Blockly.Msg.MPYTHONBOX_CAMERA_LED_TOOLTIP = 'led燈，分為打開和關閉兩種狀態';

Blockly.Msg.LIST_FIRST_INDEX_HELPURL = '';
Blockly.Msg.LIST_FIRST_INDEX_MESSAGE0 = '項 %1 在列表 %2 %3 出現的位置';
Blockly.Msg.LIST_FIRST_INDEX_TOOLTIP = '';


/*AI类*/
Blockly.Msg.MPYTHON_AI_LCD_INIT_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.lcd.init';
Blockly.Msg.MPYTHON_AI_LCD_INIT_MESSAGE0 = '螢幕 初始化 ';
Blockly.Msg.MPYTHON_AI_LCD_INIT_TOOLTIP = '初始化 螢幕顯示';

Blockly.Msg.MPYTHON_AI_SENSOR_RESET_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/sensor.html#%E5%8D%95%E7%9B%AE%E6%91%84%E5%83%8F%E5%A4%B4%E9%87%8D%E7%BD%AE%E5%87%BD%E6%95%B0';
Blockly.Msg.MPYTHON_AI_SENSOR_RESET_MESSAGE0 = '監視器 初始化';
Blockly.Msg.MPYTHON_AI_SENSOR_RESET_TOOLTIP = '初始化單目監視器';

Blockly.Msg.MPYTHON_AI_SENSOR_ENABLE_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/sensor.html#%E8%8E%B7%E5%8F%96%E5%9B%BE%E5%83%8F';
Blockly.Msg.MPYTHON_AI_SENSOR_ENABLE_MESSAGE0 = '監視器%1';
Blockly.Msg.MPYTHON_AI_SENSOR_ENABLE_TOOLTIP = '获取影像';

Blockly.Msg.MPYTHON_AI_LCD_TEXT_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/lcd.html#%E4%BE%8B%E7%A8%8B-1%EF%BC%9A-%E6%98%BE%E7%A4%BA%E8%8B%B1%E6%96%87';
Blockly.Msg.MPYTHON_AI_LCD_TEXT_MESSAGE0 = '顯示文字 x %1 y %2 内容 %3';
Blockly.Msg.MPYTHON_AI_LCD_TEXT_TOOLTIP = '僅支持字母和數位';

Blockly.Msg.MPYTHON_AI_SENSOR_SKIP_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/sensor.html#%E8%B7%B3%E5%B8%A7';
Blockly.Msg.MPYTHON_AI_SENSOR_SKIP_MESSAGE0 = '監視器 跳過幀數%1 毫秒%2内的影像';
Blockly.Msg.MPYTHON_AI_SENSOR_SKIP_TOOLTIP = '監視器跳過指定幀數或者跳過指定時間內的影像';

Blockly.Msg.MPYTHON_AI_SENSOR_RETURN_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/sensor.html#%E5%88%86%E8%BE%A8%E7%8E%87%E5%AE%BD%E5%BA%A6';
Blockly.Msg.MPYTHON_AI_SENSOR_RETURN_MESSAGE0 = '测 監視器 获取%1';
Blockly.Msg.MPYTHON_AI_SENSOR_RETURN_TOOLTIP = '(AI)監視器返回参数(宽高，图像帧的格式，图像帧的大小)';

Blockly.Msg.MPYTHON_AI_SENSOR_SETS_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/sensor.html#%E8%AE%BE%E7%BD%AE%E5%AF%B9%E6%AF%94%E5%BA%A6';
Blockly.Msg.MPYTHON_AI_SENSOR_SETS_MESSAGE0 = '監視器 设置%1 为%2';
Blockly.Msg.MPYTHON_AI_SENSOR_SETS_TOOLTIP = '设置監視器对比度，亮度，饱和度范围为[-2,+2]';

Blockly.Msg.MPYTHON_AI_SENSOR_AUTO_GAIN_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/sensor.html#%E8%AE%BE%E7%BD%AE%E8%87%AA%E5%8A%A8%E5%A2%9E%E7%9B%8A';
Blockly.Msg.MPYTHON_AI_SENSOR_AUTO_GAIN_MESSAGE0 = '監視器 自動增益%1';
Blockly.Msg.MPYTHON_AI_SENSOR_AUTO_GAIN_TOOLTIP = '1開啟監視器自動增益0關閉監視器自動增益';

Blockly.Msg.MPYTHON_AI_SENSOR_AUTO_WHITEBAL_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/sensor.html#%E8%AE%BE%E7%BD%AE%E8%87%AA%E5%8A%A8%E5%A2%9E%E7%9B%8A';
Blockly.Msg.MPYTHON_AI_SENSOR_AUTO_WHITEBAL_MESSAGE0 = '監視器 白平衡%1';
Blockly.Msg.MPYTHON_AI_SENSOR_AUTO_WHITEBAL_TOOLTIP = '設定攝像自動白平衡模式，默認打開。True為打開，False為關閉自動白平衡。若您想追跡顏色，則需關閉白平衡。';

Blockly.Msg.MPYTHON_AI_SENSOR_LEVEL_MI_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/sensor.html#%E8%AE%BE%E7%BD%AE%E6%B0%B4%E5%B9%B3%E9%95%9C%E5%83%8F';
Blockly.Msg.MPYTHON_AI_SENSOR_LEVEL_MI_MESSAGE0 = '監視器 %1 %2';
Blockly.Msg.MPYTHON_AI_SENSOR_LEVEL_MI_TOOLTIP = '1表示開啟水准鏡像 0表示關閉水准鏡像';

Blockly.Msg.MPYTHON_AI_LCD_DISPLAY_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.lcd.display';
Blockly.Msg.MPYTHON_AI_LCD_DISPLAY_MESSAGE0 = '屏幕 顯示生效';
Blockly.Msg.MPYTHON_AI_LCD_DISPLAY_TOOLTIP = '可以在液晶屏上顯示';

Blockly.Msg.MPYTHON_AI_LCD_DISPLAY_SIZE_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.lcd.display';
Blockly.Msg.MPYTHON_AI_LCD_DISPLAY_SIZE_MESSAGE0 = '图像 顯示生效 x%1 y%2 宽%3 高%4';
Blockly.Msg.MPYTHON_AI_LCD_DISPLAY_SIZE_TOOLTIP = '可以在液晶屏上顯示一張圖片';

Blockly.Msg.MPYTHON_AI_SENSOR_IMAGES_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/sensor.html#%E8%8E%B7%E5%8F%96%E5%9B%BE%E5%83%8F';
Blockly.Msg.MPYTHON_AI_SENSOR_IMAGES_MESSAGE0 = '監視器 獲取影像';
Blockly.Msg.MPYTHON_AI_SENSOR_IMAGES_TOOLTIP = '控制監視器捕捉影像';

Blockly.Msg.MPYTHON_AI_IMAGE_FACEDETECT_HELPURL = 'https://maixpy.sipeed.com/zh/libs/Maix/kpu.html#%E8%BF%90%E8%A1%8Cyolo2%E7%BD%91%E7%BB%9C';
Blockly.Msg.MPYTHON_AI_IMAGE_FACEDETECT_MESSAGE0 = '人臉識別';
Blockly.Msg.MPYTHON_AI_IMAGE_FACEDETECT_TOOLTIP = '';

Blockly.Msg.MPYTHON_AI_LCD_SHOW_REC_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.image.draw_rectangle';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_REC_MESSAGE0 = '矩形%1 x%3 y%4 宽%5 高%6 颜色为 R%7 G%8 B%9  加粗%2';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_REC_TOOLTIP = '在影像上繪製矩形';

Blockly.Msg.MPYTHON_AI_LCD_SHOW_STRING_MESSAGE0 = '线条  x1%1 y1%2 到x2%3 y2%4 颜色为R%5 G%6 B%7 加粗%8';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_STRING_TOOLTIP = '在影像上繪製線條';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_STRING_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.image.draw_rectangle';

Blockly.Msg.MPYTHON_AI_LCD_CLEAR_ALL_MESSAGE0 = '螢幕 顯示清空';
Blockly.Msg.MPYTHON_AI_LCD_CLEAR_ALL_TOOLTIP = '將液晶屏清空為黑色或者指定的顏色';
Blockly.Msg.MPYTHON_AI_LCD_CLEAR_ALL_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.image.draw_rectangle';

Blockly.Msg.MPYTHON_AI_LCD_return_colour_MESSAGE0 = 'LCD 返回 x%1 y%2 顏色';
Blockly.Msg.MPYTHON_AI_LCD_return_colour_TOOLTIP = '返回某個座標點的顏色';
Blockly.Msg.MPYTHON_AI_LCD_return_colour_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.image.draw_rectangle';

Blockly.Msg.MPYTHON_AI_LCD_SHOW_CIRCLE_MESSAGE0 = '圓形%1 x%2 y%3 半径%4 顏色为 R%5 G%6 B%7 加粗%8';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_CIRCLE_TOOLTIP = '在影像上繪製圓形';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_CIRCLE_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.image.draw_rectangle';

Blockly.Msg.MPYTHON_AI_LCD_TEXT_MOST_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.image.draw_rectangle';
Blockly.Msg.MPYTHON_AI_LCD_TEXT_MOST_MESSAGE0 = '顯示文字 x %1 y %2 内容 %3 顏色为R%4 G%5 B%6 字号%7';
Blockly.Msg.MPYTHON_AI_LCD_TEXT_MOST_TOOLTIP = '僅支持字母和數位';

Blockly.Msg.MPYTHON_AI_LCD_SHOW_TEN_STRING_MESSAGE0 = '十字線  x%1 y%2 顏色为R%3 G%4 B%5 尺寸%6 加粗%7';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_TEN_STRING_TOOLTIP = '在影像上繪製十字線';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_TEN_STRING_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.image.draw_rectangle';

Blockly.Msg.MPYTHON_AI_LCD_SHOW_ARROWS_MESSAGE0 = '箭頭  x1%1 y1%2 到x2%3 y2%4 顏色为R%5 G%6 B%7  加粗%8';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_ARROWS_TOOLTIP = '在影像上繪製一個箭頭';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_ARROWS_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.image.draw_rectangle';

Blockly.Msg.MPYTHON_AI_LCD_SHOW_IMAGE_PIRCTURE_HELPURL = '.https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.lcd.display';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_IMAGE_PIRCTURE_MESSAGE0 = '顯示影像 路徑%1';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_IMAGE_PIRCTURE_TOOLTIP = '顯示影像';

Blockly.Msg.MPYTHON_AI_LCD_SHOW_IMAGE_HEAT_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.image.invert';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_IMAGE_HEAT_MESSAGE0 = '圖像轉換為%1';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_IMAGE_HEAT_TOOLTIP = '黑白翻轉是將二進位影像0（黑色）變為1（白色），1（白色）變為0（黑色），非常快速地翻轉二進位影像中的所有點數值。';

Blockly.Msg.MPYTHON_AI_LCD_SHOW_IMAGE_DESCARTES_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.image.linpolar';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_IMAGE_DESCARTES_MESSAGE0 = '影像 從笛卡爾座標到%1 座標重新投影 反向%2';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_IMAGE_DESCARTES_TOOLTIP = '';

Blockly.Msg.MPYTHON_AI_LCD_SHOW_IMAGE_EROSION_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.image.dilate';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_IMAGE_EROSION_MESSAGE0 = '影像 膨胀 級別%1';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_IMAGE_EROSION_TOOLTIP = '膨脹就是對影像高亮部分進行“領域擴張”，效果圖擁有比原圖更大的高亮區域。';

Blockly.Msg.MPYTHON_AI_LCD_SHOW_IMAGE_MIDDLE_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.image.midpoint';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_IMAGE_MIDDLE_MESSAGE0 = '影像 中点濾波 級別%1 滤波%2';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_IMAGE_MIDDLE_TOOLTIP = '控制影像混合的最小/最大程度。0只適用於最小濾波，1僅用於最大濾波。';

Blockly.Msg.MPYTHON_AI_LCD_SHOW_IMAGE_MODE_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.image.modehttps://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.image.mode';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_IMAGE_MODE_MESSAGE0 = '影像 众数濾波 級別%1';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_IMAGE_MODE_TOOLTIP = '在影像上運行眾數濾波，用相鄰點數的模式替換每個點數。';

Blockly.Msg.MPYTHON_AI_LCD_SHOW_IMAGE_INDISTINCT_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.image.mean';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_IMAGE_INDISTINCT_MESSAGE0 = '影像 模糊滤波 级别%1';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_IMAGE_INDISTINCT_TOOLTIP = '使用盒式濾波器的標準平均值模糊濾波。';

Blockly.Msg.MPYTHON_AI_LCD_SHOW_IMAGE_CARTOON_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.image.cartoon';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_IMAGE_CARTOON_MESSAGE0 = '影像 卡通化 級別%1 起始點數差异%2 相鄰點數差异%3';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_IMAGE_CARTOON_TOOLTIP = '使图像卡通化';

Blockly.Msg.MPYTHON_AI_LCD_SHOW_IMAGE_3D_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.image.rotation_corr';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_IMAGE_3D_MESSAGE0 = '影像 3D旋轉 上下旋轉%1 左右旋轉%2 度数%3 左右移动%4 上下移动%5 缩放%6';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_IMAGE_3D_TOOLTIP = '通過執行幀緩衝區的3D旋轉來糾正影像中的透視問題。';

Blockly.Msg.MPYTHON_AI_LCD_SHOW_ECTYPE_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.image.copy';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_ECTYPE_MESSAGE0 = '將影像的副本保存到SD卡 图像名%1 影像顯示區域  x%2 y%3 宽%4 高%5';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_ECTYPE_TOOLTIP = '將影像的副本保存到SD卡';

Blockly.Msg.MPYTHON_AI_LCD_SHOW_ECTYPE_SHOW_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.image.save';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_ECTYPE_SHOW_MESSAGE0 = '創建一個影像對象的副本  複製影像區域  x%1 y%2 宽%3 高%4';
Blockly.Msg.MPYTHON_AI_LCD_SHOW_ECTYPE_SHOW_TOOLTIP = '創建一個影像對象的副本';

Blockly.Msg.MPYTHON_AI2_NUMBER_DISCERN_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.model.select_model';
Blockly.Msg.MPYTHON_AI2_NUMBER_DISCERN_MESSAGE0 = '手寫數位識別';
Blockly.Msg.MPYTHON_AI2_NUMBER_DISCERN_TOOLTIP = '手寫數位識別';

Blockly.Msg.MPYTHON_AI_LCD_PIXEL_COLOUR_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html?highlight=get_pixel#mpython_classroom_kit.image.set_pixel';
Blockly.Msg.MPYTHON_AI_LCD_PIXEL_COLOUR_MESSAGE0 = '屏幕 x%1 y%2  显示颜色 R%3 G%4 B%5';
Blockly.Msg.MPYTHON_AI_LCD_PIXEL_COLOUR_TOOLTIP = '屏幕显示颜色';

Blockly.Msg.MPYTHON_AI_LCD_COLOUR_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.lcd.clear';
Blockly.Msg.MPYTHON_AI_LCD_COLOUR_MESSAGE0 = '屏幕 初始化 显示颜色 R%1 G%2 B%3';
Blockly.Msg.MPYTHON_AI_LCD_COLOUR_TOOLTIP = '屏幕显示颜色';

Blockly.Msg.MPYTHON_AI_SENSOR_PATTERN_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.camera.set_pixformat';
Blockly.Msg.MPYTHON_AI_SENSOR_PATTERN_MESSAGE0 = '監視器 初始化 點數模式 %1';
Blockly.Msg.MPYTHON_AI_SENSOR_PATTERN_TOOLTIP = '用於設定監視器點數模式，有黑白和rgb彩色';

Blockly.Msg.MPYTHON_AI_TRACE_CILOR_DISPLAYTEN_HELPURL = '';
Blockly.Msg.MPYTHON_AI_TRACE_CILOR_DISPLAYTEN_MESSAGE0 = '追跡色塊 顯示%1';
Blockly.Msg.MPYTHON_AI_TRACE_CILOR_DISPLAYTEN_TOOLTIP = '';

//人脸识别
Blockly.Msg.MPYTHON_AI2_FACE_TRACKING_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.model.select_model';
Blockly.Msg.MPYTHON_AI2_FACE_TRACKING_MESSAGE0 = '(實驗箱)選擇訓練模型 人臉';
Blockly.Msg.MPYTHON_AI2_FACE_TRACKING_TOOLTIP = '可以識別並且追蹤人臉，顯示人臉大小等';

Blockly.Msg.MPYTHON_AI2_PHOTOGRAPH_TRACKING_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.model.select_model';
Blockly.Msg.MPYTHON_AI2_PHOTOGRAPH_TRACKING_MESSAGE0 = '(實驗箱)調用攝像頭進行 人臉識別';
Blockly.Msg.MPYTHON_AI2_PHOTOGRAPH_TRACKING_TOOLTIP = '調用攝像頭進行 人臉識別';

Blockly.Msg.MPYTHON_AI2_RESULT_FACE_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.model.select_model';
Blockly.Msg.MPYTHON_AI2_RESULT_FACE_MESSAGE0 = '(實驗箱)獲取識別後人臉的 所有參數';
Blockly.Msg.MPYTHON_AI2_RESULT_FACE_TOOLTIP = '獲取識別後人臉的 所有參數';

Blockly.Msg.MPYTHON_AI2_RESULT_FACE_X_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.model.select_model';
Blockly.Msg.MPYTHON_AI2_RESULT_FACE_X_MESSAGE0 = '(實驗箱)獲取識別後人臉的 x座標';
Blockly.Msg.MPYTHON_AI2_RESULT_FACE_X_TOOLTIP = '獲取識別後人臉的 x座標';

Blockly.Msg.MPYTHON_AI2_RESULT_FACE_Y_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.model.select_model';
Blockly.Msg.MPYTHON_AI2_RESULT_FACE_Y_MESSAGE0 = '(實驗箱)獲取識別後人臉的 y座標';
Blockly.Msg.MPYTHON_AI2_RESULT_FACE_Y_TOOLTIP = '獲取識別後人臉的 y座標';

Blockly.Msg.MPYTHON_AI2_RESULT_FACE_W_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.model.select_model';
Blockly.Msg.MPYTHON_AI2_RESULT_FACE_W_MESSAGE0 = '(實驗箱)獲取識別後人臉的 寬度';
Blockly.Msg.MPYTHON_AI2_RESULT_FACE_W_TOOLTIP = '獲取識別後人臉的 寬度';

Blockly.Msg.MPYTHON_AI2_RESULT_FACE_H_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.model.select_model';
Blockly.Msg.MPYTHON_AI2_RESULT_FACE_H_MESSAGE0 = '(實驗箱)獲取識別後人臉的 高度';
Blockly.Msg.MPYTHON_AI2_RESULT_FACE_H_TOOLTIP = '獲取識別後人臉的 高度';

Blockly.Msg.MPYTHON_AI2_RESULT_FACE_VALUE_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.model.select_model';
Blockly.Msg.MPYTHON_AI2_RESULT_FACE_VALUE_MESSAGE0 = '(實驗箱)獲取識別後人臉的 置信度';
Blockly.Msg.MPYTHON_AI2_RESULT_FACE_VALUE_TOOLTIP = '獲取識別後人臉的 置信度';

Blockly.Msg.MPYTHON_AI2_RESULT_FACE_OBJNUM_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.model.select_model';
Blockly.Msg.MPYTHON_AI2_RESULT_FACE_OBJNUM_MESSAGE0 = '(實驗箱)獲取識別後人臉的 數量';
Blockly.Msg.MPYTHON_AI2_RESULT_FACE_OBJNUM_TOOLTIP = '獲取識別後人臉的 數量';

//20分类
Blockly.Msg.MPYTHON_AI2_20class_TRACKING_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.model.select_model';
Blockly.Msg.MPYTHON_AI2_20class_TRACKING_MESSAGE0 = '(實驗箱)選擇訓練模型 20類';
Blockly.Msg.MPYTHON_AI2_20class_TRACKING_TOOLTIP = '可以識別20個類型，分別是0-19爲飛機,自行車,鳥,船,瓶子,公交車,汽車,貓,椅子,奶牛,餐桌,狗,屋子,摩托車,人,盆栽,羊,沙發,火車,電視';

Blockly.Msg.MPYTHON_AI2_PHOTOGRAPH_20TRACKING_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.model.select_model';
Blockly.Msg.MPYTHON_AI2_PHOTOGRAPH_20TRACKING_MESSAGE0 = '(實驗箱)調用攝像頭進行 20類識別';
Blockly.Msg.MPYTHON_AI2_PHOTOGRAPH_20TRACKING_TOOLTIP = '調用攝像頭進行 20類識別';

Blockly.Msg.MPYTHON_AI2_RESULT_20CLASS_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.model.select_model';
Blockly.Msg.MPYTHON_AI2_RESULT_20CLASS_MESSAGE0 = '(實驗箱)獲取識別後20類的 所有參數';
Blockly.Msg.MPYTHON_AI2_RESULT_20CLASS_TOOLTIP = '獲取識別後20類的 所有參數';

Blockly.Msg.MPYTHON_AI2_RESULT_20CLASS_X_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.model.select_model';
Blockly.Msg.MPYTHON_AI2_RESULT_20CLASS_X_MESSAGE0 = '(實驗箱)獲取識別後20類的 x座標';
Blockly.Msg.MPYTHON_AI2_RESULT_20CLASS_X_TOOLTIP = '獲取識別後20類的 x座標';

Blockly.Msg.MPYTHON_AI2_RESULT_20CLASS_Y_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.model.select_model';
Blockly.Msg.MPYTHON_AI2_RESULT_20CLASS_Y_MESSAGE0 = '(實驗箱)獲取識別後20類的 y座標';
Blockly.Msg.MPYTHON_AI2_RESULT_20CLASS_Y_TOOLTIP = '獲取識別後20類的 y座標';

Blockly.Msg.MPYTHON_AI2_RESULT_20CLASS_W_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.model.select_model';
Blockly.Msg.MPYTHON_AI2_RESULT_20CLASS_W_MESSAGE0 = '(實驗箱)獲取識別後20類的 寬度';
Blockly.Msg.MPYTHON_AI2_RESULT_20CLASS_W_TOOLTIP = '獲取識別後20類的 寬度';

Blockly.Msg.MPYTHON_AI2_RESULT_20CLASS_H_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.model.select_model';
Blockly.Msg.MPYTHON_AI2_RESULT_20CLASS_H_MESSAGE0 = '(實驗箱)獲取識別後20類的 高度';
Blockly.Msg.MPYTHON_AI2_RESULT_20CLASS_H_TOOLTIP = '獲取識別後20類的 高度';

Blockly.Msg.MPYTHON_AI2_RESULT_20CLASS_VALUE_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.model.select_model';
Blockly.Msg.MPYTHON_AI2_RESULT_20CLASS_VALUE_MESSAGE0 = '(實驗箱)獲取識別後20類的 置信度';
Blockly.Msg.MPYTHON_AI2_RESULT_20CLASS_VALUE_TOOLTIP = '獲取識別後20類的 置信度';

Blockly.Msg.MPYTHON_AI2_RESULT_20CLASS_OBJNUM_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.model.select_model';
Blockly.Msg.MPYTHON_AI2_RESULT_20CLASS_OBJNUM_MESSAGE0 = '(實驗箱)獲取識別後20類的 數量';
Blockly.Msg.MPYTHON_AI2_RESULT_20CLASS_OBJNUM_TOOLTIP = '獲取識別後20類的 數量';

Blockly.Msg.MPYTHON_AI2_RESULT_20CLASS_CLASSID_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.model.select_model';
Blockly.Msg.MPYTHON_AI2_RESULT_20CLASS_CLASSID_MESSAGE0 = '(實驗箱)獲取識別後20類的 類型';
Blockly.Msg.MPYTHON_AI2_RESULT_20CLASS_CLASSID_TOOLTIP = '可以識別20個類型，分別是0-19爲飛機,自行車,鳥,船,瓶子,公交車,汽車,貓,椅子,奶牛,餐桌,狗,屋子,摩托車,人,盆栽,羊,沙發,火車,電視';

Blockly.Msg.MPYTHON_AI2_RESULT_20CLASS_INDEX_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.model.select_model';
Blockly.Msg.MPYTHON_AI2_RESULT_20CLASS_INDEX_MESSAGE0 = '(實驗箱)獲取識別後20類的 類型數量';
Blockly.Msg.MPYTHON_AI2_RESULT_20CLASS_INDEX_TOOLTIP = '獲取識別後20類的 類型數量';



//手写数字
Blockly.Msg.MPYTHON_AI2_NUMBER_DISCERN_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.model.select_model';
Blockly.Msg.MPYTHON_AI2_NUMBER_DISCERN_MESSAGE0 = '(實驗箱)選擇訓練模型 手寫數字';
Blockly.Msg.MPYTHON_AI2_NUMBER_DISCERN_TOOLTIP = '選擇訓練模型 手寫數字';

Blockly.Msg.MPYTHON_AI2_RESULT_NUMBER_DISCERN_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.model.select_model';
Blockly.Msg.MPYTHON_AI2_RESULT_NUMBER_DISCERN_MESSAGE0 = '(實驗箱)調用攝像頭進行 手寫數字識別';
Blockly.Msg.MPYTHON_AI2_RESULT_NUMBER_DISCERN_TOOLTIP = '調用攝像頭進行 手寫數字識別';

Blockly.Msg.MPYTHON_AI2_NUMBER_DETECT_ALL_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#id2';
Blockly.Msg.MPYTHON_AI2_NUMBER_DETECT_ALL_MESSAGE0 = '(實驗箱)獲取識別後手寫數字的 所有參數';
Blockly.Msg.MPYTHON_AI2_NUMBER_DETECT_ALL_TOOLTIP = '獲取識別後手寫數字的 所有參數';

Blockly.Msg.MPYTHON_AI2_NUMBER_DETECT_NUMBER_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#id2';
Blockly.Msg.MPYTHON_AI2_NUMBER_DETECT_NUMBER_MESSAGE0 = '(實驗箱)獲取識別後手寫數字的 數字';
Blockly.Msg.MPYTHON_AI2_NUMBER_DETECT_NUMBER_TOOLTIP = '獲取識別後手寫數字的 數字';

Blockly.Msg.MPYTHON_AI2_NUMBER_DETECT_ADIENCE_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#id2';
Blockly.Msg.MPYTHON_AI2_NUMBER_DETECT_ADIENCE_MESSAGE0 = '(實驗箱)獲取識別後手寫數字的 置信度';
Blockly.Msg.MPYTHON_AI2_NUMBER_DETECT_ADIENCE_TOOLTIP = '獲取識別後手寫數字的 置信度';


//追踪色块
Blockly.Msg.MPYTHON_AI_IMAGE_LAB_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/image.html#%E4%BE%8B%E7%A8%8B-1%EF%BC%9A-%E6%89%BE%E7%BB%BF%E8%89%B2';
Blockly.Msg.MPYTHON_AI_IMAGE_LAB_MESSAGE0 = '寻找颜色 LAB值%1';
Blockly.Msg.MPYTHON_AI_IMAGE_LAB_TOOLTIP = 'image寻找颜色';

Blockly.Msg.MPYTHON_AI_TRACE_COLOR_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.image.find_blobs';
Blockly.Msg.MPYTHON_AI_TRACE_COLOR_MESSAGE0 = '(實驗箱)追蹤色塊 LAB顏色%1 邊界框小於%2 像素小於%3 過濾';
Blockly.Msg.MPYTHON_AI_TRACE_COLOR_TOOLTIP = '追蹤色塊';

Blockly.Msg.MPYTHON_AI_TRACE_CILOR_DISPLAYTEN_HELPURL = '';
Blockly.Msg.MPYTHON_AI_TRACE_CILOR_DISPLAYTEN_MESSAGE0 = '(實驗箱)追蹤色塊 顯示%1';
Blockly.Msg.MPYTHON_AI_TRACE_CILOR_DISPLAYTEN_TOOLTIP = '';

Blockly.Msg.MPYTHON_AI_BLOB_ALL_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#blob';
Blockly.Msg.MPYTHON_AI_BLOB_ALL_MESSAGE0 = '(實驗箱)%1獲取識別後色塊的 所有參數';
Blockly.Msg.MPYTHON_AI_BLOB_ALL_TOOLTIP = '返回blob 類 -- 色塊對象';

Blockly.Msg.MPYTHON_AI_BLOB_X_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#blob';
Blockly.Msg.MPYTHON_AI_BLOB_X_MESSAGE0 = '(實驗箱)%1獲取識別後色塊的 x座標';
Blockly.Msg.MPYTHON_AI_BLOB_X_TOOLTIP = '返回blob 類 -- 色塊對象';

Blockly.Msg.MPYTHON_AI_BLOB_Y_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#blob';
Blockly.Msg.MPYTHON_AI_BLOB_Y_MESSAGE0 = '(實驗箱)%1獲取識別後色塊的 y座標';
Blockly.Msg.MPYTHON_AI_BLOB_Y_TOOLTIP = '返回blob 類 -- 色塊對象';

Blockly.Msg.MPYTHON_AI_BLOB_W_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#blob';
Blockly.Msg.MPYTHON_AI_BLOB_W_MESSAGE0 = '(實驗箱)%1獲取識別後色塊的 寬度';
Blockly.Msg.MPYTHON_AI_BLOB_W_TOOLTIP = '返回blob 類 -- 色塊對象';

Blockly.Msg.MPYTHON_AI_BLOB_H_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#blob';
Blockly.Msg.MPYTHON_AI_BLOB_H_MESSAGE0 = '(實驗箱)%1獲取識別後色塊的 高度';
Blockly.Msg.MPYTHON_AI_BLOB_H_TOOLTIP = '返回blob 類 -- 色塊對象';

Blockly.Msg.MPYTHON_AI_BLOB_NUMBER_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#blob';
Blockly.Msg.MPYTHON_AI_BLOB_NUMBER_MESSAGE0 = '(實驗箱)%1獲取識別後色塊的 數量';
Blockly.Msg.MPYTHON_AI_BLOB_NUMBER_TOOLTIP = '返回blob 類 -- 色塊對象';

Blockly.Msg.MPYTHON_AI_BLOB_CENTER_X_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#blob';
Blockly.Msg.MPYTHON_AI_BLOB_CENTER_X_MESSAGE0 = '(實驗箱)%1獲取識別後色塊的 中心x座標';
Blockly.Msg.MPYTHON_AI_BLOB_CENTER_X_TOOLTIP = '返回blob 類 -- 色塊對象';

Blockly.Msg.MPYTHON_AI_BLOB_CENTER_Y_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#blob';
Blockly.Msg.MPYTHON_AI_BLOB_CENTER_Y_MESSAGE0 = '(實驗箱)%1獲取識別後色塊的 中心y座標';
Blockly.Msg.MPYTHON_AI_BLOB_CENTER_Y_TOOLTIP = '返回blob 類 -- 色塊對象';

Blockly.Msg.MPYTHON_AI_BLOB_ORTHOGON_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#blob';
Blockly.Msg.MPYTHON_AI_BLOB_ORTHOGON_MESSAGE0 = '(實驗箱)%1獲取識別後色塊的 矩形';
Blockly.Msg.MPYTHON_AI_BLOB_ORTHOGON_TOOLTIP = '返回blob 類 -- 色塊對象';

//Pythons 训练身高体重比例
Blockly.Msg.MPYTHON_DRILL_WEIGHT_MESSAGE0 = '初始化 訓練 %1';
Blockly.Msg.MPYTHON_DRILL_WEIGHT_TOOLTIP = '';
Blockly.Msg.MPYTHON_DRILL_WEIGHT_HELPURL = '';

Blockly.Msg.MPYTHON_DRILL_LINEAR_REGRESSION_HELPURL = '';
Blockly.Msg.MPYTHON_DRILL_LINEAR_REGRESSION_MESSAGE0 = '實例化 線性迴歸直線';
Blockly.Msg.MPYTHON_DRILL_LINEAR_REGRESSION_TOOLTIP = '';

Blockly.Msg.MPYTHON_DRILL_TITLE_HELPURL = '';
Blockly.Msg.MPYTHON_DRILL_TITLE_MESSAGE0 = '標題%1 字號%2';
Blockly.Msg.MPYTHON_DRILL_TITLE_TOOLTIP = '';

Blockly.Msg.MPYTHON_DRILL_LABEL_HELPURL = '';
Blockly.Msg.MPYTHON_DRILL_LABEL_MESSAGE0 = '標籤%1 標題%2 字號%3';
Blockly.Msg.MPYTHON_DRILL_LABEL_TOOLTIP = '';

Blockly.Msg.MPYTHON_DRILL_DRILL_REALITY_HELPURL = '';
Blockly.Msg.MPYTHON_DRILL_DRILL_REALITY_MESSAGE0 = '真實數據 符號標記%1 顏色爲 r%2 g%3 b%4 標題%5';
Blockly.Msg.MPYTHON_DRILL_DRILL_REALITY_TOOLTIP = '';

Blockly.Msg.MPYTHON_DRILL_PREDICTED_REALITY_HELPURL = '';
Blockly.Msg.MPYTHON_DRILL_PREDICTED_REALITY_MESSAGE0 = '預測線性迴歸直線 符號標記%1 顏色爲 r%2 g%3 b%4 標題%5';
Blockly.Msg.MPYTHON_DRILL_PREDICTED_REALITY_TOOLTIP = '';

Blockly.Msg.MPYTHON_DRILL_LEGEND_HELPURL = '';
Blockly.Msg.MPYTHON_DRILL_LEGEND_MESSAGE0 = '展示圖例';
Blockly.Msg.MPYTHON_DRILL_LEGEND_TOOLTIP = '';

Blockly.Msg.MPYTHON_DRILL_SHOW_HELPURL = '';
Blockly.Msg.MPYTHON_DRILL_SHOW_MESSAGE0 = '顯示圖片';
Blockly.Msg.MPYTHON_DRILL_SHOW_TOOLTIP = '';

Blockly.Msg.MPYTHON_DRILL_DRILL_PRINT_HELPURL = '';
Blockly.Msg.MPYTHON_DRILL_DRILL_PRINT_MESSAGE0 = '返回對應鍵值%1';
Blockly.Msg.MPYTHON_DRILL_DRILL_PRINT_TOOLTIP = '';

Blockly.Msg.MPYTHON_DRILL_DRILL_full_line = '實線';
Blockly.Msg.MPYTHON_DRILL_DRILL_dash_line = '破折線';
Blockly.Msg.MPYTHON_DRILL_DRILL_chain_line = '點劃線';
Blockly.Msg.MPYTHON_DRILL_DRILL_imaginary_line = '虛線';

Blockly.Msg.MPYTHON_DRILL_DRILL_dot = '點';
Blockly.Msg.MPYTHON_DRILL_DRILL_pixel = '像素';
Blockly.Msg.MPYTHON_DRILL_DRILL_solid_rim = '實心圈';
Blockly.Msg.MPYTHON_DRILL_DRILL_down_triangle = '下三角';
Blockly.Msg.MPYTHON_DRILL_DRILL_up_triangle = '上三角';
Blockly.Msg.MPYTHON_DRILL_DRILL_right_triangle = '右三角';
Blockly.Msg.MPYTHON_DRILL_DRILL_left_triangle = '左三角';
Blockly.Msg.MPYTHON_DRILL_DRILL_down_flower_triangle = '下花三角';
Blockly.Msg.MPYTHON_DRILL_DRILL_up_flower_triangle = '上花三角';
Blockly.Msg.MPYTHON_DRILL_DRILL_right_flower_triangle = '右花三角';
Blockly.Msg.MPYTHON_DRILL_DRILL_left_flower_triangle = '左花三角';
Blockly.Msg.MPYTHON_DRILL_DRILL_solid_square = '實心方形';
Blockly.Msg.MPYTHON_DRILL_DRILL_solid_pentagon = '實心五角';
Blockly.Msg.MPYTHON_DRILL_DRILL_star = '星形';
Blockly.Msg.MPYTHON_DRILL_DRILL_vertical_hexagon = '豎六邊形';
Blockly.Msg.MPYTHON_DRILL_DRILL_across_hexagon = '橫六邊形';
Blockly.Msg.MPYTHON_DRILL_DRILL_cross = '十字';
Blockly.Msg.MPYTHON_DRILL_DRILL_X = 'X';
Blockly.Msg.MPYTHON_DRILL_DRILL_rhombus = '菱形';
Blockly.Msg.MPYTHON_DRILL_DRILL_thin_rhombus = '瘦菱形';
Blockly.Msg.MPYTHON_DRILL_DRILL_vertical_line = '垂直線';


//pythons 鸢尾花
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_INITIALIZE_HELPURL = '';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_INITIALIZE_MESSAGE0 = '初始化  鳶尾花數據集';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_INITIALIZE_TOOLTIP = '採用Python的Sklearn機器學習庫中自帶的數據集——鳶尾花數據集。簡單分析數據集之間特徵的關係圖,根據花瓣長度,花瓣寬度,花萼長度,花萼寬度四個特徵進行繪圖虹膜植物數據集可以從龍骨數據集數據集網站獲取,也可以直接從Sklearn。數據集機器學習包得到。數據集共包含4個特徵變量,1個類別變量,共150個有樣本。類別變量分別對應鳶尾花的三個亞屬,分別是山鳶尾(Iris-setosa),變色鳶尾(Iris-versicolor)和維吉尼亞鳶尾(Iris-virginica)分別用(0,1,2)來做映射';

Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_PCA_HELPURL = '';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_PCA_MESSAGE0 = '鳶尾花 主成分分析';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_PCA_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_FA3D_HELPURL = '';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_FA3D_MESSAGE0 = '鳶尾花 因子分析 3D';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_FA3D_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_FA_HELPURL = '';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_FA_MESSAGE0 = '鳶尾花 因子分析';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_FA_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_PCA_DISPLAY_HELPURL = '';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_PCA_DISPLAY_MESSAGE0 = '預測圖示 鳶尾花類型%1 呈現內容 x%3 y%4 呈現種類%2 顏色爲 r%5 g%6 b%7 標題%8 向上合併%9';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_PCA_DISPLAY_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_DATA_HELPURL = '';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_DATA_MESSAGE0 = '預測圖示 呈現內容 x%1 y%2 呈現種類%3 顏色爲 r%4 g%5 b%6 標題%7';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_DATA_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_DATA3D_HELPURL = '';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_DATA3D_MESSAGE0 = '3D 預測圖示 呈現內容  x朝向%1 y朝向%2 z朝向%3 顏色爲 r%4 g%5 b%6 標題%7';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_DATA3D_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_TITLE_HELPURL = '';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_TITLE_MESSAGE0 = '標題%1 字號%2';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_TITLE_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_LABEL_HELPURL = '';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_LABEL_MESSAGE0 = '標籤%1 標題%2 字號%3';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_LABEL_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_TITLE3D_HELPURL = '';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_TITLE3D_MESSAGE0 = '3D 標題%1 字號%2';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_TITLE3D_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_LABEL3D_HELPURL = '';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_LABEL3D_MESSAGE0 = '3D 標籤%1 標題%2 字號%3';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_LABEL3D_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_LEGEND_HELPURL = '';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_LEGEND_MESSAGE0 = '展示圖例';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_LEGEND_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_SHOW_HELPURL = '';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_SHOW_MESSAGE0 = '顯示圖片';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_SHOW_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_LOAD_IRIS_HELPURL = '';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_LOAD_IRIS_MESSAGE0 = '花萼和花瓣的x, y座標';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_LOAD_IRIS_TOOLTIP = '共150條記錄,分別代表50條山鳶尾(Iris-setosa),變色鳶尾(Iris-versicolor),維吉尼亞鳶尾(Iris-virginica)';

Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_Iris_setosa = '山鳶尾';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_Iris_versicolor = '變色鳶尾';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_Iris_virginica = '維吉尼亞鳶尾';

Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_scatter_diagram = '散點圖';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_kde_diagram = 'kde圖';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_box_diagram = '箱圖';

Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_merge = '合並';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_not_merge = '不合並';

Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_calyx_length = '花萼長度';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_calyx_width = '花萼寬度';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_petal_length = '花瓣長度';
Blockly.Msg.MPYTHONS_FLOWER_DE_LUCE_petal_width = '花瓣寬度';

//Pythons 数字识别
Blockly.Msg.MPYTHONS_CONVERT_PICTURE_HELPURL = '';
Blockly.Msg.MPYTHONS_CONVERT_PICTURE_MESSAGE0 ='將圖片轉換爲28²二值圖%1  待處理的圖片存儲路徑%2 處理後的圖片存儲路徑%3 格式%4';
Blockly.Msg.MPYTHONS_CONVERT_PICTURE_TOOLTIP = '掌控板通過串口把WIF傳給語音助手';

Blockly.Msg.MPYTHONS_NUMBER_REPERTOIRE_HELPURL = '';
Blockly.Msg.MPYTHONS_NUMBER_REPERTOIRE_MESSAGE0 ='查找解析 手寫數字數 據存儲路徑%1';
Blockly.Msg.MPYTHONS_NUMBER_REPERTOIRE_TOOLTIP = '使用手寫數字字符庫';

Blockly.Msg.MPYTHONS_SHOW_NUMBER_PATH_HELPURL = '';
Blockly.Msg.MPYTHONS_SHOW_NUMBER_PATH_MESSAGE0 ='手寫數字圖像 存儲路徑%1';
Blockly.Msg.MPYTHONS_SHOW_NUMBER_PATH_TOOLTIP = '';

Blockly.Msg.MPYTHONS_SHOW_NUMBER_HELPURL = '';
Blockly.Msg.MPYTHONS_SHOW_NUMBER_MESSAGE0 ='顯示手寫數字圖像';
Blockly.Msg.MPYTHONS_SHOW_NUMBER_TOOLTIP = '';

Blockly.Msg.MPYTHONS_NUMBER_RECOGNITION_HELPURL = '';
Blockly.Msg.MPYTHONS_NUMBER_RECOGNITION_MESSAGE0 ='識別手寫數字圖像 存儲路徑%1';
Blockly.Msg.MPYTHONS_NUMBER_RECOGNITION_TOOLTIP = '';

Blockly.Msg.MPYTHONS_NUMBER_PLACEHOLDER_HELPURL = '';
Blockly.Msg.MPYTHONS_NUMBER_PLACEHOLDER_MESSAGE0 ='創建變量%1 初始化 神經網絡張量 變量名%2';
Blockly.Msg.MPYTHONS_NUMBER_PLACEHOLDER_TOOLTIP = '';

Blockly.Msg.MPYTHON_DRILL_RESHAPE_MESSAGE0 = '創建變量%1 將輸入照片變量%2 轉換爲 神經網絡輸出張量%3';
Blockly.Msg.MPYTHON_DRILL_RESHAPE_TOOLTIP = '';
Blockly.Msg.MPYTHON_DRILL_RESHAPE_HELPURL = '';

Blockly.Msg.MPYTHON_NUMBER_CONV_WEIGHT_MESSAGE0 = '創建變量%1 共享變量%2 初始化模式%3';
Blockly.Msg.MPYTHON_NUMBER_CONV_WEIGHT_TOOLTIP = '';
Blockly.Msg.MPYTHON_NUMBER_CONV_WEIGHT_HELPURL = '';

Blockly.Msg.MPYTHON_NUMBER_INITIALIZER_MESSAGE0 = '產生截斷正態分佈隨機數 輸出張量%1 標準差%2';
Blockly.Msg.MPYTHON_NUMBER_INITIALIZER_TOOLTIP = '';
Blockly.Msg.MPYTHON_NUMBER_INITIALIZER_HELPURL = '';

Blockly.Msg.MPYTHON_NUMBER_CONSTANT_MESSAGE0 = '創建常量 數值%1 輸出張量%2';
Blockly.Msg.MPYTHON_NUMBER_CONSTANT_TOOLTIP = '';
Blockly.Msg.MPYTHON_NUMBER_CONSTANT_HELPURL = '';

Blockly.Msg.MPYTHON_NUMBER_CONV2D_MESSAGE0 = '神經網絡輸出張量%1 共享變量%2 步長%3 填充%4';
Blockly.Msg.MPYTHON_NUMBER_CONV2D_TOOLTIP = '';
Blockly.Msg.MPYTHON_NUMBER_CONV2D_HELPURL = '';

Blockly.Msg.MPYTHON_NUMBER_CONV_BIASES_MESSAGE0 = '張量%1';
Blockly.Msg.MPYTHON_NUMBER_CONV_BIASES_TOOLTIP = '';
Blockly.Msg.MPYTHON_NUMBER_CONV_BIASES_HELPURL = '';

Blockly.Msg.MPYTHON_NUMBER_CONV_CONV2D_MESSAGE0 = '卷積二維層 變量%1 %2';
Blockly.Msg.MPYTHON_NUMBER_CONV_CONV2D_TOOLTIP = '';
Blockly.Msg.MPYTHON_NUMBER_CONV_CONV2D_HELPURL = '';

Blockly.Msg.MPYTHON_NUMBER_RELU_MESSAGE0 = '創建變量%1 Relu正向激勵函數 卷積二維層%2';
Blockly.Msg.MPYTHON_NUMBER_RELU_TOOLTIP = '';
Blockly.Msg.MPYTHON_NUMBER_RELU_HELPURL = '';

Blockly.Msg.MPYTHON_NUMBER_MAX_POOL_MESSAGE0 = '池化二維層 變量%1 卷積層%2 池化窗口%3 步長%4 填充%5';
Blockly.Msg.MPYTHON_NUMBER_MAX_POOL_TOOLTIP = '';
Blockly.Msg.MPYTHON_NUMBER_MAX_POOL_HELPURL = '';

Blockly.Msg.MPYTHON_NUMBER_MATMUL_MESSAGE0 = '兩個參數的對應元素各自相乘 x%1 y%2';
Blockly.Msg.MPYTHON_NUMBER_MATMUL_TOOLTIP = '';
Blockly.Msg.MPYTHON_NUMBER_MATMUL_HELPURL = '';

Blockly.Msg.MPYTHON_NUMBER_ADD_MESSAGE0 = '全連接層 變量%1 兩個參數的元素相加 x%2 y%3';
Blockly.Msg.MPYTHON_NUMBER_ADD_TOOLTIP = '';
Blockly.Msg.MPYTHON_NUMBER_ADD_HELPURL = '';

Blockly.Msg.MPYTHON_NUMBER_SOFTMAX_MESSAGE0 = '創建變量%1 預測模型準確度 變量名%2';
Blockly.Msg.MPYTHON_NUMBER_SOFTMAX_TOOLTIP = '';
Blockly.Msg.MPYTHON_NUMBER_SOFTMAX_HELPURL = '';

Blockly.Msg.MPYTHON_NUMBER_REDUCE_MEAN_MESSAGE0 = '創建變量%1 損失函數%2';
Blockly.Msg.MPYTHON_NUMBER_REDUCE_MEAN_TOOLTIP = '';
Blockly.Msg.MPYTHON_NUMBER_REDUCE_MEAN_HELPURL = '';

Blockly.Msg.MPYTHON_NUMBER_LOG_MESSAGE0 = '自然對數 %1';
Blockly.Msg.MPYTHON_NUMBER_LOG_TOOLTIP = '';
Blockly.Msg.MPYTHON_NUMBER_LOG_HELPURL = '';

Blockly.Msg.MPYTHON_NUMBER_REDUCE_SUM_MESSAGE0 = '壓縮求和%1 維度%2';
Blockly.Msg.MPYTHON_NUMBER_REDUCE_SUM_TOOLTIP = '因爲日誌函數是單調遞增的,所以logP (Y | X)也會達到最大值,因此在前面加上負號之後,最大化P (Y | X)就等價於最小化了。';
Blockly.Msg.MPYTHON_NUMBER_REDUCE_SUM_HELPURL = 'https://www.cnblogs.com/guoyaohua/p/9217206.html';

Blockly.Msg.MPYTHON_NUMBER_TRAIN_MESSAGE0 = '優化學習速率 %1';
Blockly.Msg.MPYTHON_NUMBER_TRAIN_TOOLTIP = '';
Blockly.Msg.MPYTHON_NUMBER_TRAIN_HELPURL = '';

Blockly.Msg.MPYTHON_NUMBER_MINIMIZE_MESSAGE0 = '創建變量%1 優化張量%2';
Blockly.Msg.MPYTHON_NUMBER_MINIMIZE_TOOLTIP = '';
Blockly.Msg.MPYTHON_NUMBER_MINIMIZE_HELPURL = '';

Blockly.Msg.MPYTHON_NUMBER_INIT_MESSAGE0 = '初始化模型 完成';
Blockly.Msg.MPYTHON_NUMBER_INIT_TOOLTIP = '';
Blockly.Msg.MPYTHON_NUMBER_INIT_HELPURL = '';

Blockly.Msg.MPYTHON_NUMBER_TRAIN_TEST_MESSAGE0 = '選擇 手寫數字集%1 數量%2';
Blockly.Msg.MPYTHON_NUMBER_TRAIN_TEST_TOOLTIP = '';
Blockly.Msg.MPYTHON_NUMBER_TRAIN_TEST_HELPURL = '';

Blockly.Msg.MPYTHON_NUMBER_SESSION_RUN_MESSAGE0 = '啓動數據流圖會話進行計算 會話%1 圖片%2 標籤%3';
Blockly.Msg.MPYTHON_NUMBER_SESSION_RUN_TOOLTIP = '';
Blockly.Msg.MPYTHON_NUMBER_SESSION_RUN_HELPURL = '';

Blockly.Msg.MPYTHON_NUMBER_SESSION_RUN2_MESSAGE0 = '啓動數據流圖會話進行計算 會話%1 圖片%2 標籤%3';
Blockly.Msg.MPYTHON_NUMBER_SESSION_RUN2_TOOLTIP = '';
Blockly.Msg.MPYTHON_NUMBER_SESSION_RUN2_HELPURL = '';

Blockly.Msg.MPYTHON_NUMBER_SESSION_RUN3_MESSAGE0 = '預測模型%1 擬合度%2 會話%3';
Blockly.Msg.MPYTHON_NUMBER_SESSION_RUN3_TOOLTIP = '';
Blockly.Msg.MPYTHON_NUMBER_SESSION_RUN3_HELPURL = '';

Blockly.Msg.MPYTHON_NUMBER_EQUAL_MESSAGE0 = '兩個張量的每一維是否相等 x%1 y%2';
Blockly.Msg.MPYTHON_NUMBER_EQUAL_TOOLTIP = '';
Blockly.Msg.MPYTHON_NUMBER_EQUAL_HELPURL = '';

Blockly.Msg.MPYTHON_NUMBER_ARGMAX_MESSAGE0 = '張量%1 按%2比較返回最大值的索引';
Blockly.Msg.MPYTHON_NUMBER_ARGMAX_TOOLTIP = '';
Blockly.Msg.MPYTHON_NUMBER_ARGMAX_HELPURL = '';

Blockly.Msg.MPYTHON_NUMBER_CAST_MESSAGE0 = '轉爲浮點型 %1';
Blockly.Msg.MPYTHON_NUMBER_CAST_TOOLTIP = '';
Blockly.Msg.MPYTHON_NUMBER_CAST_HELPURL = '';

Blockly.Msg.MPYTHONS_NUMBER_SAVER_SAVE_HELPURL = '';
Blockly.Msg.MPYTHONS_NUMBER_SAVER_SAVE_MESSAGE0 ='手寫數字識別模型 變量名%1 存儲路徑%2';
Blockly.Msg.MPYTHONS_NUMBER_SAVER_SAVE_TOOLTIP = 'MNIST手寫數字識別模型保存路徑';

Blockly.Msg.MPYTHONS_NUMBER_SAVER_RESTORE_HELPURL = '';
Blockly.Msg.MPYTHONS_NUMBER_SAVER_RESTORE_MESSAGE0 ='加載模型%1 存儲路徑%2';
Blockly.Msg.MPYTHONS_NUMBER_SAVER_RESTORE_TOOLTIP = '';

Blockly.Msg.MPYTHONS_NUMBER_SAME ='包含邊界';
Blockly.Msg.MPYTHONS_NUMBER_VALID = '不包含邊界';

Blockly.Msg.MPYTHONS_NUMBER_train ='訓練';
Blockly.Msg.MPYTHONS_NUMBER_test = '測試';

Blockly.Msg.MPYTHONS_NUMBER_row ='行';
Blockly.Msg.MPYTHONS_NUMBER_rank = '列';





//Pythons 人脸识别
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_CAMERA_HELPURL = '';
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_CAMERA_MESSAGE0 = '調用攝像頭 %1';
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_CAMERA_TOOLTIP = '調用筆記本內置攝像頭,所以參數爲0,如果有其他的攝像頭可以調整參數爲1,2';

Blockly.Msg.MPYTHONS_FACE_RECOGNITION_CAMERA_OFF_HELPURL = '';
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_CAMERA_OFF_MESSAGE0 = '關閉攝像頭';
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_CAMERA_OFF_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACE_RECOGNITION_WINDOWS_DELETE_HELPURL = '';
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_WINDOWS_DELETE_MESSAGE0 = '刪除所有窗口';
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_WINDOWS_DELETE_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACE_RECOGNITION_IMPORT_MODEL_SITE_HELPURL = '';
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_IMPORT_MODEL_SITE_MESSAGE0 ='加載模型 存儲路徑%1';
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_IMPORT_MODEL_SITE_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACE_RECOGNITION_READ_IMAGES_HELPURL = '';
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_READ_IMAGES_MESSAGE0 ='從攝像頭讀取圖片';
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_READ_IMAGES_TOOLTIP = 'ret如果有讀取圖片就真的,否則假;第二個參數是框架,是當前截取一幀的圖片。';

Blockly.Msg.MPYTHONS_FACE_RECOGNITION_GRAY_IMAGES_HELPURL = '';
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_GRAY_IMAGES_MESSAGE0 ='轉爲灰度圖片';
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_GRAY_IMAGES_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACE_RECOGNITION_DETECTION_FACES_HELPURL = '';
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_DETECTION_FACES_MESSAGE0 = '檢測人臉 每次圖像尺寸減小比例%1';
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_DETECTION_FACES_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACE_DISPLAY_RECOGNITION_ORTHOGON_HELPURL = '';
Blockly.Msg.MPYTHONS_FACE_DISPLAY_RECOGNITION_ORTHOGON_MESSAGE0 ='人臉區域顯示矩形框 顏色爲 紅%1 綠%2 藍%3';
Blockly.Msg.MPYTHONS_FACE_DISPLAY_RECOGNITION_ORTHOGON_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACE_RECOGNITIONR_PSTORAGE_PICTURE_HELPURL = '';
Blockly.Msg.MPYTHONS_FACE_RECOGNITIONR_PSTORAGE_PICTURE_MESSAGE0 ='保存圖像 位置%1 ID%2 編號%3';
Blockly.Msg.MPYTHONS_FACE_RECOGNITIONR_PSTORAGE_PICTURE_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACE_RECOGNITIONR_PRESERVE_PICTURE_HELPURL = '';
Blockly.Msg.MPYTHONS_FACE_RECOGNITIONR_PRESERVE_PICTURE_MESSAGE0 ='窗口中顯示圖像 文件名%1';
Blockly.Msg.MPYTHONS_FACE_RECOGNITIONR_PRESERVE_PICTURE_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACE_RECOGNITIONR_ESC_HELPURL = '';
Blockly.Msg.MPYTHONS_FACE_RECOGNITIONR_ESC_MESSAGE0 ='通過esc鍵 退出';
Blockly.Msg.MPYTHONS_FACE_RECOGNITIONR_ESC_TOOLTIP = '在窗口置頂時使用纔有效果';

Blockly.Msg.MPYTHONS_FACE_RECOGNITIONR_HELPURL = '';
Blockly.Msg.MPYTHONS_FACE_RECOGNITIONR_MESSAGE0 = '獲得人臉在圖像中的座標值 人臉%1';
Blockly.Msg.MPYTHONS_FACE_RECOGNITIONR_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACE_RECOGNITION_JUDGE_FACES_HELPURL = '';
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_JUDGE_FACES_MESSAGE0 = '是否讀取圖片';
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_JUDGE_FACES_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACE_RECOGNITION_JUDGE_CAMERA_HELPURL = '';
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_JUDGE_CAMERA_MESSAGE0 = '是否打開攝像頭';
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_JUDGE_CAMERA_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACE_RECOGNITION_ACQUIRE_ID_PICTURE_HELPURL = '';
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_ACQUIRE_ID_PICTURE_MESSAGE0 ='獲取照片及id 照片存儲路徑%1';
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_ACQUIRE_ID_PICTURE_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACE_RECOGNITION_INITIALIZE_TRANI_MODEL_HELPURL = '';
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_INITIALIZE_TRANI_MODEL_MESSAGE0 ='初始化訓練模型';
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_INITIALIZE_TRANI_MODEL_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACE_RECOGNITION_START_DRILL_HELPURL = '';
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_START_DRILL_MESSAGE0 ='開始訓練模型';
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_START_DRILL_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACE_RECOGNITION_STORAGE_DRILL_MODEL_HELPURL = '';
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_STORAGE_DRILL_MODEL_MESSAGE0 ='%1訓練模型 存儲路徑%2';
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_STORAGE_DRILL_MODEL_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACE_RECOGNITION_DRILL_NUMBERS_HELPURL = '';
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_DRILL_NUMBERS_MESSAGE0 ='人臉模型訓練 數目';
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_DRILL_NUMBERS_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACE_RECOGNITION_FONT_HELPURL = '';
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_FONT_MESSAGE0 = '窗口顯示 識別的名字%1 設置字體爲%2 顏色爲 紅%3 綠%4 藍%5';
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_FONT_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACE_RECOGNITION_PERCENT_HELPURL = '';
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_PERCENT_MESSAGE0 = '窗口顯示 識別的置信度%1 設置字體爲%2 顏色爲 紅%3 綠%4 藍%5';
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_PERCENT_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACE_RECOGNITION_FORECAST_FACE_INITIALIZE_HELPURL = '';
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_FORECAST_FACE_INITIALIZE_MESSAGE0 = '預測人臉 名字%1 置信度%2';
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_FORECAST_FACE_INITIALIZE_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACE_RECOGNITION_FORECAST_Write= '寫入';
Blockly.Msg.MPYTHONS_FACE_RECOGNITION_FORECAST_Read= '讀取';

//Pythons 聊天机器人
Blockly.Msg.MPYTHONS_DIALOGUE_ROBOT_INITIALIZE_HELPURL = '';
Blockly.Msg.MPYTHONS_DIALOGUE_ROBOT_INITIALIZE_MESSAGE0 = '初始化 聊天机器人';
Blockly.Msg.MPYTHONS_ADIALOGUE_ROBOT_INITIALIZE_TOOLTIP = '';

Blockly.Msg.MPYTHONS_DIALOGUE_ROBOT_CHOOSE_HELPURL = '';
Blockly.Msg.MPYTHONS_DIALOGUE_ROBOT_CHOOSE_MESSAGE0 = '选择训练器 聊天机器人';
Blockly.Msg.MPYTHONS_ADIALOGUE_ROBOT_CHOOSE_TOOLTIP = '';

Blockly.Msg.MPYTHONS_DIALOGUE_ROBOT_START_HELPURL = '';
Blockly.Msg.MPYTHONS_DIALOGUE_ROBOT_START_MESSAGE0 = '选择与%1 聊天';
Blockly.Msg.MPYTHONS_ADIALOGUE_ROBOT_START_TOOLTIP = '';

Blockly.Msg.MPYTHONS_ADIALOGUE_ROBOT_CORPUS_HELPURL = '';
Blockly.Msg.MPYTHONS_ADIALOGUE_ROBOT_CORPUS_TOOLTIP = '';
Blockly.Msg.MPYTHONS_ADIALOGUE_ROBOT_CORPUS_MESSAGE0 = '自定义 语料库 %1[%2]';

Blockly.Msg.MPYTHONS_ADIALOGUE_ROBOT_MY_FAQs_HELPURL = '';
Blockly.Msg.MPYTHONS_ADIALOGUE_ROBOT_MY_FAQs_MESSAGE0 = '输入对话 获得响应 %1';
Blockly.Msg.MPYTHONS_ADIALOGUE_ROBOT_MY_FAQs_TOOLTIP = '';

Blockly.Msg.MPYTHONS_ADIALOGUE_ROBOT_FAQs_RETURN_MESSAGE0 ='识别响应';
Blockly.Msg.MPYTHONS_ADIALOGUE_ROBOT_FAQs_RETURN_TOOLTIP = '';
Blockly.Msg.MPYTHONS_ADIALOGUE_ROBOT_FAQs_RETURN_HELPURL ='';

Blockly.Msg.MPYTHONS_ADIALOGUE_ROBOT_CORPUS2_HELPURL = '';
Blockly.Msg.MPYTHONS_ADIALOGUE_ROBOT_CORPUS2_MESSAGE0 = '选择跟 %1 聊天';
Blockly.Msg.MPYTHONS_ADIALOGUE_ROBOT_CORPUS2_TOOLTIP = '';
Blockly.Msg.Jenny = '珍妮';
Blockly.Msg.Jack = '杰克';
Blockly.Msg.Tom = '汤姆';

Blockly.Msg.MPYTHONS_ADIALOGUE_ROBOT_FEED_HELPURL = '';
Blockly.Msg.MPYTHONS_ADIALOGUE_ROBOT_FEED_MESSAGE0 = '选择 %1 %2 模式%3 %4 喂养%5';
Blockly.Msg.MPYTHONS_ADIALOGUE_ROBOT_FEED_TOOLTIP = '';

Blockly.Msg.MPYTHONS_ADIALOGUE_READ_TRAINING_LIBRARY_HELPURL = '';
Blockly.Msg.MPYTHONS_ADIALOGUE_READ_TRAINING_LIBRARY_MESSAGE0 = '查看训练库 选择%1';
Blockly.Msg.MPYTHONS_ADIALOGUE_READ_TRAINING_LIBRARY_TOOLTIP = '';

//Pythons 手势识别
Blockly.Msg.MPYTHON_GESTURE_RANDOM_NUMBER_HELPURL = '';
Blockly.Msg.MPYTHON_GESTURE_RANDOM_NUMBER_MESSAGE0 = '生成随机数 %1';
Blockly.Msg.MPYTHON_GESTURE_RANDOM_NUMBER_TOOLTIP = "";

Blockly.Msg.MPYTHON_AGESTURE_SHOW_WINDOW_HELPURL = '';
Blockly.Msg.MPYTHON_AGESTURE_SHOW_WINDOW_MESSAGE0 = '显示窗口';
Blockly.Msg.MPYTHON_AGESTURE_SHOW_WINDOW_TOOLTIP = "";

Blockly.Msg.MPYTHON_AGESTURE_IMSHOW_HELPURL = '';
Blockly.Msg.MPYTHON_AGESTURE_IMSHOW_MESSAGE0 = '处理图像 %1';
Blockly.Msg.MPYTHON_AGESTURE_IMSHOW_TOOLTIP = "";

Blockly.Msg.MPYTHON_AGESTURE_TRAIN_MODEL_HELPURL = '';
Blockly.Msg.MPYTHON_AGESTURE_TRAIN_MODEL_MESSAGE0 = '选择训练库 knn模型';
Blockly.Msg.MPYTHON_AGESTURE_TRAIN_MODEL_TOOLTIP = "";

Blockly.Msg.MPYTHON_AGESTURE_LOAD_MODEL_HELPURL = '';
Blockly.Msg.MPYTHON_AGESTURE_LOAD_MODEL_MESSAGE0 ='载入knn模型 存储路径%1';
Blockly.Msg.MPYTHON_AGESTURE_LOAD_MODEL_TOOLTIP = '';

Blockly.Msg.MPYTHON_AGESTURE_OPEN_IMAGES_HELPURL = '';
Blockly.Msg.MPYTHON_AGESTURE_OPEN_IMAGES_MESSAGE0 ='%1打开图片 存储路径%2 图片名%3';
Blockly.Msg.MPYTHON_AGESTURE_OPEN_IMAGES_TOOLTIP = '';

Blockly.Msg.MPYTHON_AGESTURE_ARRAY_MESSAGE0 = '选择%1 构建特征数据%2';
Blockly.Msg.MPYTHON_AGESTURE_ARRAY_TOOLTIP = '';
Blockly.Msg.MPYTHON_AGESTURE_ARRAY_HELPURL = '';

Blockly.Msg.MPYTHON_GESTURE_RANDOM_RANK_MESSAGE0 = '打乱排序%1 ';
Blockly.Msg.MPYTHON_GESTURE_RANDOM_RANK_TOOLTIP = '';
Blockly.Msg.MPYTHON_GESTURE_RANDOM_RANK_HELPURL = '';

Blockly.Msg.MPYTHON_GESTURE_READ_LEND_MESSAGE0 = ' %1 图片特征';
Blockly.Msg.MPYTHON_GESTURE_READ_LEND_TOOLTIP = '';
Blockly.Msg.MPYTHON_GESTURE_READ_LEND_HELPURL = '';

Blockly.Msg.MPYTHON_GESTURE_START_SRAIN_HELPURL = '';
Blockly.Msg.MPYTHON_GESTURE_START_SRAIN_MESSAGE0 = '开始训练 手势识别 期望%1 目标%2';
Blockly.Msg.MPYTHON_GESTURE_START_SRAIN_TOOLTIP = "";

Blockly.Msg.MPYTHON_GESTURE_SCORE_HELPURL = '';
Blockly.Msg.MPYTHON_GESTURE_SCORE_MESSAGE0 = '进行评分 期望%1 目标%2';
Blockly.Msg.MPYTHON_GESTURE_SCORE_TOOLTIP = "";

Blockly.Msg.MPYTHON_GESTURE_DIMENSIONALITY_REDUCTION_HELPURL = '';
Blockly.Msg.MPYTHON_GESTURE_DIMENSIONALITY_REDUCTION_TOOLTIP = '';
Blockly.Msg.MPYTHON_GESTURE_DIMENSIONALITY_REDUCTION_MESSAGE0 = '%1 数组降维 图片总数%2';

Blockly.Msg.MPYTHON_GESTURE_FORECAST_HELPURL = '';
Blockly.Msg.MPYTHON_GESTURE_FORECAST_TOOLTIP = '';
Blockly.Msg.MPYTHON_GESTURE_FORECAST_MESSAGE0 = '预测结果%1';

Blockly.Msg.MPYTHON_AGESTURE_SAVE_MODEL_HELPURL = '';
Blockly.Msg.MPYTHON_AGESTURE_SAVE_MODEL_MESSAGE0 ='保存模型 存储路径%1';
Blockly.Msg.MPYTHON_AGESTURE_SAVE_MODEL_TOOLTIP = '';

Blockly.Msg.MPYTHON_AGESTURE_FORECAST_PICTURE_HELPURL = '';
Blockly.Msg.MPYTHON_AGESTURE_FORECAST_PICTURE_MESSAGE0 ='%1图片 预测图片 ';
Blockly.Msg.MPYTHON_AGESTURE_FORECAST_PICTURE_TOOLTIP = '';

Blockly.Msg.MPYTHON_GESTURE_PICTURE_DIMENSIONALITY_REDUCTION_HELPURL = '';
Blockly.Msg.MPYTHON_GESTURE_PICTURE_DIMENSIONALITY_REDUCTION_TOOLTIP = '';
Blockly.Msg.MPYTHON_GESTURE_PICTURE_DIMENSIONALITY_REDUCTION_MESSAGE0 = '%1 彩色图像降维';

//Pythons 情绪识别
Blockly.Msg.MPYTHONS_FACEAI_READ_PICTURE_PATH_HELPURL = '';
Blockly.Msg.MPYTHONS_FACEAI_READ_PICTURE_PATH_MESSAGE0 ='选择人脸库 图片存储路径%1';
Blockly.Msg.MPYTHONS_FACEAI_READ_PICTURE_PATH_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACEAI_RECOGNITION_IMPORT_MODEL_SITE_HELPURL = '';
Blockly.Msg.MPYTHONS_FACEAI_RECOGNITION_IMPORT_MODEL_SITE_MESSAGE0 ='加载模型 存储路径%1';
Blockly.Msg.MPYTHONS_FACEAI_RECOGNITION_IMPORT_MODEL_SITE_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACEAI_FACE_GENDER_DETECTION_RETURN_HELPURL = '';
Blockly.Msg.MPYTHONS_FACEAI_FACE_GENDER_DETECTION_RETURN_MESSAGE0 ='第%1位人脸性别结果 置信度';
Blockly.Msg.MPYTHONS_FACEAI_FACE_GENDER_DETECTION_RETURN_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACEAI_FACE_EMOTION_DETECTION_RETURN_HELPURL = '';
Blockly.Msg.MPYTHONS_FACEAI_FACE_EMOTION_DETECTION_RETURN_MESSAGE0 = '第%1位人脸情绪结果 置信度';
Blockly.Msg.MPYTHONS_FACEAI_FACE_EMOTION_DETECTION_RETURN_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACEAI_FACE_GENDER_RESULT_HELPURL = '';
Blockly.Msg.MPYTHONS_FACEAI_FACE_GENDER_RESULT_MESSAGE0 ='第%1位人脸性别 结果';
Blockly.Msg.MPYTHONS_FACEAI_FACE_GENDER_RESULT_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACEAI_FACE_EMOTION_RESULT_HELPURL = '';
Blockly.Msg.MPYTHONS_FACEAI_FACE_EMOTION_RESULT_MESSAGE0 = '第%1位人脸情绪 结果';
Blockly.Msg.MPYTHONS_FACEAI_FACE_EMOTION_RESULT_TOOLTIP = '';

Blockly.Msg.MPYTHON_FACEAI_CHOOSE_FACE_POOL_HELPURL = '';
Blockly.Msg.MPYTHON_FACEAI_CHOOSE_FACE_POOL_MESSAGE0 = '选择人脸库 %1';
Blockly.Msg.MPYTHON_FACEAI_CHOOSE_FACE_POOL_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACEAI_FACE_EMOTION_RETURN_HELPURL = '';
Blockly.Msg.MPYTHONS_FACEAI_FACE_EMOTION_RETURN_MESSAGE0 = '第%1位情绪为 %2';
Blockly.Msg.MPYTHONS_FACEAI_FACE_EMOTION_RETURN_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACEAI_FACE_GENDER_RETURN_HELPURL = '';
Blockly.Msg.MPYTHONS_FACEAI_FACE_GENDER_RETURN_MESSAGE0 = '第%1位性别为 %2';
Blockly.Msg.MPYTHONS_FACEAI_FACE_GENDER_RETURN_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACEAI_FACE_NUMBER_RETURN_HELPURL = '';
Blockly.Msg.MPYTHONS_FACEAI_FACE_NUMBER_RETURN_MESSAGE0 = '人脸数量';
Blockly.Msg.MPYTHONS_FACEAI_FACE_NUMBER_RETURN_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACEAI_FACE_EXPRESSION_RETURN_HELPURL = '';
Blockly.Msg.MPYTHONS_FACEAI_FACE_EXPRESSION_RETURN_MESSAGE0 = '表情数量';
Blockly.Msg.MPYTHONS_FACEAI_FACE_EXPRESSION_RETURN_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACEAI_FACE_RECOGNITION_VEDIO_RETURN_HELPURL = '';
Blockly.Msg.MPYTHONS_FACEAI_FACE_RECOGNITION_VEDIO_RETURN_MESSAGE0 = '人脸实时检测 %1';
Blockly.Msg.MPYTHONS_FACEAI_FACE_RECOGNITION_VEDIO_RETURN_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACEAI_FACE_IMG_RESULT_HELPURL = '';
Blockly.Msg.MPYTHONS_FACEAI_FACE_IMG_RESULT_MESSAGE0 ='显示图片';
Blockly.Msg.MPYTHONS_FACEAI_FACE_IMG_RESULT_TOOLTIP = '';

Blockly.Msg.MPYTHONS_FACEAI_CHOOSE_FACE_DATABASE_HELPURL = '';
Blockly.Msg.MPYTHONS_FACEAI_CHOOSE_FACE_DATABASE_MESSAGE0 ='选择人脸%1 %2';
Blockly.Msg.MPYTHONS_FACEAI_CHOOSE_FACE_DATABASE_TOOLTIP = '';

//文章聚类
Blockly.Msg.MPYTHONS_WORD_CLOUD_INITIALIZE_HELPURL = '';
Blockly.Msg.MPYTHONS_WORD_CLOUD_INITIALIZE_MESSAGE0 = '初始化 文章聚类';
Blockly.Msg.MPYTHONS_WORD_CLOUD_INITIALIZE_TOOLTIP = '';

Blockly.Msg.MPYTHONS_WORD_CLOUD_TITLE_HELPURL = '文章数量不超过100';
Blockly.Msg.MPYTHONS_WORD_CLOUD_TITLE_MESSAGE0 = '标题 第%1文章';
Blockly.Msg.MPYTHONS_WORD_CLOUD_TITLE_TOOLTIP = '';

Blockly.Msg.MPYTHONS_WORD_CLOUD_CONTENT_HELPURL = '文章数量不超过100';
Blockly.Msg.MPYTHONS_WORD_CLOUD_CONTENT_MESSAGE0 = '内容 第%1文章';
Blockly.Msg.MPYTHONS_WORD_CLOUD_CONTENT_TOOLTIP = '';

Blockly.Msg.MPYTHONS_WORD_CLOUD_JIEBA_HELPURL = '文章数量不超过100';
Blockly.Msg.MPYTHONS_WORD_CLOUD_JIEBA_MESSAGE0 = '文章内容转为列表 第%1文章';
Blockly.Msg.MPYTHONS_WORD_CLOUD_JIEBA_TOOLTIP = '';

Blockly.Msg.MPYTHONS_WORD_CLOUD_STOPWORD_HELPURL = '';
Blockly.Msg.MPYTHONS_WORD_CLOUD_STOPWORD_MESSAGE0 = '读取停词表%1';
Blockly.Msg.MPYTHONS_WORD_CLOUD_STOPWORD_TOOLTIP = '返回的是100篇文章里的符号';

Blockly.Msg.MPYTHONS_WORD_CLOUD_DELETE_AFTER_NEWS_HELPURL = '';
Blockly.Msg.MPYTHONS_WORD_CLOUD_DELETE_AFTER_NEWS_MESSAGE0 = '删除后的新闻';
Blockly.Msg.MPYTHONS_WORD_CLOUD_DELETE_AFTER_NEWS_TOOLTIP = '';

Blockly.Msg.MPYTHONS_WORD_CLOUD_THESAURUS_CONSTRUCTION_DATA_HELPURL = '';
Blockly.Msg.MPYTHONS_WORD_CLOUD_THESAURUS_CONSTRUCTION_DATA_MESSAGE0 = '构造词云所用的数据';
Blockly.Msg.MPYTHONS_WORD_CLOUD_THESAURUS_CONSTRUCTION_DATA_TOOLTIP = '';

Blockly.Msg.MPYTHONS_WORD_CLOUD_COUNT_RANK_HELPURL = '';
Blockly.Msg.MPYTHONS_WORD_CLOUD_COUNT_RANK_MESSAGE0 = '计算总数 排序前%1';
Blockly.Msg.MPYTHONS_WORD_CLOUD_COUNT_RANK_TOOLTIP = '返回的是100篇文章里的文本';

Blockly.Msg.MPYTHONS_WORD_CLOUD_SAVE_PICTURE_HELPURL = '';
Blockly.Msg.MPYTHONS_WORD_CLOUD_SAVE_PICTURE_MESSAGE0 = '文章聚类训练结果 保存为图片';
Blockly.Msg.MPYTHONS_WORD_CLOUD_SAVE_PICTURE_TOOLTIP = '';

Blockly.Msg.MPYTHONS_WORD_CLOUD_DISPLAY_PICTURE_HELPURL = '';
Blockly.Msg.MPYTHONS_WORD_CLOUD_DISPLAY_PICTURE_MESSAGE0 = '显示图片';
Blockly.Msg.MPYTHONS_WORD_CLOUD_DISPLAY_PICTURE_TOOLTIP = '';





Blockly.Msg.FIRST = '第一次';
Blockly.Msg.LAST = '最后一次';

Blockly.Msg.MPYTHON_USOCKET_BLOCK = '阻塞';
Blockly.Msg.MPYTHON_USOCKET_UNBLOCK = '非阻塞';

Blockly.Msg.MPYTHON_USOCKET_SETSOCKOPT_HELPURL = 'http://docs.micropython.org/en/latest/library/usocket.html#usocket.socket';
Blockly.Msg.MPYTHON_USOCKET_SETSOCKOPT_MESSAGE0 = '設定socket  %1 地址 %2 類型 %3';
Blockly.Msg.MPYTHON_USOCKET_SETSOCKOPT_TOOLTIP = '設定給定通訊端選項的值。所需的符號常數在通訊端模塊中定義（SO_ *等）。該值可以是整數或表示緩衝區的類位元組對象。';

Blockly.Msg.MPYTHON_USOCKET_READLINE_HELPURL = 'http://docs.micropython.org/en/latest/library/usocket.html#usocket.socket.accept';
Blockly.Msg.MPYTHON_USOCKET_READLINE_MESSAGE0 =  'socket %1 接收一行數據，遇分行符號結束並返回接收數據的對象';
Blockly.Msg.MPYTHON_USOCKET_READLINE_TOOLTIP = '接收一行數據，遇分行符號結束，並返回接收數據的對象';

Blockly.Msg.MPYTHON_USOCKET_READ_HELPURL = 'http://docs.micropython.org/en/latest/library/usocket.html#usocket.socket.read';
Blockly.Msg.MPYTHON_USOCKET_READ_MESSAGE0 = '從socket %1 讀取 %2 字節並返回字節對象';
Blockly.Msg.MPYTHON_USOCKET_READ_TOOLTIP = '若未給定讀取數量 ，則按照類似 socket.readall() 的模式運行';

Blockly.Msg.MPYTHON_USOCKET_SETBLOCKING_HELPURL = 'http://docs.micropython.org/en/latest/library/usocket.html#usocket.socket.setblocking';
Blockly.Msg.MPYTHON_USOCKET_SETBLOCKING_MESSAGE0 = '設socket %1 為 %2 模式';
Blockly.Msg.MPYTHON_USOCKET_SETBLOCKING_TOOLTIP = '';

Blockly.Msg.MPYTHON_USOCKET_SETTIMEOUT_HELPURL = 'http://docs.micropython.org/en/latest/library/usocket.html#usocket.socket.settimeout';
Blockly.Msg.MPYTHON_USOCKET_SETTIMEOUT_MESSAGE0 = 'socket %1 設超時時間 %2 秒';
Blockly.Msg.MPYTHON_USOCKET_SETTIMEOUT_TOOLTIP = '';

Blockly.Msg.MPYTHON_USOCKET_RECV_HELPURL = 'http://docs.micropython.org/en/latest/library/usocket.html#usocket.socket.recv';
Blockly.Msg.MPYTHON_USOCKET_RECV_MESSAGE0 = 'socket %1 接收並返回接收到的數據對象 最大數據量為 %2';
Blockly.Msg.MPYTHON_USOCKET_RECV_TOOLTIP = '';

Blockly.Msg.MPYTHON_USOCKET_RECVFROM_HELPURL = 'http://docs.micropython.org/en/latest/library/usocket.html#usocket.socket.recvfrom';
Blockly.Msg.MPYTHON_USOCKET_RECVFROM_MESSAGE0 = 'socket %1 接收並返回接收到的數據元組 最大數據量為 %2';
Blockly.Msg.MPYTHON_USOCKET_RECVFROM_TOOLTIP = '元組格式 (bytes, address)';

Blockly.Msg.MPYTHON_USOCKET_SENDALL_HELPURL = 'http://docs.micropython.org/en/latest/library/usocket.html#usocket.socket.send';
Blockly.Msg.MPYTHON_USOCKET_SENDALL_MESSAGE0 = 'socket %1 連續發送%2 並返回發送的位元組數';
Blockly.Msg.MPYTHON_USOCKET_SENDALL_TOOLTIP = '將所有數據發送到通訊端。通訊端必須連接到遠程通訊端。與send（）此不同，此方法將嘗試通過連續發送數據塊來發送所有數據。';

Blockly.Msg.MPYTHON_USOCKET_SENDS_HELPURL = 'http://docs.micropython.org/en/latest/library/usocket.html#usocket.socket.send';
Blockly.Msg.MPYTHON_USOCKET_SENDS_MESSAGE0 = 'socket %1 發送 %2 並返回發送的字節數';
Blockly.Msg.MPYTHON_USOCKET_SENDS_TOOLTIP = '將數據發送到通訊端。通訊端必須連接到遠程通訊端。返回發送的位元組數，可能小於數據長度（“short write”）。';

Blockly.Msg.MPYTHON_USOCKET_SEND_HELPURL = 'http://docs.micropython.org/en/latest/library/usocket.html#usocket.socket.send';
Blockly.Msg.MPYTHON_USOCKET_SEND_MESSAGE0 = 'socket %1 發送 %2 並返回發送的字節數';
Blockly.Msg.MPYTHON_USOCKET_SEND_TOOLTIP = 'Send data to the socket. The socket must be connected to a remote socket. Returns number of bytes sent, which may be smaller than the length of data (“short write”).';

Blockly.Msg.MPYTHON_TEXT_ESC_HELPURL = '';
Blockly.Msg.MPYTHON_TEXT_ESC_MESSAGE0 = '文本轉義字元 %1 ';
Blockly.Msg.MPYTHON_TEXT_ESC_TOOLTIP = '文本轉義字元';

Blockly.Msg.MPYTHON_USOCKET_SENDTO_HELPURL = 'http://docs.micropython.org/en/latest/library/usocket.html#usocket.socket.sendto';
Blockly.Msg.MPYTHON_USOCKET_SENDTO_MESSAGE0 = 'socket %1 發送 %2 到地址 %3';
Blockly.Msg.MPYTHON_USOCKET_SENDTO_TOOLTIP = 'Send data to the socket. The socket should not be connected to a remote socket, since the destination socket is specified by address.';

Blockly.Msg.MPYTHON_USOCKET_CONNECT_HELPURL = 'http://docs.micropython.org/en/latest/library/usocket.html#usocket.socket.connect';
Blockly.Msg.MPYTHON_USOCKET_CONNECT_MESSAGE0 = 'socket %1 連接 host %2 端口 %3';
Blockly.Msg.MPYTHON_USOCKET_CONNECT_TOOLTIP = '';

Blockly.Msg.MPYTHON_USOCKET_GETADDRINFO_HELPURL = 'http://docs.micropython.org/en/latest/library/usocket.html#usocket.socket.getaddrinfo';
Blockly.Msg.MPYTHON_USOCKET_GETADDRINFO_MESSAGE0 = '解析 host %1 端口 %2 並返回 ip';
Blockly.Msg.MPYTHON_USOCKET_GETADDRINFO_TOOLTIP = '需聯網';

Blockly.Msg.MPYTHON_USOCKET_ACCEPT_HELPURL = 'http://docs.micropython.org/en/latest/library/usocket.html#usocket.socket.accept';
Blockly.Msg.MPYTHON_USOCKET_ACCEPT_MESSAGE0 =  'socket %1 接受連接請求並返回socket元組';
Blockly.Msg.MPYTHON_USOCKET_ACCEPT_TOOLTIP = '接收連接請求。socket需要指定地址並監聽連接。返回值是 (conn, address)。\nconn：新的socket對象，可以用來收發消息\naddress：連接到服務器的客戶端地址';

Blockly.Msg.MPYTHON_USOCKET_LISTEN_HELPURL = 'http://docs.micropython.org/en/latest/library/usocket.html#usocket.socket.listen';
Blockly.Msg.MPYTHON_USOCKET_LISTEN_MESSAGE0 = '監聽socket %1 backlog個數 %2';
Blockly.Msg.MPYTHON_USOCKET_LISTEN_TOOLTIP = 'backlog ：接受套接字的最大个数，至少为0，如果没有指定，则默认一个合理值。';

Blockly.Msg.MPYTHON_USOCKET_BIND_HELPURL = 'http://docs.micropython.org/en/latest/library/usocket.html#usocket.socket.bind';
Blockly.Msg.MPYTHON_USOCKET_BIND_MESSAGE0 =  'socket %1 綁定地址 %2 端口 %3';
Blockly.Msg.MPYTHON_USOCKET_BIND_TOOLTIP = '';

Blockly.Msg.MPYTHON_USOCKET_CLOSE_HELPURL = 'http://docs.micropython.org/en/latest/library/usocket.html#usocket.socket.close';
Blockly.Msg.MPYTHON_USOCKET_CLOSE_MESSAGE0 = 'socket %1 關閉';
Blockly.Msg.MPYTHON_USOCKET_CLOSE_TOOLTIP = '';

Blockly.Msg.MPYTHON_USOCKET_INIT_HELPURL = 'http://docs.micropython.org/en/latest/library/usocket.html#usocket.socket';
Blockly.Msg.MPYTHON_USOCKET_INIT_MESSAGE0 = '創建 socket %1 地址 %2 類型 %3';
Blockly.Msg.MPYTHON_USOCKET_INIT_TOOLTIP = 'AF_INET:=2 — TCP/IP – IPv4\nAF_INET6 :=10 — TCP/IP – IPv6\nSOCK_STREAM:=1 — TCP流\nSOCK_DGRAM:=2 — UDP數據報\nSOCK_RAW :=3 — 原始套接字\nSO_REUSEADDR : =4 — socket可重用\n';


Blockly.Msg.MPYTHON_GET_POST_HELPURL = '';
Blockly.Msg.MPYTHON_GET_POST_MESSAGE0 = '%1 請求網址 %2 提交字段 %3';
//Blockly.Msg.MPYTHON_GET_POST_TOOLTIP =  '*data*（可選）在請求正文中發送的字典或元組列表[（鍵，值）]（將是表單編碼的），字節或類文件對象。\n*json*（可選）在請求正文中發送的json數據。\n*headers*（可選）要與請求一同發送的HTTP標頭字典。';
Blockly.Msg.MPYTHON_GET_POST_TOOLTIP = '';

Blockly.Msg.MPYTHON_UREQUESTS_GET_POST_HELPURL = '';
Blockly.Msg.MPYTHON_UREQUESTS_GET_POST_TOOLTIP = '';
Blockly.Msg.MPYTHON_UREQUESTS_GET_POST_MESSAGE0 = '%1 請求網址 %2 提交字段 %3';

Blockly.Msg.MPYTHON_UREQUESTS_POST_FILE_HELPURL = '';
Blockly.Msg.MPYTHON_UREQUESTS_POST_FILE_TOOLTIP = '';
Blockly.Msg.MPYTHON_UREQUESTS_POST_FILE_MESSAGE0 = 'Post 提交文件 %1 請求網址 %2 文件路徑 %3 Mime類型 %4 附加字段 %5';

Blockly.Msg.MPYTHON_RESPONSE_HELPURL = '';
Blockly.Msg.MPYTHON_RESPONSE_MESSAGE0 = '響應内容 格式 %1';
Blockly.Msg.MPYTHON_RESPONSE_TOOLTIP = '';

Blockly.Msg.STRING = '字符串';
Blockly.Msg._BYTE = '二进制';
Blockly.Msg.TEXT = '文本';

Blockly.Msg.MPYTHON_RESPONSE_ATTRIBUTE_HELPURL = '';
Blockly.Msg.MPYTHON_RESPONSE_ATTRIBUTE_MESSAGE0 = '響應屬性 %1';
Blockly.Msg.MPYTHON_RESPONSE_ATTRIBUTE_TOOLTIP = '';

Blockly.Msg.MPYTHON_SETS_PIN_MODE_HELPURL = 'https://mpython.readthedocs.io/zh/master/board/hardware.html#mpythonpindesc';
Blockly.Msg.MPYTHON_SETS_PIN_MODE_TOOLTIP = '右鍵幫助，查看引脚聲明';
Blockly.Msg.MPYTHON_SETS_PIN_MODE_MESSAGE0 = '設置引脚 %1 為 %2 模式 %3 並設置值為 %4';

Blockly.Msg.MPYTHON_SET_PIN_IN = '輸入';
Blockly.Msg.MPYTHON_SET_PIN_PUSH_PULL_OUT = '推挽輸出';
Blockly.Msg.MPYTHON_SET_PIN_LEAKY_OUT = '開漏輸出';

Blockly.Msg.MPYTHON_SET_PIN_NO_PULL = '無上下拉';
Blockly.Msg.MPYTHON_SET_PIN_DOWN_PULL = '下拉';
Blockly.Msg.MPYTHON_SET_PIN_UP_PULL = '上拉';

Blockly.Msg.MPYTHON_LOCK_OBJECT_ACQUIRE_LOCK_HELPURL = '';
Blockly.Msg.MPYTHON_LOCK_OBJECT_ACQUIRE_LOCK_MESSAGE0 = '綫程鎖對象 %1 請求鎖';
Blockly.Msg.MPYTHON_LOCK_OBJECT_ACQUIRE_LOCK_TOOLTIP = '';

Blockly.Msg.MPYTHON_START_NEW_THREAD_HELPURL = '';
Blockly.Msg.MPYTHON_START_NEW_THREAD_MESSAGE0 = '子綫程 %1';
Blockly.Msg.MPYTHON_START_NEW_THREAD_TOOLTIP = '';


Blockly.Msg.MPYTHON_UART_INIT_HELPURL = '';
Blockly.Msg.MPYTHON_UART_INIT_MESSAGE0 = '串口 %4 初始化 波特率 %1 tx %2 rx %3';
Blockly.Msg.MPYTHON_UART_INIT_TOOLTIP = '掌控板支持3組串口。0用於REPL，剩下1，2兩組串口可用。所有引脚皆可作爲串口的輸入RX，除 P2、P3 、P4 、P10 只能作爲輸出，其餘所有的引脚理論上都可作爲輸出 TX。';

Blockly.Msg.MPYTHON_UART_DEINIT_HELPURL = '';
Blockly.Msg.MPYTHON_UART_DEINIT_MESSAGE0 = '關閉串口 %1';
Blockly.Msg.MPYTHON_UART_DEINIT_TOOLTIP = '關閉 UART 總線';

Blockly.Msg.MPYTHON_UART_WRITE_STR_HELPURL = '';
Blockly.Msg.MPYTHON_UART_WRITE_STR_MESSAGE0 = '串口 %1 寫入文本 %2 %3';
Blockly.Msg.MPYTHON_UART_WRITE_STR_TOOLTIP = '將文本寫入總線。\n返回值：寫入或 None 超時的字節數。';

Blockly.Msg.MPYTHON_UART_WRITE_HEX_HELPURL = '';
Blockly.Msg.MPYTHON_UART_WRITE_HEX_MESSAGE0 = '串口 %1 發送16進制字符串 %2 %3';
Blockly.Msg.MPYTHON_UART_WRITE_HEX_TOOLTIP = '';

Blockly.Msg.MPYTHON_UART_HAS_DATA_HELPURL = '';
Blockly.Msg.MPYTHON_UART_HAS_DATA_MESSAGE0 = '串口 %1 有可讀數據';
Blockly.Msg.MPYTHON_UART_HAS_DATA_TOOLTIP = '返回一個整數，計算可以無阻塞地讀取的字符數。\n如果沒有可用字符，它將返回0，如果有字符，則返回正數。\n即使有多個可讀的字符，該方法也可以返回1。';

Blockly.Msg.MPYTHON_UART_READLINE_HELPURL = '';
Blockly.Msg.MPYTHON_UART_READLINE_MESSAGE0 = '串口 %1 讀取一行數據';
Blockly.Msg.MPYTHON_UART_READLINE_TOOLTIP = '讀一行，以換行符結尾。\n返回值：讀取行或 None 超時。';

Blockly.Msg.MPYTHON_UART_READ_HELPURL = '';
Blockly.Msg.MPYTHON_UART_READ_MESSAGE0 = '串口 %1 讀取數據';
Blockly.Msg.MPYTHON_UART_READ_TOOLTIP = '讀取盡可能多的串口數據\n返回值：包含讀入字節的字節列表。若讀取超時則返回 None。';

Blockly.Msg.MPYTHON_UART_READ_LENGTH_HELPURL = '';
Blockly.Msg.MPYTHON_UART_READ_LENGTH_MESSAGE0 = '串口 %1 讀取數據 長度 %2';
Blockly.Msg.MPYTHON_UART_READ_LENGTH_TOOLTIP = '讀取指定長度字節數據\n返回值：包含讀入字節的字節列表。若讀取超時則返回 None。';

Blockly.Msg.MPYTHON_UART_WRITE_BYTE_HELPURL = '';
Blockly.Msg.MPYTHON_UART_WRITE_BYTE_MESSAGE0 = '串口 %1 寫入單字節 %2';
Blockly.Msg.MPYTHON_UART_WRITE_BYTE_TOOLTIP = '參數為 0~255 的整數\n將字節寫入總線。\n返回值：寫入或 None 超時的字節數。';

Blockly.Msg.MPYTHON_UART_WRITE_BYTES_HELPURL = '';
Blockly.Msg.MPYTHON_UART_WRITE_BYTES_MESSAGE0 = '串口 %1 寫入字節數組 %2';
Blockly.Msg.MPYTHON_UART_WRITE_BYTES_TOOLTIP = '將字節數組寫入總線。\n返回值：寫入或 None 超時的字節數。';

// 格式化字符串 % 方式
Blockly.Msg.TEXT_FORMAT_MESSAGE0 ='格式化字符串 %1 % %2';
Blockly.Msg.TEXT_FORMAT_TOOLTIP = '';
Blockly.Msg.TEXT_FORMAT_HELPURL = '';

// 格式化字符串 format 方式
Blockly.Msg.TEXT_FORMAT2_MESSAGE0 ='格式化字符串 %1 format %2';
Blockly.Msg.TEXT_FORMAT2_TOOLTIP = '';
Blockly.Msg.TEXT_FORMAT2_HELPURL = '';

Blockly.Msg.MPYTHON_BAUDRATE_HELPURL = '';
Blockly.Msg.MPYTHON_BAUDRATE_MESSAGE0 = '%1';
Blockly.Msg.MPYTHON_BAUDRATE_TOOLTIP = '';


Blockly.Msg.MPYTHON_HIGH_LOW_HELPURL = '';
Blockly.Msg.MPYTHON_HIGH_LOW_MESSAGE0 = '%1';
Blockly.Msg.MPYTHON_HIGH_LOW_TOOLTIP = '';

Blockly.Msg.MPYTHON_TEN_CONVERT_TO_HELPURL = '';
Blockly.Msg.MPYTHON_TEN_CONVERT_TO_MESSAGE0 = '10進制整數 %1 轉化為 %2 字符串';
Blockly.Msg.MPYTHON_TEN_CONVERT_TO_TOOLTIP = '';

Blockly.Msg.MPYTHON_BIN = '二進制';
Blockly.Msg.MPYTHON_OCT = '八進制';
Blockly.Msg.MPYTHON_HEX = '十六進制';

Blockly.Msg.MPYTHON_CONVERT_TO_TEN_HELPURL = '';
Blockly.Msg.MPYTHON_CONVERT_TO_TEN_MESSAGE0 = '%1 字符串 %2 轉 10進制整數';
Blockly.Msg.MPYTHON_CONVERT_TO_TEN_TOOLTIP = '';

Blockly.Msg.MPYTHON_TEN_CONVERTED_TO_BYTES_HELPURL = '';
Blockly.Msg.MPYTHON_TEN_CONVERTED_TO_BYTES_MESSAGE0 = '10進制整數 %2 轉 %1 字节';
Blockly.Msg.MPYTHON_TEN_CONVERTED_TO_BYTES_TOOLTIP = '';

Blockly.Msg.MPYTHON_INT_TO_CHR_HELPURL = '';
Blockly.Msg.MPYTHON_INT_TO_CHR_MESSAGE0 = '整型 %1 轉  ASCII 單字符';
Blockly.Msg.MPYTHON_INT_TO_CHR_TOOLTIP = 'ASCII：基於拉丁字母的一套電腦編碼系統，主要用於顯示現代英語和其他西歐語言';

Blockly.Msg.MPYTHON_CHR_TO_INT_HELPURL = '';
Blockly.Msg.MPYTHON_CHR_TO_INT_MESSAGE0 = 'ASCII 單字符 %1 轉 整型';
Blockly.Msg.MPYTHON_CHR_TO_INT_TOOLTIP = 'ASCII：基于拉丁字母的一套电脑编码系统，主要用于显示现代英语和其他西欧语言。';

Blockly.Msg.MPYTHON_STR_TO_HEX_HELPURL = '';
Blockly.Msg.MPYTHON_STR_TO_HEX_MESSAGE0 = '字符串 %1 轉 十六進制 字節';
Blockly.Msg.MPYTHON_STR_TO_HEX_TOOLTIP = '返回結果中用空格分隔兩個十六進制數';

Blockly.Msg.MPYTHON_HEX_TO_BIN_STR_HELPURL = '';
Blockly.Msg.MPYTHON_HEX_TO_BIN_STR_MESSAGE0 = '十六進制字符串 %1 轉 二進制 字節';
Blockly.Msg.MPYTHON_HEX_TO_BIN_STR_TOOLTIP = '';

Blockly.Msg.MPYTHON_DATA_TO_BASE64_HELPURL = '';
Blockly.Msg.MPYTHON_DATA_TO_BASE64_MESSAGE0 = '%1 以 base64 格式編碼 返回字節對象';
Blockly.Msg.MPYTHON_DATA_TO_BASE64_TOOLTIP = '';

Blockly.Msg.MPYTHON_BASE64_TO_DATA_HELPURL = '';
Blockly.Msg.MPYTHON_BASE64_TO_DATA_MESSAGE0 = '解碼 base64 數據 %1 返回字節對象';
Blockly.Msg.MPYTHON_BASE64_TO_DATA_TOOLTIP = '';

Blockly.Msg.MPYTHON_UJSON_DUMPS_HELPURL = '';
Blockly.Msg.MPYTHON_UJSON_DUMPS_MESSAGE0 = '%1 轉 json 字符串';
Blockly.Msg.MPYTHON_UJSON_DUMPS_TOOLTIP = 'JSON 格式的 key 必須是字符串 ，value 可以是合法的 JSON 數據類型（字符串, 數字, 對象, 數組, 布爾值或 none）';

Blockly.Msg.MPYTHON_UJSON_LOADS_HELPURL = '';
Blockly.Msg.MPYTHON_UJSON_LOADS_MESSAGE0 = '解析 json 字符串 %1 返回对象';
Blockly.Msg.MPYTHON_UJSON_LOADS_TOOLTIP = 'JSON 格式的 key 必須是字符串 ，value 可以是合法的 JSON 數據類型（字符串, 數字, 對象, 數組, 布爾值或 none）';


/* 掌控板_物聯網 */
Blockly.Msg.MPYTHON_BLYNK_TERMINAL_WIDGET_VPIN_HELPURL = '';
Blockly.Msg.MPYTHON_BLYNK_TERMINAL_WIDGET_VPIN_MESSAGE0 = '自定義終端部件 Terminal 虛擬管脚 V %1';
Blockly.Msg.MPYTHON_BLYNK_TERMINAL_WIDGET_VPIN_TOOLTIP = '';

Blockly.Msg.MPYTHON_BLYNK_SYNC_VIRTUAL_HELPURL = '';
Blockly.Msg.MPYTHON_BLYNK_SYNC_VIRTUAL_MESSAGE0 = '同步虛擬管脚狀態 V %1';
Blockly.Msg.MPYTHON_BLYNK_SYNC_VIRTUAL_TOOLTIP = '';

Blockly.Msg.MPYTHON_BLYNK_ON_DISCONNECTED_HELPURL = '';
Blockly.Msg.MPYTHON_BLYNK_ON_DISCONNECTED_MESSAGE0 = '當 Blynk 斷開連接時';
Blockly.Msg.MPYTHON_BLYNK_ON_DISCONNECTED_TOOLTIP = '';

Blockly.Msg.MPYTHON_BLYNK_ON_CONNECTED_HELPURL = '';
Blockly.Msg.MPYTHON_BLYNK_ON_CONNECTED_MESSAGE0 = '當 Blynk 連接時';
Blockly.Msg.MPYTHON_BLYNK_ON_CONNECTED_TOOLTIP = '';

Blockly.Msg.MPYTHON_BLYNKTIMER_RUN_HELPURL = '';
Blockly.Msg.MPYTHON_BLYNKTIMER_RUN_MESSAGE0 = '運行 Blynk 定時器進程';
Blockly.Msg.MPYTHON_BLYNKTIMER_RUN_TOOLTIP = '建議放在 \'一直重復\' 中循環執行';

Blockly.Msg.MPYTHON_BLYNK_RUN_HELPURL = '';
Blockly.Msg.MPYTHON_BLYNK_RUN_MESSAGE0 = '運行 Blynk 進程';
Blockly.Msg.MPYTHON_BLYNK_RUN_TOOLTIP = '建議放在 \'一直重復\' 中循環執行';

Blockly.Msg.MPYTHON_BLYNK_APP_NOTIFY_HELPURL = '';
Blockly.Msg.MPYTHON_BLYNK_APP_NOTIFY_MESSAGE0 = 'Blynk APP 顯示通知 %1';
Blockly.Msg.MPYTHON_BLYNK_APP_NOTIFY_TOOLTIP = '';

Blockly.Msg.MPYTHON_BLYNKTIMER_HELPURL = '';
Blockly.Msg.MPYTHON_BLYNKTIMER_MESSAGE0 = 'Blynk 定時器 %1 %2 周期 %3 秒';
Blockly.Msg.MPYTHON_BLYNKTIMER_TOOLTIP = '注意:\n定時器序號為自動獲取，自上而下，從0開始且連續，不可"定時器0，定時器2"，此處暴露參數為方便查看！\n參數:\nno_timers_err=False - 如果所有定時器都停止，禁用異常觸發';

Blockly.Msg.MPYTHON_BLYNK_GET_TIMERS_HELPURL = '';
Blockly.Msg.MPYTHON_BLYNK_GET_TIMERS_MESSAGE0 = '可用的 Blynk 定時器';
Blockly.Msg.MPYTHON_BLYNK_GET_TIMERS_TOOLTIP = "";

Blockly.Msg.MPYTHON_BLYNK_STOP_TIMERS_HELPURL = '';
Blockly.Msg.MPYTHON_BLYNK_STOP_TIMERS_MESSAGE0 = '停止 Blynk 定時器 %1';
Blockly.Msg.MPYTHON_BLYNK_STOP_TIMERS_TOOLTIP = 
    '注意:\n定時器序號為自動獲取，自上而下，從0開始且連續，不可"定時器0，定時器2"，此處暴露參數為方便查看！\n參數:\nno_timers_err=False - 如果所有定時器都停止，禁用異常觸發';

Blockly.Msg.MPYTHON_UART_INPUT_HELPURL = '';
Blockly.Msg.MPYTHON_UART_INPUT_MESSAGE0 = '從串口獲取文本 提示語句 %1';
Blockly.Msg.MPYTHON_UART_INPUT_TOOLTIP = ''

Blockly.Msg.INT_TO_CHR_HELPURL = ''
Blockly.Msg.INT_TO_CHR_MESSAGE0 = '整數 %1 轉 ASCII 單字符';
Blockly.Msg.INT_TO_CHR_TOOLTIP = "";

Blockly.Msg.MPYTHON_BLYNK_SET_PROPERTY_HELPURL = '';
Blockly.Msg.MPYTHON_BLYNK_SET_PROPERTY_MESSAGE0 = '給虛擬管脚添加   屬性 %1 值 %2';
Blockly.Msg.MPYTHON_BLYNK_SET_PROPERTY_TOOLTIP = "放於 read 或 write 事件中，虛擬管脚由事件決定，與該管脚綁定的組件會擁有添加的屬性";

Blockly.Msg.MPYTHON_BLYNK_EMAIL_HELPURL = '';
Blockly.Msg.MPYTHON_BLYNK_EMAIL_MESSAGE0 = '向預設郵箱發郵件 %1 主題 %2 正文 %3';
Blockly.Msg.MPYTHON_BLYNK_EMAIL_TOOLTIP = "";

Blockly.Msg.MPYTHON_BLYNK_SENSOR_DATA_TO_APP_HELPURL = '';
Blockly.Msg.MPYTHON_BLYNK_SENSOR_DATA_TO_APP_MESSAGE0 = '發送數據 %1 到 Blynk APP 的 虛擬管脚 V %2';
Blockly.Msg.MPYTHON_BLYNK_SENSOR_DATA_TO_APP_TOOLTIP = '虛擬管脚：V0 ~ V255';

Blockly.Msg.MPYTHON_BLYNK_SETUP_HELPURL = '';
Blockly.Msg.MPYTHON_BLYNK_SETUP_MESSAGE0 = 'Blynk 設置 %1 服務器 %2 端口 %3 授權碼 %4';
Blockly.Msg.MPYTHON_BLYNK_SETUP_TOOLTIP = '服務器可填 blynk-cloud.com 或者 blynk.mpython.cn\n默認端口為 8080\n註意：手機APP訪問端口為 9443';


Blockly.Msg.MPYTHON_BLYNK_APP_DATA_HELPURL = '';
Blockly.Msg.MPYTHON_BLYNK_APP_DATA_MESSAGE0 = '當 從 Blynk APP 收到 虛擬管腳 V %1 的值 %2 時';
Blockly.Msg.MPYTHON_BLYNK_APP_DATA_TOOLTIP = '虛擬管脚：V0 ~ V255';

Blockly.Msg.MPYTHON_BLYNK_RECEIVED_MESSAGE0 = '當 收到 Blynk 虛擬管腳 V %1 的值';

Blockly.Msg.MPYTHON_BLYNK_VALUE_MESSAGE0 = '從 Blynk 收到的值';
Blockly.Msg.MPYTHON_BLYNK_VALUE_TOOLTIP = '';
Blockly.Msg.MPYTHON_BLYNK_VALUE_HELPURL = '';

Blockly.Msg.MPYTHON_ONENET_DISCONNECT_MESSAGE0 = 'OneNET 斷開連接';
Blockly.Msg.MPYTHON_ONENET_DISCONNECT_TOOLTIP = '';
Blockly.Msg.MPYTHON_ONENET_DISCONNECT_HELPURL = '';

Blockly.Msg.MPYTHON_ONENET_MSG_MESSAGE0 = '從 OneNET 收到的消息';
Blockly.Msg.MPYTHON_ONENET_MSG_TOOLTIP = '';
Blockly.Msg.MPYTHON_ONENET_MSG_HELPURL = '';

Blockly.Msg.MPYTHON_ONENET_RECV_MESSAGE0 = '當 從 OneNET 收到消息 %1 時';
Blockly.Msg.MPYTHON3_ONENET_RECV_MESSAGE0 = '當 從 OneNET 收到消息 時';
Blockly.Msg.MPYTHON_ONENET_RECV_TOOLTIP = '';
Blockly.Msg.MPYTHON_ONENET_RECV_HELPURL = '';

Blockly.Msg.MPYTHON_ONENET_RECV_MSG_MESSAGE0 = '當 從 OneNET 收到特定消息 %1 時';
Blockly.Msg.MPYTHON_ONENET_RECV_MSG_TOOLTIP = '';
Blockly.Msg.MPYTHON_ONENET_RECV_MSG_HELPURL = '';

Blockly.Msg.MPYTHON_ONENET_PUB_VALUE_MESSAGE0 = '向 OneNET 發送數據流 名稱 %1 值 %2';
Blockly.Msg.MPYTHON_ONENET_PUB_VALUE_TOOLTIP = '';
Blockly.Msg.MPYTHON_ONENET_PUB_VALUE_HELPURL = '';
Blockly.Msg.MPYTHON_ONENET_PUB_DICT_MESSAGE0 = '向 OneNET 發送數據流 %1';
Blockly.Msg.MPYTHON_ONENET_PUB_DICT_TOOLTIP = '';
Blockly.Msg.MPYTHON_ONENET_PUB_DICT_HELPURL = '';

Blockly.Msg.MPYTHON_ONENET_PUB_VALUE2_MESSAGE0 = '向 小程序 發送數據流 名稱 %1 值 %2';
Blockly.Msg.MPYTHON_ONENET_PUB_VALUE2_TOOLTIP = '';
Blockly.Msg.MPYTHON_ONENET_PUB_VALUE2_HELPURL = '';

Blockly.Msg.MPYTHON_HCSR04_DISTANCE_HELPURL = 'https://mpython-lib.readthedocs.io/zh/master/hcsr04/index.html#hcsr04'
Blockly.Msg.MPYTHON_HCSR04_DISTANCE_MESSAGE0 = '%1 hcsr04 超聲波距離 測量單位 %2';
Blockly.Msg.MPYTHON_HCSR04_DISTANCE_TOOLTIP = "";

Blockly.Msg.MPYTHON_HCSR04_DISTANCE_MM_HELPURL = 'https://mpython-lib.readthedocs.io/zh/master/hcsr04/index.html#hcsr04'
Blockly.Msg.MPYTHON_HCSR04_DISTANCE_MM_MESSAGE0 = '%1 hcsr04 超聲波(mm)';
Blockly.Msg.MPYTHON_HCSR04_DISTANCE_MM_TOOLTIP = "";

Blockly.Msg.MPYTHON_HCSR04_OBJ_HELPURL = 'https://mpython-lib.readthedocs.io/zh/master/hcsr04/index.html#hcsr04'
Blockly.Msg.MPYTHON_HCSR04_OBJ_MESSAGE0 = 'hcsr04 超聲波初始化  名稱 %1  trigger %2 echo %3';
Blockly.Msg.MPYTHON_HCSR04_OBJ_TOOLTIP = "";

Blockly.Msg.MPYTHON_PM2_5_MIC_HELPURL = ''
Blockly.Msg.MPYTHON_PM2_5_MIC_MESSAGE0 = 'rx引脚%1 PM值濃度%2';
Blockly.Msg.MPYTHON_PM2_5_MIC_TOOLTIP = "";

Blockly.Msg.MPYTHON_PM2_5_LitresAir_HELPURL = ''
Blockly.Msg.MPYTHON_PM2_5_LitresAir_MESSAGE0 = 'rx引脚%1 0.1昇空氣中直徑在%2 顆粒物個數';
Blockly.Msg.MPYTHON_PM2_5_LitresAir_TOOLTIP = "";

Blockly.Msg.MPYTHON3_IR_REMOTE_RECV_MESSAGE0 = '當 紅外接收端 %1 收到消息時 %2 執行 %3';
Blockly.Msg.MPYTHON_IR_REMOTE_ADDRESS_MESSAGE0 = '紅外回調地址';
Blockly.Msg.MPYTHON_IR_REMOTE_MESSAGE_MESSAGE0 = '紅外接收內容';

Blockly.Msg.MPYTHON_IR_REMOTE_RECV_MESSAGE0 = '紅外接收 %1 回調地址 %2 回調命令 %3';
Blockly.Msg.MPYTHON_IR_REMOTE_RECV_HELPURL = '';
Blockly.Msg.MPYTHON_IR_REMOTE_RECV_TOOLTIP = '';

Blockly.Msg.MPYTHON_IR_REMOTE_SEND_MESSAGE0 = '紅外發送 %1 地址 %2 命令 %3';
Blockly.Msg.MPYTHON_IR_REMOTE_SEND_HELPURL = '';
Blockly.Msg.MPYTHON_IR_REMOTE_SEND_TOOLTIP = '';

Blockly.Msg.MPYTHON_ONENET_ACCEPT_MESSAGE = '收到消息';
Blockly.Msg.MPYTHON_ONENET = 'OneNET 設置';
Blockly.Msg.MPYTHON_ONENET_WECHAT_APP = '小程序 设置';
Blockly.Msg.MPYTHON_ONENET_OPTION_BOARDS = '可選掌控板';
Blockly.Msg.MPYTHON_ONENET_TITLE = 'OneNET';
Blockly.Msg.MPYTHON_SERVER = '服務器';
Blockly.Msg.MPYTHON_DEVICE_ID = '設備ID';
Blockly.Msg.MPYTHON_PRODUCT_ID = '產品ID';
Blockly.Msg.MPYTHON_API_KEY = '產品APIKey';
Blockly.Msg.MPYTHON_ONENET_CALLBACK = '回調函數';
Blockly.Msg.MPYTHON_TOPIC = '主題';
Blockly.Msg.MPYTHON_ONENET_CALLBACK_TITLE = "OneNET回調函數";

Blockly.Msg.MPYTHON_ONENET_OPTION_BOARDS_HELPURL = '';
Blockly.Msg.MPYTHON_ONENET_OPTION_BOARDS_MESSAGE0 = '小程序  選擇掌控板應用 %1';
Blockly.Msg.MPYTHON_ONENET_OPTION_BOARDS_TOOLTIP = '';

// text轉字節
Blockly.Msg.TEXT_TO_BYTE_MESSAGE0 ='轉字節 %1';
Blockly.Msg.TEXT_TO_BYTE_TOOLTIP = '支持數據類型：string';
Blockly.Msg.TEXT_TO_BYTE_HELPURL = '';
// 非文本转字节
Blockly.Msg.OTHER_TO_BYTE_MESSAGE0 ='非文本轉字節 %1';
Blockly.Msg.OTHER_TO_BYTE_TOOLTIP = '';
Blockly.Msg.OTHER_TO_BYTE_HELPURL = '';


Blockly.Msg.MPYTHON_BYTES_DECODE_HELPURL = '';
Blockly.Msg.MPYTHON_BYTES_DECODE_MESSAGE0 = '字節 %1 轉 字符串';
Blockly.Msg.MPYTHON_BYTES_DECODE_TOOLTIP = "";


Blockly.Msg.MPYTHON_ONENET_TOOLTIP = '創建OneNET連接';
Blockly.Msg.MPYTHON_ONENET_INIT_WIFI_MESSAGE0 ='物聯網 確保連接到 Wi-Fi 名稱 %1 密碼 %2';
Blockly.Msg.MPYTHON_ONENET_INIT_WIFI_TOOLTIP = '';
Blockly.Msg.MPYTHON_ONENET_INIT_WIFI_HELPURL = '';


Blockly.Msg.MPYTHON_ONENET_RECV_FROM_WECHAT_APP_HELPURL = '';
Blockly.Msg.MPYTHON_ONENET_RECV_FROM_WECHAT_APP_MESSAGE0 = '儅從小程序收到消息 %1 和 %2 時';
Blockly.Msg.MPYTHON_ONENET_RECV_FROM_WECHAT_APP_TOOLTIP = '';

/* 掌控板_物聯網 */


/* 掌控板start */
Blockly.Msg.MPYTHON_MAC_ADDRESS_HELPURL = '';
Blockly.Msg.MPYTHON_MAC_ADDRESS_MESSAGE0 = 'MAC 地址';
Blockly.Msg.MPYTHON_MAC_ADDRESS_TOOLTIP = "";

Blockly.Msg.MPYTHON_RADIO_REC_HELPURL = '';
Blockly.Msg.MPYTHON_RADIO_REC_MESSAGE0 = '無綫廣播  接收消息';
Blockly.Msg.MPYTHON_RADIO_REC_TOOLTIP = "所接收為字節型";

Blockly.Msg.MPYTHON_RADIO_SEND_HELPURL = '';
Blockly.Msg.MPYTHON_RADIO_SEND_MESSAGE0 = '無綫廣播  發送 %1';
Blockly.Msg.MPYTHON_RADIO_SEND_TOOLTIP = "頻道: 1~13";

Blockly.Msg.MPYTHON_RADIO_CHANNEL_HELPURL = '';
Blockly.Msg.MPYTHON_RADIO_CHANNEL_MESSAGE0 = '設無綫廣播  頻道為 %1';
Blockly.Msg.MPYTHON_RADIO_CHANNEL_TOOLTIP = "頻道: 1~13";

Blockly.Msg.MPYTHON_RADIO_ON_OFF_HELPURL = '';
Blockly.Msg.MPYTHON_RADIO_ON_OFF_MESSAGE0 = '%1 無綫廣播';
Blockly.Msg.MPYTHON_RADIO_ON_OFF_TOOLTIP = "頻道: 1~13";

Blockly.Msg.MPYTHON_RADIO_MSG_MESSAGE0 = '收到的無線廣播消息';
Blockly.Msg.MPYTHON_RADIO_MSG_TOOLTIP = '';
Blockly.Msg.MPYTHON_RADIO_MSG_HELPURL = '';

Blockly.Msg.MPYTHON3_RADIO_RECV_MESSAGE0 = '當 收到無線廣播消息 時 %1 執行 %2';

Blockly.Msg.MPYTHON_RADIO_RECV_MESSAGE0 = '當 收到無線廣播消息 %1 時';
Blockly.Msg.MPYTHON_RADIO_RECV_TOOLTIP = "頻道: 1~13";
Blockly.Msg.MPYTHON_RADIO_RECV_HELPURL = '';

Blockly.Msg.MPYTHON_RADIO_RECV_MSG_MESSAGE0 = '當 收到特定無線廣播消息 %1 時 %2 執行 %3';
Blockly.Msg.MPYTHON_RADIO_RECV_MSG_TOOLTIP = "頻道: 1~13";
Blockly.Msg.MPYTHON_RADIO_RECV_MSG_HELPURL = '';

// 2020-11-21 UDP 收發
Blockly.Msg.MPYTHON_UDP_INIT_HELPURL = '';
Blockly.Msg.MPYTHON_UDP_INIT_MESSAGE0 = '建立 UDP 連接';
Blockly.Msg.MPYTHON_UDP_INIT_TOOLTIP = "UDP連接基於Wi-Fi";

Blockly.Msg.MPYTHON_UDP_SEND_HELPURL = '';
Blockly.Msg.MPYTHON_UDP_SEND_MESSAGE0 = 'UDP 群發消息 %1';
Blockly.Msg.MPYTHON_UDP_SEND_TOOLTIP = "";

Blockly.Msg.MPYTHON_UDP_SENDTO_HELPURL = '';
Blockly.Msg.MPYTHON_UDP_SENDTO_MESSAGE0 = 'UDP 發送消息 %1 到 %2 端口 %3';
Blockly.Msg.MPYTHON_UDP_SENDTO_TOOLTIP = "";

Blockly.Msg.MPYTHON_UDP_RECV_HELPURL = '';
Blockly.Msg.MPYTHON_UDP_RECV_MESSAGE0 = 'UDP 接收消息';
Blockly.Msg.MPYTHON_UDP_RECV_TOOLTIP = "";

Blockly.Msg.MPYTHON_UDP_RECV_EVENT_HELPURL = '';
Blockly.Msg.MPYTHON_UDP_RECV_EVENT_MESSAGE0 = '當從 UDP 收到消息時 %1 執行 %2';
Blockly.Msg.MPYTHON_UDP_RECV_EVENT_TOOLTIP = "";

Blockly.Msg.MPYTHON_UDP_RECV_MSG_MESSAGE0 = '從 UDP 收到的消息';
Blockly.Msg.MPYTHON_UDP_RECV_MSG_TOOLTIP = "";
Blockly.Msg.MPYTHON_UDP_RECV_MSG_HELPURL = '';


Blockly.Msg.MPYTHON_AUDIO_PLAY_chirp_MESSAGE0 = '鳥叫';
Blockly.Msg.MPYTHON_AUDIO_PLAY_Pianodarkmelodies_MESSAGE0 = "鋼琴黑暗旋律配樂";
Blockly.Msg.MPYTHON_AUDIO_PLAY_miaow_MESSAGE0 = "貓叫";
Blockly.Msg.MPYTHON_AUDIO_PLAY_bark_MESSAGE0 = "小狗吠叫";
Blockly.Msg.MPYTHON_AUDIO_PLAY_Arichpercussivesound_MESSAGE0 = "渾厚的打擊音";
Blockly.Msg.MPYTHON_AUDIO_PLAY_Soundeffectsfortension_MESSAGE0 = "緊張效果的音效";
Blockly.Msg.MPYTHON_AUDIO_PLAY_Camerashuttersound_MESSAGE0 = "拍照快門聲";
Blockly.Msg.MPYTHON_AUDIO_PLAY_Hundredsofflies_MESSAGE0 = "數百只蒼蠅";
Blockly.Msg.MPYTHON_AUDIO_PLAY_Cricketscry_MESSAGE0 = "蟋蟀叫聲";
Blockly.Msg.MPYTHON_AUDIO_PLAY_Shakethebassline_MESSAGE0 = "搖晃低音聲線";
Blockly.Msg.MPYTHON_AUDIO_PLAY_audiencecheeredandclapped_MESSAGE0 = "聽眾歡呼掌聲";
Blockly.Msg.MPYTHON_AUDIO_PLAY_Cruiseshipwhistle_MESSAGE0 = "郵輪汽笛";
Blockly.Msg.MPYTHON_AUDIO_PLAY_Moderntelephoneringtone_MESSAGE0 = "現代電話鈴聲";
Blockly.Msg.MPYTHON_AUDIO_PLAY_pullingtradish_MESSAGE0 = "拔蘿蔔";
Blockly.Msg.MPYTHON_AUDIO_PLAY_twotigers_MESSAGE0 = "兩只老虎";

Blockly.Msg.MPYTHON_AUDIO_SET_VOLUME_HELPURL = '';
Blockly.Msg.MPYTHON_AUDIO_SET_VOLUME_MESSAGE0 = '設音頻音量 %1';
Blockly.Msg.MPYTHON_AUDIO_SET_VOLUME_TOOLTIP = "";

Blockly.Msg.MPYTHON_DISPCHAR_MODE_1 = '普通';
Blockly.Msg.MPYTHON_DISPCHAR_MODE_2 = '反轉';
Blockly.Msg.MPYTHON_DISPCHAR_MODE_3 = '透明';

Blockly.Msg.MPYTHON_AUDIO_XUNFEI_TTS_HELPURL = '';
Blockly.Msg.MPYTHON_AUDIO_XUNFEI_TTS_MESSAGE0 = 'TTS 語音播放 %1';
Blockly.Msg.MPYTHON_AUDIO_XUNFEI_TTS_TOOLTIP = "需要在 訊飛開放平臺 www.xfyun.cn 上開通“在線語音合成”服務";

Blockly.Msg.MPYTHON_AUDIO_XUNFEI_TTS_CONFIG_HELPURL = 'https://mpython.readthedocs.io/zh/master/extboard/tutorials/tutorials_parrot.html#id3';
Blockly.Msg.MPYTHON_AUDIO_XUNFEI_TTS_CONFIG_MESSAGE0 = 'TTS 語音配置 APPID %1 APIKey %2';
Blockly.Msg.MPYTHON_AUDIO_XUNFEI_TTS_CONFIG_TOOLTIP = "輸入在 訊飛開放平臺 www.xfyun.cn 獲取的 APPID 與 APIKey\n註意：要設置IP白名單";

Blockly.Msg.MPYTHON_AUDIO_PLAY_HELPURL = 'https://mpython.readthedocs.io/zh/master/library/mPython/audio.html#id1';
Blockly.Msg.MPYTHON_AUDIO_PLAY_MESSAGE0 = '音頻 播放  %1';
Blockly.Msg.MPYTHON_AUDIO_PLAY_TOOLTIP = "需要有源音箱\nP8 左聲道\nP9 右聲道\nGND 接地\n播放參數: \n網絡 MP3 的 url 或已上傳至掌控板的 MP3, 如'music_1.mp3' ";

Blockly.Msg.MPYTHON_AUDIO_PLAY_CHOOSE_HELPURL = 'https://mpython.readthedocs.io/zh/master/library/mPython/audio.html#id1';
Blockly.Msg.MPYTHON_AUDIO_PLAY_CHOOSE_MESSAGE0 = '音頻 播放  %1';
Blockly.Msg.MPYTHON_AUDIO_PLAY_CHOOSE_TOOLTIP = "需要有源音箱\nP8 左聲道\nP9 右聲道\nGND 接地\n播放參數: \n網絡 MP3 的 url 或已上傳至掌控板的 MP3, 如'music_1.mp3' ";

Blockly.Msg.MPYTHON_AUDIO_DEINIT_HELPURL = '';
Blockly.Msg.MPYTHON_AUDIO_DEINIT_MESSAGE0 = '音頻 釋放緩存';
Blockly.Msg.MPYTHON_AUDIO_DEINIT_TOOLTIP = '';

Blockly.Msg.MPYTHON_AUDIO_CMD_HELPURL = '';
Blockly.Msg.MPYTHON_AUDIO_CMD_MESSAGE0 = '音頻  %1';
Blockly.Msg.MPYTHON_AUDIO_CMD_TOOLTIP = '';

Blockly.Msg.MPYTHON_AUDIO_INIT_HELPURL = '';
Blockly.Msg.MPYTHON_AUDIO_INIT_MESSAGE0 = '音頻 初始化';
Blockly.Msg.MPYTHON_AUDIO_INIT_TOOLTIP = '為音頻解碼開闢緩存';

//测试 -- 
Blockly.Msg.MPYTHON_AUDIO_START_RECORDING_HELPURL = '';
Blockly.Msg.MPYTHON_AUDIO_START_RECORDING_MESSAGE0 = '開始錄音 錄音時長%1秒';
Blockly.Msg.MPYTHON_AUDIO_START_RECORDING_TOOLTIP = "需要掌控板v1.1以上硬件版本，錄音時長不能超過5秒";

Blockly.Msg.MPYTHON_AUDIO_RECORDING_RESULT_HELPURL = '';
Blockly.Msg.MPYTHON_AUDIO_RECORDING_RESULT_MESSAGE0 = '錄音結果';
Blockly.Msg.MPYTHON_AUDIO_RECORDING_RESULT_TOOLTIP = "需要掌控板v1.1以上硬件版本。";

Blockly.Msg.MPYTHON_AUDIO_DISCERN_RECORDING_HELPURL = '';
Blockly.Msg.MPYTHON_AUDIO_DISCERN_RECORDING_MESSAGE0 = '將 %1 進行識別';
Blockly.Msg.MPYTHON_AUDIO_DISCERN_RECORDING_TOOLTIP = "需要掌控板v1.1以上硬件版本。";

Blockly.Msg.MPYTHON_AUDIO_DISCERN_RECORDING_RESULT_HELPURL = '';
Blockly.Msg.MPYTHON_AUDIO_DISCERN_RECORDING_RESULT_MESSAGE0 = '識別錄音結果';
Blockly.Msg.MPYTHON_AUDIO_DISCERN_RECORDING_RESULT_TOOLTIP = "需要掌控板v1.1以上硬件版本。";


Blockly.Msg.MPYTHON_RECORD_INIT_HELPURL = '';
Blockly.Msg.MPYTHON_RECORD_INIT_MESSAGE0 = '錄音 初始化';
Blockly.Msg.MPYTHON_RECORD_INIT_TOOLTIP = '錄音初始化。\n需要掌控板v1.1以上硬件版本。';

Blockly.Msg.MPYTHON_RECORD_DEINIT_HELPURL = '';
Blockly.Msg.MPYTHON_RECORD_DEINIT_MESSAGE0 = '錄音 釋放資源';
Blockly.Msg.MPYTHON_RECORD_DEINIT_TOOLTIP = '錄音結束後釋放資源。\n需要掌控板v1.1以上硬件版本。';

Blockly.Msg.MPYTHON_RECORD_WAV_HELPURL = '';
Blockly.Msg.MPYTHON_RECORD_WAV_MESSAGE0 = '錄制音頻 存儲路徑 %1 時長 %2 秒';
Blockly.Msg.MPYTHON_RECORD_WAV_TOOLTIP = '錄制音頻，並以 WAV 格式存儲。\n需要掌控板v1.1以上硬件版本。';

Blockly.Msg.MPYTHON_ASR_HELPURL = '';
Blockly.Msg.MPYTHON_ASR_MESSAGE0 = '識別 %1 秒語音指令';
Blockly.Msg.MPYTHON_ASR_TOOLTIP = '可以識別3秒內的語音指令。\n需要掌控板v1.1以上硬件版本。';
//测试 -- 

Blockly.Msg.mpython_HELPURL = 'https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';

Blockly.Msg.mpython_button_A = 'P5（按鍵A）';
Blockly.Msg.mpython_button_B = 'P11（按鍵B）';
Blockly.Msg.mpython_PIN7_RGB = 'P7（板載RGB）';

Blockly.Msg.MPYTHON_PWM_PIN_P7 = 'P7 (掌控板)';
Blockly.Msg.MPYTHON_PWM_PIN_P9 = 'P9 (掌控實驗箱)';

Blockly.Msg.mpython_tem = '溫度';
Blockly.Msg.mpython_hum = '濕度';
Blockly.Msg.mpython_pre = '氣壓';
Blockly.Msg.mpython_left_right = '左右';
Blockly.Msg.MPYTHON_LEFT = '左';
Blockly.Msg.MPYTHON_RIGHT = '右';
Blockly.Msg.mpython_front_back = '前後';
Blockly.Msg.mpython_vertical = '垂直';
Blockly.Msg.mpython_horizontal = '水平';
Blockly.Msg.mpython_run_in_back = '後臺運行';
Blockly.Msg.mpython_run_in_front = '前臺運行';
Blockly.Msg.mpython_draw = '繪制';
Blockly.Msg.mpython_clear  = '清除';
Blockly.Msg.mpython_s = '秒';
Blockly.Msg.mpython_ms = '毫秒';
Blockly.Msg.mpython_us = '微秒';
Blockly.Msg.mpython_year = '年';
Blockly.Msg.mpython_month = '月';
Blockly.Msg.mpython_date = '日';
Blockly.Msg.mpython_hour = '時';
Blockly.Msg.mpython_minute = '分';
Blockly.Msg.mpython_week = '星期數';
Blockly.Msg.mpython_days = '天數';

Blockly.Msg.MPYTHON_ORDER = '第';
Blockly.Msg.MPYTHON_REVERSE_ORDER  = '倒數第';

Blockly.Msg.MATH_RANDOM_RANDRANGE_HELPURL = 'https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';
Blockly.Msg.MATH_RANDOM_RANDRANGE_TOOLTIP = '返回指定遞增基數集合中的一個隨機數，基數缺省值為1';
Blockly.Msg.MATH_RANDOM_RANDRANGE_MESSAGE0 = '隨機數 從遞增區間 [%1 ,%2) 遞增步長%3';

Blockly.Msg.MATH_KEEP_DECIMAL_HELPURL = '';
Blockly.Msg.MATH_KEEP_DECIMAL_TOOLTIP = '';
Blockly.Msg.MATH_KEEP_DECIMAL_MESSAGE0 = '%1 保留 %2 位小數';

Blockly.Msg.MPYTHON_MIN = '最小值';
Blockly.Msg.MPYTHON_MAX = '最大值';
Blockly.Msg.MPYTHON_LENTH = '長度';
Blockly.Msg.TUPLE_MIN_MAX_LEN_HELPURL = 'https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';
Blockly.Msg.TUPLE_MIN_MAX_LEN_TOOLTIP = '';
Blockly.Msg.TUPLE_MIN_MAX_LEN_MESSAGE0 = '元組 %1 %2';

Blockly.Msg.TUPLE_ITEM_EXIST_HELPURL= 'https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';
Blockly.Msg.TUPLE_ITEM_EXIST_TOOLTIP= '';
Blockly.Msg.TUPLE_ITEM_EXIST_MESSAGE0= '元組%1 包含%2';

Blockly.Msg.LIST_ITEM_EXIST_HELPURL= 'https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';
Blockly.Msg.LIST_ITEM_EXIST_TOOLTIP= '';
Blockly.Msg.LIST_ITEM_EXIST_MESSAGE0= '列表%1 包含%2';

Blockly.Msg.PARTS_OF_TUPLE_HELPURL = 'https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';
Blockly.Msg.PARTS_OF_TUPLE_TOOLTIP = '正序計數從0開始，倒序計數從1開始';
Blockly.Msg.PARTS_OF_TUPLE_MESSAGE0 = '返回元組%1 取第%2 項到尾項';

Blockly.Msg.PARTS_OF_TUPLE2_HELPURL = 'https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';
Blockly.Msg.PARTS_OF_TUPLE2_TOOLTIP = '遞增順序取項\n舉例：\n 倒數第5到倒數第2；\n 第0到第5';
Blockly.Msg.PARTS_OF_TUPLE2_MESSAGE0 = '返回元組%1 取%2 %3 項到 %4 %5 項';

Blockly.Msg.PARTS_OF_LIST_HELPURL = 'https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';
Blockly.Msg.PARTS_OF_LIST_TOOLTIP = '遞增順序取項\n舉例：\n 倒數第5到倒數第2；\n 第0到第5';
Blockly.Msg.PARTS_OF_LIST_MESSAGE0 = '返回列表%1 取%2 %3 項到 %4 %5 項';

Blockly.Msg.LIST_TO_TUPLE_HELPURL = 'https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';
Blockly.Msg.LIST_TO_TUPLE_TOOLTIP = '';
Blockly.Msg.LIST_TO_TUPLE_MESSAGE0 = '列表%1 轉元組';


Blockly.Msg.tuple_create_with_MESSAGE0 = '定義元組 %1 = %2 ';
Blockly.Msg.tuple_create_with_TOOLTIP = '只包含一個元素時，需要在元素後面添加逗號';
Blockly.Msg.tuple_create_with_HELPURL = 'https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';

Blockly.Msg.tuple_order_item_MESSAGE0 = '元組%1 %2 %3 項';
Blockly.Msg.tuple_order_item_TOOLTIP = '正序計數從0開始，倒序計數從1開始';
Blockly.Msg.tuple_order_item_HELPURL = 'https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';

Blockly.Msg.LIST_ORDER_ITEM_MESSAGE0 = '列表%1 %2 %3 項';
Blockly.Msg.LIST_ORDER_ITEM_TOOLTIP = '正序計數從0開始，倒序計數從1開始';
Blockly.Msg.LIST_ORDER_ITEM_HELPURL = 'https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';

Blockly.Msg.SET_LIST_ORDER_ITEM_MESSAGE0 = '設列表%1 %2 %3 項為%4';
Blockly.Msg.SET_LIST_ORDER_ITEM_TOOLTIP = '正序計數從0開始，倒序計數從1開始';
Blockly.Msg.SET_LIST_ORDER_ITEM_HELPURL = 'https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';

Blockly.Msg.INSERT_LIST_ORDER_ITEM_MESSAGE0 = '插入列表%1 %2 %3 項為%4';
Blockly.Msg.INSERT_LIST_ORDER_ITEM_TOOLTIP = '正序計數從0開始，倒序計數從1開始';
Blockly.Msg.INSERT_LIST_ORDER_ITEM_HELPURL = 'https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';

Blockly.Msg.SET_TUPLE_ORDER_ITEM_MESSAGE0 = '設元組%1 %2 %3 項為%4';
Blockly.Msg.SET_TUPLE_ORDER_ITEM_TOOLTIP = '正序計數從0開始，倒序計數從1開始';
Blockly.Msg.SET_TUPLE_ORDER_ITEM_HELPURL = 'https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';


Blockly.Msg.DICT_CREATE_WITH_HELPURL ='https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';
Blockly.Msg.DICT_CREATE_WITH_TOOLTIP = '';
Blockly.Msg.DICT_CREATE_WITH_MESSAGE0 = '定義字典 %1 = %2';

Blockly.Msg.SET_CREATE_WITH_HELPURL ='https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';
Blockly.Msg.SET_CREATE_WITH_TOOLTIP = '';
Blockly.Msg.SET_CREATE_WITH_MESSAGE0 = '定義集合 %1 = %2';

Blockly.Msg.SET_UPDATE_WITH_HELPURL ='https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';
Blockly.Msg.SET_UPDATE_WITH_TOOLTIP = '添加參數可為字符串、列表、元組、集合、字典（只添加key），已有元素則不進行操作';
Blockly.Msg.SET_UPDATE_WITH_MESSAGE0 = '集合 %1 添加 %2';

Blockly.Msg.INTERSECTION_OF_SETS_HELPURL ='https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';
Blockly.Msg.INTERSECTION_OF_SETS_TOOLTIP = '';
Blockly.Msg.INTERSECTION_OF_SETS_MESSAGE0 = '取 %1 集合 %2 集合 %3';
Blockly.Msg.MPYTHON_INTERSECTION = '交集';
Blockly.Msg.MPYTHON_UNION = '並集';
Blockly.Msg.MPYTHON_DIFFERENCE = '差集';
Blockly.Msg.SETS_UPDATE_WAYS_HELPURL ='https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';
Blockly.Msg.SETS_UPDATE_WAYS_TOOLTIP = '';
Blockly.Msg.SETS_UPDATE_WAYS_MESSAGE0 = '集合 %1 更新為 與集合 %2 的 %3';
Blockly.Msg.SUBSET_SUPERSET_HELPURL ='https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';
Blockly.Msg.SUBSET_SUPERSET_TOOLTIP = '';
Blockly.Msg.SUBSET_SUPERSET_MESSAGE0 = '集合 %1 為集合 %2 的 %3';
Blockly.Msg.MPYTHON_SUBSET = '子集';
Blockly.Msg.MPYTHON_SUPERSET = '超集';

Blockly.Msg.LEN_OF_SETS_HELPURL ='https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';
Blockly.Msg.LEN_OF_SETS_TOOLTIP = '';
Blockly.Msg.LEN_OF_SETS_MESSAGE0 = '集合 %1 長度';

Blockly.Msg.GET_SETS_POP_HELPURL ='https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';
Blockly.Msg.GET_SETS_POP_TOOLTIP = '';
Blockly.Msg.GET_SETS_POP_MESSAGE0 = '返回隨機項並移除之  從集合 %1';

Blockly.Msg.CREATE_EMPTY_SET_HELPURL ='https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';
Blockly.Msg.CREATE_EMPTY_SET_TOOLTIP = '';
Blockly.Msg.CREATE_EMPTY_SET_MESSAGE0 = '創建空集合 %1';

Blockly.Msg.BIT_INVERSION_HELPURL ='https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';
Blockly.Msg.BIT_INVERSION_TOOLTIP = '對數據的每個二進制位取反';
Blockly.Msg.BIT_INVERSION_MESSAGE0 = '二進制取反 %1';


Blockly.Msg.TUPLE_CREATE_WITH_ITEMS_INSERT_HELPURL ='https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';
Blockly.Msg.TUPLE_CREATE_WITH_ITEMS_INSERT_TOOLTIP = '正序計數從0開始，倒序計數從1開始';

Blockly.Msg.SET_CREATE_WITH_ITEMS_INSERT_HELPURL ='https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';
Blockly.Msg.SET_CREATE_WITH_ITEMS_INSERT_TOOLTIP = '項可為字符串、已賦值變量、元組';

Blockly.Msg.DICT_CREATE_WITH_ITEMS_INSERT_HELPURL ='https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';
Blockly.Msg.DICT_CREATE_WITH_ITEMS_INSERT_TOOLTIP = '正序計數從0開始，倒序計數從1開始';


Blockly.Msg.DICT_KEY_VALUE_HELPURL ='https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';
Blockly.Msg.DICT_KEY_VALUE_TOOLTIP = '';
Blockly.Msg.DICT_KEY_VALUE_MESSAGE0 = '字典%1 鍵%2 的值';

Blockly.Msg.ADD_DICT_KEY_VALUE_HELPURL ='https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';
Blockly.Msg.ADD_DICT_KEY_VALUE_TOOLTIP = '已有該鍵則更新該鍵';
Blockly.Msg.ADD_DICT_KEY_VALUE_MESSAGE0 = '字典%1 添加鍵%2 值%3';

Blockly.Msg.DICT_LENGTH_HELPURL= 'https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';
Blockly.Msg.DICT_LENGTH_TOOLTIP= '';
Blockly.Msg.DICT_LENGTH_MESSAGE0= '字典%1 長度';

Blockly.Msg.DICT_KEY_EXIST_HELPURL= 'https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';
Blockly.Msg.DICT_KEY_EXIST_TOOLTIP= '';
Blockly.Msg.DICT_KEY_EXIST_MESSAGE0= '字典%1 包含鍵%2';

Blockly.Msg.DICT_KEY_OR_VAL_LIST_HELPURL= 'https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';
Blockly.Msg.DICT_KEY_OR_VAL_LIST_TOOLTIP= '';
Blockly.Msg.DICT_KEY_OR_VAL_LIST_MESSAGE0= '字典%1 %2的列表';
Blockly.Msg.DICT_KEYS= '鍵';
Blockly.Msg.DICT_VALUES= '值';


Blockly.Msg.mpython_lists_append_MESSAGE0 = '列表%1 末尾添加項%2';
Blockly.Msg.mpython_lists_append_TOOLTIP = '';
Blockly.Msg.mpython_lists_append_HELPURL = 'https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';

Blockly.Msg.mpython_lists_extend_MESSAGE0 = '列表%1 追加列表%2';
Blockly.Msg.mpython_lists_extend_TOOLTIP = '';
Blockly.Msg.mpython_lists_extend_HELPURL = 'https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';

// Blockly.Msg.mpython_lists_remove_MESSAGE0 = '列表%1 移除第%2 項';
// Blockly.Msg.mpython_lists_remove_TOOLTIP = '從第0項開始';
// Blockly.Msg.mpython_lists_remove_HELPURL = 'https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';

Blockly.Msg.mpython_lists_clear_MESSAGE0 = '列表%1 清空';
Blockly.Msg.mpython_lists_clear_TOOLTIP = '';
Blockly.Msg.mpython_lists_clear_HELPURL = 'https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';

Blockly.Msg.MPYTHON_REMOVE_REPETITION_MESSAGE0 = '列表%1 移除重複';
Blockly.Msg.MPYTHON_REMOVE_REPETITION_TOOLTIP = '';
Blockly.Msg.MPYTHON_REMOVE_REPETITION_HELPURL = 'https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';

Blockly.Msg.mpython_Timer_value_MESSAGE0 ='定時器 %1 的計數值';
Blockly.Msg.mpython_Timer_value_TOOLTIP = '獲取並返回計時器當前計數值';

Blockly.Msg.mpython_Timer_deinit_MESSAGE0 ='清除 定時器/事件 %1';
Blockly.Msg.mpython_Timer_deinit_TOOLTIP = '取消定時器的初始化。停止計時器，並禁用計時器外圍設備';

Blockly.Msg.mpython_Interrupt_AB_HELPURL = 'https://mpython.readthedocs.io/zh/latest/tutorials/basics/buttons.html#id3';
Blockly.Msg.mpython_Interrupt_AB_TOOLTIP = '';
Blockly.Msg.mpython_Interrupt_AB_MESSAGE0 = '當按鍵 %1 被 %2 時';

Blockly.Msg.mpython_Interrupt_pin_HELPURL = 'https://mpython.readthedocs.io/zh/latest/tutorials/basics/io/digital_io.html#id3';
Blockly.Msg.mpython_Interrupt_pin_TOOLTIP = '上升沿觸發：由低電平到高電平；下降沿觸發：由高電平到低電平';
Blockly.Msg.mpython_Interrupt_pin_MESSAGE0 = '當引腳 %1 電平 %2 時';
Blockly.Msg.mpython_Interrupt_pin_IRQ_FALLING = '↘ 從高到低';
Blockly.Msg.mpython_Interrupt_pin_IRQ_RISING = '↗ 從低到高';

Blockly.Msg.mpython_IRQ_FALLING = '按下';
Blockly.Msg.mpython_IRQ_RISING = '松開';
Blockly.Msg.mpython_PERIODIC = '重復執行';
Blockly.Msg.mpython_ONE_SHOT = '延時執行';

Blockly.Msg.MPYTHON_IS_SHAKED_MESSAGE0 = '掌控板 %1';
Blockly.Msg.MPYTHON_IS_SHAKED_HELPURL = '';
Blockly.Msg.MPYTHON_IS_SHAKED_TOOLTIP = '';

Blockly.Msg.MPYTHON_IS_SHAKED = '被搖晃';
Blockly.Msg.MPYTHON_IS_THROWN = '被拋起';

Blockly.Msg.MPYTHON_SHAKE_DETECTOR_MESSAGE0 = '當掌控板 %1 時';
Blockly.Msg.MPYTHON_SHAKE_DETECTOR_HELPURL = '';
Blockly.Msg.MPYTHON_SHAKE_DETECTOR_TOOLTIP = '';

Blockly.Msg.MPYTHON_IS_TILTED_MESSAGE0 = '掌控板 %1';
Blockly.Msg.MPYTHON_IS_TILTED_HELPURL = '';
Blockly.Msg.MPYTHON_IS_TILTED_TOOLTIP = '';

Blockly.Msg.MPYTHON_TILT_DETECTOR_MESSAGE0 = '當掌控板 %1 時';
Blockly.Msg.MPYTHON_TILT_DETECTOR_HELPURL = '';
Blockly.Msg.MPYTHON_TILT_DETECTOR_TOOLTIP = '';

Blockly.Msg.MPYTHON_DIRECTION_FORWARD = '向前傾斜';
Blockly.Msg.MPYTHON_DIRECTION_BACK = '向後傾斜';
Blockly.Msg.MPYTHON_DIRECTION_RIGHT = '向右傾斜';
Blockly.Msg.MPYTHON_DIRECTION_LEFT = '向左傾斜';
Blockly.Msg.MPYTHON_DIRECTION_NONE = '平放';

Blockly.Msg.MPYTHON_TOUCH_EVENT_MESSAGE0 = '當觸摸鍵 %1 被 %2 時';
Blockly.Msg.MPYTHON_TOUCH_EVENT_HELPURL = '';
Blockly.Msg.MPYTHON_TOUCH_EVENT_TOOLTIP = '';

Blockly.Msg.MPYTHON_TOUCH_EVENT_PRESSED = '觸摸';
Blockly.Msg.MPYTHON_TOUCH_EVENT_UNPRESSED = '釋放';

Blockly.Msg.MPYTHON_CUSTOM_EVENT_MESSAGE0 = '事件 %1 : 當 %2 時';
Blockly.Msg.MPYTHON_CUSTOM_EVENT_HELPURL = '';
Blockly.Msg.MPYTHON_CUSTOM_EVENT_TOOLTIP = '自定義事件與定時器共用 1/2/4/7/8/9/10，不可同時占用一個端口。\n最大同時創建4個事件/定時器，如果存在沖突，請嘗試換一個編號。';

Blockly.Msg.mpython_music_HELPURL = 'https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';
Blockly.Msg.mpython_music_range_pitch_TOOLTIP = '時長為單個頻率的時長';
Blockly.Msg.mpython_music_range_pitch_MESSAGE0 = '播放音調 從%1 到%2 步長%3 時長%4 毫秒  引脚 %5';

Blockly.Msg.mpython_neopixel_init_HELPURL = 'https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';
Blockly.Msg.mpython_neopixel_init_TOOLTIP = '';
Blockly.Msg.mpython_neopixel_init_MESSAGE0 = '燈帶初始化 名稱%1 引腳%2 數量%3';

Blockly.Msg.MPYTHON_NEOPIXEL_RAINBOW_HELPURL = 'https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';
Blockly.Msg.MPYTHON_NEOPIXEL_RAINBOW_TOOLTIP = '';
Blockly.Msg.MPYTHON_NEOPIXEL_RAINBOW_MESSAGE0 = '彩虹燈效 燈帶%1 數量 %2 亮度 %3 偏移 %4';

Blockly.Msg.MPYTHON_NEOPIXEL_BRIGHTNESS_HELPURL = 'https://mpython.readthedocs.io/zh/master/library/micropython/neopixel.html#NeoPixel.brightness';
Blockly.Msg.MPYTHON_NEOPIXEL_BRIGHTNESS_TOOLTIP = '亮度調節, 範圍 0 ~ 100';
Blockly.Msg.MPYTHON_NEOPIXEL_BRIGHTNESS_MESSAGE0 = '燈帶 %1 設置亮度為 %2';

Blockly.Msg.mpython_neopixel_single_TOOLTIP = '';
Blockly.Msg.mpython_neopixel_single_MESSAGE0 = '燈帶%1 %2號 紅%3 綠%4 藍%5';

Blockly.Msg.mpython_neopixel_single_gui_MESSAGE0 ='燈帶 %1 %2號 顏色為 %3';
Blockly.Msg.mpython_neopixel_single_gui_TOOLTIP = '';

Blockly.Msg.mpython_neopixel_show_TOOLTIP = '';
Blockly.Msg.mpython_neopixel_show_MESSAGE0 = '燈帶%1 設置生效';

Blockly.Msg.mpython_neopixel_off_TOOLTIP = '';
Blockly.Msg.mpython_neopixel_off_MESSAGE0 = '燈帶%1 關閉';

Blockly.Msg.mpython_neopixel_all_TOOLTIP = '';
Blockly.Msg.mpython_neopixel_all_MESSAGE0 = '燈帶%1 全亮 紅%2 綠%3 藍%4';

Blockly.Msg.mpython_neopixel_all_gui_TOOLTIP = '';
Blockly.Msg.mpython_neopixel_all_gui_MESSAGE0 = '燈帶%1 全亮 顏色%2';

Blockly.Msg.mpython_image_to_oled_MESSAGE0 ='打開圖片 %1 寬 %2 高 %3';
Blockly.Msg.mpython_image_to_oled_TOOLTIP = '';

Blockly.Msg.mpython_time_localtime_MESSAGE0 ='本地時間 %1';
Blockly.Msg.mpython_time_localtime_TOOLTIP = '星期數：返回0～6，周一為0，周日為6\n天數：獲取當前日期是一年中的第幾天\n建議先連接wifi並獲取網絡時間';

Blockly.Msg.mpython_WiFi_config_MESSAGE0 ='Wi-Fi 配置信息 %1';
Blockly.Msg.mpython_WiFi_config_TOOLTIP = 'netmask-子網掩碼；gateway-網關';

Blockly.Msg.mpython_time_ticks_HELPURL ='https://mpythonx.readthedocs.io/zh_CN/latest/mPythonX.html';
Blockly.Msg.mpython_time_ticks_MESSAGE0 ='運行時間 %1';
Blockly.Msg.mpython_time_ticks_TOOLTIP = '';

Blockly.Msg.MPYTHON_TIMER_DEF_MESSAGE0 = '定義定時器 %1';
Blockly.Msg.MPYTHON_TIMER_INIT_MESSAGE0 = '啟動定時器 %1 %2 周期 %3 毫秒';

// Blockly.Msg.mpython_Timer_MESSAGE0 ='定時器 %1 周期 %2 毫秒 模式 %3 回調函數 %4';
Blockly.Msg.mpython_Timer_MESSAGE0 ='設置定時器 %1 %2 周期 %3 毫秒';
Blockly.Msg.mpython_Timer_TOOLTIP = '創建定時器n，n=1-14。\n最大同時創建4個定時器，如果存在沖突，請嘗試換一個編號。\n3用於內部程序，\n5/6用於伺服系統和ADC，\n11用於搖晃檢測，\n12用於觸摸鍵檢測，\n13用於Radio和DHT11/DHT22定時取值（共用），\n14用於OneNET和傾斜檢測（共用），\n其余端口與自定義事件共用。';
// Blockly.Msg.mpython_Timer_HELPURL = 'https://mpython.readthedocs.io/zh/latest/tutorials/advance/timer.html?highlight=%E5%AE%9A%E6%97%B6%E5%99%A8#id1';
Blockly.Msg.mpython_Timer_HELPURL = 'https://mpythonx.readthedocs.io/zh_CN/latest/blocks/index.html';

Blockly.Msg.mpython_bme280_hum_tem_pre_MESSAGE0 ='%1';
Blockly.Msg.mpython_bme280_hum_tem_pre_TOOLTIP = '氣壓單位Pa, 溫度單位攝氏度, 環境濕度單位%';

Blockly.Msg.mpython_sway_xyz_MESSAGE0 ='%1 搖晃掌控板';
Blockly.Msg.mpython_sway_xyz_TOOLTIP = "掌控板正面朝上，觸摸鍵 'python' 靠近使用者，開始左右或前後搖晃掌控板";

Blockly.Msg.mpython_init_bluetooth_MESSAGE0 ='初始化 藍牙名稱%1';
Blockly.Msg.mpython_init_bluetooth_TOOLTIP = '初始化 藍牙名稱';

Blockly.Msg.mpython_OnOff_bluetooth_MESSAGE0 ='藍牙設備%1廣播';
Blockly.Msg.mpython_OnOff_bluetooth_TOOLTIP = '藍牙設備 開啟或關閉廣播';

Blockly.Msg.mpython_HID_consumer_bluetooth_MESSAGE0 ='消費類設備%1 狀態%2';
Blockly.Msg.mpython_HID_consumer_bluetooth_TOOLTIP = '類比HID消費類設備的控制器，如藍牙遙控器';

Blockly.Msg.mpython_HID_release_keyboard_bluetooth_MESSAGE0 ='鍵盤  釋放按鍵';
Blockly.Msg.mpython_HID_release_keyboard_bluetooth_TOOLTIP = 'HID鍵盤設備';

Blockly.Msg.mpython_HID_mouse_bluetooth_MESSAGE0 ='鼠標%1';
Blockly.Msg.mpython_HID_mouse_bluetooth_TOOLTIP = '鼠標設備';

Blockly.Msg.mpython_HID_release_mouse_bluetooth_MESSAGE0 ='鼠標  釋放按鍵';
Blockly.Msg.mpython_HID_release_mouse_bluetooth_TOOLTIP = '鼠標設備';

Blockly.Msg.mpython_HID_keyboard_bluetooth_MESSAGE0 ='鍵盤 按鍵%1';
Blockly.Msg.mpython_HID_keyboard_bluetooth_TOOLTIP = '鍵盤設備';

Blockly.Msg.mpython_HID_keyboard_group_bluetooth_MESSAGE0 ='HID設備按鍵 %1 組合按鍵%2';
Blockly.Msg.mpython_HID_keyboard_group_bluetooth_TOOLTIP = '如果想使用多個按鍵組合指令，可以用“|”或運算';

Blockly.Msg.mpython_HID_mouse_pointer_bluetooth_MESSAGE0 = '滑鼠 指標移動 x%2 y%1';
Blockly.Msg.mpython_HID_mouse_pointer_bluetooth_TOOLTIP = '鼠标坐标x,y轴的相对位移,范围-1023 ~ 1023';

Blockly.Msg.mpython_HID_keyboard_group_bluetooth_MESSAGE0 ='設備 按鍵 %1 組合按鍵%2';
Blockly.Msg.mpython_HID_keyboard_group_bluetooth_TOOLTIP = '鍵盤設備';

Blockly.Msg.mpython_HID_keyboard_part_bluetooth_MESSAGE0 = '鍵盤 组合設備%1';
Blockly.Msg.mpython_HID_keyboard_part_bluetooth_TOOLTIP = '如果想使用多個按鍵組合指令，可以用“|”或運算';
Blockly.Msg.mpython_HID_keyboard_part_bluetooth_HELPURL = '';

Blockly.Msg.mpython_init_wifi_MESSAGE0 ='連接 Wi-Fi 名稱 %1 密碼 %2';
Blockly.Msg.mpython_init_wifi_TOOLTIP = '讓掌控板接入Wi-Fi環境';

Blockly.Msg.MPYTHON_WIFI_IFCONFIG_MESSAGE0 = 'Wi-Fi 設置固定IP %1 IP 地址 %2 子網掩碼 %3 默認網關 %4 DNS %5';
Blockly.Msg.MPYTHON_WIFI_IFCONFIG_TOOLTIP = '';
Blockly.Msg.MPYTHON_WIFI_IFCONFIG_HELPURL = '';

Blockly.Msg.mpython_dis_WiFi_MESSAGE0 ='斷開 Wi-Fi 連接';
Blockly.Msg.mpython_dis_WiFi_TOOLTIP = '';

Blockly.Msg.MPYTHON_ENABLE_APWIFI_HELPURL = 'https://mpython.readthedocs.io/zh/master/tutorials/basics/network/network_basics.html#ap';
Blockly.Msg.MPYTHON_ENABLE_APWIFI_TOOLTIP = '密碼可以為空，或者8位以上的字母或數字。\nAP模式僅用於掌控板之間的相互通信，不可以作為熱點，令其它設備上網。';
Blockly.Msg.MPYTHON_ENABLE_APWIFI_MESSAGE0 = '開啟 AP模式 名稱 %1 密碼 %2 信道 %3';

Blockly.Msg.mpython_disable_APWiFi_MESSAGE0 = '關閉 AP模式';
Blockly.Msg.mpython_disable_APWiFi_TOOLTIP = '';

Blockly.Msg.mpython_ntptime_settime_MESSAGE0 = '同步網絡時間 時區 %1 授時服務器 %2';
Blockly.Msg.mpython_ntptime_settime_TOOLTIP = 'NTP時間同步是一種時間同步網絡技術';

Blockly.Msg.mpython_wifi_get_date_MESSAGE0 = '獲取當前日期';
Blockly.Msg.mpython_wifi_get_date_TOOLTIP = '獲取當前日期字符串 示例：2020年12月12日';

Blockly.Msg.mpython_wifi_get_time_MESSAGE0 = '獲取當前時間';
Blockly.Msg.mpython_wifi_get_time_TOOLTIP = '獲取當前時間字符串';

Blockly.Msg.mpython_ntptime_timezone_E1 = "東1區";
Blockly.Msg.mpython_ntptime_timezone_E2 = "東2區";
Blockly.Msg.mpython_ntptime_timezone_E3 = "東3區";
Blockly.Msg.mpython_ntptime_timezone_E4 = "東4區";
Blockly.Msg.mpython_ntptime_timezone_E5 = "東5區";
Blockly.Msg.mpython_ntptime_timezone_E6 = "東6區";
Blockly.Msg.mpython_ntptime_timezone_E7 = "東7區";
Blockly.Msg.mpython_ntptime_timezone_E8 = "東8區";
Blockly.Msg.mpython_ntptime_timezone_E9 = "東9區";
Blockly.Msg.mpython_ntptime_timezone_E10 = "東10區";
Blockly.Msg.mpython_ntptime_timezone_E11 = "東11區";
Blockly.Msg.mpython_ntptime_timezone_E12 = "東12區";
Blockly.Msg.mpython_ntptime_timezone_0 = "中時區";
Blockly.Msg.mpython_ntptime_timezone_W1 = "西1區";
Blockly.Msg.mpython_ntptime_timezone_W2 = "西2區";
Blockly.Msg.mpython_ntptime_timezone_W3 = "西3區";
Blockly.Msg.mpython_ntptime_timezone_W4 = "西4區";
Blockly.Msg.mpython_ntptime_timezone_W5 = "西5區";
Blockly.Msg.mpython_ntptime_timezone_W6 = "西6區";
Blockly.Msg.mpython_ntptime_timezone_W7 = "西7區";
Blockly.Msg.mpython_ntptime_timezone_W8 = "西8區";
Blockly.Msg.mpython_ntptime_timezone_W9 = "西9區";
Blockly.Msg.mpython_ntptime_timezone_W10 = "西10區";
Blockly.Msg.mpython_ntptime_timezone_W11 = "西11區";
Blockly.Msg.mpython_ntptime_timezone_W12 = "西12區";

Blockly.Msg.FILE_TO_LIST_HELPURL = '';
Blockly.Msg.FILE_TO_LIST_TOOLTIP = '讀出指定路徑的文本文件內容（僅限utf-8格式），並轉為列表形式，以分隔符分隔。';
Blockly.Msg.FILE_TO_LIST_MESSAGE0 = '讀取文本文件 %1 為列表 ，以 %2 分隔';

Blockly.Msg.FILE_TO_BIN_HELPURL = '';
Blockly.Msg.FILE_TO_BIN_TOOLTIP = '以二進制格式讀出指定路徑的文件內容。';
Blockly.Msg.FILE_TO_BIN_MESSAGE0 = '讀取文件 %1 的二進制內容';

Blockly.Msg.MPYTHON_INIT_FILE_HELPURL = '';
Blockly.Msg.MPYTHON_INIT_FILE_TOOLTIP = '初始化一個文本文件，如果文件不存在則創建文件，如果文件存在則清空內容。';
Blockly.Msg.MPYTHON_INIT_FILE_MESSAGE0 = '初始化文本文件 %1';

Blockly.Msg.MPYTHON_WRITE_FILE_HELPURL = '';
Blockly.Msg.MPYTHON_WRITE_FILE_TOOLTIP = '向指定路徑的文本文件寫入內容，如果文件不存在則創建文件。';
Blockly.Msg.MPYTHON_WRITE_FILE_MESSAGE0 = '向文本文件 %1 寫入內容 %2 ，以 %3 分隔';

Blockly.Msg.MPYTHON_SDCARD_INIT_HELPURL = 'https://mpython.readthedocs.io/zh/master/library/mPython/sdcard.html#sdcard.SDCard';
Blockly.Msg.MPYTHON_SDCARD_INIT_TOOLTIP = 'sck: P13\nmosi: P15\nmiso: P14\nsdcard: P16\n須確保 SPI 總線的引腳與 micro SD 卡物理連接正確，並預先使用 FAT 或 FAT32 文件系統格式化 micro SD 卡。';
Blockly.Msg.MPYTHON_SDCARD_INIT_MESSAGE0 = '初始化 SD 卡';

Blockly.Msg.MPYTHON_SDCARD_MOUNT_HELPURL = 'https://mpython.readthedocs.io/zh/master/library/mPython/sdcard.html#sdcard.SDCard';
Blockly.Msg.MPYTHON_SDCARD_MOUNT_TOOLTIP = '掛載 SDCard 到指定路徑。';
Blockly.Msg.MPYTHON_SDCARD_MOUNT_MESSAGE0 = '掛載 SD 卡到路徑 %1';

Blockly.Msg.MPYTHON_ENTER = '回車';
Blockly.Msg.MPYTHON_COMMA = '逗號';
Blockly.Msg.MPYTHON_SEMICOLON = '分號';
Blockly.Msg.MPYTHON_SPACE = '空格';

Blockly.Msg.mpython_wifi_clock_MESSAGE0 = 'Wi-Fi 模擬時鐘 x %1 y %2 半徑 %3';
Blockly.Msg.mpython_wifi_clock_TOOLTIP = '需連接 Wi-Fi 使用';

Blockly.Msg.mpython_def_clock_MESSAGE0 = '初始化時鐘%1 x %2 y %3 半徑 %4';
Blockly.Msg.mpython_def_clock_TOOLTIP = '';

Blockly.Msg.mpython_settime_clock_MESSAGE0 = '時鐘%1 讀取時間';
Blockly.Msg.mpython_settime_clock_TOOLTIP = '';

Blockly.Msg.mpython_draw_clear_clock_MESSAGE0 = '%1 時鐘 %2';
Blockly.Msg.mpython_draw_clear_clock_TOOLTIP = '';

Blockly.Msg.mpython_tinywebio_start_MESSAGE0 = '啟動 TinyWebIO 服務 %1';
Blockly.Msg.mpython_tinywebio_start_TOOLTIP = '啟動該服務需連接Wi-Fi，TinyWebIO服務為App Inventor應用提供遠程控制接口的掌控板工具包';

Blockly.Msg.mpython_tinywebio_client_setup_HELPURL = '';
Blockly.Msg.mpython_tinywebio_client_setup_TOOLTIP = '向服務器發布的數據項(逗號分隔)\nbuttona/b 按鍵狀態\ntouchpadp/y/t/h/o/n 觸摸按鍵值\nlight 光線值\nsound 聲音值\naccelerometer 三軸加速度值\nid 掌控板標識\ntime 時間戳\npind<n> 數字IO引腳\npina<n> 模擬IO引腳\n----------\n從服務器讀取的數據項(逗號分隔)\nrgb0/1/2 RGB燈珠\noled OLED顯示屏\nmusic 音樂\nservo<n> 舵機\npind<n> 數字IO引腳\npina<n> 模擬IO引腳';
Blockly.Msg.mpython_tinywebio_client_setup_MESSAGE0 = '設置 TinyWebIO 客戶端參數 %1 TinyWebDB服務器地址 %2 向服務器發布的數據項 %3 從服務器讀取的數據項 %4 存取服務器的時間間隔(ms) %5';

Blockly.Msg.mpython_tinywebio_client_action_HELPURL = '';
Blockly.Msg.mpython_tinywebio_client_action_TOOLTIP = '';
Blockly.Msg.mpython_tinywebio_client_action_MESSAGE0 = '%1 TinyWebIO 客戶端';

Blockly.Msg.mpython_tinywebio_client_action_start = '啟動';
Blockly.Msg.mpython_tinywebio_client_action_stop = '停止';

Blockly.Msg.MPYTHON_CUSTOM_CODE_HELPURL = '';
Blockly.Msg.MPYTHON_CUSTOM_CODE_TOOLTIP = '';
Blockly.Msg.MPYTHON_CUSTOM_CODE_MESSAGE0 = '%1 自定義代碼 %2 %3';

Blockly.Msg.MPYTHON_CUSTOM_VALUE_MESSAGE0 = '自定義返回值 %1';

Blockly.Msg.MPYTHON_CUSTOM_TYPE_IMPORT = '置頂';
Blockly.Msg.MPYTHON_CUSTOM_TYPE_NORMAL = '普通';

Blockly.Msg.mpython_servo_angle0_MESSAGE0 ='設置舵機 %1 角度為 %2';
Blockly.Msg.mpython_servo_angle_MESSAGE0 ='設置舵機 %1 角度為 %2 脈寬從 %3 到 %4 最大角度 %5';
Blockly.Msg.mpython_servo_angle_TOOLTIP = '電源線Vcc（紅色）連接拓展板電源口V，地線GND(棕色)連接拓展板地線口G，控制信號線(橙色)連接所選的拓展板引腳';

Blockly.Msg.mpython_dh11_hum_tem_HELPURL = 'https://mpython.readthedocs.io/zh/latest/classic/dht11.html?highlight=DHT';
Blockly.Msg.mpython_dh11_hum_tem_MESSAGE0 ='DHT11 %1 %2';
Blockly.Msg.mpython_dh11_hum_tem_TOOLTIP = 'DHT11上的 + 連接拓展板的電源口 V ，- 連接拓展板的地線口 G ，out 連接拓展板的引腳 0(即選引腳)';

Blockly.Msg.MPYTHON_DH22_HUM_TEM_MESSAGE0 ='DHT22 %1 %2';
Blockly.Msg.MPYTHON_DH22_HUM_TEM_TOOLTIP = '';
Blockly.Msg.MPYTHON_DH22_HUM_TEM_HELPURL = 'https://mpython.readthedocs.io/zh/latest/classic/dht11.html?highlight=DHT';

Blockly.Msg.mpython_music_note_MESSAGE0 ='音符 %1 %2 :  %3';
Blockly.Msg.mpython_music_note_TOOLTIP = '音符，如C4:4';

// Blockly.Msg.mpython_return_list_MESSAGE0 ='列表 %1 = [ %2 ]';
Blockly.Msg.mpython_return_list_MESSAGE0 ='定義列表 %1 = %2';
Blockly.Msg.mpython_return_list_TOOLTIP = '';

Blockly.Msg.mpython_display_Show_MESSAGE0 ='OLED 顯示生效';
Blockly.Msg.mpython_display_Show_TOOLTIP = '';

Blockly.Msg.mpython_display_DispChar_MESSAGE0 ='顯示文本 x %1 y %2 內容 %3 模式 %4 %5';
Blockly.Msg.mpython_display_DispChar_TOOLTIP = 'OLED分辨率128x64';
Blockly.Msg.mpython_display_DispChar_HELPURL = 'https://mpython.readthedocs.io/zh/master/library/mPython/mpython.html?highlight=oled#oled.DispChar';

Blockly.Msg.mpython_display_DispChar_5lines_MESSAGE0 ='OLED 第%1 行顯示 %2 模式 %3 %4';
Blockly.Msg.mpython_display_DispChar_5lines_TOOLTIP = 'OLED分辨率128x64';
Blockly.Msg.mpython_line1  = '1';
Blockly.Msg.mpython_line2 = '2';
Blockly.Msg.mpython_line3 = '3';
Blockly.Msg.mpython_line4 = '4';
Blockly.Msg.mpython_line5 = '5';
Blockly.Msg.MPYTHON_CLEAR_DISPCHAR_5LINES_MESSAGE0 ='OLED 清除第 %1 行';
Blockly.Msg.MPYTHON_CLEAR_DISPCHAR_5LINES_TOOLTIP = 'OLED分辨率128x64';
Blockly.Msg.MPYTHON_CLEAR_DISPCHAR_5LINES_HELPURL = '';

Blockly.Msg.mpython_display_fill_0 ='清空';
Blockly.Msg.mpython_display_fill_1 = '全亮';
Blockly.Msg.mpython_display_invert_0 ='黑底';
Blockly.Msg.mpython_display_invert_1 = '白底';
Blockly.Msg.mpython_display_show = '生效';
Blockly.Msg.mpython_display_fill_MESSAGE0 ='OLED 顯示 %1';
Blockly.Msg.mpython_display_fill_TOOLTIP = '';

Blockly.Msg.mpython_display_pixel_0 ='暗';
Blockly.Msg.mpython_display_pixel_1 = '亮';
Blockly.Msg.mpython_display_pixel_MESSAGE0 ='描點 x %1 y %2 為 %3';
Blockly.Msg.mpython_display_pixel_TOOLTIP = '';

Blockly.Msg.mpython_display_hline_0 ='擦除';
Blockly.Msg.mpython_display_hline_1 = '繪制';
Blockly.Msg.mpython_display_hline_MESSAGE0 ='%1 水平線%2 x%3  y%4 長度%5';
Blockly.Msg.mpython_display_hline_TOOLTIP = '';

Blockly.Msg.mpython_ProgressBar_MESSAGE0 ='進度條%1 x%2  y%3 寬%4 高%5 進度%6';
Blockly.Msg.mpython_ProgressBar_TOOLTIP = '';

Blockly.Msg.mpython_stripBar_MESSAGE0 ='柱狀條%1 x%2  y%3 寬%4 高%5 進度%6';
Blockly.Msg.mpython_stripBar_TOOLTIP = '';

Blockly.Msg.MPYTHON_QR_CODE_HELPURL = 'https://mpython.readthedocs.io/zh/master/library/mPython/gui.html#gui.UI.qr_code';
Blockly.Msg.MPYTHON_QR_CODE_TOOLTIP = '';
Blockly.Msg.MPYTHON_QR_CODE_MESSAGE0 = '在坐標 x %1 y %2 繪制二維碼 %3 尺寸 %4';

Blockly.Msg.MPYTHON_DISPLAY_MODE_0 = '擦除';
Blockly.Msg.MPYTHON_DISPLAY_MODE_1 = '繪制';

Blockly.Msg.MPYTHON_DISPLAY_HOLLOW = '空心';
Blockly.Msg.MPYTHON_DISPLAY_SOLID = '實心';

Blockly.Msg.MPYTHON_DISPLAY_HVLINE_MESSAGE0 = '%1 %2 線 %3 x %4 y %5 長度 %6';
Blockly.Msg.MPYTHON_DISPLAY_HVLINE_TOOLTIP = '';

Blockly.Msg.MPYTHON_DISPLAY_SHAPE_RECT_MESSAGE0 = '%1 %2 矩形 %3 x %4 y %5 寬 %6 高 %7';
Blockly.Msg.MPYTHON_DISPLAY_SHAPE_RECT_TOOLTIP = '';

Blockly.Msg.MPYTHON_DISPLAY_SHAPE_CIRCLE_MESSAGE0 = '%1 %2 圓 %3 x %4 y %5 半徑 %6';
Blockly.Msg.MPYTHON_DISPLAY_SHAPE_CIRCLE_TOOLTIP = '';

Blockly.Msg.MPYTHON_DISPLAY_SHAPE_TRIANGLE_MESSAGE0 = '%1 %2 三角 %3 x1 %4 y1 %5 x2 %6 y2 %7 x3 %8 y3 %9';
Blockly.Msg.MPYTHON_DISPLAY_SHAPE_TRIANGLE_TOOLTIP = '';

Blockly.Msg.MPYTHON_RGB_0 = '0 #';
Blockly.Msg.MPYTHON_RGB_1 = '1 #';
Blockly.Msg.MPYTHON_RGB_2 = '2 #';
Blockly.Msg.MPYTHON_RGB_ALL = '所有';

Blockly.Msg.MPYTHON_SET_RGB_LIST_COLOR_MESSAGE0 = '設置 %1 RGB 燈顏色為 %2';
Blockly.Msg.MPYTHON_SET_RGB_LIST_COLOR_TOOLTIP = '原生亮度的 1/30 能較好顯示色差';

Blockly.Msg.MPYTHON_SET_RGB_LIST_NUMBER_MESSAGE0 = '設置 %1 RGB 燈顏色為 R %2 G %3 B %4';
Blockly.Msg.MPYTHON_SET_RGB_LIST_NUMBER_TOOLTIP = '原生亮度的 1/30 能較好顯示色差';

Blockly.Msg.MPYTHON_OFF_RGB_LIST_MESSAGE0 = '關閉 %1 RGB 燈';
Blockly.Msg.MPYTHON_OFF_RGB_LIST_TOOLTIP = '';

Blockly.Msg.MPYTHON_MUSIC_PLAY_MESSAGE0 = '播放音樂 %1 引腳 %2';
Blockly.Msg.MPYTHON_MUSIC_PLAY_TOOLTIP = '播放內置的音樂';

Blockly.Msg.MPYTHON_MUSIC_PLAY_UNTIL_END_MESSAGE0 = '播放音樂 %1 直到完成 , 引腳 %2';
Blockly.Msg.MPYTHON_MUSIC_PLAY_UNTIL_END_TOOLTIP = '播放內置的音樂';

Blockly.Msg.MPYTHON_MUSIC_GE_CHANG_ZU_GUO = '歌唱祖國';
Blockly.Msg.MPYTHON_MUSIC_DONG_FANG_HONG = '東方紅';
Blockly.Msg.MPYTHON_MUSIC_CAI_YUN_ZHUI_YUE = '彩雲追月';
Blockly.Msg.MPYTHON_MUSIC_ZOU_JIN_XIN_SHI_DAI = '走進新時代';
Blockly.Msg.MPYTHON_MUSIC_MO_LI_HUA = '茉莉花';
Blockly.Msg.MPYTHON_MUSIC_YI_MENG_SHAN_XIAO_DIAO = '沂蒙山小調';

Blockly.Msg.mpython_display_vline_MESSAGE0 ='%1 垂直線%2 x%3  y%4 長度%5';
Blockly.Msg.mpython_display_vline_TOOLTIP = '';

Blockly.Msg.mpython_display_line_MESSAGE0 ='%1 線%2 x1 %3  y1 %4 到  x2 %5 y2 %6';
Blockly.Msg.mpython_display_line_TOOLTIP = '';

Blockly.Msg.mpython_display_rect_MESSAGE0 ='%1 邊框%2 x %3  y %4 寬 %5 高 %6';
Blockly.Msg.mpython_display_rect_TOOLTIP = '';

Blockly.Msg.mpython_display_RoundRect_MESSAGE0 ='%1 弧角邊框%2 x %3  y %4 寬 %5 高 %6 半徑%7';
Blockly.Msg.mpython_display_RoundRect_TOOLTIP = '';

Blockly.Msg.mpython_display_fill_rect_MESSAGE0 ='%1 矩形%2 x %3  y %4 寬 %5 高 %6 ';
Blockly.Msg.mpython_display_fill_rect_TOOLTIP = '';

Blockly.Msg.mpython_display_fill_circle_MESSAGE0 ='%1 實心圓%2 x %3  y %4 半徑 %5';
Blockly.Msg.mpython_display_fill_circle_TOOLTIP = '';

Blockly.Msg.mpython_display_circle_MESSAGE0 ='%1 空心圓%2 x %3  y %4 半徑 %5';
Blockly.Msg.mpython_display_circle_TOOLTIP = '';

Blockly.Msg.mpython_display_triangle_MESSAGE0 ='%1 空心三角%2 x%3  y%4 x2%5  y2%6 x3%7  y3%8';
Blockly.Msg.mpython_display_triangle_TOOLTIP = '';

Blockly.Msg.mpython_display_fill_triangle_MESSAGE0 ='%1 實心三角%2 x%3  y%4 x2%5  y2%6 x3%7  y3%8';
Blockly.Msg.mpython_display_fill_triangle_TOOLTIP = '';

Blockly.Msg.mpython_display_Bitmap_MESSAGE0 ='%1 圖像 x%2  y%3 寬%4 高%5 16進制圖像數據 %6';
Blockly.Msg.mpython_display_Bitmap_TOOLTIP = '將16進制圖像數據顯示在OLED屏的指定位置';

Blockly.Msg.MPYTHON_GET_PBM_DATA_MESSAGE0 = '獲取內置圖像 %1 模式%2';
Blockly.Msg.MPYTHON_GET_PBM_DATA_TOOLTIP = '支持*.pbm 或 *.bmp格式的單色圖像文件，獲取指定路徑的圖像文件數據，返回一個元組對象。';
Blockly.Msg.MPYTHON_GET_PBM_DATA_HELPURL = 'https://mpython.readthedocs.io/zh/master/library/mPython/gui.html#image';

Blockly.Msg.MPYTHON_GET_PBM_DATA_CUSTOM_MESSAGE0 = '獲取自定義圖像 %1 模式%2';

Blockly.Msg.MPYTHON_DISPLAY_PBM_DATA_MESSAGE0 = '在坐標 x %1  y %2 顯示圖像 %3';
Blockly.Msg.MPYTHON_DISPLAY_PBM_DATA_TOOLTIP = '支持*.pbm 或 *.bmp格式的單色圖像文件';
Blockly.Msg.MPYTHON_DISPLAY_PBM_DATA_HELPURL = 'https://mpython.readthedocs.io/zh/master/library/mPython/gui.html#image';

Blockly.Msg.MPYTHON_BITMAP_FROM_FILE_MESSAGE0 = '在坐標 x %1  y %2 顯示圖像 %5 寬 %3 高 %4';
Blockly.Msg.MPYTHON_BITMAP_FROM_FILE_TOOLTIP = '';
Blockly.Msg.MPYTHON_BITMAP_FROM_FILE_HELPURL = '';

Blockly.Msg.mpython_horizontal = '水平';
Blockly.Msg.mpython_vertical = '垂直';
Blockly.Msg.mpython_display_FrameBuffer_MESSAGE0 ='構建幀 列表 %1  長 %2 寬 %3 掃描模式 %4';
Blockly.Msg.mpython_display_FrameBuffer_TOOLTIP = '用圖像取模後數據的列表 ，創建128x64的幀緩存區，以儲存圖片幀';
/*
Blockly.Msg.MPYTHON_DISPLAY_DIGIFACE_FONT_MESSAGE0 = '在坐標 x %1  y %2 顯示數碼管字體 %3 大小 %4';
Blockly.Msg.MPYTHON_DISPLAY_DIGIFACE_FONT_TOOLTIP = '';
Blockly.Msg.MPYTHON_DISPLAY_DIGIFACE_FONT_HELPURL = '';
*/
Blockly.Msg.MPYTHON_FONT_DIGIFACE_11 = '仿數碼管 11像素';
Blockly.Msg.MPYTHON_FONT_DIGIFACE_16 = '仿數碼管 16像素';
Blockly.Msg.MPYTHON_FONT_DIGIFACE_21 = '仿數碼管 21像素';
Blockly.Msg.MPYTHON_FONT_DIGIFACE_30 = '仿數碼管 30像素';
Blockly.Msg.MPYTHON_FONT_DIGIFACE_44 = '仿數碼管 44像素';
Blockly.Msg.MPYTHON_FONT_DIGIFACE_IT_30 = '仿數碼管 斜體 30像素';
Blockly.Msg.MPYTHON_FONT_DIGIFACE_IT_42 = '仿數碼管 斜體 42像素';
Blockly.Msg.MPYTHON_FONT_DVSM_12 = 'DejaVu Sans Mono 12像素';
Blockly.Msg.MPYTHON_FONT_DVSM_16 = 'DejaVu Sans Mono 16像素';
Blockly.Msg.MPYTHON_FONT_DVSM_21 = 'DejaVu Sans Mono 21像素';
Blockly.Msg.MPYTHON_FONT_DVSMB_12 = 'DejaVu Sans Mono 黑體 12像素';
Blockly.Msg.MPYTHON_FONT_DVSMB_16 = 'DejaVu Sans Mono 黑體 16像素';
Blockly.Msg.MPYTHON_FONT_DVSMB_21 = 'DejaVu Sans Mono 黑體 21像素';

Blockly.Msg.MPYTHON_FONT_WRAP = '自動換行';
Blockly.Msg.MPYTHON_FONT_NO_WRAP = '不換行';

Blockly.Msg.MPYTHON_FACE_1 = '心形';
Blockly.Msg.MPYTHON_FACE_2 = '心形（小）';
Blockly.Msg.MPYTHON_FACE_3 = '高興';
Blockly.Msg.MPYTHON_FACE_4 = '笑臉';
Blockly.Msg.MPYTHON_FACE_5 = '傷心';
Blockly.Msg.MPYTHON_FACE_6 = '困惑';
Blockly.Msg.MPYTHON_FACE_7 = '生氣';
Blockly.Msg.MPYTHON_FACE_8 = '睡著';
Blockly.Msg.MPYTHON_FACE_9 = '驚訝';
Blockly.Msg.MPYTHON_FACE_10 = '愚蠢';
Blockly.Msg.MPYTHON_FACE_11 = '極妙';
Blockly.Msg.MPYTHON_FACE_12 = '無聊';
Blockly.Msg.MPYTHON_FACE_ROCK = '石頭';
Blockly.Msg.MPYTHON_FACE_PAPER = '布';
Blockly.Msg.MPYTHON_FACE_SCISSORS = '剪刀';
Blockly.Msg.MPYTHON_FACE_ROCK_S = '石頭（小）';
Blockly.Msg.MPYTHON_FACE_PAPER_S = '布（小）';
Blockly.Msg.MPYTHON_FACE_SCISSORS_S = '剪刀（小）';

Blockly.Msg.MPYTHON_DISPLAY_FONT_MESSAGE0 = '在坐標 x %1 y %2 顯示 %3 以 %4 字體 %5';
Blockly.Msg.MPYTHON_DISPLAY_FONT_TOOLTIP = '';
Blockly.Msg.MPYTHON_DISPLAY_FONT_HELPURL = '';

Blockly.Msg.mpython_front = '正向';
Blockly.Msg.mpython_reverse = '反轉';
Blockly.Msg.mpython_display_blit_MESSAGE0 ='顯示幀 坐標x  %1  y %2';
Blockly.Msg.mpython_display_blit_TOOLTIP = '';

Blockly.Msg.mpython_front_reverse_MESSAGE0 = '像素點bit %1';
Blockly.Msg.mpython_front_reverse_TOOLTIP  = '用於顯示之前';

Blockly.Msg.mpython_images_append_MESSAGE0 ='動圖顯示 幀數%1  周期%2 長%3 寬%4';
Blockly.Msg.mpython_images_append_TOOLTIP = '上傳至掌控板的pbm圖片需命名為IMAGE.數字，後綴為pbm。如：IMAGE.1.pbm。幀數為7則數字為1至7';

Blockly.Msg.mpython_button_is_pressed_MESSAGE0 ='按鍵%1 被按下';
Blockly.Msg.mpython_button_is_pressed_TOOLTIP = '';

Blockly.Msg.mpython_button_both_pressed_MESSAGE0 ='AB按鍵都按下';
Blockly.Msg.mpython_button_both_pressed_TOOLTIP = '';

Blockly.Msg.mpython_touchPad_value_MESSAGE0 ='按鍵%1 被觸摸';
Blockly.Msg.mpython_touchPad_value_TOOLTIP = '';

Blockly.Msg.mpython_touchPad_value_num_MESSAGE0 ='按鍵%1 觸摸值';
Blockly.Msg.mpython_touchPad_value_num_TOOLTIP = '';

Blockly.Msg.mpython_read_digital_MESSAGE0 ='讀取引腳 %1 數字值';
Blockly.Msg.mpython_read_digital_TOOLTIP = '';

Blockly.Msg.mpython_read_DS18B20_MESSAGE0 ='DS18B20 防水溫度感測器 引脚 %1';
Blockly.Msg.mpython_read_DS18B20_TOOLTIP = '';
Blockly.Msg.mpython_read_DS18B20_HELPURL = 'http://docs.micropython.org/en/latest/esp32/quickref.html?highlight=onewire#onewire-driver';

Blockly.Msg.mpython_set_digital_MESSAGE0 ='設置引腳 %2 數字值為 %1';
Blockly.Msg.mpython_set_digital_TOOLTIP = '';

Blockly.Msg.mpython_read_analog_MESSAGE0 ='讀取引腳 %1 模擬值';
Blockly.Msg.mpython_read_analog_TOOLTIP = '';

Blockly.Msg.mpython_set_analog_MESSAGE0 ='設置引腳 %2 模擬值（PWM）為 %1';
Blockly.Msg.mpython_set_analog_TOOLTIP = '模擬輸出是通過IO引腳輸出脈寬調制信號，輸出指定的電壓值，簡稱PWM。';

Blockly.Msg.mpython_set_RGB_MESSAGE0 ='設置 %1 號 RGB 燈顏色為 R %2 G %3 B %4';
Blockly.Msg.mpython_set_RGB_TOOLTIP = '原生亮度的 1/30 能較好顯示色差';

Blockly.Msg.mpython_set_RGB_color_MESSAGE0 ='設置 %1 號 RGB 燈顏色為 %2';
Blockly.Msg.mpython_set_RGB_color_TOOLTIP = '原生亮度的 1/30 能較好顯示色差';

Blockly.Msg.mpython_set_RGB_all_MESSAGE0 ='設置所有 RGB 燈顏色為 R %1 G %2 B %3';
Blockly.Msg.mpython_set_RGB_all_TOOLTIP = '原生亮度的 1/30 能較好顯示色差';

Blockly.Msg.mpython_set_RGB_color_all_MESSAGE0 ='設置所有 RGB 燈顏色為 %1';
Blockly.Msg.mpython_set_RGB_color_all_TOOLTIP = '原生亮度的 1/30 能較好顯示色差';

Blockly.Msg.mpython_fresh_RGB_MESSAGE0 ='RGB 燈設置生效';
Blockly.Msg.mpython_fresh_RGB_TOOLTIP = '';

Blockly.Msg.mpython_off_RGB_MESSAGE0 ='關閉 RGB 燈';
Blockly.Msg.mpython_off_RGB_TOOLTIP = '';

Blockly.Msg.mpython_buzz_state_MESSAGE0 = '停止播放音樂';
Blockly.Msg.mpython_buzz_state_TOOLTIP = '';

Blockly.Msg.mpython_buzz_freq_MESSAGE0 ='播放連續音調 %1 引脚 %2';
Blockly.Msg.mpython_buzz_freq_TOOLTIP = '';

Blockly.Msg.mpython_buzz_tone_MESSAGE0 ='播放音調 %1';
Blockly.Msg.mpython_buzz_tone_TOOLTIP = '';

Blockly.Msg.MPYTHON_MUSIC_TONE_TEMPO_HELPURL  = '';
Blockly.Msg.MPYTHON_MUSIC_TONE_TEMPO_TOOLTIP = '默認是掌控板的P6引脚';
Blockly.Msg.MPYTHON_MUSIC_TONE_TEMPO_MESSAGE0 = '播放音符 %1 引脚 %2';

Blockly.Msg.MPYTHON_MUSIC_TONE_HELPURL  = '';
Blockly.Msg.MPYTHON_MUSIC_TONE_TOOLTIP = '';
Blockly.Msg.MPYTHON_MUSIC_TONE_MESSAGE0 = '音調 %1';

Blockly.Msg.MPYTHON_MUSIC_MUSICAL_NOTE_HELPURL  = '';
Blockly.Msg.MPYTHON_MUSIC_MUSICAL_NOTE_TOOLTIP = '';
Blockly.Msg.MPYTHON_MUSIC_MUSICAL_NOTE_MESSAGE0 = '音符 %1 節拍 %2';

Blockly.Msg.MPYTHON_MUSIC_TICK_HELPURL  = '';
Blockly.Msg.MPYTHON_MUSIC_TICK_TOOLTIP = '';
Blockly.Msg.MPYTHON_MUSIC_TICK_MESSAGE0 = '節拍 %1';

Blockly.Msg.MPYTHON_4_LINES_HELPURL = '';
Blockly.Msg.MPYTHON_4_LINES_TOOLTIP = '';
Blockly.Msg.MPYTHON_4_LINES_MESSAGE0 = '%1';

Blockly.Msg.NUMBER_1 = '1';
Blockly.Msg.NUMBER_1_2 = '1/2';
Blockly.Msg.NUMBER_1_4 = '1/4';
Blockly.Msg.NUMBER_2 = '2';
Blockly.Msg.NUMBER_4 = '4';

Blockly.Msg.mpython_read_sound_MESSAGE0 ='聲音值';
Blockly.Msg.mpython_read_sound_TOOLTIP = '';

Blockly.Msg.mpython_read_light_MESSAGE0 ='光線值';
Blockly.Msg.mpython_read_light_TOOLTIP = '';

Blockly.Msg.mpython_accelerometer_get_MESSAGE0 ='%1 軸加速度';
Blockly.Msg.mpython_accelerometer_get_TOOLTIP = '';
Blockly.Msg.mpython_accelerometer_get_z_MESSAGE0 ='z軸加速度';
Blockly.Msg.mpython_accelerometer_get_z_TOOLTIP = '';
Blockly.Msg.mpython_accelerometer_get_y_MESSAGE0 ='y軸加速度';
Blockly.Msg.mpython_accelerometer_get_y_TOOLTIP = '';
Blockly.Msg.mpython_accelerometer_get_x_MESSAGE0 ='x軸加速度';
Blockly.Msg.mpython_accelerometer_get_x_TOOLTIP = '';

Blockly.Msg.MPYTHON_ACCELEROMETER_RANGE_2G = '±2g';
Blockly.Msg.MPYTHON_ACCELEROMETER_RANGE_4G = '±4g';
Blockly.Msg.MPYTHON_ACCELEROMETER_RANGE_8G = '±8g';
Blockly.Msg.MPYTHON_ACCELEROMETER_RANGE_16G = '±16g';

Blockly.Msg.MPYTHON_ACCELEROMETER_RES_10_BIT = '10bits';
Blockly.Msg.MPYTHON_ACCELEROMETER_RES_12_BIT = '12bits';
Blockly.Msg.MPYTHON_ACCELEROMETER_RES_14_BIT = '14bits';

Blockly.Msg.MPYTHON_ACCELEROMETER_SET_RANGE_TOOLTIP = '設置加速度範圍，默認為 ±2g。';
Blockly.Msg.MPYTHON_ACCELEROMETER_SET_RANGE_MESSAGE0 = '設置加速度範圍為 %1';

Blockly.Msg.MPYTHON_ACCELEROMETER_SET_RESOLUTION_TOOLTIP = '設置加速度分辨率，默認為 10bits。';
Blockly.Msg.MPYTHON_ACCELEROMETER_SET_RESOLUTION_MESSAGE0 = '設置加速度分辨率為 %1';

Blockly.Msg.MPYTHON_ACCELEROMETER_SET_OFFSET_TOOLTIP = '校準加速度計的3個軸(x,y,z)的加速值偏差。\n一般情況下無需校準，只有遇到加速度偏差較大時才要校準。\n x , y , z 為調整偏差值，可修正範圍為 ±1g。\n註意：校準數據斷電後不會保存。';
Blockly.Msg.MPYTHON_ACCELEROMETER_SET_OFFSET_MESSAGE0 = '校準加速度值 %1 X軸偏差 %2 Y軸偏差 %3 Z軸偏差 %4';

Blockly.Msg.MPYTHON_MAGNETIC_GET_AXIS_TOOLTIP = '僅適用於掌控板2.0及以上版本';
Blockly.Msg.MPYTHON_MAGNETIC_GET_AXIS_MESSAGE0 = '%1 軸 磁力';

Blockly.Msg.MPYTHON_MAGNETIC_GET_HEADING_TOOLTIP = '僅適用於掌控板2.0及以上版本';
Blockly.Msg.MPYTHON_MAGNETIC_GET_HEADING_MESSAGE0 = '指南針方向';

Blockly.Msg.MPYTHON_MAGNETIC_CALIBRATE_TOOLTIP = '僅適用於掌控板2.0及以上版本';
Blockly.Msg.MPYTHON_MAGNETIC_CALIBRATE_MESSAGE0 = '校準指南針';

Blockly.Msg.MPYTHON_MAGNETIC_PEELING_TOOLTIP = '僅適用於掌控板2.0及以上版本';
Blockly.Msg.MPYTHON_MAGNETIC_PEELING_MESSAGE0 = '去除當前環境磁場';

Blockly.Msg.MPYTHON_MAGNETIC_GET_FIELD_STRENGTH_TOOLTIP = '僅適用於掌控板2.0及以上版本';
Blockly.Msg.MPYTHON_MAGNETIC_GET_FIELD_STRENGTH_MESSAGE0 = '磁場強度';

Blockly.Msg.MPYTHON_TILT_ANGLE_HELPURL = '';
Blockly.Msg.MPYTHON_TILT_ANGLE_TOOLTIP = '';
Blockly.Msg.MPYTHON_TILT_ANGLE_MESSAGE0 = '%1 軸傾斜角';

Blockly.Msg.mpython_random_choice_MESSAGE0 ='返回隨機項%1';
Blockly.Msg.mpython_random_choice_TOOLTIP = '以String格式，返回列表或字符串中的隨機項';

Blockly.Msg.mpython_i2c_init_MESSAGE0 ='初始化I2C 波特率%1';
Blockly.Msg.mpython_i2c_init_TOOLTIP = 'SCL引腳19，SDA引腳20，與內部的OLED和加速度傳感器共享I2C總線';

Blockly.Msg.MACHINE_TIME_PULSE_US_HELPURL =
    'https://mpython.readthedocs.io/zh/master/library/micropython/machine/machine.html?highlight=machine.time_pulse_us#machine.time_pulse_us';
Blockly.Msg.MACHINE_TIME_PULSE_US_MESSAGE0 = '%1 外部 %2 電平持續時間(微秒)';
Blockly.Msg.MACHINE_TIME_PULSE_US_TOOLTIP = "";

Blockly.Msg.BYTES = '字節';

/*
Blockly.Msg.mpython_dev_i2c_init_MESSAGE0 = '初始化I2C SCL %2 SDA %3 波特率 %1';
Blockly.Msg.mpython_dev_i2c_init_TOOLTIP = '';
Blockly.Msg.mpython_dev_i2c_init_HELPURL = 'https://mpython.readthedocs.io/zh/master/library/micropython/machine/machine.I2C.html#machine.I2C';

Blockly.Msg.mpython_i2c_read_write_MESSAGE0 ='I2C 地址 %1 寫入 %2';
Blockly.Msg.mpython_i2c_read_write_TOOLTIP = '地址：Number\n寫入：Number、String';

Blockly.Msg.mpython_i2c_readfrom_MESSAGE0 ='I2C 地址 %1 讀取bytes數量 %2';
Blockly.Msg.mpython_i2c_readfrom_TOOLTIP = '地址：Number\n返回：讀取數據的 bytes 對象的字符串';

Blockly.Msg.MPYTHON_I2C_SCAN_TOOLTIP = '返回一個數組對象';
Blockly.Msg.MPYTHON_I2C_SCAN_MESSAGE0 = 'I2C 掃描結果';
*/
//重新制作I2C模塊
Blockly.Msg.MPYTHON_I2C_INIT_HELPURL = 'https://mpython.readthedocs.io/zh/master/library/micropython/machine/machine.I2C.html#machine.I2C';
Blockly.Msg.MPYTHON_I2C_INIT_MESSAGE0 = '初始化i2c 速率%1';
Blockly.Msg.MPYTHON_I2C_INIT_TOOLTIP = '';

Blockly.Msg.MPYTHON_I2C_DEV_INIT_HELPURL = 'https://mpython.readthedocs.io/zh/master/library/micropython/machine/machine.I2C.html#machine.I2C';
Blockly.Msg.MPYTHON_I2C_DEV_INIT_MESSAGE0 = '初始化%1 SCL %2 SDA %3 速率 %4';
Blockly.Msg.MPYTHON_I2C_DEV_INIT_TOOLTIP = '';

Blockly.Msg.MPYTHON_I2C_SCAN_HELPURL = 'https://mpython.readthedocs.io/zh/master/library/micropython/machine/machine.I2C.html?highlight=I2C#machine.I2C.scan';
Blockly.Msg.MPYTHON_I2C_SCAN_MESSAGE0 = '%1 掃描地址';
Blockly.Msg.MPYTHON_I2C_SCAN_TOOLTIP = '返回壹個數組對象';

Blockly.Msg.MPYTHON_I2C_DEINIT_HELPURL = 'https://mpython.readthedocs.io/zh/master/library/micropython/machine/machine.I2C.html?highlight=I2C#machine.I2C.deinit';
Blockly.Msg.MPYTHON_I2C_DEINIT_MESSAGE0 = '關閉%1總線';
Blockly.Msg.MPYTHON_I2C_DEINIT_TOOLTIP = '';

Blockly.Msg.MPYTHON_I2C_WRITETO_HELPURL = 'https://mpython.readthedocs.io/zh/master/library/micropython/machine/machine.I2C.html?highlight=I2C#id4';
Blockly.Msg.MPYTHON_I2C_WRITETO_MESSAGE0 ='從%1 %5 地址%2 寫入%3 停止位%4';
Blockly.Msg.MPYTHON_I2C_WRITETO_TOOLTIP = '地址：Number\n寫入：Number、String';

Blockly.Msg.MPYTHON_I2C_READFROM_HELPURL = 'https://mpython.readthedocs.io/zh/master/library/micropython/machine/machine.I2C.html?highlight=I2C#id4';
Blockly.Msg.MPYTHON_I2C_READFROM_MESSAGE0 ='從%1 %5 地址%2 讀取 字節數%3 停止位%4';
Blockly.Msg.MPYTHON_I2C_READFROM_TOOLTIP = '地址：Number\n返回：讀取數據的 bytes 對象的字符串';

Blockly.Msg.MPYTHON_I2C_READFROM_INTO_HELPURL = 'https://mpython.readthedocs.io/zh/master/library/micropython/machine/machine.I2C.html?highlight=I2C#id4';
Blockly.Msg.MPYTHON_I2C_READFROM_INTO_MESSAGE0 = '從%1 %6 地址%2 讀入緩存區%3 字節數%4 停止位%5';
Blockly.Msg.MPYTHON_I2C_READFROM_INTO_TOOLTIP = '';

Blockly.Msg.MPYTHON_I2C_WRITETO_MEN_HELPURL = 'https://mpython.readthedocs.io/zh/master/library/micropython/machine/machine.I2C.html?highlight=I2C#id5';
Blockly.Msg.MPYTHON_I2C_WRITETO_MEN_MESSAGE0 ='從%1 %5 地址%2 寄存器%4 寫入%3';
Blockly.Msg.MPYTHON_I2C_WRITETO_MEN_TOOLTIP = '地址：Number\n寫入：Number、String';

Blockly.Msg.MPYTHON_I2C_READFROM_MEN_HELPURL = 'https://mpython.readthedocs.io/zh/master/library/micropython/machine/machine.I2C.html?highlight=I2C#id5';
Blockly.Msg.MPYTHON_I2C_READFROM_MEN_MESSAGE0 ='從%1 %5 地址%2 寄存器%4 讀取 字節數%3';
Blockly.Msg.MPYTHON_I2C_READFROM_MEN_TOOLTIP = '地址：Number\n返回：讀取數據的 bytes 對象的字符串';

Blockly.Msg.MPYTHON_I2C_READFROM_MEN_INTO_HELPURL = 'https://mpython.readthedocs.io/zh/master/library/micropython/machine/machine.I2C.html?highlight=I2C#id5';
Blockly.Msg.MPYTHON_I2C_READFROM_MEN_INTO_MESSAGE0 ='從%1 %6 地址%2 寄存器%5 讀入緩存區%3 字節數%4';
Blockly.Msg.MPYTHON_I2C_READFROM_MEN_INTO_TOOLTIP = '地址：Number\n返回：讀取數據的 bytes 對象的字符串';


Blockly.Msg.mpython_print_MESSAGE0 ='調試輸出 %1';
Blockly.Msg.mpython_print_TOOLTIP = '通過串口調試，輸出字符串';

Blockly.Msg.MPYTHON_PRINT_TO_CHART_TOOLTIP = "";
Blockly.Msg.MPYTHON_PRINT_TO_CHART_EMPTY_TITLE = "打印數據到圖表";
Blockly.Msg.MPYTHON_PRINT_TO_CHART_INPUT_WITH = "打印數據到圖表";
Blockly.Msg.MPYTHON_PRINT_TO_CHART_ITEM_TITLE = "數據";
Blockly.Msg.MPYTHON_PRINT_TO_CHART_ITEM_TOOLTIP = "";
Blockly.Msg.MPYTHON_PRINT_TO_CHART_CONTAINER_TITLE_ADD = "數據內容";
Blockly.Msg.MPYTHON_PRINT_TO_CHART_CONTAINER_TOOLTIP = "";

Blockly.Msg.MPYTHON_INIT_CHART_TOOLTIP = "";
Blockly.Msg.MPYTHON_INIT_CHART_EMPTY_TITLE = "初始化圖表列標題";
Blockly.Msg.MPYTHON_INIT_CHART_INPUT_WITH = "初始化圖表列標題";
Blockly.Msg.MPYTHON_INIT_CHART_ITEM_TITLE = "標題";
Blockly.Msg.MPYTHON_INIT_CHART_ITEM_TOOLTIP = "";
Blockly.Msg.MPYTHON_INIT_CHART_CONTAINER_TITLE_ADD = "數據列標題";
Blockly.Msg.MPYTHON_INIT_CHART_CONTAINER_TOOLTIP = "";


Blockly.Msg.MPYTHON_MS = '毫秒';
Blockly.Msg.MPYTHON_US = '微秒';

Blockly.Msg.MPYTHON_TIME_DIFFERENCE_HELPURL = '';
Blockly.Msg.MPYTHON_TIME_DIFFERENCE_MESSAGE0 = '返回運行時間差  開始時間 %1 結束時間 %2';
Blockly.Msg.MPYTHON_TIME_DIFFERENCE_TOOLTIP = '测量连续调用ticks_ms()、ticks_us()间的周期';

Blockly.Msg.MPYTHON_TYPE_HELPURL = '';
Blockly.Msg.MPYTHON_TYPE_MESSAGE0 = '值 %1 的類型';
Blockly.Msg.MPYTHON_TYPE_TOOLTIP = '';

Blockly.Msg.MPYTHON_TYPE_IS_HELPURL = '';
Blockly.Msg.MPYTHON_TYPE_IS_MESSAGE0 = '值 %1 的類型為 %2';
Blockly.Msg.MPYTHON_TYPE_IS_TOOLTIP = '';

Blockly.Msg.MPYTHON_EVAL_HELPURL = '';
Blockly.Msg.MPYTHON_EVAL_MESSAGE0 = '計算表達式 %1 的結果';
Blockly.Msg.MPYTHON_EVAL_TOOLTIP = '計算字符串表達式，並返回結果';

Blockly.Msg.MPYTHON_RETURN_HELPURL = '';
Blockly.Msg.MPYTHON_RETURN_MESSAGE0 = 'return %1';
Blockly.Msg.MPYTHON_RETURN_TOOLTIP = '';

Blockly.Msg.MPYTHON_BLUEBIT_GET_MOTORPEED_HELPURL = '';
Blockly.Msg.MPYTHON_BLUEBIT_GET_MOTORPEED_MESSAGE0 = '拓展板 電機速度 %1';
Blockly.Msg.MPYTHON_BLUEBIT_GET_MOTORPEED_TOOLTIP = "";

Blockly.Msg.MPYTHON_M1M2_LED_ON_HELPURL = '';
Blockly.Msg.MPYTHON_M1M2_LED_ON_MESSAGE0 = '拓展板 設燈 %1 亮度 %2';
Blockly.Msg.MPYTHON_M1M2_LED_ON_TOOLTIP = "";

Blockly.Msg.MPYTHON_M1M2_LED_OFF_HELPURL = '';
Blockly.Msg.MPYTHON_M1M2_LED_OFF_MESSAGE0 = '拓展板 關燈 %1';
Blockly.Msg.MPYTHON_M1M2_LED_OFF_TOOLTIP = "";

Blockly.Msg.MPYTHON_BLUEBIT_AMBIENTLIGHT_HELPURL = '';
Blockly.Msg.MPYTHON_BLUEBIT_AMBIENTLIGHT_MESSAGE0 = 'I2C數字光綫';
Blockly.Msg.MPYTHON_BLUEBIT_AMBIENTLIGHT_TOOLTIP = '';

Blockly.Msg.MPYTHON_BLUEBIT_GET_COLOR_HELPURL = '';
Blockly.Msg.MPYTHON_BLUEBIT_GET_COLOR_MESSAGE0 = 'I2C RGB 顔色 %1';
Blockly.Msg.MPYTHON_BLUEBIT_GET_COLOR_TOOLTIP = '';

Blockly.Msg.MPYTHON_BLUEBIT_GET_ALL_COLOR_HELPURL = '';
Blockly.Msg.MPYTHON_BLUEBIT_GET_ALL_COLOR_MESSAGE0 = 'I2C RGB 顔色';
Blockly.Msg.MPYTHON_BLUEBIT_GET_ALL_COLOR_TOOLTIP = '以列表形式返回';

Blockly.Msg.MPYTHON_BLUEBIT_GET_COLOR_HSV_HELPURL = '';
Blockly.Msg.MPYTHON_BLUEBIT_GET_COLOR_HSV_MESSAGE0 = 'I2C HSV 顔色 %1';
Blockly.Msg.MPYTHON_BLUEBIT_GET_COLOR_HSV_TOOLTIP = '色調（H），飽和度（S），明度（V）';

Blockly.Msg.MPYTHON_BLUEBIT_GET_ALL_COLOR_HSV_HELPURL = '';
Blockly.Msg.MPYTHON_BLUEBIT_GET_ALL_COLOR_HSV_MESSAGE0 = 'I2C HSV 顔色';
Blockly.Msg.MPYTHON_BLUEBIT_GET_ALL_COLOR_HSV_TOOLTIP = '色調（H），飽和度（S），明度（V）';

Blockly.Msg.MPYTHON_BLUEBIT_GET_FORCE_MEASURE_HELPURL = '';
Blockly.Msg.MPYTHON_BLUEBIT_GET_FORCE_MEASURE_MESSAGE0 = 'I2C力感測器  撥碼 %1';
Blockly.Msg.MPYTHON_BLUEBIT_GET_FORCE_MEASURE_TOOLTIP = 'I2C地址與編碼開關的需要對應';

Blockly.Msg.MPYTHON_BLUEBIT_GET_ELECTRICITY_MEASURE_HELPURL = '';
Blockly.Msg.MPYTHON_BLUEBIT_GET_ELECTRICITY_MEASURE_MESSAGE0 = 'I2C电流感測器  撥碼 %1';
Blockly.Msg.MPYTHON_BLUEBIT_GET_ELECTRICITY_MEASURE_TOOLTIP = 'I2C地址與編碼開關的需要對應';

Blockly.Msg.MPYTHON_BLUEBIT_GET_VOLTAGE_MEASURE_HELPURL = '';
Blockly.Msg.MPYTHON_BLUEBIT_GET_VOLTAGE_MEASURE_MESSAGE0 = 'I2C電壓感測器  撥碼 %1';
Blockly.Msg.MPYTHON_BLUEBIT_GET_VOLTAGE_MEASURE_TOOLTIP = 'I2C地址與編碼開關的需要對應';

Blockly.Msg.MPYTHON_BLUEBIT_GET_MAGNETIC_MEASURE_HELPURL = '';
Blockly.Msg.MPYTHON_BLUEBIT_GET_MAGNETIC_MEASURE_MESSAGE0 = 'I2C磁場感測器  撥碼 %1';
Blockly.Msg.MPYTHON_BLUEBIT_GET_MAGNETIC_MEASURE_TOOLTIP = 'I2C地址與編碼開關的需要對應';

Blockly.Msg.MPYTHON_BLUEBIT_GET_PH_MEASURE_HELPURL = '';
Blockly.Msg.MPYTHON_BLUEBIT_GET_PH_MEASURE_MESSAGE0 = 'I2C PH感測器  撥碼 %1';
Blockly.Msg.MPYTHON_BLUEBIT_GET_PH_MEASURE_TOOLTIP = 'I2C地址與編碼開關的需要對應';

Blockly.Msg.MPYTHON_BLUEBIT_GET_TDS_MEASURE_HELPURL = '';
Blockly.Msg.MPYTHON_BLUEBIT_GET_TDS_MEASURE_MESSAGE0 = 'I2C電導率感測器  撥碼 %1';
Blockly.Msg.MPYTHON_BLUEBIT_GET_TDS_MEASURE_TOOLTIP = 'I2C地址與編碼開關的需要對應';

Blockly.Msg.MPYTHON_BLUEBIT_GET_PRESSURE_MEASURE_HELPURL = '';
Blockly.Msg.MPYTHON_BLUEBIT_GET_PRESSURE_MEASURE_MESSAGE0 = 'I2C氣壓感測器  撥碼 %1';
Blockly.Msg.MPYTHON_BLUEBIT_GET_PRESSURE_MEASURE_TOOLTIP = 'I2C地址與編碼開關的需要對應';

Blockly.Msg.MPYTHON_BLUEBIT_GET_PHOTOGATE_TIMER_MEASURE_HELPURL = '';
Blockly.Msg.MPYTHON_BLUEBIT_GET_PHOTOGATE_TIMER_MEASURE_MESSAGE0 = 'I2C光電門感測器  撥碼 %1';
Blockly.Msg.MPYTHON_BLUEBIT_GET_PHOTOGATE_TIMER_MEASURE_TOOLTIP = 'I2C地址與編碼開關的需要對應';

Blockly.Msg.MPYTHON_WIFI_ALL_CONFIG_HELPURL = '';
Blockly.Msg.MPYTHON_WIFI_ALL_CONFIG_MESSAGE0 = 'WI-FI配置信息';
Blockly.Msg.MPYTHON_WIFI_ALL_CONFIG_TOOLTIP = '以元組形式返回所有wifi配置信息';

Blockly.Msg.MPYTHON_WIFI_ISCONNECTED_HELPURL = '';
Blockly.Msg.MPYTHON_WIFI_ISCONNECTED_MESSAGE0 = '已連接到 WI-FI';
Blockly.Msg.MPYTHON_WIFI_ISCONNECTED_TOOLTIP = '';

Blockly.Msg.MPYTHON_INIT_ASSISTANT_WIFI_HELPURL = '';
Blockly.Msg.MPYTHON_INIT_ASSISTANT_WIFI_MESSAGE0 ='Wi-Fi連接 語音助手 Wi-Fi 名稱 %1 密碼 %2';
Blockly.Msg.MPYTHON_INIT_ASSISTANT_WIFI_TOOLTIP = '掌控板通過串口把WIF傳給語音助手';

Blockly.Msg.MPYTHON_INIT_ASSISTANT_PROFILE_HELPURL = '';
Blockly.Msg.MPYTHON_INIT_ASSISTANT_PROFILE_TOOLTIP = '需要先在檔案系統將文件上傳到板';
Blockly.Msg.MPYTHON_INIT_ASSISTANT_PROFILE_MESSAGE0 = '讀取 語音助手 文字檔 %1';

Blockly.Msg.MPYTHON_BLUEBIT_SEG_DISPLAY_HELPURL = '';
Blockly.Msg.MPYTHON_BLUEBIT_SEG_DISPLAY_MESSAGE0 = '數碼管顯示 %1';
Blockly.Msg.MPYTHON_BLUEBIT_SEG_DISPLAY_TOOLTIP = '-999~9999';

Blockly.Msg.MPYTHON_MACHINE_RESET_HELPURL = '';
Blockly.Msg.MPYTHON_MACHINE_RESET_MESSAGE0 = '復位';
Blockly.Msg.MPYTHON_MACHINE_RESET_TOOLTIP = '與按下外部RESET按鍵效果一樣';

Blockly.Msg.MPYTHON_BLUEBIT_SEG_CLEAR_HELPURL = '';
Blockly.Msg.MPYTHON_BLUEBIT_SEG_CLEAR_MESSAGE0 = '清空數碼管';
Blockly.Msg.MPYTHON_BLUEBIT_SEG_CLEAR_TOOLTIP = '';

Blockly.Msg.MPYTHON_MUSIC_PIN_P6 = '默認';
Blockly.Msg.MPYTHON_MUSIC_PIN_P6_HELPURL = '';
Blockly.Msg.MPYTHON_MUSIC_PIN_P6_MESSAGE0 = '%1';
Blockly.Msg.MPYTHON_MUSIC_PIN_P6_TOOLTIP = "";

Blockly.Msg.MPYTHON_SLEEP_MESSAGE0 = '等待 %1 %2';
Blockly.Msg.MPYTHON_SLEEP_TOOLTIP = '在進行下一個命令前，等待設定的時間。\n1秒(s) = 1,000毫秒(ms)\n1秒(s) = 1,000,000微秒(μs)\n毫秒，符號ms（millisecond）\n微秒，符號μs（microsecond）';

//Blockly.Msg.MICROBIT_MICROBIT_SLEEP_TOOLTIP = '在進行下一個命令前，等待設定的時間。\n1秒(s) = 1,000毫秒(ms)\n1秒(s) = 1,000,000微秒(μs)\n毫秒，符號ms（millisecond）\n微秒，符號μs（microsecond）';
//Blockly.Msg.MICROBIT_MICROBIT_SLEEP_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/microbit.html#microbit.sleep';
Blockly.Msg.MICROBIT_MICROBIT_RUNNING_TIME_MESSAGE0 = '運行時間';
Blockly.Msg.MICROBIT_MICROBIT_RUNNING_TIME_TOOLTIP = '獲取開機或復位後的運行時間（毫秒）。';
Blockly.Msg.MICROBIT_MICROBIT_RUNNING_TIME_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/microbit.html#microbit.running_time';
Blockly.Msg.MICROBIT_MICROBIT_TEMPERATURE_MESSAGE0 = '溫度';
Blockly.Msg.MICROBIT_MICROBIT_TEMPERATURE_TOOLTIP = '獲取 micro:bit 的溫度（℃）。';
Blockly.Msg.MICROBIT_MICROBIT_TEMPERATURE_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/microbit.html#microbit.temperature';
Blockly.Msg.MICROBIT_MUSIC_PLAY_BUILT_IN_MESSAGE0 = '播放音樂 %1 等待 %2 循環 %3 引脚 %4';
Blockly.Msg.MICROBIT_MUSIC_PLAY_BUILT_IN_TOOLTIP = '播放內置的音樂，可以設置等待模式和循環播放。';
Blockly.Msg.MICROBIT_MUSIC_PLAY_BUILT_IN_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/music.html#built-in-melodies';
Blockly.Msg.MICROBIT_MUSIC_PITCH_MESSAGE0 = '播放音調 %1 %2 延時  %3 毫秒 引脚 %4';
Blockly.Msg.MICROBIT_MUSIC_PITCH_TOOLTIP = '在設定的時間長度裏播放音調。';
Blockly.Msg.MICROBIT_MUSIC_PITCH_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/music.html#music.pitch';
Blockly.Msg.MICROBIT_MUSIC_PLAY_LIST_OF_NOTES_MESSAGE0 = '引脚 %5 播放音符列表 %1 等待 %2 %3 循環 %4';
Blockly.Msg.MICROBIT_MUSIC_PLAY_LIST_OF_NOTES_TOOLTIP = '播放音符列表，如C4:4、G4:8等，音符為字符串形式。默認是掌控板的P6引脚';
Blockly.Msg.MICROBIT_MUSIC_PLAY_LIST_OF_NOTES_HELPURL = 'https://mpython.readthedocs.io/zh/latest/tutorials/basics/buzz.html';
Blockly.Msg.MICROBIT_MUSIC_RESET_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/music.html#music.reset';
Blockly.Msg.MICROBIT_MUSIC_RESET_MESSAGE0 = '恢復音樂設置';
Blockly.Msg.MICROBIT_MUSIC_RESET_TOOLTIP = '將所有音樂設置 (當前節拍, 音階和周期) 恢復成默認值。';
Blockly.Msg.MICROBIT_MUSIC_STOP_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/music.html#music.stop';
Blockly.Msg.MICROBIT_MUSIC_STOP_MESSAGE0 = '停止播放音樂 引脚 %1';
Blockly.Msg.MICROBIT_MUSIC_STOP_TOOLTIP = '默認是掌控板的P6引脚';
Blockly.Msg.MICROBIT_MUSIC_SET_TEMPO_MESSAGE0 = '設置每一拍等同 %1 分音符，每分鐘節拍數 %2';
Blockly.Msg.MICROBIT_MUSIC_SET_TEMPO_TOOLTIP = '設置回放速度 (節拍)。一定數量的滴答代表一拍，每拍每分鐘播放次數 (BPM 每分鐘節拍)。';
Blockly.Msg.MICROBIT_MUSIC_SET_TEMPO_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/music.html#music.set_tempo';
Blockly.Msg.MICROBIT_MUSIC_SET_TEMPO_SPEED_MESSAGE0 = '設置播放速度為 %1 倍';
Blockly.Msg.MICROBIT_MUSIC_SET_TEMPO_SPEED_TOOLTIP = '4分音符為1拍，每分鐘節拍數默認120，為1倍的播放速度';
Blockly.Msg.MICROBIT_MUSIC_SET_TEMPO_SPEED_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/music.html#music.set_tempo';
Blockly.Msg.MICROBIT_MUSIC_GET_TEMPO_MESSAGE0 = '獲取當前節拍';
Blockly.Msg.MICROBIT_MUSIC_GET_TEMPO_TOOLTIP = '獲取當前節拍: 每節拍滴答數, 每分鐘節拍 (BPM)。';
Blockly.Msg.MICROBIT_MUSIC_GET_TEMPO_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/music.html#music.get_tempo';
Blockly.Msg.MICROBIT_NEOPIXEL_INITIALISE_MESSAGE0 = '使用 引腳 %1 控制， neopixel 彩燈數  %2 ';
Blockly.Msg.MICROBIT_NEOPIXEL_INITIALISE_TOOLTIP = '控制 neopixels 彩燈。需要設定 neopixels 彩燈數量和控制腳。';
Blockly.Msg.MICROBIT_NEOPIXEL_INITIALISE_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/neopixel.html#neopixel.NeoPixel';
Blockly.Msg.MICROBIT_NEOPIXEL_CLEAR_MESSAGE0 = '清除 neopixels 彩燈 %1';
Blockly.Msg.MICROBIT_NEOPIXEL_CLEAR_TOOLTIP = '清除所有 neopixels 彩燈';
Blockly.Msg.MICROBIT_NEOPIXEL_CLEAR_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/neopixel.html#neopixel.NeoPixel.clear';
Blockly.Msg.MICROBIT_NEOPIXEL_SHOW_MESSAGE0 = '顯示 neopixels 彩燈 %1';
Blockly.Msg.MICROBIT_NEOPIXEL_SHOW_TOOLTIP = '顯示 / 更新全部 neopixels 彩燈。';
Blockly.Msg.MICROBIT_NEOPIXEL_SHOW_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/neopixel.html#neopixel.NeoPixel.show';
Blockly.Msg.MICROBIT_NEOPIXEL_SET_MESSAGE0 = 'neopixels 彩燈控制 %1 設置位置 %2 紅色 %3 綠色 %4 藍色 %5';
Blockly.Msg.MICROBIT_NEOPIXEL_SET_TOOLTIP = '更新指定的 neopixel 彩燈的紅、綠、藍 (RGB) 顏色';
Blockly.Msg.MICROBIT_NEOPIXEL_SET_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/neopixel.html#using-neopixels';
Blockly.Msg.MICROBIT_PIN_TOUCHED_MESSAGE0 = '引腳 %1 被觸摸';
Blockly.Msg.MICROBIT_PIN_TOUCHED_TOOLTIP = '如果引腳被觸摸將返回 “真”。';
Blockly.Msg.MICROBIT_PIN_TOUCHED_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/pin.html#microbit.MicroBitTouchPin.is_touched';
Blockly.Msg.MICROBIT_PIN_WAS_PRESSED_MESSAGE0 = '引腳 %1 曾經被觸摸';
Blockly.Msg.MICROBIT_PIN_WAS_PRESSED_TOOLTIP = '如果引腳曾經被觸摸將返回 “真”。';
Blockly.Msg.MICROBIT_PIN_WAS_PRESSED_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/pin.html#microbit.MicroBitTouchPin.was_pressed';
Blockly.Msg.MICROBIT_PIN_GET_PRESSES_MESSAGE0 = '引腳 %1 被觸摸的次數';
Blockly.Msg.MICROBIT_PIN_GET_PRESSES_TOOLTIP = '返回被觸摸的次數，然後清零。';
Blockly.Msg.MICROBIT_PIN_GET_PRESSES_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/pin.html#microbit.MicroBitTouchPin.get_presses';
Blockly.Msg.MICROBIT_PIN_READ_ANALOG_MESSAGE0 = '讀取引腳 %1 模擬電壓';
Blockly.Msg.MICROBIT_PIN_READ_ANALOG_TOOLTIP = '讀取引腳的模擬輸入電壓。';
Blockly.Msg.MICROBIT_PIN_READ_ANALOG_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/pin.html#microbit.MicroBitAnalogDigitalPin.read_analog';
Blockly.Msg.MICROBIT_PIN_WRITE_ANALOG_MESSAGE0 = '設置模擬量 %1 到引腳 %2';
Blockly.Msg.MICROBIT_PIN_WRITE_ANALOG_TOOLTIP = '寫入模擬參數到指定引腳上。';
Blockly.Msg.MICROBIT_PIN_WRITE_ANALOG_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/pin.html#microbit.MicroBitAnalogDigitalPin.write_analog';
Blockly.Msg.MICROBIT_PIN_READ_DIGITAL_MESSAGE0 = '讀取引腳 %1 的數字輸入';
Blockly.Msg.MICROBIT_PIN_READ_DIGITAL_TOOLTIP = '讀取引腳的數字輸入 (真 或 假)。';
Blockly.Msg.MICROBIT_PIN_READ_DIGITAL_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/pin.html#microbit.MicroBitDigitalPin.read_digital';
Blockly.Msg.MICROBIT_PIN_WRITE_DIGITAL_MESSAGE0 = '設置數字輸出 %1 到引腳 %2';
Blockly.Msg.MICROBIT_PIN_WRITE_DIGITAL_TOOLTIP = '寫入數字量 (真 或 假) 到指定引腳。';
Blockly.Msg.MICROBIT_PIN_WRITE_DIGITAL_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/pin.html#microbit.MicroBitDigitalPin.write_digital';
Blockly.Msg.MICROBIT_RADIO_ON_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/radio.html#radio.on';
Blockly.Msg.MICROBIT_RADIO_ON_MESSAGE0 = '打開無線廣播';
Blockly.Msg.MICROBIT_RADIO_ON_TOOLTIP = '打開無線廣播。需要明確聲明調用，因為它會消耗更多功率和占用更多內存。';
Blockly.Msg.MICROBIT_RADIO_OFF_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/radio.html#radio.off';
Blockly.Msg.MICROBIT_RADIO_OFF_MESSAGE0 = '關閉無線廣播';
Blockly.Msg.MICROBIT_RADIO_OFF_TOOLTIP = '關閉無線廣播，節省功耗和內存。';
Blockly.Msg.MICROBIT_RADIO_CONFIG_MESSAGE0 = '配置無線廣播消息長度 %1 %2 最大隊列數量 %3 %4 信道 %5 %6 廣播功率 %7 %8 地址 %9 %10 組 %11 %12 數據速率 %13';
Blockly.Msg.MICROBIT_RADIO_CONFIG_TOOLTIP = '配置無線廣播。\n 長度指單個消息的最大長度； \n 隊列指可以存放在消息隊列中消息的數量； \n 信道指無線廣播使用的無線頻率； \n 功率指發射廣播信號的強度； \n 地址：32位值； \n 組：8位值(0-255)； \n 數據速率指數據傳輸的速度。';
Blockly.Msg.MICROBIT_RADIO_CONFIG_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/radio.html#radio.config';
Blockly.Msg.MICROBIT_RADIO_RESET_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/radio.html#radio.reset';
Blockly.Msg.MICROBIT_RADIO_RESET_MESSAGE0 = '復位無線廣播';
Blockly.Msg.MICROBIT_RADIO_RESET_TOOLTIP = '恢復無線廣播到默認設置。';
Blockly.Msg.MICROBIT_RADIO_SEND_STRING_MESSAGE0 = '發送消息 %1';
Blockly.Msg.MICROBIT_RADIO_SEND_STRING_TOOLTIP = '廣播文字消息。';
Blockly.Msg.MICROBIT_RADIO_SEND_STRING_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/radio.html#radio.send';
Blockly.Msg.MICROBIT_RADIO_SEND_BYTES_MESSAGE0 = '發送字節 %1';
Blockly.Msg.MICROBIT_RADIO_SEND_BYTES_TOOLTIP = '廣播字節。';
Blockly.Msg.MICROBIT_RADIO_SEND_BYTES_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/radio.html#radio.send';
Blockly.Msg.MICROBIT_RADIO_RECEIVE_MESSAGE0 = '接收消息';
Blockly.Msg.MICROBIT_RADIO_RECEIVE_TOOLTIP = '接收消息。';
Blockly.Msg.MICROBIT_RADIO_RECEIVE_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/radio.html#radio.receive';
Blockly.Msg.MICROBIT_RADIO_RECEIVE_BYTES_MESSAGE0 = '接收字節';
Blockly.Msg.MICROBIT_RADIO_RECEIVE_BYTES_TOOLTIP = '接收字節。';
Blockly.Msg.MICROBIT_RADIO_RECEIVE_BYTES_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/radio.html#radio.receive';
Blockly.Msg.MICROBIT_SPEECH_SAY_MESSAGE0 = '說 %1';
Blockly.Msg.MICROBIT_SPEECH_SAY_TOOLTIP = '嘗試說英語';
Blockly.Msg.MICROBIT_SPEECH_SAY_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/speech.html#speech.say';
Blockly.Msg.MICROBIT_SPEECH_PRONOUNCE_MESSAGE0 = '讀 %1';
Blockly.Msg.MICROBIT_SPEECH_PRONOUNCE_TOOLTIP = '精確發音。';
Blockly.Msg.MICROBIT_SPEECH_PRONOUNCE_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/speech.html#phonemes';
Blockly.Msg.MICROBIT_SPEECH_SING_MESSAGE0 = '唱 %1';
Blockly.Msg.MICROBIT_SPEECH_SING_TOOLTIP = '象機器人一樣唱歌。';
Blockly.Msg.MICROBIT_SPEECH_SING_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/speech.html#singing';

//MENUS
Blockly.Msg.MICROBIT_GESTURE_SHAKE = '搖晃';
Blockly.Msg.MICROBIT_GESTURE_UP = '上';
Blockly.Msg.MICROBIT_GESTURE_DOWN = '下';
Blockly.Msg.MICROBIT_GESTURE_LEFT = '左';
Blockly.Msg.MICROBIT_GESTURE_RIGHT = '右';
Blockly.Msg.MICROBIT_GESTURE_FACE_UP = '朝上';
Blockly.Msg.MICROBIT_GESTURE_FACE_DOWN = '朝下';
Blockly.Msg.MICROBIT_GESTURE_FREEFAIL = '自由下落';
Blockly.Msg.MICROBIT_IMAGE_HEART = '心形';
Blockly.Msg.MICROBIT_IMAGE_HEART_SMALL = '心(小)';
Blockly.Msg.MICROBIT_IMAGE_HAPPY = '高興';
Blockly.Msg.MICROBIT_IMAGE_SMILE = '笑臉';
Blockly.Msg.MICROBIT_IMAGE_SAD = '傷心';
Blockly.Msg.MICROBIT_IMAGE_CONFUSED = '困惑';
Blockly.Msg.MICROBIT_IMAGE_ANGRY = '生氣';
Blockly.Msg.MICROBIT_IMAGE_ASLEEP = '睡著';
Blockly.Msg.MICROBIT_IMAGE_SUPRISED = '驚訝';
Blockly.Msg.MICROBIT_IMAGE_SILLY = '愚蠢';
Blockly.Msg.MICROBIT_IMAGE_FABULOUS = '極妙';
Blockly.Msg.MICROBIT_IMAGE_MEH = '無聊';
Blockly.Msg.MICROBIT_IMAGE_YES = '是';
Blockly.Msg.MICROBIT_IMAGE_NO = '否';
Blockly.Msg.MICROBIT_IMAGE_CLOCK12 = '12點';
Blockly.Msg.MICROBIT_IMAGE_CLOCK11 = '11點';
Blockly.Msg.MICROBIT_IMAGE_CLOCK10 = '10點';
Blockly.Msg.MICROBIT_IMAGE_CLOCK9 = '9點';
Blockly.Msg.MICROBIT_IMAGE_CLOCK8 = '8點';
Blockly.Msg.MICROBIT_IMAGE_CLOCK7 = '7點';
Blockly.Msg.MICROBIT_IMAGE_CLOCK6 = '6點';
Blockly.Msg.MICROBIT_IMAGE_CLOCK5 = '5點';
Blockly.Msg.MICROBIT_IMAGE_CLOCK4 = '4點';
Blockly.Msg.MICROBIT_IMAGE_CLOCK3 = '3點';
Blockly.Msg.MICROBIT_IMAGE_CLOCK2 = '2點';
Blockly.Msg.MICROBIT_IMAGE_CLOCK1 = '1點';
Blockly.Msg.MICROBIT_IMAGE_ARROW_N = '箭頭－北';
Blockly.Msg.MICROBIT_IMAGE_ARROW_NE = '箭頭－東北';
Blockly.Msg.MICROBIT_IMAGE_ARROW_E = '箭頭－東';
Blockly.Msg.MICROBIT_IMAGE_ARROW_SE = '箭頭－東南';
Blockly.Msg.MICROBIT_IMAGE_ARROW_S = '箭頭－南';
Blockly.Msg.MICROBIT_IMAGE_ARROW_SW = '箭頭－西南';
Blockly.Msg.MICROBIT_IMAGE_ARROW_W = '箭頭－西';
Blockly.Msg.MICROBIT_IMAGE_ARROW_NW = '箭頭－西北';
Blockly.Msg.MICROBIT_IMAGE_TRIANGLE = '三角形';
Blockly.Msg.MICROBIT_IMAGE_TRIANGLE_LEFT = '左三角形';
Blockly.Msg.MICROBIT_IMAGE_CHESSBOARD = '棋盤';
Blockly.Msg.MICROBIT_IMAGE_DIAMOND = '菱形';
Blockly.Msg.MICROBIT_IMAGE_DIAMOND_SMALL = '菱形(小)';
Blockly.Msg.MICROBIT_IMAGE_SQUARE = '方形';
Blockly.Msg.MICROBIT_IMAGE_SQUARE_SMALL = '方形(小)';
Blockly.Msg.MICROBIT_IMAGE_RABBIT = '兔子';
Blockly.Msg.MICROBIT_IMAGE_COW = '牛';
Blockly.Msg.MICROBIT_IMAGE_MUSIC_CROTCHET = '四分音符';
Blockly.Msg.MICROBIT_IMAGE_MUSIC_QUAVER = '八分音符';
Blockly.Msg.MICROBIT_IMAGE_MUSIC_QUAVERS = '顫音';
Blockly.Msg.MICROBIT_IMAGE_PITCHFORK = '叉子';
Blockly.Msg.MICROBIT_IMAGE_XMAS = '聖誕樹';
Blockly.Msg.MICROBIT_IMAGE_PACMAN = '吃豆人';
Blockly.Msg.MICROBIT_IMAGE_TARGET = '目標';
Blockly.Msg.MICROBIT_IMAGE_TSHIRT = 'T恤衫';
Blockly.Msg.MICROBIT_IMAGE_ROLLERSKATE = '輪滑';
Blockly.Msg.MICROBIT_IMAGE_DUCK = '鴨子';
Blockly.Msg.MICROBIT_IMAGE_HOUSE = '房子';
Blockly.Msg.MICROBIT_IMAGE_TORTOISE = '烏龜';
Blockly.Msg.MICROBIT_IMAGE_BUTTERFLY = '蝴蝶';
Blockly.Msg.MICROBIT_IMAGE_STICKFIGURE = '線條畫';
Blockly.Msg.MICROBIT_IMAGE_GHOST = '幽靈';
Blockly.Msg.MICROBIT_IMAGE_SWORD = '寶劍';
Blockly.Msg.MICROBIT_IMAGE_GIRAFFE = '長頸鹿';
Blockly.Msg.MICROBIT_IMAGE_SKULL = '頭';
Blockly.Msg.MICROBIT_IMAGE_UMBRELLA = '傘';
Blockly.Msg.MICROBIT_IMAGE_SNAKE = '蛇';
Blockly.Msg.MICROBIT_IMAGE_ALL_CLOCKS = '所有時鐘';
Blockly.Msg.MICROBIT_IMAGE_ALL_ARROWS = '所有箭頭';
Blockly.Msg.MICROBIT_PIN_SET_SERVO_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E8%88%B5%E6%9C%BA';
Blockly.Msg.MICROBIT_PIN_SET_SERVO_TOOLTIP = '設置舵機角度，範圍為 0 ～ 180度';
Blockly.Msg.MICROBIT_PIN_SET_SERVO_MESSAGE0 = '設置舵機 引腳 %1 角度為 %2';
Blockly.Msg.MICROBIT_PIN_SET_MODE_HELPURL = '';
Blockly.Msg.MICROBIT_PIN_SET_MODE_TOOLTIP = '引腳模式有三種：懸空、上拉、下拉';
Blockly.Msg.MICROBIT_PIN_SET_MODE_MESSAGE0 = '設置引腳 %1 模式為 %2';
Blockly.Msg.MICROBIT_PIN_MODE_NO = '懸空';
Blockly.Msg.MICROBIT_PIN_MODE_UP = '上拉';
Blockly.Msg.MICROBIT_PIN_MODE_DOWN = '下拉';


//uart
Blockly.Msg.MICROBIT_UART_INIT_MESSAGE0 = '初始化串口波特率為 %3 TX為 %1 RX為 %2';
Blockly.Msg.MICROBIT_UART_INIT_TOOLTIP = '';
Blockly.Msg.MICROBIT_UART_INIT_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/uart.html';
Blockly.Msg.MICROBIT_UART_ANY_MSG_RECEIVED_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/uart.html';
Blockly.Msg.MICROBIT_UART_ANY_MSG_RECEIVED_TOOLTIP = '';
Blockly.Msg.MICROBIT_UART_ANY_MSG_RECEIVED_MESSAGE0 = '串口接收到數據';
Blockly.Msg.MICROBIT_UART_READ_MSG_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/uart.html';
Blockly.Msg.MICROBIT_UART_READ_MSG_TOOLTIP = '';
Blockly.Msg.MICROBIT_UART_READ_MSG_MESSAGE0 = '讀取串口 %1 字節';
Blockly.Msg.MICROBIT_UART_READ_MSG_TO_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/uart.html';
Blockly.Msg.MICROBIT_UART_READ_MSG_TO_TOOLTIP = '';
Blockly.Msg.MICROBIT_UART_READ_MSG_TO_MESSAGE0 = '讀取串口 %1 字節存至 %2';
Blockly.Msg.MICROBIT_UART_WRITE_MSG_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/uart.html';
Blockly.Msg.MICROBIT_UART_WRITE_MSG_TOOLTIP = '';
Blockly.Msg.MICROBIT_UART_WRITE_MSG_MESSAGE0 = '串口發送數據 %1';
Blockly.Msg.MICROBIT_ALL_BYTES = "全部";
Blockly.Msg.MICROBIT_ALINE_BYTES = "一行";
//labplus
Blockly.Msg.LABPLUS_BUTTON_IS_PRESSED_MESSAGE0 = '引腳 %1 被觸發';
Blockly.Msg.LABPLUS_BUTTON_IS_PRESSED_TOOLTIP = '如果指定按鍵按下返回 “真”，否則返回 “假”。';
Blockly.Msg.LABPLUS_BUTTON_IS_PRESSED_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/button.html#Button.is_pressed';

Blockly.Msg.LABPLUS_BUTTON_WAS_PRESSED_MESSAGE0 = '引腳 %1 曾經被觸發';
Blockly.Msg.LABPLUS_BUTTON_WAS_PRESSED_TOOLTIP = '如果按鍵曾經按下過返回 “真”，否則返回 “假”。';
Blockly.Msg.LABPLUS_BUTTON_WAS_PRESSED_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/button.html#Button.was_pressed';

Blockly.Msg.LABPLUS_BUTTON_GET_PRESSES_MESSAGE0 = '引腳 %1 被觸發過的次數';
Blockly.Msg.LABPLUS_BUTTON_GET_PRESSES_TOOLTIP = '返回按鍵按下的總次數，然後清除計數。';
Blockly.Msg.LABPLUS_BUTTON_GET_PRESSES_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/button.html#Button.get_presses';

Blockly.Msg.LABPLUS_LED_MESSAGE0 = '設置LED燈 引腳 %2 輸出 %1';
Blockly.Msg.LABPLUS_LED_TOOLTIP = '';
Blockly.Msg.LABPLUS_LED_HELPURL = 'http://wiki.labplus.cn/index.php?title=LED';

Blockly.Msg.LABPLUS_INFRARED_IS_TRIGGERED_MESSAGE0 = '紅外探測 引腳 %1 被觸發';
Blockly.Msg.LABPLUS_INFRARED_IS_TRIGGERED_TOOLTIP = '';
Blockly.Msg.LABPLUS_INFRARED_IS_TRIGGERED_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E7%BA%A2%E5%A4%96%E6%8E%A2%E6%B5%8B';

Blockly.Msg.LABPLUS_HEAT_SENSITIVE_DETECTOR_MESSAGE0 = '熱敏傳感器 引腳 %1 的值';
Blockly.Msg.LABPLUS_HEAT_SENSITIVE_DETECTOR_TOOLTIP = '';
Blockly.Msg.LABPLUS_HEAT_SENSITIVE_DETECTOR_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E7%83%AD%E6%95%8F%E7%94%B5%E9%98%BB';

Blockly.Msg.LABPLUS_I2C_LIGHT_SENSOR_MESSAGE0 = 'I2C數字光線傳感器的值(lux)';
Blockly.Msg.LABPLUS_I2C_LIGHT_SENSOR_TOOLTIP = '';
Blockly.Msg.LABPLUS_I2C_LIGHT_SENSOR_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E6%95%B0%E5%AD%97%E5%85%89%E7%BA%BF';

Blockly.Msg.LABPLUS_WATER_LEVEL_DETECTOR_MESSAGE0 = '水位傳感器 引腳 %1 的值';
Blockly.Msg.LABPLUS_WATER_LEVEL_DETECTOR_TOOLTIP = '';
Blockly.Msg.LABPLUS_WATER_LEVEL_DETECTOR_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E6%B0%B4%E4%BD%8D';

Blockly.Msg.LABPLUS_SMOKE_DETECTOR_IS_TRIGGERED_MESSAGE0 = '煙霧探測器 引腳 %1 被觸發';
Blockly.Msg.LABPLUS_SMOKE_DETECTOR_IS_TRIGGERED_TOOLTIP = '';
Blockly.Msg.LABPLUS_SMOKE_DETECTOR_IS_TRIGGERED_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E7%83%9F%E9%9B%BE';

Blockly.Msg.LABPLUS_BUZZER_FOR_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E8%9C%82%E9%B8%A3%E5%99%A8';
Blockly.Msg.LABPLUS_BUZZER_FOR_TOOLTIP = '';
Blockly.Msg.LABPLUS_BUZZER_FOR_MESSAGE0 = '以頻率 %1 激活蜂鳴器 引腳0 %2 毫秒';

Blockly.Msg.LABPLUS_BUZZER_ON_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E8%9C%82%E9%B8%A3%E5%99%A8';
Blockly.Msg.LABPLUS_BUZZER_ON_TOOLTIP = '';
Blockly.Msg.LABPLUS_BUZZER_ON_MESSAGE0 = '以頻率 %1 激活蜂鳴器 引腳0';

Blockly.Msg.LABPLUS_BUZZER_OFF_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E8%9C%82%E9%B8%A3%E5%99%A8';
Blockly.Msg.LABPLUS_BUZZER_OFF_TOOLTIP = '';
Blockly.Msg.LABPLUS_BUZZER_OFF_MESSAGE0 = '關閉蜂鳴器 引腳0';

Blockly.Msg.LABPLUS_TM_HM_SENSOR_MESSAGE0 = 'I2C溫濕度傳感器的 %1 值';
Blockly.Msg.LABPLUS_TM_HM_SENSOR_TOOLTIP = '';
Blockly.Msg.LABPLUS_TM_HM_SENSOR_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E6%B8%A9%E6%B9%BF%E5%BA%A6';
Blockly.Msg.LABPLUS_TM_HM_SENSOR_TM = '溫度';
Blockly.Msg.LABPLUS_TM_HM_SENSOR_HM = '濕度';

Blockly.Msg.LABPLUS_SET_SERVO_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E8%88%B5%E6%9C%BA';
Blockly.Msg.LABPLUS_SET_SERVO_TOOLTIP = '';
Blockly.Msg.LABPLUS_SET_SERVO_MESSAGE0 = '設置舵機 引腳 %1 角度為 %2';

Blockly.Msg.LABPLUS_FINGERPRINT_SENSOR_MESSAGE0 = '指紋傳感器 引腳 %1 驗證通過';
Blockly.Msg.LABPLUS_FINGERPRINT_SENSOR_TOOLTIP = '';
Blockly.Msg.LABPLUS_FINGERPRINT_SENSOR_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E6%8C%87%E7%BA%B9';

Blockly.Msg.LABPLUS_SET_MOTOR_HELPURL = '';
Blockly.Msg.LABPLUS_SET_MOTOR_TOOLTIP = '';
Blockly.Msg.LABPLUS_SET_MOTOR_MESSAGE0 = '設置電機 %1 方向 %2 速度 %3';
Blockly.Msg.LABPLUS_SET_MOTOR_CLOCKWISE = '正轉';
Blockly.Msg.LABPLUS_SET_MOTOR_ANTI_CLOCKWISE = '反轉';

Blockly.Msg.LABPLUS_STOP_MOTOR_HELPURL = '';
Blockly.Msg.LABPLUS_STOP_MOTOR_TOOLTIP = '';
Blockly.Msg.LABPLUS_STOP_MOTOR_MESSAGE0 = '停止電機';

Blockly.Msg.LABPLUS_GET_RFID_ID_MESSAGE0 = '射頻卡 引腳 %1 驗證通過';
Blockly.Msg.LABPLUS_GET_RFID_ID_TOOLTIP = '';
Blockly.Msg.LABPLUS_GET_RFID_ID_HELPURL = 'http://wiki.labplus.cn/index.php?title=RFID';

Blockly.Msg.LABPLUS_GET_RFID_VALUE_MESSAGE0 = '電子錢包 引腳 %1 余額';
Blockly.Msg.LABPLUS_GET_RFID_VALUE_TOOLTIP = '';
Blockly.Msg.LABPLUS_GET_RFID_VALUE_HELPURL = '';

Blockly.Msg.LABPLUS_SET_RFID_VALUE_MESSAGE0 = '設置電子錢包 引腳 %1 余額 %2 %3';
Blockly.Msg.LABPLUS_SET_RFID_VALUE_TOOLTIP = '';
Blockly.Msg.LABPLUS_SET_RFID_VALUE_HELPURL = '';
Blockly.Msg.LABPLUS_SET_RFID_ADD = '增加';
Blockly.Msg.LABPLUS_SET_RFID_MINUS = '減少';

Blockly.Msg.LABPLUS_SOUND_IS_TRIGGERED_MESSAGE0 = '聲音傳感器 引腳 %1 被觸發';
Blockly.Msg.LABPLUS_SOUND_IS_TRIGGERED_TOOLTIP = '';
Blockly.Msg.LABPLUS_SOUND_IS_TRIGGERED_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E9%BA%A6%E5%85%8B%E9%A3%8E';

Blockly.Msg.LABPLUS_USB_SWITCH_HELPURL = '';
Blockly.Msg.LABPLUS_USB_SWITCH_TOOLTIP = '';
Blockly.Msg.LABPLUS_USB_SWITCH_MESSAGE0 = '%1 USB開關 引腳 %2';
Blockly.Msg.LABPLUS_USB_SWITCH_ON = '打開';
Blockly.Msg.LABPLUS_USB_SWITCH_OFF = '關閉';

Blockly.Msg.LABPLUS_VOICE_RECORD_HELPURL = '';
Blockly.Msg.LABPLUS_VOICE_RECORD_TOOLTIP = '';
Blockly.Msg.LABPLUS_VOICE_RECORD_MESSAGE0 = '%1 語音錄放器 引腳 %2';
Blockly.Msg.LABPLUS_VOICE_RECORD_ON = '打開';
Blockly.Msg.LABPLUS_VOICE_RECORD_OFF = '關閉';

Blockly.Msg.LABPLUS_RGB_INITIALISE_MESSAGE0 = '使用 引腳 %1 控制，RGB 彩燈數  %2 ';
Blockly.Msg.LABPLUS_RGB_INITIALISE_TOOLTIP = '控制 RGB 彩燈。需要設定 neopixels 彩燈數量和控制腳。';
Blockly.Msg.LABPLUS_RGB_INITIALISE_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/neopixel.html#neopixel.NeoPixel';
Blockly.Msg.LABPLUS_RGB_CLEAR_MESSAGE0 = '清除 RGB 彩燈 %1';
Blockly.Msg.LABPLUS_RGB_CLEAR_TOOLTIP = '清除所有 RGB 彩燈';
Blockly.Msg.LABPLUS_RGB_CLEAR_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/neopixel.html#neopixel.NeoPixel.clear';
Blockly.Msg.LABPLUS_RGB_SHOW_MESSAGE0 = '顯示 RGB 彩燈 %1';
Blockly.Msg.LABPLUS_RGB_SHOW_TOOLTIP = '顯示 / 更新全部 RGB 彩燈。';
Blockly.Msg.LABPLUS_RGB_SHOW_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/neopixel.html#neopixel.NeoPixel.show';
Blockly.Msg.LABPLUS_RGB_SET_MESSAGE0 = 'RGB 彩燈控制 %1 設置位置 %2 紅色 %3 綠色 %4 藍色 %5';
Blockly.Msg.LABPLUS_RGB_SET_TOOLTIP = '更新指定的 RGB 彩燈的紅、綠、藍 (RGB) 顏色';
Blockly.Msg.LABPLUS_RGB_SET_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/neopixel.html#using-neopixels';

Blockly.Msg.LABPLUS_COMPITITION_INIT_EXTENDED_PINS_MESSAGE0 = '設置擴展端口 IO %1 為 %2';
Blockly.Msg.LABPLUS_COMPITITION_INIT_EXTENDED_PINS_TOOLTIP = '0表示輸出引腳,1表示輸入引腳';
Blockly.Msg.LABPLUS_COMPITITION_INIT_EXTENDED_PINS_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E7%AB%AF%E5%8F%A3%E6%89%A9%E5%B1%95';

Blockly.Msg.LABPLUS_COMPITITION_INIT_EXTENDED_PINS_INPUT = '輸入';
Blockly.Msg.LABPLUS_COMPITITION_INIT_EXTENDED_PINS_OUTPUT = '輸出';

Blockly.Msg.LABPLUS_READ_EXTENDED_PIN_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E7%AB%AF%E5%8F%A3%E6%89%A9%E5%B1%95';
Blockly.Msg.LABPLUS_READ_EXTENDED_PIN_TOOLTIP = '';
Blockly.Msg.LABPLUS_READ_EXTENDED_PIN_MESSAGE0 = '讀取擴展端口值 IO %1'

Blockly.Msg.LABPLUS_WRITE_EXTENDED_PIN_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E7%AB%AF%E5%8F%A3%E6%89%A9%E5%B1%95';
Blockly.Msg.LABPLUS_WRITE_EXTENDED_PIN_TOOLTIP = '';
Blockly.Msg.LABPLUS_WRITE_EXTENDED_PIN_MESSAGE0 = '設置擴展端口 IO %1 值為 %2';

Blockly.Msg.LABPLUS_I2C_ULTRASONIC_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E8%B6%85%E5%A3%B0%E6%B3%A2';
Blockly.Msg.LABPLUS_I2C_ULTRASONIC_TOOLTIP = '';
Blockly.Msg.LABPLUS_I2C_ULTRASONIC_MESSAGE0 = 'I2C超聲波傳感器的值';

Blockly.Msg.MICROBIT_SET_MUSIC_PIN_HELPURL = '';
Blockly.Msg.MICROBIT_SET_MUSIC_PIN_TOOLTIP = '';
Blockly.Msg.MICROBIT_SET_MUSIC_PIN_MESSAGE0 = '設置默認蜂鳴器引腳為 %1';

Blockly.Msg.LABPLUS_HUMAN_DETECTOR_IS_TRIGGERED_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E4%BA%BA%E4%BD%93%E6%84%9F%E5%BA%94';
Blockly.Msg.LABPLUS_HUMAN_DETECTOR_IS_TRIGGERED_TOOLTIP = '';
Blockly.Msg.LABPLUS_HUMAN_DETECTOR_IS_TRIGGERED_MESSAGE0 = '人體感應 引腳 %1 被觸發';

Blockly.Msg.LABPLUS_MAGNETIC_SWITCH_IS_TRIGGERED_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E9%97%A8%E7%A3%81%E5%BC%80%E5%85%B3';
Blockly.Msg.LABPLUS_MAGNETIC_SWITCH_IS_TRIGGERED_TOOLTIP = '';
Blockly.Msg.LABPLUS_MAGNETIC_SWITCH_IS_TRIGGERED_MESSAGE0 = '門磁開關 引腳 %1 被觸發';

Blockly.Msg.LABPLUS_SOUND_LEVEL_SENSOR_HELPURL = '';
Blockly.Msg.LABPLUS_SOUND_LEVEL_SENSOR_TOOLTIP = '';
Blockly.Msg.LABPLUS_SOUND_LEVEL_SENSOR_MESSAGE0 = '聲音傳感器 引腳 %1 的值';

Blockly.Msg.LABPLUS_SMOKE_SENSOR_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E7%83%9F%E9%9B%BE';
Blockly.Msg.LABPLUS_SMOKE_SENSOR_TOOLTIP = '';
Blockly.Msg.LABPLUS_SMOKE_SENSOR_MESSAGE0 = '煙霧傳感器 引腳 %1 的值';

Blockly.Msg.LABPLUS_SOIL_MOISTURE_SENSOR_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E5%9C%9F%E5%A3%A4%E6%B9%BF%E5%BA%A6';
Blockly.Msg.LABPLUS_SOIL_MOISTURE_SENSOR_TOOLTIP = '';
Blockly.Msg.LABPLUS_SOIL_MOISTURE_SENSOR_MESSAGE0 = '土壤濕度傳感器 引腳 %1 的值';

Blockly.Msg.LABPLUS_FAN_SWITCH_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E6%8E%92%E9%A3%8E%E6%89%87';
Blockly.Msg.LABPLUS_FAN_SWITCH_TOOLTIP = '';
Blockly.Msg.LABPLUS_FAN_SWITCH_MESSAGE0 = '%1 風扇 引腳 %2';

Blockly.Msg.LABPLUS_VOICE_RECORD_ON_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E8%AF%AD%E9%9F%B3%E5%BD%95%E6%94%BE';
Blockly.Msg.LABPLUS_VOICE_RECORD_ON_TOOLTIP = '';
Blockly.Msg.LABPLUS_VOICE_RECORD_ON_MESSAGE0 = '打開錄放器 %1 引腳 %2';
Blockly.Msg.LABPLUS_VOICE_RECORD_PLAY = '播放';
Blockly.Msg.LABPLUS_VOICE_RECORD_REC = '錄音';

Blockly.Msg.LABPLUS_VOICE_RECORD_OFF_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E8%AF%AD%E9%9F%B3%E5%BD%95%E6%94%BE';
Blockly.Msg.LABPLUS_VOICE_RECORD_OFF_TOOLTIP = '';
Blockly.Msg.LABPLUS_VOICE_RECORD_OFF_MESSAGE0 = '關閉錄放器 引腳 %1';


Blockly.Msg.LABPLUS_MOTOR_ON_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E7%94%B5%E6%9C%BA%E9%A9%B1%E5%8A%A8';
Blockly.Msg.LABPLUS_MOTOR_ON_TOOLTIP = '';
Blockly.Msg.LABPLUS_MOTOR_ON_MESSAGE0 = '打開直流電機 %1 速度 %2 引腳 %3';
Blockly.Msg.LABPLUS_MOTOR_ON_CLOCKWISE = '正轉';
Blockly.Msg.LABPLUS_MOTOR_ON_ANTICLOCKWISE = '反轉';

Blockly.Msg.LABPLUS_MOTOR_OFF_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E7%94%B5%E6%9C%BA%E9%A9%B1%E5%8A%A8';
Blockly.Msg.LABPLUS_MOTOR_OFF_TOOLTIP = '';
Blockly.Msg.LABPLUS_MOTOR_OFF_MESSAGE0 = '停止直流電機 引腳 %1';

Blockly.Msg.LABPLUS_READ_COLOR_FROM_I2C_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E9%A2%9C%E8%89%B2';
Blockly.Msg.LABPLUS_READ_COLOR_FROM_I2C_TOOLTIP = '';
Blockly.Msg.LABPLUS_READ_COLOR_FROM_I2C_MESSAGE0 = 'I2C顏色傳感器讀取並儲存顏色';

Blockly.Msg.LABPLUS_RGB_COLOR_HELPURL = 'http://wiki.labplus.cn/index.php?title=RGB_LED';
Blockly.Msg.LABPLUS_RGB_COLOR_TOOLTIP = '讀取已儲存的顏色';
Blockly.Msg.LABPLUS_RGB_COLOR_MESSAGE0 = 'RGB顏色 %1';

Blockly.Msg.LABPLUS_SET_I2C_DIGITS_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E6%95%B0%E7%A0%81%E7%AE%A1';
Blockly.Msg.LABPLUS_SET_I2C_DIGITS_TOOLTIP = '';
Blockly.Msg.LABPLUS_SET_I2C_DIGITS_MESSAGE0 = '設置I2C數碼管的值為 %1';

Blockly.Msg.LABPLUS_TURN_OFF_I2C_DIGITS_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E6%95%B0%E7%A0%81%E7%AE%A1';
Blockly.Msg.LABPLUS_TURN_OFF_I2C_DIGITS_TOOLTIP = '';
Blockly.Msg.LABPLUS_TURN_OFF_I2C_DIGITS_MESSAGE0 = '關閉I2C數碼管';

Blockly.Msg.LABPLUS_UART_SET_MIDI_MELODIC_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E7%94%B5%E5%AD%90%E7%90%B4';
Blockly.Msg.LABPLUS_UART_SET_MIDI_MELODIC_TOOLTIP = '';
Blockly.Msg.LABPLUS_UART_SET_MIDI_MELODIC_MESSAGE0 = '設置MIDI模塊音調為 %1';

Blockly.Msg.LABPLUS_UART_PLAY_MIDI_NOTE_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E7%94%B5%E5%AD%90%E7%90%B4';
Blockly.Msg.LABPLUS_UART_PLAY_MIDI_NOTE_TOOLTIP = '';
Blockly.Msg.LABPLUS_UART_PLAY_MIDI_NOTE_MESSAGE0 = 'MIDI模塊 %2 音符 %1';
Blockly.Msg.LABPLUS_UART_PLAY_MIDI_NOTE_Do = 'Do';
Blockly.Msg.LABPLUS_UART_PLAY_MIDI_NOTE_Re = 'Re';
Blockly.Msg.LABPLUS_UART_PLAY_MIDI_NOTE_Mi = 'Mi';
Blockly.Msg.LABPLUS_UART_PLAY_MIDI_NOTE_Fa = 'Fa';
Blockly.Msg.LABPLUS_UART_PLAY_MIDI_NOTE_Sol = 'Sol';
Blockly.Msg.LABPLUS_UART_PLAY_MIDI_NOTE_La = 'La';
Blockly.Msg.LABPLUS_UART_PLAY_MIDI_NOTE_Si = 'Si';
Blockly.Msg.LABPLUS_UART_PLAY_MIDI_NOTE = '播放';
Blockly.Msg.LABPLUS_UART_OFF_MIDI_NOTE = '停止';



Blockly.Msg.LABPLUS_UART_OFF_MIDI_NOTE_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E7%94%B5%E5%AD%90%E7%90%B4';
Blockly.Msg.LABPLUS_UART_OFF_MIDI_NOTE_TOOLTIP = '';
Blockly.Msg.LABPLUS_UART_OFF_MIDI_NOTE_MESSAGE0 = 'MIDI模塊停止播放音符 %1';

Blockly.Msg.LABPLUS_UART_INIT_MIDI_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E7%94%B5%E5%AD%90%E7%90%B4';
Blockly.Msg.LABPLUS_UART_INIT_MIDI_TOOLTIP = '';
Blockly.Msg.LABPLUS_UART_INIT_MIDI_MESSAGE0 = '初始化MIDI模塊 %1';

Blockly.Msg.LABPLUS_LINE_FOLLOWER_IS_TRIGGERED_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E5%BE%AA%E8%BF%B9';
Blockly.Msg.LABPLUS_LINE_FOLLOWER_IS_TRIGGERED_TOOLTIP = '';
Blockly.Msg.LABPLUS_LINE_FOLLOWER_IS_TRIGGERED_MESSAGE0 = '循跡傳感器 引腳 %1 檢測為黑';

Blockly.Msg.LABPLUS_TEMPERATURE_SENSOR_HELPURL = 'http://wiki.labplus.cn/index.php?title=LM35%E6%B8%A9%E5%BA%A6';
Blockly.Msg.LABPLUS_TEMPERATURE_SENSOR_TOOLTIP = '';
Blockly.Msg.LABPLUS_TEMPERATURE_SENSOR_MESSAGE0 = 'LM35溫度傳感器 引腳 %1 的值';

Blockly.Msg.LABPLUS_ROTATE_DIMMER_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E6%97%8B%E9%92%AE%E7%94%B5%E4%BD%8D%E5%99%A8';
Blockly.Msg.LABPLUS_ROTATE_DIMMER_TOOLTIP = '';
Blockly.Msg.LABPLUS_ROTATE_DIMMER_MESSAGE0 = '旋轉電位器 引腳 %1 的值';

Blockly.Msg.LABPLUS_SHAKE_DETECTOR_IS_TRIGGERED_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E9%9C%87%E5%8A%A8';
Blockly.Msg.LABPLUS_SHAKE_DETECTOR_IS_TRIGGERED_TOOLTIP = '';
Blockly.Msg.LABPLUS_SHAKE_DETECTOR_IS_TRIGGERED_MESSAGE0 = '震動傳感器 引腳 %1 被觸發';

Blockly.Msg.LABPLUS_LASER_SWITCH_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E6%BF%80%E5%85%89%E5%8F%91%E5%B0%84';
Blockly.Msg.LABPLUS_LASER_SWITCH_TOOLTIP = '';
Blockly.Msg.LABPLUS_LASER_SWITCH_MESSAGE0 = '%1 激光開關 引腳 %2';

Blockly.Msg.LABPLUS_4BUTTON_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E5%9B%9B%E6%8C%89%E9%94%AE';
Blockly.Msg.LABPLUS_4BUTTON_TOOLTIP = '';
Blockly.Msg.LABPLUS_4BUTTON_MESSAGE0 = '四向按鍵模塊 引腳 %1 按鍵 %2 被按下';
Blockly.Msg.BLUE = 'A';
Blockly.Msg.GREEN = 'B';
Blockly.Msg.RED = 'C';
Blockly.Msg.YELLOW = 'D';

Blockly.Msg.LABPLUS_JOYSTICK_HELPURL = '';
Blockly.Msg.LABPLUS_JOYSTICK_TOOLTIP = '';
Blockly.Msg.LABPLUS_JOYSTICK_MESSAGE0 = '搖桿 引腳A0 %1 引腳A1 %2   %3 軸的值';

Blockly.Msg.LABPLUS_UART_MP3_PLAY_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E9%9F%B3%E4%B9%90%E6%92%AD%E6%94%BE';
Blockly.Msg.LABPLUS_UART_MP3_PLAY_TOOLTIP = '';
Blockly.Msg.LABPLUS_UART_MP3_PLAY_MESSAGE0 = 'MP3模塊(UART)播放第 %1 首音樂';

Blockly.Msg.LABPLUS_UART_MP3_SET_VOLUME_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E9%9F%B3%E4%B9%90%E6%92%AD%E6%94%BE';
Blockly.Msg.LABPLUS_UART_MP3_SET_VOLUME_TOOLTIP = '';
Blockly.Msg.LABPLUS_UART_MP3_SET_VOLUME_MESSAGE0 = '設置MP3模塊(UART)音量為 %1';

Blockly.Msg.LABPLUS_UART_MP3_SET_STATUS_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E9%9F%B3%E4%B9%90%E6%92%AD%E6%94%BE';
Blockly.Msg.LABPLUS_UART_MP3_SET_STATUS_TOOLTIP = '';
Blockly.Msg.LABPLUS_UART_MP3_SET_STATUS_MESSAGE0 = '設置MP3模塊(UART)狀態為 %1';
Blockly.Msg.PAUSE = '暫停';
Blockly.Msg.STOP = '停止';
Blockly.Msg.PLAY = '繼續播放';
Blockly.Msg.PLAYNEXT = '下一首';
Blockly.Msg.PLAYPREV = '上一首';

Blockly.Msg.LABPLUS_UART_INIT_HELPURL = 'http://wiki.labplus.cn/index.php?title=Bluebit';
Blockly.Msg.LABPLUS_UART_INIT_TOOLTIP = '';
Blockly.Msg.LABPLUS_UART_INIT_MESSAGE0 = '初始化串口波特率為 %3 TX為 %1 RX為 %2';

Blockly.Msg.LABPLUS_VOICE_RECORD_ON1_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E8%AF%AD%E9%9F%B3%E5%BD%95%E6%94%BE';
Blockly.Msg.LABPLUS_VOICE_RECORD_ON1_TOOLTIP = '';
Blockly.Msg.LABPLUS_VOICE_RECORD_ON1_MESSAGE0 = '打開錄放器 %1 %2 引腳REC %3 引腳PLAY %4';

Blockly.Msg.LABPLUS_VOICE_RECORD_OFF1_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E8%AF%AD%E9%9F%B3%E5%BD%95%E6%94%BE';
Blockly.Msg.LABPLUS_VOICE_RECORD_OFF1_TOOLTIP = '';
Blockly.Msg.LABPLUS_VOICE_RECORD_OFF1_MESSAGE0 = '關閉錄放器 %1 引腳REC %2 引腳PLAY %3';

Blockly.Msg.LABPLUS_MOTOR_ON1_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E7%94%B5%E6%9C%BA%E9%A9%B1%E5%8A%A8';
Blockly.Msg.LABPLUS_MOTOR_ON1_TOOLTIP = '';
Blockly.Msg.LABPLUS_MOTOR_ON1_MESSAGE0 = '打開直流電機 %1 速度 %2 引腳AIN1 %3 引腳AIN2 %4';

Blockly.Msg.LABPLUS_MOTOR_OFF1_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E7%94%B5%E6%9C%BA%E9%A9%B1%E5%8A%A8';
Blockly.Msg.LABPLUS_MOTOR_OFF1_TOOLTIP = '';
Blockly.Msg.LABPLUS_MOTOR_OFF1_MESSAGE0 = '停止直流電機 %1 引腳AIN1 %2 引腳AIN2 %3';

Blockly.Msg.LABPLUS_SET_I2C_LCD1602_CURSOR_HELPURL = 'http://wiki.labplus.cn/index.php?title=1602_LCD';
Blockly.Msg.LABPLUS_SET_I2C_LCD1602_CURSOR_TOOLTIP = '';
Blockly.Msg.LABPLUS_SET_I2C_LCD1602_CURSOR_MESSAGE0 = '設置LCD遊標位置%1 X %2 Y %3';


Blockly.Msg.LABPLUS_SET_I2C_LCD1602_PRINT_HELPURL = 'http://wiki.labplus.cn/index.php?title=1602_LCD';
Blockly.Msg.LABPLUS_SET_I2C_LCD1602_PRINT_TOOLTIP = '';
Blockly.Msg.LABPLUS_SET_I2C_LCD1602_PRINT_MESSAGE0 = '設置LCD顯示 %1';

Blockly.Msg.LABPLUS_SET_I2C_LCD1602_SCROLL_HELPURL = 'http://wiki.labplus.cn/index.php?title=1602_LCD';
Blockly.Msg.LABPLUS_SET_I2C_LCD1602_SCROLL_TOOLTIP = '配合循環次數使用';
Blockly.Msg.LABPLUS_SET_I2C_LCD1602_SCROLL_MESSAGE0 = '%1滾動LCD顯示內容';
Blockly.Msg.LABPLUS_SET_I2C_LCD1602_SCROLL_ALEFT = '向左';
Blockly.Msg.LABPLUS_SET_I2C_LCD1602_SCROLL_RIGHTWARD = '向右';

Blockly.Msg.LABPLUS_SET_I2C_LCD1602_CLEAR_HELPURL = 'http://wiki.labplus.cn/index.php?title=1602_LCD';
Blockly.Msg.LABPLUS_SET_I2C_LCD1602_CLEAR_TOOLTIP = '';
Blockly.Msg.LABPLUS_SET_I2C_LCD1602_CLEAR_MESSAGE0 = '清除LCD顯示內容';

Blockly.Msg.LABPLUS_UART_ANY_MSG_RECEIVED_HELPURL = 'http://wiki.labplus.cn/index.php?title=Bluebit';
Blockly.Msg.LABPLUS_UART_ANY_MSG_RECEIVED_TOOLTIP = '';
Blockly.Msg.LABPLUS_UART_ANY_MSG_RECEIVED_MESSAGE0 = '%1 接收到數據';
Blockly.Msg.BLUEBIT_UART = '串口';
Blockly.Msg.BLUEBIT_INFRARED_SIGNAL = '紅外信號';
Blockly.Msg.BLUEBIT_BLUEBOOTH = '藍牙';
Blockly.Msg.LABPLUS_UART_READ_MSG_HELPURL = 'http://wiki.labplus.cn/index.php?title=Bluebit';
Blockly.Msg.LABPLUS_UART_READ_MSG_TOOLTIP = '';
Blockly.Msg.LABPLUS_UART_READ_MSG_MESSAGE0 = '讀取 %1 數據';
Blockly.Msg.LABPLUS_UART_WRITE_MSG_HELPURL = 'http://wiki.labplus.cn/index.php?title=Bluebit';
Blockly.Msg.LABPLUS_UART_WRITE_MSG_TOOLTIP = '';
Blockly.Msg.LABPLUS_UART_WRITE_MSG_MESSAGE0 = '%1 發送數據 %2';
Blockly.Msg.LABPLUS_SET_I2C_LED_MATRIX_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E7%82%B9%E9%98%B5';
Blockly.Msg.LABPLUS_SET_I2C_LED_MATRIX_TOOLTIP = '';
Blockly.Msg.LABPLUS_SET_I2C_LED_MATRIX_MESSAGE0 = '設置點陣 %1 第一行顯示%2 第二行顯示%3 第三行顯示%4 第四行顯示%5 第五行顯示%6 第六行顯示%7 第七行顯示%8 第八行顯示%9 ';
Blockly.Msg.LABPLUS_SET_I2C_LED_MATRIX_MESSAGE2 = '設置點陣 %1 %2 %3 %4 %5 %6 %7 %8 %9 %10 %11 %12 %13 %14 %15 %16 %17 %18 %19 %20 %21 %22 %23 %24 %25 %26 %27 %28 %29 %30 %31 %32 %33 %34 %35 %36 %37 %38 %39 %40 %41 %42 %43 %44 %45 %46 %47 %48 %49 %50 %51 %52 %53 %54 %55 %56 %57 %58 %59 %60 %61 %62 %63 %64 %65 %66 %67 %68 %69 %70 %71 %72';
Blockly.Msg.LABPLUS_SET_I2C_LED_MATRIX_CLEAR_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E7%82%B9%E9%98%B5';
Blockly.Msg.LABPLUS_SET_I2C_LED_MATRIX_CLEAR_TOOLTIP = '';
Blockly.Msg.LABPLUS_SET_I2C_LED_MATRIX_CLEAR_MESSAGE0 = '清空點陣';
Blockly.Msg.LABPLUS_UART_SET_OLED_HELPURL = 'http://wiki.labplus.cn/index.php?title=OLED';
Blockly.Msg.LABPLUS_UART_SET_OLED_TOOLTIP = '';
Blockly.Msg.LABPLUS_UART_SET_OLED_MESSAGE0 = '設置OLED屏 %1 X %2 Y %3 顯示文本 %4 字體為 %5';
Blockly.Msg.LABPLUS_UART_SET_OLED_CLEAR_HELPURL = 'http://wiki.labplus.cn/index.php?title=OLED';
Blockly.Msg.LABPLUS_UART_SET_OLED_CLEAR_TOOLTIP = '';
Blockly.Msg.LABPLUS_UART_SET_OLED_CLEAR_MESSAGE0 = '在OLED屏上擦除矩陣 %1 X1 %2 Y1 %3 X2 %4 Y2 %5';
Blockly.Msg.LABPLUS_UART_SET_OLED_CLEAR_ALL_MESSAGE0 = '清空OLED屏';
Blockly.Msg.LABPLUS_UART_SET_OLED_CLEAR_ALL_HELPURL = 'http://wiki.labplus.cn/index.php?title=OLED';
Blockly.Msg.LABPLUS_UART_SET_OLED_CLEAR_ALL_TOOLTIP = '';
Blockly.Msg.LABPLUS_LIGHT_SENSOR_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E6%A8%A1%E6%8B%9F%E5%85%89%E7%BA%BF';
Blockly.Msg.LABPLUS_LIGHT_SENSOR_TOOLTIP = '';
Blockly.Msg.LABPLUS_LIGHT_SENSOR_MESSAGE0 = '模擬光線傳感器 引腳 %1 的值';
Blockly.Msg.LABPLUS_BUTTON_MODULE_IS_PRESSED_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/i2c.html';
Blockly.Msg.LABPLUS_BUTTON_MODULE_IS_PRESSED_TOOLTIP = '';
Blockly.Msg.LABPLUS_BUTTON_MODULE_IS_PRESSED_MESSAGE0 = '按鍵模塊 引腳 %1 被按下';

Blockly.Msg.MICROBIT_EXT2_SET_SERVO_HELPURL = 'http://wiki.labplus.cn/index.php?title=Extend:bit%E2%85%A1';
Blockly.Msg.MICROBIT_EXT2_SET_SERVO_TOOLTIP = '';
Blockly.Msg.MICROBIT_EXT2_SET_SERVO_MESSAGE0 = '設置舵機 %1 的角度為 %2';
Blockly.Msg.MICROBIT_EXT2_SET_MOTOR_HELPURL = 'http://wiki.labplus.cn/index.php?title=Extend:bit%E2%85%A1';
Blockly.Msg.MICROBIT_EXT2_SET_MOTOR_TOOLTIP = '';
Blockly.Msg.MICROBIT_EXT2_SET_MOTOR_MESSAGE0 = '設置馬達 %1 方向 %2 速度 %3';
Blockly.Msg.MICROBIT_EXT2_STOP_MOTOR_HELPURL = 'http://wiki.labplus.cn/index.php?title=Extend:bit%E2%85%A1';
Blockly.Msg.MICROBIT_EXT2_STOP_MOTOR_TOOLTIP = '';
Blockly.Msg.MICROBIT_EXT2_STOP_MOTOR_MESSAGE0 = '停止馬達 %1';
Blockly.Msg.MICROBIT_EXT2_SOUND_VALUE_MESSAGE0 = '聲音傳感器的值';
Blockly.Msg.MICROBIT_EXT2_SOUND_VALUE_HELPURL = 'http://wiki.labplus.cn/index.php?title=Extend:bit%E2%85%A1';
Blockly.Msg.MICROBIT_EXT2_SOUND_VALUE_TOOLTIP = '';
Blockly.Msg.MICROBIT_EXT2_LIGHT_VALUE_MESSAGE0 = '光線傳感器的值';
Blockly.Msg.MICROBIT_EXT2_LIGHT_VALUE_HELPURL = 'http://wiki.labplus.cn/index.php?title=Extend:bit%E2%85%A1';
Blockly.Msg.MICROBIT_EXT2_LIGHT_VALUE_TOOLTIP = '';

Blockly.Msg.MICROBIT_INIT_I2C_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/i2c.html';
Blockly.Msg.MICROBIT_INIT_I2C_TOOLTIP = '';
Blockly.Msg.MICROBIT_INIT_I2C_MESSAGE0 = '初始化I2C 頻率 %1 引腳SDA %2 引腳SCL %3';
Blockly.Msg.MICROBIT_I2C_READ_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/i2c.html';
Blockly.Msg.MICROBIT_I2C_READ_TOOLTIP = '';
Blockly.Msg.MICROBIT_I2C_READ_MESSAGE0 = 'I2C讀取從地址 %1 讀取 %2 字節';
Blockly.Msg.MICROBIT_I2C_WRITE_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/i2c.html';
Blockly.Msg.MICROBIT_I2C_WRITE_TOOLTIP = '';
Blockly.Msg.MICROBIT_I2C_WRITE_MESSAGE0 = 'I2C寫入 %2 到地址 %1';
Blockly.Msg.MICROBIT_CONVERT_BYTEARRAY_HELPURL = 'https://microbit-micropython.readthedocs.io/en/latest/i2c.html';
Blockly.Msg.MICROBIT_CONVERT_BYTEARRAY_TOOLTIP = '';
Blockly.Msg.MICROBIT_CONVERT_BYTEARRAY_MESSAGE0 = 'bytearray %1';

Blockly.Msg.BOTBIT_MOTOR_ON_HELPURL = '';
Blockly.Msg.BOTBIT_MOTOR_ON_TOOLTIP = '範圍：-2000~2000';
Blockly.Msg.BOTBIT_MOTOR_ON_MESSAGE0 = '設置機器人 %1 右輪速度為 %2 左輪速度為 %3';
Blockly.Msg.BOTBIT_MOTOR_LEFT = '左';
Blockly.Msg.BOTBIT_MOTOR_RIGHT = '右';
Blockly.Msg.BOTBIT_SERVO_UP = '上方';
Blockly.Msg.BOTBIT_SERVO_DOWN = '下方';
Blockly.Msg.BOTBIT_MOTOR_FORWARD = '前進';
Blockly.Msg.BOTBIT_MOTOR_BACKWARD = '後退';

Blockly.Msg.BOTBIT_HOLDBALL_HELPURL = '';
Blockly.Msg.BOTBIT_HOLDBALL_TOOLTIP = '';
Blockly.Msg.BOTBIT_HOLDBALL_MESSAGE0 = '雙臂抱起';

Blockly.Msg.BOTBIT_STEERING_ENGINEL_HELPURL = '';
Blockly.Msg.BOTBIT_STEERING_ENGINEL_TOOLTIP = '角度範圍為-45°~45°';
Blockly.Msg.BOTBIT_STEERING_ENGINEL_MESSAGE0 = '設置 %1臂 %2的角度為 %3';
Blockly.Msg.BOTBIT_SERVO_Y = 'Y軸舵機';
Blockly.Msg.BOTBIT_SERVO_X = 'X軸舵機';

Blockly.Msg.BOTBIT_STEERING_ENGINE_LEG_HELPURL = '';
Blockly.Msg.BOTBIT_STEERING_ENGINE_LEG_TOOLTIP = '角度範圍為-45°~45°';
Blockly.Msg.BOTBIT_STEERING_ENGINE_LEG_MESSAGE0 = '設置 %1腿 %2舵機的角度為 %3';

Blockly.Msg.BOTBIT_UPDATEPOSITION_HELPURL = '';
Blockly.Msg.BOTBIT_UPDATEPOSITION_TOOLTIP = '';
Blockly.Msg.BOTBIT_UPDATEPOSITION_MESSAGE0 = '刷新舵機角度';

Blockly.Msg.BOTBIT_ULTRASONIC_HELPURL = '';
Blockly.Msg.BOTBIT_ULTRASONIC_TOOLTIP = '';
Blockly.Msg.BOTBIT_ULTRASONIC_MESSAGE0 = '超聲波傳感器的值';

Blockly.Msg.BOTBIT_WALKING_HELPURL = '';
Blockly.Msg.BOTBIT_WALKING_TOOLTIP = '周期越短, 速度越快, 推薦1000~2000';
Blockly.Msg.BOTBIT_WALKING_MESSAGE0 = '舞步(walking) 步數%2 周期%3 方向%1 ';
Blockly.Msg.BOTBIT_WALKING_FORWARD = '前';
Blockly.Msg.BOTBIT_WALKING_BACK = '後';

Blockly.Msg.BOTBIT_MOONWALKER_HELPURL = '';
Blockly.Msg.BOTBIT_MOONWALKER_TOOLTIP = '推薦周期1000~2000, 幅度10~50';
Blockly.Msg.BOTBIT_MOONWALKER_MESSAGE0 = '舞步(moonwalker) 步數%2 周期%3 幅度%4 方向%1 ';
Blockly.Msg.BOTBIT_MOONWALKER_L = '左';
Blockly.Msg.BOTBIT_MOONWALKER_R = '右';

Blockly.Msg.BOTBIT_CRUSAITO_HELPURL = '';
Blockly.Msg.BOTBIT_CRUSAITO_TOOLTIP = '推薦步數2~10, 幅度10~50';
Blockly.Msg.BOTBIT_CRUSAITO_MESSAGE0 = '舞步(crusaito) 步數%2 周期%3 幅度%4 方向%1';
Blockly.Msg.BOTBIT_CRUSAITO_CW = '逆時針';
Blockly.Msg.BOTBIT_CRUSAITO_ANTICW = '順時針';

Blockly.Msg.BOTBIT_FLAPPING_HELPURL = '';
Blockly.Msg.BOTBIT_FLAPPING_TOOLTIP = '推薦步數5~15, 幅度10~30, 周期1000~2000';
Blockly.Msg.BOTBIT_FLAPPING_MESSAGE0 = '舞步(flapping) 步數%2 周期%3 幅度%4 方向%1';
Blockly.Msg.BOTBIT_FLAPPING_FORWARD = '前';
Blockly.Msg.BOTBIT_FLAPPING_BACK = '後';

Blockly.Msg.BOTBIT_HOME_HELPURL = '';
Blockly.Msg.BOTBIT_HOME_TOOLTIP = '';
Blockly.Msg.BOTBIT_HOME_MESSAGE0 = '機器人舞步初始化';

Blockly.Msg.LABPLUS_UART_SET_MIDI_VOL_HELPURL = 'http://wiki.labplus.cn/index.php?title=MIDI(%E7%94%B5%E5%AD%90%E7%90%B4)';
Blockly.Msg.LABPLUS_UART_SET_MIDI_VOL_TOOLTIP = '';
Blockly.Msg.LABPLUS_UART_SET_MIDI_VOL_MESSAGE0 = '設置MIDI模塊音量為 %1';

//映射數字範圍，放在math目錄裏
Blockly.Msg.labplus_mapping_MESSAGE0 = '映射%1 從%2 , %3到%4 , %5'
Blockly.Msg.labplus_mapping_TOOLTIP = '將0~100中的10映射到0~200中並返回映射值'
Blockly.Msg.labplus_mapping_HELPURL = ''


Blockly.Msg.JOINT_MIDI_PIANO = "平臺鋼琴"; //Acoustic Grand Piano
Blockly.Msg.JOINT_MIDI_BRIGHTACOUSTICPIANO = "亮音鋼琴";
Blockly.Msg.JOINT_MIDI_ELECTRICGRANDPIANO = "電鋼琴";
Blockly.Msg.JOINT_MIDI_HARPSICHORD = "大鍵琴";
Blockly.Msg.JOINT_MIDI_Celesta = "鋼片琴";
Blockly.Msg.JOINT_MIDI_Glockenspiel = "鐘琴";
Blockly.Msg.JOINT_MIDI_Musicalbox = "音樂盒";
Blockly.Msg.JOINT_MIDI_Marimba = "馬林巴琴";
Blockly.Msg.JOINT_MIDI_Xylophone = "木琴";
Blockly.Msg.JOINT_MIDI_TubularBell = "管鐘";
Blockly.Msg.JOINT_MIDI_Dulcimer = "洋琴";
Blockly.Msg.JOINT_Vibraphone = "顫音琴"; //Vibraphone
Blockly.Msg.JOINT_MIDI_ORGAN = "音栓風琴"; //Drawbar Organ
Blockly.Msg.JOINT_Acoustic_Guitar = "木吉他"; //Acoustic Guitar
Blockly.Msg.JOINT_Electric_Guitar = "電吉他"; //Electric Guitar
Blockly.Msg.JOINT_Acoustic_Bass = "民謠貝斯";  //Acoustic Bass
Blockly.Msg.JOINT_String_Ensemble = "弦樂合奏";  //String Ensemble
Blockly.Msg.JOINT_Violin = "小提琴";  //Violin
Blockly.Msg.JOINT_Trumpet = "小號";  //Trumpet
Blockly.Msg.JOINT_Sax = "薩克斯";  //Sax
Blockly.Msg.JOINT_Steel_Drums = "鋼鼓";  //Steel Drums
Blockly.Msg.JOINT_Lead = "合成音主旋律";  //Lead
Blockly.Msg.JOINT_Pad = "合成音襯底";  //Pad

Blockly.Msg.LABPLUS_PLAY_BUZZER_NOTE_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E8%9C%82%E9%B8%A3%E5%99%A8';
Blockly.Msg.LABPLUS_PLAY_BUZZER_NOTE_TOOLTIP = '';
Blockly.Msg.LABPLUS_PLAY_BUZZER_NOTE_MESSAGE0 ='播放音調 %1';

Blockly.Msg.Carbit_init_MESSAGE0 = 'CarBit初始化';
Blockly.Msg.Carbit_init_TOOLTIP = '';
Blockly.Msg.Carbit_init_HELPURL = 'http://wiki.labplus.cn/index.php?title=Car:bit';

Blockly.Msg.Carbit_setLeftMotor_MESSAGE0 = 'B2電機速度 %1';
Blockly.Msg.Carbit_setLeftMotor_TOOLTIP = '範圍：-100~100';
Blockly.Msg.Carbit_setLeftMotor_HELPURL = 'http://wiki.labplus.cn/index.php?title=Car:bit';

Blockly.Msg.Carbit_setRightMotor_MESSAGE0 = 'B1電機速度 %1';
Blockly.Msg.Carbit_setRightMotor_TOOLTIP = '範圍：-100~100';
Blockly.Msg.Carbit_setRightMotor_HELPURL = 'http://wiki.labplus.cn/index.php?title=Car:bit';

Blockly.Msg.Carbit_analog_light_HELPURL = 'http://wiki.labplus.cn/index.php?title=Car:bit';
Blockly.Msg.Carbit_analog_light_TOOLTIP = 'Q3對應Pin1，Q4對應Pin2';
Blockly.Msg.Carbit_analog_light_MESSAGE0 = '%1 模擬光線的值';

Blockly.Msg.Carbit_Speed_U10_HELPURL = 'http://wiki.labplus.cn/index.php?title=Car:bit';
Blockly.Msg.Carbit_Speed_U10_TOOLTIP = '對應U10';
Blockly.Msg.Carbit_Speed_U10_MESSAGE0 = '左輪速度';

Blockly.Msg.Carbit_Speed_U11_HELPURL = 'http://wiki.labplus.cn/index.php?title=Car:bit';
Blockly.Msg.Carbit_Speed_U11_TOOLTIP = '對應U11';
Blockly.Msg.Carbit_Speed_U11_MESSAGE0 = '右輪速度';

Blockly.Msg.Carbit_Distance_HELPURL= 'http://wiki.labplus.cn/index.php?title=Car:bit';
Blockly.Msg.Carbit_Distance_TOOLTIP= '';
Blockly.Msg.Carbit_Distance_MESSAGE0= '超聲波的值';

Blockly.Msg.Carbit_tracking_HELPURL = 'http://wiki.labplus.cn/index.php?title=Car:bit';
Blockly.Msg.Carbit_tracking_TOOLTIP = '';
Blockly.Msg.Carbit_tracking_MESSAGE0 = '循跡參數 %1 直行速度 %2 最大限速 %3 轉彎延時 %5 轉彎速度系數 %4 ';
/* 掌控板end */
/* Blockly.Msg.LABPLUS_OFF_BUZZER_NOTE_HELPURL = 'http://wiki.labplus.cn/index.php?title=%E8%9C%82%E9%B8%A3%E5%99%A8';
Blockly.Msg.LABPLUS_OFF_BUZZER_NOTE_TOOLTIP = '';
Blockly.Msg.LABPLUS_OFF_BUZZER_NOTE_MESSAGE0 = '蜂鳴器%1關閉音調 %2' */


/* Blockly.Msg.JOINT_Bass_Drum = "大鼓";  //Bass Drum
Blockly.Msg.JOINT_Snare_Drum = "小鼓";  //Snare Drum
Blockly.Msg.JOINT_Closed_Hi_hat = "閉合開合鈸";  //Closed Hi-hat
Blockly.Msg.JOINT_Open_Hi_hat = "開放開合鈸";  //Open Hi-hat
Blockly.Msg.JOINT_Low_Tom = "低音筒鼓";  //Low Tom
Blockly.Msg.JOINT_High_Tom = "高音筒鼓";  //High Tom
Blockly.Msg.JOINT_Tambourine = "鈴鼓";  //Tambourine
Blockly.Msg.JOINT_Crash_Cymbal = "強音鈸";  //Crash Cymbal
Blockly.Msg.JOINT_Ride_Cymbal = "打點鈸";  //Ride Cymbal
Blockly.Msg.JOINT_Mute_High_Conga = "高音康加鼓";  //Mute High Conga
Blockly.Msg.JOINT_Low_Conga = "低音康加鼓";  //Low Conga
Blockly.Msg.JOINT_Maracas = "沙錘";  //Maracas
Blockly.Msg.JOINT_Claves = "擊木";  //Claves */




//新tts
Blockly.Msg.XUNFEI_SPEECH_TTS_HELPURL = '';
Blockly.Msg.XUNFEI_SPEECH_TTS_TOOLTIP = '合成音頻文件格式只能是 *.pcm';
Blockly.Msg.XUNFEI_SPEECH_TTS_MESSAGE0 = '[訊飛語音] 合成音頻 %1 APPID %2 APISecret %3 APIKey %4 文字內容 %5 轉存為音頻文件 %6';

Blockly.Msg.XUNFEI_SPEECH_IAT_HELPURL = '';
Blockly.Msg.XUNFEI_SPEECH_IAT_TOOLTIP = '可識別的音頻格式有 *.pcm 與 *.wav';
Blockly.Msg.XUNFEI_SPEECH_IAT_MESSAGE0 = '[訊飛語音] 識別音頻 %1 APPID %2 APISecret %3 APIKey %4 待識別音頻文件 %5';

Blockly.Msg.XUNFEI_SPEECH_IAT_RESULT_HELPURL = '';
Blockly.Msg.XUNFEI_SPEECH_IAT_RESULT_TOOLTIP = '';
Blockly.Msg.XUNFEI_SPEECH_IAT_RESULT_MESSAGE0 = '[訊飛語音] 識別結果';

//掌控板AI
Blockly.Msg.MPYTHON_ZKAI_LCD_INIT_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/lcd.html#lcdinittype1-freq15000000-colorlcdblack';
Blockly.Msg.MPYTHON_ZKAI_LCD_INIT_MESSAGE0 = 'LCD 屏幕初始化';
Blockly.Msg.MPYTHON_ZKAI_LCD_INIT_TOOLTIP = '初始化 LCD 屏幕显示';

Blockly.Msg.MPYTHON_ZKAI_LCD_ROTATION_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/lcd.html#lcddirectiondir';
Blockly.Msg.MPYTHON_ZKAI_LCD_ROTATION_MESSAGE0 = 'LCD 屏幕方向%1';
Blockly.Msg.MPYTHON_ZKAI_LCD_ROTATION_TOOLTIP = '设置 LCD 屏幕方向,取值范围 [0,3]， 从0到3依次顺时针旋转';

Blockly.Msg.MPYTHON_ZKAI_SENSOR_RESET_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/sensor.html#%E5%8D%95%E7%9B%AE%E6%91%84%E5%83%8F%E5%A4%B4%E9%87%8D%E7%BD%AE%E5%87%BD%E6%95%B0';
Blockly.Msg.MPYTHON_ZKAI_SENSOR_RESET_MESSAGE0 = '摄像头 初始化';
Blockly.Msg.MPYTHON_ZKAI_SENSOR_RESET_TOOLTIP = '初始化单目摄像头';

Blockly.Msg.MPYTHON_ZKAI_SENSOR_ENABLE_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/sensor.html#%E8%8E%B7%E5%8F%96%E5%9B%BE%E5%83%8F';
Blockly.Msg.MPYTHON_ZKAI_SENSOR_ENABLE_MESSAGE0 = '摄像头%1';
Blockly.Msg.MPYTHON_ZKAI_SENSOR_ENABLE_TOOLTIP = '获取图像';

Blockly.Msg.MPYTHON_ZKAI_LCD_WIDTHANDHEIGHT_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/lcd.html#lcdwidth';
Blockly.Msg.MPYTHON_ZKAI_LCD_WIDTHANDHEIGHT_MESSAGE0 = 'LCD 获取%1';
Blockly.Msg.MPYTHON_ZKAI_LCD_WIDTHANDHEIGHT_TOOLTIP = '返回 LCD 的宽度（水平分辨率）;高度（垂直分辨率）';

Blockly.Msg.MPYTHON_ZKAI_LCD_MI_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/lcd.html#lcddirectiondir';
Blockly.Msg.MPYTHON_ZKAI_LCD_MI_MESSAGE0 = 'LCD 设置镜像';
Blockly.Msg.MPYTHON_ZKAI_LCD_MI_TOOLTIP = '设置是否镜像';

Blockly.Msg.MPYTHON_ZKAI_LCD_TEXT_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/lcd.html#%E4%BE%8B%E7%A8%8B-1%EF%BC%9A-%E6%98%BE%E7%A4%BA%E8%8B%B1%E6%96%87';
Blockly.Msg.MPYTHON_ZKAI_LCD_TEXT_MESSAGE0 = '显示文本 x %1 y %2 内容 %3';
Blockly.Msg.MPYTHON_ZKAI_LCD_TEXT_TOOLTIP = '仅支持字母和数字';

Blockly.Msg.MPYTHON_ZKAI_SENSOR_OffOn_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/sensor.html#%E5%85%B3%E9%97%AD%E6%91%84%E5%83%8F%E5%A4%B4';
Blockly.Msg.MPYTHON_ZKAI_SENSOR_OffOn_MESSAGE0 = '摄像头%1';
Blockly.Msg.MPYTHON_ZKAI_SENSOR_OffOn_TOOLTIP = '1 表示开启摄像头 0 表示关闭摄像头';

Blockly.Msg.MPYTHON_ZKAI_SENSOR_SKIP_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/sensor.html#%E8%B7%B3%E5%B8%A7';
Blockly.Msg.MPYTHON_ZKAI_SENSOR_SKIP_MESSAGE0 = '摄像头 跳过帧数%1 毫秒%2内的图像 ';
Blockly.Msg.MPYTHON_ZKAI_SENSOR_SKIP_TOOLTIP = '摄像头跳过指定帧数或者跳过指定时间内的图像';

Blockly.Msg.MPYTHON_ZKAI_SENSOR_RETURN_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/sensor.html#%E5%88%86%E8%BE%A8%E7%8E%87%E5%AE%BD%E5%BA%A6';
Blockly.Msg.MPYTHON_ZKAI_SENSOR_RETURN_MESSAGE0 = '摄像头 获取%1';
Blockly.Msg.MPYTHON_ZKAI_SENSOR_RETURN_TOOLTIP = '(ZKAI)摄像头返回参数(宽高，获取帧缓冲，获取ID)';

Blockly.Msg.MPYTHON_ZKAI_SENSOR_SETS_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/sensor.html#%E8%AE%BE%E7%BD%AE%E5%AF%B9%E6%AF%94%E5%BA%A6';
Blockly.Msg.MPYTHON_ZKAI_SENSOR_SETS_MESSAGE0 = '摄像头 设置%1 为%2';
Blockly.Msg.MPYTHON_ZKAI_SENSOR_SETS_TOOLTIP = '设置摄像头对比度，亮度，饱和度范围为[-2,+2]';

Blockly.Msg.MPYTHON_ZKAI_SENSOR_AUTO_GAIN_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/sensor.html#%E8%AE%BE%E7%BD%AE%E8%87%AA%E5%8A%A8%E5%A2%9E%E7%9B%8A';
Blockly.Msg.MPYTHON_ZKAI_SENSOR_AUTO_GAIN_MESSAGE0 = '摄像头 自动增益%1';
Blockly.Msg.MPYTHON_ZKAI_SENSOR_AUTO_GAIN_TOOLTIP = '1开启摄像头自动增益 0关闭摄像头自动增益';

Blockly.Msg.MPYTHON_ZKAI_SENSOR_ACQUIRE_AUTO_GAIN_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/sensor.html#%E8%8E%B7%E5%8F%96%E5%A2%9E%E7%9B%8A%E5%80%BC';
Blockly.Msg.MPYTHON_ZKAI_SENSOR_ACQUIRE_AUTO_GAIN_MESSAGE0 = '摄像头 获取增益值';
Blockly.Msg.MPYTHON_ZKAI_SENSOR_ACQUIRE_AUTO_GAIN_TOOLTIP = '获取摄像头增益值';

Blockly.Msg.MPYTHON_ZKAI_SENSOR_LEVEL_MI_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/sensor.html#%E8%AE%BE%E7%BD%AE%E6%B0%B4%E5%B9%B3%E9%95%9C%E5%83%8F';
Blockly.Msg.MPYTHON_ZKAI_SENSOR_LEVEL_MI_MESSAGE0 = '摄像头 水平镜像%1';
Blockly.Msg.MPYTHON_ZKAI_SENSOR_LEVEL_MI_TOOLTIP = '1 表示开启水平镜像 0 表示关闭水平镜像';

//掌控板追踪颜色
Blockly.Msg.MPYTHON_ZKAI_IMAGE_LAB_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/image.html#%E4%BE%8B%E7%A8%8B-1%EF%BC%9A-%E6%89%BE%E7%BB%BF%E8%89%B2';
Blockly.Msg.MPYTHON_ZKAI_IMAGE_LAB_MESSAGE0 = '寻找颜色 LAB值%1';
Blockly.Msg.MPYTHON_ZKAI_IMAGE_LAB_TOOLTIP = 'image寻找颜色';

Blockly.Msg.MPYTHON_ZKAI_TRACE_COLOR_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.image.find_blobs';
Blockly.Msg.MPYTHON_ZKAI_TRACE_COLOR_MESSAGE0 = '(掌控AI)追蹤色塊 LAB顏色%1 邊界框小於%2 像素小於%3 過濾';
Blockly.Msg.MPYTHON_ZKAI_TRACE_COLOR_TOOLTIP = '追蹤色塊';

Blockly.Msg.MPYTHON_ZKAI_TRACE_CILOR_DISPLAYTEN_HELPURL = '';
Blockly.Msg.MPYTHON_ZKAI_TRACE_CILOR_DISPLAYTEN_MESSAGE0 = '(掌控AI)追蹤色塊 顯示%1';
Blockly.Msg.MPYTHON_ZKAI_TRACE_CILOR_DISPLAYTEN_TOOLTIP = '';

Blockly.Msg.MPYTHON_ZKAI_BLOB_ALL_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#blob';
Blockly.Msg.MPYTHON_ZKAI_BLOB_ALL_MESSAGE0 = '(掌控AI)%1獲取識別後色塊的 所有參數';
Blockly.Msg.MPYTHON_ZKAI_BLOB_ALL_TOOLTIP = '返回blob 類 -- 色塊對象';

Blockly.Msg.MPYTHON_ZKAI_BLOB_X_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#blob';
Blockly.Msg.MPYTHON_ZKAI_BLOB_X_MESSAGE0 = '(掌控AI)%1獲取識別後色塊的 x座標';
Blockly.Msg.MPYTHON_ZKAI_BLOB_X_TOOLTIP = '返回blob 類 -- 色塊對象';

Blockly.Msg.MPYTHON_ZKAI_BLOB_Y_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#blob';
Blockly.Msg.MPYTHON_ZKAI_BLOB_Y_MESSAGE0 = '(掌控AI)%1獲取識別後色塊的 y座標';
Blockly.Msg.MPYTHON_ZKAI_BLOB_Y_TOOLTIP = '返回blob 類 -- 色塊對象';

Blockly.Msg.MPYTHON_ZKAI_BLOB_W_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#blob';
Blockly.Msg.MPYTHON_ZKAI_BLOB_W_MESSAGE0 = '(掌控AI)%1獲取識別後色塊的 寬度';
Blockly.Msg.MPYTHON_ZKAI_BLOB_W_TOOLTIP = '返回blob 類 -- 色塊對象';

Blockly.Msg.MPYTHON_ZKAI_BLOB_H_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#blob';
Blockly.Msg.MPYTHON_ZKAI_BLOB_H_MESSAGE0 = '(掌控AI)%1獲取識別後色塊的 高度';
Blockly.Msg.MPYTHON_ZKAI_BLOB_H_TOOLTIP = '返回blob 類 -- 色塊對象';

Blockly.Msg.MPYTHON_ZKAI_BLOB_NUMBER_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#blob';
Blockly.Msg.MPYTHON_ZKAI_BLOB_NUMBER_MESSAGE0 = '(掌控AI)%1獲取識別後色塊的 數量';
Blockly.Msg.MPYTHON_ZKAI_BLOB_NUMBER_TOOLTIP = '返回blob 類 -- 色塊對象';

Blockly.Msg.MPYTHON_ZKAI_BLOB_CENTER_X_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#blob';
Blockly.Msg.MPYTHON_ZKAI_BLOB_CENTER_X_MESSAGE0 = '(掌控AI)%1獲取識別後色塊的 中心x座標';
Blockly.Msg.MPYTHON_ZKAI_BLOB_CENTER_X_TOOLTIP = '返回blob 類 -- 色塊對象';

Blockly.Msg.MPYTHON_ZKAI_BLOB_CENTER_Y_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#blob';
Blockly.Msg.MPYTHON_ZKAI_BLOB_CENTER_Y_MESSAGE0 = '(掌控AI)%1獲取識別後色塊的 中心y座標';
Blockly.Msg.MPYTHON_ZKAI_BLOB_CENTER_Y_TOOLTIP = '返回blob 類 -- 色塊對象';

Blockly.Msg.MPYTHON_ZKAI_BLOB_ORTHOGON_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#blob';
Blockly.Msg.MPYTHON_ZKAI_BLOB_ORTHOGON_MESSAGE0 = '(掌控AI)%1獲取識別後色塊的 矩形';
Blockly.Msg.MPYTHON_ZKAI_BLOB_ORTHOGON_TOOLTIP = '返回blob 類 -- 色塊對象';

//掌控板人脸识别
Blockly.Msg.MPYTHON_ZKAI2_FACE_TRACKING_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.model.select_model';
Blockly.Msg.MPYTHON_ZKAI2_FACE_TRACKING_MESSAGE0 = '(掌控AI)選擇訓練模型 人臉';
Blockly.Msg.MPYTHON_ZKAI2_FACE_TRACKING_TOOLTIP = '可以識別並且追蹤人臉，顯示人臉大小等';

Blockly.Msg.MPYTHON_ZKAI2_PHOTOGRAPH_TRACKING_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.model.select_model';
Blockly.Msg.MPYTHON_ZKAI2_PHOTOGRAPH_TRACKING_MESSAGE0 = '(掌控AI)調用攝像頭進行 人臉識別';
Blockly.Msg.MPYTHON_ZKAI2_PHOTOGRAPH_TRACKING_TOOLTIP = '調用攝像頭進行 人臉識別';

Blockly.Msg.MPYTHON_ZKAI2_RESULT_FACE_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.model.select_model';
Blockly.Msg.MPYTHON_ZKAI2_RESULT_FACE_MESSAGE0 = '(掌控AI)獲取識別後人臉的 所有參數';
Blockly.Msg.MPYTHON_ZKAI2_RESULT_FACE_TOOLTIP = '獲取識別後人臉的 所有參數';

Blockly.Msg.MPYTHON_ZKAI2_RESULT_FACE_X_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.model.select_model';
Blockly.Msg.MPYTHON_ZKAI2_RESULT_FACE_X_MESSAGE0 = '(掌控AI)獲取識別後人臉的 x座標';
Blockly.Msg.MPYTHON_ZKAI2_RESULT_FACE_X_TOOLTIP = '獲取識別後人臉的 x座標';

Blockly.Msg.MPYTHON_ZKAI2_RESULT_FACE_Y_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.model.select_model';
Blockly.Msg.MPYTHON_ZKAI2_RESULT_FACE_Y_MESSAGE0 = '(掌控AI)獲取識別後人臉的 y座標';
Blockly.Msg.MPYTHON_ZKAI2_RESULT_FACE_Y_TOOLTIP = '獲取識別後人臉的 y座標';

Blockly.Msg.MPYTHON_ZKAI2_RESULT_FACE_W_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.model.select_model';
Blockly.Msg.MPYTHON_ZKAI2_RESULT_FACE_W_MESSAGE0 = '(掌控AI)獲取識別後人臉的 寬度';
Blockly.Msg.MPYTHON_ZKAI2_RESULT_FACE_W_TOOLTIP = '獲取識別後人臉的 寬度';

Blockly.Msg.MPYTHON_ZKAI2_RESULT_FACE_H_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.model.select_model';
Blockly.Msg.MPYTHON_ZKAI2_RESULT_FACE_H_MESSAGE0 = '(掌控AI)獲取識別後人臉的 高度';
Blockly.Msg.MPYTHON_ZKAI2_RESULT_FACE_H_TOOLTIP = '獲取識別後人臉的 高度';

Blockly.Msg.MPYTHON_ZKAI2_RESULT_FACE_VALUE_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.model.select_model';
Blockly.Msg.MPYTHON_ZKAI2_RESULT_FACE_VALUE_MESSAGE0 = '(掌控AI)獲取識別後人臉的 置信度';
Blockly.Msg.MPYTHON_ZKAI2_RESULT_FACE_VALUE_TOOLTIP = '獲取識別後人臉的 置信度';

Blockly.Msg.MPYTHON_ZKAI2_RESULT_FACE_OBJNUM_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.model.select_model';
Blockly.Msg.MPYTHON_ZKAI2_RESULT_FACE_OBJNUM_MESSAGE0 = '(掌控AI)獲取識別後人臉的 數量';
Blockly.Msg.MPYTHON_ZKAI2_RESULT_FACE_OBJNUM_TOOLTIP = '獲取識別後人臉的 數量';

Blockly.Msg.MPYTHON_ZKAI_LCD_DISPLAY_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/lcd.html#lcddisplayimage-roiauto';
Blockly.Msg.MPYTHON_ZKAI_LCD_DISPLAY_MESSAGE0 = 'LCD 显示生效';
Blockly.Msg.MPYTHON_ZKAI_LCD_DISPLAY_TOOLTIP = '可以在液晶屏上显示一张 image';

Blockly.Msg.MPYTHON_ZKAI_SENSOR_IMAGES_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/sensor.html#%E8%8E%B7%E5%8F%96%E5%9B%BE%E5%83%8F';
Blockly.Msg.MPYTHON_ZKAI_SENSOR_IMAGES_MESSAGE0 = '摄像头 获取图像';
Blockly.Msg.MPYTHON_ZKAI_SENSOR_IMAGES_TOOLTIP = '控制摄像头捕捉图像';

//掌控板20分类
Blockly.Msg.MPYTHON_ZKAI2_20class_TRACKING_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.model.select_model';
Blockly.Msg.MPYTHON_ZKAI2_20class_TRACKING_MESSAGE0 = '(掌控AI)選擇訓練模型 20類';
Blockly.Msg.MPYTHON_ZKAI2_20class_TRACKING_TOOLTIP = '可以識別20個類型，分別是0-19爲飛機,自行車,鳥,船,瓶子,公交車,汽車,貓,椅子,奶牛,餐桌,狗,屋子,摩托車,人,盆栽,羊,沙發,火車,電視';

Blockly.Msg.MPYTHON_ZKAI2_PHOTOGRAPH_20TRACKING_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.model.select_model';
Blockly.Msg.MPYTHON_ZKAI2_PHOTOGRAPH_20TRACKING_MESSAGE0 = '(掌控AI)調用攝像頭進行 20類識別';
Blockly.Msg.MPYTHON_ZKAI2_PHOTOGRAPH_20TRACKING_TOOLTIP = '調用攝像頭進行 20類識別';

Blockly.Msg.MPYTHON_ZKAI2_RESULT_20CLASS_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.model.select_model';
Blockly.Msg.MPYTHON_ZKAI2_RESULT_20CLASS_MESSAGE0 = '(掌控AI)獲取識別後20類的 所有參數';
Blockly.Msg.MPYTHON_ZKAI2_RESULT_20CLASS_TOOLTIP = '獲取識別後20類的 所有參數';

Blockly.Msg.MPYTHON_ZKAI2_RESULT_20CLASS_X_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.model.select_model';
Blockly.Msg.MPYTHON_ZKAI2_RESULT_20CLASS_X_MESSAGE0 = '(掌控AI)獲取識別後20類的 x座標';
Blockly.Msg.MPYTHON_ZKAI2_RESULT_20CLASS_X_TOOLTIP = '獲取識別後20類的 x座標';

Blockly.Msg.MPYTHON_ZKAI2_RESULT_20CLASS_Y_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.model.select_model';
Blockly.Msg.MPYTHON_ZKAI2_RESULT_20CLASS_Y_MESSAGE0 = '(掌控AI)獲取識別後20類的 y座標';
Blockly.Msg.MPYTHON_ZKAI2_RESULT_20CLASS_Y_TOOLTIP = '獲取識別後20類的 y座標';

Blockly.Msg.MPYTHON_ZKAI2_RESULT_20CLASS_W_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.model.select_model';
Blockly.Msg.MPYTHON_ZKAI2_RESULT_20CLASS_W_MESSAGE0 = '(掌控AI)獲取識別後20類的 寬度';
Blockly.Msg.MPYTHON_ZKAI2_RESULT_20CLASS_W_TOOLTIP = '獲取識別後20類的 寬度';

Blockly.Msg.MPYTHON_ZKAI2_RESULT_20CLASS_H_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.model.select_model';
Blockly.Msg.MPYTHON_ZKAI2_RESULT_20CLASS_H_MESSAGE0 = '(掌控AI)獲取識別後20類的 高度';
Blockly.Msg.MPYTHON_ZKAI2_RESULT_20CLASS_H_TOOLTIP = '獲取識別後20類的 高度';

Blockly.Msg.MPYTHON_ZKAI2_RESULT_20CLASS_VALUE_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.model.select_model';
Blockly.Msg.MPYTHON_ZKAI2_RESULT_20CLASS_VALUE_MESSAGE0 = '(掌控AI)獲取識別後20類的 置信度';
Blockly.Msg.MPYTHON_ZKAI2_RESULT_20CLASS_VALUE_TOOLTIP = '獲取識別後20類的 置信度';

Blockly.Msg.MPYTHON_ZKAI2_RESULT_20CLASS_OBJNUM_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.model.select_model';
Blockly.Msg.MPYTHON_ZKAI2_RESULT_20CLASS_OBJNUM_MESSAGE0 = '(掌控AI)獲取識別後20類的 數量';
Blockly.Msg.MPYTHON_ZKAI2_RESULT_20CLASS_OBJNUM_TOOLTIP = '獲取識別後20類的 數量';

Blockly.Msg.MPYTHON_ZKAI2_RESULT_20CLASS_CLASSID_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.model.select_model';
Blockly.Msg.MPYTHON_ZKAI2_RESULT_20CLASS_CLASSID_MESSAGE0 = '(掌控AI)獲取識別後20類的 類型';
Blockly.Msg.MPYTHON_ZKAI2_RESULT_20CLASS_CLASSID_TOOLTIP = '可以識別20個類型，分別是0-19爲飛機,自行車,鳥,船,瓶子,公交車,汽車,貓,椅子,奶牛,餐桌,狗,屋子,摩托車,人,盆栽,羊,沙發,火車,電視';

Blockly.Msg.MPYTHON_ZKAI2_RESULT_20CLASS_INDEX_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.model.select_model';
Blockly.Msg.MPYTHON_ZKAI2_RESULT_20CLASS_INDEX_MESSAGE0 = '(掌控AI)獲取識別後20類的 類型數量';
Blockly.Msg.MPYTHON_ZKAI2_RESULT_20CLASS_INDEX_TOOLTIP = '獲取識別後20類的 類型數量';

//掌控手写数字
Blockly.Msg.MPYTHON_ZKAI2_NUMBER_DISCERN_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.model.select_model';
Blockly.Msg.MPYTHON_ZKAI2_NUMBER_DISCERN_MESSAGE0 = '(掌控AI)選擇訓練模型 手寫數字';
Blockly.Msg.MPYTHON_ZKAI2_NUMBER_DISCERN_TOOLTIP = '選擇訓練模型 手寫數字';

Blockly.Msg.MPYTHON_ZKAI2_RESULT_NUMBER_DISCERN_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#mpython_classroom_kit.model.select_model';
Blockly.Msg.MPYTHON_ZKAI2_RESULT_NUMBER_DISCERN_MESSAGE0 = '(掌控AI)調用攝像頭進行 手寫數字識別';
Blockly.Msg.MPYTHON_ZKAI2_RESULT_NUMBER_DISCERN_TOOLTIP = '調用攝像頭進行 手寫數字識別';

Blockly.Msg.MPYTHON_ZKAI2_NUMBER_DETECT_ALL_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#id2';
Blockly.Msg.MPYTHON_ZKAI2_NUMBER_DETECT_ALL_MESSAGE0 = '(掌控AI)獲取識別後手寫數字的 所有參數';
Blockly.Msg.MPYTHON_ZKAI2_NUMBER_DETECT_ALL_TOOLTIP = '獲取識別後手寫數字的 所有參數';

Blockly.Msg.MPYTHON_ZKAI2_NUMBER_DETECT_NUMBER_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#id2';
Blockly.Msg.MPYTHON_ZKAI2_NUMBER_DETECT_NUMBER_MESSAGE0 = '(掌控AI)獲取識別後手寫數字的 數字';
Blockly.Msg.MPYTHON_ZKAI2_NUMBER_DETECT_NUMBER_TOOLTIP = '獲取識別後手寫數字的 數字';

Blockly.Msg.MPYTHON_ZKAI2_NUMBER_DETECT_ADIENCE_HELPURL = 'https://mpython.readthedocs.io/zh/doc_mpythonbox/mpython_classroom_kit/lib/mpython_classroom_kit.html#id2';
Blockly.Msg.MPYTHON_ZKAI2_NUMBER_DETECT_ADIENCE_MESSAGE0 = '(掌控AI)獲取識別後手寫數字的 置信度';
Blockly.Msg.MPYTHON_ZKAI2_NUMBER_DETECT_ADIENCE_TOOLTIP = '獲取識別後手寫數字的 置信度';

Blockly.Msg.MPYTHON_ZKAI_IMAGE_FACEDETECT_HELPURL = 'https://maixpy.sipeed.com/zh/libs/Maix/kpu.html#%E8%BF%90%E8%A1%8Cyolo2%E7%BD%91%E7%BB%9C';
Blockly.Msg.MPYTHON_ZKAI_IMAGE_FACEDETECT_MESSAGE0 = '人脸识别';
Blockly.Msg.MPYTHON_ZKAI_IMAGE_FACEDETECT_TOOLTIP = '';

Blockly.Msg.MPYTHON_ZKAI_IMAGE_FACEDETECT_RETURN_HELPURL = 'https://maixpy.sipeed.com/zh/libs/Maix/kpu.html#%E8%BF%90%E8%A1%8Cyolo2%E7%BD%91%E7%BB%9C';
Blockly.Msg.MPYTHON_ZKAI_IMAGE_FACEDETECT_RETURN_MESSAGE0 = '获取 识别%1';
Blockly.Msg.MPYTHON_ZKAI_IMAGE_FACEDETECT_RETURN_TOOLTIP = '人脸识别的x和y是LCD屏幕的坐标位置；width和height是人脸识别出的宽度和高度；classid是识别出的类别；objnum是人脸识别出的个数';

Blockly.Msg.MPYTHON_ZKAI_IMAGE_FACEDETECT_ALL_RETURN_HELPURL = 'https://maixpy.sipeed.com/zh/libs/Maix/kpu.html#%E8%BF%90%E8%A1%8Cyolo2%E7%BD%91%E7%BB%9C';
Blockly.Msg.MPYTHON_ZKAI_IMAGE_FACEDETECT_ALL_RETURN_MESSAGE0 = '获取 识别 所有参数';
Blockly.Msg.MPYTHON_ZKAI_IMAGE_FACEDETECT_ALL_RETURN_TOOLTIP = '人脸识别的x和y是LCD屏幕的坐标位置；width和height是人脸识别出的宽度和高度；classid是识别出的类别；objnum是人脸识别出的个数';

Blockly.Msg.MPYTHON_ZKAI_IMAGE_FACEDETECT2_HELPURL = 'https://maixpy.sipeed.com/zh/libs/Maix/kpu.html#%E8%BF%90%E8%A1%8Cyolo2%E7%BD%91%E7%BB%9C';
Blockly.Msg.MPYTHON_ZKAI_IMAGE_FACEDETECT2_MESSAGE0 = '人脸识别';
Blockly.Msg.MPYTHON_ZKAI_IMAGE_FACEDETECT2_TOOLTIP = '可以放入获取识别的参数';

Blockly.Msg.MPYTHON_ZKAI_IMAGE_20CLASS_HELPURL = 'https://maixpy.sipeed.com/zh/libs/Maix/kpu.html#%E8%BF%90%E8%A1%8Cyolo2%E7%BD%91%E7%BB%9C'
Blockly.Msg.MPYTHON_ZKAI_IMAGE_20CLASS_TOOLTIP = '可以放入获取识别的参数，可以识别20个类型，分别是飞机,自行车,鸟,船,瓶子,公交车,汽车,猫,椅子,奶牛, 餐桌,狗,屋子,摩托车,人,盆栽,羊,沙发,火车,电视'

Blockly.Msg.MPYTHON_ZKAI_LCD_SHOW_REC_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/image.html#imagedrawrectanglex-y-w-h-color-thickness1-fillfalse';
Blockly.Msg.MPYTHON_ZKAI_LCD_SHOW_REC_MESSAGE0 = '矩形%1 x%3 y%4 宽%5 高%6 颜色为 R%7 G%8 B%9  加粗%2';
Blockly.Msg.MPYTHON_ZKAI_LCD_SHOW_REC_TOOLTIP = '在图像上绘制矩形';

Blockly.Msg.MPYTHON_ZKAI_LCD_SHOW_STRING_MESSAGE0 = '线条  x1%1 y1%2 到x2%3 y2%4 颜色为R%5 G%6 B%7 加粗%8';
Blockly.Msg.MPYTHON_ZKAI_LCD_SHOW_STRING_TOOLTIP = '在图像上绘制线条';
Blockly.Msg.MPYTHON_ZKAI_LCD_SHOW_STRING_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/image.html#imagedrawlinex0-y0-x1-y1-color-thickness1';

Blockly.Msg.MPYTHON_ZKAI_LCD_CLEAR_ALL_MESSAGE0 = 'LCD 显示清空';
Blockly.Msg.MPYTHON_ZKAI_LCD_CLEAR_ALL_TOOLTIP = '将液晶屏清空为黑色或者指定的颜色';
Blockly.Msg.MPYTHON_ZKAI_LCD_CLEAR_ALL_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/lcd.html#lcdclear';

Blockly.Msg.MPYTHON_ZKAI_LCD_return_colour_MESSAGE0 = 'LCD 返回 x%1 y%2 颜色';
Blockly.Msg.MPYTHON_ZKAI_LCD_return_colour_TOOLTIP = '返回某个坐标点的颜色';
Blockly.Msg.MPYTHON_ZKAI_LCD_return_colour_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/image.html#imagegetpixelx-y-rgbtuple';

Blockly.Msg.MPYTHON_ZKAI_LCD_SHOW_CIRCLE_MESSAGE0 = '圆形%1 x%2 y%3 半径%4 颜色为 R%5 G%6 B%7 加粗%8';
Blockly.Msg.MPYTHON_ZKAI_LCD_SHOW_CIRCLE_TOOLTIP = '在图像上绘制圆形';
Blockly.Msg.MPYTHON_ZKAI_LCD_SHOW_CIRCLE_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/image.html#imagedrawcirclex-y-radius-color-thickness1-fillfalse';

Blockly.Msg.MPYTHON_ZKAI_LCD_TEXT_MOST_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/lcd.html#%E4%BE%8B%E7%A8%8B-1%EF%BC%9A-%E6%98%BE%E7%A4%BA%E8%8B%B1%E6%96%87';
Blockly.Msg.MPYTHON_ZKAI_LCD_TEXT_MOST_MESSAGE0 = '显示文本 x %1 y %2 内容 %3 颜色为R%4 G%5 B%6 字号%7';
Blockly.Msg.MPYTHON_ZKAI_LCD_TEXT_MOST_TOOLTIP = '仅支持字母和数字';

Blockly.Msg.MPYTHON_ZKAI_LCD_SHOW_TEN_STRING_MESSAGE0 = '十字线  x%1 y%2 颜色为R%3 G%4 B%5 尺寸%6 加粗%7';
Blockly.Msg.MPYTHON_ZKAI_LCD_SHOW_TEN_STRING_TOOLTIP = '在图像上绘制十字线';
Blockly.Msg.MPYTHON_ZKAI_LCD_SHOW_TEN_STRING_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/image.html#imagedrawcrossx-y-color-size5-thickness1';

Blockly.Msg.MPYTHON_ZKAI_LCD_SHOW_ARROWS_MESSAGE0 = '箭头  x1%1 y1%2 到x2%3 y2%4 颜色为R%5 G%6 B%7  加粗%8';
Blockly.Msg.MPYTHON_ZKAI_LCD_SHOW_ARROWS_TOOLTIP = '在图像上绘制一个箭头';
Blockly.Msg.MPYTHON_ZKAI_LCD_SHOW_ARROWS_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/image.html#imagedrawarrowx0-y0-x1-y1-color-thickness1';

Blockly.Msg.MPYTHON_ZKAI_LCD_SHOW_IMAGE_PIRCTURE_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/lcd.html#%E4%BE%8B%E7%A8%8B-2%EF%BC%9A-%E6%98%BE%E7%A4%BA%E5%9B%BE%E7%89%87';
Blockly.Msg.MPYTHON_ZKAI_LCD_SHOW_IMAGE_PIRCTURE_MESSAGE0 = '显示图像 路径%1';
Blockly.Msg.MPYTHON_ZKAI_LCD_SHOW_IMAGE_PIRCTURE_TOOLTIP = '显示图像';

Blockly.Msg.MPYTHON_ZKAI_LCD_SHOW_IMAGE_HEAT_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/image.html#imagetorainbowcopyfalse';
Blockly.Msg.MPYTHON_ZKAI_LCD_SHOW_IMAGE_HEAT_MESSAGE0 = 'LCD 显示热图颜色';
Blockly.Msg.MPYTHON_ZKAI_LCD_SHOW_IMAGE_HEAT_TOOLTIP = '可以在液晶屏上显示一张 image的热图颜色';

Blockly.Msg.MPYTHON_ZKAI_LCD_SHOW_ECTYPE_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/image.html#imagesavepath-roi-quality50';
Blockly.Msg.MPYTHON_ZKAI_LCD_SHOW_ECTYPE_MESSAGE0 = '将图像的副本保存到SD卡 图像名%1 图像显示区域  x%2 y%3 宽%4 高%5';
Blockly.Msg.MPYTHON_ZKAI_LCD_SHOW_ECTYPE_TOOLTIP = '将图像的副本保存到SD卡';

Blockly.Msg.MPYTHON_ZKAI_LCD_SHOW_ECTYPE_SHOW_HELPURL = 'https://maixpy.sipeed.com/zh/libs/machine_vision/image.html#imagecopyroi-copytofbfalse';
Blockly.Msg.MPYTHON_ZKAI_LCD_SHOW_ECTYPE_SHOW_MESSAGE0 = '创建一个图像对象的副本  复制图像区域  x%1 y%2 宽%3 高%4';
Blockly.Msg.MPYTHON_ZKAI_LCD_SHOW_ECTYPE_SHOW_TOOLTIP = '创建一个图像对象的副本';


Blockly.Msg.MPYTHON_ZKAI_LCD_SHOW_IMAGE_HEAT_GRAYSCALE = '灰度';
Blockly.Msg.MPYTHON_ZKAI_LCD_SHOW_IMAGE_HEAT_RAINBOW = '彩虹';
Blockly.Msg.MPYTHON_ZKAI_LCD_SHOW_IMAGE_HEAT_NEGATE = '數字反轉';
Blockly.Msg.MPYTHON_ZKAI_LCD_SHOW_IMAGE_HEAT_INVERT = '黑白翻轉';

Blockly.Msg.MPYTHON_ZKAI_LCD_SHOW_IMAGE_DESCARTES_LINPOLAR = '線性極';
Blockly.Msg.MPYTHON_ZKAI_LCD_SHOW_IMAGE_DESCARTES_LOGPOLAR = '對數極';

Blockly.Msg.MPYTHON_ZKAI_SENSOR_PATTERN_GRAYSCALE = '灰度';
Blockly.Msg.MPYTHON_ZKAI_SENSOR_PATTERN_COLOR = '彩色';

Blockly.Msg.MPYTHON_ZKAI_SENSOR_ENABLE_START = '開始抓取圖像';
Blockly.Msg.MPYTHON_ZKAI_SENSOR_ENABLE_STOP = '停止抓取圖像';

Blockly.Msg.MPYTHON_ZKAI_SENSOR_LEVEL_MI_H = '水平鏡像';
Blockly.Msg.MPYTHON_ZKAI_SENSOR_LEVEL_MI_V = '垂直翻轉';

Blockly.Msg.MPYTHON_ZKAI_SENSOR_SETS_CONTRAST = '對比度';
Blockly.Msg.MPYTHON_ZKAI_SENSOR_SETS_BRIGHTNESS = '亮度';
Blockly.Msg.MPYTHON_ZKAI_SENSOR_SETS_SATURATION = '飽和度';

Blockly.Msg.MPYTHON_ZKAI2_FACE_YOLO = '人臉識別';
Blockly.Msg.MPYTHON_ZKAI2_CLASS_20_YOLO = '20類識別';
Blockly.Msg.MPYTHON_ZKAI2_MNIST_NET = '数字识别';

Blockly.Msg.MPYTHON_ZKAI2_PHOTOGRAPH_FACE_YOLO = '人臉';
Blockly.Msg.MPYTHON_ZKAI2_PHOTOGRAPH_CLASS_20_YOLO = '0類';

Blockly.Msg.MPYTHON_ZKAI_TRACE_COLOR_RECTANGLE = '矩形';
Blockly.Msg.MPYTHON_ZKAI_TRACE_COLOR_CROSS = '十字';

//声明python 运行环境
Blockly.Msg.MPYTHON_NAME_PYTHON_ENVIRONMENT_HELPURL = '';
Blockly.Msg.MPYTHON_NAME_PYTHON_ENVIRONMENT_MESSAGE0 = '聲明python 運行環境';
Blockly.Msg.MPYTHON_NAME_PYTHON_ENVIRONMENT_TOOLTIP = '';

//lark
Blockly.Msg.MPYTHON_LARK_GET_ALL_COLOR_MESSAGE0 = 'I2C獲取顔色';
Blockly.Msg.MPYTHON_LARK_GET_ALL_COLOR_TOOLTIP = '返回列表';

Blockly.Msg.MPYTHON_LARK_GET_COLOR_TOOLTIP = '';
Blockly.Msg.MPYTHON_LARK_GET_COLOR_MESSAGE0 = 'I2C獲取 %1';
Blockly.Msg.MPYTHON_lARK_RED = '紅色';
Blockly.Msg.MPYTHON__LARK_GREEN = '綠色';
Blockly.Msg.MPYTHON__LARK_BLUE = '藍色';

Blockly.Msg.MPYTHON_LARK_GET_ALL_COLOR_HSV_TOOLTIP = 'HSV(Hue, Saturation, Value)';
Blockly.Msg.MPYTHON_LARKT_GET_ALL_COLOR_HSV_MESSAGE0 = 'I2C獲取HSV';

Blockly.Msg.MPYTHON_LARK_GET_COLOR_HSV_TOOLTIP = 'HSV(Hue, Saturation, Value)';
Blockly.Msg.MPYTHON_LARK_GET_COLOR_HSV_MESSAGE0 = 'i2C獲取HSV %1';

Blockly.Msg.MPYTHON_LARK_GET_COLOR_STRING_TOOLTIP = '';
Blockly.Msg.MPYTHON_LARK_GET_COLOR_STRING_MESSAGE0 = 'I2C獲取顔色';

Blockly.Msg.MPYTHON_LARK_DISCERN_COLOR_TOOLTIP = '';
Blockly.Msg.MPYTHON_LARK_DISCERN_COLOR_MESSAGE0 = '識別 %1';
Blockly.Msg.MPYTHON_LARK_RED = '紅色';
Blockly.Msg.MPYTHON_LARK_GREEN = '綠色';
Blockly.Msg.MPYTHON_LARK_BLUE = '藍色';
Blockly.Msg.MPYTHON_LARK_ORANGE = '橙色';
Blockly.Msg.MPYTHON_LARK_YELLOW = '黃色';
Blockly.Msg.MPYTHON_LARK_PURPLE = '紫色';
Blockly.Msg.MPYTHON_LARK_CYAN = '青色';
Blockly.Msg.MPYTHON_LARK_NONE = '無色';
Blockly.Msg.MPYTHON_LARK_NULL = '無法獲取';

Blockly.Msg.MPYTHON_LARK_ULTRASONIC_TOOLTIP = '';
Blockly.Msg.MPYTHON_LARK_ULTRASONIC_MESSAGE0 = 'I2C超聲波';

Blockly.Msg.MPYTHON_LARK_MOTOR_SET_I2C_TOOLTIP = '';
Blockly.Msg.MPYTHON_LARK_MOTOR_SET_I2C_MESSAGE0 = 'I2C設置 %1 速度 %2';

Blockly.Msg.MPYTHON_LARK_GET_LINE_ON_I2C_TOOLTIP = '';
Blockly.Msg.mpython_LARK_GET_LINE_ON_I2C_MESSAGE0 = 'I2C獲取 %1 巡綫值';
Blockly.Msg.mpython_LARK_GET_LINE_RIGHT_ON_I2C = '右邊';
Blockly.Msg.mpython_LARK_GET_LINE_LEFT_ON_I2C = '左邊';

Blockly.Msg.MPYTHON_LARK_SEARCH_LINE_ON_I2C_TOOLTIP = '';
Blockly.Msg.mpython_LARK_SEARCH_LINE_ON_I2C_MESSAGE0 = 'I2C循跡傳感器 %1 遇到黑綫';
Blockly.Msg.MPYTHON_LARK_SEARCH_LEFT = '左邊';
Blockly.Msg.MPYTHON_LARK_SEARCH_RIGHT = '右邊';
Blockly.Msg.MPYTHON_LARK_SEARCH_LEFT2 = '兩邊都';
Blockly.Msg.MPYTHON_LARK_SEARCH_RIGHT2 = '兩邊都無';
Blockly.Msg.MPYTHON_LARK_SEARCH_BOTH = '兩邊都';
Blockly.Msg.MPYTHON_LARK_SEARCH_NONE = '兩邊都無';

///千里马
Blockly.Msg.MPYTHON_LARK__CAR_GET_ALL_COLOR_TOOLTIP = 'Returns as list';
Blockly.Msg.MPYTHON_LARK__CAR_GET_ALL_COLOR_MESSAGE0 = '千里馬獲取顔色';

Blockly.Msg.MPYTHON_LARK_CAR_GET_COLOR_TOOLTIP = '';
Blockly.Msg.MPYTHON_LARK_CAR_GET_COLOR_MESSAGE0 = '千里馬獲取 %1';
Blockly.Msg.MPYTHON_lARK_CAR_RED = '紅色';
Blockly.Msg.MPYTHON__LARK_CAR_GREEN = '綠色';
Blockly.Msg.MPYTHON__LARK_CAR_BLUE = '藍色';

Blockly.Msg.MPYTHON_LARK_CAR_GET_ALL_COLOR_HSV_TOOLTIP = 'HSV(Hue, Saturation, Value)';
Blockly.Msg.MPYTHON_LARKT_CAR_GET_ALL_COLOR_HSV_MESSAGE0 = '千里馬獲取HSV';

Blockly.Msg.MPYTHON_LARK_CAR_GET_COLOR_HSV_TOOLTIP = 'HSV(Hue, Saturation, Value)';
Blockly.Msg.MPYTHON_LARK_CAR_GET_COLOR_HSV_MESSAGE0 = '千里馬HSV %1';

Blockly.Msg.MPYTHON_LARK_CAR_GET_COLOR_STRING_TOOLTIP = '';
Blockly.Msg.MPYTHON_LARK_CAR_GET_COLOR_STRING_MESSAGE0 = '千里馬識別顔色';

Blockly.Msg.MPYTHON_LARK_CAR_DISCERN_COLOR_TOOLTIP = '';
Blockly.Msg.MPYTHON_LARK_CAR_DISCERN_COLOR_MESSAGE0 = '千里馬識別顔色 %1';
Blockly.Msg.MPYTHON_LARK_CAR_RED = '紅色';
Blockly.Msg.MPYTHON_LARK_CAR_GREEN = '綠色';
Blockly.Msg.MPYTHON_LARK_CAR_BLUE = '藍色';
Blockly.Msg.MPYTHON_LARK_CAR_ORANGE = '橙色';
Blockly.Msg.MPYTHON_LARK_CAR_YELLOW = '黃色';
Blockly.Msg.MPYTHON_LARK_CAR_PURPLE = '紫色';
Blockly.Msg.MPYTHON_LARK_CAR_CYAN = '青色';
Blockly.Msg.MPYTHON_LARK_CAR_NONE = '無識別';
Blockly.Msg.MPYTHON_LARK_CAR_NULL = '識別錯誤';

Blockly.Msg.MPYTHON_LARK_CAR_ULTRASONIC_TOOLTIP = '';
Blockly.Msg.MPYTHON_LARK_CAR_ULTRASONIC_MESSAGE0 = '千里馬獲取超聲波';

Blockly.Msg.MPYTHON_LARK_CAR_GET_LINE_ON_I2C_TOOLTIP = '';
Blockly.Msg.mpython_LARK_CAR_GET_LINE_ON_I2C_MESSAGE0 = '千里馬獲取 %1 循跡數值';
Blockly.Msg.mpython_LARK_CAR_GET_LINE_RIGHT_ON_I2C = '右邊';
Blockly.Msg.mpython_LARK_CAR_GET_LINE_LEFT_ON_I2C = '左邊';

Blockly.Msg.MPYTHON_LARK_CAR_SEARCH_LINE_ON_I2C_TOOLTIP = '';
Blockly.Msg.mpython_LARK_CAR_SEARCH_LINE_ON_I2C_MESSAGE0 = '千里馬循跡 %1 碰到黑綫';
Blockly.Msg.MPYTHON_LARK_CAR_SEARCH_LEFT = '左邊';
Blockly.Msg.MPYTHON_LARK_CAR_SEARCH_RIGHT = '右邊';
Blockly.Msg.MPYTHON_LARK_CAR_SEARCH_LEFT2 = '兩邊';
Blockly.Msg.MPYTHON_LARK_CAR_SEARCH_NONE = '兩邊都沒有';

Blockly.Msg.MPYTHON_LARK_MOTOR_SET_I2C_TOOLTIP = '';
Blockly.Msg.MPYTHON_LARK_MOTOR_SET_I2C_MESSAGE0 = '電機驅動 %1  速度 %2';
Blockly.Msg.MPYTHON_LARK_MOTOR2_SET_I2C_TOOLTIP = '';
Blockly.Msg.MPYTHON_LARK_MOTOR2_SET_I2C_MESSAGE0 = '千里馬 %1  速度 %2';
Blockly.Msg.MPYTHON_LARK_CAR_MOTION_LEFT = '左轉';
Blockly.Msg.MPYTHON_LARK_CAR_MOTION_RIGHT = '右轉';
Blockly.Msg.MPYTHON_LARK_CAR_MOTION_FORWARD = '前進';
Blockly.Msg.MPYTHON_LARK_CAR_MOTION_BACKWARD = '後退';
Blockly.Msg.MPYTHON_LARK_CAR_MOTION_STOP = '停止';


Blockly.Msg.MPYTHON_DEFINE_THREAD_MESSAGE0 = '定義線程 %1';
Blockly.Msg.MPYTHON_RUN_THREAD_MESSAGE0 = '運行線程 %1';

Blockly.Msg.NUMBER_TO_BYTES_MESSAGE0 = '(struct.pack) 轉換數字為bytes %1 %2 %3 %4 待轉換數字 %5'
Blockly.Msg.BYTES_TO_NUMBER_MESSAGE0 = '(struct.unpack) 解包bytes為數字 %1 %2 %3 %4 待轉換bytes %5'
Blockly.Msg.LITTLE_ENDIAN = '低字節序(默認)';
Blockly.Msg.BIG_ENDIAN = '高字節序';

Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_MESSAGE0 = '[適用2.0板] 當掌控板 %1 時';
Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_HELPURL = '';
Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_TOOLTIP = '';

Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_TILT_LEFT = '向左傾斜';
Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_TILT_RIGHT = '向右傾斜';
Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_TILT_UP = '向前傾斜';
Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_TILT_DOWN = '向後傾斜';
Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_FACE_UP = '正面朝上';
Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_FACE_DOWN = '正面朝下';
Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_SINGLE_CLICK = '被單擊';
Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_DOUBLE_CLICK = '被雙擊';
Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_FREEFALL = '墜落';

Blockly.Msg.MPYTHON2_ACCELEROMETER_ROLL_ANGLE = '橫滾角';
Blockly.Msg.MPYTHON2_ACCELEROMETER_PITCH_ANGLE = '俯仰角';

Blockly.Msg.MPYTHON2_ACCELEROMETER_ANGLE_HELPURL = '';
Blockly.Msg.MPYTHON2_ACCELEROMETER_ANGLE_TOOLTIP = '';
Blockly.Msg.MPYTHON2_ACCELEROMETER_ANGLE_MESSAGE0 = '掌控板 %1';

Blockly.Msg.MPYTHON2_BUTTON_IS_PRESSED_HELPURL = '';
Blockly.Msg.MPYTHON2_BUTTON_IS_PRESSED_TOOLTIP = '';
Blockly.Msg.MPYTHON2_BUTTON_IS_PRESSED_MESSAGE0 = '按鍵 %1 已經按下';

Blockly.Msg.MPYTHON2_BUTTON_WAS_PRESSED_HELPURL = '';
Blockly.Msg.MPYTHON2_BUTTON_WAS_PRESSED_TOOLTIP = '';
Blockly.Msg.MPYTHON2_BUTTON_WAS_PRESSED_MESSAGE0 = '按鍵 %1 曾經按下';

Blockly.Msg.MPYTHON2_BUTTON_GET_PRESSES_HELPURL = '';
Blockly.Msg.MPYTHON2_BUTTON_GET_PRESSES_TOOLTIP = '';
Blockly.Msg.MPYTHON2_BUTTON_GET_PRESSES_MESSAGE0 = '按鍵 %1 按下過的次數';
            
Blockly.Msg.MPYTHON2_BUTTON_EVENT_MESSAGE0 = '當按鍵 %1 被 %2 時';
Blockly.Msg.MPYTHON2_BUTTON_EVENT_HELPURL = '';
Blockly.Msg.MPYTHON2_BUTTON_EVENT_TOOLTIP = '';

Blockly.Msg.MPYTHON2_BUTTON_EVENT_PRESSED = '按下';
Blockly.Msg.MPYTHON2_BUTTON_EVENT_RELEASED = '松開';

Blockly.Msg.MPYTHON2_TOUCHPAD_IS_PRESSED_HELPURL = '';
Blockly.Msg.MPYTHON2_TOUCHPAD_IS_PRESSED_TOOLTIP = '';
Blockly.Msg.MPYTHON2_TOUCHPAD_IS_PRESSED_MESSAGE0 = '觸摸鍵 %1 已經按下';

Blockly.Msg.MPYTHON2_TOUCHPAD_WAS_PRESSED_HELPURL = '';
Blockly.Msg.MPYTHON2_TOUCHPAD_WAS_PRESSED_TOOLTIP = '';
Blockly.Msg.MPYTHON2_TOUCHPAD_WAS_PRESSED_MESSAGE0 = '觸摸鍵 %1 曾經按下';

Blockly.Msg.MPYTHON2_TOUCHPAD_GET_PRESSES_HELPURL = '';
Blockly.Msg.MPYTHON2_TOUCHPAD_GET_PRESSES_TOOLTIP = '';
Blockly.Msg.MPYTHON2_TOUCHPAD_GET_PRESSES_MESSAGE0 = '觸摸鍵 %1 按下過的次數';

Blockly.Msg.MPYTHON2_TOUCHPAD_VALUE_HELPURL = '';
Blockly.Msg.MPYTHON2_TOUCHPAD_VALUE_TOOLTIP = '';
Blockly.Msg.MPYTHON2_TOUCHPAD_VALUE_MESSAGE0 = '觸摸鍵 %1 值';

Blockly.Msg.MPYTHON2_TOUCHPAD_EVENT_MESSAGE0 = '當觸摸鍵 %1 被 %2 時';
Blockly.Msg.MPYTHON2_TOUCHPAD_EVENT_HELPURL = '';
Blockly.Msg.MPYTHON2_TOUCHPAD_EVENT_TOOLTIP = '';

Blockly.Msg.MPYTHON2_TOUCHPAD_EVENT_PRESSED = '觸摸';
Blockly.Msg.MPYTHON2_TOUCHPAD_EVENT_RELEASED = '釋放';

Blockly.Msg.MPYTHON2_TOUCHPAD_THRESHOLD_MESSAGE0 = '設置觸摸鍵 %1 閥值為 %2';
Blockly.Msg.MPYTHON2_TOUCHPAD_THRESHOLD_HELPURL = '';
Blockly.Msg.MPYTHON2_TOUCHPAD_THRESHOLD_TOOLTIP = '';

Blockly.Msg.BLE_UUID_HELPURL = 'https://mpython-ble.readthedocs.io/zh/master/api/index.html#UUID';
Blockly.Msg.BLE_UUID_TOOLTIP = '';

Blockly.Msg.BLE_SETUP_PERIPHERAL_HELPURL = '';
Blockly.Msg.BLE_SETUP_PERIPHERAL_TOOLTIP = '';
Blockly.Msg.BLE_SETUP_PERIPHERAL_MESSAGE0 = '構建 BLE 外圍設備對象 %1 顯示名稱 %2 Service UUID %3';

Blockly.Msg.BLE_ADD_CHARACTERISTIC_HELPURL = '';
Blockly.Msg.BLE_ADD_CHARACTERISTIC_TOOLTIP = '';
Blockly.Msg.BLE_ADD_CHARACTERISTIC_MESSAGE0 = '定義 BLE 屬性 %1 %2 Characteristic UUID %3 Read %4 Write %5 Notity %6';

Blockly.Msg.BLE_PERIPHERAL_ADVERTISE_HELPURL = '';
Blockly.Msg.BLE_PERIPHERAL_ADVERTISE_TOOLTIP = '';
Blockly.Msg.BLE_PERIPHERAL_ADVERTISE_MESSAGE0 = 'BLE 外圍設備 %1';

Blockly.Msg.BLE_START_BROADCASTING = "開始廣播";
Blockly.Msg.BLE_STOP_BROADCASTING = "停止廣播";

Blockly.Msg.BLE_PERIPHERAL_ATTRUBUTE_READ_HELPURL = '';
Blockly.Msg.BLE_PERIPHERAL_ATTRUBUTE_READ_TOOLTIP = '';
Blockly.Msg.BLE_PERIPHERAL_ATTRUBUTE_READ_MESSAGE0 = '讀 BLE 設備的屬性 %1';

Blockly.Msg.BLE_PERIPHERAL_ATTRUBUTE_WRITE_HELPURL = '';
Blockly.Msg.BLE_PERIPHERAL_ATTRUBUTE_WRITE_TOOLTIP = '';
Blockly.Msg.BLE_PERIPHERAL_ATTRUBUTE_WRITE_MESSAGE0 = '寫 BLE 設備的屬性 %1 %2 值 %3 Notify %4';

Blockly.Msg.BLE_PERIPHERAL_DISCONNECT_HELPURL = '';
Blockly.Msg.BLE_PERIPHERAL_DISCONNECT_TOOLTIP = '';
Blockly.Msg.BLE_PERIPHERAL_DISCONNECT_MESSAGE0 = 'BLE 外圍設備斷開連接';

Blockly.Msg.BLE_PERIPHERAL_MAC_HELPURL = '';
Blockly.Msg.BLE_PERIPHERAL_MAC_TOOLTIP = '';
Blockly.Msg.BLE_PERIPHERAL_MAC_MESSAGE0 = 'BLE 外圍設備 MAC地址';

Blockly.Msg.BLE_PERIPHERAL_CONNECTION_CALLBACK_HELPURL = '';
Blockly.Msg.BLE_PERIPHERAL_CONNECTION_CALLBACK_TOOLTIP = '';
Blockly.Msg.BLE_PERIPHERAL_CONNECTION_CALLBACK_MESSAGE0 = '當 BLE 與中央設備建立連接時 %1 連接句柄 %2 地址類型 %3 中央設備的MAC地址 %4';

Blockly.Msg.BLE_PERIPHERAL_WRITE_CALLBACK_HELPURL = '';
Blockly.Msg.BLE_PERIPHERAL_WRITE_CALLBACK_TOOLTIP = '';
Blockly.Msg.BLE_PERIPHERAL_WRITE_CALLBACK_MESSAGE0 = '當 BLE 設備的屬性值被改寫時 %1 連接句柄 %2 被寫屬性句柄 %3 寫入的數據 %4';

Blockly.Msg.BLE_SETUP_CENTERAL_HELPURL = '';
Blockly.Msg.BLE_SETUP_CENTERAL_TOOLTIP = '';
Blockly.Msg.BLE_SETUP_CENTERAL_MESSAGE0 = '構建 BLE 中央設備對象 顯示名稱 %1';

Blockly.Msg.BLE_CENTERAL_CONNECT_HELPURL = '';
Blockly.Msg.BLE_CENTERAL_CONNECT_TOOLTIP = '';
Blockly.Msg.BLE_CENTERAL_CONNECT_MESSAGE0 = 'BLE 中央設備連接到 %1 %2';

Blockly.Msg.BLE_CENTERAL_IS_CONNECTED_HELPURL = '';
Blockly.Msg.BLE_CENTERAL_IS_CONNECTED_TOOLTIP = '';
Blockly.Msg.BLE_CENTERAL_IS_CONNECTED_MESSAGE0 = 'BLE 外圍設備已連接 ?';

Blockly.Msg.BLE_CENTERAL_DEF_CHARACTERISTIC_HELPURL = '';
Blockly.Msg.BLE_CENTERAL_DEF_CHARACTERISTIC_TOOLTIP = '';
Blockly.Msg.BLE_CENTERAL_DEF_CHARACTERISTIC_MESSAGE0 = '設定 %1 為 已連接外圍設備 屬性對象 %2 Service UUID %3 Characteristic UUID %4';

Blockly.Msg.BLE_CENTERAL_CHARACTERISTIC_READ_HELPURL = '';
Blockly.Msg.BLE_CENTERAL_CHARACTERISTIC_READ_TOOLTIP = '';
Blockly.Msg.BLE_CENTERAL_CHARACTERISTIC_READ_MESSAGE0 = '讀 已連接外圍設備的 屬性 %1 值';

Blockly.Msg.BLE_CENTERAL_CHARACTERISTIC_WRITE_HELPURL = '';
Blockly.Msg.BLE_CENTERAL_CHARACTERISTIC_WRITE_TOOLTIP = '';
Blockly.Msg.BLE_CENTERAL_CHARACTERISTIC_WRITE_MESSAGE0 = '寫 已連接外圍設備的 屬性 %1 值 %2';

Blockly.Msg.BLE_CENTERAL_NOTIFY_CALLBACK_HELPURL = '';
Blockly.Msg.BLE_CENTERAL_NOTIFY_CALLBACK_TOOLTIP = '';
Blockly.Msg.BLE_CENTERAL_NOTIFY_CALLBACK_MESSAGE0 = '當 已連接外圍設備發起 Notify 通知事件時 %1 屬性的值柄 %2 通知的屬性值 %3';

Blockly.Msg.BLE_CENTERAL_CONNECTED_INFO_HELPURL = '';
Blockly.Msg.BLE_CENTERAL_CONNECTED_INFO_TOOLTIP = '';
Blockly.Msg.BLE_CENTERAL_CONNECTED_INFO_MESSAGE0 = '已連接的外圍設備 %1';

Blockly.Msg.BLE_CENTERAL_CLOSE_HELPURL = '';
Blockly.Msg.BLE_CENTERAL_CLOSE_TOOLTIP = '';
Blockly.Msg.BLE_CENTERAL_CLOSE_MESSAGE0 = 'BLE 中央設備 斷開連接';

Blockly.Msg.BLE_INFO_NAME = "藍牙名稱";
Blockly.Msg.BLE_INFO_MAC = "MAC地址";
Blockly.Msg.BLE_INFO_RSSI = "信號強度";
Blockly.Msg.BLE_INFO_ADDRTYPE = "地址類型";
Blockly.Msg.BLE_INFO_ADVTYPE = "廣播類型";
Blockly.Msg.BLE_INFO_DATA = "原始數據(元組)";

// UART 從機
Blockly.Msg.BLE_SETUP_UART_HELPURL = '';
Blockly.Msg.BLE_SETUP_UART_TOOLTIP = '';
//Blockly.Msg.BLE_SETUP_UART_MESSAGE0 = '構建 BLE UART從機 %1 顯示名稱 %2 緩存大小 %3';
Blockly.Msg.BLE_SETUP_UART_MESSAGE0 = '構建 BLE UART從機 顯示名稱 %1';

Blockly.Msg.BLE_UART_IS_CONNECTED_HELPURL = '';
Blockly.Msg.BLE_UART_IS_CONNECTED_TOOLTIP = '';
Blockly.Msg.BLE_UART_IS_CONNECTED_MESSAGE0 = 'BLE UART 已連接 ?';

Blockly.Msg.BLE_UART_ANY_HELPURL = '';
Blockly.Msg.BLE_UART_ANY_TOOLTIP = '';
Blockly.Msg.BLE_UART_ANY_MESSAGE0 = 'BLE UART 可讀字節數量';

Blockly.Msg.BLE_UART_IRQ_HELPURL = '';
Blockly.Msg.BLE_UART_IRQ_TOOLTIP = '';
Blockly.Msg.BLE_UART_IRQ_MESSAGE0 = '當 BLE UART 接收到數據時 %1 執行 %2';

Blockly.Msg.BLE_UART_READ_HELPURL = '';
Blockly.Msg.BLE_UART_READ_TOOLTIP = '從 UART 另一端發送過來的消息';
Blockly.Msg.BLE_UART_READ_MESSAGE0 = '已接收數據';

Blockly.Msg.BLE_UART_WRITE_HELPURL = '';
Blockly.Msg.BLE_UART_WRITE_TOOLTIP = '';
Blockly.Msg.BLE_UART_WRITE_MESSAGE0 = 'BLE UART 發送字節 %1';

Blockly.Msg.BLE_UART_CLOSE_HELPURL = '';
Blockly.Msg.BLE_UART_CLOSE_TOOLTIP = '';
Blockly.Msg.BLE_UART_CLOSE_MESSAGE0 = 'BLE UART 斷開連接';

// UART主機 2020-11-19
Blockly.Msg.BLE_SETUP_UART_MASTER_HELPURL = '';
Blockly.Msg.BLE_SETUP_UART_MASTER_TOOLTIP = '';
Blockly.Msg.BLE_SETUP_UART_MASTER_MESSAGE0 = '構建 BLE UART主機 連接到 %1 %2';

/*
// UART主機 2020-10-19
Blockly.Msg.BLE_SETUP_UART_MASTER_MESSAGE0 = '構建 BLE UART主機';

Blockly.Msg.BLE_UART_MASTER_CONNECT_HELPURL = '';
Blockly.Msg.BLE_UART_MASTER_CONNECT_TOOLTIP = '';
Blockly.Msg.BLE_UART_MASTER_CONNECT_MESSAGE0 = 'BLE UART主機 連接到 %1 %2';

Blockly.Msg.BLE_UART_MASTER_IS_CONNECTED_HELPURL = '';
Blockly.Msg.BLE_UART_MASTER_IS_CONNECTED_TOOLTIP = '';
Blockly.Msg.BLE_UART_MASTER_IS_CONNECTED_MESSAGE0 = 'BLE UART主機 已連接 ?';

Blockly.Msg.BLE_UART_MASTER_IRQ_HELPURL = '';
Blockly.Msg.BLE_UART_MASTER_IRQ_TOOLTIP = '';
Blockly.Msg.BLE_UART_MASTER_IRQ_MESSAGE0 = '當 BLE UART主機 接收到數據時';

Blockly.Msg.BLE_UART_MASTER_READ_HELPURL = '';
Blockly.Msg.BLE_UART_MASTER_READ_TOOLTIP = '從 UART從機 發送過來的消息';
Blockly.Msg.BLE_UART_MASTER_READ_MESSAGE0 = '已接收數據';

Blockly.Msg.BLE_UART_MASTER_WRITE_HELPURL = '';
Blockly.Msg.BLE_UART_MASTER_WRITE_TOOLTIP = '';
Blockly.Msg.BLE_UART_MASTER_WRITE_MESSAGE0 = 'BLE UART主機 向從機發送字節 %1';

Blockly.Msg.BLE_UART_MASTER_CLOSE_HELPURL = '';
Blockly.Msg.BLE_UART_MASTER_CLOSE_TOOLTIP = '';
Blockly.Msg.BLE_UART_MASTER_CLOSE_MESSAGE0 = 'BLE UART主機 斷開連接';
*/
Blockly.Msg.BLE_SETUP_HID_HELPURL = '';
Blockly.Msg.BLE_SETUP_HID_TOOLTIP = '';
Blockly.Msg.BLE_SETUP_HID_MESSAGE0 = '構建 BLE HID %1 對象 %2 顯示名稱 %3 電池電量 %4';

Blockly.Msg.BLE_HID_MOUSE = "鼠標";
Blockly.Msg.BLE_HID_KEYBOARD = "鍵盤";
Blockly.Msg.BLE_HID_CONSUMER = "遙控器";

Blockly.Msg.BLE_HID_ADVERTISE_HELPURL = '';
Blockly.Msg.BLE_HID_ADVERTISE_TOOLTIP = '';
Blockly.Msg.BLE_HID_ADVERTISE_MESSAGE0 = 'BLE HID設備 %1';

Blockly.Msg.BLE_HID_CONNECT_EVENT_HELPURL = '';
Blockly.Msg.BLE_HID_CONNECT_EVENT_TOOLTIP = '';
Blockly.Msg.BLE_HID_CONNECT_EVENT_MESSAGE0 = '當 BLE HID設備 連接時';

Blockly.Msg.BLE_HID_DISCONNECT_HELPURL = '';
Blockly.Msg.BLE_HID_DISCONNECT_TOOLTIP = '';
Blockly.Msg.BLE_HID_DISCONNECT_MESSAGE0 = 'BLE HID設備 斷開連接';

Blockly.Msg.BLE_HID_BATTERY_LEVEL_HELPURL = '';
Blockly.Msg.BLE_HID_BATTERY_LEVEL_TOOLTIP = '';
Blockly.Msg.BLE_HID_BATTERY_LEVEL_MESSAGE0 = 'BLE HID設備 電池電量';

Blockly.Msg.BLE_HID_MOUSE_BUTTONS_HELPURL = '';
Blockly.Msg.BLE_HID_MOUSE_BUTTONS_TOOLTIP = '';
Blockly.Msg.BLE_HID_MOUSE_BUTTONS_MESSAGE0 = '鼠標鍵 %1';

Blockly.Msg.BLE_HID_MOUSE_CLICK_HELPURL = '';
Blockly.Msg.BLE_HID_MOUSE_CLICK_TOOLTIP = '';
Blockly.Msg.BLE_HID_MOUSE_CLICK_MESSAGE0 = 'BLE HID 鼠標 點擊按鍵 %1';

Blockly.Msg.BLE_HID_MOUSE_PRESS_HELPURL = '';
Blockly.Msg.BLE_HID_MOUSE_PRESS_TOOLTIP = '';
Blockly.Msg.BLE_HID_MOUSE_PRESS_MESSAGE0 = 'BLE HID 鼠標 長按按鍵 %1';

Blockly.Msg.BLE_HID_MOUSE_RELEASE_HELPURL = '';
Blockly.Msg.BLE_HID_MOUSE_RELEASE_TOOLTIP = '';
Blockly.Msg.BLE_HID_MOUSE_RELEASE_MESSAGE0 = 'BLE HID 鼠標 釋放按鍵 %1';

Blockly.Msg.BLE_HID_MOUSE_RELEASE_ALL_HELPURL = '';
Blockly.Msg.BLE_HID_MOUSE_RELEASE_ALL_TOOLTIP = '';
Blockly.Msg.BLE_HID_MOUSE_RELEASE_ALL_MESSAGE0 = 'BLE HID 鼠標 釋放所有按鍵';

Blockly.Msg.BLE_HID_MOUSE_MOVE_HELPURL = '';
Blockly.Msg.BLE_HID_MOUSE_MOVE_TOOLTIP = 'x, y - 光標移動量,範圍 ±127 。\nwheel - 滾輪,範圍 ±127 。';
Blockly.Msg.BLE_HID_MOUSE_MOVE_MESSAGE0 = 'BLE HID 鼠標 光標移動 %1 X軸移動量 %2 Y軸移動量 %3 滾輪 %4';

Blockly.Msg.BLE_HID_KEYBOARD_BUTTONS_HELPURL = '';
Blockly.Msg.BLE_HID_KEYBOARD_BUTTONS_TOOLTIP = '';
Blockly.Msg.BLE_HID_KEYBOARD_BUTTONS_MESSAGE0 = '鍵盤按鍵 %1';

Blockly.Msg.BLE_HID_KEYBOARD_SEND_HELPURL = '';
Blockly.Msg.BLE_HID_KEYBOARD_SEND_TOOLTIP = '';
Blockly.Msg.BLE_HID_KEYBOARD_SEND_MESSAGE0 = 'BLE HID 鍵盤 按下按鍵 %1';

Blockly.Msg.BLE_HID_KEYBOARD_SEND_MULTI_HELPURL = '';
Blockly.Msg.BLE_HID_KEYBOARD_SEND_MULTI_TOOLTIP = '';
Blockly.Msg.BLE_HID_KEYBOARD_SEND_MULTI_MESSAGE0 = 'BLE HID 鍵盤 同時按下按鍵 %1 %2 %3';

Blockly.Msg.BLE_HID_KEYBOARD_PRESS_HELPURL = '';
Blockly.Msg.BLE_HID_KEYBOARD_PRESS_TOOLTIP = '';
Blockly.Msg.BLE_HID_KEYBOARD_PRESS_MESSAGE0 = 'BLE HID 鍵盤 長按按鍵 %1';

Blockly.Msg.BLE_HID_KEYBOARD_RELEASE_HELPURL = '';
Blockly.Msg.BLE_HID_KEYBOARD_RELEASE_TOOLTIP = '';
Blockly.Msg.BLE_HID_KEYBOARD_RELEASE_MESSAGE0 = 'BLE HID 鍵盤 釋放按鍵 %1';

Blockly.Msg.BLE_HID_KEYBOARD_RELEASE_ALL_HELPURL = '';
Blockly.Msg.BLE_HID_KEYBOARD_RELEASE_ALL_TOOLTIP = '';
Blockly.Msg.BLE_HID_KEYBOARD_RELEASE_ALL_MESSAGE0 = 'BLE HID 鍵盤 釋放所有按鍵';

Blockly.Msg.BLE_HID_CONSUMER_BUTTONS_HELPURL = '';
Blockly.Msg.BLE_HID_CONSUMER_BUTTONS_TOOLTIP = '';
Blockly.Msg.BLE_HID_CONSUMER_BUTTONS_MESSAGE0 = '遙控器鍵 %1';

Blockly.Msg.BLE_HID_CONSUMER_SEND_HELPURL = '';
Blockly.Msg.BLE_HID_CONSUMER_SEND_TOOLTIP = '';
Blockly.Msg.BLE_HID_CONSUMER_SEND_MESSAGE0 = 'BLE HID 遙控器點擊 %1';

// 2020-12-28 增加 iBeacon
Blockly.Msg.BLE_SETUP_IBEACON_HELPURL = '';
Blockly.Msg.BLE_SETUP_IBEACON_TOOLTIP = '';
Blockly.Msg.BLE_SETUP_IBEACON_MESSAGE0 = '構建 BLE iBeacon設備 %1 UUID %2 major %3 minor %4';

Blockly.Msg.BLE_IBEACON_ADVERTISE_HELPURL = '';
Blockly.Msg.BLE_IBEACON_ADVERTISE_TOOLTIP = '';
Blockly.Msg.BLE_IBEACON_ADVERTISE_MESSAGE0 = 'BLE iBeacon設備 %1';

// 2021-02-05 拓展板新增功能
Blockly.Msg.MPYTHON_PARROT_GET_BATTERY_LEVEL_HELPURL = '';
Blockly.Msg.MPYTHON_PARROT_GET_BATTERY_LEVEL_TOOLTIP = '返回電量，單位mV';
Blockly.Msg.MPYTHON_PARROT_GET_BATTERY_LEVEL_MESSAGE0 = '拓展板的電壓值(mV)';

Blockly.Msg.MPYTHON_BLUEBIT_IR_ENCODE_RAW_HELPURL = '';
Blockly.Msg.MPYTHON_BLUEBIT_IR_ENCODE_RAW_TOOLTIP = '返回編碼後的紅外脈沖數據buff';
Blockly.Msg.MPYTHON_BLUEBIT_IR_ENCODE_RAW_MESSAGE0 = '拓展板 紅外脈沖任意編碼 %1 載波頻率(Hz) %2 code總數 %3 循環碼位置 %4 code列表 %5 編碼波形數據 %6';

Blockly.Msg.MPYTHON_BLUEBIT_IR_ENCODE_NEC_HELPURL = '';
Blockly.Msg.MPYTHON_BLUEBIT_IR_ENCODE_NEC_TOOLTIP = '返回編碼後的紅外脈沖數據buff\n用戶碼：0~255\n命令碼：0~255';
Blockly.Msg.MPYTHON_BLUEBIT_IR_ENCODE_NEC_MESSAGE0 = '拓展板 紅外脈沖NEC編碼 %1 用戶碼 %2 命令碼 %3';

Blockly.Msg.MPYTHON_BLUEBIT_IR_SEND_HELPURL = '';
Blockly.Msg.MPYTHON_BLUEBIT_IR_SEND_TOOLTIP = '';
Blockly.Msg.MPYTHON_BLUEBIT_IR_SEND_MESSAGE0 = '拓展板 發送紅外脈沖數據 %1 %2';

Blockly.Msg.MPYTHON_BLUEBIT_IR_SEND_REPEAT_0 = '只發一次';
Blockly.Msg.MPYTHON_BLUEBIT_IR_SEND_REPEAT_1 = '持續發送';

Blockly.Msg.MPYTHON_BLUEBIT_IR_STOP_SEND_HELPURL = '';
Blockly.Msg.MPYTHON_BLUEBIT_IR_STOP_SEND_TOOLTIP = '當發送重復碼後，使用此函數來停止發送。';
Blockly.Msg.MPYTHON_BLUEBIT_IR_STOP_SEND_MESSAGE0 = '拓展板 停止發送紅外脈沖數據';

Blockly.Msg.MPYTHON_BLUEBIT_IR_LEARN_HELPURL = '';
Blockly.Msg.MPYTHON_BLUEBIT_IR_LEARN_TOOLTIP = '學習開始後，需等待4秒，之後返回學習結果。';
Blockly.Msg.MPYTHON_BLUEBIT_IR_LEARN_MESSAGE0 = '拓展板 開始紅外學習';

Blockly.Msg.MPYTHON_BLUEBIT_IR_GET_LEARN_STATUS_HELPURL = '';
Blockly.Msg.MPYTHON_BLUEBIT_IR_GET_LEARN_STATUS_TOOLTIP = '';
Blockly.Msg.MPYTHON_BLUEBIT_IR_GET_LEARN_STATUS_MESSAGE0 = '拓展板 紅外學習有結果 ?';

Blockly.Msg.MPYTHON_BLUEBIT_IR_GET_LEARN_DATA_HELPURL = '';
Blockly.Msg.MPYTHON_BLUEBIT_IR_GET_LEARN_DATA_TOOLTIP = '返回學習後的“紅外編碼數據”，須在 learn 函數後使用。';
Blockly.Msg.MPYTHON_BLUEBIT_IR_GET_LEARN_DATA_MESSAGE0 = '拓展板 學習到的紅外編碼數據';

Blockly.Msg.MPYTHON_MLX90615_SET_HELPURL = '';
Blockly.Msg.MPYTHON_MLX90615_SET_MESSAGE0 = 'MLX90615 非接觸測溫傳感器 設置發射系數%1';
Blockly.Msg.MPYTHON_MLX90615_SET_TOOLTIP = '';

Blockly.Msg.MPYTHON_MLX90615_GET_HELPURL = '';
Blockly.Msg.MPYTHON_MLX90615_GET_MESSAGE0 = 'MLX90615 非接觸測溫傳感器 獲取系數';
Blockly.Msg.MPYTHON_MLX90615_GET_TOOLTIP = '';

Blockly.Msg.MPYTHON_MLX90615_THERMOMETRY_HELPURL = '';
Blockly.Msg.MPYTHON_MLX90615_THERMOMETRY_MESSAGE0 = 'MLX90615 非接觸測溫傳感器 獲取測溫';
Blockly.Msg.MPYTHON_MLX90615_THERMOMETRY_TOOLTIP = '';

// 2021-06-23 MQ135拓展
Blockly.Msg.MPYTHON_MQ135_INIT_HELPURL = '';
Blockly.Msg.MPYTHON_MQ135_INIT_MESSAGE0 ='MQ135初始化 輸出引腳%1 溫度%2 ℃ 濕度%3 %';
Blockly.Msg.MPYTHON_MQ135_INIT_TOOLTIP = 'MQ135上的VCC 連接擴展板的電源口 V ，GND連接擴展板的地線口 G ，AO輸出連接擴展板的引腳 P0/P1(即選引腳)\nMQ135主要用於檢測空氣中的二氧化碳、酒精、苯、氮氧化物、氨等氣體的濃度';

Blockly.Msg.MPYTHON_MQ135_OPTIONS_MESSAGE0 = 'MQ135 返回 %1'
Blockly.Msg.MPYTHON_MQ135_OPTIONS_HELPURL = ''
Blockly.Msg.MPYTHON_MQ135_OPTIONS_TOOLTIP = '返回探測到的二氧化碳的百萬分之一(假設只有空氣中的二氧化碳) ppm濃度'

Blockly.Msg.MPYTHON_MQ135_GET_RZERO = '校正傳感器電阻';
Blockly.Msg.MPYTHON_MQ135_GET_CORRECTED_RZERO = '校正傳感器電阻(校準溫度、濕度)';
Blockly.Msg.MPYTHON_MQ135_GET_PPM = '二氧化碳、酒精、苯、氮氧化物、氨等氣體ppm濃度';
Blockly.Msg.MPYTHON_MQ135_GET_CORRECTED_PPM = '二氧化碳、酒精、苯、氮氧化物、氨等氣體ppm濃度(校準溫度、濕度)';

// 2021-07 6軸
Blockly.Msg.mpython_gyroscope_get_HELPURL = '';
Blockly.Msg.mpython_gyroscope_get_MESSAGE0 = '%1 軸角速度';
Blockly.Msg.mpython_gyroscope_get_TOOLTIP = 'v2.3版本以上掌控版適用';

Blockly.Msg.MPYTHON_GYROSCOPE_RANGE_16_DPS = '±16dps';
Blockly.Msg.MPYTHON_GYROSCOPE_RANGE_32_DPS = '±32dps';
Blockly.Msg.MPYTHON_GYROSCOPE_RANGE_64_DPS = '±64dps';
Blockly.Msg.MPYTHON_GYROSCOPE_RANGE_128_DPS = '±128dps';
Blockly.Msg.MPYTHON_GYROSCOPE_RANGE_256_DPS = '±256dps';
Blockly.Msg.MPYTHON_GYROSCOPE_RANGE_512_DPS = '±512dps';
Blockly.Msg.MPYTHON_GYROSCOPE_RANGE_1024_DPS = '±1024dps';
Blockly.Msg.MPYTHON_GYROSCOPE_RANGE_2048_DPS = '±2048dps';

Blockly.Msg.MPYTHON_GYROSCOPE_SET_RANGE_HELPURL = '';
Blockly.Msg.MPYTHON_GYROSCOPE_SET_RANGE_TOOLTIP = '設置角速度範圍，默認為 ±256dps。僅適用於掌控板2.3及以上版本';
Blockly.Msg.MPYTHON_GYROSCOPE_SET_RANGE_MESSAGE0 = '設置角速度範圍為 %1';

Blockly.Msg.MPYTHON_GYROSCOPE_SET_OFFSET_HELPURL = '';
Blockly.Msg.MPYTHON_GYROSCOPE_SET_OFFSET_TOOLTIP = '校準陀螺儀角速度計的3個軸(x,y,z)的角速度值偏差。\n一般情況下無需校準，只有遇到角速度偏差較大時才要校準。\n x , y , z 為調整偏差值，可修正範圍為 ±1024dps。\n註意：v2.3版本以後適用';
Blockly.Msg.MPYTHON_GYROSCOPE_SET_OFFSET_MESSAGE0 = '校準角速度值 %1 X軸偏差 %2 Y軸偏差 %3 Z軸偏差 %4';
