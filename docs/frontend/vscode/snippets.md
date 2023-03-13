# 代码片段

- 生成代码片段：[https://snippet-generator.app/](https://snippet-generator.app/)
- 内置变量：[https://code.visualstudio.com/docs/editor/userdefinedsnippets#_variables](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_variables)

```json
{
  "console.loggg": {
    // "scope": "javascript,typescript,html,vue",
    "prefix": "lg",
    "body": [
      "console.log(\"$TM_LINE_NUMBER->\", $1)"
    ],
    "description": "console.loggg"
  },
  "import a module": {
    "prefix": "im",
    "body": [
      "import ${2:module} from \"${1:xxx}\""
    ],
    "description": "import a module"
  },
  "export default module": {
    "prefix": "ex",
    "body": [
      "export default ${1:module}"
    ],
    "description": "export default module"
  },
  "forloop": {
    "prefix": "forloop",
    "body": [
      "for (const i = 0; i < ${1:arr}.length; i ++) {",
      "  $2",
      "}"
    ],
    "description": "forloop"
  },
  "forof": {
    "prefix": "forof",
    "body": [
      "for (const ${2:value} of ${1:arr}) {",
      "  $3",
      "}"
    ],
    "description": "forof"
  },
  "arr.forEach": {
    "prefix": "forEach",
    "body": [
      "${1:arr}.forEach(item => {",
      "  $2",
      "})"
    ],
    "description": "arr.forEach"
  },
  "arr.map": {
    "prefix": "map",
    "body": [
      "const ${1:data} = ${2:arr}.map(item => {$3})",
      ""
    ],
    "description": "arr.map"
  },
  "create arrow function": {
    "prefix": "ca",
    "body": [
      "const ${1:fn} = (${2:params}) => {$3}"
    ],
    "description": "create arrow function"
  },
  "new Promise": {
    "prefix": "promise",
    "body": [
      "new Promise((resolve, reject) => {$1})"
    ],
    "description": "new Promise"
  },

  // vue3
  "create vue3": {
		"prefix": "v3",
		"body": [
			"<script setup lang=\"ts\"></script>",
			"",
			"<template>",
			"  <div>${1:$TM_FILENAME_BASE}</div>",
			"</template>",
			"",
			"<style scoped></style>"
		],
		"description": "create vue3"
	},
	"define ref": {
		"prefix": "dref",
		"body": [
			"const ${1:state} = ref(${2:false})"
		],
		"description": "define ref"
	},
	"define reactive": {
		"prefix": "dreactive",
		"body": [
			"const ${1:state} = reactive({$2})"
		],
		"description": "define reactive"
	},

  // react
  "Create React Hook Component": {
		"prefix": "rh",
		"body": [
			"const ${1:$TM_FILENAME_BASE} = () => {",
			"  return <div>${1:$TM_FILENAME_BASE}</div>",
			"}",
			"",
			"export default ${1:$TM_FILENAME_BASE}",
			""
		],
		"description": "Create React Hook Component"
	},
	"Create React Hook Component Whit Props": {
		"prefix": "rhp",
		"body": [
			"import { FC } from \"react\"",
			"",
			"interface Props {}",
			"",
			"const ${1:$TM_FILENAME_BASE}: FC<Props> = () => {",
			"  return <div>${1:$TM_FILENAME_BASE}</div>",
			"}",
			"",
			"export default ${1:$TM_FILENAME_BASE}"
		],
		"description": "Create React Hook Component Whit Props"
	},
	"useState hook": {
		"prefix": "usestate",
		"body": [
			"const [${1:state}, set${1:state}] = useState(${2:false})"
		],
		"description": "useState hook"
	},
	"useEffect hook": {
		"prefix": "useeffect",
		"body": [
			"useEffect(() => {",
			"  ${1:xxx}",
			"}, [${2:deps}])"
		],
		"description": "useEffect hook"
	}
}
```