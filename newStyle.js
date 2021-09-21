var element = document.createElement('style'),
	sheet;

// Append style element to head
document.head.appendChild(element);

// Reference to the stylesheet
sheet = element.sheet;

var newStyle = 'span.subtitle-item-text {background: none !important;font-size: 45px;text-shadow: 2px 0 0 #1a1a1a, -2px 0 0 #1a1a1a, 0 2px 0 #1a1a1a, 0 -2px 0 #1a1a1a, 1px 1px #1a1a1a, -1px -1px 0 #1a1a1a, 1px -1px 0 #1a1a1a, -1px 1px 0 #1a1a1a;bottom: 30px;}';
sheet.insertRule(newStyle, 0);
