// Patch for fixing placeholder problem into refinery CMS

WYMeditor.XhtmlValidator._tags.input.attributes.type=/^(button|checkbox|file|hidden|image|password|radio|reset|submit|text|tel|search|url|email|datetime|date|month|week|time|datetime-local|number|range|color)$/
WYMeditor.XhtmlValidator._tags.input.attributes["5"]="placeholder"

WYMeditor.XhtmlValidator._tags.textarea.attributes= ["cols", "rows", "disabled", "name", "readonly","placeholder"]
